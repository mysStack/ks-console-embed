import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-30.js";
import "unpacked/module-28.js";
import "unpacked/module-38.js";
import "unpacked/module-32.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import { inject } from "unpacked/module-239.js";
import { renderRoutes } from "utils/router.config";
import { useEffect, useState } from "unpacked/module-553.js";
import module4043 from "pages/whizard-telemetry/routes";
const d = inject("rootStore")(function(e) {
    const t = useState(false);
    const r = module96(t, 2);
    const o = r[0];
    const d = r[1];
    const f = async ()=>{
        let r;
        let u;
        let l;
        r = await import("unpacked/module-5767.js").then((ns)=>ns.default);
        u = typeof r === "function" ? r : r && r.default;
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
