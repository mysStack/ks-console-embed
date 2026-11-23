import "./module-15.js";
import "./module-315.js";
import "./module-58.js";
import { useRef } from "./module-553.js";
import { Modal } from "./module-904.js";
import Module1689 from "./module-1689.js";
export default function({ title, visible, onOk, onCancel, ...rest }) {
    const dRef = useRef();
    return <Modal width={960} visible={visible} title={title ?? t("EDIT_POD_IP_POOL")} onOk={function() {
        if (dRef.current) {
            dRef.current.validate(function() {
                onOk(dRef.current.getData());
            });
        }
    }} onCancel={onCancel} okText={t("EDIT")}><Module1689 {...rest} formRef={dRef}/></Modal>;
};
