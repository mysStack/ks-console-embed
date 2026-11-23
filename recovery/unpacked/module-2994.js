import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-315.js";
import "./module-31.js";
import module96 from "./module-96.js";
import "./module-58.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import module807 from "./module-807.js";
import module241 from "./module-241.js";
import { useEffect, useRef, useState } from "./module-553.js";
import module2995 from "./module-2995.js";
const options = [
    "Never",
    "Always",
    "CrossSubnet"
].map((e)=>({
        label: e,
        value: e
    }));
export default function({ detail, onOk, ...rest }) {
    const l = useState(module241(detail, [
        "ipipMode",
        "vxlanMode"
    ]));
    const u = module96(l, 2);
    const h = u[0];
    const g = u[1];
    const bRef = useRef();
    useEffect(function() {
        if (!module807(module241(detail, [
            "ipipMode",
            "vxlanMode"
        ]), h)) {
            g(module241(detail, [
                "ipipMode",
                "vxlanMode"
            ]));
        }
    }, [
        detail
    ]);
    return <Module788 icon="pen" width={960} title={t("EDIT_OVERLAY_MODE")} {...rest} onOk={function() {
        if (bRef.current) {
            bRef.current.validate(function() {
                onOk({
                    spec: h
                });
            });
        }
    }}><div className={module2995.wrapper}><module186.Form ref={bRef} data={h}><module186.Columns><module186.Column><module186.Form.Item label={t("IPIP_MODE")} rules={[
        {
            required: true,
            message: t("IPIP_MODE_REQUIRED")
        }
    ]} desc={t("IPIP_MODE_DESC")}><module186.Select name="ipipMode" options={options} onChange={function(ipipMode) {
        g({
            ...h,
            ipipMode,
            vxlanMode: ipipMode === "Never" ? h.vxlanMode : "Never"
        });
    }}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("VXLAN_MODE")} rules={[
        {
            required: true,
            message: t("VXLAN_MODE_REQUIRED")
        }
    ]} desc={t("VXLAN_MODE_DESC")}><module186.Select name="vxlanMode" options={options} onChange={function(vxlanMode) {
        g({
            ...h,
            vxlanMode,
            ipipMode: vxlanMode === "Never" ? h.ipipMode : "Never"
        });
    }}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form></div></Module788>;
};
