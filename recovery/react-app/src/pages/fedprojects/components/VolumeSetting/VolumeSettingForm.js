import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import Module818 from "components/Base/TypeSelect";
import Module1100 from "components/Forms/Volume/VolumeSettings/FormTemplate";
import Module1772 from "components/Forms/Volume/VolumeSettings/SnapshotForm";
import module1773 from "components/Forms/Volume/VolumeSettings";
const y = [
    {
        icon: "snapshot",
        value: true,
        get label () {
            return t("CREATE_VOLUME_BY_SNAPSHOT");
        },
        get description () {
            return t("SELECT_SNAPSHOT_TO_CREATE_VOLUME");
        }
    },
    {
        icon: "database",
        value: false,
        get label () {
            return t("CREATE_VOLUME_BY_STORAGE_CLASS");
        },
        get description () {
            return t("SELECT_STORAGE_CLASS_CREATE_VOLUME");
        }
    }
];
const g = ((e)=>{
    module55(r, e);
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, isFederated, cluster, formProps, isEdit } = props;
                const fromSnapshot = this.state.fromSnapshot;
                return <module186.Form data={this.fedFormTemplate} ref={formRef} {...formProps}>{!isFederated && <module186.Form.Item label={t("CREATION_METHOD")}><Module818 value={fromSnapshot} options={this.createTypeOption} onChange={this.handleChange}/></module186.Form.Item>}{fromSnapshot ? <Module1772 namespace={module26(this.formTemplate, "metadata.namespace")} cluster={cluster}/> : <Module1100 cluster={cluster} isFederated={isFederated} isEdit={isEdit}/>}</module186.Form>;
            }
        },
        {
            key: "createTypeOption",
            get: function() {
                const e = y;
                if (!globals.app.hasKSModule("storage-utils")) {
                    e.shift();
                }
                return e;
            }
        }
    ]);
    return r;
})(module1773);
export default g;
