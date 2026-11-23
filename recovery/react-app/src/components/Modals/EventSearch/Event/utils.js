import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-62.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module31 from "unpacked/module-31.js";
import module246 from "unpacked/module-246.js";
import "unpacked/module-28.js";
export const toArray = function e(t = {}, a = 0) {
    const r = [];
    const n = Object.keys(t);
    const l = a + 1;
    for(let i = 0, c = n.length; i < c; i++){
        const s = n[i];
        if (module246(t[s]) === "object" && t[s] != null) {
            let f;
            const d = t[s];
            const p = e(d, l);
            r.push((f = {}, module31(f, s, p), module31(f, "collapsed", false), module31(f, "level", a), f));
        } else {
            let m;
            r.push((m = {}, module31(m, s, t[s]), module31(m, "level", a), m));
        }
    }
    return r;
};
export const queryKeyMapping = {
    workspace_filter: "workspace_search",
    involved_object_namespace_filter: "involved_object_namespace_search",
    involved_object_kind_filter: "involved_object_kind_filter",
    involved_object_name_filter: "involved_object_name_search",
    reason_filter: "reason_search",
    message_search: "message_search",
    type_filter: "type_filter"
};
export const dropDownItems = {
    message_search: {
        icon: "magnifier",
        text: t("MESSAGE")
    },
    workspace_filter: {
        icon: "appcenter",
        text: t("WORKSPACE")
    },
    involved_object_namespace_filter: {
        icon: "project",
        text: t("PROJECT")
    },
    involved_object_kind_filter: {
        icon: "vnc",
        text: t("RESOURCE_TYPE")
    },
    involved_object_name_filter: {
        icon: "strategy-group",
        text: t("RESOURCE_NAME")
    },
    reason_filter: {
        icon: "resource",
        text: t("REASON")
    },
    type_filter: {
        icon: "cardview",
        text: t("CATEGORY")
    }
};
export const queryModeOptions = [
    1,
    0
].map((e)=>({
        value: e,
        label: e ? t("EXACT_QUERY") : t("FUZZY_QUERY")
    }));
export const getSecond = function(e) {
    const t = e.match(/(\d+)(\w+)/);
    const [, n = 0, u] = module96(t, 3);
    return n * ({
        s: 1,
        m: 60,
        h: 3600,
        d: 86400
    })[u === undefined ? "s" : u];
};
export const supportQueryParams = [
    {
        icon: "magnifier",
        title: t("SEARCH_BY_MESSAGE"),
        tips: t("RESOURCE_EVENT_MESSAGE_TIP"),
        key: "message_search"
    },
    {
        icon: "appcenter",
        title: t("SEARCH_BY_WORKSPACE"),
        tips: t("RESOURCE_EVENT_WORKSPACE_TIP"),
        key: "workspace_filter"
    },
    {
        icon: "project",
        title: t("SEARCH_BY_PROJECT"),
        tips: t("RESOURCE_EVENT_PROJECT_TIP"),
        key: "involved_object_namespace_filter"
    },
    {
        icon: "vnc",
        title: t("SEARCH_BY_RESOURCE_TYPE"),
        tips: t("RESOURCE_EVENT_RESOURCE_TYPE_TIP"),
        key: "involved_object_kind_filter"
    },
    {
        icon: "strategy-group",
        title: t("SEARCH_BY_RESOURCE_NAME"),
        tips: t("RESOURCE_EVENT_RESOURCE_NAME_TIP"),
        key: "involved_object_name_filter"
    },
    {
        icon: "resource",
        title: t("SEARCH_BY_REASON"),
        tips: t("RESOURCE_EVENT_REASON_TIP"),
        key: "reason_filter"
    },
    {
        icon: "cardview",
        title: t("SEARCH_BY_CATEGORY"),
        tips: t("RESOURCE_EVENT_CATEGORY_TIP"),
        key: "type_filter"
    }
];
