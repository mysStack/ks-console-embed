import "./module-15.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-10.js";
import "./module-28.js";
import "./module-4.js";
import "./module-22.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module96 from "./module-96.js";
import "./module-58.js";
import module186 from "./module-186.js";
import module1201 from "./module-1201.js";
import module1124 from "./module-1124.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module74 from "./module-74.js";
import * as module553 from "./module-553.js";
import module1377 from "./module-1377.js";
import module1724 from "./module-1724.js";
export default function({ formTemplate, formRef, store, ...rest }) {
    const formTemplate_params = formTemplate.params;
    const S = formTemplate_params === undefined ? [] : formTemplate_params;
    const _ = module553.useState("params");
    const O = module96(_, 2);
    const tabs = O[0];
    const T = O[1];
    const R = module553.useState(false);
    const D = module96(R, 2);
    const spinning = D[0];
    const k = D[1];
    const I = module553.useState({});
    const P = module96(I, 2);
    const jsonData = P[0];
    const w = P[1];
    const onChange = (()=>{
        const e = module44(module41.mark(function e(t) {
            let u;
            let parameters;
            let s;
            let i;
            let devops;
            let pipeline;
            let cluster;
            let m;
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            if (t !== "view") {
                                e.next = 16;
                                break;
                            }
                            ({ paramsForm: u = {} } = formTemplate);
                            parameters = Object.keys(u).reduce((acc, key)=>{
                                acc.push({
                                    name: key,
                                    value: u[key]
                                });
                                return acc;
                            }, []);
                            k(true);
                            e.next = 6;
                            return store.getTempleJenkins(formTemplate.template, {
                                parameters
                            }, {
                                cluster: rest.params.cluster
                            });
                        case 6:
                            s = e.sent;
                            i = rest.params;
                            devops = i.devops;
                            pipeline = i.name;
                            cluster = i.cluster;
                            e.next = 10;
                            return store.checkScriptCompile({
                                devops,
                                pipeline,
                                value: s,
                                cluster
                            });
                        case 10:
                            e.next = 12;
                            return store.convertJenkinsFileToJson(s, cluster);
                        case 12:
                            m = e.sent;
                            w(m);
                            module74(formTemplate, "jenkinsFile", m);
                            k(false);
                        case 16:
                            T(t);
                        case 17:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        return function(t) {
            return e.apply(this, arguments);
        };
    })();
    return module553.default.createElement("div", {
        className: module1377.templateParams
    }, module553.default.createElement(module1201, {
        spinning: store.isSubmitting
    }, module553.default.createElement(module186.Tabs, {
        type: "button",
        tabs,
        onChange
    }, module553.default.createElement(TabPanel, {
        label: t("PARAMETER_CONFIG"),
        name: "params"
    }, module553.default.createElement("div", {
        className: module1377.container
    }, module553.default.createElement("div", {
        className: module1377.params
    }, module553.default.createElement(module186.Form, {
        data: formTemplate,
        ref: formRef
    }, module60(S) && S.length > 0 ? module553.default.createElement("div", {
        className: module1377.params_container
    }, S.map((option, key)=>module553.default.createElement(module1724, {
            key,
            option
        }))) : module553.default.createElement("div", {
        className: module1377.empty
    }, module553.default.createElement("div", {
        className: module1377.icon
    }, module553.default.createElement("img", {
        src: "/assets/pipeline-temp-empty.svg",
        alt: ""
    })), module553.default.createElement("p", null, t("EMPTY_PARAMS_CONFIG"))))))), module553.default.createElement(TabPanel, {
        label: t("PREVIEW"),
        name: "view",
        disabled: module63(S)
    }, module553.default.createElement("div", {
        className: module1377.view
    }, module553.default.createElement(module1201, {
        spinning
    }, module553.default.createElement(module186.Form, {
        data: formTemplate,
        ref: formRef
    }, module553.default.createElement(module1124, {
        className: module1377.content,
        jsonData
    }))))))));
};
var TabPanel = module186.Tabs.TabPanel;
