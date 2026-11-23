import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-27.js";
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
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module194 from "./module-194.js";
import { cacheFunc } from "./module-52.js";
import { startAutoRefresh, stopAutoRefresh } from "./module-795.js";
import module186 from "./module-186.js";
import Module802 from "./module-802.js";
import Module848 from "./module-848.js";
import module3759 from "./module-3759.js";
const C = ((Component_1)=>{
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.fetchData = function(e = {}) {
            r.props.onFetch(e);
        };
        r.handleTabClick = function(e) {
            return cacheFunc(`_tab_${e}`, function() {
                r.setState({
                    activeIndex: Number(e)
                });
            }, module88(r));
        };
        r.state = {
            activeIndex: 0
        };
        r.fetchData();
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                startAutoRefresh(this, {
                    interval: 10000,
                    leading: false
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                stopAutoRefresh(this);
            }
        },
        {
            key: "renderTabList",
            value: function() {
                const _this = this;
                const tabOptions = this.props.tabOptions;
                const activeIndex = this.state.activeIndex;
                if (module63(tabOptions)) {
                    return null;
                }
                return <div className={module3759.tabList}>{tabOptions.map((t, r)=>{
                    const active = r === activeIndex;
                    const { component: Component, render } = t;
                    const i = {
                        ...t.props,
                        active
                    };
                    return <div key={r} className={module3(module3759.tab, module31({}, module3759.active, active))} onClick={_this.handleTabClick(r)}><i className={module3759.img}/><div className={module3759.inner}>{module194(render) ? render(i) : <Component {...i}/>}</div></div>;
                })}</div>;
            }
        },
        {
            key: "renderTabContent",
            value: function() {
                const contentOptions = this.props.contentOptions;
                const t = contentOptions[this.state.activeIndex] || {};
                const { component: Component1, render } = t;
                const n = {
                    ...t.props
                };
                return <div className={module3759.tabContent}><div className={module3759.inner}>{module63(contentOptions) ? <Module848/> : module194(render) ? render(n) : <Component1 {...n}/>}</div></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, title, loading } = props;
                return <Module802 className={module3(module3759.card, className)} title={title}><module186.Loading spinning={loading}><div className={module3759.content}>{this.renderTabList()}{this.renderTabContent()}</div></module186.Loading></Module802>;
            }
        }
    ]);
    return a;
})(Component);
export default C;
C.propTypes = {
    title: module1.string,
    tabOptions: module1.array,
    contentOptions: module1.array,
    loading: module1.bool,
    refreshing: module1.bool,
    onFetch: module1.func
};
C.defaultProps = {
    title: "",
    tabOptions: [],
    contentOptions: [],
    loading: true,
    refreshing: false,
    onFetch: function() {}
};
