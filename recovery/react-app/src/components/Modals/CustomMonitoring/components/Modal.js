import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import module3 from "unpacked/module-3.js";
import module2849 from "unpacked/module-2849.js";
export default function({ title, description, onCancel, children, operations, className }) {
    return <Module788 fullScreen hideFooter visible title={title} description={description} icon="monitor" className={module3(module2849.wrapper, className)} headerClassName={module2849.header} bodyClassName={module2849.body} closable={false} operations=<div className={module2849.operations}>{operations}<module186.Button icon="close" iconType="light" type="control" onClick={onCancel} className={module2849.close}/></div>>{children}</Module788>;
};
