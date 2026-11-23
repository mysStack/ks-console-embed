import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-48.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-188.js";
import "./module-7.js";
import "./module-315.js";
import "./module-31.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module1315 from "./module-1315.js";
import module874 from "./module-874.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import { inject, observer } from "./module-239.js";
import module244 from "./module-244.js";
import * as module553 from "./module-553.js";
import module3715 from "./module-3715.js";
const g = inject("rootStore", "clusterStore")(observer(module1315(function(e) {
    const { clusterStore, data, isLoading, filters, cluster, module, onFetch } = e;
    module553.useEffect(function() {
        const e = module244.parse(location.search.slice(1));
        if (e.namespace && clusterStore.project !== e.namespace) {
            clusterStore.setProject(e.namespace);
        }
    }, [
        clusterStore
    ]);
    const showEmpty = module63(data) && !isLoading && module63(filters) && !clusterStore.project;
    return module553.default.createElement(module874, {
        customFilter: module553.default.createElement(module3715, {
            module,
            cluster,
            list: clusterStore.projects,
            namespace: clusterStore.project,
            onFetch: function(e = {}) {
                return clusterStore.fetchProjects({
                    cluster,
                    ...module189(clusterStore.projects.filters, "nameAndAlias", "name"),
                    ...e
                });
            },
            onChange: function(e) {
                clusterStore.setProject(e);
                onFetch({}, true);
            }
        }),
        showEmpty,
        ...e
    });
})));
export default g;
