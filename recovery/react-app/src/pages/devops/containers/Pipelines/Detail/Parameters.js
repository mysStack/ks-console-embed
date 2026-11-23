import "unpacked/module-15.js";
import "unpacked/module-1154.js";
import "unpacked/module-1155.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import Module963 from "unpacked/module-963.js";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import "unpacked/module-553.js";
import Module5113 from "pages/devops/containers/Pipelines/Detail/Parameters/Item";
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
