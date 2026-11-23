"use strict";
((e)=>{
    const module553 = require("unpacked/module-553.js");
    const o = ()=>{
        if (module553 && module553.__esModule) {
            return module553.default;
        }
        return module553;
    };
    const module82 = require("unpacked/module-82.js");
    const module1 = require("unpacked/module-1.js").default;
    const l = ()=>{
        if (module1 && module1.__esModule) {
            return module1.default;
        }
        return module1;
    };
    const s = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : e !== undefined ? e : {};
    function u(e) {
        let t = [];
        return {
            on: function(e) {
                t.push(e);
            },
            off: function(e) {
                t = t.filter((t)=>t !== e);
            },
            get: function() {
                return e;
            },
            set: function(n, r) {
                e = n;
                t.forEach((t)=>t(e, r));
            }
        };
    }
    const c = o().createContext || function(e, t) {
        const i = `__create-react-context-${s.__global_unique_id__ = (s.__global_unique_id__ || 0) + 1}__`;
        const Provider = ((e)=>{
            function n() {
                let t;
                t = e.apply(this, arguments) || this;
                t.emitter = u(t.props.value);
                return t;
            }
            module82.a(n, e);
            const n_prototype = n.prototype;
            n_prototype.getChildContext = function() {
                return {
                    [i]: this.emitter
                };
            };
            n_prototype.componentWillReceiveProps = function(e) {
                if (this.props.value !== e.value) {
                    let n;
                    const r = this.props.value;
                    const o = e.value;
                    if ((a = r) === (i = o) ? a !== 0 || 1 / a == 1 / i : a != a && i != i) {
                        n = 0;
                    } else {
                        n = typeof t === "function" ? t(r, o) : 1073741823;
                        if ((n |= 0) != 0) {
                            this.emitter.set(e.value, n);
                        }
                    }
                }
                var a;
                var i;
            };
            n_prototype.render = function() {
                return this.props.children;
            };
            return n;
        })(module553.Component);
        Provider.childContextTypes = {
            [i]: l().object.isRequired
        };
        const Consumer = ((t)=>{
            function n() {
                let e;
                e = t.apply(this, arguments) || this;
                e.state = {
                    value: e.getValue()
                };
                e.onUpdate = function(t, n) {
                    if (((0 | e.observedBits) & n) != 0) {
                        e.setState({
                            value: e.getValue()
                        });
                    }
                };
                return e;
            }
            module82.a(n, t);
            const n_prototype = n.prototype;
            n_prototype.componentWillReceiveProps = function({ observedBits }) {
                this.observedBits = observedBits ?? 1073741823;
            };
            n_prototype.componentDidMount = function() {
                if (this.context[i]) {
                    this.context[i].on(this.onUpdate);
                }
                const observedBits = this.props.observedBits;
                this.observedBits = observedBits ?? 1073741823;
            };
            n_prototype.componentWillUnmount = function() {
                if (this.context[i]) {
                    this.context[i].off(this.onUpdate);
                }
            };
            n_prototype.getValue = function() {
                if (this.context[i]) {
                    return this.context[i].get();
                }
                return e;
            };
            n_prototype.render = function() {
                return (e = this.props.children, Array.isArray(e) ? e[0] : e)(this.state.value);
                var e;
            };
            return n;
        })(module553.Component);
        Consumer.contextTypes = {
            [i]: l().object
        };
        return {
            Provider,
            Consumer
        };
    };
    exports.a = c;
})(require("unpacked/module-69.js").default);
