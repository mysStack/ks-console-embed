import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-324.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-460.js";
import "./module-461.js";
import "./module-462.js";
import "./module-463.js";
import "./module-464.js";
import "./module-465.js";
import "./module-466.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module61 from "./module-61.js";
import module1274 from "./module-1274.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module2119 from "./module-2119.js";
import module26 from "./module-26.js";
import module807 from "./module-807.js";
import module862 from "./module-862.js";
import { ClusterTagItem } from "./module-925.js";
import module2120 from "./module-2120.js";
const D = function({ value }) {
    if (module862(value, "name").length === value.length) {
        return {
            Ok: true,
            value
        };
    }
    return {
        Ok: false,
        message: t("HAS_SAME_TAG")
    };
};
function k(e, ...a) {
    let n = a;
    let l = e;
    do {
        const u = n;
        const [i, ...c] = module1274(u);
        if (!l.Ok) {
            return l;
        }
        l = i(l);
        n = c;
    }while (n.length)
    return l;
}
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleDelete = function(e) {
            const value = n.state.value;
            const a = (value === undefined ? [] : value).filter((t)=>t.name !== e.name);
            n.setState({
                value: a
            });
            n.props.onChange(a);
        };
        n.handleClick = function() {
            const { onChange, tags = [], tagsGroup } = n.props;
            const { value = [], message } = n.state;
            const f = n.formRef.current.getData();
            n.formRef.current.validate(function() {
                let o = ((e, a = [])=>{
                    const r = a.map((e)=>function(a) {
                            if ((e.tags ?? []).length >= 5 || new Set((e.tags ?? []).concat(a.value).map((e)=>e.name)).size > 5) {
                                return {
                                    Ok: false,
                                    message: t.html("CLUSTER_MAX_TAGS_DESC", {
                                        cluster: e.name
                                    })
                                };
                            }
                            if (module2119(a.value, e.tags ?? [], function(e, t) {
                                return e.name === t.name;
                            }).length) {
                                return a;
                            }
                            return {
                                Ok: false,
                                message: t.html("HAS_SAME_TAG")
                            };
                        });
                    return k(...[
                        {
                            Ok: true,
                            value: e
                        },
                        D
                    ].concat(module61(r)));
                })([].concat(module61(value), [
                    {
                        ...f,
                        value: tagsGroup[f.label]?.find(function(e) {
                            return e.id === f.name;
                        })?.value
                    }
                ]), tags);
                if (!(o.Ok || module807(message, o.message))) {
                    n.setState({
                        message: o.message
                    });
                }
                if (o.Ok) {
                    o = o.value;
                    n.setState({
                        value: o,
                        message: ""
                    });
                    if (onChange) {
                        onChange(o);
                    }
                }
            });
        };
        n.handleLabelChange = function(k_1) {
            n.setState({
                k: k_1,
                v: ""
            });
        };
        const l = e.value || [];
        n.formRef = createRef();
        n.state = {
            value: l,
            k: undefined,
            v: undefined
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                if (t.message === this.state.message && this.state.message) {
                    this.setState({
                        message: ""
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const { value = [], k, v: v_1, message } = this.state;
                const props = this.props;
                const { onAddTags, defaultValue, tagsGroup } = props;
                const d = tagsGroup[k] || [];
                const p = Object.keys(tagsGroup);
                return <div className={module2120.wrapper}><module186.Form ref={this.formRef}><div className={module2120.addContainer}><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("EMPTY_TAG_LABEL_DESC")
                    }
                ]}><module186.Select defaultValue={k} name="label" placeholder={t("KEY")} options={p.map((e)=>({
                        label: e,
                        value: e
                    }))} onChange={this.handleLabelChange}/></module186.Form.Item><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("EMPTY_TAG_VALUE_DESC")
                    }
                ]}><module186.Select defaultValue={v_1} name="name" onChange={function(v_2) {
                    _this.setState({
                        v: v_2
                    });
                }} placeholder={t("VALUE")} options={d.map((e)=>({
                        label: e.value,
                        value: e.id
                    }))}/></module186.Form.Item>{(value ?? []).length >= 5 ? <module186.Tooltip content={t("CLUSTER_MAX_TAGS_DESC")}><div><module186.Button disabled>{t("ADD")}</module186.Button></div></module186.Tooltip> : <module186.Button onClick={this.handleClick}>{t("ADD")}</module186.Button>}</div>{message && <span className="form-item-error margin-t8 inline-block">{message}</span>}</module186.Form><div className={module2120.title}>{t("HAS_ADD_TAGS")}</div><div className={module2120.tags}>{value.map((t)=><ClusterTagItem label={t.label} value={t.value} name={t.name} key={t.name} onDelete={defaultValue.find((e)=>e.name === t.name) ? undefined : _this.handleDelete}/>)}</div>{module26(window, "globals.user.globalrole", "") === "platform-admin" && <div className={module2120.footer}><span>{t("CLUSTER_TAG_ADD_HELP")}</span> <span onClick={onAddTags} className={module2120.action}>{t("CREATE_TAGS")}</span></div>}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default N;
N.propTypes = {
    value: module1.array,
    defaultValue: module1.array,
    onChange: module1.func,
    tagsGroup: module1.object.isRequired,
    onAddTags: module1.func,
    tags: module1.array
};
