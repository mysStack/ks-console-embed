import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import Module1861 from "unpacked/module-1861.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import { getDisplayName, showNameAndAlias } from "utils/index";
import module4368 from "unpacked/module-4368.js";
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
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { treeData, groupId, onSelect } = props;
                return <div className={module4368.wrapper}><div className={module4368.treeWrapper}>{treeData[0]?.children?.length > 0 ? <Module1861 className={module4368.tree} showLine defaultExpandedKeys={[
                    groupId || "root"
                ]} defaultSelectedKeys={[
                    groupId || "root"
                ]} onSelect={onSelect} treeData={treeData} processor={{
                    processProps: function(e) {
                        if (e.key === "root") {
                            return {
                                ...e,
                                title: showNameAndAlias(e.title, "workspace")
                            };
                        }
                        return {
                            ...e,
                            title: getDisplayName(e)
                        };
                    }
                }}/> : <p>{t("NO_DEPARTMENT_TIP")}</p>}</div></div>;
            }
        }
    ]);
    return a;
})(Component), u.propTypes = {
    treeData: module1.array
}, o = l)) || o;
export default b;
