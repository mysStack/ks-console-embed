import "unpacked/module-15.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-85.js";
import "unpacked/module-4.js";
import "unpacked/module-319.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import Module791 from "components/Base/Text";
import { ClusterTagGroup } from "unpacked/module-925.js";
import Module816 from "components/Clusters/ClusterTitle";
import { getDomTitle, getLocalTime } from "utils/index";
import Module3666 from "unpacked/module-3666.js";
import { ReactComponent } from "unpacked/module-3674.js";
import module3675 from "unpacked/module-3675.js";
export default function(e) {
    const AComponent = (data, n)=>{
        const o = e.itemActions.map((e)=>{
            if (e.key === "edit" && n) {
                return <module186.Tooltip key={`${e.key}_tooptip`} content=<div>{t("KUBESPHERE_VERSION_ALERT")} </div> style={{
                    minWidth: "300px"
                }}><module186.Menu.MenuItem key={e.key} disabled><module186.Icon name={e.icon}/> <span data-test={`table-item-${e.key}`}>{e.text}</span></module186.Menu.MenuItem></module186.Tooltip>;
            }
            return <module186.Menu.MenuItem key={e.key}><module186.Icon name={e.icon}/> <span data-test={`table-item-${e.key}`}>{e.text}</span></module186.Menu.MenuItem>;
        });
        if (o.every((e)=>e === null)) {
            return null;
        }
        return <module186.Menu onClick={r(data)}>{o}</module186.Menu>;
    };
    var r = (t)=>function(a, r) {
            const n = e.itemActions.find((e)=>e.key === r);
            if (n && n.onClick) {
                n.onClick(t);
            }
        };
    const { data, tagList, checked, showCheckbox, isEdgeWize, isMainCluster } = e;
    const O = isMainCluster !== undefined && isMainCluster;
    const e_hideColumns = e.hideColumns;
    const C = e_hideColumns === undefined ? [] : e_hideColumns;
    const e_hostKsVersion = e.hostKsVersion;
    const data_expiredDay = data.expiredDay;
    const isExpired = data_expiredDay && data_expiredDay < 0;
    const T = data_expiredDay && data_expiredDay <= 10 && data_expiredDay >= 0;
    const R = C.reduce((acc, item)=>{
        if (isEdgeWize && item === "tags") {
            return acc;
        }
        return h[item] + acc;
    }, 0);
    const I = e_hostKsVersion && e_hostKsVersion !== data.configz.ksVersion;
    return <li className={module3675.wrapper} data-test="cluster-item"><module186.Columns><module186.Column className="is-4 flexbox items-center" style={{
        width: `${v(2.5, R)}%`
    }}>{!!showCheckbox && <module186.Checkbox className="margin-r8" onChange={function(t) {
        const { onChangeChecked, data } = e;
        if (onChangeChecked) {
            onChangeChecked(data.name, t);
        }
    }} checked={data.tags.length < 5 && checked} disabled={data.tags.length >= 5}/>}<Module816 className="flex" cluster={data} onClick={function() {
        const { data, onEnter } = e;
        if (onEnter) {
            onEnter(data.name, data.provider);
        }
    }} isEdgeWize={isEdgeWize} isExpired={isExpired}/></module186.Column>{!C.includes("nodeCount") && <module186.Column className="is-1" style={{
        width: `${v(isEdgeWize ? 2 : 1, R)}%`
    }}><Module791 title={data.nodeCount} description={t("NODE_COUNT")}/></module186.Column>}{!C.includes("version") && <module186.Column className="is-1" style={{
        width: `${v(isEdgeWize ? 2 : 1, R)}%`
    }}><Module791 title={data.kubernetesVersion} description={t("KUBERNETES_VERSION")}/></module186.Column>}{O && !C.includes("ksVersion") && <module186.Column className="is-1" style={{
        width: `${v(1.5, R)}%`
    }}><Module791 title={data.configz.ksVersion} description={t("KUBESPHERE_VERSION")} tooltipIcon={I ? function() {
        return <module186.Tooltip content=<div>{t("KUBESPHERE_VERSION_ALERT")} </div> style={{
            minWidth: "300px"
        }}><div><ReactComponent width={16} height={16}/></div></module186.Tooltip>;
    } : null}/></module186.Column>}{!C.includes(isEdgeWize ? "hostCluster" : "provider") && <module186.Column className="is-1" style={{
        width: `${v(1, R)}%`
    }}><Module791 title={getDomTitle((isEdgeWize ? data.hostCluster : data.provider) || "-")} description={isEdgeWize ? t("HOSTED_IN") : t("PROVIDER")}/></module186.Column>}{!isEdgeWize && !C.includes("tags") && <module186.Column className="is-2" style={{
        width: `${v(2, R)}%`
    }}><Module791 title=<ClusterTagGroup data={data.tags.map((e)=>(tagList || []).find((t)=>e.name === t.name)).filter(Boolean)} empty="-"/> description={t("TAG_PL")}/></module186.Column>}{!C.includes("createTime") && <module186.Column className="is-2" style={{
        width: `${v(2, R)}%`
    }}>{T ? <Module791 title=<span>{t.html("LAST_KUBE_CONFIG_EXPIRED", {
        count: parseInt(data_expiredDay, 10)
    })}</span> description={t("EXPIRE_DATE")}/> : <Module791 title={getLocalTime(data.createTime).format("YYYY-MM-DD HH:mm:ss")} description={t("CREATION_TIME")}/>}</module186.Column>}<module186.Column><Module3666 item={{
        id: data.uid,
        name: data.name,
        url: `/clusters/${data.name}/overview`,
        type: "Cluster",
        isHost: data.isHost
    }} user={globals.user.username}/></module186.Column><module186.Column className={module3("is-1", module3675.options)}>{((data_1, r)=>{
        if (!e.isOperation) {
            return null;
        }
        const content = AComponent(data_1, r);
        return <module186.Dropdown content={content} trigger="click" placement="bottomRight"><module186.Button icon="more" type="flat"/></module186.Dropdown>;
    })(data, I)}</module186.Column></module186.Columns></li>;
};
var h = {
    nodeCount: 1,
    version: 1,
    ksVersion: 1.5,
    provider: 1,
    tags: 2,
    createTime: 2
};
var v = (e, t)=>e / (11 - t) * 11 / 12 * 100;
