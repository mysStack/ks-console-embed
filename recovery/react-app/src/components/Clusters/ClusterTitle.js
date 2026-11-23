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
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module997 from "unpacked/module-997.js";
import module838 from "components/Base/Indicator";
import module26 from "unpacked/module-26.js";
import module189 from "unpacked/module-189.js";
import module1 from "unpacked/module-1.js";
import * as module553 from "unpacked/module-553.js";
import { showNameAndAlias } from "utils/index";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "utils/constants";
import module2114 from "unpacked/module-2114.js";
const D = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.iconSizeMap = {
            large: 48,
            normal: 40,
            small: 20
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { theme, size, className, cluster, tagClass, noStatus, onClick, isEdgeWize, isExpired = false } = this.props;
                if (!cluster) {
                    return null;
                }
                const y = module26(cluster.conditions, "Ready.status") === "True";
                const cluster_isSchedulable = cluster.isSchedulable;
                const D = this.iconSizeMap[size];
                return module553.default.createElement("div", {
                    className: module3(module2114.wrapper, module2114[theme], module2114[size], className)
                }, module553.default.createElement("div", {
                    className: module2114.icon,
                    style: {
                        height: D
                    }
                }, module553.default.createElement(module186.Icon, {
                    name: isEdgeWize ? "edge-cluster" : CLUSTER_PROVIDER_ICON[cluster.provider] || "kubernetes",
                    size: D,
                    type: theme
                }), isExpired ? module553.default.createElement(module838, {
                    className: module2114.indicator,
                    type: "error"
                }) : noStatus ? null : y ? module553.default.createElement(module838, {
                    className: module2114.indicator,
                    type: "ready"
                }) : null), module553.default.createElement("div", {
                    className: module2114.title
                }, module553.default.createElement("div", {
                    className: module2114.name
                }, onClick && y ? module553.default.createElement("a", {
                    title: showNameAndAlias(cluster),
                    onClick
                }, showNameAndAlias(cluster)) : module553.default.createElement("span", {
                    title: showNameAndAlias(cluster)
                }, showNameAndAlias(cluster)), cluster.group && module553.default.createElement(module186.Tag, {
                    className: module3("margin-l12", tagClass),
                    type: CLUSTER_GROUP_TAG_TYPE[cluster.group]
                }, t(`ENV_${cluster.group.toUpperCase()}`, {
                    defaultValue: cluster.group
                })), cluster.isHost && module553.default.createElement(module186.Tag, {
                    className: module3("margin-l12", tagClass),
                    type: "warning"
                }, t("HOST_CLUSTER")), " ", size === "small" && !noStatus && (!y || !cluster_isSchedulable) && module553.default.createElement(module997, {
                    data: cluster
                })), module553.default.createElement("div", {
                    className: module2114.description
                }, (()=>{
                    if (isExpired) {
                        return module553.default.createElement("p", {
                            className: module2114.isExpired
                        }, module553.default.createElement(module186.Icon, {
                            name: "information",
                            size: "15",
                            color: {
                                primary: "#ffffff",
                                secondary: "#ab2f29"
                            }
                        }), t("KUBE_CONFIG_IS_EXPIRED"));
                    }
                    const e = module553.default.createElement("p", {
                        className: module3("ellipsis", module2114.ellipsis),
                        title: cluster.description
                    }, cluster.description || "-");
                    if (noStatus || y && cluster_isSchedulable) {
                        return e;
                    }
                    return module553.default.createElement(module997, {
                        data: {
                            ...cluster,
                            conditions: module189(cluster.conditions, "KubeConfigCertExpiresInSevenDays")
                        }
                    });
                })())));
            }
        }
    ]);
    return r;
})(module553.Component);
export default D;
D.propTypes = {
    theme: module1.PropTypes.oneOf([
        "dark",
        "light"
    ]),
    size: module1.PropTypes.oneOf([
        "normal",
        "small",
        "large"
    ])
};
D.defaultProps = {
    theme: "dark",
    size: "normal"
};
