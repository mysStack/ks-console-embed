import module76 from "unpacked/module-76.js";
import module194 from "unpacked/module-194.js";
import module844 from "unpacked/module-844.js";
import module449 from "unpacked/module-449.js";
import module60 from "unpacked/module-60.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module998 from "unpacked/module-998.js";
import module869 from "unpacked/module-869.js";
import { findAllByType, getPresentationAttributes } from "unpacked/module-810.js";
import { getValueByDataKey } from "unpacked/module-912.js";
function h() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    h = function() {
        return weakMap;
    };
    return weakMap;
}
const w = {
    id: module1.string,
    data: module1.arrayOf(module1.object),
    valueAccessor: module1.func,
    clockWise: module1.bool,
    dataKey: module1.oneOfType([
        module1.string,
        module1.number,
        module1.func
    ])
};
const _ = {
    valueAccessor: function(e) {
        if (module60(e.value)) {
            return module449(e.value);
        }
        return e.value;
    }
};
function LabelList({ data, valueAccessor, dataKey, clockWise, id, ...rest }) {
    if (data && data.length) {
        return module553.default.createElement(module869, {
            className: "recharts-label-list"
        }, data.map((e, index)=>{
            const value = module844(dataKey) ? valueAccessor(e, index) : getValueByDataKey(e && e.payload, dataKey);
            const f = module844(id) ? {} : {
                id: `${id}-${index}`
            };
            return module553.default.createElement(module998, {
                ...getPresentationAttributes(e),
                ...rest,
                ...f,
                index,
                value,
                viewBox: module998.parseViewBox(module844(clockWise) ? e : {
                    ...e,
                    clockWise
                }),
                key: `label-${index}`
            });
        }));
    }
    return null;
}
LabelList.propTypes = w;
LabelList.displayName = "LabelList";
const O = (content, data)=>{
    if (content) {
        if (content === true) {
            return module553.default.createElement(LabelList, {
                key: "labelList-implicit",
                data
            });
        }
        if (module553.default.isValidElement(content) || module194(content)) {
            return module553.default.createElement(LabelList, {
                key: "labelList-implicit",
                data,
                content
            });
        }
        if (module76(content)) {
            return module553.default.createElement(LabelList, {
                data,
                ...content,
                key: "labelList-implicit"
            });
        }
        return null;
    }
    return null;
};
LabelList.renderCallByParent = function(e, t, n = true) {
    if (!e || !e.children && n && !e.label) {
        return null;
    }
    const e_children = e.children;
    const o = findAllByType(e_children, LabelList).map((e, n)=>module553.cloneElement(e, {
            data: t,
            key: `labelList-${n}`
        }));
    if (!n) {
        return o;
    }
    const i = O(e.label, t);
    return [
        i,
        ...o
    ];
};
LabelList.defaultProps = _;
export default LabelList;
