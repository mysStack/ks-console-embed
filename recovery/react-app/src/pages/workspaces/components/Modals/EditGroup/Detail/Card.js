import "unpacked/module-15.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import Module789 from "components/Base/Avatar";
import { getDisplayName } from "utils/index";
import module4371 from "unpacked/module-4371.js";
const y = ((Component_1)=>{
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
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const children = props.treeNode.children;
                const a = children === undefined ? [] : children;
                const { deleteKeys, onEdit, onDelete } = props;
                if (a.length > 0) {
                    return a.map((e)=>{
                        const r = e.props || e;
                        return <div className={module4371.item} key={r.group_id}><Module789 className={module4371.avatar} icon="group" iconSize={32} title={getDisplayName({
                            name: r.group_name,
                            aliasName: r.alias_name
                        })} desc={module26(r._originData, 'metadata.annotations.["kubesphere.io/workspace-role"]')}/><div><span className="text-second padding-20">{deleteKeys.includes(r.group_id) && t("DELETING")}</span><module186.Button icon="pen" type="flat" onClick={function() {
                            return onEdit(r);
                        }}/><module186.Button icon="trash" type="flat" onClick={function() {
                            return onDelete(r);
                        }}/></div></div>;
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const onAdd = this.props.onAdd;
                return <div className={module4371.cardWrapper}>{this.renderContent()}<div className={module4371.empty} onClick={onAdd}><span className={module4371.icon}/><span>{t("CREATE_DEPARTMENT")}</span></div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default y;
y.propTypes = {
    treeNode: module1.object,
    onAdd: module1.func,
    onEdit: module1.func,
    onDelete: module1.func
};
