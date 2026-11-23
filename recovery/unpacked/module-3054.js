import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
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
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module241 from "./module-241.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import Module818 from "./module-818.js";
import module3055 from "./module-3055.js";
const O = ((Component_1)=>{
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
        n.formattedVersionOption = function(e) {
            let a;
            if (e && (a = n.versionList[e]?.map(function(a) {
                return {
                    label: a,
                    description: t("SOFT_VERSION", {
                        value: e
                    }),
                    value: a
                };
            })) !== null && a !== undefined) {
                return a;
            }
            return [];
        };
        n.handleOk = function() {
            n.props.onOk?.(module241(n.state, [
                "containerEngine",
                "edgeSoft"
            ]));
        };
        n.handleSoftTypeChange = function(e, t) {
            n.setState(module31({}, t, {
                type: e,
                version_id: n.versionList[e]?.[0]
            }));
        };
        n.handleSoftVersionChange = function(version_id, t) {
            n.setState(module31({}, t, {
                type: n.state[t].type,
                version_id
            }));
        };
        n.renderSoftCards = function(e, t) {
            return <div className={module3055.softs}>{e.map((e)=>{
                let a;
                const { label, value, icon, disable } = e;
                const checked = value === n.state[t].type;
                return <div key={value} className={module3(module3055.soft, (a = {}, module31(a, module3055.active, checked), module31(a, module3055.unAllowable, disable), a))} onClick={function() {
                    return !disable && n.handleSoftTypeChange(value, t);
                }}><module186.Icon name={icon} size={48}/><span>{label}</span><module186.Radio checked={checked} style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px"
                }}/></div>;
            })}</div>;
        };
        n.state = {
            containerEngine: n.defaultContainerEngine,
            edgeSoft: n.defaultEdgeSoft
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, isSubmitting, onCancel, title } = props;
                return <Module788 width={600} title={title} onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><div className={module3055.title}>{t("CONTAINER_ENGINE")}</div><p className={module3055.desc}>{t("CONTAINER_ENGINE_TIPS")}</p>{this.renderSoftCards(this.containerEngines, "containerEngine")}<Module818 value={this.state.containerEngine.version_id} options={this.formattedVersionOption(this.state.containerEngine.type)} onChange={function(t) {
                    return _this.handleSoftVersionChange(t, "containerEngine");
                }}/><div className={module3055.title} style={{
                    marginTop: "20px"
                }}>{t("EDGE_SOFT")}</div><p className={module3055.desc}>{t("EDGE_SOFT_TIPS")}</p>{this.renderSoftCards(this.edgeSofts, "edgeSoft")}<Module818 value={this.state.edgeSoft.version_id} options={this.formattedVersionOption(this.state.edgeSoft.type)} onChange={function(t) {
                    return _this.handleSoftVersionChange(t, "edgeSoft");
                }}/></Module788>;
            }
        },
        {
            key: "versionList",
            get: function() {
                const t = this.props.detail?.versionList;
                const a = module189(t, "nvidiaDocker2");
                const r = module26(t, "nvidiaDocker2");
                return {
                    ...a,
                    "nvidia-docker2": r
                };
            }
        },
        {
            key: "containerEngines",
            get: function() {
                return [
                    {
                        label: "Docker",
                        icon: "docker",
                        value: "docker"
                    },
                    {
                        label: "Containerd",
                        icon: "container",
                        value: "containerd"
                    },
                    {
                        label: "Nvidia-Docker2",
                        icon: "docker",
                        value: "nvidia-docker2"
                    }
                ];
            }
        },
        {
            key: "edgeSofts",
            get: function() {
                return [
                    {
                        label: "KubeEdge",
                        icon: "iot-duotone",
                        value: "edgecore"
                    },
                    {
                        label: "其他",
                        icon: "smart-edge",
                        value: "others",
                        disable: true
                    }
                ];
            }
        },
        {
            key: "defaultContainerEngine",
            get: function() {
                return {
                    type: "docker",
                    version_id: this.versionList.docker?.[0]
                };
            }
        },
        {
            key: "defaultEdgeSoft",
            get: function() {
                return {
                    type: "edgecore",
                    version_id: this.versionList.edgecore?.[0]
                };
            }
        }
    ]);
    return r;
})(Component);
export default O;
O.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
O.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
