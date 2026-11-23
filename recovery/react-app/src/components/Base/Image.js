import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-75.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-1080.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module2042 from "unpacked/module-2042.js";
const h = ((Component_1)=>{
    module55(a, Component_1);
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
            failed: false
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                if (this.img) {
                    this.img.onerror = function() {
                        _this.setState({
                            failed: true
                        });
                    };
                }
            }
        },
        {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return e.src !== this.props.src || Boolean(t.failed) || Boolean(e.iconLetter);
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const _this = this;
                if (e.src !== this.props.src) {
                    this.setState({
                        failed: false
                    }, function() {
                        if (_this.img) {
                            _this.img.onerror = function() {
                                _this.setState({
                                    failed: true
                                });
                            };
                        }
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.img && this.img.onerror) {
                    this.img.onerror = null;
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { src, iconLetter, className, iconSize, isBase64Str, ...rest } = props;
                const failed = this.state.failed;
                let src_1 = src;
                if (String(src).startsWith("att-")) {
                    src_1 = `/kapis/application.kubesphere.io/v2/attachments/${src}?filename=raw`;
                }
                if (isBase64Str && !src_1.includes("/attachments/")) {
                    src_1 = `data:image/png;data:image/svg;data:image/jpg;base64,${src}`;
                }
                if (failed || !src) {
                    const style = {
                        width: `${iconSize}px`,
                        height: `${iconSize}px`
                    };
                    const v = iconLetter.substr(0, 1).toLocaleUpperCase();
                    if (v) {
                        const g = iconSize / 2;
                        style.fontSize = `${g}px`;
                        style.padding = `${iconSize / 4}px`;
                        style.lineHeight = `${g > 12 ? g : 12}px`;
                        return <span className={module3(module2042.letter, className)} style={style} {...rest}>{v}</span>;
                    }
                    return null;
                }
                return <img src={src_1} data-origin-url={src_1} className={module3(module2042.img, className)} ref={function(t) {
                    _this.img = t;
                }} {...rest}/>;
            }
        }
    ]);
    return a;
})(Component);
export default h;
h.propTypes = {
    className: module1.string,
    iconLetter: module1.string,
    iconSize: module1.number,
    isBase64Str: module1.bool,
    src: module1.string
};
h.defaultProps = {
    iconSize: 32,
    src: "",
    iconLetter: "",
    isBase64Str: false
};
