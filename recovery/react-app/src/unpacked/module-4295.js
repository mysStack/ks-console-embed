import "unpacked/module-15.js";
import "unpacked/module-29.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import module26 from "unpacked/module-26.js";
import { useEffect } from "unpacked/module-553.js";
import { getDisplayNameNew, getDomTitle } from "utils/index";
import { eventBus } from "utils/EventBus";
import { eventKeys, useEventValue } from "utils/events";
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
