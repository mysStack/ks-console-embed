import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-109.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { Link } from "unpacked/module-433.js";
import module26 from "unpacked/module-26.js";
import Module789 from "components/Base/Avatar";
import Module796 from "components/Base/Status";
import Module793 from "unpacked/module-793.js";
import { ListPage, withProjectList } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import { getDisplayName, getLocalTime } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import module456 from "stores/s2i/builder";
let o;
const R = withProjectList({
    store: new module456("s2ibuilders"),
    module: "s2ibuilders",
    name: "IMAGE_BUILDER"
})(o = ((Component_1)=>{
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
        e.getColumns = function() {
            const e_props = e.props;
            const { prefix, module } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    render: function(e, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(a)} desc={a.serviceName ? t("BUILD_IMAGE_FOR_SERVICE", {
                            service: a.serviceName
                        }) : "-"} to={`${prefix}/${e}`}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "15%",
                    render: function(e) {
                        let a = module26(e, "lastRunState", "");
                        a = a === "Running" ? "Building" : a;
                        return <Module796 name={t(a.toUpperCase() || "NOT_RUNNING_YET")} type={a || "Unknown"} flicker/>;
                    }
                },
                {
                    title: t("TYPE"),
                    dataIndex: "type",
                    isHideable: true,
                    width: "15%",
                    render: function(e) {
                        return e && t(e.toUpperCase());
                    }
                },
                {
                    title: t("SERVICE"),
                    dataIndex: "serviceName",
                    isHideable: true,
                    width: "15%",
                    render: function(e) {
                        if (e) {
                            return <Link to={`./services/${e}/`}>{e}</Link>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore } = e_props;
            return e.props.trigger("imagebuilder.create", {
                module,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                cluster: match.params.cluster
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.freshDisposer = module14.reaction(function() {
                    return _this.store.list.isLoading;
                }, function() {
                    const t = _this.store.list.data.some((e)=>module26(e, "status.lastRunState", "Running") === "Running");
                    clearTimeout(_this.freshTimer);
                    if (t) {
                        _this.freshTimer = setTimeout(_this.handleFresh, 4000);
                    }
                }, {
                    fireImmediately: true
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.freshDisposer) {
                    this.freshDisposer();
                }
                clearTimeout(this.freshTimer);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps} description={t("IMAGE_BUILDER_DESC")}/><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate}/></ListPage>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.store;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || o;
export default R;
