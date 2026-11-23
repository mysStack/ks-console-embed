import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-48.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-188.js";
import "unpacked/module-7.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import module1315 from "components/HOCs/withTableActions";
import module874 from "components/Tables/Base";
import module63 from "unpacked/module-63.js";
import module189 from "unpacked/module-189.js";
import { inject, observer } from "unpacked/module-239.js";
import module244 from "unpacked/module-244.js";
import * as module553 from "unpacked/module-553.js";
import module3715 from "unpacked/module-3715.js";
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
