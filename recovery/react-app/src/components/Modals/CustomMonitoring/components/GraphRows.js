import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-553.js";
import Module2842 from "components/Modals/CustomMonitoring/components/GraphMenu";
import module2844 from "unpacked/module-2844.js";
export default function(e) {
    return e.rows.map((e)=><div key={e.id}>{e.hideTitle || <h3 className={module2844.rowTitle}>{e.title}</h3>}{e.panels.map((e)=><Module2842 key={e.id} title={e.title} metrics={e.metrics}/>)}</div>);
};
