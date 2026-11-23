import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-18.js";
import "./module-10.js";
import "./module-24.js";
import "./module-62.js";
import module96 from "./module-96.js";
import module31 from "./module-31.js";
import module246 from "./module-246.js";
import "./module-28.js";
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
export const httpcodes = {
    100: "Continue",
    101: "Switching Protocols",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Time-out",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request-URI Too Large",
    415: "Unsupported Media Type",
    416: "Requested range not satisfiable",
    417: "Expectation Failed",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Time-out",
    505: "HTTP Version not supported"
};
export const queryKeyMapping = {
    workspace_filter: "workspace_search",
    objectref_namespace_filter: "objectref_namespace_search",
    objectref_name_filter: "objectref_name_search",
    objectref_resource_filter: "objectref_resource_filter",
    verb_filter: "verb_filter",
    response_code_filter: "response_code_filter",
    user_filter: "user_search",
    source_ip_search: "source_ip_search"
};
export const dropDownItems = {
    workspace_filter: {
        icon: "appcenter",
        text: t("WORKSPACE")
    },
    objectref_namespace_filter: {
        icon: "project",
        text: t("PROJECT")
    },
    objectref_resource_filter: {
        icon: "resource",
        text: t("RESOURCE_TYPE")
    },
    objectref_name_filter: {
        icon: "strategy-group",
        text: t("RESOURCE_NAME")
    },
    verb_filter: {
        icon: "wrench",
        text: t("VERB")
    },
    response_code_filter: {
        icon: "logout",
        text: t("STATUS_CODE")
    },
    user_filter: {
        icon: "human",
        text: t("OPERATOR")
    },
    source_ip_search: {
        icon: "ip",
        text: t("SOURCE_IP_ADDRESS")
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
        icon: "appcenter",
        title: t("SEARCH_BY_WORKSPACE"),
        tips: t("AUDIT_LOG_WORKSPACE_TIP"),
        key: "workspace_filter"
    },
    {
        icon: "project",
        title: t("SEARCH_BY_PROJECT"),
        tips: t("AUDIT_LOG_PROJECT_TIP"),
        key: "objectref_namespace_filter"
    },
    {
        icon: "resource",
        title: t("SEARCH_BY_RESOURCE_TYPE"),
        tips: t("AUDIT_LOG_RESOURCE_TYPE_TIP"),
        key: "objectref_resource_filter"
    },
    {
        icon: "strategy-group",
        title: t("SEARCH_BY_RESOURCE_NAME"),
        tips: t("AUDIT_LOG_RESOURCE_NAME_TIP"),
        key: "objectref_name_filter"
    },
    {
        icon: "wrench",
        title: t("SEARCH_BY_VERB"),
        tips: t("AUDIT_LOG_VERB_TIP"),
        key: "verb_filter"
    },
    {
        icon: "logout",
        title: t("SEARCH_BY_STATUS_CODE"),
        tips: t("AUDIT_LOG_STATUS_CODE_TIP"),
        key: "response_code_filter"
    },
    {
        icon: "human",
        title: t("SEARCH_BY_OPERATOR"),
        tips: t("AUDIT_LOG_OPERATOR_TIP"),
        key: "user_filter"
    },
    {
        icon: "ip",
        title: t("SEARCH_BY_SOURCE_IP_ADDRESS"),
        tips: t("AUDIT_LOG_SOURCE_IP_ADDRESS_TIP"),
        key: "source_ip_search"
    }
];
