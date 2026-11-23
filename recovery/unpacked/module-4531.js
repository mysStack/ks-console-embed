import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-192.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-41.js";
import "./module-44.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module789 from "./module-789.js";
import module186 from "./module-186.js";
import module14 from "./module-14.js";
import { Link } from "./module-433.js";
import module322 from "./module-322.js";
import module441 from "./module-441.js";
import module446 from "./module-446.js";
import module4532 from "./module-4532.js";
export default function({ currentResource }) {
    const { cluster, workspace, namespace } = currentResource;
    const E = module553.useState(0);
    const b = module96(E, 2);
    const title = b[0];
    const O = b[1];
    const R = module553.useState({
        data: []
    });
    const A = module96(R, 2);
    const T = A[0];
    const k = A[1];
    module553.useEffect(function() {
        const e = new module322;
        const t = new module441;
        D(t);
        C(e);
    }, []);
    var D = module553.useCallback(async (t)=>{
        await t.fetchList({
            cluster,
            workspace,
            namespace,
            limit: -1
        });
        O(t.list.total);
    }, []);
    var C = module553.useCallback(async (t)=>{
        let a;
        let r;
        let n;
        await t.fetchList({
            cluster,
            workspace,
            namespace,
            limit: -1
        });
        a = module14.toJS(t.list);
        r = a.data.filter((e)=>e.lastLoginTime !== undefined && e.lastLoginTime !== "");
        n = module446(r, function(e) {
            e.lastLoginTime;
        }).splice(0, 3);
        a.data = n;
        k(module14.toJS(a));
    }, []);
    return module553.default.createElement("div", {
        className: module4532.container
    }, module553.default.createElement("div", {
        className: module4532.title
    }, t("PROJECT_MEMBERS_AND_ROLES")), module553.default.createElement("div", {
        className: module4532.body
    }, module553.default.createElement(module186.Loading, {
        spinning: false
    }, module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module4532.summary
    }, module553.default.createElement("div", {
        className: module4532.item
    }, module553.default.createElement(module789, {
        icon: "human",
        iconSize: 40,
        title: T.total,
        className: module4532.avatar,
        desc: T.total === 1 ? t("PROJECT_MEMBER_SCAP") : t("PROJECT_MEMBER_SCAP_PL"),
        noLink: true
    })), module553.default.createElement("div", {
        className: module4532.item
    }, module553.default.createElement(module789, {
        icon: "role",
        iconSize: 40,
        title,
        className: module4532.avatar,
        desc: title === 1 ? t("PROJECT_ROLE_SCAP") : t("PROJECT_ROLE_SCAP_PL"),
        noLink: true
    }))), module553.default.createElement("div", {
        className: module4532.bolderText
    }, t("RECENTLY_LOGGED_IN_MEMBERS")), module553.default.createElement("div", {
        className: module4532.memberList
    }, module553.default.createElement("div", {
        className: module4532.item
    }, T?.data?.map(function(e) {
        return module553.default.createElement(module789, {
            key: e.name,
            className: module4532.memberListAvatarItem,
            avatar: e.avatar_url || "/assets/default-user.svg",
            title: e.name,
            desc: e.email,
            noLink: true
        });
    }) ?? t("NO_DATA"))), module553.default.createElement("div", {
        className: module4532.more
    }, module553.default.createElement(Link, {
        to: `/${workspace}/clusters/${cluster}/projects/${namespace}/members`
    }, module553.default.createElement(module186.Button, null, t("VIEW_MORE"))))))));
};
