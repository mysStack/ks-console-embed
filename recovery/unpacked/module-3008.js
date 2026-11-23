import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-187.js";
import "./module-197.js";
import "./module-6.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-192.js";
import "./module-27.js";
import "./module-4.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-137.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-193.js";
import module61 from "./module-61.js";
import module96 from "./module-96.js";
import { useCallback, useEffect, useState } from "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import Module796 from "./module-796.js";
import Module791 from "./module-791.js";
import module240 from "./module-240.js";
import Module829 from "./module-829.js";
import Module1689 from "./module-1689.js";
import module136 from "./module-136.js";
import module74 from "./module-74.js";
import { Netmask } from "./module-478.js";
import { cidrOverlap, generateId, getDisplayName, isEdgeWizePage } from "./module-52.js";
import { ICON_TYPES, PATTERN_IP } from "./module-72.js";
import { getOverlayStatus } from "./module-434.js";
import module1313 from "./module-1313.js";
export default function({ formRef, formTemplate, store, setButtonProps, isOutdated, cluster, namespace, hideWorkspace }) {
    const hideWorkspace_1 = hideWorkspace !== undefined && hideWorkspace;
    const isEdge = isEdgeWizePage();
    const k = useState();
    const I = module96(k, 2);
    const formTemplate_1 = I[0];
    const A = I[1];
    const w = useState(function() {
        const { ip, mask, count } = formTemplate;
        const n = count === undefined ? 1 : count;
        const l = [];
        if (PATTERN_IP.test(ip) && mask && n > 0) {
            const o = generateId(4);
            for(var u = 0, c = new Netmask(`${ip}/${mask}`), s = ()=>{
                const cidr = c.toString();
                if (l.every((t)=>t.cidr !== cidr)) {
                    l.push({
                        key: `ippool-${o}-${u}`,
                        cidr,
                        name: `ippool-${o}-${u}`,
                        workspace: undefined,
                        blockSize: Number(mask) > 26 ? mask : 26,
                        disabled: false,
                        ipipMode: "Always",
                        vxlanMode: "Never",
                        natOutgoing: true,
                        nodeSelector: "all()"
                    });
                }
                u += 1;
                c = c.next();
            }; u < n;){
                s();
            }
        }
        return l;
    });
    const M = module96(w, 2);
    const L = M[0];
    const j = M[1];
    useEffect(function() {
        module74(formTemplate, "list", L);
    }, [
        L
    ]);
    useEffect(function() {
        module74(formTemplate, "list", L);
    }, [
        L
    ]);
    let x;
    const U = useCallback(function() {
        A(null);
        setButtonProps({
            ok: {}
        });
    }, []);
    const onOk = function() {
        let e;
        let a;
        const r = L.findIndex((e)=>e.key === formTemplate_1.key);
        const u = module61(L);
        if (formTemplate_1.nodeSelectorLable) {
            formTemplate_1.nodeSelector = (e = formTemplate_1.nodeSelectorLable, a = "", e.forEach((e)=>{
                let t = "";
                let r = "";
                switch(e.operator){
                    case "NotIn":
                        r = e.values.map((e)=>`"${e}"`).join(",");
                        t = `${e.key} not in {${r}}`;
                        break;
                    case "In":
                        r = e.values.map((e)=>`"${e}"`).join(",");
                        t = `${e.key} in {${r}}`;
                        break;
                    case "Exists":
                        t = `has(${e.key})`;
                        break;
                    case "DoesNotExist":
                        t = `!has(${e.key})`;
                }
                a = a ? `${a} && ${t}` : t;
            }), a);
        }
        if (formTemplate_1.nodeSelectorText) {
            formTemplate_1.nodeSelector = formTemplate_1.nodeSelectorText.replace(/'/g, '"');
        } else {
            formTemplate_1.nodeSelector = formTemplate_1.nodeSelector.replace(/'/g, '"');
        }
        const c = Number(formTemplate_1.cidr.split("/")[1]) || 0;
        formTemplate_1.blockSize = c > (formTemplate_1.blockSize || 0) ? c < 27 ? 26 : c : formTemplate_1.blockSize;
        u.splice(r, 1, formTemplate_1);
        const workspace = (module96(u, 1)[0] || {}).workspace;
        if (isEdge && workspace) {
            return store.fetchList({
                cluster,
                page: 1,
                limit: 1000,
                labelSelector: workspace ? `kubesphere.io/namespace=${workspace || ""}` : undefined
            }).then((e)=>{
                const a = cidrOverlap(e, u);
                if (a) {
                    return module240.error({
                        content: t("CIDR_OVERLAP", {
                            cidr0: a[0],
                            cidr1: a[1]
                        })
                    });
                }
                j(u);
                A(null);
                setButtonProps({
                    ok: {}
                });
            });
        }
        j(u);
        A(null);
        setButtonProps({
            ok: {}
        });
    };
    if (formTemplate_1) {
        return <><Module1689 cluster={cluster} namespace={namespace} isEdge={isEdge} formRef={formRef} formTemplate={formTemplate_1} goBack={U} isOutdated={isOutdated} hideWorkspace={hideWorkspace_1} onOk={onOk}/><Module829 className={module1313.confirm} onOk={onOk} onCancel={U}/></>;
    }
    return <module186.Form ref={formRef} data={formTemplate}>{(x = L, <div className={module1313.container}>{x.map((e)=>{
        const r = getOverlayStatus(e);
        return <div key={e.key} className={module3(module1313.card, module1313.listItem)}><Module791 title={getDisplayName(e)} icon={ICON_TYPES[store.module]} description={e.description || "-"} className={module1313.info}/>{!isOutdated && <Module791 title=<Module796 type={e.disabled ? "Disabled" : "Running"} name={t(e.disabled ? "DISABLED" : "ENABLED")}/> description={t("STATUS")}/>}<Module791 title={e.cidr} description={t("NETWORK_SEGMENT")}/><Module791 title={e.blockSize ?? "-"} description={t("IPPOOL_BLOCK_SIZE")}/>{!isOutdated && <Module791 title=<div><span className="font-bold">{r.type}</span>{r.value && <span style={{
            marginLeft: "4px"
        }}>({r.value})</span>}</div> description={t("IPPOOL_OVERLAY_MODE")}/>}<div className={module1313.workspace}/><div className={module1313.action}><module186.Button className={module1313.edit} onClick={function() {
            return ((e)=>{
                A(module136(e));
                setButtonProps({
                    ok: {
                        disabled: true
                    }
                });
            })(e);
        }}><module186.Icon name="pen" type="dark" size={16}/></module186.Button>{!isOutdated && <module186.Tooltip content={t("DISABLE_POD_IP_POOL")}><module186.Toggle checked={!e.disabled} onChange={function(t) {
            return ((e, t)=>{
                const a = L.findIndex((t)=>t.key === e.key);
                const r = module61(L);
                r[a].disabled = t;
                j(r);
            })(e, !t);
        }}/></module186.Tooltip>}</div></div>;
    })}</div>)}</module186.Form>;
};
