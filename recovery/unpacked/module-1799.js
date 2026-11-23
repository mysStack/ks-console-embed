import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-553.js";
import module1 from "./module-1.js";
import { Controller } from "./module-824.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import module26 from "./module-26.js";
import { stopAutoRefresh } from "./module-795.js";
import module3786 from "./module-3786.js";
const C = ((Controller_1)=>{
    module55(r, Controller_1);
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleChange = function(t) {
            const a = module26(e.props, "updateMonitorOptions", false);
            e.params = t;
            if (a) {
                e.props.updateMonitorOptions(t);
            }
            const enableAutoRefresh = !t.start && !t.end && e.props.enableAutoRefresh;
            e.setState({
                enableAutoRefresh,
                autoRefresh: false
            }, function() {
                stopAutoRefresh(module88(e));
                e.fetchData();
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.initParams(this.props);
                    this.props.onFetch(this.params);
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.visible) {
                    this.props.onFetch(this.params);
                }
            }
        },
        {
            key: "init",
            value: function() {
                this.initParams(this.props);
            }
        },
        {
            key: "renderCustomActions",
            value: function() {
                const onCancel = this.props.onCancel;
                return <module186.Button className={module3786.button} onClick={onCancel}><module186.Icon type="light" name="close" size={20}/></module186.Button>;
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const props = this.props;
                const { icon, title } = props;
                return <div className={module3786.header}><div className={module3786.title}><module186.Icon name={icon || "monitor"} size={16}/>{title || t("MONITORING")}</div>{this.renderOperations()}</div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const e = Controller.prototype.renderContent.call(this);
                return <div className={module3786.content}>{e}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { loading, onFetch: _onFetch, ...rest } = props;
                return <Module788 width={1162} bodyClassName={module3786.body} icon="monitor" onOk={this.handleSubmit} hideHeader hideFooter fullScreen {...rest}>{this.renderHeader()}<module186.Loading spinning={loading}>{this.renderContent()}</module186.Loading></Module788>;
            }
        }
    ]);
    return r;
})(Controller);
export default C;
C.propTypes = {
    ...Controller.propTypes,
    onCancel: module1.func
};
C.defaultProps = {
    ...Controller.defaultProps,
    times: 100,
    step: "5m",
    onCancel: function() {}
};
