import "./module-15.js";
import "./module-5.js";
import module26 from "./module-26.js";
import { ReactComponent } from "./module-1802.js";
import { ReactComponent as ReactComponent_1 } from "./module-1803.js";
import { ReactComponent as ReactComponent_2 } from "./module-4167.js";
import module1361 from "./module-1361.js";
import module1362 from "./module-1362.js";
import module4168 from "./module-4168.js";
const pathGetter = function(e) {
    return `${module26(e, "Host")}:${module26(e, "Port")}`;
};
const p = {
    es: {
        ICON: ReactComponent,
        title: "Elasticsearch",
        pathGetter,
        Form: module1361,
        get description () {
            return t("ES_DESC");
        }
    },
    kafka: {
        ICON: ReactComponent_1,
        title: "Kafka",
        pathGetter: function(e) {
            return module26(e, "Brokers");
        },
        Form: module1362,
        get description () {
            return t("KAFKA_DESC");
        }
    },
    forward: {
        ICON: ReactComponent_2,
        title: "Fluentd",
        pathGetter,
        Form: module4168,
        get description () {
            return t("FLUENTD_DESC");
        }
    }
};
export default p;
