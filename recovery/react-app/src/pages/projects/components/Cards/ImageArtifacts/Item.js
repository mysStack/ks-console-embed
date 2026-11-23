import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import { formatSize, getLocalTime } from "utils/index";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import module1367 from "unpacked/module-1367.js";
import module4909 from "unpacked/module-4909.js";
let o;
const _ = observer(o = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.handleCopy = function() {
            module240.success({
                content: t("COPY_SUCCESSFUL")
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const runDetail = this.props.runDetail;
                const { imageName, imageCreated, imageSize, commandPull } = runDetail;
                if (this.props.loading) {
                    return null;
                }
                return <ul className={module4909.item}><module186.Icon name="cdn" size={40}/><li><div className={module4909.value}>{imageName}</div><div className={module4909.label}>{t("IMAGE_NAME_SCAP")}</div></li><li><div className={module4909.value}>{formatSize(imageSize)}</div><div className={module4909.label}>{t("IMAGE_SIZE_SCAP")}</div></li><li><div className={module4909.value}>{commandPull}<module1367.CopyToClipboard text={commandPull} onCopy={this.handleCopy}><module186.Icon className={module4909.copyIcon} name="copy" changeable/></module1367.CopyToClipboard></div><div className={module4909.label}>{t("PULL_COMMAND_SCAP")}</div></li><li><div className={module4909.value}>{getLocalTime(imageCreated).format("YYYY-MM-DD HH:mm:ss")}</div><div className={module4909.label}>{t("RELEASE_TIME_SCAP")}</div></li></ul>;
            }
        }
    ]);
    return r;
})(Component)) || o;
export default _;
