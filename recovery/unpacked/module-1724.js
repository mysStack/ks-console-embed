import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-16.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module1377 from "./module-1377.js";
export default function({ option }) {
    function RComponent() {
        let e;
        return <module186.Form.Item label={option.name} desc={option.description} rules={[
            {
                required: (e = option.required) !== null && e !== undefined && e,
                message: t("PARAM_REQUIRED")
            }
        ]}><module186.Input name={`paramsForm.${option.name}`} defaultValue={option.default || ""}/></module186.Form.Item>;
    }
    return <div className={module1377.itemWrapper}>{((e)=>{
        let t = null;
        if (e === "bool") {
            t = <module186.Form.Item label={option.name}><module186.RadioGroup name={`paramsForm.${option.name}`} defaultValue={option.default || false}><module186.Radio value>True</module186.Radio><module186.Radio value={false}>False</module186.Radio></module186.RadioGroup></module186.Form.Item>;
        } else {
            t = RComponent();
        }
        return t;
    })(option.type)}</div>;
};
