import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module837 from "./module-837.js";
import module186 from "./module-186.js";
import module1816 from "./module-1816.js";
import { html, parse } from "./module-5776.js";
import "./module-3857.js";
import module3858 from "./module-3858.js";
const _ = ((e)=>{
    module55(a, e);
    var t = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.state = {
            mode: "line-by-line",
            diffHtml: e.getDiffHtml(e.props.datas)
        };
        e.handleModeChange = function(t) {
            return function() {
                return e.setState({
                    mode: t,
                    diffHtml: e.getDiffHtml(e.props.datas, {
                        outputFormat: t
                    })
                });
            };
        };
        return e;
    }
    module37(a, [
        {
            key: "getDiffHtml",
            value: function(e, n = {}) {
                const t = module96(e, 2);
                const a = t[0];
                const r = t[1];
                const l = module1816.createPatch("yaml", a, r, "", "", {
                    context: -1
                });
                const o = parse(l);
                return html(o, {
                    drawFileList: false,
                    ...n
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module837(e.datas, this.props.datas)) {
                    this.setState({
                        diffHtml: this.getDiffHtml(this.props.datas, {
                            outputFormat: this.state.mode
                        })
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, description } = props;
                return module553.default.createElement("div", null, module553.default.createElement("div", {
                    className: module3858.header
                }, module553.default.createElement(module186.Icon, {
                    name: "terminal",
                    size: 20
                }), module553.default.createElement("span", null, title), module553.default.createElement(module186.Icon, {
                    name: "chevron-down",
                    clickable: true,
                    size: 20,
                    onClick: this.handleModeChange("line-by-line")
                }), module553.default.createElement(module186.Icon, {
                    name: "chevron-right",
                    clickable: true,
                    size: 20,
                    onClick: this.handleModeChange("side-by-side")
                }), module553.default.createElement("span", {
                    className: "float-right"
                }, description)), module553.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.state.diffHtml
                    }
                }));
            }
        }
    ]);
    return a;
})(module553.Component);
export default _;
_.propTypes = {
    title: module1.string,
    datas: module1.arrayOf(module1.string)
};
_.defaultProps = {
    datas: [
        "",
        ""
    ]
};
