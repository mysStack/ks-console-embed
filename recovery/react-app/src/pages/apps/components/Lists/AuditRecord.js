import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
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
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import Module1418 from "unpacked/module-1418.js";
import module1868 from "stores/openpitrix/audit";
import { getLocalTime } from "utils/index";
import module4414 from "unpacked/module-4414.js";
let o;
let u;
let l;
const k = observer((l = u = ((Component_1)=>{
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
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.store = new module1868;
        return t;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { appId, versionId } = props;
                this.store.fetchList({
                    app_id: appId,
                    version_id: versionId,
                    noLimit: true
                });
            }
        },
        {
            key: "renderItem",
            value: function(e, t) {
                return <ul key={`${t}-${e.status_time}`}><li><Module1418 type={e.status} name={e.status}/></li><li>{e.operator}</li><li>{e.message || e.review_id || "-"}</li><li className={module4414.time}>{getLocalTime(e.status_time).format("YYYY-MM-DD HH:mm:ss")}</li></ul>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const data = this.store.list.data;
                return <div className={module4414.itemMain}>{module63(data) ? <div className={module4414.empty}>{t("NO_RESOURCE_FOUND")}</div> : data.map((t, r)=>_this.renderItem(t, r))}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const isLoading = this.store.list.isLoading;
                return <div className={module3(module4414.main, className)}>{isLoading ? <module186.Loading className={module4414.loading}/> : this.renderContent()}</div>;
            }
        }
    ]);
    return a;
})(Component), u.propTypes = {
    className: module1.string,
    appId: module1.string,
    versionId: module1.string
}, u.defaultProps = {
    appId: "",
    versionId: ""
}, o = l)) || o;
export default k;
