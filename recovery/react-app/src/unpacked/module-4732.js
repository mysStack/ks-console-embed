import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import { getLocalTime } from "utils/index";
import module186 from "unpacked/module-186.js";
import Module1336 from "unpacked/module-1336.js";
import module4733 from "unpacked/module-4733.js";
const y = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
        e.handleExpandExtra = function() {
            const e_props = e.props;
            const t_detail = e_props.detail;
            e_props.onExpand(t_detail.uid);
        };
        return e;
    }
    module37(r, [
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const e_detail = props.detail;
                const { name, createTime } = e_detail;
                const { isExpand, index } = props;
                return <div className={module4733.content} onClick={this.handleExpandExtra}><div className={module4733.detail}><module186.Icon name="backup" size={40} type={isExpand ? "light" : "dark"}/><div className={module4733.text}><div className={module4733.title}>{name}{index === 0 && <module186.Tag className="margin-l8" type="primary">{t("RUNNING")}</module186.Tag>}</div><p className={module4733.desc}>{t("REVISION_RECORD")}</p></div><div className={module4733.text}><div className={module4733.title}>{getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")}</div><p className={module4733.desc}>{t("CREATION_TIME")}</p></div></div><div className={module4733.arrow}><module186.Icon name="chevron-down" type={isExpand ? "light" : ""} size={20}/></div></div>;
            }
        },
        {
            key: "renderExtraContent",
            value: function() {
                const detail = this.props.detail;
                const mode = module26(detail, 'annotations["springcloud.kubesphere.io/extension"]', "");
                const config = Object.entries(detail.data)[0][1];
                return <div className={module4733.itemExtra}><Module1336 data={{
                    mode,
                    config
                }} title={t("CONFIGURATION_CONTNET_TYPE", {
                    type: mode.toUpperCase()
                })} readOnly showSelect={false}/></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, isExpand } = props;
                return <div className={module3(module4733.item, className, module31({}, module4733.expanded, isExpand))}>{this.renderContent()}{this.renderExtraContent()}</div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default y;
y.propTypes = {
    className: module1.string,
    detail: module1.object,
    isExpand: module1.bool,
    onExpand: module1.func
};
y.defaultProps = {
    detail: {},
    isExpand: false,
    onExpand: function() {}
};
