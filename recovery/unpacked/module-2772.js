import "./module-15.js";
import "./module-18.js";
import module31 from "./module-31.js";
import "./module-553.js";
import module1635 from "./module-1635.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import Module1183 from "./module-1183.js";
import module2775 from "./module-2775.js";
export default function({ textPanels, isEditing, onAdd, onDelete, onEdit, onSort, monitors }) {
    return <div><module1635.ReactSortable list={monitors} setList={onSort} className={module2775.wrapper} disabled={!isEditing} key={isEditing} animation={200}>{textPanels.map(({ title, isLoading, value, id: key, errorMessage }, t)=><div key={key} className={module3(module31({}, module2775.editting, isEditing))}><Module1183 errorMessage={errorMessage}><div className={module2775.innner}>{isEditing && <div className={module2775.tools}><module186.Icon name="pen" size={20} type="light" clickable onClick={function() {
            return onEdit(t);
        }}/><module186.Icon name="trash" size={20} type="light" clickable onClick={function() {
            return onDelete(t);
        }}/></div>}<div className={module2775.content}><h6>{value}</h6><p>{title}</p>{isLoading && <span className={module2775.loadingTip}><module186.Loading size={10}/></span>}</div></div></Module1183></div>)}</module1635.ReactSortable>{isEditing && <div className={module2775.wrapper}><div onClick={onAdd} className={module2775.addButton}><module186.Icon name="add" size={20} type="light"/></div></div>}</div>;
};
