import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import Module864 from "components/Base/ScrollLoad";
import module322 from "stores/user";
import Module2972 from "components/Modals/InviteMember/User";
import module1685 from "unpacked/module-1685.js";
let l;
let o;
let u;
const D = observer((u = o = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.fetchData = function(e = {}) {
            const t_props = t.props;
            const { workspace, namespace, devops } = t_props;
            t.userStore.fetchList({
                name: t.state.name,
                workspace: namespace || devops ? workspace : undefined,
                ...e
            });
        };
        t.handleSearch = function(name) {
            t.setState({
                name
            }, t.fetchData);
        };
        t.handleSelect = function(username, roleRef) {
            t.setState(function({ members, newMembers }) {
                return {
                    members: [].concat(module61(members), [
                        username
                    ]),
                    newMembers: [].concat(module61(newMembers), [
                        {
                            username,
                            roleRef
                        }
                    ])
                };
            });
        };
        t.handleSubmit = function() {
            t.props.onOk(t.state.newMembers);
        };
        t.userStore = new module322;
        t.memberStore = new module322;
        t.state = {
            members: [],
            newMembers: []
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const props = this.props;
                const { cluster, workspace, namespace, devops } = props;
                this.memberStore.fetchList({
                    limit: -1,
                    cluster,
                    workspace,
                    namespace: namespace ?? devops
                }).then(()=>{
                    _this.setState({
                        members: _this.memberStore.list.data.map((e)=>e.name)
                    });
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, onCancel, roles, title, desc, searchPlaceholder } = props;
                const members = this.state.members;
                const { data = [], total, page, isLoading } = module14.toJS(this.userStore.list);
                return <Module788 width={691} icon="pen" onCancel={onCancel} onOk={this.handleSubmit} visible={visible} bodyClassName={module1685.modalBody} hideHeader><div className={module1685.body}><div className={module1685.title}><div className="h4">{title || t("INVITE_MEMBER")}</div><p>{desc || t("INVITE_MEMBER_DESC")}</p></div><div className={module1685.content}><module186.InputSearch placeholder={searchPlaceholder || t("INVITE_MEMBER_SEARCH_PLACEHOLDER")} onSearch={this.handleSearch}/><div className={module1685.results}><Module864 data={data} total={total} page={page} loading={isLoading} onFetch={this.fetchData}>{data.map((user)=><Module2972 key={user.name} user={user} roles={roles} selected={members.includes(user.name)} onSelect={_this.handleSelect}/>)}</Module864></div></div></div></Module788>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    roles: module1.array,
    visible: module1.bool,
    workspace: module1.string,
    namespace: module1.string,
    cluster: module1.string,
    title: module1.string,
    desc: module1.string,
    searchPlaceholder: module1.string,
    onOk: module1.func,
    onCancel: module1.func
}, o.defaultProps = {
    roles: [],
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default D;
