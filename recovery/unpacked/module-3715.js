import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import module61 from "./module-61.js";
import "./module-553.js";
import { observer } from "./module-239.js";
import module241 from "./module-241.js";
import module186 from "./module-186.js";
import { showNameAndAlias } from "./module-52.js";
import module3716 from "./module-3716.js";
const DComponent = function(e) {
    return <span className={module3716.option} key={e.value}>{e.isFedManaged ? <img className={module3716.indicator} src="/assets/cluster.svg"/> : <module186.Icon name="project"/>}{e.label}</span>;
};
const p = observer(function({ namespace, list, onChange, onFetch }) {
    const pagination = module241(list, [
        "page",
        "total",
        "limit"
    ]);
    const options = module61(list.data.map((e)=>({
            label: showNameAndAlias(e),
            value: e.name,
            isFedManaged: e.isFedManaged
        })));
    return <module186.Select className={module3716.select} value={namespace} onChange={onChange} options={options} placeholder={t("ALL_PROJECTS")} pagination={pagination} isLoading={list.isLoading} valueRenderer={DComponent} optionRenderer={DComponent} onFetch={function(e) {
        onFetch(e);
    }} searchable clearable/>;
});
export default p;
