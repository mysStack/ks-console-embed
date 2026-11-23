import "./module-15.js";
import "./module-18.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
import "./module-28.js";
import module31 from "./module-31.js";
import "./module-315.js";
import "./module-41.js";
import "./module-44.js";
import module96 from "./module-96.js";
import module1201 from "./module-1201.js";
import module3 from "./module-3.js";
import module241 from "./module-241.js";
import * as module553 from "./module-553.js";
import module960 from "./module-960.js";
import module3285 from "./module-3285.js";
export default function({ handleTemplateChange, formTemplate, params }) {
    const l = {
        type: "custom",
        image: "/assets/pipeline/custom.svg",
        title: t("CUSTOM_PIPELIEN"),
        desc: t("CUSTOM_PIPELIEN_DESC")
    };
    const o = new module960;
    const d = module553.useState([]);
    const y = module96(d, 2);
    const g = y[0];
    const b = y[1];
    const S = module553.useState(formTemplate.template);
    const _ = module96(S, 2);
    const O = _[0];
    const C = _[1];
    const T = module553.useState(false);
    const R = module96(T, 2);
    const spinning = R[0];
    const N = R[1];
    const k = async (t)=>await o.getPipelineTemplateList(t);
    module553.useEffect(function() {
        N(true);
        k(module241(params, "cluster")).then((e)=>{
            e.push(l);
            b(e);
        }).finally(()=>{
            N(false);
        });
    }, []);
    const getTemple = function(e, t) {
        C(e);
        if (handleTemplateChange) {
            handleTemplateChange(e, t);
        }
    };
    return module553.default.createElement("div", {
        className: module3285.container
    }, module553.default.createElement(module1201, {
        spinning
    }, module553.default.createElement("div", {
        className: module3285.template
    }, g && g.map((e)=>module553.default.createElement(EComponent, {
            key: e.type,
            isSelected: O === e.type,
            ...e,
            getTemple
        })))));
};
var EComponent = function({ type, image, title, desc, parameters, getTemple, isSelected }) {
    const sRef = module553.useRef();
    return module553.default.createElement("div", {
        className: module3(module3285.card, module31({}, module3285.cardSelected, isSelected)),
        onClick: function() {
            return getTemple(type, parameters);
        }
    }, module553.default.createElement("div", {
        className: module3(module3285.bg)
    }, module553.default.createElement("img", {
        src: image,
        ref: sRef,
        onError: function() {
            sRef.current.src = "/assets/pipeline/custom.svg";
        }
    })), module553.default.createElement("div", {
        className: module3285.info
    }, module553.default.createElement("div", {
        className: module3285.subtitle
    }, title), module553.default.createElement("p", {
        title: desc,
        className: module3285.desc,
        style: {
            "-webkit-box-orient": "vertical"
        }
    }, desc)));
};
