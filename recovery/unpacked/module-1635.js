const r = C(require("./module-81.js"));
const module553 = require("./module-553.js");
const { Children, cloneElement, Component, createElement, createRef } = module553;
const c = C(require("./module-3.js").default);
const module2773 = require("./module-2773.js");
const d = C(module2773);
exports.Sortable = d;
const module2773_Direction = module2773.Direction;
exports.Direction = module2773_Direction;
const module2773_DOMRect = module2773.DOMRect;
exports.DOMRect = module2773_DOMRect;
const module2773_GroupOptions = module2773.GroupOptions;
exports.GroupOptions = module2773_GroupOptions;
const module2773_MoveEvent = module2773.MoveEvent;
exports.MoveEvent = module2773_MoveEvent;
const module2773_Options = module2773.Options;
exports.Options = module2773_Options;
const module2773_PullResult = module2773.PullResult;
exports.PullResult = module2773_PullResult;
const module2773_PutResult = module2773.PutResult;
exports.PutResult = module2773_PutResult;
const module2773_SortableEvent = module2773.SortableEvent;
exports.SortableEvent = module2773_SortableEvent;
const module2773_SortableOptions = module2773.SortableOptions;
exports.SortableOptions = module2773_SortableOptions;
const module2773_Utils = module2773.Utils;
function C(e) {
    if (e && e.__esModule) {
        return e.default;
    }
    return e;
}
function k(e) {
    if (e.parentElement !== null) {
        e.parentElement.removeChild(e);
    }
}
function j(e) {
    e.forEach((e)=>k(e.element));
}
function T(e) {
    e.forEach((e)=>{
        let t;
        let n;
        let r;
        let o;
        t = e.parentElement;
        n = e.element;
        r = e.oldIndex;
        o = t.children[r] || null;
        t.insertBefore(n, o);
    });
}
function P(e, t) {
    const n = N(e);
    const r = {
        parentElement: e.from
    };
    let o = [];
    switch(n){
        case "normal":
            o = [
                {
                    element: e.item,
                    newIndex: e.newIndex,
                    oldIndex: e.oldIndex,
                    parentElement: e.from
                }
            ];
            break;
        case "swap":
            o = [
                {
                    element: e.item,
                    oldIndex: e.oldIndex,
                    newIndex: e.newIndex,
                    ...r
                },
                {
                    element: e.swapItem,
                    oldIndex: e.newIndex,
                    newIndex: e.oldIndex,
                    ...r
                }
            ];
            break;
        case "multidrag":
            o = e.oldIndicies.map((t, n)=>({
                    element: t.multiDragElement,
                    oldIndex: t.index,
                    newIndex: e.newIndicies[n].index,
                    ...r
                }));
    }
    return ((e, t)=>e.map((e)=>({
                ...e,
                item: t[e.oldIndex]
            })).sort((e, t)=>e.oldIndex - t.oldIndex))(o, t);
}
function L(e, t) {
    const n = [
        ...t
    ];
    e.concat().reverse().forEach((e)=>n.splice(e.oldIndex, 1));
    return n;
}
function z(e, t, n, r) {
    const o = [
        ...t
    ];
    e.forEach((e)=>{
        const t = r && n && r(e.item, n);
        o.splice(e.newIndex, 0, t || e.item);
    });
    return o;
}
function N(e) {
    if (e.oldIndicies && e.oldIndicies.length > 0) {
        return "multidrag";
    }
    if (e.swapItem) {
        return "swap";
    }
    return "normal";
}
function D(e) {
    return (D = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function H(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
function B(e) {
    for(let t = 1; t < arguments.length; t++){
        var n = arguments[t] ?? {};
        if (t % 2) {
            H(Object(n), true).forEach((t)=>{
                e[t] = n[t];
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
        } else {
            H(Object(n)).forEach((t)=>{
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
        }
    }
    return e;
}
function F(e, t) {
    return (F = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
function V(e, t) {
    if (!t || D(t) !== "object" && typeof t !== "function") {
        return ((e)=>{
            if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return e;
        })(e);
    }
    return t;
}
function $(e) {
    return ($ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function U(e, t, n) {
    if (t in e) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        e[t] = n;
    }
    return e;
}
exports.Utils = module2773_Utils;
const Z = {
    dragging: null
};
const W = ((e)=>{
    ((e, t)=>{
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: true,
                configurable: true
            }
        });
        if (t) {
            F(e, t);
        }
    })(o, Component);
    let t;
    var n = ((e)=>{
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
            let n;
            const r = $(e);
            if (t) {
                const o = $(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return V(this, n);
        };
    })(o);
    function o(e) {
        let t;
        ((e, t)=>{
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        })(this, o);
        t = n.call(this, e);
        t.ref = createRef();
        const i = e.list.map((e)=>({
                ...e,
                chosen: false,
                selected: false
            }));
        e.setList(i, t.sortable, Z);
        r(!e.plugins, '\nPlugins prop is no longer supported.\nInstead, mount it with "Sortable.mount(new MultiDrag())"\nPlease read the updated README.md at https://github.com/SortableJS/react-sortablejs.\n      ');
        return t;
    }
    if (t = [
        {
            key: "componentDidMount",
            value: function() {
                if (this.ref.current !== null) {
                    const e = this.makeOptions();
                    d.create(this.ref.current, e);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const e_tag = props.tag;
                const n = {
                    style: props.style,
                    className: props.className,
                    id: props.id
                };
                const Component = e_tag && e_tag !== null ? e_tag : "div";
                return <Component ref={this.ref} {...n}>{this.getChildren()}</Component>;
            }
        },
        {
            key: "getChildren",
            value: function() {
                const props = this.props;
                const { children, dataIdAttr, selectedClass } = props;
                const o = selectedClass === undefined ? "sortable-selected" : selectedClass;
                const e_chosenClass = props.chosenClass;
                const u = e_chosenClass === undefined ? "sortable-chosen" : e_chosenClass;
                props.dragClass;
                props.fallbackClass;
                props.ghostClass;
                props.swapClass;
                const e_filter = props.filter;
                const f = e_filter === undefined ? "sortable-filter" : e_filter;
                const e_list = props.list;
                if (!children || children == null) {
                    return null;
                }
                const p = dataIdAttr || "data-id";
                return Children.map(children, function(e, t) {
                    let n;
                    let r;
                    const i = e_list[t];
                    const className = e.props.className;
                    const s = typeof f === "string" && {
                        [f.replace(".", "")]: !!i.filtered
                    };
                    const h = c(className, B((U(n = {}, o, i.selected), U(n, u, i.chosen), n), s));
                    return cloneElement(e, (U(r = {}, p, e.key), U(r, "className", h), r));
                });
            }
        },
        {
            key: "makeOptions",
            value: function() {
                let e;
                const _this = this;
                e = this.props;
                const { list: _list, setList: _setList, children: _children, tag, style: _style, className: _className, clone: _clone, onAdd: _onAdd, onChange: _onChange, onChoose: _onChoose, onClone: _onClone, onEnd: _onEnd, onFilter: _onFilter, onRemove: _onRemove, onSort: _onSort, onStart: _onStart, onUnchoose: _onUnchoose, onUpdate: _onUpdate, onMove: _onMove, onSpill: _onSpill, onSelect: _onSelect, onDeselect: _onDeselect, ...rest } = e;
                [
                    "onAdd",
                    "onChoose",
                    "onDeselect",
                    "onEnd",
                    "onRemove",
                    "onSelect",
                    "onSpill",
                    "onStart",
                    "onUnchoose",
                    "onUpdate"
                ].forEach((e)=>rest[e] = _this.prepareOnHandlerPropAndDOM(e));
                [
                    "onChange",
                    "onClone",
                    "onFilter",
                    "onSort"
                ].forEach((e)=>rest[e] = _this.prepareOnHandlerProp(e));
                return {
                    ...rest,
                    onMove: function(e, n) {
                        const onMove = _this.props.onMove;
                        const o = e.willInsertAfter || -1;
                        if (!onMove) {
                            return o;
                        }
                        const i = onMove(e, n, _this.sortable, Z);
                        return i !== undefined && i;
                    }
                };
            }
        },
        {
            key: "prepareOnHandlerPropAndDOM",
            value: function(e) {
                const _this = this;
                return function(n) {
                    _this.callOnHandlerProp(n, e);
                    _this[e](n);
                };
            }
        },
        {
            key: "prepareOnHandlerProp",
            value: function(e) {
                const _this = this;
                return function(n) {
                    _this.callOnHandlerProp(n, e);
                };
            }
        },
        {
            key: "callOnHandlerProp",
            value: function(e, t) {
                const n = this.props[t];
                if (n) {
                    n(e, this.sortable, Z);
                }
            }
        },
        {
            key: "onAdd",
            value: function(e) {
                const props = this.props;
                const { list, setList, clone } = props;
                const i = P(e, [
                    ...Z.dragging.props.list
                ]);
                j(i);
                setList(z(i, list, e, clone).map((e)=>({
                        ...e,
                        selected: false
                    })), this.sortable, Z);
            }
        },
        {
            key: "onRemove",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { list, setList } = props;
                const a = N(e);
                const l = P(e, list);
                T(l);
                let u = [
                    ...list
                ];
                if (e.pullMode !== "clone") {
                    u = L(l, u);
                } else {
                    let s = l;
                    switch(a){
                        case "multidrag":
                            s = l.map((t, n)=>({
                                    ...t,
                                    element: e.clones[n]
                                }));
                            break;
                        case "normal":
                            s = l.map((t)=>({
                                    ...t,
                                    element: e.clone
                                }));
                            break;
                        default:
                            r(true, `mode "${a}" cannot clone. Please remove "props.clone" from <ReactSortable/> when using the "${a}" plugin`);
                    }
                    j(s);
                    l.forEach((n)=>{
                        const n_oldIndex = n.oldIndex;
                        const o = _this.props.clone(n.item, e);
                        u.splice(n_oldIndex, 1, o);
                    });
                }
                setList(u = u.map((e)=>({
                        ...e,
                        selected: false
                    })), this.sortable, Z);
            }
        },
        {
            key: "onUpdate",
            value: function(e) {
                const props = this.props;
                const { list, setList } = props;
                const o = P(e, list);
                j(o);
                T(o);
                return setList(((e, t)=>z(e, L(e, t)))(o, list), this.sortable, Z);
            }
        },
        {
            key: "onStart",
            value: function() {
                Z.dragging = this;
            }
        },
        {
            key: "onEnd",
            value: function() {
                Z.dragging = null;
            }
        },
        {
            key: "onChoose",
            value: function(e) {
                const props = this.props;
                const t_list = props.list;
                props.setList(t_list.map((t, n)=>{
                    if (n === e.oldIndex) {
                        return {
                            ...t,
                            chosen: true
                        };
                    }
                    return t;
                }), this.sortable, Z);
            }
        },
        {
            key: "onUnchoose",
            value: function(e) {
                const props = this.props;
                const t_list = props.list;
                props.setList(t_list.map((t, n)=>{
                    if (n === e.oldIndex) {
                        return {
                            ...t,
                            chosen: false
                        };
                    }
                    return t;
                }), this.sortable, Z);
            }
        },
        {
            key: "onSpill",
            value: function(e) {
                const props = this.props;
                const { removeOnSpill, revertOnSpill } = props;
                if (removeOnSpill && !revertOnSpill) {
                    k(e.item);
                }
            }
        },
        {
            key: "onSelect",
            value: function(e) {
                const props = this.props;
                const { list, setList } = props;
                const o = list.map((e)=>({
                        ...e,
                        selected: false
                    }));
                e.newIndicies.forEach((t)=>{
                    const t_index = t.index;
                    if (t_index === -1) {
                        console.log(`"${e.type}" had indice of "${t.index}", which is probably -1 and doesn't usually happen here.`);
                        return void console.log(e);
                    }
                    o[t_index].selected = true;
                });
                setList(o, this.sortable, Z);
            }
        },
        {
            key: "onDeselect",
            value: function(e) {
                const props = this.props;
                const { list, setList } = props;
                const o = list.map((e)=>({
                        ...e,
                        selected: false
                    }));
                e.newIndicies.forEach(({ index })=>{
                    if (index !== -1) {
                        o[index].selected = true;
                    }
                });
                setList(o, this.sortable, Z);
            }
        },
        {
            key: "sortable",
            get: function() {
                const current = this.ref.current;
                if (current === null) {
                    return null;
                }
                const t = Object.keys(current).find((e)=>e.includes("Sortable"));
                if (t) {
                    return current[t];
                }
                return null;
            }
        }
    ]) {
        ((e, t)=>{
            for (const r of t){
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) {
                    r.writable = true;
                }
                Object.defineProperty(e, r.key, r);
            }
        })(o.prototype, t);
    }
    return o;
})();
exports.ReactSortable = W;
W.defaultProps = {
    clone: function(e) {
        return e;
    }
};
