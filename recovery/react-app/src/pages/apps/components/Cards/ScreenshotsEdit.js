import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
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
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import Module836 from "components/Base/Image";
import Module952 from "components/Base/Upload";
import { SCREENSHOTS_LIMIT, UPLOAD_FILE_TYPES } from "configs/openpitrix/app";
import module2463 from "unpacked/module-2463.js";
let u;
let o;
let i;
const D = observer((i = o = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            error: ""
        };
        e.onUploadClick = function() {
            e.uploadRef.onClick();
        };
        e.uploadScreenshot = async (a)=>{
            let r;
            let n;
            let u;
            let o;
            let i;
            let s;
            let f;
            let error;
            r = e.props.fileStore;
            n = r.checkFile;
            u = r.handleFileByBase64Str;
            o = e.props.store.uploadScreenshot2;
            i = e.props;
            s = i.handleChange;
            f = i.detail;
            if (error = n(a, "screenshots")) {
                e.setState({
                    error
                });
            } else {
                u(a, async (r)=>{
                    let n;
                    e.setState({
                        error: ""
                    });
                    n = await o(a, r, f?.workspace);
                    s(n, "attachments");
                });
            }
            return Promise.reject();
        };
        e.deleteScreenshot = async (a, r)=>{
            let n;
            let u;
            let o;
            let i;
            n = e.props;
            u = n.handleChange;
            o = n.store;
            i = o.deleteScreenshot(a, r);
            u(i, "attachments");
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { detail, handleChange } = props;
                const r = module26(detail, "attachments", []);
                this.props.store.getImageUrlList(r, detail?.workspace).then((e)=>{
                    handleChange(e, "attachments");
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const error = this.state.error;
                const detail = this.props.detail;
                const n = module26(detail, "attachments", []).map((e)=>{
                    if (typeof e === "string") {
                        return "";
                    }
                    return e;
                });
                const n_length = n.length;
                return <div><div className={module2463.title}>{t("APP_SCREENSHOTS")}</div><div className={module2463.screenshot}><ul className={module2463.pictures}>{n?.map(function(a, n) {
                    return <li key={n}>{!!Object.values(a)[0] && <><Module836 src={Object.values(a)[0]} isBase64Str={!!Object.values(a)[0]}/></>}<div className={module2463.delete}><label onClick={function() {
                        _this.deleteScreenshot(n, detail);
                    }}><module186.Icon name="trash" size={20} className={module2463.icon}/>{t("DELETE")}</label></div></li>;
                })}{n_length < SCREENSHOTS_LIMIT && <li className={module2463.upload}><Module952 multiple className={module2463.upload} beforeUpload={this.uploadScreenshot} ref={function(t) {
                    _this.uploadRef = t;
                }} accept={UPLOAD_FILE_TYPES.screenshot}><module186.Icon name="add" size={48} className={module2463.add}/></Module952></li>}</ul>{error ? <div className={module2463.error}>{t(this.state.error)}</div> : <div className={module2463.words}>{t("SCREENSHOTS_COLON")}{n_length}/{SCREENSHOTS_LIMIT}{t("FILE_MAX_SCREENSHOTS")}{n_length > 0 ? <label className={module2463.deleteAll} onClick={function() {
                    _this.deleteScreenshot(-1, detail);
                }}>{t("DELETE_ALL")}</label> : <label className={module3(module2463.deleteAll, module2463.disabled)}>{t("DELETE_ALL")}</label>}</div>}</div></div>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    detail: module1.object,
    store: module1.object,
    fileStore: module1.object
}, o.defaultProps = {
    detail: {},
    store: {},
    fileStore: function() {}
}, u = i)) || u;
export default D;
