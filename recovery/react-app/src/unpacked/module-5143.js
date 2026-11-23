import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module896 from "unpacked/module-896.js";
import module5144 from "unpacked/module-5144.js";
const s = observer(function({ cluster, onChange, store }) {
    const options = module896(store.clusters, function(e) {
        return {
            label: `${t("CLUSTER")}: ${e.name}`,
            value: e.name
        };
    });
    return <module186.Select className={module5144.select} value={cluster} onChange={onChange} options={options} showTip/>;
});
export default s;
