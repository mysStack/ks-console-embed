import "./module-15.js";
import "./module-315.js";
import module186 from "./module-186.js";
import Module1549 from "./module-1549.js";
import "./module-553.js";
export default function({ formTemplate, formRef, formProps, module, cluster, namespace, rootStore }) {
    return <div className="margin-t12"><module186.Form data={formTemplate} ref={formRef} {...formProps}><Module1549 formProps={formProps} data={formTemplate} module={module} cluster={cluster} namespace={namespace} replicas={formTemplate?.spec?.replicas} rootStore={rootStore}/></module186.Form></div>;
};
