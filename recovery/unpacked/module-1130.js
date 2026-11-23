import "./module-15.js";
import "./module-16.js";
import "./module-41.js";
import "./module-44.js";
import module96 from "./module-96.js";
import "./module-4.js";
import "./module-22.js";
import * as module553 from "./module-553.js";
import module452 from "./module-452.js";
export default function({ name, namespace, cluster }) {
    const l = module553.useState(true);
    const f = module96(l, 2);
    const d = f[0];
    const p = f[1];
    const m = module553.useState(false);
    const h = module96(m, 2);
    const v = h[0];
    const g = h[1];
    const y = async ()=>{
        let t;
        let l;
        t = new module452;
        p(true);
        l = await t.fetchList({
            cluster,
            namespace,
            pvcName: name
        });
        g(l.length > 0);
        p(false);
    };
    module553.useEffect(function() {
        y();
    }, []);
    const E = v ? t("MOUNTED") : t("NOT_MOUNTED");
    if (d) {
        return "";
    }
    return module553.default.createElement("span", null, E);
};
