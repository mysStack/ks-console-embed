import "./module-15.js";
import "./module-11.js";
import "./module-29.js";
import "./module-16.js";
import "./module-4.js";
import "./module-315.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module186 from "./module-186.js";
import * as module553 from "./module-553.js";
import { showNameAndAlias } from "utils/index";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "utils/constants";
import module2073 from "./module-2073.js";
export default function({ cluster, allClusters = [], title }) {
    const p = module553.useState({
        iconName: "kubernetes",
        tagType: "production"
    });
    const m = module96(p, 2);
    const h = m[0];
    const v = m[1];
    const g = module553.useCallback(function() {
        let e;
        const r = allClusters.filter((e)=>e.name === cluster)[0];
        const iconName = (e = r?.provider) !== null && e !== undefined && e ? CLUSTER_PROVIDER_ICON[r.provider] : "kubernetes";
        const tagType = CLUSTER_GROUP_TAG_TYPE[r?.group ?? "production"];
        v({
            iconName,
            tagType
        });
    }, [
        cluster,
        allClusters
    ]);
    const y = allClusters.find((e)=>e.name === cluster);
    module553.useEffect(function() {
        g();
    }, [
        cluster,
        allClusters
    ]);
    if (y) {
        return module553.default.createElement(module186.Tag, {
            key: `${cluster}`,
            type: h?.tagType,
            className: module2073.tags
        }, module553.default.createElement(module186.Icon, {
            name: h?.iconName,
            size: 16,
            ...h?.tagType === "default" ? {
                type: "light"
            } : {}
        }), module553.default.createElement("span", {
            className: "text ellipsis",
            title: typeof title === "string" ? title : showNameAndAlias(y)
        }, title || showNameAndAlias(y)));
    }
    return module553.default.createElement(module186.Tooltip, {
        content: t("CLUSTER_DELETED")
    }, module553.default.createElement(module186.Tag, {
        key: `${cluster}`,
        className: module2073.tags,
        type: "secondary"
    }, module553.default.createElement(module186.Icon, {
        name: "question",
        size: 16
    }), module553.default.createElement("span", {
        className: "text ellipsis",
        title: cluster
    }, cluster)));
};
