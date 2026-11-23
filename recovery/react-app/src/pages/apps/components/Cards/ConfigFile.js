import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-75.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module240 from "unpacked/module-240.js";
import Module1373 from "pages/apps/components/Cards/UploadInfo";
import module943 from "stores/openpitrix/version";
import module936 from "stores/openpitrix/file";
import { CAN_EDIT_STATUS } from "configs/openpitrix/version";
import module4412 from "unpacked/module-4412.js";
let u;
let l;
let c;
const O = observer((c = l = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.fetchData = function() {
            const n_props = n.props;
            const { appId, versionId } = n_props;
            if (appId && versionId) {
                n.store.fetchDetail({
                    app_id: appId,
                    version_id: versionId
                });
            }
        };
        n.getPackageName = function() {
            const appName = n.props.appName;
            const { package_name, name = "" } = n.store.detail;
            if (!package_name || package_name.startsWith("att-")) {
                return `${appName}-${name}`;
            }
            return package_name;
        };
        n.modifyPackage = async (r)=>{
            await n.store.update(r);
            module240.success({
                content: `${t("MODIFY_SUCCESSFUL")}`
            });
            await n.fetchData();
        };
        n.store = new module943;
        n.fileStore = new module936;
        return n;
    }
    module37(a, [
        {
            key: "hasPermission",
            get: function() {
                return globals.app.hasPermission({
                    module: "app-templates",
                    actions: [
                        "manage",
                        "edit"
                    ]
                });
            }
        }
    ]);
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.versionId !== this.props.versionId) {
                    this.fetchData();
                }
            }
        },
        {
            key: "renderUpdate",
            value: function() {
                const detail = this.store.detail;
                if (detail.description) {
                    return <div className={module4412.updateInfo}><div className={module4412.title}>{t("VERSION_INFO")}</div><pre>{detail.description}</pre></div>;
                }
                return <div className={module4412.updateInfo}><pre>{t("NO_VERSION_INFO_DESC")}</pre></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const detail = this.store.detail;
                return <div className={module4412.main}><Module1373 fileStore={this.fileStore} onOk={this.modifyPackage} packageName={this.getPackageName()} updateTime={detail.update_time || detail.status_time} type="MODIFY_VERSION" appId={detail.app_id} versionId={detail.version_id} canEdit={this.hasPermission && CAN_EDIT_STATUS.includes(detail.status)} className={module4412.uploadInfo} hasPackage/>{this.renderUpdate()}</div>;
            }
        }
    ]);
    return a;
})(Component), l.propTypes = {
    appId: module1.string,
    versionId: module1.string,
    appName: module1.string
}, l.defaultProps = {
    appId: "",
    versionId: "",
    appName: ""
}, u = c)) || u;
export default O;
