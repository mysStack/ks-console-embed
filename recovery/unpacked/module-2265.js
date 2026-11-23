import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-73.js";
import "./module-48.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-64.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module801 from "./module-801.js";
import module159 from "./module-159.js";
import module76 from "./module-76.js";
import module856 from "./module-856.js";
import module74 from "./module-74.js";
import module243 from "./module-243.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import { getDocsUrl, learnMoreTip } from "./module-52.js";
import { PATTERN_IMAGE, PATTERN_IMAGE_TAG } from "./module-72.js";
import module1040 from "./module-1040.js";
import module1296 from "./module-1296.js";
import module2266 from "./module-2266.js";
import module2271 from "./module-2271.js";
import module1538 from "./module-1538.js";
const x = ((e)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.getTag = function(e) {
            const t = PATTERN_IMAGE_TAG.exec(e);
            const tag = module26(t, `[${t.length - 1}]`, ":latest").slice(1);
            return {
                imageName: e.replace(`:${tag}`, ""),
                tag
            };
        };
        n.getImageParam = function() {
            const n_props = n.props;
            const { namespace, imageRegistries, cluster } = n_props;
            const l = imageRegistries.find((e)=>e.value === n.secret);
            return {
                namespace,
                cluster: module26(l, "cluster") || cluster
            };
        };
        n.handleEnter = module801(function(e) {
            if (globals.config.enableImageSearch) {
                const { logo = "", short_description = "" } = e || {};
                const o = n.props.formTemplate;
                const i = module26(o, "image", "");
                const c = module14.toJS(n.store.tagList.data);
                if (!(n.image === i && c.length > 0)) {
                    n.ImageDetail = {
                        image: i,
                        secret: n.secret,
                        logo,
                        short_description
                    };
                    n.getImageDetail(n.ImageDetail);
                }
            }
        }, 800, {
            leading: true,
            trailing: false
        });
        n.getImageDetailNoCert = function() {
            n.getImageDetail({
                ...n.ImageDetail,
                insecure: true
            });
        };
        n.getImage = async (t)=>{
            let a;
            let r;
            let l;
            let u;
            let o;
            a = t.image;
            r = t.insecure;
            l = t.tag;
            u = n.getImageParam();
            n.setState({
                selectedLoading: true
            });
            o = await n.store.getImageDetail({
                image: `${a}:${l || "lastest"}`,
                secret: n.secret,
                insecure: r,
                ...u
            });
            n.setState({
                selectedLoading: false
            });
            return o;
        };
        n.getImageList = async (t)=>{
            let a;
            let insecure;
            let page;
            let u;
            let c;
            let repository;
            let imageTagList;
            ({ imageName: a, insecure, page, ...u } = t);
            c = n.getImageParam();
            repository = a || n.image;
            imageTagList = await n.store.getImageTagList({
                repository,
                insecure,
                page,
                secret: n.secret,
                ...u,
                ...c
            });
            if (u.more) {
                n.setState({
                    imageTagList
                });
            }
            return imageTagList;
        };
        n.getImageDetail = module801((()=>{
            const e = module44(module41.mark(function e(t) {
                let a;
                let r;
                let secret;
                let u;
                let o;
                let imageName;
                let selectedImageTag;
                let f;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.image;
                                r = t.insecure;
                                secret = t.secret;
                                if (a && !n.isUnMounted) {
                                    e.next = 3;
                                    break;
                                }
                                return e.abrupt("return");
                            case 3:
                                n.image = a;
                                n.setState({
                                    isLoading: true
                                });
                                u = n.getImageParam();
                                o = n.getTag(a);
                                imageName = o.imageName;
                                if (!(selectedImageTag = o.tag) || selectedImageTag === "latest") {
                                    e.next = 15;
                                    break;
                                }
                                e.next = 10;
                                return n.store.getImageDetail({
                                    image: `${imageName}:${selectedImageTag}`,
                                    insecure: r,
                                    ...u,
                                    secret
                                });
                            case 10:
                                f = e.sent;
                                n.store.updateTagList({
                                    data: [
                                        selectedImageTag
                                    ],
                                    total: 1,
                                    limit: Number(u.limit) || 10,
                                    page: Number(u.page) || 1,
                                    isLoading: false
                                });
                                n.setState({
                                    isLoading: false,
                                    selectedImageTag,
                                    selectedImage: {
                                        ...f,
                                        image: `${imageName}:${selectedImageTag}`
                                    }
                                }, function() {
                                    module74(n.props.formTemplate, "image", n.state.selectedImage.image);
                                    if (n.context.setImageDetail) {
                                        n.context.setImageDetail(n.state.selectedImage);
                                    }
                                });
                                e.next = 18;
                                break;
                            case 15:
                                e.next = 17;
                                return n.getImageList({
                                    imageName,
                                    page: 1,
                                    ...u
                                });
                            case 17:
                                n.setState({
                                    selectedImage: undefined,
                                    selectedImageTag: "",
                                    isLoading: false
                                });
                            case 18:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })(), 800, {
            leading: true,
            trailing: false
        });
        n.renderWaringText = function() {
            return module553.default.createElement("p", null, t("IGNORE_CERT_WARN_DESC"));
        };
        n.onSelectImageTag = module856(async (t)=>{
            let a;
            let r;
            let l;
            let u;
            let o;
            n.setState({
                selectedImageTag: t
            });
            a = n.image;
            r = n.getTag(a);
            l = r.imageName;
            u = `${l}:${t}`;
            o = await n.getImage({
                image: l,
                tag: t
            });
            module74(n.props.formTemplate, "image", u);
            n.setState({
                selectedImage: {
                    ...o,
                    image: u
                }
            }, function() {
                if (n.context.setImageDetail) {
                    n.context.setImageDetail(n.state.selectedImage);
                }
            });
        }, 300, {
            leading: false,
            trailing: true
        });
        n.renderWaringText = function() {
            return module553.default.createElement("p", null, t("IGNORE_CERT_WARN_DESC"));
        };
        n.renderSelectedContent = function() {
            if (n.state.isLoading) {
                return module553.default.createElement(module186.Loading, null, module553.default.createElement("div", {
                    className: module1538.selectedContent
                }));
            }
            const n_state = n.state;
            const { selectedImage, selectedImageTag, selectedLoading } = n_state;
            const tagList = module14.toJS(n.store.tagList);
            if (module76(selectedImage)) {
                const o = selectedImage.message;
                if (selectedImage.status === "failed") {
                    if (o && o.includes("x509")) {
                        return module553.default.createElement("div", {
                            className: module3(module1538.selectedContent, module1538.emptyContent)
                        }, module553.default.createElement(module186.Icon, {
                            name: "docker",
                            className: module1538.icon
                        }), module553.default.createElement("p", {
                            className: module1538.desc
                        }, t("CERT_ERROR"), module553.default.createElement(module186.Tooltip, {
                            content: n.renderWaringText
                        }, module553.default.createElement("span", {
                            className: module1538.textConfirm,
                            onClick: n.getImageDetailNoCert
                        }, t("IGNORE_AND_RETRY")))));
                    }
                    return module553.default.createElement("div", {
                        className: module3(module1538.selectedContent, module1538.emptyContent)
                    }, module553.default.createElement("div", null, module553.default.createElement(module186.Icon, {
                        name: "docker",
                        className: module1538.icon
                    }), module553.default.createElement("p", {
                        className: module1538.desc
                    }, t("NO_IMAGE_FOUND"))));
                }
                const { image, createTime, exposedPorts } = selectedImage;
                const f = exposedPorts === undefined ? [] : exposedPorts;
                const { logo, short_description } = selectedImage;
                const m = image.indexOf("/") > -1 ? image.split("/")[0] : "docker.io";
                const h = f.join("; ");
                const g = o || short_description;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                    className: module1538.selectedContent
                }, module553.default.createElement(module186.Loading, {
                    spinning: selectedLoading
                }, module553.default.createElement("div", {
                    className: module1538.selectedImageInfo
                }, module553.default.createElement("div", {
                    className: module1538.selectedInfo
                }, module553.default.createElement("img", {
                    className: module1538.logo,
                    src: logo || "/assets/no_img.svg",
                    alt: image
                }), module553.default.createElement("div", {
                    className: module1538.imageInfo
                }, module553.default.createElement("p", null, image), module553.default.createElement("p", null, t("IMAGE_TIME_SIZE_LAYER", {
                    time: module243(createTime).fromNow()
                })))), module553.default.createElement("div", {
                    className: module1538.selectedInfo
                }, module553.default.createElement(module186.Icon, {
                    name: "port",
                    className: module1538.icon
                }), module553.default.createElement("div", {
                    className: module1538.imageInfo
                }, module553.default.createElement("p", null, h || t("NO_DEFAULT_PORT")), module553.default.createElement("p", null, t("PORT")))), module553.default.createElement("div", {
                    className: module1538.selectedInfo
                }, module553.default.createElement(module186.Icon, {
                    name: "docker",
                    className: module1538.icon
                }), module553.default.createElement("div", {
                    className: module1538.imageInfo
                }, module553.default.createElement("p", null, m), module553.default.createElement("p", null, t("REGISTRY")))))), g ? module553.default.createElement("div", {
                    className: module1538.message
                }, g) : null, module553.default.createElement(module2271, {
                    onSelectImageTag: n.onSelectImageTag,
                    selectedImageTag,
                    tagList,
                    getImageList: n.getImageList
                })));
            }
            if (tagList.data.length > 0) {
                return module553.default.createElement(module2271, {
                    onSelectImageTag: n.onSelectImageTag,
                    selectedImageTag,
                    tagList: module14.toJS(n.store.tagList),
                    getImageList: n.getImageList
                });
            }
            return module553.default.createElement("div", {
                className: module3(module1538.selectedContent, module1538.emptyContent)
            }, module553.default.createElement("div", null, module553.default.createElement(module186.Icon, {
                name: "docker",
                className: module1538.icon
            }), module553.default.createElement("p", {
                className: module1538.desc
            }, t("SET_IMAGE_DESC"))));
        };
        n.imageRequiredValidator = function(e, a, r) {
            if (module159(a)) {
                return r({
                    message: t("IMAGE_EMPTY")
                });
            }
            r();
        };
        n.store = e.isEdgeWize ? new module1296 : new module1040;
        n.getImageDetail = module856(n.getImageDetail, 1000);
        n.state = {
            isLoading: false,
            selectedImage: undefined,
            selectedImageTag: undefined,
            selectedLoading: false
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formTemplate, imageRegistries } = props;
                const u = module26(formTemplate, "image", "");
                const o = (imageRegistries.find((e)=>e.value === _this.secret)?.url ?? "").replace(/^(http(s)?:\/\/)?(.*)$/, "$3");
                if (u && u !== o) {
                    this.getImageDetail({
                        image: u,
                        secret: this.secret
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.isUnMounted = true;
            }
        },
        {
            key: "render",
            value: function() {
                const e = t.html("IMAGE_DESC", {
                    link: getDocsUrl("imageregistry")
                });
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form.Item, {
                    label: t("IMAGE"),
                    desc: learnMoreTip(e),
                    rules: [
                        {
                            pattern: PATTERN_IMAGE,
                            message: t("INVALID_IMAGE")
                        },
                        {
                            validator: this.imageRequiredValidator
                        }
                    ]
                }, module553.default.createElement(module2266, {
                    ...this.props,
                    store: this.store,
                    onEnter: this.handleEnter,
                    name: "image",
                    onLoading: this.handleLoadingChange
                })), globals.config.enableImageSearch && this.renderSelectedContent());
            }
        },
        {
            key: "secret",
            get: function() {
                const props = this.props;
                const { imageRegistries, formTemplate } = props;
                const r = imageRegistries.find((e)=>e.isDefault);
                return module26(formTemplate, "pullSecret", r?.value || "");
            }
        }
    ]);
    return r;
})(module553.Component);
export default x;
x.defaultProps = {
    className: "",
    type: "add"
};
x.contextTypes = {
    forceUpdate: module1.func,
    setImageDetail: module1.func
};
