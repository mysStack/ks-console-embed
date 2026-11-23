import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-553.js";
import Module789 from "components/Base/Avatar";
import Module802 from "components/Base/Card";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import { observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import module4316 from "unpacked/module-4316.js";
const h = [
    {
        name: "cluster",
        icon: "cluster",
        title: "CLUSTER",
        more: true
    },
    {
        name: "node",
        icon: "nodes",
        title: "NODE",
        more: true
    },
    {
        name: "namespace",
        icon: "project",
        title: "PROJECT",
        more: true
    },
    {
        name: "pod",
        icon: "pod",
        title: "POD",
        more: true
    },
    {
        name: "deployment",
        icon: "backup",
        title: "DEPLOYMENT"
    },
    {
        name: "statefulset",
        icon: "stateful-set",
        title: "STATEFULSET"
    },
    {
        name: "daemonset",
        icon: "deamon-set",
        title: "DAEMONSET"
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
        name: "pvc",
        icon: "storage",
        title: "PERSISTENT_VOLUME_CLAIM_LOW"
    },
    {
        name: "service",
        icon: "appcenter",
        title: "SERVICE"
    },
    {
        name: "ingresses",
        icon: "loadbalancer",
        title: "ROUTE"
    }
];
const v = observer(function({ resources, showResourceRankModal }) {
    return <Module802 className={module4316.resourceSummary}><module186.Loading spinning={resources.isLoading}><div className={module4316.wrapper}>{h.map((e)=>{
        const n = e.name === "cluster" ? "clusters_count" : `clusters_${e.name}_count`;
        const title = module26(module14.toJS(resources), `data.${n}.value.[1]`, 0);
        return <div className={module3(module4316.wrapperItem, module31({}, module4316.wrapperItemHover, e.more))} key={e.name} onClick={function() {
            if (e.more) {
                return showResourceRankModal(e.name);
            }
        }}><Module789 noLink className={module4316.avatar} icon={e.icon} title={title} desc={t(title === "1" ? e.title : `${e.title}_PL`)} iconSize={40}/></div>;
    })}</div></module186.Loading></Module802>;
});
export default v;
