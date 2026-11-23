import "./module-15.js";
import { getIndexRoute } from "./module-317.js";
import module815 from "./module-815.js";
import module3924 from "./module-3924.js";
export default function(path) {
    return [
        {
            name: "source",
            path: `${path}/source`,
            title: "DATA_SOURCE",
            component: module3924
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
