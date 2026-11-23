import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-10.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import module26 from "./module-26.js";
import module159 from "./module-159.js";
import module195 from "./module-195.js";
import { observer } from "./module-239.js";
import module3389 from "./module-3389.js";
let l;
let o;
let u;
const _ = observer((u = o = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = e.getState;
        e.dataUndefined = function(e) {
            return !module159(e) && (module195(e) ? JSON.parse(e) : e);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, onCancel, onOk, isSubmitting } = props;
                return <Module788 width={600} onOk={function() {
                    return onOk(_this.state);
                }} onCancel={onCancel} visible={visible} title={t("SET_VOLUME_OPERATIONS")} icon="slider" okText={t("OK")} cancelText={t("CANCEL")} isSubmitting={isSubmitting}><module186.Alert type="warning" className="margin-b12" message={t.html("SET_VOLUME_OPERATIONS_TIP")}/><div className={module3389.body}>{this.Items.map((t)=>{
                    const a = _this.state[t.key];
                    const checked = _this.dataUndefined(a);
                    return <div className={module3389.Item} key={t.title}><div className={module3389.icon}><module186.Toggle checked={checked} onChange={function() {
                        return t.onclick(checked);
                    }}/></div><div className={module3389.textBox}><span className={module3389.title}>{t.title}</span><span className={module3389.des}>{t.des}</span></div></div>;
                })}</div></Module788>;
            }
        },
        {
            key: "getState",
            get: function() {
                const detail = this.props.StorageClassStore.detail;
                return {
                    allowClone: module26(detail.annotations, "storageclass.kubesphere.io/allow-clone", undefined),
                    allowSnapshot: module26(detail.annotations, "storageclass.kubesphere.io/allow-snapshot", undefined),
                    allowVolumeExpansion: module26(detail, "allowVolumeExpansion", undefined)
                };
            }
        },
        {
            key: "onOkState",
            get: function() {
                return {
                    allowClone: this.dataUndefined(this.state.allowClone),
                    allowSnapshot: this.dataUndefined(this.state.allowSnapshot),
                    allowVolumeExpansion: this.dataUndefined(this.state.allowVolumeExpansion)
                };
            }
        },
        {
            key: "Items",
            get: function() {
                const _this = this;
                return [
                    {
                        title: t("VOLUME_CLONING"),
                        des: t("VOLUME_CLONING_DESC"),
                        key: "allowClone",
                        onclick: function(t) {
                            return _this.setState({
                                allowClone: !t
                            });
                        }
                    },
                    {
                        title: t("VOLUME_SNAPSHOT_CREATION"),
                        des: t("VOLUME_SNAPSHOT_CREATION_DESC"),
                        key: "allowSnapshot",
                        onclick: function(t) {
                            return _this.setState({
                                allowSnapshot: !t
                            });
                        },
                        hide: !globals.app.hasKSModule("storage-utils")
                    },
                    {
                        title: t("VOLUME_EXPANSION"),
                        des: t("VOLUME_EXPANSION_DESC"),
                        key: "allowVolumeExpansion",
                        onclick: function(t) {
                            return _this.setState({
                                allowVolumeExpansion: !t
                            });
                        }
                    }
                ].filter((e)=>!e.hide);
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, o.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default _;
