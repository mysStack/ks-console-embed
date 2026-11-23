import "./module-15.js";
import "./module-1154.js";
import "./module-1155.js";
import "./module-16.js";
import "./module-4.js";
import Module963 from "./module-963.js";
import module26 from "./module-26.js";
import { inject, observer } from "./module-239.js";
import "./module-553.js";
import Module5113 from "./module-5113.js";
const d = inject("detailStore")(observer(function(e) {
    const list = module26(e, "spec.parameters", []).flatMap((e)=>[
            [
                e.name,
                e.value
            ]
        ]);
    if (list.length === 0) {
        return <Module963 desc={t("NO_BUILD_PARAMETERS")}/>;
    }
    return <Module5113 title={t("BUILD_PARAMETERS")} list={list}/>;
}));
export default d;
