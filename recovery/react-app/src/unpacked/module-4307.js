import "unpacked/module-15.js";
import "unpacked/module-6.js";
import "unpacked/module-320.js";
import "unpacked/module-190.js";
import "unpacked/module-98.js";
import "unpacked/module-316.js";
import "unpacked/module-7.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-4.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import { getSuitableUnit, getValueByUnit } from "utils/monitoring";
import { OBSERVABILITY_CLUSTERS_MERTIC_TYPE } from "utils/constants";
import Module4308 from "unpacked/module-4308.js";
import module4309 from "unpacked/module-4309.js";
import Module4310 from "unpacked/module-4310.js";
export default function(e) {
    const e_data = e.data;
    const p = e_data === undefined ? {
        data: [],
        resource: "cpu"
    } : e_data;
    const { title, isShowDetail } = e;
    const v = isShowDetail === undefined || isShowDetail;
    const e_icon = e.icon;
    const merticType = p?.resource;
    const _ = Object.values(p?.data).sort((e, t)=>t - e)[0];
    const unit = getSuitableUnit(_, merticType);
    const metric = {};
    Object.entries(p?.data).forEach((e)=>{
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        const n = OBSERVABILITY_CLUSTERS_MERTIC_TYPE[merticType][a];
        if (n) {
            metric[n] = getValueByUnit(r, unit) || 0;
        }
    });
    const S = [
        {
            name: "used",
            value: metric.used ?? 0,
            itemStyle: {
                fill: "#55BC8A"
            }
        },
        {
            name: "total",
            value: (metric.total - metric.used) ?? 100,
            itemStyle: {
                fill: "#EFF4F9"
            }
        }
    ];
    const O = metric.total ? (metric.used / metric.total * 100).toFixed(2) : 0;
    if (S.length < 1) {
        return null;
    }
    return <div className={module4309.chartCard}><div className={module4309.chart}><Module4308 data={S} innerRadius="85%" outerRadius="110%" width={140} height={120} startAngle={240} endAngle={-60}/></div><div className={module4309.centerInfo}><module186.Icon name={e_icon} size={32}/><div className={module4309.percentValue}>{O} %</div></div><div className={module4309.bottomInfo}><div className={module4309.label}>{t(title)}</div><div className={module4309.number}><span>{unit === "core" ? t("VALUE_CORES", {
        value: metric.used
    }) : t("VALUE_UNIT", {
        value: metric.used,
        unit
    })}</span>{v && <module186.Popper className={module4309.detailPopper} closeAfterClick={false} content=<Module4310 metric={metric} merticType={merticType} unit={unit}/>><module186.Icon name="eye" size={16}/></module186.Popper>}</div></div></div>;
};
