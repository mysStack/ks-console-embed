import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module788 from "./module-788.js";
import module3 from "./module-3.js";
import module4064 from "./module-4064.js";
import module4065 from "./module-4065.js";
import module1779 from "./module-1779.js";
import module1780 from "./module-1780.js";
import module1781 from "./module-1781.js";
import module201 from "./module-201.js";
import module4066 from "./module-4066.js";
import { getConfigSupportLink } from "./module-52.js";
import module4068 from "./module-4068.js";
const k = [
    {
        icon: module1779,
        title: "KSE_FEATURE_1"
    },
    {
        icon: module1780,
        title: "KSE_FEATURE_2"
    },
    {
        icon: module1781,
        title: "KSE_FEATURE_3"
    }
];
const N = [
    {
        title: "KSC_FEATURE_BACKUP",
        desc: [
            "KSC_FEATURE_BACKUP_APP_DESC",
            "KSC_FEATURE_BACKUP_DATA_DESC",
            "KSC_FEATURE_BACKUP_CLOUD_DESC"
        ],
        img: "/assets/support-backup.svg"
    },
    {
        title: "KSC_FEATURE_INSPECTION",
        desc: [
            "KSC_FEATURE_INSPECTION_VULN_DESC",
            "KSC_FEATURE_INSPECTION_SECURITY_DESC",
            "KSC_FEATURE_INSPECTION_BEST_DESC"
        ],
        img: "/assets/support-cluster-inspection.svg"
    },
    {
        title: "KSC_FEATURE_LIGHTWEIGHT",
        desc: [
            "KSC_FEATURE_LIGHTWEIGHT_START_DESC",
            "KSC_FEATURE_LIGHTWEIGHT_KS_DESC",
            "KSC_FEATURE_LIGHTWEIGHT_TEST_DESC"
        ],
        img: "/assets/support-light-cluster.svg"
    }
];
const T = ((e)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.state = {
            eluaVisible: false
        };
        e.openElua = function() {
            e.setState({
                eluaVisible: true
            });
        };
        e.closeElua = function() {
            e.setState({
                eluaVisible: false
            });
        };
        e.renderKse = function() {
            return module553.default.createElement("div", {
                className: module3(module4068.card, module4068.kse)
            }, module553.default.createElement("div", {
                className: module3(module4068.header, module4068.headerWithPadding)
            }, module553.default.createElement("img", {
                src: module4064,
                alt: "logo"
            }), globals.config.showOutSiteLink && module553.default.createElement("a", {
                className: module3(module4068.buttonText, "support-action"),
                href: getConfigSupportLink("kse"),
                target: "_blank",
                rel: "noopener noreferrer"
            }, t("LEARN_MORE"))), module553.default.createElement("div", {
                className: module4068.version
            }, t.html("KSE_PLATFORM_VERSION", {
                version: globals?.ksConfig?.ksVersion
            }), module553.default.createElement("span", {
                className: module4068.view
            }, t("VIEW")), module553.default.createElement("a", {
                onClick: e.openElua,
                className: "elua"
            }, t("END_USER_SOFTWARE_LICENSE_AGREEMENT_LINK"))), module553.default.createElement("div", {
                className: module4068.content
            }, module553.default.createElement("div", null, module553.default.createElement("div", {
                className: module4068.desc
            }, t("KUBE_SPHERE_ENTERPRISE_DESC")), module553.default.createElement("div", {
                className: module4068.features
            }, k.map((e)=>module553.default.createElement("div", {
                    className: module4068.feature,
                    key: e.title
                }, module553.default.createElement("img", {
                    src: e.icon,
                    alt: e.title
                }), module553.default.createElement("div", {
                    className: module4068.featureTitle
                }, t(e.title)))))), module553.default.createElement("div", {
                className: module4068.kseBg
            })));
        };
        e.renderKsc = function() {
            const e = module201("lang") || "en";
            return module553.default.createElement("div", {
                className: module3(module4068.card, module4068.ksc)
            }, module553.default.createElement("div", {
                className: module4068.header
            }, module553.default.createElement("img", {
                src: module4065,
                alt: "ks-cloud"
            }), globals.config.showOutSiteLink && module553.default.createElement("a", {
                className: module3(module4068.buttonText, "support-action"),
                href: getConfigSupportLink("ksc"),
                target: "_blank",
                rel: "noopener noreferrer"
            }, t("LEARN_MORE"))), module553.default.createElement("div", {
                className: module4068.title
            }, t("KUBESPHERE_CLOUD_CAPTION")), module553.default.createElement("div", {
                className: module4068.desc
            }, t("KUBESPHERE_CLOUD_DESC")), module553.default.createElement("div", {
                className: module4068.features
            }, N.map((a)=>module553.default.createElement("div", {
                    className: module3(module4068.feature, module31({}, module4068.isZh, e === "zh")),
                    key: a.title,
                    style: {
                        backgroundImage: `url("${a.img}")`
                    }
                }, module553.default.createElement("div", {
                    className: module4068.title
                }, t(a.title)), module553.default.createElement("div", null, a.desc.map((e, key)=>module553.default.createElement("div", {
                        className: module4068.descRow,
                        key
                    }, t(e))))))));
        };
        return e;
    }
    module37(r, [
        {
            key: "renderCustomModal",
            value: function() {
                const ksVersion = globals.ksConfig.ksVersion;
                return module553.default.createElement(module788, {
                    bodyClassName: module4068.customBody,
                    width: 600,
                    hideHeader: true,
                    hideFooter: true,
                    maskClosable: true,
                    ...this.props
                }, module553.default.createElement("div", {
                    className: module4068.description
                }, module553.default.createElement("div", null, module553.default.createElement("img", {
                    src: globals.theme.logo,
                    alt: ""
                })), module553.default.createElement("p", null, globals.theme.description), module553.default.createElement("strong", null, t("VERSION"), " : ", ksVersion)));
            }
        },
        {
            key: "renderKseModal",
            value: function() {
                return module553.default.createElement(module788, {
                    bodyClassName: module4068.body,
                    width: 1160,
                    hideFooter: true,
                    maskClosable: true,
                    title: module553.default.createElement("span", {
                        className: module4068.modalTitle
                    }, t("ABOUT_KUBESPHERE_ENTERPRISE")),
                    ...this.props
                }, module553.default.createElement("div", {
                    className: module4068.wrapper
                }, this.renderKse(), this.renderKsc()));
            }
        },
        {
            key: "render",
            value: function() {
                const eluaVisible = this.state.eluaVisible;
                return module553.default.createElement(module553.default.Fragment, null, this.renderKseModal(), module553.default.createElement(module788, {
                    visible: eluaVisible,
                    title: t("END_USER_SOFTWARE_LICENSE_AGREEMENT"),
                    width: 1160,
                    onCancel: this.closeElua,
                    hideFooter: true
                }, module553.default.createElement(module4066, null)));
            }
        }
    ]);
    return r;
})(module553.Component);
export default T;
T.propTypes = {
    visible: module1.bool,
    onCancel: module1.func
};
T.defaultProps = {
    visible: false,
    onCancel: function() {}
};
