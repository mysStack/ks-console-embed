import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-86.js";
import "unpacked/module-30.js";
import "unpacked/module-18.js";
import "unpacked/module-320.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-196.js";
import "unpacked/module-23.js";
import "unpacked/module-140.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-188.js";
import "unpacked/module-137.js";
import "unpacked/module-75.js";
import "unpacked/module-813.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-251.js";
import "unpacked/module-252.js";
import module61 from "unpacked/module-61.js";
import module31 from "unpacked/module-31.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module63 from "unpacked/module-63.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module2267 from "components/Forms/Workload/ContainerSettings/ContainerForm/ContainerSetting/ImageInput/Select";
import Module2269 from "components/Forms/Workload/ContainerSettings/ContainerForm/ContainerSetting/ImageInput/Input";
import module1538 from "unpacked/module-1538.js";
const D = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleDOMClick = function(e) {
            if (n.dropContentRef && n.dropContentRef.current && !n.dropContentRef.current.contains(e.target)) {
                n.hideContent();
            }
        };
        n.showContent = function(e) {
            e.stopPropagation();
            n.setState({
                visible: true
            }, function() {
                document.addEventListener("click", n.handleDOMClick);
                if (n.hubType !== "dockerHub") {
                    n.fetchHarborList("", n.state.registryData);
                }
            });
        };
        n.hideContent = function() {
            if (n.hubType !== "dockerHub") {
                n.setState({
                    harborList: []
                });
            }
            n.setState({
                visible: false
            }, function() {
                document.removeEventListener("click", n.handleDOMClick);
            });
        };
        n.handleDetailRedirect = function(e) {
            const image = e.currentTarget.dataset.image;
            window.open(`https://hub.docker.com/_/${image}`);
        };
        n.handleSecretChange = function(e) {
            if (e !== n.state.registryData?.value) {
                n.setState({
                    dockerList: [],
                    harborList: []
                });
            }
            if (e) {
                const a = n.props.imageRegistries.filter((t)=>t.value === e)[0];
                n.setState({
                    registryData: a
                });
            }
            const formTemplate = n.props.formTemplate;
            module74(formTemplate, "pullSecret", e);
            n.props.onChange(n.registryUrl);
        };
        n.handleInputChange = function(e, t) {
            let image = t;
            if (n.registryUrl) {
                image = `${n.registryUrl}/${t}`.replace(/\/+/g, "/");
            }
            image = image.replace(/\s+/g, "");
            n.props.onChange(image);
            if (n.context.setImageDetail) {
                n.context.setImageDetail({
                    image
                });
            }
        };
        n.handleKeyUp = function(e) {
            if (e.keyCode === 13) {
                n.handleConfirm();
            }
        };
        n.handleConfirm = function() {
            if (n.imageName) {
                n.props.onEnter();
            }
        };
        n.handleDockerImageSelected = async (t)=>{
            let a;
            let r;
            let l;
            let logo;
            let short_description;
            let d;
            a = module88(n);
            r = a.registryUrl;
            ({ name: l, logo = "", short_description = "" } = t);
            d = r ? `${n.registryUrl}/${l}` : l;
            n.props.onChange(d);
            n.hideContent();
            n.props.onEnter({
                logo,
                short_description
            });
        };
        n.handleHarborImageSelected = async (t)=>{
            let a;
            a = `${t.repository_name}`;
            n.props.onChange(`${n.registryUrl}/${a}`);
            n.hideContent();
            n.props.onEnter({
                logo: "",
                short_description: ""
            });
        };
        n.handleSearchDockerHub = function(e) {
            n.fetchDockerList(e, n.state.registryData);
        };
        n.handleSearchHarbor = function(e) {
            n.fetchHarborList(e, n.state.registryData);
        };
        n.fetchRepositoryImageList = (()=>{
            const e = module44(module41.mark(function e(t) {
                let a;
                let r;
                let q;
                let u;
                let cluster;
                let namespace;
                let pathParams;
                let queryParams;
                let d;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = t.keyword;
                                r = t.registryData;
                                if (q = typeof a === "string" ? a.trim() : "") {
                                    e.next = 4;
                                    break;
                                }
                                return e.abrupt("return");
                            case 4:
                                n.setState({
                                    isLoading: true
                                });
                                u = n.props;
                                cluster = u.cluster;
                                namespace = u.namespace;
                                pathParams = {
                                    cluster,
                                    namespace
                                };
                                queryParams = {
                                    secret: r?.value,
                                    q
                                };
                                e.next = 10;
                                return n.store.fetchRepositoryImages({
                                    pathParams,
                                    queryParams
                                }).finally(()=>{
                                    if (!n.isUnMounted) {
                                        n.setState({
                                            isLoading: false
                                        });
                                    }
                                });
                            case 10:
                                d = e.sent;
                                return e.abrupt("return", d);
                            case 12:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
        n.fetchDockerList = async (t, a)=>{
            let u;
            let dockerList;
            u = await n.fetchRepositoryImageList({
                keyword: t,
                registryData: a
            });
            dockerList = (u?.entries ?? []).map((name)=>({
                    name
                })) ?? [];
            if (!n.isUnMounted) {
                n.setState({
                    dockerList
                });
            }
        };
        n.fetchHarborList = (()=>{
            const e = module44(module41.mark(function e(t, a) {
                let u;
                let harborList;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (a?.url) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");
                            case 2:
                                e.next = 4;
                                return n.fetchRepositoryImageList({
                                    keyword: t,
                                    registryData: a
                                });
                            case 4:
                                u = e.sent;
                                harborList = (u?.entries ?? []).map((repository_name)=>({
                                        repository_name
                                    })) ?? [];
                                if (!n.isUnMounted) {
                                    n.setState({
                                        harborList
                                    });
                                }
                            case 7:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t, a) {
                return e.apply(this, arguments);
            };
        })();
        n.renderContent = function() {
            if (n.state.visible) {
                return <div className={module3(module1538.dropContent, module31({}, module1538.dropContent_hide, !n.state.visible))} ref={n.dropContentRef}><div className={module1538.header}><module186.InputSearch className={module1538.search} onSearch={n.hubType === "dockerHub" ? n.handleSearchDockerHub : n.handleSearchHarbor} placeholder={t("SEARCH")}/>{n.state.isLoading && <module186.Loading className="float-left" size={28}/>}</div>{n.hubType === "dockerHub" ? n.renderDockerList() : n.renderHarborList()}</div>;
            }
            return null;
        };
        const imageRegistries = n.props.imageRegistries;
        const s = n.hubType === "harbor" ? imageRegistries.find((e)=>e.value === n.secretValue) : {};
        n.state = {
            dockerList: [],
            harborList: [],
            registryData: s,
            visible: false,
            isLoading: false
        };
        n.store = e.store;
        n.dropContentRef = createRef();
        n.isUnMounted = false;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.type !== "Edit" && this.secretValue !== "") {
                    this.handleSecretChange(this.secretValue);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.isUnMounted = true;
                document.removeEventListener("click", this.handleDOMClick);
            }
        },
        {
            key: "renderDockerList",
            value: function() {
                const _this = this;
                if (module63(this.state.dockerList)) {
                    return <ul className={module1538.listContent}><div className={module3(module1538.selectedContent, module1538.emptyContent)}><div><module186.Icon name="docker" className={module1538.icon}/><p className={module1538.desc}>{t("NO_IMAGE_FOUND")}</p></div></div></ul>;
                }
                return <ul className={module1538.listContent}>{this.state.dockerList.map((t)=><li className={module1538.ImageItem} key={t.name}><img src={module26(t, "logo_url.large") || "/assets/no_img.svg"} alt={t.name}/><div className={module1538.info}><p onClick={function(a) {
                        return _this.handleDockerImageSelected(t, a);
                    }} className={module1538.clickable} data-image={t.slug} data-logo={module26(t, "logo_url.large", "")} data-short_description={t.short_description}>{t.name}</p><p>{t.short_description}</p></div><div className={module1538.actions}><span className={module1538.clickable} onClick={function(a) {
                        return _this.handleDockerImageSelected(t, a);
                    }} data-image={t.slug} data-logo={module26(t, "logo_url.large", "")} data-short_description={t.short_description}><module186.Icon name="check" size={16} changeable/></span></div></li>)}</ul>;
            }
        },
        {
            key: "renderHarborList",
            value: function() {
                const _this = this;
                if (module63(this.state.harborList)) {
                    return <ul className={module1538.listContent}><div className={module3(module1538.selectedContent, module1538.emptyContent)}><div><module186.Icon name="docker" className={module1538.icon}/><p className={module1538.desc}>{t("NO_IMAGE_FOUND")}</p></div></div></ul>;
                }
                return <ul className={module1538.listContent}>{this.state.harborList.map((t)=><li className={module1538.ImageItem} key={t.repository_name}><img src="/assets/no_img.svg" alt={t.repository_name}/><div className={module1538.info}><p onClick={function(a) {
                        return _this.handleHarborImageSelected(t, a);
                    }} className={module1538.clickable}>{t.repository_name}</p></div><div className={module1538.actions}><span className={module1538.clickable} onClick={function(a) {
                        return _this.handleHarborImageSelected(t, a);
                    }}><module186.Icon name="check" size={16} changeable/></span></div></li>)}</ul>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                return <><Module2269 className={module1538.imageInput} onChange={this.handleInputChange} value={this.imageName} autoComplete="off" placeholder={this.secretValue ? "nginx:latest" : t("IMAGE_PLACEHOLDER")} onBlur={this.handleConfirm} onKeyUp={this.handleKeyUp}><Module2267 value={this.secretValue} className={module1538.secretSelect} options={this.secretsOptions} onChange={this.handleSecretChange} disabled={this.secretsOptions.length <= 1}/></Module2269>{this.hubType === "others" || globals.config.enableImageSearch ? <module186.Icon name="templet" changeable className={module1538.dropDownIcon} onClick={function(t) {
                    return _this.showContent(t);
                }}/> : null}{this.renderContent()}</>;
            }
        },
        {
            key: "defaultImage",
            get: function() {
                return this.props.imageRegistries.find((e)=>e.isDefault);
            }
        },
        {
            key: "secretValue",
            get: function() {
                const props = this.props;
                const t_formTemplate = props.formTemplate;
                if (props.type === "Edit") {
                    return module26(t_formTemplate, "pullSecret", "");
                }
                return module26(t_formTemplate, "pullSecret", this.defaultImage?.value || "");
            }
        },
        {
            key: "hubType",
            get: function() {
                if (this.registryUrl.indexOf("docker.io") >= 0 || this.secretValue === "") {
                    return "dockerHub";
                }
                if (this.secretValue && this.registryUrl.indexOf("docker.io") < 0) {
                    return "harbor";
                }
                return "others";
            }
        },
        {
            key: "registryUrl",
            get: function() {
                const _this = this;
                const imageRegistries = this.props.imageRegistries;
                if (!module63(imageRegistries) && this.secretValue) {
                    const a = imageRegistries.find((t)=>t.value === _this.secretValue);
                    let r = module26(a, "url", "");
                    if (r) {
                        return (r = r.replace(/^(http(s)?:\/\/)?(.*)$/, "$3")).split("/")[0];
                    }
                }
                return "";
            }
        },
        {
            key: "imageName",
            get: function() {
                const value = this.props.value;
                if (value.startsWith(this.registryUrl)) {
                    const t = new RegExp(`${this.registryUrl}(/)?`);
                    return value.replace(t, "");
                }
                return value;
            }
        },
        {
            key: "secretsOptions",
            get: function() {
                const e = this.props.imageRegistries.map((e)=>({
                        label: e.label,
                        value: e.value,
                        url: e.url,
                        isDefault: e.isDefault
                    }));
                return [
                    {
                        label: "Docker Hub",
                        value: "",
                        url: "",
                        isDefault: !this.defaultImage
                    }
                ].concat(module61(e)).sort((e, t)=>Number(!!t.isDefault) - Number(!!e.isDefault));
            }
        }
    ]);
    return r;
})(Component);
export default D;
D.contextTypes = {
    setImageDetail: module1.func
};
D.defaultProps = {
    imageRegistries: [],
    className: "",
    value: "",
    onChange: function() {}
};
