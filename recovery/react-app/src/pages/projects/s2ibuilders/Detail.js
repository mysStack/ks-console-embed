import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
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
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module60 from "unpacked/module-60.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import { getDisplayName, getLocalTime, parseUrl, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import module456 from "stores/s2i/builder";
import module473 from "stores/s2i/run";
import module1223 from "stores/workload/resource";
import Module806 from "pages/projects/containers/Base/Detail";
import module1367 from "unpacked/module-1367.js";
import module4895 from "unpacked/module-4895.js";
let l;
const I = inject("rootStore")(l = observer(l = trigger(l = ((Component_1)=>{
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
        e.store = new module456(e.module);
        e.resourceStore = new module1223(e.module);
        e.s2iRunStore = new module473;
        e.fetchData = async (a)=>{
            let r;
            let n;
            r = await e.store.fetchDetail(e.params, a);
            n = await e.s2iRunStore.fetchRunDetail({
                ...e.params,
                runName: module26(r, "status.lastRunName", "")
            });
            await e.s2iRunStore.fetchJobDetail({
                ...e.params,
                name: module26(n, "_originData.status.kubernetesJobName", "")
            });
        };
        e.handleCopy = function() {
            module240.success({
                content: t("COPIED_SUCCESSFUL")
            });
        };
        e.getOperations = function() {
            return [
                {
                    key: "Run",
                    text: t("RUN"),
                    action: "edit",
                    type: "control",
                    onClick: function() {
                        return e.trigger("imagebuilder.rerun", {
                            detail: module14.toJS(e.store.detail),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.baseinfo.edit", {
                            type: e.name,
                            detail: module14.toJS(e.store.detail),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.yaml.edit", {
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: e.name,
                            detail: e.store.detail,
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ];
        };
        e.pathAddCluster = function(e, t) {
            const a = e.match(/(\/kapis|api|apis)(.*)/);
            if (t && t !== "default" && module60(a)) {
                return `${a[1]}/clusters/${t}${a[2]}`;
            }
            return e;
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            const cluster = e.props.match.params.cluster;
            const a_spec = a.spec;
            const o = a_spec === undefined ? {} : a_spec;
            const c = module26(o, "config.isBinaryURL", "");
            const binaryName = e.s2iRunStore.runDetail.binaryName;
            const l = module26(o, "config.sourceUrl", "");
            const i = module26(parseUrl(l), "pathname", `/${l}`);
            const u = e.pathAddCluster(i, cluster);
            const href = `${window.location.protocol}//${window.location.host}/b2i_download${u}`;
            const f = module26(a, "spec.config.secretCode", "");
            const text = `http://s2ioperator-trigger-service.kubesphere-devops-system.svc/s2itrigger/v1alpha1/general/namespaces/${a.namespace}/s2ibuilders/${a.name}/${f ? `?secretCode=${f}` : ""}`;
            return [
                {
                    name: t("NAME"),
                    value: a.name
                },
                {
                    name: t("PROJECT"),
                    value: showNameAndAlias(a.namespace, "project")
                },
                {
                    name: t("TYPE"),
                    value: t(a.type)
                },
                {
                    name: t("BUILDER_IMAGE"),
                    value: module26(o, "config.builderImage", "-")
                },
                {
                    name: t("IMAGE_NAME"),
                    value: module26(o, "config.imageName", "-")
                },
                {
                    name: t("PULL_POLICY"),
                    value: module26(o, "config.builderPullPolicy", "-")
                },
                {
                    name: t("CODE_REPOSITORY_URL"),
                    value: c ? <a href={href} download>{binaryName}</a> : l
                },
                {
                    name: t("REMOTE_TRIGGER"),
                    value: <><span>{text}</span><module1367.CopyToClipboard text={text} onCopy={e.handleCopy}><module186.Icon name="copy" changeable/></module1367.CopyToClipboard></>
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                },
                {
                    name: t("CREATOR"),
                    value: a.creator
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
                const stores = {
                    detailStore: this.store,
                    s2iRunStore: this.s2iRunStore,
                    resourceStore: this.resourceStore
                };
                if (this.store.isLoading || this.s2iRunStore.isLoading) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const a = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("IMAGE_BUILDER_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module4895(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "s2ibuilders";
            }
        },
        {
            key: "name",
            get: function() {
                return "IMAGE_BUILDER";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "params",
            get: function() {
                return this.props.match.params;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                return `${workspace ? `/${workspace}` : ""}/clusters/${cluster}/projects/${namespace}/${this.module}`;
            }
        }
    ]);
    return r;
})(Component)) || l) || l) || l;
export default I;
