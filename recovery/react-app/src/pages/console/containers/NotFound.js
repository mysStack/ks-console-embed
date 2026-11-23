import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module3639 from "unpacked/module-3639.js";
const n = ((Component_1)=>{
    module55(u, Component_1);
    var e = ((M)=>{
        const e = (()=>{
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
            } catch (M) {
                return false;
            }
        })();
        return function() {
            let t;
            const u = module51(M);
            if (e) {
                const N = module51(this).constructor;
                t = Reflect.construct(u, arguments, N);
            } else {
                t = u.apply(this, arguments);
            }
            return module56(this, t);
        };
    })(u);
    function u(...N) {
        let M;
        module36(this, u);
        M = e.call(this, ...N);
        M.state = {
            time: 10
        };
        return M;
    }
    module37(u, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.interval = setInterval(()=>{
                    _this.setState(function({ time }) {
                        return {
                            time: Math.max(time - 1, 0)
                        };
                    });
                }, 1100);
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                if (this.state.time === 0) {
                    if (this.interval) {
                        clearInterval(this.interval);
                    }
                    location.href = "/";
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.interval) {
                    clearInterval(this.interval);
                }
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module3639.wrapper}><img className={module3639.image} src="/assets/empty-card.svg" alt=""/><div className={module3639.text}><div className="h1">Not Found</div><p>{t.html("NOT_FOUND_DESC", {
                    time: this.state.time,
                    link: "/"
                })}</p></div></div>;
            }
        }
    ]);
    return u;
})(Component);
export default n;
