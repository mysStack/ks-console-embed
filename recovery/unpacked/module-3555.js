import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import { PATTERN_NAME } from "./module-72.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import module839 from "./module-839.js";
import module867 from "./module-867.js";
import module911 from "./module-911.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module76 from "./module-76.js";
import module3556 from "./module-3556.js";
let u;
let c;
let s;
const P = observer((s = c = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.volumeStore = new module839;
        e.storageclass = new module867;
        e.snapShotClassStore = new module911;
        e.form = createRef();
        e.testRef = createRef();
        e.state = {
            pagination: {
                page: 0,
                total: 0,
                limit: 10
            },
            selectedVolume: "",
            volumeInfo: "",
            formData: {},
            snapShotClass: [],
            isLoading: false,
            storageClassBan: false,
            allowSnapshot: true
        };
        e.fetchList = async function t() {
            let a;
            let r;
            const n = arguments;
            a = n.length > 0 && n[0] !== undefined ? n[0] : {};
            r = e.state.pagination;
            e.setState({
                isLoading: true,
                pagination: {
                    ...r,
                    page: r.page + 1
                }
            }, function() {
                const pagination = e.state.pagination;
                const { page, limit } = pagination;
                const e_props = e.props;
                const o = {
                    namespace: e_props.namespace,
                    cluster: e_props.cluster,
                    ...a,
                    limit: limit * page,
                    page: 1,
                    more: false,
                    sortBy: "createTime"
                };
                e.volumeStore.fetchList(o).then(()=>{
                    const total = e.volumeStore.list.total;
                    e.setState({
                        pagination: {
                            ...e.state.pagination,
                            total
                        },
                        isLoading: false
                    });
                });
            });
        };
        e.volumeChange = function(selectedVolume) {
            e.setState({
                selectedVolume
            }, function() {
                e.saveVolumeInfo();
            });
        };
        e.volumeValidator = function(a, r, n) {
            const e_state = e.state;
            const { allowSnapshot, volumeInfo } = e_state;
            if (!allowSnapshot && module76(volumeInfo)) {
                n({
                    message: t("STORAGECLASS_NOT_ALLOW_CREATE_SNAPSHOT"),
                    field: a.field
                });
            }
            n();
        };
        e.optionRenderer = function(a) {
            return <><div className={module3556.option}>{a.isFedManaged ? <img className={module3556.indicator} src="/assets/cluster.svg"/> : <module186.Icon type="light" name="storage"/>}{a.label} ({a.namespace})</div>{a.isFedManaged && <module186.Tooltip content={e.props.tipMessage || t("FEDPROJECT_RESOURCE_TIP")}><module186.Icon className={module3556.tip} name="question"/></module186.Tooltip>}</>;
        };
        e.handleOk = function() {
            let t;
            const onOk = e.props.onOk;
            const e_state = e.state;
            const { allowSnapshot, selectedVolume } = e_state;
            e.form.current.validator(function() {
                if (allowSnapshot) {
                    const r = e.form.current.props.data;
                    if (selectedVolume !== "") {
                        t = module14.toJS(e.volumeStore.list.data).filter((e)=>e.name === selectedVolume)[0].namespace;
                    }
                    onOk({
                        ...r,
                        namespace: t
                    });
                }
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.volumeSelect) {
                    this.fetchList();
                    this.getSnapShotClassList();
                }
            }
        },
        {
            key: "getSnapShotClassList",
            value: function() {
                const props = this.props;
                const t = {
                    namespace: props.namespace,
                    cluster: props.cluster,
                    limit: -1
                };
                this.snapShotClassStore.fetchList(t);
            }
        },
        {
            key: "saveVolumeInfo",
            value: function() {
                const _this = this;
                const selectedVolume = this.state.selectedVolume;
                if (selectedVolume) {
                    const volumeInfo = module14.toJS(this.volumeStore.list.data).filter((e)=>e.name === selectedVolume)[0];
                    if (volumeInfo) {
                        this.setState({
                            volumeInfo
                        }, function() {
                            _this.getStorageClassInfo();
                        });
                    }
                }
            }
        },
        {
            key: "getSnapShotClass",
            value: function(e) {
                if (e) {
                    const t = module14.toJS(this.snapShotClassStore.list.data);
                    const snapShotClass = [];
                    t.forEach((t)=>{
                        if (t.driver === e) {
                            snapShotClass.push({
                                label: t.name,
                                value: t.name
                            });
                        }
                    });
                    this.setState({
                        snapShotClass
                    });
                }
            }
        },
        {
            key: "getStorageClassInfo",
            value: async function() {
                let t;
                let cluster;
                let r;
                let n;
                let o;
                let u;
                const _this = this;
                t = this.props;
                cluster = t.cluster;
                r = t.namespace;
                n = this.state.volumeInfo;
                o = n.storageClassName;
                try {
                    await this.storageclass.fetchDetail({
                        cluster,
                        namespace: r,
                        name: o
                    });
                    u = module26(module14.toJS(this.storageclass).detail.annotations, "storageclass.kubesphere.io/allow-snapshot", "false");
                    this.getSnapShotClass(this.storageclass.detail?.provisioner);
                } catch (error) {
                    u = "false";
                }
                this.setState({
                    allowSnapshot: JSON.parse(u)
                }, function() {
                    _this.testRef.current.validate({
                        sourceName: _this.state.selectedVolume
                    });
                });
            }
        },
        {
            key: "renderVolumeSelect",
            value: function() {
                const state = this.state;
                const { pagination, isLoading } = state;
                return <module186.Form.Item ref={this.testRef} label={t("PERSISTENT_VOLUME_CLAIM")} rules={[
                    {
                        required: true,
                        message: t("PVC_NOT_SELECT")
                    },
                    {
                        validator: this.volumeValidator
                    }
                ]} desc={t("SELECT_A_VOLUME_DESC")}><module186.Select searchable name="sourceName" className={module3556.input} options={this.volumeList} pagination={pagination} onFetch={this.fetchList} onChange={this.volumeChange} isLoading={isLoading} optionRenderer={this.optionRenderer} clearable/></module186.Form.Item>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel, title, options, volumeSelect } = props;
                const state = this.state;
                const { snapShotClass, formData } = state;
                return <Module788 icon="pen" width={600} title={title} onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form data={formData} ref={this.form}>{volumeSelect && this.renderVolumeSelect()}<module186.Form.Item label={t("NAME")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message: t("LONG_NAME_DESC")
                        })
                    }
                ]} desc={t("LONG_NAME_DESC")}><module186.Input name="name" maxLength={253} className={module3556.input}/></module186.Form.Item><module186.Form.Item label={t("VOLUME_SNAPSHOT_CLASS")} rules={[
                    {
                        required: true,
                        message: t("SNAPSHOT_EMPTY_TIP")
                    }
                ]} desc={t("SELECT_VOLUME_SNAPSHOT_CLASS_DESC")}><module186.Select name="type" options={volumeSelect ? snapShotClass : options} placeholder=" " className={module3556.input}/></module186.Form.Item></module186.Form></Module788>;
            }
        },
        {
            key: "volumeList",
            get: function() {
                return module14.toJS(this.volumeStore.list.data).map((e)=>({
                        value: e.name,
                        label: e.name,
                        disabled: !e.inUse || e.isFedManaged,
                        isFedManaged: e.isFedManaged,
                        namespace: e.namespace
                    }));
            }
        }
    ]);
    return n;
})(Component), c.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool,
    snapshotOption: module1.array,
    volumeSelect: module1.bool
}, c.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false,
    snapshotOption: [],
    volumeSelect: false
}, u = s)) || u;
export default P;
