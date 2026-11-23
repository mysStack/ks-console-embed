import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import module789 from "components/Base/Avatar";
import module790 from "components/Base/Panel";
import module26 from "unpacked/module-26.js";
import module1812 from "unpacked/module-1812.js";
import * as module553 from "unpacked/module-553.js";
import module318 from "stores/workload/index";
import { ICON_TYPES } from "utils/constants";
import { getUnitValueString } from "utils/index";
import { timeUnit } from "utils/time";
import module4915 from "unpacked/module-4915.js";
const O = module553.memo(function({ detail, params }) {
    const A = module553.useState({});
    const T = module96(A, 2);
    const k = T[0];
    const D = T[1];
    const C = module553.useMemo(function() {
        return `${detail?.scaleTargetRef?.kind?.toLocaleLowerCase()}s`;
    }, [
        detail.scaleTargetRef.kind
    ]);
    const P = [
        {
            icon: "down-duotone",
            title: detail?.minReplicaCount ?? "-",
            desc: t("MINIMUM_REPLICAS")
        },
        {
            icon: "up-duotone",
            title: detail?.maxReplicaCount ?? "-",
            desc: t("MAXIMUM_REPLICAS")
        },
        {
            icon: "history-duotone",
            title: getUnitValueString(detail?.pollingInterval ?? "-", timeUnit),
            desc: t("POLLING_INTERVAL")
        },
        {
            icon: "clock-duotone",
            title: getUnitValueString(detail?.cooldownPeriod ?? "-", timeUnit),
            desc: t("WAITING_TIME")
        }
    ];
    const N = module553.useCallback(async (t)=>{
        let r;
        let n;
        await t.fetchDetail({
            ...params,
            name: detail?.scaleTargetRef?.name
        });
        r = t.detail;
        n = I(r);
        D(n);
    }, []);
    var I = module553.useCallback(function(e) {
        let t = {};
        switch(C){
            case "deployments":
                t = {
                    current: e.availablePodNums || 0,
                    desire: e.podNums || 0
                };
                break;
            case "statefulsets":
                t = {
                    current: module26(e, "status.currentReplicas", e.readyPodNums),
                    desire: e.podNums || 0
                };
        }
        return t;
    }, [
        C
    ]);
    module553.useEffect(function() {
        const e = new module318(C);
        N(e);
    }, [
        C
    ]);
    return module553.default.createElement(module790, {
        title: t("SCALING_OBJECT")
    }, module553.default.createElement("div", {
        className: module4915.scalingObject
    }, module553.default.createElement("div", {
        className: module4915.scalingObjectHeader
    }, module553.default.createElement(module789, {
        icon: ICON_TYPES[C],
        iconSize: 40,
        title: detail?.scaleTargetRef?.name,
        desc: t(detail?.scaleTargetRef?.kind),
        noLink: true
    })), module553.default.createElement("div", {
        className: module4915.scalingObjectBody
    }, module553.default.createElement(module1812, {
        ...k,
        hideOperation: true
    }), module553.default.createElement("div", {
        className: module4915.itemBoxBody
    }, P.map((e, key)=>module553.default.createElement("div", {
            className: module4915.itemBoxBodyItem,
            key
        }, module553.default.createElement(module789, {
            iconSize: 40,
            icon: e.icon,
            title: e.title,
            desc: e.desc,
            noLink: true
        })))))));
});
export default O;
