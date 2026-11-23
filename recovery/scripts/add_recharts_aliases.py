#!/usr/bin/env python3
from pathlib import Path

APP = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app")
SHIMS = APP / "src" / "shims" / "recharts"
SHIMS.mkdir(parents=True, exist_ok=True)

# Confirmed by displayName / chartName in unpacked modules.
MAPPING = {
    "module-870.js": "Tooltip",
    "module-871.js": "XAxis",
    "module-872.js": "ResponsiveContainer",
    "module-901.js": "Area",
    "module-913.js": "YAxis",
    "module-928.js": "Legend",
    "module-930.js": "CartesianGrid",
    "module-947.js": "Dot",
    "module-948.js": "AreaChart",
    "module-998.js": "Label",
    "module-999.js": "Cell",
    "module-1031.js": "LabelList",
    "module-1034.js": "Bar",
    "module-1035.js": "Pie",
    "module-1083.js": "Curve",
    "module-1089.js": "PieChart",
    "module-1160.js": "Sector",
    "module-1278.js": "Rectangle",
    "module-1279.js": "BarChart",
    "module-1281.js": "PolarAngleAxis",
    "module-1282.js": "PolarRadiusAxis",
    "module-1511.js": "Symbols",
    "module-1513.js": "ReferenceLine",
    "module-1516.js": "Polygon",
    "module-1637.js": "ZAxis",
    "module-1886.js": "Radar",
    "module-2148.js": "Legend",
    "module-2154.js": "Cross",
    "module-2156.js": "Brush",
    "module-2159.js": "ReferenceDot",
    "module-2161.js": "ReferenceArea",
    "module-2793.js": "ComposedChart",
    "module-2794.js": "Line",
    "module-2795.js": "Scatter",
    "module-4506.js": "PolarGrid",
    "module-4507.js": "RadarChart",
}

shim_template = """const lib = require("recharts");
const Comp = lib.{export};

module.exports = Comp;
module.exports.default = Comp;
module.exports.{export} = Comp;
"""

written = []
for module_name, export in MAPPING.items():
    dest = SHIMS / f"{export}-{module_name.replace('.js', '')}.js"
    dest.write_text(shim_template.format(export=export))
    written.append((module_name, dest.name, export))

alias_js = ["const path = require(\"path\");", "module.exports = {"]
for module_name, dest_name, export in written:
    alias_js.append(
        f'  [path.resolve(__dirname, "src/unpacked/{module_name}")]: '
        f'path.resolve(__dirname, "src/shims/recharts/{dest_name}"),'
    )
alias_js.append("};")
alias_js.append("")
(APP / "recharts-aliases.js").write_text("\n".join(alias_js))
print({"shims": len(written), "exports": sorted({item[2] for item in written})})
