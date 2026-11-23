import "unpacked/module-15.js";
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
import module186 from "unpacked/module-186.js";
import Module791 from "components/Base/Text";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import Module805 from "unpacked/module-805.js";
import Module866 from "unpacked/module-866.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import { getDisplayName, getLocalTime } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import { getWorkloadStatus } from "utils/status";
import module1676 from "unpacked/module-1676.js";
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
