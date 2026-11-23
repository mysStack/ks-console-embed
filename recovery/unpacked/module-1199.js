import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-249.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-41.js";
import module31 from "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module3 from "./module-3.js";
import { Component } from "./module-553.js";
import module1108 from "./module-1108.js";
import { gitRepositorySpec2Source } from "./module-1182.js";
import module14 from "./module-14.js";
import { getRepoUrl } from "./module-982.js";
import { TypeSelect } from "./module-904.js";
import module3220 from "./module-3220.js";
const k = ((Component_1)=>{
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
        n.getRepoList = async (t, a)=>{
            let r;
            let devops;
            let cluster;
            r = n.props;
            devops = r.devops;
            cluster = r.cluster;
            await n.codeStore.fetchList({
                devops,
                cluster,
                ...t,
                limit: 10000
            });
            n.setState({
                repoList: n.codeStore.list.data
            }, function() {
                if (a) {
                    n.handleRepoChange(a);
                }
            });
        };
        n.isSvnRepoRepeat = function(e) {
            return n.state.svnRepoList.map(({ name, sources })=>({
                    name,
                    sources: JSON.stringify(sources)
                })).some((t)=>t.name === e.metadata.name);
        };
        n.addSvnCodeRepoOption = function(e) {
            const a = n.isSvnRepoRepeat(e);
            const { metadata, sources } = e;
            if (a) {
                module240.error({
                    content: `"${metadata.name}" ${t("CODE_REPO_EXISTS")}`
                });
                throw Error(`"${metadata.name}" ${t("CODE_REPO_EXISTS")}`);
            }
            const o = {
                name: metadata.name,
                sources
            };
            n.setState(function({ svnRepoList }) {
                return {
                    svnRepoList: [
                        o
                    ].concat(module61(svnRepoList))
                };
            }, function() {
                const e = `${metadata.name}(${sources[`${sources.source_type}_source`].remote})`;
                n.handleRepoChange(e);
            });
        };
        n.showCodeRepoCreate = function() {
            const n_props = n.props;
            const { trigger, devops, cluster } = n_props;
            trigger?.("codeRepo.create", {
                title: t("IMPORT_CODE_REPO"),
                devops,
                cluster,
                module: "codeRepos",
                noCodeEdit: true,
                store: n.codeStore,
                isCreatePipeline: true,
                addSvnCodeRepoDirectly: n.addSvnCodeRepoOption,
                success: function() {
                    n.getRepoList();
                }
            });
        };
        n.handleRepoChange = function(e) {
            const onChange = n.props.onChange;
            const a = n.allOptions.find((t)=>t.value === e);
            if (onChange) {
                onChange(a ? {
                    ...a?.repo,
                    key: e
                } : a);
            }
        };
        n.optionRenderer = function(e) {
            return function(t) {
                if (e.value) {
                    return <span className={module3220.option}>{!!e.icon && <module186.Icon name={e.icon ?? ""} type={t === "value" ? "dark" : "light"}/>}{e.value}</span>;
                }
            };
        };
        n.optionValueMap = {};
        n.codeStore = new module1108;
        n.state = {
            repoList: [],
            svnRepoList: []
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getRepoList();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { value, index, name } = props;
                return <><TypeSelect key={index} name={name} onFetch={this.getRepoList} options={module14.toJS(this.allOptions)} onChange={this.handleRepoChange} value={value?.key} placeholder={{
                    icon: "code",
                    label: t("SELECT_CODE_REPOSITORY")
                }}/><div className={module3(module3220["multi-repo"], "form-item-desc")} onClick={this.showCodeRepoCreate}>{t.html("GO_CREATE_REPO_ACTION")}</div></>;
            }
        },
        {
            key: "svnOptions",
            get: function() {
                return this.state.svnRepoList.map(({ name, sources })=>{
                    const r = `${name}(${sources[`${sources.source_type}_source`].remote})`;
                    return {
                        label: name,
                        value: r,
                        icon: "svn",
                        repo: {
                            key: r,
                            ...sources
                        }
                    };
                });
            }
        },
        {
            key: "repoOptions",
            get: function() {
                const _this = this;
                return this.state.repoList.map(({ name, _originData, repoURL, provider })=>{
                    const _originData_spec = _originData.spec;
                    const key = `${name}(${repoURL ?? getRepoUrl(_originData_spec)})`;
                    return {
                        label: name,
                        value: name,
                        icon: provider === "bitbucket_server" ? "bitbucket" : provider,
                        repo: _this.props.isCreatePipeline ? module31({
                            key,
                            source_type: _originData_spec.provider
                        }, `${_originData_spec.provider}_source`, gitRepositorySpec2Source[_originData_spec.provider]?.(_originData_spec, name)) : module14.toJS(_originData_spec),
                        disabled: _this.props.provider && _this.props.provider !== provider,
                        description: repoURL
                    };
                });
            }
        },
        {
            key: "allOptions",
            get: function() {
                const showAllItem = this.props.showAllItem;
                const a = this.svnOptions.concat(this.repoOptions);
                if (showAllItem) {
                    return [
                        {
                            label: t("ALL"),
                            value: "*",
                            icon: "allowlist"
                        }
                    ].concat(module61(a));
                }
                return a;
            }
        }
    ]);
    return r;
})(Component);
export default k;
