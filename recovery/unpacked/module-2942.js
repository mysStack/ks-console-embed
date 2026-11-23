import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module242 from "./module-242.js";
const u = {
    namespaces: function(e) {
        const t = module26(e, "metadata.name");
        const a = module26(e, "metadata.annotations");
        const placement = module26(e, "spec.placement");
        const u = module26(e, "spec.placement.clusters", []);
        const c = module26(e, 'metadata.labels["kubesphere.io/workspace"]');
        const template = module136(e);
        module242(template, "apiVersion");
        module242(template, "kind");
        module242(template, "metadata.name");
        module242(template, "spec");
        const overrides = u.map((e)=>({
                clusterName: e.name,
                clusterOverrides: [
                    {
                        path: "/metadata/annotations",
                        value: a
                    }
                ]
            }));
        return {
            apiVersion: "types.kubefed.io/v1beta1",
            kind: "FederatedNamespace",
            metadata: {
                name: t,
                namespace: t,
                labels: {
                    "kubesphere.io/workspace": c
                },
                annotations: a
            },
            spec: {
                placement,
                template,
                overrides
            }
        };
    }
};
export default u;
