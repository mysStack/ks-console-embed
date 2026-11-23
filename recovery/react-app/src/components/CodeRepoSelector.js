import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-249.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-191.js";
import "unpacked/module-42.js";
import "unpacked/module-160.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-41.js";
import module31 from "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import module3 from "unpacked/module-3.js";
import { Component } from "unpacked/module-553.js";
import module1108 from "stores/codeRepo";
import { gitRepositorySpec2Source } from "utils/devOpsRepos";
import module14 from "unpacked/module-14.js";
import { getRepoUrl } from "utils/devops";
import { TypeSelect } from "components/Base/index";
import module3220 from "unpacked/module-3220.js";
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
