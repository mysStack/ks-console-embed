import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module60 from "unpacked/module-60.js";
import { formatSize, getLanguageName, parseUrl } from "utils/index";
import module4898 from "unpacked/module-4898.js";
const g = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.pathAddCluster = function(e, t) {
            const a = e.match(/(\/kapis|api|apis)(.*)/);
            if (t && t !== "default" && module60(a)) {
                return `${a[1]}/clusters/${t}${a[2]}`;
            }
            return e;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderB2i",
            value: function() {
                const props = this.props;
                const { className, params, runDetail } = props;
                const { builderImage, sourceUrl, binaryName, binarySize, status } = runDetail;
                const params_cluster = params.cluster;
                const g = module26(parseUrl(sourceUrl), "pathname", `/${sourceUrl}`);
                const _ = this.pathAddCluster(g, params_cluster);
                const y = `${window.location.protocol}//${window.location.host}/b2i_download${_}`;
                return <ul className={module3(module4898.builderContent, className)}><li><span className={module4898.icon}><module186.Icon name={getLanguageName(builderImage)} size={40}/></span><div className={module4898.info}><p className={module4898.value} title={builderImage}>{builderImage}</p><p className={module4898.name}>{t("BUILDER_IMAGE_SCAP")}</p></div></li><li className={module4898.downloadContent}><a href={status !== "Success" ? null : y} download><span className={module4898.icon}><module186.Icon name="resource" size={40}/></span><div className={module4898.info}><p className={module4898.value} title={binaryName}>{binaryName}</p><p className={module4898.name}>{t("FILE_SIZE_VALUE", {
                    value: formatSize(binarySize)
                })}</p></div></a></li></ul>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const e_className = props.className;
                if (props.isB2i) {
                    return this.renderB2i();
                }
                const runDetail = this.props.runDetail;
                const { sourceUrl, builderImage, revisionId } = runDetail;
                return <ul className={module3(module4898.builderContent, e_className)}><li><span className={module4898.icon} style={{
                    backgroundImage: `url('/assets/${getLanguageName(builderImage)}.png')`
                }}/><div className={module4898.info}><p className={module4898.value} title={builderImage}>{builderImage}</p><p className={module4898.name}>{t("BUILDER_IMAGE_SCAP")}</p></div></li><li><span className={module4898.icon}><module186.Icon name="resource" size={40}/></span><div className={module4898.info}><p className={module4898.value} title={sourceUrl}>{sourceUrl}</p><p className={module4898.name}>{t("CODE_REPOSITORY_URL")}</p></div></li><li><module186.Icon name="branch" className={module4898.icon}/><div className={module4898.info}><p className={module4898.value}>{revisionId || "master"}</p><p className={module4898.name}>{t("BRANCH_SI")}</p></div></li></ul>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
