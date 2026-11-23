import "./module-15.js";
import "./module-6.js";
import "./module-10.js";
import "./module-7.js";
import "./module-4.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import { PieChart } from "./module-799.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import { capitalize } from "./module-52.js";
import module5057 from "./module-5057.js";
export default function({ click, item, type, filters }) {
    const m = module553.useState(false);
    const v = module96(m, 2);
    const checked = v[0];
    const y = v[1];
    const { title, color, filterValue, used, total, icon, label } = item;
    module553.useEffect(function() {
        if (module63(filters)) {
            y(false);
        } else {
            y(false);
            Object.keys(filters).forEach((e)=>{
                if (type === e && filters[e] === (filterValue || capitalize(title))) {
                    y(true);
                }
            });
        }
    }, [
        filters
    ]);
    return module553.default.createElement("div", {
        className: module3(module5057.content, module31({}, module5057["content--checked"], checked)),
        onClick: function() {
            y(!checked);
            click(module31({}, type, filterValue || capitalize(title)));
        }
    }, module553.default.createElement("div", {
        className: module5057.chart
    }, module553.default.createElement(PieChart, {
        width: 64,
        height: 64,
        innerRadius: "75%",
        outerRadius: "115%",
        data: [
            {
                name: "Used",
                itemStyle: {
                    fill: color
                },
                value: used
            },
            {
                name: "Left",
                itemStyle: {
                    fill: "#EFF4F9"
                },
                value: total - used
            }
        ]
    }), module553.default.createElement("img", {
        className: module5057.innerIcon,
        src: icon,
        alt: ""
    })), module553.default.createElement("div", {
        className: module5057.info
    }, module553.default.createElement("p", {
        className: module5057.label
    }, t(`${label}`)), module553.default.createElement(module186.Radio, {
        className: module3(module5057.radio, module31({}, module5057["radio--show"], checked)),
        checked
    }), module553.default.createElement("p", {
        className: module5057.type
    }, t(title)), module553.default.createElement("p", {
        className: module5057.number
    }, module553.default.createElement("span", {
        className: module5057.master
    }, used), "/", module553.default.createElement("span", null, total))));
};
