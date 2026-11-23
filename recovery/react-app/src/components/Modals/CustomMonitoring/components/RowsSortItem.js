import "unpacked/module-15.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module2832 from "unpacked/module-2832.js";
export default function({ title, sortHandlerClassName, onEditClick, onDeleteClick }) {
    return <div className={module2832.wrapper}><h3>{title}</h3><div className={module2832.tools}><module186.Icon name="pen" className={module2832.edit} onClick={onEditClick}/><module186.Icon name="trash" className={module2832.edit} onClick={onDeleteClick}/><module186.Icon name="drag-handle" className={sortHandlerClassName}/></div></div>;
};
