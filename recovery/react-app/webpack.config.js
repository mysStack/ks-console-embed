const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

function rewriteIllegalSuperThis() {
  return {
    name: "rewrite-illegal-super-this",
    visitor: {
      CallExpression(callPath) {
        const t = require("@babel/types");
        const args = callPath.node.arguments;
        if (args.length !== 2) return;
        if (!t.isThisExpression(args[0])) return;
        if (!t.isCallExpression(args[1]) || !t.isSuper(args[1].callee)) return;
        const ctor = callPath.findParent(
          (parent) => parent.isClassMethod() && parent.node.kind === "constructor"
        );
        if (!ctor) return;
        const statement = callPath.getStatementParent();
        if (!statement) return;
        statement.insertBefore(t.expressionStatement(t.cloneNode(args[1])));
        callPath.replaceWith(t.thisExpression());
      },
    },
  };
}

function wrapBrokenJsxAttributes() {
  return {
    name: "wrap-broken-jsx-attributes",
    visitor: {
      JSXAttribute(jsxPath) {
        const t = require("@babel/types");
        const value = jsxPath.node.value;
        if (!value) return;
        if (value.type === "JSXExpressionContainer" || value.type === "StringLiteral") {
          return;
        }
        jsxPath.get("value").replaceWith(t.jsxExpressionContainer(value));
      },
    },
  };
}

function rewriteWebpack4Runtime() {
  return {
    name: "rewrite-webpack4-runtime",
    visitor: {
      CallExpression(callPath) {
        const t = require("@babel/types");
        const callee = callPath.node.callee;
        if (t.isIdentifier(callee, { name: "require" })) {
          const arg = callPath.node.arguments[0];
          if (t.isNumericLiteral(arg)) {
            callPath.node.arguments[0] = t.stringLiteral(`./module-${arg.value}.js`);
          }
          return;
        }
        if (!t.isMemberExpression(callee) || callee.computed) return;
        if (!t.isIdentifier(callee.object, { name: "require" })) return;
        const key = callee.property.name;
        const args = callPath.node.arguments;
        if (key === "r" && args[0]) {
          const target = args[0];
          callPath.replaceWith(
            t.callExpression(
              t.functionExpression(
                null,
                [t.identifier("e")],
                t.blockStatement([
                  t.ifStatement(
                    t.logicalExpression(
                      "&&",
                      t.binaryExpression(
                        "!==",
                        t.unaryExpression("typeof", t.identifier("Symbol")),
                        t.stringLiteral("undefined")
                      ),
                      t.memberExpression(t.identifier("Symbol"), t.identifier("toStringTag"))
                    ),
                    t.expressionStatement(
                      t.callExpression(
                        t.memberExpression(t.identifier("Object"), t.identifier("defineProperty")),
                        [
                          t.identifier("e"),
                          t.memberExpression(t.identifier("Symbol"), t.identifier("toStringTag")),
                          t.objectExpression([
                            t.objectProperty(t.identifier("value"), t.stringLiteral("Module")),
                          ]),
                        ]
                      )
                    )
                  ),
                  t.expressionStatement(
                    t.callExpression(
                      t.memberExpression(t.identifier("Object"), t.identifier("defineProperty")),
                      [
                        t.identifier("e"),
                        t.stringLiteral("__esModule"),
                        t.objectExpression([
                          t.objectProperty(t.identifier("value"), t.booleanLiteral(true)),
                        ]),
                      ]
                    )
                  ),
                ])
              ),
              [target]
            )
          );
          return;
        }
        if (key === "d" && args.length >= 3) {
          callPath.replaceWith(
            t.callExpression(
              t.memberExpression(t.identifier("Object"), t.identifier("defineProperty")),
              [
                args[0],
                args[1],
                t.objectExpression([
                  t.objectProperty(t.identifier("enumerable"), t.booleanLiteral(true)),
                  t.objectProperty(t.identifier("get"), args[2]),
                ]),
              ]
            )
          );
        }
      },
    },
  };
}

function rewriteNamedReactImport() {
  return {
    name: "rewrite-named-react-import",
    visitor: {
      ImportDeclaration(importPath) {
        const t = require("@babel/types");
        const src = importPath.node.source.value || "";
        if (!/(?:^|\/)module-553(?:\.js)?$/.test(src) && src !== "react") {
          return;
        }
        const specifiers = importPath.node.specifiers;
        const named = specifiers.filter((s) => s.type === "ImportSpecifier");
        if (!named.length) return;
        const def = specifiers.find((s) => s.type === "ImportDefaultSpecifier");
        const namespace = specifiers.find(
          (s) => s.type === "ImportNamespaceSpecifier"
        );
        if (namespace) return;
        const nsId = importPath.scope.generateUidIdentifier("reactNS");
        const nextSpecs = [t.importNamespaceSpecifier(nsId)];
        importPath.node.specifiers = nextSpecs;
        const nodes = [];
        if (def) {
          nodes.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                def.local,
                t.logicalExpression(
                  "||",
                  t.memberExpression(t.cloneNode(nsId), t.identifier("default")),
                  t.cloneNode(nsId)
                )
              ),
            ])
          );
        }
        for (const specifier of named) {
          const imported = specifier.imported;
          const key = imported.name || imported.value;
          nodes.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                specifier.local,
                t.logicalExpression(
                  "||",
                  t.memberExpression(t.cloneNode(nsId), t.identifier(key)),
                  t.logicalExpression(
                    "&&",
                    t.memberExpression(t.cloneNode(nsId), t.identifier("default")),
                    t.memberExpression(
                      t.memberExpression(
                        t.cloneNode(nsId),
                        t.identifier("default")
                      ),
                      t.identifier(key)
                    )
                  )
                )
              ),
            ])
          );
        }
        importPath.insertAfter(nodes);
      },
    },
  };
}

function recoverDefaultImport() {
  const needed = new WeakSet();
  return {
    name: "recover-default-import",
    visitor: {
      Program: {
        exit(programPath, state) {
          if (!needed.has(state.file)) return;
          const t = require("@babel/types");
          const filename = state.filename || state.file.opts.filename;
          const helperAbs = path.resolve(__dirname, "src/recover-interop.js");
          let rel = path.relative(path.dirname(filename), helperAbs).replace(/\\/g, "/");
          if (!rel.startsWith(".")) rel = `./${rel}`;
          programPath.unshiftContainer(
            "body",
            t.importDeclaration(
              [
                t.importSpecifier(
                  t.identifier("__recoverInterop"),
                  t.identifier("__recoverInterop")
                ),
              ],
              t.stringLiteral(rel)
            )
          );
        },
      },
      ImportDeclaration(importPath, state) {
        const t = require("@babel/types");
        const specifiers = importPath.node.specifiers;
        if (!specifiers.length) return;
        const def = specifiers.find((s) => s.type === "ImportDefaultSpecifier");
        const namespace = specifiers.find((s) => s.type === "ImportNamespaceSpecifier");
        if (!def || namespace) return;

        const local = def.local;
        const nsId = importPath.scope.generateUidIdentifier(local.name);
        const named = specifiers.filter((s) => s.type === "ImportSpecifier");
        importPath.node.specifiers = [t.importNamespaceSpecifier(nsId)];
        needed.add(state.file);

        const nodes = [
          t.variableDeclaration("const", [
            t.variableDeclarator(
              local,
              t.callExpression(t.identifier("__recoverInterop"), [t.cloneNode(nsId)])
            ),
          ]),
        ];
        for (const specifier of named) {
          const imported = specifier.imported;
          const key = imported.name || imported.value;
          nodes.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                specifier.local,
                t.memberExpression(t.cloneNode(nsId), t.identifier(key))
              ),
            ])
          );
        }
        importPath.insertAfter(nodes);
      },
    },
  };
}

module.exports = {
  entry: path.resolve(__dirname, "src/bootstrap.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.[contenthash:8].js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".cjs", ".mjs", ".js", ".jsx", ".json"],
    alias: {
      pages: path.resolve(__dirname, "src/pages"),
      components: path.resolve(__dirname, "src/components"),
      stores: path.resolve(__dirname, "src/stores"),
      actions: path.resolve(__dirname, "src/actions"),
      utils: path.resolve(__dirname, "src/utils"),
      configs: path.resolve(__dirname, "src/configs"),
      core: path.resolve(__dirname, "src/core"),
      dmp: path.resolve(__dirname, "src/dmp"),
      chunks: path.resolve(__dirname, "src/chunks"),
      unpacked: path.resolve(__dirname, "src/unpacked"),
      "pages/": path.resolve(__dirname, "src/pages") + "/",
      "components/": path.resolve(__dirname, "src/components") + "/",
      "stores/": path.resolve(__dirname, "src/stores") + "/",
      "actions/": path.resolve(__dirname, "src/actions") + "/",
      "utils/": path.resolve(__dirname, "src/utils") + "/",
      "configs/": path.resolve(__dirname, "src/configs") + "/",
      "core/": path.resolve(__dirname, "src/core") + "/",
      "dmp/": path.resolve(__dirname, "src/dmp") + "/",
      "chunks/": path.resolve(__dirname, "src/chunks") + "/",
      "unpacked/": path.resolve(__dirname, "src/unpacked") + "/",
      [path.resolve(__dirname, "src/unpacked/module-139.js")]: path.resolve(
        __dirname,
        "src/shims/webpack4-nmd.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-851.js")]: path.resolve(
        __dirname,
        "src/components/Cards/Pods/index.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5045.js")]: path.resolve(
        __dirname,
        "src/components/Modals/ProjectSelect/index.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-553.js")]: require.resolve("react"),
      [path.resolve(__dirname, "src/unpacked/module-106.js")]: require.resolve("react-dom"),
      [path.resolve(__dirname, "src/unpacked/module-14.js")]: path.resolve(__dirname, "src/shims/mobx.js"),
      [path.resolve(__dirname, "src/unpacked/module-239.js")]: path.resolve(
        __dirname,
        "src/shims/mobx-react.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-186.js")]: path.resolve(
        __dirname,
        "src/shims/kube-design.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2.js")]: path.resolve(
        __dirname,
        "src/shims/lodash.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1.js")]: path.resolve(
        __dirname,
        "src/shims/prop-types.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-3.js")]: path.resolve(
        __dirname,
        "src/shims/classnames.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-243.js")]: path.resolve(
        __dirname,
        "src/shims/moment.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-244.js")]: path.resolve(
        __dirname,
        "src/shims/qs.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-757.js")]: path.resolve(
        __dirname,
        "src/shims/qs-stringify.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-83.js")]: path.resolve(
        __dirname,
        "src/shims/history.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-47.js")]: path.resolve(
        __dirname,
        "src/shims/react-router.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-433.js")]: path.resolve(
        __dirname,
        "src/shims/react-router-dom.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-431.js")]: path.resolve(
        __dirname,
        "src/shims/mobx-react-router.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-41.js")]: path.resolve(
        __dirname,
        "src/shims/regenerator-runtime.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2034.js")]: path.resolve(
        __dirname,
        "src/shims/react-modal.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1270.js")]: path.resolve(
        __dirname,
        "src/shims/js-yaml.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-293.js")]: path.resolve(
        __dirname,
        "src/shims/js-base64.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2343.js")]: path.resolve(
        __dirname,
        "src/shims/markdown-it.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-910.js")]: path.resolve(
        __dirname,
        "src/shims/file-saver.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5771.js")]: path.resolve(
        __dirname,
        "src/shims/react-color.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5731.js")]: path.resolve(
        __dirname,
        "src/shims/xterm.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1367.js")]: path.resolve(
        __dirname,
        "src/shims/react-copy-to-clipboard.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-3472.js")]: path.resolve(
        __dirname,
        "src/shims/react-virtualized-AutoSizer.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-3474.js")]: path.resolve(
        __dirname,
        "src/shims/react-virtualized-CellMeasurerCache.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-3475.js")]: path.resolve(
        __dirname,
        "src/shims/react-virtualized-CellMeasurer.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5775.js")]: path.resolve(
        __dirname,
        "src/shims/react-virtualized-List.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2165.js")]: path.resolve(
        __dirname,
        "src/shims/react-resize-detector.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2882.js")]: path.resolve(
        __dirname,
        "src/shims/react-input-autosize.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-837.js")]: path.resolve(
        __dirname,
        "src/shims/react-fast-compare.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2465.js")]: path.resolve(
        __dirname,
        "src/shims/for-editor.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5774.js")]: path.resolve(
        __dirname,
        "src/shims/react-mentions.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2053.js")]: path.resolve(
        __dirname,
        "src/shims/react-file-reader.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2773.js")]: path.resolve(
        __dirname,
        "src/shims/sortablejs.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1635.js")]: path.resolve(
        __dirname,
        "src/shims/react-sortablejs.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5776.js")]: path.resolve(
        __dirname,
        "src/shims/diff2html.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-478.js")]: path.resolve(
        __dirname,
        "src/shims/netmask.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1553.js")]: path.resolve(
        __dirname,
        "src/shims/path-to-regexp.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1892.js")]: path.resolve(
        __dirname,
        "src/shims/dagre.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5299.js")]: path.resolve(
        __dirname,
        "src/shims/react-ace.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5305.js")]: path.resolve(
        __dirname,
        "src/shims/ace-webpack-resolver.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1123.js")]: path.resolve(
        __dirname,
        "src/shims/ansi_up.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5773.js")]: path.resolve(
        __dirname,
        "src/shims/d3-zoom.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-893.js")]: path.resolve(
        __dirname,
        "src/shims/d3-selection.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1258.js")]: path.resolve(
        __dirname,
        "src/shims/d3-shape.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2106.js")]: path.resolve(
        __dirname,
        "src/shims/prismjs.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2107.js")]: path.resolve(
        __dirname,
        "src/shims/prism-css.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-662.js")]: path.resolve(
        __dirname,
        "src/shims/nanoid-generate.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-831.js")]: path.resolve(
        __dirname,
        "src/shims/fast-copy.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1383.js")]: path.resolve(
        __dirname,
        "src/shims/memoizee.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1387.js")]: path.resolve(
        __dirname,
        "src/shims/strip-ansi.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1816.js")]: path.resolve(
        __dirname,
        "src/shims/diff.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2104.js")]: path.resolve(
        __dirname,
        "src/shims/fuse.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-311.js")]: path.resolve(
        __dirname,
        "src/shims/fuse.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-3110.js")]: path.resolve(
        __dirname,
        "src/shims/async-validator.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-238.js")]: path.resolve(
        __dirname,
        "src/shims/async-validator.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2016.js")]: path.resolve(
        __dirname,
        "src/shims/lodash.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-5764.js")]: path.resolve(
        __dirname,
        "src/shims/xterm-fit.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-756.js")]: path.resolve(
        __dirname,
        "src/shims/whatwg-fetch.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-2076.js")]: path.resolve(
        __dirname,
        "src/shims/big.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-717.js")]: path.resolve(
        __dirname,
        "src/shims/semver.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-761.js")]: require.resolve("react-is"),
      [path.resolve(__dirname, "src/unpacked/module-749.js")]: path.resolve(
        __dirname,
        "src/shims/luxon.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-264.js")]: path.resolve(
        __dirname,
        "src/shims/lodash-isPlainObject.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-606.js")]: path.resolve(
        __dirname,
        "src/shims/lodash-baseIsNative.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-129.js")]: path.resolve(
        __dirname,
        "src/shims/lodash-getNative.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-164.js")]: path.resolve(
        __dirname,
        "src/shims/lodash-getTag.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-958.js")]: path.resolve(
        __dirname,
        "src/chunks/vendor/lodash-isBuffer.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1056.js")]: path.resolve(
        __dirname,
        "src/chunks/vendor/lodash-nodeUtil.js"
      ),
      [path.resolve(__dirname, "src/unpacked/module-1648.js")]: path.resolve(
        __dirname,
        "src/chunks/vendor/lodash-cloneBuffer.js"
      ),
      ...Object.fromEntries(
        [5720, 5721, 5722, 5723, 5724, 5725, 5726, 5727, 5728].map((id) => [
          path.resolve(__dirname, `src/unpacked/module-${id}.js`),
          path.resolve(__dirname, "src/shims/ace-side-effect.js"),
        ])
      ),
      ...require("./corejs-aliases.js"),
      ...require("./corejs-shim-aliases.js"),
      ...require("./recharts-aliases.js"),
    },
  },
  module: {
    parser: {
      javascript: {
        exportsPresence: false,
        importExportsPresence: false,
      },
    },
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: (resource) =>
          /(?:^|\/)loadSelector\.js$/.test(resource) ||
          /(?:^|\/)loadModal\.js$/.test(resource),
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            configFile: false,
            compact: false,
            sourceType: "unambiguous",
            plugins: [
              wrapBrokenJsxAttributes,
              rewriteIllegalSuperThis,
              rewriteWebpack4Runtime,
              recoverDefaultImport,
              "@babel/plugin-transform-modules-commonjs",
            ],
            presets: [
              [
                "@babel/preset-react",
                { runtime: "classic", throwIfNamespace: false },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            test: /\.module\.css$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { modules: { exportLocalsConvention: "camelCaseOnly" } },
              },
            ],
          },
          { use: ["style-loader", "css-loader"] },
        ],
      },
      {
        test: /\.(woff2?|ttf|eot|svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new webpack.ProvidePlugin({
      React: "react",
      regeneratorRuntime: path.resolve(__dirname, "src/shims/regenerator-runtime.js"),
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
    }),
  ],
  performance: { hints: false },
  stats: "errors-warnings",
  devServer: {
    host: "0.0.0.0",
    port: 8099,
    historyApiFallback: true,
    hot: false,
    client: { overlay: { errors: true, warnings: false } },
  },
};
