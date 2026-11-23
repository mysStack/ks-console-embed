import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import { Link, withRouter } from "unpacked/module-433.js";
import Module791 from "components/Base/Text";
import Module796 from "components/Base/Status";
import Module836 from "components/Base/Image";
import Module805 from "unpacked/module-805.js";
import { getLocalTime } from "utils/index";
import { getWorkloadStatus } from "utils/status";
import { trigger } from "utils/action";
import { RadonDBAppId } from "unpacked/module-817.js";
import module1974 from "unpacked/module-1974.js";
let o;
let c;
let s;
const T = trigger(o = withRouter((s = c = ((PureComponent_1)=>{
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
                    return t("CREATED_AGO", {
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
                const { detail, switchShowMonitor, app_id } = props;
                if (!detail) {
                    return null;
                }
                const detail_roleText = detail.roleText;
                const c = detail.spec.cpu ? detail.spec.cpu.includes("m") ? detail.spec.cpu : `${detail.spec.cpu}Core` : "-";
                const detail_status = detail.status;
                return <Link to={`${this.prefix}/${detail.name}`}><div className={module1974.item}><Module791 icon="pod" title={detail.name} description={this.getDescription({
                    createTime: detail.creationTimestamp
                })}/><Module791 title=<Module796 type={detail_status} name={t(String(detail_status).toUpperCase())} flicker/> description={t("STATUS")}/><Module791 title={detail.ip} description={t("POD_IP_ADDRESS_SCAP")}/>{app_id !== RadonDBAppId.ClickHouse && <Module791 title={detail_roleText} description={t("TYPE")}/>}<Module791 title={`${c} ${detail.spec.memory}`} description={t("RESOURCES")}/><Module791 title={detail.capacity} description={t("CAPACITY")}/>{detail.noMonitoring ? <div className={module1974["monitor-btn"]}/> : <Module791 className={module1974["monitor-btn"]} title=<module186.Button type="flat" onClick={switchShowMonitor}><Module836 src="/assets/cloudsat.svg" iconSize={16}/></module186.Button>/>}</div></Link>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                const n = `/clusters/${cluster}/projects/${namespace}/pods`;
                if (workspace) {
                    return `/${workspace}${n}`;
                }
                return n;
            }
        }
    ]);
    return r;
})(PureComponent), c.propTypes = {
    className: module1.string,
    detail: module1.object,
    switchShowMonitor: module1.func,
    deleteNode: module1.func,
    app_id: module1.string
}, c.defaultProps = {
    detail: {}
}, o = s)) || o) || o;
export default T;
