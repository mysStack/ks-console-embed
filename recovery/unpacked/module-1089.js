import module1 from "./module-1.js";
import module1084 from "./module-1084.js";
import module1281 from "./module-1281.js";
import module1282 from "./module-1282.js";
import { formatAxisMap } from "./module-927.js";
import GraphicalChild from "./module-1035.js";
const c = module1084({
    chartName: "PieChart",
    GraphicalChild,
    eventType: "item",
    legendContent: "children",
    axisComponents: [
        {
            axisType: "angleAxis",
            AxisComp: module1281
        },
        {
            axisType: "radiusAxis",
            AxisComp: module1282
        }
    ],
    formatAxisMap,
    defaultProps: {
        layout: "centric",
        startAngle: 0,
        endAngle: 360,
        cx: "50%",
        cy: "50%",
        innerRadius: 0,
        outerRadius: "80%"
    },
    propTypes: {
        layout: module1.oneOf([
            "centric"
        ]),
        startAngle: module1.number,
        endAngle: module1.number,
        cx: module1.oneOfType([
            module1.number,
            module1.string
        ]),
        cy: module1.oneOfType([
            module1.number,
            module1.string
        ]),
        innerRadius: module1.oneOfType([
            module1.number,
            module1.string
        ]),
        outerRadius: module1.oneOfType([
            module1.number,
            module1.string
        ])
    }
});
export default c;
