import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import module61 from "unpacked/module-61.js";
import "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module241 from "unpacked/module-241.js";
import module186 from "unpacked/module-186.js";
import { showNameAndAlias } from "utils/index";
import module3716 from "unpacked/module-3716.js";
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
