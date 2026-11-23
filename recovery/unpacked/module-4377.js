import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module1861 from "./module-1861.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import * as module553 from "./module-553.js";
import { getDisplayName, showNameAndAlias } from "./module-52.js";
import module4378 from "./module-4378.js";
let u;
let l;
let c;
const C = observer((c = l = ((e)=>{
    module55(a, e);
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
    function a(...o_1) {
        let e;
        module36(this, a);
        e = r.call(this, ...o_1);
        e.renderTree = function() {
            const e_props = e.props;
            const { treeData, onSelect, group } = e_props;
            const treeData_1 = module74(module136(treeData)[0], "disabled", true);
            const u = module26(treeData[0].children[0], "key", "root");
            return module553.default.createElement("div", {
                className: module4378.treeWrapper
            }, module553.default.createElement(module1861, {
                showLine: true,
                defaultExpandedKeys: [
                    u
                ],
                defaultSelectedKeys: [
                    u
                ],
                treeData: treeData_1,
                selectedKeys: [
                    group
                ],
                onSelect,
                processor: {
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
                }
            }));
        };
        e.renderPlaceHolder = function() {
            return module553.default.createElement("div", {
                className: module4378.empty
            }, t("DEPARTMENT_EMPTY_DESC"));
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { isLoading, total } = props;
                return module553.default.createElement("div", {
                    className: module4378.wrapper
                }, isLoading && module553.default.createElement("div", {
                    className: module4378.loading
                }, module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                })), total === 0 && !isLoading && this.renderPlaceHolder(), total > 0 && this.renderTree());
            }
        }
    ]);
    return a;
})(module553.Component), l.propTypes = {
    treeData: module1.array,
    total: module1.number,
    isLoading: module1.bool,
    onSelect: module1.func
}, u = c)) || u;
export default C;
