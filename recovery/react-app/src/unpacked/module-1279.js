import module1084 from "unpacked/module-1084.js";
import GraphicalChild from "unpacked/module-1034.js";
import module871 from "unpacked/module-871.js";
import module913 from "unpacked/module-913.js";
import { formatAxisMap } from "unpacked/module-1033.js";
const s = module1084({
    chartName: "BarChart",
    GraphicalChild,
    axisComponents: [
        {
            axisType: "xAxis",
            AxisComp: module871
        },
        {
            axisType: "yAxis",
            AxisComp: module913
        }
    ],
    formatAxisMap
});
export default s;
