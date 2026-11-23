import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module856 from "./module-856.js";
import module159 from "./module-159.js";
import module186 from "./module-186.js";
import Module848 from "./module-848.js";
import module2273 from "./module-2273.js";
const O = ({ data, total, isEnd })=>{
    if (module159(isEnd)) {
        return !module63(data) && data.length < total;
    }
    return !isEnd;
};
const S = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
    })(r);
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.isElementAtBottom = function(e) {
            return Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight) <= 1;
        };
        t.handleScroll = module856(function() {
            const e = module26(t.containerRef, "current", {});
            if (O(t.props) && t.isElementAtBottom(e) && t.finish) {
                t.finish = false;
                t.setState({
                    loadMore: true
                }, module44(module41.mark(function* e() {
                    let a;
                    let r;
                    let n;
                    a = t.props;
                    r = a.page;
                    n = a.onFetch;
                    yield n({
                        more: true,
                        page: r + 1
                    });
                    t.finish = true;
                })));
            }
        }, 300);
        t.state = {
            loading: e.loading,
            loadMore: false
        };
        t.containerRef = createRef();
        t.finish = true;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (!this.props.noMount) {
                    this.props.onFetch();
                }
            }
        },
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { empty, data, loading, children } = props;
                const loadMore = this.state.loadMore;
                if (loading && !loadMore) {
                    return null;
                }
                if (module63(data) || !children) {
                    return empty || <Module848 className={module2273.empty} desc={t("NO_DATA")}/>;
                }
                return children;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { wrapperClassName, className, width, minHeight, height } = props;
                const state = this.state;
                const { loading, loadMore } = state;
                const style = {
                    width,
                    height
                };
                return <div className={module3(module2273.wrapper, wrapperClassName)}><module186.Loading spinning={loading}><div ref={this.containerRef} className={module2273.main} style={style} onScrollCapture={this.handleScroll}><div className={module3(module2273.content, className)} style={{
                    minHeight: minHeight || height
                }}>{this.renderContent()}</div>{loadMore && <div className={module2273.loadMore}><module186.Loading/></div>}</div></module186.Loading></div>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (t.loadMore) {
                    return {
                        loading: false,
                        loadMore: O(e)
                    };
                }
                if (e.loading !== t.loading) {
                    return {
                        loading: e.loading
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    wrapperClassName: module1.string,
    width: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    height: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    minHeight: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    empty: module1.oneOfType([
        module1.string,
        module1.element,
        module1.node
    ]),
    loading: module1.bool.isRequired,
    data: module1.array.isRequired,
    total: module1.number.isRequired,
    page: module1.number.isRequired,
    onFetch: module1.func.isRequired
};
S.defaultProps = {
    wrapperClassName: "",
    width: "100%",
    height: "100%",
    isEmpty: false,
    loading: true,
    data: [],
    total: 10,
    page: 1,
    noMount: false,
    onFetch: function() {}
};
