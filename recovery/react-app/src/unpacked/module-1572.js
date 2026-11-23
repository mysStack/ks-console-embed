import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-10.js";
import "./module-24.js";
import "./module-85.js";
import "./module-137.js";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-4.js";
import "./module-22.js";
import * as module553 from "./module-553.js";
import module2453 from "./module-2453.js";
import module186 from "./module-186.js";
import module1175 from "./module-1175.js";
import module2454 from "./module-2454.js";
const m = new module1175;
export default function({ detail, cluster, handleBindIp, renderBtn }) {
    const y = detail || {};
    const { metadata, parentKey } = y;
    const _ = module2453(parentKey || [], 2).map((e)=>e[1] || e[0]);
    const O = metadata?.annotations || {};
    const S = Object.keys(O).find((e)=>e.includes("infra.kubesphere.io/ippool"));
    const C = module553.useState([]);
    const D = module96(C, 2);
    const k = D[0];
    const N = D[1];
    function T() {
        return (T = async function e() {
            let t;
            let a;
            t = {
                limit: -1,
                page: 1,
                hasStatus: !this.isCalico && undefined,
                cluster
            };
            if (metadata?.name) {
                t.labelSelector = `nodegroup.infra.kubesphere.io/${metadata?.name}`;
            }
            if (a = await m.fetchList(t)) {
                N(a);
            }
        }).apply(this, arguments);
    }
    module553.useEffect(function() {
        if (S) {
            (function() {
                T.apply(this, arguments);
            })();
        } else {
            N([]);
        }
    }, [
        S,
        detail
    ]);
    const content = module553.default.createElement("div", null, k.map((e)=>module553.default.createElement("div", {
            key: e.name
        }, module553.default.createElement("div", {
            className: module2454["top-bar-ip-tooltip-item"]
        }, e.name), module553.default.createElement("div", {
            className: module2454["top-bar-ip-tooltip-item-ip"]
        }, t("NETWORK_SEGMENT"), " ：", e.cidr))));
    const title = `${t("全部节点组")} / ${_.join(" / ")}`;
    return module553.default.createElement("div", {
        className: module2454["top-bar"]
    }, module553.default.createElement("div", {
        className: module2454["top-bar-left"]
    }, module553.default.createElement("div", null, module553.default.createElement("img", {
        className: module2454.icon,
        width: 20,
        src: "/assets/disk_group.svg",
        alt: ""
    }), module553.default.createElement("span", {
        className: module2454["top-bar-title"]
    }, detail?.aliasName?.split("（")?.[0]), module553.default.createElement("span", {
        className: module2454["top-bar-title-label"]
    }, "（", detail?.aliasName?.split("（")?.[1])), module553.default.createElement("div", {
        className: module2454["top-bar-des"]
    }, module553.default.createElement("span", {
        className: module2454["top-bar-des-group"],
        title
    }, t("FROM_NODE_GROUP"), "：", title), module553.default.createElement("span", {
        className: module2454["top-bar-bind"]
    }, t("IP 池"), "：", module553.default.createElement("span", {
        className: module2454["top-bar-ip"]
    }, S ? module553.default.createElement(module186.Tooltip, {
        className: module2454["top-bar-ip-tooltip"],
        content
    }, module553.default.createElement("span", null, O[S])) : handleBindIp ? module553.default.createElement("span", {
        onClick: handleBindIp
    }, "点击添加") : "-")), k.length > 1 && module553.default.createElement(module186.Tag, {
        type: "primary"
    }, "+", k.length))), renderBtn);
};
