import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module3039 from "unpacked/module-3039.js";
import module3040 from "unpacked/module-3040.js";
import module929 from "unpacked/module-929.js";
import module801 from "unpacked/module-801.js";
import module26 from "unpacked/module-26.js";
import { cacheFunc } from "utils/index";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import Module1695 from "components/Modals/Node/TaintManagement/TaintInput";
import module1697 from "unpacked/module-1697.js";
const N = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.getTaints = function(e) {
            return e.taints || [
                {}
            ];
        };
        t.getCommonTaints = function({ nodes }) {
            if (module63(nodes) || nodes.length === 1) {
                return [
                    {}
                ];
            }
            const a = nodes.map((e)=>e.taints);
            const r = module3039.apply(undefined, module61(a).concat([
                function(e, t) {
                    return e.key === t.key && e.value === t.value && e.effect === t.effect;
                }
            ]));
            if (module63(r)) {
                return [
                    {}
                ];
            }
            return r;
        };
        t.getDifferentTaints = function(e) {
            const a = t.getTaints(e).filter((e)=>module63(e.key) && module63(e.value) || !t.commonTaintsKeys.includes(e.key));
            if (module63(a)) {
                return [
                    {}
                ];
            }
            return a;
        };
        t.handleSubmit = function() {
            const t_state = t.state;
            const { nodes, commonTaints } = t_state;
            const n = nodes.map((e)=>{
                const a = t.getTaints(e);
                const n = [].concat(module61(a), module61(commonTaints)).filter((e)=>e.key).reduce((acc, item)=>{
                    if (!acc.find((e)=>e.key === item.key)) {
                        acc.push(item);
                    }
                    return acc;
                }, []);
                module74(e, "taints", n);
                return e;
            });
            let l = true;
            n.forEach((e)=>{
                const t = module26(e, "taints", []);
                const a = {};
                t.forEach((e)=>{
                    if (a[e.key]) {
                        l = false;
                    } else {
                        a[e.key] = 1;
                    }
                });
            });
            if (l) {
                t.props.onOk(n);
            }
        };
        t.handleChangeAll = module801(function(e, a = {}) {
            t.setState(function({ nodes }) {
                const l = module61(nodes);
                l.forEach((e)=>{
                    const r = t.getTaints(e);
                    if (a.key) {
                        module929(r, function(e) {
                            return e.key === a.key;
                        });
                    }
                    module929(r, function(e) {
                        return t.commonTaintsKeys.includes(e.key);
                    });
                });
                return {
                    nodes: l,
                    commonTaints: module63(e) ? [
                        {}
                    ] : e
                };
            });
        }, 100);
        t.handleChange = function(e, a) {
            return cacheFunc(`_change_${a}`, function(e) {
                t.setState(function({ nodes }) {
                    const n = module61(nodes);
                    module74(n, `[${a}].taints`, e);
                    return {
                        nodes: n
                    };
                });
            }, module88(t));
        };
        t.handleSelect = function(e) {
            return cacheFunc(`_select_${e}`, function(e) {
                if (e.key) {
                    t.setState(function({ nodes, commonTaints }) {
                        nodes.forEach((t)=>{
                            const a = t.taints || [];
                            t.taints = module3040(a, [
                                e
                            ], "key").filter((e)=>e.key);
                        });
                        commonTaints.push(e);
                        return {
                            nodes,
                            commonTaints: commonTaints.filter((e)=>e.key)
                        };
                    });
                }
            }, module88(t));
        };
        t.state = {
            nodes: e.nodes,
            commonTaints: t.getCommonTaints(e)
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible !== e.visible) {
                    this.setState({
                        nodes: this.props.nodes,
                        commonTaints: this.getCommonTaints(this.props)
                    });
                }
            }
        },
        {
            key: "renderCommonTaints",
            value: function() {
                const state = this.state;
                const { nodes, commonTaints } = state;
                if (module63(nodes) || nodes.length === 1) {
                    return null;
                }
                return <div className={module1697.node}><div className={module1697.subTitle}>{t("COMMON_TAINTS")}</div><Module1695 value={commonTaints} onChange={this.handleChangeAll}/></div>;
            }
        },
        {
            key: "renderNodeTaints",
            value: function() {
                const _this = this;
                const state = this.state;
                const { nodes, commonTaints } = state;
                const n = module63(nodes) || nodes.length === 1;
                return nodes.map((t, a)=>{
                    const value = _this.getDifferentTaints(t);
                    return <div key={t.name} className={module1697.node}><div className={module1697.subTitle}>{t.name}</div><Module1695 common={commonTaints} value={value} onSelect={n ? null : _this.handleSelect(a)} onChange={_this.handleChange(t, a)}/></div>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail: _detail, onOk: _onOk, ...rest } = props;
                return <module788.Form width={1162} bodyClassName={module1697.body} title={t("EDIT_TAINTS")} icon="wrench" okText={t("OK")} onOk={this.handleSubmit} {...rest}><div className={module1697.wrapper}><div className={module1697.title}>{t("TAINTS")}</div><module186.Alert type="info" message={t("TAINTS_DESC")}/><div className={module1697.content}>{this.renderCommonTaints()}{this.renderNodeTaints()}</div></div></module788.Form>;
            }
        },
        {
            key: "commonTaintsKeys",
            get: function() {
                return this.state.commonTaints.map((e)=>e.key);
            }
        }
    ]);
    return r;
})(Component);
export default N;
N.propTypes = {
    visible: module1.bool,
    nodes: module1.array,
    onOk: module1.func,
    onCancel: module1.func
};
N.defaultProps = {
    visible: false,
    nodes: [],
    onOk: function() {},
    onCancel: function() {}
};
