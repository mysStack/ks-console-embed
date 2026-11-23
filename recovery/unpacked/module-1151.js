function r() {
    const e = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (e != null) {
        this.setState(e);
    }
}
function o(e) {
    this.setState((function(t) {
        const n = this.constructor.getDerivedStateFromProps(e, t);
        return n ?? null;
    }).bind(this));
}
function i(e, t) {
    try {
        var n = this.props;
        var r = this.state;
        this.props = e;
        this.state = t;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r);
    } finally{
        this.props = n;
        this.state = r;
    }
}
export function polyfill(e) {
    const e_prototype = e.prototype;
    if (!e_prototype || !e_prototype.isReactComponent) {
        throw new Error("Can only polyfill class components");
    }
    if (typeof e.getDerivedStateFromProps !== "function" && typeof e_prototype.getSnapshotBeforeUpdate !== "function") {
        return e;
    }
    let n = null;
    let a = null;
    let l = null;
    if (typeof e_prototype.componentWillMount === "function") {
        n = "componentWillMount";
    } else if (typeof e_prototype.UNSAFE_componentWillMount === "function") {
        n = "UNSAFE_componentWillMount";
    }
    if (typeof e_prototype.componentWillReceiveProps === "function") {
        a = "componentWillReceiveProps";
    } else if (typeof e_prototype.UNSAFE_componentWillReceiveProps === "function") {
        a = "UNSAFE_componentWillReceiveProps";
    }
    if (typeof e_prototype.componentWillUpdate === "function") {
        l = "componentWillUpdate";
    } else if (typeof e_prototype.UNSAFE_componentWillUpdate === "function") {
        l = "UNSAFE_componentWillUpdate";
    }
    if (n !== null || a !== null || l !== null) {
        const u = e.displayName || e.name;
        const s = typeof e.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

${u} uses ${s} but also contains the following legacy lifecycles:${n !== null ? `
  ${n}` : ""}${a !== null ? `
  ${a}` : ""}${l !== null ? `
  ${l}` : ""}

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`);
    }
    if (typeof e.getDerivedStateFromProps === "function") {
        e_prototype.componentWillMount = r;
        e_prototype.componentWillReceiveProps = o;
    }
    if (typeof e_prototype.getSnapshotBeforeUpdate === "function") {
        if (typeof e_prototype.componentDidUpdate !== "function") {
            throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        }
        e_prototype.componentWillUpdate = i;
        const c = e_prototype.componentDidUpdate;
        e_prototype.componentDidUpdate = function(e, t, n) {
            const r = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
            c.call(this, e, t, r);
        };
    }
    return e;
}
r.__suppressDeprecationWarning = true;
o.__suppressDeprecationWarning = true;
i.__suppressDeprecationWarning = true;
