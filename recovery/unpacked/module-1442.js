import module909 from "./module-909.js";
class o {
    constructor(e){
        this._isDirected = !module909.has(e, "directed") || e.directed;
        this._isMultigraph = !!module909.has(e, "multigraph") && e.multigraph;
        this._isCompound = !!module909.has(e, "compound") && e.compound;
        this._label = undefined;
        this._defaultNodeLabelFn = module909.constant(undefined);
        this._defaultEdgeLabelFn = module909.constant(undefined);
        this._nodes = {};
        if (this._isCompound) {
            this._parent = {};
            this._children = {};
            this._children["\0"] = {};
        }
        this._in = {};
        this._preds = {};
        this._out = {};
        this._sucs = {};
        this._edgeObjs = {};
        this._edgeLabels = {};
    }
    isDirected() {
        return this._isDirected;
    }
    isMultigraph() {
        return this._isMultigraph;
    }
    isCompound() {
        return this._isCompound;
    }
    setGraph(e) {
        this._label = e;
        return this;
    }
    graph() {
        return this._label;
    }
    setDefaultNodeLabel(e) {
        if (!module909.isFunction(e)) {
            e = module909.constant(e);
        }
        this._defaultNodeLabelFn = e;
        return this;
    }
    nodeCount() {
        return this._nodeCount;
    }
    nodes() {
        return module909.keys(this._nodes);
    }
    sources() {
        const _this = this;
        return module909.filter(this.nodes(), function(t) {
            return module909.isEmpty(_this._in[t]);
        });
    }
    sinks() {
        const _this = this;
        return module909.filter(this.nodes(), function(t) {
            return module909.isEmpty(_this._out[t]);
        });
    }
    setNodes(e, t) {
        const n = arguments;
        const _this = this;
        module909.each(e, function(e) {
            if (n.length > 1) {
                _this.setNode(e, t);
            } else {
                _this.setNode(e);
            }
        });
        return this;
    }
    setNode(e, t) {
        if (module909.has(this._nodes, e)) {
            if (arguments.length > 1) {
                this._nodes[e] = t;
            }
            return this;
        }
        this._nodes[e] = arguments.length > 1 ? t : this._defaultNodeLabelFn(e);
        if (this._isCompound) {
            this._parent[e] = "\0";
            this._children[e] = {};
            this._children["\0"][e] = true;
        }
        this._in[e] = {};
        this._preds[e] = {};
        this._out[e] = {};
        this._sucs[e] = {};
        ++this._nodeCount;
        return this;
    }
    node(e) {
        return this._nodes[e];
    }
    hasNode(e) {
        return module909.has(this._nodes, e);
    }
    removeNode(e) {
        const _this = this;
        if (module909.has(this._nodes, e)) {
            const n = function(e) {
                _this.removeEdge(_this._edgeObjs[e]);
            };
            delete this._nodes[e];
            if (this._isCompound) {
                this._removeFromParentsChildList(e);
                delete this._parent[e];
                module909.each(this.children(e), function(e) {
                    _this.setParent(e);
                });
                delete this._children[e];
            }
            module909.each(module909.keys(this._in[e]), n);
            delete this._in[e];
            delete this._preds[e];
            module909.each(module909.keys(this._out[e]), n);
            delete this._out[e];
            delete this._sucs[e];
            --this._nodeCount;
        }
        return this;
    }
    setParent(e, t) {
        if (!this._isCompound) {
            throw new Error("Cannot set parent in a non-compound graph");
        }
        if (module909.isUndefined(t)) {
            t = "\0";
        } else {
            for(let n = t += ""; !module909.isUndefined(n); n = this.parent(n)){
                if (n === e) {
                    throw new Error(`Setting ${t} as parent of ${e} would create a cycle`);
                }
            }
            this.setNode(t);
        }
        this.setNode(e);
        this._removeFromParentsChildList(e);
        this._parent[e] = t;
        this._children[t][e] = true;
        return this;
    }
    _removeFromParentsChildList(e) {
        delete this._children[this._parent[e]][e];
    }
    parent(e) {
        if (this._isCompound) {
            const t = this._parent[e];
            if (t !== "\0") {
                return t;
            }
        }
    }
    children(e) {
        if (module909.isUndefined(e)) {
            e = "\0";
        }
        if (this._isCompound) {
            const t = this._children[e];
            if (t) {
                return module909.keys(t);
            }
        } else {
            if (e === "\0") {
                return this.nodes();
            }
            if (this.hasNode(e)) {
                return [];
            }
        }
    }
    predecessors(e) {
        const t = this._preds[e];
        if (t) {
            return module909.keys(t);
        }
    }
    successors(e) {
        const t = this._sucs[e];
        if (t) {
            return module909.keys(t);
        }
    }
    neighbors(e) {
        const t = this.predecessors(e);
        if (t) {
            return module909.union(t, this.successors(e));
        }
    }
    isLeaf(e) {
        return (this.isDirected() ? this.successors(e) : this.neighbors(e)).length === 0;
    }
    filterNodes(e) {
        const t = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
        });
        t.setGraph(this.graph());
        const _this = this;
        module909.each(this._nodes, function(n, r) {
            if (e(r)) {
                t.setNode(r, n);
            }
        });
        module909.each(this._edgeObjs, function(e) {
            if (t.hasNode(e.v) && t.hasNode(e.w)) {
                t.setEdge(e, _this.edge(e));
            }
        });
        const o = {};
        if (this._isCompound) {
            module909.each(t.nodes(), function(e) {
                t.setParent(e, function e(r) {
                    const i = _this.parent(r);
                    if (i === undefined || t.hasNode(i)) {
                        o[r] = i;
                        return i;
                    }
                    if (i in o) {
                        return o[i];
                    }
                    return e(i);
                }(e));
            });
        }
        return t;
    }
    setDefaultEdgeLabel(e) {
        if (!module909.isFunction(e)) {
            e = module909.constant(e);
        }
        this._defaultEdgeLabelFn = e;
        return this;
    }
    edgeCount() {
        return this._edgeCount;
    }
    edges() {
        return module909.values(this._edgeObjs);
    }
    setPath(e, t) {
        const _this = this;
        const o = arguments;
        module909.reduce(e, function(e, r) {
            if (o.length > 1) {
                _this.setEdge(e, r, t);
            } else {
                _this.setEdge(e, r);
            }
            return r;
        });
        return this;
    }
    setEdge(s) {
        let e;
        let t;
        let n;
        let o;
        let a = false;
        if (typeof s === "object" && s !== null && "v" in s) {
            e = s.v;
            t = s.w;
            n = s.name;
            if (arguments.length === 2) {
                o = arguments[1];
                a = true;
            }
        } else {
            e = s;
            t = arguments[1];
            n = arguments[3];
            if (arguments.length > 2) {
                o = arguments[2];
                a = true;
            }
        }
        e = `${e}`;
        t = `${t}`;
        if (!module909.isUndefined(n)) {
            n = `${n}`;
        }
        const c = l(this._isDirected, e, t, n);
        if (module909.has(this._edgeLabels, c)) {
            if (a) {
                this._edgeLabels[c] = o;
            }
            return this;
        }
        if (!module909.isUndefined(n) && !this._isMultigraph) {
            throw new Error("Cannot set a named edge when isMultigraph = false");
        }
        this.setNode(e);
        this.setNode(t);
        this._edgeLabels[c] = a ? o : this._defaultEdgeLabelFn(e, t, n);
        const f = u(this._isDirected, e, t, n);
        e = f.v;
        t = f.w;
        Object.freeze(f);
        this._edgeObjs[c] = f;
        i(this._preds[t], e);
        i(this._sucs[e], t);
        this._in[t][c] = f;
        this._out[e][c] = f;
        this._edgeCount++;
        return this;
    }
    edge(e, t, n) {
        const r = arguments.length === 1 ? s(this._isDirected, arguments[0]) : l(this._isDirected, e, t, n);
        return this._edgeLabels[r];
    }
    hasEdge(e, t, n) {
        const o = arguments.length === 1 ? s(this._isDirected, arguments[0]) : l(this._isDirected, e, t, n);
        return module909.has(this._edgeLabels, o);
    }
    removeEdge(e, t, n) {
        const r = arguments.length === 1 ? s(this._isDirected, arguments[0]) : l(this._isDirected, e, t, n);
        const o = this._edgeObjs[r];
        if (o) {
            e = o.v;
            t = o.w;
            delete this._edgeLabels[r];
            delete this._edgeObjs[r];
            a(this._preds[t], e);
            a(this._sucs[e], t);
            delete this._in[t][r];
            delete this._out[e][r];
            this._edgeCount--;
        }
        return this;
    }
    inEdges(e, t) {
        const n = this._in[e];
        if (n) {
            const o = module909.values(n);
            if (t) {
                return module909.filter(o, function(e) {
                    return e.v === t;
                });
            }
            return o;
        }
    }
    outEdges(e, t) {
        const n = this._out[e];
        if (n) {
            const o = module909.values(n);
            if (t) {
                return module909.filter(o, function(e) {
                    return e.w === t;
                });
            }
            return o;
        }
    }
    nodeEdges(e, t) {
        const n = this.inEdges(e, t);
        if (n) {
            return n.concat(this.outEdges(e, t));
        }
    }
}
function i(e, t) {
    if (e[t]) {
        e[t]++;
    } else {
        e[t] = 1;
    }
}
function a(e, t) {
    if (!--e[t]) {
        delete e[t];
    }
}
function l(_isDirected, t, n, o) {
    let i = `${t}`;
    let a = `${n}`;
    if (!_isDirected && i > a) {
        const l = i;
        i = a;
        a = l;
    }
    return `${i}${a}${module909.isUndefined(o) ? "\0" : o}`;
}
function u(_isDirected, t, n, r) {
    let v = `${t}`;
    let w = `${n}`;
    if (!_isDirected && v > w) {
        const a = v;
        v = w;
        w = a;
    }
    const l = {
        v,
        w
    };
    if (r) {
        l.name = r;
    }
    return l;
}
function s(_isDirected, t) {
    return l(_isDirected, t.v, t.w, t.name);
}
export default o;
o.prototype._nodeCount = 0;
o.prototype._edgeCount = 0;
