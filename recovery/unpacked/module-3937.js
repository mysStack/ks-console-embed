import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { trigger } from "./module-792.js";
import module911 from "./module-911.js";
import Module806 from "./module-806.js";
import module3938 from "./module-3938.js";
let i;
const S = inject("rootStore")(i = observer(i = trigger(i = ((Component_1)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.store = new module911;
        e.state = {
            detail: {}
        };
        e.fetchData = async function t() {
            let detail;
            detail = await e.store.fetchDetail(e.props.match.params);
            e.setState({
                detail
            });
        };
        e.getOperations = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const detail = e.state.detail;
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        e.trigger("volume.snapshotContent.baseInfo.edit", {
                            store: e.store,
                            cluster,
                            namespace,
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: async ()=>{
                        e.trigger("volume.snapshot.yaml.edit", {
                            store: e.store,
                            detail,
                            yaml: detail._originData,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            title: t("DETELE_VOLUME_SNAPSHOT_CLASS"),
                            type: e.name,
                            detail,
                            success: e.returnTolist
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const n = detail === undefined ? {} : detail;
            const { createTime, driver, deletionPolicy } = n;
            if (module63(n)) {
                return null;
            }
            return [
                {
                    name: t("PROVISIONER"),
                    value: driver
                },
                {
                    name: t("DELETION_POLICY"),
                    value: deletionPolicy
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")
                }
            ];
        };
        e.returnTolist = function() {
            e.props.rootStore.routing.push(e.listUrl);
        };
        return e;
    }
    module37(n, [
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
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const r = {
                    module: this.module,
                    authKey: this.authKey,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    attrs: this.getAttrs(),
                    operations: this.getOperations(),
                    icon: "storage",
                    breadcrumbs: [
                        {
                            label: t("VOLUME_SNAPSHOT_CLASS_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...r} routes={module3938(this.props.match.path)}/>;
            }
        },
        {
            key: "name",
            get: function() {
                return "VOLUME_SNAPSHOT_CLASS";
            }
        },
        {
            key: "module",
            get: function() {
                return "volume-snapshot-classes";
            }
        },
        {
            key: "authKey",
            get: function() {
                return "volumesnapshotclasses";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/clusters/${cluster}/${this.module}`;
            }
        }
    ]);
    return n;
})(Component)) || i) || i) || i;
export default S;
