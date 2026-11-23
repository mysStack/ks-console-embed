// Webpack 4 node-module-decorator (unpacked module-139) defines getter-only
// `loaded`/`id` on the module object. Webpack 5 then assigns `module.loaded = true`
// and the throw unmounts the React tree. Webpack 5 already provides writable fields.
export default function webpack4Nmd(mod) {
  return mod;
}
