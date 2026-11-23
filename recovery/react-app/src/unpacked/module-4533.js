import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module26 from "unpacked/module-26.js";
import { ONLY_CPU_MEMORY_QUOTAS_MAP } from "utils/constants";
import module186 from "unpacked/module-186.js";
import module4534 from "unpacked/module-4534.js";
import module4536 from "unpacked/module-4536.js";
export default function({ detail, isLoading, currentResource }) {
    const { cluster, workspace, namespace } = currentResource;
    const _ = module553.useState([]);
    const y = module96(_, 2);
    const E = y[0];
    const b = y[1];
    module553.useEffect(function() {
        const e = Object.entries(ONLY_CPU_MEMORY_QUOTAS_MAP).map((e)=>{
            const t = module96(e, 2);
            return {
                label: t[0],
                ...t[1]
            };
        });
        b(e);
    }, []);
    return module553.default.createElement("div", {
        className: module4536.container
    }, module553.default.createElement("div", {
        className: module4536.title
    }, t("PROJECT_QUOTA_PL")), module553.default.createElement(module186.Loading, {
        spinning: isLoading
    }, module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module4536.quotaList
    }, E.map(({ label, name }, t)=>module553.default.createElement(module4534, {
            key: `${label}-${t}`,
            name: label,
            total: module26(detail, `hard["${name}"]`),
            used: module26(detail, `used["${name}"]`, 0),
            left: module26(detail, `left["${name}"]`)
        }))), module553.default.createElement("div", {
        className: module4536.more
    }, module553.default.createElement(Link, {
        to: `/${workspace}/clusters/${cluster}/projects/${namespace}/base-info`
    }, module553.default.createElement(module186.Button, null, t("VIEW_MORE")))))));
};
function h(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
