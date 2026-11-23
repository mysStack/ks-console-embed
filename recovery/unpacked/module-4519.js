import "./module-15.js";
import "./module-11.js";
import "./module-18.js";
import "./module-16.js";
import module31 from "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module96 from "./module-96.js";
import "./module-4.js";
import "./module-22.js";
import * as module553 from "./module-553.js";
import module789 from "./module-789.js";
import module802 from "./module-802.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module959 from "./module-959.js";
import module4520 from "./module-4520.js";
const _ = module553.memo(function({ currentResource, isEdge }) {
    const n = [
        {
            name: "pod",
            icon: "pod",
            title: "POD"
        },
        {
            name: "deployment",
            icon: "backup",
            title: "DEPLOYMENT"
        },
        {
            name: "statefulset",
            icon: "stateful-set",
            title: "STATEFULSET",
            isHidden: isEdge
        },
        {
            name: "daemonset",
            icon: "deamon-set",
            title: "DAEMONSET",
            isHidden: isEdge
        },
        {
            name: "job",
            icon: "backup",
            title: "JOB"
        },
        {
            name: "cronjob",
            icon: "backup",
            title: "CRONJOB"
        },
        {
            name: "persistentvolumeclaim",
            icon: "storage",
            title: "PERSISTENT_VOLUME_CLAIM",
            isHidden: isEdge
        },
        {
            name: "service",
            icon: "appcenter",
            title: "SERVICE",
            isHidden: isEdge
        },
        {
            name: "ingress",
            icon: "loadbalancer",
            title: "ROUTE",
            isHidden: isEdge
        }
    ].filter((e)=>!e.isHidden);
    const o = module553.useState({});
    const _ = module96(o, 2);
    const y = _[0];
    const E = _[1];
    const b = module553.useState(false);
    const S = module96(b, 2);
    const spinning = S[0];
    const R = S[1];
    const A = module553.useCallback(async (t)=>{
        let r;
        R(true);
        r = await t.getBaseResourcesSummary({
            namespace: currentResource.namespace,
            cluster: currentResource.cluster
        });
        E(r);
        R(false);
    }, []);
    module553.useEffect(function() {
        const e = new module959({
            cluster: currentResource.cluster
        });
        A(e);
    }, []);
    return module553.default.createElement(module802, {
        className: module4520.resourceSummary
    }, module553.default.createElement(module186.Loading, {
        spinning
    }, module553.default.createElement("div", {
        className: module4520.wrapper
    }, n.map((e)=>{
        const a = `namespace_${e.name}_count`;
        const title = module26(y, `${a}.value.[1]`, 0);
        return module553.default.createElement("div", {
            className: module3(module4520.wrapperItem, module31({}, module4520.wrapperItemHover, e.more)),
            key: e.name
        }, module553.default.createElement(module789, {
            noLink: true,
            className: module4520.avatar,
            icon: e.icon,
            title,
            desc: t(title === "1" ? e.title : `${e.title}_PL`),
            iconSize: 40
        }));
    }))));
});
export default _;
