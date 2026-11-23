import "unpacked/module-15.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import module246 from "unpacked/module-246.js";
import "unpacked/module-319.js";
import module451 from "unpacked/module-451.js";
import { STATUS_TRANSFER_MAP } from "configs/openpitrix/version";
export const transferAppStatus = function(e) {
    if (STATUS_TRANSFER_MAP[e]) {
        return t(`APP_STATUS_${STATUS_TRANSFER_MAP[e].toUpperCase().replace(/[^A-Z]+/g, "_")}`);
    }
    return e;
};
export const transferVersionStatus = function(e) {
    if (STATUS_TRANSFER_MAP[e]) {
        if (e === "draft") {
            return t("APP_STATUS_NOT_SUBMITTED");
        }
        return t(`APP_STATUS_${STATUS_TRANSFER_MAP[e].toUpperCase().replace(/[^A-Z]+/g, "_")}`);
    }
    return e;
};
export const transferReviewStatus = function(e) {
    let t;
    switch(e){
        case "submitted":
            t = "to-be-reviewed";
            break;
        case "passed":
        case "suspended":
        case "rejected":
        case "active":
            t = e;
            break;
        default:
            t = "in-review";
    }
    return t;
};
export const getVersionTypesName = function(e) {
    if (e) {
        return e.split(",").map((e)=>module451(e)).join(" ");
    }
    return "-";
};
export const getAppCategoryNames = function(e) {
    const u = e?.metadata?.annotations?.["kubesphere.io/alias-name"];
    if (u) {
        return u;
    }
    const o = e?.metadata?.name;
    if (o === "kubesphere-app-uncategorized") {
        return t("APP_CATE_UNCATEGORIZED");
    }
    return t(`APP_CATE_${o == null ? undefined : o.toUpperCase().replace(/[^A-Z]+/g, "_")}`, {
        defaultValue: o || e?.metadata?.name
    });
};
export const downloadFileFromBase64 = function(e = "", t) {
    const aElement = document.createElement("a");
    aElement.href = `data:application/tar+gzip;base64,${e}`;
    aElement.download = `${t}.tgz`;
    aElement.click();
};
export const compareVersion = function(e, t) {
    if (module246(e) + module246(t) !== "stringstring") {
        return false;
    }
    const a = e.split(".");
    const r = t.split(".");
    for(let n = Math.max(a.length, r.length), u = 0; u < n; u++){
        if (a[u] && !r[u] && parseInt(a[u], 10) > 0 || parseInt(a[u], 10) > parseInt(r[u], 10)) {
            return 1;
        }
        if (r[u] && !a[u] && parseInt(r[u], 10) > 0 || parseInt(a[u], 10) < parseInt(r[u], 10)) {
            return -1;
        }
    }
    return 0;
};
export const checkRepoInvalidReason = function(e) {
    return t({
        102: "UNRECOGNIZED_URL",
        103: "INVALID_CREDENTIAL_FORMAT",
        104: "MISSING_ACCESS_KEY_ID",
        105: "MISSING_SECRET_ACCESS_KEY",
        106: "S_THREE_ACCESS_DENIED",
        107: "INVALID_URL_FORMAT",
        108: "INVALID_HTTP_SCHEME",
        109: "HTTP_ACCESS_DENIED",
        110: "INVALID_HTTPS_SCHEME",
        111: "INVALID_TYPE",
        112: "INVALID_PROVIDERS",
        113: "INVALID_REPO_URL",
        114: "INVALID_S_THREE_SCHEME"
    }[e] || "INVALID_URL_DESC");
};
