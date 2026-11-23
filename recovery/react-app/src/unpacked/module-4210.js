import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module915 from "stores/volumeSnapshot";
import module63 from "unpacked/module-63.js";
import module4211 from "unpacked/module-4211.js";
let l;
const _ = inject("detailStore")(l = observer(l = ((e)=>{
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
        e.store = new module915;
        e.renderItem = function() {
            const detail = e.store.detail;
            return module553.default.createElement("div", null, module553.default.createElement("div", {
                className: module4211.ItemBox
            }, module553.default.createElement("div", {
                className: module4211.leftBox
            }, module553.default.createElement(module186.Icon, {
                name: "snapshot",
                size: "40"
            }), module553.default.createElement("div", {
                className: module4211.rightBox
            }, module553.default.createElement("span", {
                className: module4211.title
            }, detail.name), module553.default.createElement("span", {
                className: module4211.des
            }, t("NAME")))), module553.default.createElement("div", {
                className: module4211.titleBox
            }, module553.default.createElement("span", {
                className: module4211.title
            }, detail.snapshotClassName), module553.default.createElement("span", {
                className: module4211.des
            }, t("VOLUME_SNAPSHOT_CLASS")))));
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const detail = this.props.detailStore.detail;
                const { volumeSnapshot, namespace, status, cluster } = detail;
                if (status !== "ready") {
                    this.store.isLoading = false;
                } else {
                    this.store.fetchDetail({
                        cluster,
                        name: volumeSnapshot,
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
                    title: t("VOLUME_SNAPSHOT_PL")
                }, !module63(detail) && module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, this.renderItem()));
            }
        }
    ]);
    return r;
})(module553.Component)) || l) || l;
export default _;
