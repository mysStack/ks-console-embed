import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module31 from "./module-31.js";
import module65 from "./module-65.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module241 from "./module-241.js";
import module186 from "./module-186.js";
import { REPO_KEY_MAP } from "./module-72.js";
import module1629 from "./module-1629.js";
import module2736 from "./module-2736.js";
let s;
let i;
let f;
const A = observer((i = ((e)=>{
    module55(r, e);
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
        n.getBitbucketList = async function e() {
            let bitbucketList;
            bitbucketList = await n.props.store.getBitbucketList({
                cluster: n.props.cluster
            });
            n.setState({
                bitbucketList
            });
        };
        n.handleFormChange = function() {
            const creatBitBucketServersError = n.props.store.creatBitBucketServersError;
            const t = creatBitBucketServersError === undefined ? {} : creatBitBucketServersError;
            if (!module63(t)) {
                n.props.store.clearBitbucketErrors();
            }
        };
        module65(n, "handlePasswordConfirm", f, module88(n));
        n.handleSubmit = function(e) {
            const tokenFormData = n.props.store.tokenFormData;
            const a = module31({}, REPO_KEY_MAP[n.scmType], {
                repo: module26(n.repoListData, `${e}.name`),
                credential_id: n.credentialId,
                owner: module26(n.orgList[n.activeRepoIndex], "key") || module26(module14.toJS(n.orgList), `data[${n.activeRepoIndex}].name`),
                api_uri: module26(tokenFormData, "apiUrl"),
                discover_branches: 1,
                discover_pr_from_forks: {
                    strategy: 2,
                    trust: 2
                },
                discover_pr_from_origin: 2,
                discover_tags: true,
                description: module26(n.repoListData, `${e}.description`)
            });
            n.props.handleSubmit(a);
        };
        n.renderAccessTokenForm = function() {
            const { tokenFormData, creatBitBucketServersError = {}, credentials } = n.props.store;
            const u = module14.toJS(creatBitBucketServersError);
            return <div className={module2736.card}><module186.Form data={tokenFormData} onChange={n.handleFormChange} onSubmit={n.handlePasswordConfirm} ref={n.tokenFormRef}><module186.Form.Item label={t("BITBUCKET_SERVER_ADDRESS")} error={u.apiUrl} rules={[
                {
                    required: true,
                    message: t("BITBUCKET_SERVER_EMPTY_TIP")
                }
            ]}><module186.Select name="apiUrl" options={n.state.bitbucketList} placeholder=" " searchable/></module186.Form.Item><module186.Form.Item label={t("CREDENTIAL_SI")} rules={[
                {
                    required: true,
                    message: t("PIPELINE_CREDENTIAL_EMPTY_TIP")
                }
            ]} error={u.username || u.password} desc=<p>{t("SELECT_CREDENTIAL_DESC")}<span className={module2736.clickable} onClick={n.props.showCredential}>{t("CREATE_CREDENTIAL")}</span></p>><module186.Select name="credentialId" options={n.credentialsList} pagination={module241(credentials, [
                "page",
                "limit",
                "total"
            ])} isLoading={credentials.isLoading} onFetch={n.getCredentialsListData} optionRenderer={n.optionRender} valueRenderer={n.optionRender} placeholder=" " searchable clearable/></module186.Form.Item>{u.all ? <p className={module2736.error}>{u.all}</p> : null}<module186.Button className={module2736.confirmButton} onClick={n.handlePasswordConfirm} loading={n.state.isLoading}>{t("OK")}</module186.Button></module186.Form></div>;
        };
        n.state = {
            isLoading: false,
            bitbucketList: []
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getBitbucketList();
            }
        },
        {
            key: "scmType",
            get: function() {
                return "bitbucket_server";
            }
        },
        {
            key: "credentialsList",
            get: function() {
                return module61(this.props.store.credentials.data.map((e)=>({
                        label: e.name,
                        value: e.name,
                        type: e.type,
                        data: e.data
                    })));
            }
        }
    ]);
    return r;
})(module1629), f = module49(i.prototype, "handlePasswordConfirm", [
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
            let n;
            let l;
            let o;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            a = _this.props;
                            cluster = a.cluster;
                            n = a.devops;
                            l = _this.tokenFormRef.current.getData();
                            _this.credentialId = l.credentialId;
                            if (!module63(l) && _this.credentialId) {
                                t.next = 5;
                                break;
                            }
                            return t.abrupt("return", false);
                        case 5:
                            _this.setState({
                                isLoading: true
                            });
                            o = _this.credentialsList.find((t)=>t.value === _this.credentialId);
                            t.next = 9;
                            return _this.props.store.creatBitBucketServers({
                                cluster,
                                devops: n,
                                apiUrl: l.apiUrl,
                                secretName: _this.credentialId,
                                secretNamespace: n,
                                ...o.data
                            }).finally(()=>{
                                _this.setState({
                                    isLoading: false
                                });
                            });
                        case 9:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
    }
}), s = i)) || s;
export default A;
