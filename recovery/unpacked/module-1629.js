import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-319.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module31 from "./module-31.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component, createRef } from "./module-553.js";
import module3 from "./module-3.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module241 from "./module-241.js";
import Module864 from "./module-864.js";
import { safeAtob } from "./module-440.js";
import module186 from "./module-186.js";
import { REPO_KEY_MAP } from "./module-72.js";
import Module833 from "./module-833.js";
import module2732 from "./module-2732.js";
let u;
let c;
let s;
let i;
let f;
const x = observer((c = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.tokenFormRef = createRef();
        e.state = {
            isLoading: false,
            searchValue: ""
        };
        module65(e, "repoListData", s, module88(e));
        e.handleFormChange = function() {
            if (e.props.store.isAccessTokenWrong) {
                e.props.store.handleChangeAccessTokenWrong();
            }
        };
        module65(e, "handleActiveOrgChange", i, module88(e));
        e.handleSubmit = function(t) {
            const a = module31({}, REPO_KEY_MAP[e.scmType], {
                repo: module26(e.repoListData, `${t}.name`),
                credential_id: e.credentialId,
                owner: module26(module14.toJS(e.orgList), `data[${e.activeRepoIndex}].name`),
                discover_branches: 1,
                discover_pr_from_forks: {
                    strategy: 2,
                    trust: 2
                },
                discover_pr_from_origin: 2,
                discover_tags: true,
                description: module26(e.repoListData, `${t}.description`)
            });
            e.props.handleSubmit(a);
        };
        module65(e, "handlePasswordConfirm", f, module88(e));
        e.getCredentialsListData = function(t) {
            const e_props = e.props;
            const { devops, cluster } = e_props;
            return e.props.store.getCredentials({
                devops,
                cluster,
                ...t
            });
        };
        e.optionRender = function({ label, type, disabled }) {
            return <span style={{
                display: "flex",
                alignItem: "center"
            }}>{label}  <module186.Tag type={disabled ? "" : "warning"}>{type && t(`CREDENTIAL_TYPE_${type.toUpperCase()}`)}</module186.Tag></span>;
        };
        e.handleUpdateOrgList = async (a)=>{
            let n;
            let l;
            l = e.orgList.pagination;
            await e.props.store.getOrganizationList({
                pageNumber: a?.page ?? 1,
                pageSize: l.pageSize,
                more: (n = a?.more) !== null && n !== undefined && n,
                ...e.props.store.orgParams
            }, e.scmType, e.props.cluster);
        };
        e.handleUpdateRepoList = async (a)=>{
            let n;
            let u;
            let c;
            u = e.repoList.pagination;
            c = await e.props.store.getRepoList({
                activeRepoIndex: e.activeRepoIndex,
                cluster: e.props.cluster,
                pageNumber: a?.page ?? 1,
                pageSize: u.pageSize,
                more: (n = a?.more) !== null && n !== undefined && n
            });
            e.repoListData = module61(c.data);
        };
        e.renderSearch = function() {
            return <div className={module2732.search}><module186.InputSearch value={e.state.searchValue} onSearch={e.filterResource} placeholder={t("SEARCH_BY_NAME")}/></div>;
        };
        e.filterResource = function(searchValue) {
            if (module63(searchValue)) {
                e.repoListData = module61(e.repoList.data);
            } else {
                e.repoListData = e.repoList.data.filter((e)=>e.name.includes(searchValue));
            }
            e.setState({
                searchValue
            });
        };
        e.renderEmpty = function(a) {
            return <div className={module2732.tabContent}>{a.isLoading ? <module186.Loading><div className={module2732.orgList}/></module186.Loading> : <div className={module2732.orgList}>{e.renderAccessTokenForm()}</div>}<div className={module2732.emptyRepoList}><div className={module2732.placeHolder}><img src="/assets/empty-card.svg" alt=""/><p className={module2732.title}>{t(`${e.scmType.toUpperCase()}_CREDENTIAL_EMPTY`)}</p></div></div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderAccessTokenForm",
            value: function() {
                const _this = this;
                const store = this.props.store;
                const { tokenFormData, credentials, isAccessTokenWrong } = store;
                return <div className={module2732.card}><module186.Form data={tokenFormData} onSubmit={this.handlePasswordConfirm} onChange={this.handleFormChange} ref={this.tokenFormRef}><module186.Form.Item label={t("CREDENTIAL")} rules={[
                    {
                        required: true,
                        message: t("PIPELINE_CREDENTIAL_EMPTY_TIP")
                    }
                ]} error={isAccessTokenWrong ? {
                    message: {
                        message: t.html("INCORRECT_GITHUB_TOKEN_DESC")
                    }
                } : undefined} desc=<p>{t("SELECT_CREDENTIAL_DESC")}<span className={module2732.clickable} onClick={function() {
                    _this.props.showCredential();
                    _this.props.setCredentialsFormData({
                        type: "username_password",
                        data: {
                            username: "admin"
                        }
                    });
                }}>{t("CREATE_CREDENTIAL")}</span></p>><module186.Select name="credentialId" options={this.credentialsList} pagination={module241(credentials, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={credentials.isLoading} onFetch={this.getCredentialsListData} optionRenderer={this.optionRender} valueRenderer={this.optionRender} placeholder=" " searchable clearable onChange={function(credentialId) {
                    _this.props.store.tokenFormData = {
                        credentialId
                    };
                }}/></module186.Form.Item><module186.Button className={module2732.confirmButton} loading={this.state.isLoading} onClick={this.handlePasswordConfirm}>{t("OK")}</module186.Button></module186.Form></div>;
            }
        },
        {
            key: "renderOrgList",
            value: function() {
                const _this = this;
                const { data, isEnd, pagination = {}, isLoading } = this.orgList;
                return <Module864 data={module14.toJS(data)} isEnd={isEnd} page={pagination.pageNumber || 1} loading={isLoading} onFetch={this.handleUpdateOrgList} noMount>{!module63(data) && data.map((t, a)=><div key={t.name} className={module3(module2732.repo, module31({}, module2732["repo-active"], _this.activeRepoIndex === a))} onClick={function() {
                        return _this.handleActiveOrgChange(a);
                    }}><div className={module2732.avatar}><img src={t.avatar} alt={t.name}/></div><div className={module2732.name}>{t.name}</div></div>)}</Module864>;
            }
        },
        {
            key: "renderRepoList",
            value: function() {
                const _this = this;
                const { isEnd, pagination = {}, isLoading } = this.repoList;
                if (module63(this.repoListData)) {
                    return <module186.Loading spinning={isLoading}><Module833 className={module2732.empty} icon="exclamation" title={t("NO_DATA")} desc={t("NO_REPO_FOUND_DESC")}/></module186.Loading>;
                }
                return <Module864 data={module14.toJS(this.repoListData)} isEnd={isEnd} page={pagination.pageNumber || 1} loading={isLoading} onFetch={this.handleUpdateRepoList} wrapperClassName={module2732.repoListBox} noMount>{this.repoListData.map((a, r)=><div className={module2732.repo} key={`${a.name}-${r}`}><div className={module2732.icon}><module186.Icon name={_this.scmType === "bitbucket_server" ? "bitbucket" : _this.scmType} size={40}/></div><div className={module2732.info}><div className={module2732.name}>{a.name}</div><div className={module2732.desc}>{a.description}</div></div><div className={module2732.action} onClick={function() {
                        return _this.handleSubmit(r);
                    }} data-repo-index={r}><module186.Button type="control">{t("SELECT")}</module186.Button></div></div>)}</Module864>;
            }
        },
        {
            key: "render",
            value: function() {
                if (!this.orgList.isLoading && module63(module14.toJS(this.orgList.data))) {
                    return this.renderEmpty(this.orgList.data);
                }
                return <div className={module2732.tabContent}><div className={module2732.orgList}>{this.renderOrgList()}</div><div className={module2732.repoListContainer}><>{this.renderSearch()}</><div className={module2732.repoList}>{this.renderRepoList()}</div></div></div>;
            }
        },
        {
            key: "orgList",
            get: function() {
                return this.props.store.orgList;
            }
        },
        {
            key: "activeRepoIndex",
            get: function() {
                return this.props.store.activeRepoIndex;
            }
        },
        {
            key: "repoList",
            get: function() {
                return this.props.store.repoList;
            }
        },
        {
            key: "scmType",
            get: function() {
                return "github";
            }
        },
        {
            key: "credentialsList",
            get: function() {
                return module61(this.props.store.credentials.data.map((e)=>({
                        label: e.name,
                        value: e.name,
                        type: e.type,
                        namespace: e.namespace,
                        token: module26(e, "_originData.data.password")
                    })).filter((e)=>e.type === "username_password"));
            }
        }
    ]);
    return r;
})(Component), s = module49(c.prototype, "repoListData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
}), i = module49(c.prototype, "handleActiveOrgChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let r;
            _this.props.store.handleChangeActiveRepoIndex(parseInt(a, 10));
            r = await _this.props.store.getRepoList({
                activeRepoIndex: parseInt(a, 10),
                cluster: _this.props.cluster,
                more: false
            });
            _this.repoListData = module61(r.data);
        };
    }
}), f = module49(c.prototype, "handlePasswordConfirm", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function t() {
            let a;
            let cluster;
            let devops;
            let l;
            let u;
            let secretName;
            let secretNamespace;
            let token;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            a = _this.props;
                            cluster = a.cluster;
                            devops = a.devops;
                            l = _this.tokenFormRef.current.getData();
                            _this.credentialId = l.credentialId;
                            if (_this.credentialId) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return", false);
                        case 5:
                            _this.setState({
                                isLoading: true
                            });
                            u = _this.credentialsList.find((t)=>t.value === _this.credentialId);
                            if (module63(u)) {
                                t.next = 15;
                                break;
                            }
                            secretName = module26(u, "value");
                            secretNamespace = module26(u, "namespace");
                            token = safeAtob(module26(u, "token"));
                            t.next = 13;
                            return _this.props.store.putAccessName({
                                secretName,
                                secretNamespace,
                                cluster,
                                devops,
                                token
                            }).finally(()=>{
                                _this.setState({
                                    isLoading: false
                                });
                            });
                        case 13:
                            t.next = 16;
                            break;
                        case 15:
                            _this.setState({
                                isLoading: false
                            });
                        case 16:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
    }
}), u = c)) || u;
export default x;
