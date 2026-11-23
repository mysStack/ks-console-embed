import "./module-15.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module31 from "./module-31.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module63 from "./module-63.js";
import Module788 from "./module-788.js";
import module322 from "./module-322.js";
import module1732 from "./module-1732.js";
import { ROLE_QUERY_KEY } from "./module-72.js";
import module3324 from "./module-3324.js";
let u;
let c;
let s;
const T = observer((s = c = ((Component_1)=>{
    module55(n, Component_1);
    let a;
    var r = ((e)=>{
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
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.state = {
            users: [],
            groups: {},
            isLoading: false
        };
        t.store = new module322;
        t.groupStore = new module1732;
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { visible, detail } = props;
                if (visible && detail.name) {
                    this.fetchData();
                }
            }
        },
        {
            key: "fetchData",
            value: (a = module44(module41.mark(function e() {
                let t;
                let a;
                let r;
                let rolename;
                let cluster;
                let workspace;
                let namespace;
                let users;
                let groups;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = this.props;
                                r = a.module;
                                rolename = a.detail.name;
                                cluster = a.cluster;
                                workspace = a.workspace;
                                namespace = a.namespace;
                                this.setState({
                                    isLoading: true
                                });
                                e.next = 4;
                                return this.store.fetchList((t = {}, module31(t, ROLE_QUERY_KEY[r], rolename), module31(t, "cluster", cluster), module31(t, "workspace", workspace), module31(t, "namespace", namespace), module31(t, "limit", -1), t));
                            case 4:
                                users = e.sent;
                                if (!module63(users) || !workspace) {
                                    e.next = 10;
                                    break;
                                }
                                e.next = 8;
                                return this.groupStore.getWorkspaceRoleBinding("", {
                                    cluster,
                                    workspace,
                                    namespace,
                                    rolename
                                });
                            case 8:
                                groups = e.sent;
                                this.setState({
                                    groups
                                });
                            case 10:
                                this.setState({
                                    users,
                                    isLoading: false
                                });
                            case 11:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function() {
                return a.apply(this, arguments);
            })
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, visible, onOk, onCancel, isSubmitting } = props;
                const state = this.state;
                const { users, groups, isLoading } = state;
                return <Module788 width={504} onOk={isLoading || users.length || groups.totalItems ? null : onOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting} okButtonType="danger" hideHeader><div className={module3324.body}><div className="h5">{t("DELETE_ROLE")}</div><p>{!isLoading && users.length ? t.html(`DELETE_ROLE_USER_TIP${users.length === 1 ? "" : "_PL"}`, {
                    count: users.length
                }) : groups.totalItems ? t.html(`DELETE_ROLE_DEPARTMENT_TIP${groups.totalItems === 1 ? "" : "_PL"}`, {
                    count: groups.totalItems
                }) : t.html("DELETE_ROLE_TIP", {
                    resource: detail.name
                })}</p></div></Module788>;
            }
        }
    ]);
    return n;
})(Component), c.propTypes = {
    detail: module1.object,
    module: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, c.defaultProps = {
    detail: {},
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, u = s)) || u;
export default T;
