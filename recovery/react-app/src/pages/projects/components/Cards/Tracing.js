import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import Module4777 from "pages/projects/components/Cards/Tracing/Item";
import module1918 from "unpacked/module-1918.js";
const g = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "shouldComponentUpdate",
            value: function(e) {
                return e.loading !== this.props.loading;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { data, onItemClick } = props;
                if (module63(data)) {
                    return null;
                }
                return <div className={module1918.cardContent}>{data.map((detail)=><Module4777 key={detail.traceID} detail={detail} onClick={onItemClick}/>)}</div>;
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                return <div className={module1918.empty}><div><div className={module1918.icon}><module186.Icon name="target" size={40}/></div><p><strong>{t("NO_DATA")}</strong></p><p>{t("TRACING_NO_DATA_DESC")}</p></div></div>;
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const operations = this.props.operations;
                return <div className={module1918.cardHeader}>{operations && <div className={module1918.operations}>{operations}</div>}{t("TRACING")}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const loading = this.props.loading;
                return <Module802 className={module1918.tracing} header={this.renderHeader()} empty={this.renderEmpty()} loading={loading}>{this.renderContent()}</Module802>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    className: module1.string,
    data: module1.array,
    loading: module1.bool,
    operations: module1.oneOfType([
        module1.string,
        module1.element,
        module1.node
    ]),
    onItemClick: module1.func
};
g.defaultProps = {
    prefix: "",
    data: [],
    onItemClick: function() {},
    loading: false
};
