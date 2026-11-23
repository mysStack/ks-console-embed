import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import module96 from "./module-96.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import Module791 from "./module-791.js";
import module136 from "./module-136.js";
import module807 from "./module-807.js";
import module1 from "./module-1.js";
import { useEffect, useRef, useState } from "./module-553.js";
import module106 from "./module-106.js";
import { getOverlayStatus } from "./module-434.js";
import module2989 from "./module-2989.js";
export default BComponent;
function BComponent({ value, onChange }) {
    const nRef = useRef();
    const l = useState(Object.keys(value).length ? value : {
        ipipMode: "Never",
        vxlanMode: "Never"
    });
    const o = module96(l, 2);
    const p = o[0];
    const y = o[1];
    const b = getOverlayStatus(p);
    const S = useState(false);
    const _ = module96(S, 2);
    const O = _[0];
    const C = _[1];
    const TRef = useRef();
    const RRef = useRef();
    useEffect(function() {
        if (!module807(p, value)) {
            y(value);
        }
    }, [
        value
    ]);
    const onClick = function() {
        C(!O);
        y(value);
    };
    const options = [
        "Never",
        "Always",
        "CrossSubnet"
    ].map((e)=>({
            label: e,
            value: e
        }));
    return <div ref={TRef} className={module2989.wrapper}><div ref={TRef} className={module3(module2989.value, module2989.card)} onClick={onClick}><Module791 icon="intranet-routers-duotone" title={b.type ?? "-"} description={t("IPPOOL_OVERLAY_MODE")}/>{b.value ? <Module791 title={b?.value ?? "-"} description={t("CONFIGURATION_MODE")}/> : <span/>}<module186.Icon name={O ? "chevron-up" : "chevron-down"} size={20}/></div>{O ? module106.createPortal(<div ref={nRef} className={module3(module2989.card, module2989.form)}><module186.Form ref={RRef} data={module136(p)}><module186.Columns><module186.Column><module186.Form.Item label={t("IPIP_MODE")} rules={[
        {
            required: true,
            message: t("IPIP_MODE_REQUIRED")
        }
    ]} desc={t("IPIP_MODE_DESC")}><module186.Select name="ipipMode" options={options} onChange={function(ipipMode) {
        y({
            ...p,
            ipipMode,
            vxlanMode: ipipMode === "Never" ? p.vxlanMode : "Never"
        });
    }}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("VXLAN_MODE")} rules={[
        {
            required: true,
            message: t("VXLAN_MODE_REQUIRED")
        }
    ]} desc={t("VXLAN_MODE_DESC")}><module186.Select name="vxlanMode" options={options} onChange={function(vxlanMode) {
        y({
            ...p,
            vxlanMode,
            ipipMode: vxlanMode === "Never" ? p.ipipMode : "Never"
        });
    }}/></module186.Form.Item></module186.Column></module186.Columns><div className={module2989.footer}><div className={module2989.button} onClick={onClick}><module186.Icon name="close" type="light" size={16}/></div><div className={module2989.button} onClick={function() {
        if (RRef.current) {
            RRef.current.validate(function() {
                onChange(p);
                C(false);
            });
        }
    }}><module186.Icon name="check" type="light" sizse={16}/></div></div></module186.Form></div>, TRef.current) : null}</div>;
}
BComponent.propTypes = {
    value: module1.object,
    onChange: module1.func
};
