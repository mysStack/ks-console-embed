import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-315.js";
import "./module-31.js";
import module96 from "./module-96.js";
import "./module-58.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import Module791 from "./module-791.js";
import Module1301 from "./module-1301.js";
import module26 from "./module-26.js";
import module1 from "./module-1.js";
import { useEffect, useMemo, useRef, useState } from "./module-553.js";
import module1103 from "./module-1103.js";
import module1314 from "./module-1314.js";
import { getDisplayName } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import { getOverlayStatus } from "./module-434.js";
import module2993 from "./module-2993.js";
export default CComponent;
function CComponent(e) {
    const { detail, onCancel, cluster, isEdge } = e;
    const { store, data: _data, onOk, ...rest } = e;
    const TRef = useRef();
    const R = useState([]);
    const D = module96(R, 2);
    const list = D[0];
    const k = D[1];
    const I = useState(false);
    const P = module96(I, 2);
    const A = P[0];
    const w = P[1];
    const M = useState("");
    const L = module96(M, 2);
    const j = L[0];
    const x = L[1];
    const URef = useRef(isEdge ? new module1314 : new module1103("ippools"));
    const F = module26(detail, "status.capacity", 0);
    const V = module26(detail, "status.unallocated", 0);
    const G = getOverlayStatus(detail);
    useEffect(function() {
        URef.current.fetchMigrateIpPool({
            limit: -1,
            cluster,
            name: detail.name
        }).then((e)=>{
            k(e.map((e)=>({
                    ...e,
                    label: e.name,
                    value: e.name
                })));
        });
    }, [
        detail,
        getDisplayName
    ]);
    const B = useMemo(function() {
        return Boolean(list.length) && detail.status.tunnel !== detail.status.allocations;
    }, [
        detail,
        list
    ]);
    return <Module788 className={module2993.modal} hideHeader okText={t("OK")} onOk={function() {
        if (TRef.current) {
            TRef.current.validate(function() {
                onOk({
                    old: detail.name,
                    new: A ? j : ""
                });
            });
        } else {
            onOk({
                old: detail.name,
                new: A ? j : ""
            });
        }
    }} onCancel={onCancel} hideFooter={false} {...rest}><div><div className={module2993.header}><div className={module2993.title}><module186.Icon name="error" size={20} type="light" color={{
        secondary: "#ca2621"
    }} className="margin-r4"/>{t("DISABLE_POD_IP_POOL")}</div><span className={module2993.close} onClick={onCancel}><module186.Icon name="close" type="light" size={20}/></span></div><module186.Alert type="warning" message={t("DISABLE_POD_IP_POOL_DESC")} className="margin-b20"/><div className={module2993.card}><div className={module2993.row}><Module791 title={getDisplayName(detail)} icon={ICON_TYPES[store.module]} description={detail.description || "-"}/><Module791 title={`${F - V} / ${F}`} description={t("USED_IP_ADDRESSES")}/><Module791 title={detail.cidr} description={t("NETWORK_SEGMENT")}/><Module791 title=<div><span className="font-bold">{G.type}</span>{G.value && <span style={{
        marginLeft: "4px"
    }}>({G.value})</span>}</div> description={t("IPPOOL_OVERLAY_MODE")}/></div></div>{B && <div className={module2993.card}><Module791 className="margin-b12" title=<div><module186.Checkbox className="margin-r12" onChange={w} disabled={!list.length}/><span>{t("MIGRATE_POD_IP_POOL")}</span></div> description=<span style={{
        marginLeft: 28
    }}>{t("MIGRATE_POD_IP_POOL_DESC")}</span>/><module186.Form ref={TRef} data={{
        migrateIPPool: j
    }}>{A && <div className={module2993.container}><module186.Form.Item rules={[
        {
            required: true,
            message: t("SELECT_POD_IP_POOL_DESC")
        }
    ]}><Module1301 name="migrateIPPool" list={list} icon="eip-group" value={j} onChange={x} hideColumns={[
        "blockSize"
    ]}/></module186.Form.Item></div>}</module186.Form></div>}</div></Module788>;
}
CComponent.propTypes = {
    data: module1.object,
    store: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool,
    width: module1.number
};
CComponent.defaultProps = {
    width: 960
};
