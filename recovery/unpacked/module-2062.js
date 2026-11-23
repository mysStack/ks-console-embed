import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import module96 from "./module-96.js";
import module186 from "./module-186.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import { useRef, useState } from "./module-553.js";
import Module843 from "./module-843.js";
import module2065 from "./module-2065.js";
const g = [
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
const b = [
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
const S = {
    CSI: "spec.csi",
    HostPath: "spec.hostPath",
    NFS: "spec.nfs"
};
export default function({ formTemplate }) {
    const l = useState(Object.entries(S).find((e)=>{
        const t = module96(e, 2)[1];
        return !module63(module26(formTemplate, t));
    })?.[0] ?? "CSI");
    const o = module96(l, 2);
    const E = o[0];
    const _ = o[1];
    const O = useState(false);
    const C = module96(O, 2);
    const T = C[0];
    const R = C[1];
    const DRef = useRef(module136(formTemplate));
    return <div className={module2065.wrapper}><div className={module2065.title}>{t("VOLUME_TYPE")}</div><div className={module2065.container}><div className={module2065.radioGroup}><module186.RadioGroup value={E} onChange={function(e) {
        module74(DRef.current, S[E], module136(module26(formTemplate, S[E])));
        module242(formTemplate, S[E]);
        if (module63(module26(formTemplate, S[e])) && !module63(module26(DRef.current, S[e]))) {
            module74(formTemplate, S[e], module26(DRef.current, S[e]));
        }
        _(e);
    }}>{[
        "CSI",
        "HostPath",
        "NFS"
    ].map((e)=><module186.RadioButton key={e} value={e}>{e}</module186.RadioButton>)}</module186.RadioGroup></div><div className={module2065.itemWrapper}>{E !== "CSI" ? null : <div><div className={module2065.itemGrid}><module186.Form.Item label={t("DRIVER")} rules={[
        {
            required: true,
            message: t("DRIVER_REQUIRED")
        },
        {
            pattern: /^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/,
            message: t("DRIVER_FORMAT_ERROR")
        }
    ]}><module186.Input placeholder={t("DRIVER_PLACEHOLDER")} name="spec.csi.driver"/></module186.Form.Item><module186.Form.Item label={t("FSTYPE")}><module186.Input placeholder={t("FSTYPE_PLACEHOLDER")} name="spec.csi.fsType"/></module186.Form.Item><module186.Form.Item label={t("VOLUME_HANDLE")} rules={[
        {
            required: true,
            message: t("PARAM_REQUIRED")
        }
    ]}><module186.Input name="spec.csi.volumeHandle"/></module186.Form.Item><module186.Form.Item label={t("READ_ONLY")}><module186.Select defaultValue={false} name="spec.csi.readOnly" options={[
        {
            label: t("TRUE"),
            value: true
        },
        {
            label: t("FALSE"),
            value: false
        }
    ]}/></module186.Form.Item></div><module186.Form.Item label={t("VOLUME_ATTRIBUTES")} className="margin-t12"><Module843 name="spec.csi.volumeAttributes" addText={t("ADD")}/></module186.Form.Item><div className={module2065.advanced} onClick={function() {
        R(!T);
    }}><span>{t("ADVANCED_SETTINGS")}</span><module186.Icon name={T ? "chevron-up" : "chevron-down"} size="20" color={{
        primary: "#329dce"
    }}/></div>{T && <div className={module2065.advancedContainer}>{g.map((e)=><div className={module2065.advancedItem} key={e.key}><span className={module2065.advancedItemTitle}>{t(e.label)}</span><module186.Form.Item><module186.Input name={`spec.csi.${e.key}.name`} placeholder={t("NAME")}/></module186.Form.Item><module186.Form.Item><module186.Input placeholder={t("PROJECT")} name={`spec.csi.${e.key}.namespace`}/></module186.Form.Item></div>)}</div>}</div>}{E !== "HostPath" ? null : <div className={module2065.itemGrid}><module186.Form.Item label={t("HOST_PATH")} rules={[
        {
            required: true,
            message: t("PARAM_REQUIRED")
        }
    ]}><module186.Input name="spec.hostPath.path"/></module186.Form.Item><module186.Form.Item label={t("PATH_TYPE")}><module186.Select name="spec.hostPath.type" defaultValue="" options={b.map((e)=>({
            ...e,
            label: t(e.label)
        }))}/></module186.Form.Item></div>}{E !== "NFS" ? null : <div className={module2065.itemGrid}><module186.Form.Item label={t("PATH")} rules={[
        {
            required: true,
            message: t("PARAM_REQUIRED")
        }
    ]}><module186.Input name="spec.nfs.path"/></module186.Form.Item><module186.Form.Item label={t("SERVER_IP_ADDRESS")} rules={[
        {
            required: true,
            message: t("PARAM_REQUIRED")
        }
    ]}><module186.Input name="spec.nfs.server"/></module186.Form.Item><module186.Form.Item label={t("READ_ONLY")}><module186.Select defaultValue={false} name="spec.nfs.readOnly" options={[
        {
            label: t("TRUE"),
            value: true
        },
        {
            label: t("FALSE"),
            value: false
        }
    ]}/></module186.Form.Item></div>}</div></div></div>;
};
