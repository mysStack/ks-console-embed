import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module791 from "./module-791.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import Module805 from "./module-805.js";
import Module866 from "./module-866.js";
import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import { getWorkloadStatus } from "./module-434.js";
import module1676 from "./module-1676.js";
const _ = ((Component_1)=>{
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
            key: "getDescription",
            value: function(e) {
                const a = getWorkloadStatus(e, e.module);
                const { status, reason } = a;
                if (reason) {
                    return <Module805 status={status} reason={t(reason)} data={e}/>;
                }
                const { updateTime, createTime } = e;
                if (updateTime) {
                    return t("UPDATED_AGO", {
                        diff: getLocalTime(updateTime).fromNow()
                    });
                }
                return t("CREATED_AGO", {
                    diff: getLocalTime(createTime).fromNow()
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, onDelete, onEdit, action } = props;
                if (module63(detail)) {
                    return null;
                }
                const o = module26(detail, 'annotations["deployment.kubernetes.io/revision"]');
                return <div className={module1676.card}><Module791 icon={ICON_TYPES[detail.module]} title={getDisplayName(detail)} description={this.getDescription(detail)}/><Module791 title=<Module866 data={detail} module={detail.module}/> description={t("STATUS")}/><Module791 title={o ? `#${o}` : "-"} description={t("REVISION_RECORD")}/><div className="buttons">{onDelete && <module186.Button type="flat" icon="trash" onClick={onDelete}/>}{onEdit && <module186.Button type="flat" icon="pen" onClick={onEdit}/>}{action}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default _;
_.propTypes = {
    className: module1.string,
    detail: module1.object
};
_.defaultProps = {
    detail: {},
    onDelete: function() {},
    onEdit: function() {}
};
