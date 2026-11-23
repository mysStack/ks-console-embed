import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-319.js";
import "./module-24.js";
import "./module-193.js";
import "./module-315.js";
import "./module-31.js";
import module96 from "./module-96.js";
import module186 from "./module-186.js";
import Module967 from "./module-967.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module241 from "./module-241.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module14 from "./module-14.js";
import { observer, useLocalStore } from "./module-239.js";
import { useEffect, useMemo, useState } from "./module-553.js";
import module867 from "./module-867.js";
import { safeParseJSON } from "./module-52.js";
import { ACCESS_MODES } from "./module-72.js";
import Module2062 from "./module-2062.js";
import module2066 from "./module-2066.js";
const D = observer(function(e) {
    const { formRef, formTemplate } = e;
    const n = useLocalStore(function() {
        return new module867;
    });
    const l = useState(false);
    const u = module96(l, 2);
    const loading = u[0];
    const D = u[1];
    const N = useState([]);
    const k = module96(N, 2);
    const I = k[0];
    const P = k[1];
    const A = useState({});
    const w = module96(A, 2);
    const M = w[0];
    const L = w[1];
    const onFetch = function(t = {}) {
        D(true);
        const e_formData = e.formData;
        const l = module26(e_formData, "spec.storageClassName");
        return n.fetchList({
            ...t,
            cluster: e.cluster
        }).then(()=>{
            const e = module14.toJS(n.list.data);
            P(e.map((e)=>({
                    label: e.name,
                    value: e.name
                })));
            const t = e.find((e)=>l === e.name) || e.find((e)=>e.default) || {};
            L(t);
            if (!(module63(formTemplate.PersistentVolume, "spec.csi") || module26(formTemplate.PersistentVolume, "spec.csi.driver") || !/^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/.test(t.provisioner))) {
                module74(formTemplate.PersistentVolume, "spec.csi.driver", t.provisioner);
            }
            D(false);
        });
    };
    useEffect(function() {
        onFetch();
    }, []);
    const x = n.list || {};
    const U = useMemo(function() {
        let e = null;
        if (M) {
            e = safeParseJSON(module26(M, 'annotations["storageclass.kubesphere.io/supported-access-modes"]', ""));
        }
        const t = module159(e) ? [] : e;
        if (module63(t)) {
            return Object.keys(ACCESS_MODES);
        }
        return t;
    }, [
        M
    ]);
    const F = useMemo(function() {
        return U.map((e)=>({
                value: e,
                label: e
            }));
    }, [
        U
    ]);
    const defaultValue = useMemo(function() {
        if ("ReadWriteOnce" in U) {
            return [
                "ReadWriteOnce"
            ];
        }
        return U.slice(0, 1);
    }, [
        U
    ]);
    return <div className={module2066.wrapper}><module186.Form ref={formRef} data={formTemplate.PersistentVolume}><module186.Columns><module186.Column><module186.Form.Item label={t("STORAGE_CLASS")} desc={t("VOLUME_STORAGE_CLASS_DESC")} rules={[
        {
            required: true,
            message: t("PARAM_REQUIRED")
        }
    ]}><module186.Select name="spec.storageClassName" defaultValue={M.name} pagination={module241(x, [
        "page",
        "limit",
        "total"
    ])} isLoading={x.isLoading} onChange={function(e) {
        const t = n.list.data.find((t)=>t.name === e) || {};
        module242(formTemplate.PersistentVolume, "spec.accessModes");
        if (module26(formTemplate.PersistentVolume, "spec.csi")) {
            module74(formTemplate.PersistentVolume, "spec.csi.driver", t.provisioner);
        }
        L(t);
    }} options={I} onFetch={onFetch} searchable clearable/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ACCESS_MODE")} rules={[
        {
            required: true,
            message: t("PARAM_REQUIRED")
        }
    ]} desc={t("ACCESS_MODES_DESC")}><module186.Select name="spec.accessModes" options={F} loading={loading} defaultValue={defaultValue} multi/></module186.Form.Item></module186.Column></module186.Columns><div className={module2066.slider}><module186.Form.Item className={module2066.slider} label={t("VOLUME_CAPACITY")} rules={[
        {
            validator: function(e, a, r) {
                if (parseInt(a, 10) <= 0) {
                    return r({
                        message: t("VOLUME_SIZE_TIP"),
                        field: e.field
                    });
                }
                return r();
            }
        }
    ]}><Module967 name="spec.capacity.storage" {...(()=>{
        const e = {
            min: 0,
            max: 2048,
            defaultValue: "10Gi",
            step: 1,
            unit: "Gi"
        };
        const t = Number(module26(M, "parameters.minSize"));
        const a = Number(module26(M, "parameters.maxSize"));
        const r = Number(module26(M, "parameters.stepSize"));
        if (!isNaN(t)) {
            e.min = t;
        }
        if (!isNaN(a)) {
            e.max = a;
        }
        if (!isNaN(r)) {
            e.step = r;
        }
        const n = (e.max / e.step - e.min / e.step) / 4;
        const l = {};
        for(let o = 0; o < 4; o++){
            const u = Math.floor(n * o) * e.step + e.min;
            l[u] = u === 0 ? "0" : `${u}Gi`;
        }
        l[e.max] = `${e.max}Gi`;
        e.marks = l;
        return e;
    })()} withInput/></module186.Form.Item></div><module186.Columns><module186.Column><module186.Form.Item label={t("VOLUME_MODE")}><module186.Select name="spec.volumeMode" options={[
        {
            label: t("VOLUME_MODE_FILESYSTEM"),
            value: "Filesystem"
        },
        {
            label: t("BLOCK"),
            value: "Block"
        }
    ]}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("RECLAIM_POLICY")}><module186.Select name="spec.persistentVolumeReclaimPolicy" options={[
        {
            label: "Retain",
            value: "Retain"
        },
        {
            label: "Delete",
            value: "Delete"
        }
    ]}/></module186.Form.Item></module186.Column></module186.Columns><Module2062 formTemplate={formTemplate.PersistentVolume}/></module186.Form></div>;
});
export default D;
