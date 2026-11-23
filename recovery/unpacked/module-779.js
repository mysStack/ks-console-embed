import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-30.js";
import "./module-28.js";
import "./module-38.js";
import "./module-32.js";
import "./module-41.js";
import "./module-44.js";
import module96 from "./module-96.js";
import { inject } from "./module-239.js";
import { renderRoutes } from "./module-317.js";
import { useEffect, useState } from "./module-553.js";
import module4043 from "./module-4043.js";
const d = inject("rootStore")(function(e) {
    const t = useState(false);
    const r = module96(t, 2);
    const o = r[0];
    const d = r[1];
    const f = async ()=>{
        let r;
        let u;
        let l;
        r = await import("./module-5767.js").then((ns)=>ns.default);
        u = r.default;
        l = new u;
        if ((await l.fetchLicenseByLicenses({
            extensionName: "whizard-monitoring"
        }))?.isAuthorized && globals.app.hasKSModule("whizard")) {
            d(true);
        } else {
            d(false);
            e.rootStore.routing.push("/");
        }
    };
    useEffect(function() {
        f();
        return function() {
            d(false);
        };
    }, []);
    if (o) {
        return renderRoutes(module4043);
    }
    return null;
});
export default d;
