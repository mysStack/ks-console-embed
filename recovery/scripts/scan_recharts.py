#!/usr/bin/env python3
from pathlib import Path
import re

UNPACKED = Path("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/src/unpacked")
pat = re.compile(r'(?:displayName|chartName)\s*=\s*"([A-Za-z]+)"')
recharts_names = {
    "Area",
    "AreaChart",
    "Bar",
    "BarChart",
    "Brush",
    "CartesianGrid",
    "Cell",
    "ComposedChart",
    "Cross",
    "Curve",
    "Dot",
    "ErrorBar",
    "Funnel",
    "FunnelChart",
    "Label",
    "LabelList",
    "Legend",
    "Line",
    "LineChart",
    "Pie",
    "PieChart",
    "PolarAngleAxis",
    "PolarGrid",
    "PolarRadiusAxis",
    "Polygon",
    "Radar",
    "RadarChart",
    "RadialBar",
    "RadialBarChart",
    "Rectangle",
    "ReferenceArea",
    "ReferenceDot",
    "ReferenceLine",
    "ResponsiveContainer",
    "Scatter",
    "ScatterChart",
    "Sector",
    "Surface",
    "Symbols",
    "Text",
    "Tooltip",
    "Treemap",
    "XAxis",
    "YAxis",
    "ZAxis",
}

mapped = {}
for path in UNPACKED.glob("module-*.js"):
    text = path.read_text(encoding="utf-8", errors="replace")
    names = [n for n in pat.findall(text) if n in recharts_names]
    if names:
        mapped[path.name] = names

print({"count": len(mapped)})
for name, values in sorted(mapped.items(), key=lambda item: int(item[0].split("-")[1].split(".")[0])):
    print(name, values)
