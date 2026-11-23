import "./module-12.js";
import "./module-135.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-860.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import Module1308 from "./module-1308.js";
import { PATTERN_NAME } from "./module-72.js";
import module322 from "./module-322.js";
import module3011 from "./module-3011.js";
let l;
const C = observer(l = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.userStore = new module322;
        n.formRef = createRef();
        n.fetchUseList = function(e) {
            n.userStore.fetchList({
                ...e,
                limit: -1
            });
        };
        n.handleOk = function() {
            const n_props = n.props;
            const { onOk, formTemplate, cluster } = n_props;
            const current = n.formRef.current;
            if (current) {
                current.validate(function() {
                    console.log(formTemplate, module88(n));
                    const e = {
                        cluster,
                        nodetree: formTemplate.metadata.name,
                        kind: "NodeTree",
                        apiVersion: "infra.kubesphere.io/v1alpha1",
                        metadata: {
                            ...formTemplate.metadata,
                            annotations: {
                                ...formTemplate.metadata.annotations,
                                "kubesphere.io/alias-name": formTemplate.spec.alias,
                                "kubesphere.io/description": formTemplate.spec.description
                            }
                        },
                        spec: {
                            parent: n.state.parentNodeKey,
                            children: [],
                            nodes: []
                        }
                    };
                    console.log(e);
                    onOk(e);
                });
            }
        };
        n.handleSelect = function(e) {
            n.setState({
                parentNodeKey: e.key
            });
        };
        n.nameValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            n.props.store.checkName({
                name: a,
                cluster: n.props.cluster
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.state = {
            parentNodeKey: ""
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchUseList();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, formTemplate } = props;
                const l = module14.toJS(this.userStore.list);
                const { page, isLoading } = l;
                return <Module788 visible={visible} onOk={this.handleOk} onCancel={onCancel} width={960} bodyClassName={module3011.body} footerClassName={module3011.footer} hideHeader><div className={module3011.header}><img src="/assets/node-group-modal.svg"/><div className={module3011.textWrapper}><div className={module3011.title}>{t("CREATE_NODE_GROUP")}</div><div className={module3011.desc}>{t("NODE_GROUP_DESC")}</div></div></div><div className={module3011.content}><module186.Form data={formTemplate} ref={this.formRef}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_DESC")}><module186.Input name="spec.alias"/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("PARENT_NODE_GROUP")}><Module1308 name="spec.parentNode" cluster={this.props.cluster} onSelect={this.handleSelect}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("NODE_GROUP_ADMINISTER")}><module186.Select name="spec.nodegroup" options={this.users} defaultValue={globals.user.username} pagination={page} isLoading={isLoading} onFetch={this.fetchUseList} searchable placeholder=" "/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="spec.description" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form></div></Module788>;
            }
        },
        {
            key: "users",
            get: function() {
                const username = globals.user.username;
                const t = this.userStore.list.data.map((e)=>({
                        label: e.username,
                        value: e.username
                    }));
                if (t.every((t)=>t.value !== username)) {
                    t.unshift({
                        label: username,
                        value: username
                    });
                }
                return t;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default C;
