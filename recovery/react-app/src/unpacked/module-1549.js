import "./module-12.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module186 from "./module-186.js";
import Module1301 from "./module-1301.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { useEffect, useMemo, useRef, useState } from "./module-553.js";
import module1103 from "./module-1103.js";
import module1565 from "stores/network/ippool";
import { compareVersion } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import Module2409 from "./module-2409.js";
const b = function(e) {
    return module26(e, "disabled", false) !== true;
};
const _ = (e)=>function(t) {
        return module26(t, "status.unallocated", 0) >= e;
    };
export default function(e) {
    const { cluster, namespace, replicas } = e;
    const l = replicas === undefined ? 0 : replicas;
    const e_isEdgeWize = e.isEdgeWize;
    const y = useMemo(function() {
        return function(e) {
            return [
                b,
                _(l)
            ].every((t)=>t(e));
        };
    }, [
        l
    ]);
    const isOutdated = useMemo(function() {
        if (!globals.app.isMultiCluster) {
            return false;
        }
        const e = module26(globals, `clusterConfig.${cluster}.ksVersion`);
        return compareVersion(e, "3.4.0") < 0;
    }, [
        cluster
    ]);
    const S = e.prefix || "spec.template.";
    const CRef = useRef(e_isEdgeWize ? new module1565 : new module1103("ippools"));
    const D = useState([]);
    const k = module96(D, 2);
    const list = k[0];
    const T = k[1];
    const checkable = module63(e.data);
    useEffect(function() {
        CRef.current.fetchNamespacesIpPools({
            cluster,
            namespace,
            limit: -1
        }).then((e)=>{
            T(e.filter(y).map((e)=>({
                    ...e,
                    label: e.name,
                    value: e.name
                })));
        });
    }, []);
    return <module186.Form.Group label={checkable ? t("ADD_EDGE_IPPOOL") : ""} desc={checkable ? t("ADD_EDGE_IPPOOL_DES") : ""} checkable={checkable} keepDataWhenUnCheck>{e_isEdgeWize ? <Module1301 isOutdated={isOutdated} type="array" name={`${S}metadata.annotations["cni.projectcalico.org/ipv4pools"]`} list={list} icon={ICON_TYPES[CRef.current.module]} hideColumns={[
        "workspace"
    ]}/> : <Module2409 isOutdated={isOutdated} type="array" cluster={cluster} namespace={namespace} name={`${S}metadata.annotations["cni.projectcalico.org/ipv4pools"]`} icon={ICON_TYPES[CRef.current.module]} hideColumns={[
        "workspace"
    ]} rootStore={e.rootStore} formTemplate={e.formTemplate} data={e.data} formProps={e.formProps}/>}</module186.Form.Group>;
};
