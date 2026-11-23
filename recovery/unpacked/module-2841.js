import "./module-15.js";
import "./module-18.js";
import "./module-553.js";
import Module2842 from "./module-2842.js";
import module2844 from "./module-2844.js";
export default function(e) {
    return e.rows.map((e)=><div key={e.id}>{e.hideTitle || <h3 className={module2844.rowTitle}>{e.title}</h3>}{e.panels.map((e)=><Module2842 key={e.id} title={e.title} metrics={e.metrics}/>)}</div>);
};
