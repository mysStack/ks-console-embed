import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-85.js";
import "./module-7.js";
import "./module-31.js";
import module61 from "./module-61.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-553.js";
import module247 from "./module-247.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import Module829 from "components/Forms/Base/Confirm";
import module3062 from "./module-3062.js";
const VComponent = function({ type, containers, containerKey, onCancel, onConfirm }) {
    const p = {
        uninstall: t("UNINSTALL_SOFT_TIPS", {
            name: containerKey
        }),
        restart: t("RESTART_SOFT_TIPS", {
            name: containerKey,
            type: t("CONTAINER_ENGINE")
        }),
        stop: t("STOP_SOFT_TIPS", {
            name: containerKey
        })
    };
    return <><div className={module3062.contentWrapper}><div className={module3062.content}><div className={module3062.title}>{[
        "uninstall",
        "stop"
    ].includes(type) ? <module186.Icon name="close" type="light" className={module3062.icon}/> : <module186.Icon name="information" size={20} color={{
        primary: "#ffffff",
        secondary: "#329DCE"
    }}/>}<span>{t(`${type.toUpperCase()}_SOFT`, {
        name: containerKey
    })}</span></div>{p[type] && <module186.Alert message={p[type]}/>}</div></div><Module829 className={module3062.confirm} onOk={function() {
        const e = containers.map((e)=>{
            const { name, todoTasks } = e;
            const l = todoTasks === undefined ? [] : todoTasks;
            const u = `${name}_${type}`;
            if (name === containerKey) {
                const todoTasks_1 = module247([].concat(module61(l.filter((e)=>{
                    if ([
                        "start",
                        "stop"
                    ].includes(type)) {
                        return ![
                            `${name}_start`,
                            `${name}_stop`
                        ].includes(e);
                    }
                    if ([
                        "install",
                        "uninstall"
                    ].includes(type)) {
                        return ![
                            `${name}_install`,
                            `${name}_uninstall`
                        ].includes(e);
                    }
                    return e;
                })), [
                    u
                ]));
                return {
                    ...e,
                    todoTasks: todoTasks_1
                };
            }
            return e;
        });
        onConfirm(e);
    }} onCancel={onCancel}/></>;
};
VComponent.propTypes = {
    type: module1.string,
    onConfirm: module1.func,
    onCancel: module1.func
};
export default VComponent;
