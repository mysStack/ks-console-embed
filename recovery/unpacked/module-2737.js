import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
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
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module241 from "./module-241.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module2738 from "./module-2738.js";
let c;
const C = observer(c = ((Component_1)=>{
    module55(n, Component_1);
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
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.state = {
            serverList: [],
            projectList: []
        };
        e.getProjectListByOwner = async (a)=>{
            let r;
            let n;
            let l;
            let o;
            let c;
            let s;
            let i;
            r = a.target.value;
            n = e.props;
            l = n.devops;
            o = n.cluster;
            c = e.props.store.formData;
            if (s = module26(c, "gitlab_source.server_name")) {
                i = await e.props.store.fetchGitLabProjectList({
                    devops: l,
                    cluster: o,
                    owner: r,
                    server: s
                });
                e.setState({
                    projectList: i
                });
            }
        };
        e.getProjectListByServerName = async (a)=>{
            let r;
            let n;
            let l;
            let o;
            let c;
            let s;
            r = e.props.store.formData;
            module74(r, "gitlab_source.url", e.state.serverList.find((e)=>e.value === a).url);
            n = e.props;
            l = n.devops;
            o = n.cluster;
            if (c = module26(r, "gitlab_source.owner")) {
                s = await e.props.store.fetchGitLabProjectList({
                    devops: l,
                    cluster: o,
                    owner: c,
                    server: a
                });
                e.setState({
                    projectList: s
                });
            }
        };
        e.getCredentialsListData = function(t) {
            const e_props = e.props;
            const { devops, cluster } = e_props;
            return e.props.store.getCredentials({
                devops,
                cluster,
                ...t
            });
        };
        e.getCredentialsList = function() {
            return module61(e.props.store.credentials.data.map((e)=>({
                    label: e.name,
                    value: e.name,
                    type: e.type
                })));
        };
        e.optionRender = function({ label, type, disabled }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  <module186.Tag type={disabled ? "" : "warning"}>{type && t(`CREDENTIAL_TYPE_${type.toUpperCase()}`)}</module186.Tag></span>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                let t;
                let a;
                let r;
                let serverList;
                t = this.props;
                a = t.devops;
                r = t.cluster;
                serverList = await this.props.store.fetchGitLabServerList({
                    devops: a,
                    cluster: r
                });
                this.setState({
                    serverList
                });
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.props.store;
                const { formData, credentials } = store;
                const formRef = this.props.formRef;
                const state = this.state;
                const { serverList, projectList } = state;
                return <div className={module2738.card}><module186.Form data={formData} ref={formRef}><module186.Form.Item label={t("GITLAB_SERVER_ADDRESS")} rules={[
                    {
                        required: true,
                        message: t("GITLAB_SERVER_EMPTY_TIP")
                    }
                ]}><module186.Select name="gitlab_source.server_name" options={serverList} onChange={this.getProjectListByServerName} placeholder=" "/></module186.Form.Item><module186.Form.Item label={t("PROJECT_GROUP_OWNER")} rules={[
                    {
                        required: true,
                        message: t("PROJECT_GROUP_OWNER_EMPTY_TIP")
                    }
                ]}><module186.Input name="gitlab_source.owner" onBlur={this.getProjectListByOwner}/></module186.Form.Item><module186.Form.Item label={t("CREDENTIAL_SI")} desc=<p>{t("SELECT_CREDENTIAL_DESC")}<span className={module2738.clickable} onClick={this.props.showCredential}>{t("CREATE_CREDENTIAL")}</span></p>><module186.Select name="gitlab_source.credential_id" options={this.getCredentialsList()} pagination={module241(credentials, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={credentials.isLoading} onFetch={this.getCredentialsListData} optionRenderer={this.optionRender} valueRenderer={this.optionRender} placeholder=" " searchable clearable/></module186.Form.Item><module186.Form.Item label={t("REPOSITORY_NAME")} rules={[
                    {
                        required: true,
                        message: t("REPOSITORY_NAME_EMPTY_TIP")
                    }
                ]}><module186.Select name="gitlab_source.repo" options={projectList} placeholder=" " clearable/></module186.Form.Item></module186.Form></div>;
            }
        }
    ]);
    return n;
})(Component)) || c;
export default C;
