import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module791 from "./module-791.js";
import module14 from "./module-14.js";
import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import module1866 from "./module-1866.js";
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
    function a(...n) {
        let e;
        module36(this, a);
        e = r.call(this, ...n);
        e.getGroupName = function(t) {
            const data = module14.toJS(e.props.groupStore.list).data;
            const a = data === undefined ? [] : data;
            return t.map((e)=>a.find((t)=>t.group_id === e)).filter(Boolean).map((e)=>{
                if (e.aliasName) {
                    return `${e.group_name}(${e.aliasName})`;
                }
                return e.group_name;
            }).join(", ");
        };
        return e;
    }
    module37(a, [
        {
            key: "renderButton",
            value: function() {
                const props = this.props;
                const { enabledActions, group, type, onDelete } = props;
                if (enabledActions.includes("manage") && group) {
                    if (type === "notingroup") {
                        return this.renderSelectedButton();
                    }
                    return <module186.Button type="flat" onClick={onDelete}><module186.Icon name="trash" size={16}/></module186.Button>;
                }
                return null;
            }
        },
        {
            key: "renderSelectedButton",
            value: function() {
                const props = this.props;
                const { selected, onSelect } = props;
                if (selected) {
                    return <module186.Button type="flat" icon="check" disabled/>;
                }
                return <module186.Button type="control" icon="add" iconType="light" onClick={onSelect}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { user, type } = props;
                return <div className={module1866.item} data-user={user.username}><Module789 className={module1866.avatar} avatar={user.avatar_url || "/assets/default-user.svg"} iconSize={32} title={user.name} desc={user.email}/>{type === "ingroup" && <Module791 className={module1866.text} title={this.getGroupName(user.groups)} description={t("DEPARTMENT")}/>}{this.renderButton()}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default y;
y.propTypes = {
    user: module1.object,
    enabledActions: module1.array,
    selected: module1.bool,
    onSelect: module1.func,
    onDelete: module1.func
};
