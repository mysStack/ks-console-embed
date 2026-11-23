import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import module1 from "unpacked/module-1.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import Module788 from "components/Base/Modal";
import Module4366 from "pages/workspaces/components/Modals/EditGroup/Department";
import Module4369 from "pages/workspaces/components/Modals/EditGroup/Detail";
import module4376 from "unpacked/module-4376.js";
let o;
let u;
let l;
const b = observer((l = u = ((Component_1)=>{
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
        t.toggleForm = function() {
            t.setState(function(e) {
                return {
                    showForm: !e.showForm
                };
            });
        };
        t.handleSelect = function(e) {
            t.setState({
                showForm: false,
                groupId: e[0],
                treeNodeId: e[0]
            });
        };
        t.handleTreeNodeIdChange = function(treeNodeId) {
            t.setState({
                treeNodeId
            });
        };
        t.store = e.store;
        t.state = {
            showForm: false,
            groupId: "",
            treeNodeId: "root"
        };
        return t;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const treeData = this.props.treeData;
                if (module26(treeData[0], "children", []).length > 0) {
                    this.setState({
                        groupId: treeData[0].group_id
                    });
                } else {
                    this.setState({
                        showForm: true
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, title, onCancel, treeData } = props;
                const state = this.state;
                const { showForm, groupId, treeNodeId } = state;
                return <Module788 width={1162} title={title} closable={false} cancelText={t("CLOSE")} visible={visible} onCancel={onCancel} bodyClassName={module4376.modalBody} footerClassName={module4376.modalFooter}><div className={module4376.content}><Module4366 treeData={treeData} groupId={this.groupId} onSelect={this.handleSelect}/><Module4369 {...this.props} showForm={showForm} toggleForm={this.toggleForm} onChange={this.handleTreeNodeIdChange} groupId={groupId} treeNodeId={treeNodeId}/></div></Module788>;
            }
        }
    ]);
    return a;
})(Component), u.propTypes = {
    visible: module1.bool,
    title: module1.string,
    onCancel: module1.func
}, u.defaultProps = {
    visible: false
}, o = l)) || o;
export default b;
