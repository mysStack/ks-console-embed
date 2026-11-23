import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module3304 from "./module-3304.js";
export default function(e) {
    const a = module553.useState(false);
    const r = module96(a, 2);
    const n = r[0];
    const l = r[1];
    const p = module553.useState({});
    const v = module96(p, 2);
    const h = v[0];
    const E = v[1];
    module553.useEffect(function() {
        const t = e.allStorageClass.filter((t)=>t.name === e.editName)[0];
        E({
            ...t
        });
    }, [
        e.editName
    ]);
    const y = module553.useCallback(function(t) {
        l(false);
        E({
            ...t
        });
        e.onChange(t);
    });
    const g = module553.useCallback(function(e) {
        return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
            className: module3304.Icon
        }, module553.default.createElement(module186.Icon, {
            name: "database",
            size: 40
        })), module553.default.createElement("div", {
            className: module3304.text
        }, module553.default.createElement("p", {
            className: module3304.label
        }, e.name, " ", e.default && module553.default.createElement("span", {
            className: module3304.default
        }, t("DEFAULT"))), module553.default.createElement("p", {
            className: module3304.value
        }, t("NAME"))), module553.default.createElement("div", {
            className: module3304.text
        }, module553.default.createElement("p", {
            className: module3304.label
        }, e.associationPVCCount || 0), module553.default.createElement("p", {
            className: module3304.value
        }, t("VOLUME_COUNT"))), module553.default.createElement("div", {
            className: module3304.text
        }, module553.default.createElement("p", {
            className: module3304.label
        }, e.provisioner), module553.default.createElement("p", {
            className: module3304.value
        }, t("PROVISIONER"))));
    });
    const b = e.allStorageClass.filter((t)=>e.addedItems.indexOf(t.name) === -1);
    const e_editMode = e.editMode;
    const _ = module553.default.createElement("div", {
        className: module3(module3304.addBox, module31({}, module3304.hover, !e_editMode)),
        onClick: function() {
            return l(!n);
        }
    }, module63(h) ? module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module3304.Icon
    }, module553.default.createElement(module186.Icon, {
        name: "database",
        size: 40
    })), module553.default.createElement("div", {
        className: module3304.text
    }, module553.default.createElement("p", {
        className: module3304.label
    }, t("SELECT_STORAGE_CLASS")), module553.default.createElement("p", {
        className: module3304.value
    }, t("SET_RELATED_STORAGE_CLASS_QUOTA")))) : module553.default.createElement(module553.default.Fragment, null, g(h)), !e_editMode && module553.default.createElement("div", {
        className: n ? module3304.rotate : ""
    }, module553.default.createElement(module186.Icon, {
        name: "chevron-down",
        size: 20
    })));
    const O = module553.useCallback(function() {
        if (b.length > 0) {
            return module553.default.createElement("div", {
                className: module3304.list
            }, module553.default.createElement("div", {
                className: module3304.extraContent
            }, b.map((e)=>module553.default.createElement("div", {
                    className: module3304.card,
                    key: e.name,
                    onClick: function() {
                        return y(e);
                    }
                }, g(e)))));
        }
        return null;
    });
    return module553.default.createElement("div", {
        className: module3304.wrapper
    }, _, module553.default.createElement(module553.default.Fragment, null, !e_editMode && n && O()));
};
