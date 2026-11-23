import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-7.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-860.js";
import "unpacked/module-4.js";
export const formatTreeData = function(e, t) {
    if (e == null) {
        return undefined;
    }
    return e.map((a)=>{
        const r = a;
        r.children = [];
        r.path = [
            t,
            r.group_name
        ];
        r.parent_id = a.parent_id || "root";
        e.forEach((e)=>{
            if (r.group_id === e.parent_id) {
                e.parent_name = r.group_name;
                e.path = [].concat(module61(r.path), [
                    e.group_name
                ]);
                r.children = [].concat(module61(r.children), [
                    e
                ]);
            }
        });
        if (r.parent_id === "root") {
            r.parent_name = t;
            return r;
        }
        return null;
    }).filter((e)=>e);
};
export const flattenTreeData = function(e) {
    const t = {};
    e.map(function e(a) {
        if (a.group_id) {
            t[a.group_id] = a;
        }
        if (a?.children?.length > 0) {
            return a.children.map((t)=>e(t));
        }
    });
    return t;
};
export const getBreadCrumbData = function(e, t) {
    const a = [];
    for(let r = t[e]; r;){
        a.unshift(r);
        r = t[r.parent_id];
    }
    return a;
};
