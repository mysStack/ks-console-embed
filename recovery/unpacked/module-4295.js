import "./module-15.js";
import "./module-29.js";
import "./module-16.js";
import "./module-4.js";
import module26 from "./module-26.js";
import { useEffect } from "./module-553.js";
import { getDisplayNameNew, getDomTitle } from "./module-52.js";
import { eventBus } from "./module-148.js";
import { eventKeys, useEventValue } from "./module-144.js";
export default function({ data = {} }) {
    useEventValue(eventKeys.PROJECT_ITEM_CHANGE(data.namespace, data.cluster));
    const i = module26(globals, `clusterProjectArray.${data.cluster}`, []).find((e)=>data.namespace && e.name === data.namespace);
    useEffect(function() {
        if (i === undefined) {
            eventBus.emit(eventKeys.requestAlias, {
                type: "project",
                params: {
                    project: data.namespace,
                    cluster: data.cluster
                }
            });
        }
    }, [
        i
    ]);
    return getDomTitle(i ? getDisplayNameNew(i) : data.namespace ?? "");
};
