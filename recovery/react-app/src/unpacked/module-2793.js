import module1084 from "unpacked/module-1084.js";
import module901 from "unpacked/module-901.js";
import module1034 from "unpacked/module-1034.js";
import module2794 from "unpacked/module-2794.js";
import module2795 from "unpacked/module-2795.js";
import module871 from "unpacked/module-871.js";
import module913 from "unpacked/module-913.js";
import module1637 from "unpacked/module-1637.js";
import { formatAxisMap } from "unpacked/module-1033.js";
const p = module1084({
    chartName: "ComposedChart",
    GraphicalChild: [
        module2794,
        module901,
        module1034,
        module2795
    ],
    axisComponents: [
        {
            axisType: "xAxis",
            AxisComp: module871
        },
        {
            axisType: "yAxis",
            AxisComp: module913
        },
        {
            axisType: "zAxis",
            AxisComp: module1637
        }
    ],
    formatAxisMap
});
export default p;
