import "./module-15.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-4.js";
import "./module-17.js";
import module96 from "./module-96.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import Module791 from "./module-791.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import "./module-553.js";
import module3944 from "./module-3944.js";
const p = [
    {
        label: "ANY_PATH",
        value: ""
    },
    {
        label: "DIRECTORY_OR_CREATE",
        value: "DirectoryOrCreate"
    },
    {
        label: "FILE_OR_CREATE",
        value: "FileOrCreate"
    },
    {
        label: "DIRECTORY_EXIST",
        value: "Directory"
    },
    {
        label: "FILE_EXIST",
        value: "File"
    },
    {
        label: "SOCKET_EXIST",
        value: "Socket"
    },
    {
        label: "CHARACTER_DEVICE_EXIST",
        value: "CharDevice"
    },
    {
        label: "BLOCK_DEVICE_EXIST",
        value: "BlockDevice"
    }
];
const m = [
    {
        label: "NODE_EXPAND_KEY",
        key: "nodeExpandSecretRef"
    },
    {
        label: "NODE_PUBLISH_KEY",
        key: "nodePublishSecretRef"
    },
    {
        label: "NODE_STAGING_KEY",
        key: "nodeStageSecretRef"
    },
    {
        label: "CONTROLLER_EXPAND_KEY",
        key: "controllerExpandSecretRef"
    },
    {
        label: "CONTROLLER_PUBLISH_KEY",
        key: "controllerPublishSecretRef"
    }
];
const h = {
    CSI: [
        {
            label: "DRIVER",
            valuePath: "csi.driver"
        },
        {
            label: "FSTYPE",
            valuePath: "csi.fsType"
        },
        {
            label: "VOLUME_HANDLE",
            valuePath: "csi.volumeHandle"
        },
        {
            label: "READ_ONLY",
            valuePath: "csi.readOnly"
        }
    ],
    HostPath: [
        {
            label: "HOST_PATH",
            valuePath: "hostPath.path"
        },
        {
            label: "PATH_TYPE",
            valuePath: "hostPath.type",
            render: function(e) {
                const r = e || "";
                return t(p.find((e)=>e.value === r)?.label);
            }
        }
    ],
    NFS: [
        {
            label: "PATH",
            valuePath: "nfs.path"
        },
        {
            label: "SERVER_IP_ADDRESS",
            valuePath: "nfs.server"
        }
    ]
};
const v = inject("detailStore")(observer(function(e) {
    const detail = e.detailStore.detail;
    const r = [];
    m.forEach((e)=>{
        if (module26(detail, `csi.${e.key}`)) {
            r.push({
                label: e.label,
                name: module26(detail, `csi.${e.key}.name`),
                namespace: module26(detail, `csi.${e.key}.namespace`)
            });
        }
    });
    const a_volumeType = detail.volumeType;
    return <div className={module3944.wrapper}><Module791 icon="database" title={a_volumeType} description={t("VOLUME_TYPE")}/>{h[a_volumeType] && <div className={module3944.attrs}>{h[a_volumeType].map((e)=><div className={module3944.attr} key={e.valuePath}><div className={module3944.attrValue}>{e.render ? e.render(module26(detail, e.valuePath, false)) : module26(detail, e.valuePath, false).toString()}</div><div className={module3944.attrTitle}>{t(e.label)}</div></div>)}</div>}{a_volumeType === "CSI" ? <>{!module63(module26(detail, "csi.volumeAttributes")) && <><div className={module3944.title}><div>{t("VOLUME_ATTRIBUTES")}</div></div>{Object.entries(module26(detail, "csi.volumeAttributes")).map((e)=>{
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        return <div key={a} className={module3944.kvContainer}><div className={module3944.k}>{a}</div><div className={module3944.v}>{r}</div></div>;
    })}</>}{r.length > 0 && <><div className={module3944.title}><div>{t("SECRET_INFO")}</div></div>{r.map((e)=><div key={e.name} className={module3944.objectContainer}><div className={module3944.v}>{t(e.label)}</div><div><span className={module3944.k}>{t("NAME")}:</span><span className={module3944.v}>{e.name}</span></div><div><span className={module3944.k}>{t("PROJECT")}:</span><span className={module3944.v}>{e.namespace}</span></div></div>)}</>}</> : null}</div>;
}));
export default v;
