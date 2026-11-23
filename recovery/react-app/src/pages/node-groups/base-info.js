import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import Module791 from "components/Base/Text";
import Module793 from "unpacked/module-793.js";
import { getDisplayName, getLocalTime } from "utils/index";
import { trigger } from "utils/action";
import module854 from "unpacked/module-854.js";
import Module5295 from "unpacked/module-5295.js";
import module5297 from "unpacked/module-5297.js";
let o;
const R = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
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
    function n(...a) {
        let e;
        module36(this, n);
        e = r.call(this, ...a);
        e.state = {
            confirm: false
        };
        e.nodeGroupStore = new module854;
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, group } = params;
            e.nodeGroupStore.fetchDetail({
                cluster,
                name: group
            });
        };
        e.showEdit = function() {
            const match = e.props.match;
            e.trigger("node.group.baseinfo.edit", {
                store: e.nodeGroupStore,
                ...match.params,
                detail: e.nodeGroupStore.detail,
                success: e.fetchData
            });
        };
        e.deleteGroup = function() {
            const match = e.props.match;
            const detail = module14.toJS(e.nodeGroupStore.detail);
            e.trigger("resource.delete", {
                ...match.params,
                store: e.nodeGroupStore,
                type: detail.name,
                detail,
                success: function() {
                    return e.props.rootStore.routing.push(`/v2/edgewize/clusters/${match.params.cluster}/node-groups`);
                }
            });
        };
        e.manageButtonClick = function(t, r) {
            const n = e.enableManageAction.filter((e)=>e.actionName === r)[0];
            if (n) {
                n.onClick();
            }
        };
        e.renderManageButton = function() {
            const e_enableManageAction = e.enableManageAction;
            const content = <module186.Menu onClick={e.manageButtonClick}>{e_enableManageAction.map((e)=><module186.Menu.MenuItem key={e.actionName}><module186.Icon name={e.icon} type="light"/>{e.text}</module186.Menu.MenuItem>)}</module186.Menu>;
            if (e_enableManageAction.length > 1) {
                return <Module5295 className={module5297.manage} content={content}/>;
            }
            return e_enableManageAction.length > 0 && <module186.Button className={module5297.singleButton} onClick={function() {
                return e_enableManageAction[0].onClick();
            }}>{e_enableManageAction[0].text}</module186.Button>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const e = module14.toJS(this.nodeGroupStore.detail);
                const { creator, createTime } = e;
                return <><Module793 icon="cdn" title={t("BASIC_INFORMATION")} description={t("NODE_GROUP_BASE_INFO_DESC")}/><Module790 title={t("CLUSTER_INFORMATION")}><div className={module5297.header}><Module791 icon="enterprise" title={getDisplayName(this.nodeGroupStore.detail)} description={t("NODE_GROUP")}/><Module791 title={creator} description={t("CREATOR")}/><Module791 title={getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")} description={t("CREATION_TIME")}/>{this.editPromission && this.renderManageButton()}</div><div className={module5297.content}>{this.options.map((e)=><Module791 key={e.name} icon={e.icon} title={e.value} description={t(e.name)}/>)}</div></Module790></>;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                return globals.app.getActions({
                    module: "nodegroups",
                    cluster: this.props.match.params.cluster
                });
            }
        },
        {
            key: "editPromission",
            get: function() {
                return this.enabledActions.includes("manage");
            }
        },
        {
            key: "enableManageAction",
            get: function() {
                return [
                    {
                        actionName: "node.group.baseinfo.edit",
                        onClick: this.showEdit,
                        icon: "pen",
                        text: t("EDIT_INFORMATION")
                    },
                    {
                        actionName: "delete",
                        onClick: this.deleteGroup,
                        icon: "trash",
                        text: t("DELETE_NODE_GROUP")
                    }
                ];
            }
        },
        {
            key: "options",
            get: function() {
                const _originData = module14.toJS(this.nodeGroupStore.detail)._originData;
                return [
                    {
                        name: t("EDGE_NODE"),
                        icon: "edge-node",
                        value: module26(_originData, 'metadata.labels["apps.edgewize.io/nodes-count"]')
                    },
                    {
                        name: t("PROJECT"),
                        icon: "project",
                        value: module26(_originData, 'metadata.labels["apps.edgewize.io/namespaces-count"]')
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default R;
