import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-137.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-58.js";
import * as module553 from "./module-553.js";
import module447 from "./module-447.js";
import module26 from "./module-26.js";
import module857 from "./module-857.js";
import module3298 from "./module-3298.js";
export const STORAGE_CLASS_STORAGE = "storageclass.storage.k8s.io/requests.storage";
export const STORAGE_CLASS_VOLUME_CLAIMS = "storageclass.storage.k8s.io/persistentvolumeclaims";
export default function({ quota, allStorageClass, renderOutOfLimitTip = false, totalStorageError = false, totalVolumeClaimsError = false, currentRelatedStorageTotal = 0, currentRelatedVolumeClaimsTotal = 0, addedItems = [], ...rest }) {
    const R = module553.useState({
        "requests.storage": "InfinityGi",
        persistentvolumeclaims: ""
    });
    const D = module96(R, 2);
    const storageLimitSpec = D[0];
    const k = D[1];
    const I = module553.useState([]);
    const P = module96(I, 2);
    const namespaceStorageClass = P[0];
    const w = P[1];
    module553.useEffect(function() {
        k(quota);
    }, [
        quota
    ]);
    module553.useEffect(function() {
        let e = [];
        const t = [];
        Object.keys(quota).forEach((e)=>{
            if (module447(e, "storageclass.storage.k8s.io/requests.storage") || module447(e, "storageclass.storage.k8s.io/persistentvolumeclaims")) {
                t.push({
                    key: e,
                    value: quota[e]
                });
            }
        });
        if (t.length > 0) {
            e = module857(t, function(e) {
                return e.key.split(".")[0];
            });
        }
        w(e);
    }, [
        quota
    ]);
    const handleWsLimitChange = module553.useCallback(function(e) {
        const t = {
            "requests.storage": module26(e, [
                "requests.storage"
            ], ""),
            persistentvolumeclaims: module26(e, "persistentvolumeclaims", "")
        };
        rest.onChange({
            actionType: "add",
            data: {
                ...t
            }
        });
    });
    const handleRelateVolumeChange = module553.useCallback(function(e) {
        rest.onChange(e);
    });
    return module553.default.createElement(module3298, {
        namespace: rest.namespace,
        allStorageClass,
        isWorkspace: module26(rest, "isWorkspace", true),
        availableQuota: rest.availableQuota,
        wsAvailableRequest: rest.wsAvailableRequest ?? {},
        relatedStoragesLimit: rest.relatedStoragesLimit ?? [],
        storageLimitSpec,
        namespaceStorageClass,
        handleWsLimitChange,
        handleRelateVolumeChange,
        renderOutOfLimitTip,
        totalStorageError,
        totalVolumeClaimsError,
        currentRelatedStorageTotal,
        currentRelatedVolumeClaimsTotal,
        addedItems
    });
};
