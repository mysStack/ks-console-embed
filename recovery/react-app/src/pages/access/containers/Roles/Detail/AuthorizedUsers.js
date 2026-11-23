import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import module31 from "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module199 from "unpacked/module-199.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { getLocalTime } from "utils/index";
import { ROLE_QUERY_KEY } from "utils/constants";
import Module790 from "components/Base/Panel";
import Module796 from "components/Base/Status";
import Module874 from "components/Tables/Base";
import module322 from "stores/user";
import module4006 from "unpacked/module-4006.js";
let o;
function D(e, t) {
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
function k(e) {
    for(let t = 1; t < arguments.length; t++){
        var a = arguments[t] ?? {};
        if (t % 2) {
            D(Object(a), true).forEach((t)=>{
                module31(e, t, a[t]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(a));
        } else {
            D(Object(a)).forEach((t)=>{
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
            });
        }
    }
    return e;
}
const N = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.store = new module322;
        e.fetchData = async function t() {
            let a;
            let r;
            let n;
            let o;
            let i;
            let c;
            let s;
            let f;
            let d;
            let p;
            const m = arguments;
            r = m.length > 0 && m[0] !== undefined ? m[0] : {};
            n = e.props.match.params;
            o = n.name;
            i = n.namespace;
            c = n.workspace;
            s = n.cluster;
            f = e.props.detailStore.module;
            d = await e.store.fetchList(k((a = {}, module31(a, ROLE_QUERY_KEY[f], o), module31(a, "namespace", i), module31(a, "workspace", c), module31(a, "cluster", s), a), r));
            p = e.store.getModule(n);
            if ((d ?? []).length > 0 && p !== "users") {
                await e.store.getAllUserStatus();
            }
        };
        e.getColumns = function() {
            return [
                {
                    title: t("USERNAME"),
                    dataIndex: "username",
                    width: "33%"
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    width: "33%",
                    render: function(e) {
                        return <Module796 type={e} name={t(`USER_${e.toUpperCase()}`)}/>;
                    }
                },
                {
                    title: t("LAST_LOGIN"),
                    dataIndex: "lastLoginTime",
                    width: "33%",
                    render: function(e) {
                        return <p>{e ? getLocalTime(e).format("YYYY-MM-DD HH:mm:ss") : t("NOT_LOGIN_YET")}</p>;
                    }
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const a = module14.toJS(this.store.list);
                const { data, total, page, limit, isLoading } = a;
                const i = module14.toJS(this.store.allUserStatus) ?? [];
                const data_1 = (data ?? []).map((e)=>{
                    const t = i[e.name];
                    return module199({}, e, t);
                });
                const pagination = {
                    total,
                    page,
                    limit
                };
                return <Module790 title={t("AUTHORIZED_USER_PL")}><Module874 className={module4006.table} data={data_1} columns={this.getColumns()} pagination={pagination} isLoading={isLoading} onFetch={this.fetchData} emptyProps={this.emptyProps} hideCustom hideHeader/></Module790>;
            }
        },
        {
            key: "emptyProps",
            get: function() {
                return {
                    icon: "human",
                    name: "USER",
                    desc: t("NO_AUTHORIZED_USER_DESC"),
                    className: module4006.table
                };
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default N;
