import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module4188 from "./module-4188.js";
export default function(path) {
    return [
        {
            name: "source",
            path: `${path}/source`,
            title: "DATA_SOURCE",
            component: module4188
        },
        {
            name: "event",
            path: `${path}/event`,
            title: "EVENT_PL",
            component: module815
        },
        getIndexRoute({
            path,
            to: `${path}/source`,
            exact: true
        }),
        getIndexRoute({
            path: "*",
            to: "/404",
            exact: true
        })
    ];
};
