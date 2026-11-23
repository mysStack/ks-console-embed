import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
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
import module26 from "unpacked/module-26.js";
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module1 from "unpacked/module-1.js";
import { observer } from "unpacked/module-239.js";
import Module791 from "components/Base/Text";
import Module805 from "unpacked/module-805.js";
import Module866 from "unpacked/module-866.js";
import { getDisplayName, getLocalTime } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import { getWorkloadStatus } from "utils/status";
import module1206 from "stores/workload/revision";
import module1390 from "unpacked/module-1390.js";
import module1820 from "unpacked/module-1820.js";
let l;
let u;
let o;
const N = observer((o = u = ((Component_1)=>{
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
        t.fetchData = function(e) {
            t.revisionStore.fetchCurrentRevision(e);
        };
        t.revisionStore = e.isEdgeWize ? new module1390(e.detail.module) : new module1206(e.detail.module);
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData(this.props.detail);
            }
        },
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
                    return t("UPDATED_TIME", {
                        value: getLocalTime(updateTime).format("YYYY-MM-DD HH:mm:ss")
                    });
                }
                return t("CREATED_TIME", {
                    diff: getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, prefix } = props;
                if (!detail) {
                    return null;
                }
                const n = module26(detail, "module");
                return <div className={module1820.item}><Module791 icon={ICON_TYPES[detail.module]} title=<Link to={`${prefix}/${detail.module}/${detail.name}`}>{getDisplayName(detail)}</Link> description={this.getDescription(detail)}/><Module791 title={n ? t(`WORKLOAD_TYPE_${n.toUpperCase()}`) : "-"} description={t("TYPE")}/><Module791 title=<Module866 data={detail} module={detail.module}/> description={t("STATUS")}/><Module791 title={this.curRevision} description={t("REVISION_RECORD")}/></div>;
            }
        },
        {
            key: "curRevision",
            get: function() {
                const currentRevision = this.revisionStore.currentRevision;
                return `#${currentRevision}`;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    isEdgeWize: module1.bool,
    className: module1.string,
    prefix: module1.string,
    detail: module1.object
}, u.defaultProps = {
    prefix: "",
    detail: {}
}, l = o)) || l;
export default N;
