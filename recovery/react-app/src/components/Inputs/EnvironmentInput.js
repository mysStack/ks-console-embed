import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module1001 from "stores/configmap";
import module853 from "stores/secret";
import module437 from "stores/federated";
import module1168 from "unpacked/module-1168.js";
import module934 from "unpacked/module-934.js";
import module1000 from "unpacked/module-1000.js";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { trigger } from "utils/action";
import Module2252 from "components/Inputs/EnvironmentInput/ConfigOrSecret";
import Module2254 from "components/Inputs/EnvironmentInput/Item";
import Module830 from "components/Inputs/ArrayInput";
import module1535 from "unpacked/module-1535.js";
import Module2255 from "components/Inputs/EnvironmentInput/ArrowModal";
let i;
let c;
let s;
const z = trigger((s = c = ((Component_1)=>{
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
        t.handleGetResource = function() {
            const t_props = t.props;
            const a = {
                namespace: t_props.namespace,
                cluster: t_props.cluster
            };
            Promise.all([
                t.configMapStore.fetchListByK8s(a),
                t.secretStore.fetchListByK8s(a)
            ]).then((e)=>{
                const a = module96(e, 2);
                const configMaps = a[0];
                const secrets = a[1];
                t.setState({
                    configMaps,
                    secrets
                });
            });
        };
        t.handleResourceData = function(e, a) {
            const t_props = t.props;
            const { value, onChange } = t_props;
            const u = a === "configmaps" ? "configMapKeyRef" : "secretKeyRef";
            const name = module26(e, "metadata.name");
            const i = module26(e, "data");
            const c = module63(i) ? "" : Object.keys(module26(e, "data"))[0];
            const s = {
                name: c,
                valueFrom: {}
            };
            s.valueFrom[u] = {
                name,
                key: c
            };
            if (Array.isArray(value)) {
                value.push(s);
                onChange(module61(value));
            } else {
                onChange([
                    {
                        ...s
                    }
                ]);
            }
        };
        t.handleCreateSecrets = function() {
            const t_props = t.props;
            const { namespace, cluster, isFederated, projectDetail } = t_props;
            t.trigger("secret.create", {
                module: "secrets",
                namespace,
                cluster,
                isFederated,
                projectDetail,
                store: t.secretStore,
                success: async (a)=>{
                    let secrets;
                    secrets = await t.secretStore.fetchListByK8s({
                        namespace,
                        cluster
                    });
                    t.setState({
                        secrets
                    }, function() {
                        t.handleResourceData(a, "secrets");
                    });
                }
            });
        };
        t.handleCreateConfig = function() {
            const t_props = t.props;
            const { namespace, cluster, isFederated, projectDetail } = t_props;
            t.trigger("configmap.create", {
                module: "configmaps",
                namespace,
                cluster,
                isFederated,
                projectDetail,
                store: t.configMapStore,
                success: async (a)=>{
                    let configMaps;
                    configMaps = await t.configMapStore.fetchListByK8s({
                        namespace,
                        cluster
                    });
                    t.setState({
                        configMaps
                    }, function() {
                        t.handleResourceData(a, "configmaps");
                    });
                }
            });
        };
        t.checkItemValid = function(e) {
            return !(module63(e) || module63(e.name) || module63(e.value) && module63(e.valueFrom));
        };
        t.handleBulkQuote = function(e) {
            const a = module136(e);
            const t_props = t.props;
            const r_value = t_props.value;
            const l = r_value ?? [];
            t_props.onChange([].concat(module61(l), module61(a)));
        };
        const e_isEdgeWize = e.isEdgeWize;
        t.configMapStore = e_isEdgeWize ? new module1168 : new module1001;
        t.secretStore = e_isEdgeWize ? new module934 : new module853;
        if (e.isFederated) {
            t.configMapStore = e_isEdgeWize ? new module1000({
                module: t.configMapStore.module
            }) : new module437({
                module: t.configMapStore.module
            });
            t.secretStore = e_isEdgeWize ? new module1000({
                module: t.secretStore.module
            }) : new module437({
                module: t.secretStore.module
            });
        }
        t.state = {
            configMaps: [],
            secrets: []
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.handleGetResource();
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { handleInputError, ...rest } = props;
                const state = this.state;
                const { configMaps, secrets } = state;
                return <Module830 className={module1535.wrapper} itemType="object" checkItemValid={this.checkItemValid} addText={t("ADD_ENVIRONMENT_VARIABLE")} extraAdd=<><span className={module1535.desc}>{t.html("CREATE_CONFIGMAP_SECRET_DESC")}<a onClick={this.handleCreateConfig}>{t("CREATE_CONFIG")}</a>{t("OR")}<a onClick={this.handleCreateSecrets}>{t("CREATE_SECRET")}</a></span><Module2255 className={module1535.extraBtn} dataTest="add-env-configmap" onOK={this.handleBulkQuote} text={t("BATCH_REFERENCE")} modalWidth={520} modalHeight={492}><Module2252 configMaps={configMaps} secrets={secrets}/></Module2255></> {...rest}><Module2254 configMaps={configMaps} secrets={secrets} repeatKeyArr={this.getRepeat} handleInputError={handleInputError}/></Module830>;
            }
        },
        {
            key: "getRepeat",
            get: function() {
                const value = this.props.value;
                const t = value === undefined ? [] : value;
                if (t.length > 1) {
                    const a = {};
                    t.forEach((e, t)=>{
                        const n = e?.name ?? "";
                        if (e.name !== "") {
                            if (a[n]) {
                                a[n].push(`${t}`);
                            } else {
                                a[n] = [];
                            }
                        }
                    });
                    return Object.values(a).reduce((acc, item)=>[].concat(module61(acc), module61(item)), []);
                }
                return [];
            }
        }
    ]);
    return r;
})(Component), c.propTypes = {
    name: module1.string,
    value: module1.array,
    onChange: module1.func,
    handleInputError: module1.func
}, c.defaultProps = {
    name: "",
    onChange: function() {},
    handleInputError: function() {}
}, i = s)) || i;
export default z;
