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
import { cantDeleteSnapshotContent } from "utils/volume";
import module63 from "unpacked/module-63.js";
import module3936 from "unpacked/module-3936.js";
let u;
const E = inject("detailStore")(u = observer(u = ((e)=>{
    module55(n, e);
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.store = new module915;
        e.renderItem = function() {
            const detail = e.store.detail;
            return module553.default.createElement("div", null, module553.default.createElement("div", {
                className: module3936.ItemBox
            }, module553.default.createElement("div", {
                className: module3936.leftBox
            }, module553.default.createElement(module186.Icon, {
                name: "snapshot",
                size: "40"
            }), module553.default.createElement("div", {
                className: module3936.rightBox
            }, module553.default.createElement("span", {
                className: module3936.title
            }, detail.name), module553.default.createElement("span", {
                className: module3936.des
            }, t("NAME")))), module553.default.createElement("div", {
                className: module3936.titleBox
            }, module553.default.createElement("span", {
                className: module3936.title
            }, detail.snapshotClassName), module553.default.createElement("span", {
                className: module3936.des
            }, t("VOLUME_SNAPSHOT_CLASS")))));
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const detail = this.props.detailStore.detail;
                const { volumeSnapshot, namespace, status, cluster } = detail;
                if (status === "ready" && cantDeleteSnapshotContent(this.props.detailStore.detail)) {
                    this.store.fetchDetail({
                        cluster,
                        name: volumeSnapshot,
                        namespace
                    });
                } else {
                    this.store.isLoading = false;
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
    return n;
})(module553.Component)) || u) || u;
export default E;
