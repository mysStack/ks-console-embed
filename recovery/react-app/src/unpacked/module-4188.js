import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module790 from "components/Base/Panel";
import module839 from "stores/volume";
import { getLocalTime, map_accessModes } from "utils/index";
import module14 from "unpacked/module-14.js";
import module63 from "unpacked/module-63.js";
import module194 from "unpacked/module-194.js";
import module4189 from "unpacked/module-4189.js";
let l;
const content = module553.default.createElement("div", null, module553.default.createElement("div", null, t("ACCESS_MODE_TCAP"), ":"), module553.default.createElement("div", null, "RWO (ReadWriteOnce): ", t("ACCESS_MODE_RWO")), module553.default.createElement("div", null, "ROX (ReadOnlyMany): ", t("ACCESS_MODE_ROX")), module553.default.createElement("div", null, "RWX (ReadWriteMany): ", t("ACCESS_MODE_RWX")));
const O = inject("detailStore")(l = observer(l = ((e)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.store = new module839;
        e.renderItem = function() {
            const detail = e.store.detail;
            return module553.default.createElement("div", null, module553.default.createElement("div", {
                className: module4189.ItemBox
            }, module553.default.createElement("div", {
                className: module4189.leftBox
            }, module553.default.createElement(module186.Icon, {
                name: "storage",
                size: "40"
            }), module553.default.createElement("div", {
                className: module4189.rightBox
            }, module553.default.createElement("span", {
                className: module4189.title
            }, detail.name), module553.default.createElement("span", {
                className: module4189.des
            }, t("STORAGE_CLASS_VALUE", {
                value: detail.storageClassName
            })))), module553.default.createElement("div", {
                className: module4189.titleBox
            }, module553.default.createElement("span", {
                className: module4189.title
            }, getLocalTime(detail.createTime).format("YYYY-MM-DD HH:mm:ss")), module553.default.createElement("span", {
                className: module4189.des
            }, t("CREATION_TIME_TCAP")))), module553.default.createElement("div", {
                className: module4189.IconLine
            }, module553.default.createElement(R, {
                icon: "bm",
                size: "30",
                title: "PROVISIONER",
                value: detail.storageProvisioner
            }), module553.default.createElement(R, {
                icon: function() {
                    return module553.default.createElement("img", {
                        src: "/assets/Accessmodes.svg",
                        size: 48
                    });
                },
                size: "48",
                title: function() {
                    return e.renderAccessTitle();
                },
                value: function() {
                    return e.mapperAccessMode(module14.toJS(detail.accessModes));
                }
            }), module553.default.createElement(R, {
                icon: "database",
                size: "30",
                title: "capacity",
                value: detail.capacity
            })));
        };
        e.renderAccessTitle = function() {
            return module553.default.createElement("div", {
                className: module4189.mode_title
            }, t("ACCESS_MODE_TCAP"), module553.default.createElement(module186.Tooltip, {
                content
            }, module553.default.createElement(module186.Icon, {
                name: "question",
                size: 16,
                className: module4189.toolTip
            })));
        };
        e.mapperAccessMode = function(e) {
            const t = map_accessModes(e);
            return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("span", null, t.join(",")));
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const detail = this.props.detailStore.detail;
                const { snapshotSourceName, namespace, backupStatus, cluster } = detail;
                if (backupStatus !== "success") {
                    this.store.isLoading = false;
                } else {
                    this.store.fetchDetail({
                        cluster,
                        name: snapshotSourceName,
                        namespace
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.store;
                const { detail, isLoading } = store;
                return module553.default.createElement(module790, {
                    title: t("PERSISTENT_VOLUME_CLAIM_PL")
                }, !module63(detail) && module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, this.renderItem()));
            }
        }
    ]);
    return r;
})(module553.Component)) || l) || l;
function R({ icon, size, title, value }) {
    return module553.default.createElement("div", {
        className: module4189.cardBox
    }, module194(icon) ? icon() : module553.default.createElement(module186.Icon, {
        name: icon,
        size
    }), module553.default.createElement("div", {
        className: module4189.text
    }, module553.default.createElement("span", {
        className: module4189.title
    }, module194(value) ? value() : value), module553.default.createElement("span", {
        className: module4189.des
    }, module194(title) ? title() : t(`${title}`))));
}
export default O;
