import "./module-15.js";
import "./module-22.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-87.js";
import "./module-48.js";
import "./module-192.js";
import "./module-10.js";
import "./module-24.js";
import "./module-137.js";
import "./module-7.js";
import "./module-28.js";
import "./module-4.js";
import "./module-1080.js";
import * as module553 from "./module-553.js";
export const toArray = function(e) {
    const t = [];
    module553.default.Children.forEach(e, function(e) {
        t.push(e);
    });
    return t;
};
export const arrDel = function(e, t) {
    const r = e.slice();
    const a = r.indexOf(t);
    if (a >= 0) {
        r.splice(a, 1);
    }
    return r;
};
export const arrAdd = function(e, t) {
    const r = e.slice();
    if (r.indexOf(t) === -1) {
        r.push(t);
    }
    return r;
};
export const posToArr = function(e) {
    return e.split("-");
};
export const getPosition = function(e, t) {
    return `${e}-${t}`;
};
export const isTreeNode = function(e) {
    return e && e.type && e.type.isTreeNode;
};
export const getNodeChildren = function(e) {
    return toArray(e).filter(isTreeNode);
};
export const traverseTreeNodes = function(e, t) {
    (function r(node, index, l) {
        const s = node ? node.props.children : e;
        const pos = node ? getPosition(l.pos, index) : 0;
        const f = getNodeChildren(s);
        if (node) {
            const d = {
                node,
                index,
                pos,
                key: node.key || pos,
                parentPos: l.node ? l.pos : null
            };
            t(d);
        }
        module553.Children.forEach(f, function(e, t) {
            r(e, t, {
                node,
                pos
            });
        });
    })(null);
};
export const mapChildren = function(e, t) {
    const r = toArray(e).map(t);
    if (r.length === 1) {
        return r[0];
    }
    return r;
};
export const calcSelectedKeys = function(e, t) {
    if (e) {
        if (t.multiple) {
            return e.slice();
        }
        if (e.length) {
            return [
                e[0]
            ];
        }
        return e;
    }
};
export const convertTreeToEntities = function(e, { initWrapper, processEntity, onProcessFinished } = {}) {
    const posEntities = {};
    const keyEntities = {};
    let l = {
        posEntities,
        keyEntities
    };
    if (initWrapper) {
        l = initWrapper(l) || l;
    }
    traverseTreeNodes(e, ({ node, index, pos, key, parentPos })=>{
        const i = {
            node,
            index,
            key,
            pos
        };
        posEntities[pos] = i;
        keyEntities[key] = i;
        i.parent = posEntities[parentPos];
        if (i.parent) {
            i.parent.children = i.parent.children || [];
            i.parent.children.push(i);
        }
        if (processEntity) {
            processEntity(i, l);
        }
    });
    if (onProcessFinished) {
        onProcessFinished(l);
    }
    return l;
};
export const conductExpandParent = function(e, t) {
    const r = {};
    (e || []).forEach((e)=>{
        (function e(a) {
            if (!r[a]) {
                const n = t[a];
                if (n) {
                    r[a] = true;
                    const o = n.parent;
                    if (o) {
                        e(o.key);
                    }
                }
            }
        })(e);
    });
    return Object.keys(r);
};
export const getDataAndAria = function(e) {
    return Object.keys(e).reduce((acc, key)=>{
        const a = acc;
        if (!(key.substr(0, 5) !== "data-" && key.substr(0, 5) !== "aria-")) {
            a[key] = e[key];
        }
        return a;
    }, {});
};
