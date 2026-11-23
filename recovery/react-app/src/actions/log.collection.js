import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-975.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module31 from "unpacked/module-31.js";
import "unpacked/module-58.js";
import "unpacked/module-553.js";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module1153 from "unpacked/module-1153.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import { safeAtob, safeBtoa } from "utils/base64";
import { getValueObj, objectToYaml } from "utils/yaml";
import Module2964 from "components/Forms/LoggingCollection/Status";
import elasticsearch from "components/Forms/Elasticsearch/Settings";
import kafka from "components/Forms/KafkaForm/Settings";
import opensearch from "components/Forms/Opensearch/Settings";
const O = {
    "log.collection.active.switch": {
        on: function({ store, success, ...rest }) {
            var i = module788.open({
                onOk: async (a)=>{
                    let o;
                    o = a.enabled;
                    await store.patch(store.detail, {
                        metadata: {
                            labels: {
                                "logging.whizard.io/enable": o ? "true" : "false"
                            }
                        }
                    });
                    module788.close(i);
                    if (success) {
                        success();
                    }
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                },
                modal: module788.Form,
                store,
                width: 497,
                icon: "timed-task",
                title: t("CHANGE_STATUS"),
                children: <Module2964/>,
                ...rest
            });
        }
    },
    "log.collection.edit": {
        on: function({ store, success, component, ...rest }) {
            const C = {
                elasticsearch,
                kafka,
                opensearch
            };
            const T = store?.detail?.name?.split("-").pop() || "";
            const R = `${T}_${component}`.replace("-", "_");
            const D = module26(getValueObj(safeAtob(module26(store.detail._originData, 'data["sink.yaml"]', {}))), `sinks.${R}`, {});
            const N = C[T] || null;
            const k = module136(D);
            const I = module136(D);
            I.logstashPrefix = module26(k, "bulk.index", "-").replace("{{ .cluster }}-", "").replace("-%Y.%m.%d", "");
            if (T === "opensearch" || T === "elasticsearch") {
                const P = module26(k, "endpoints[0]", "");
                const A = P.lastIndexOf(":");
                I.host = P.substring(0, A);
                I.port = P.substring(A + 1);
            }
            var M = module788.open({
                onOk: async (a)=>{
                    let r;
                    let o;
                    let c;
                    r = module136(a);
                    if (!(T !== "opensearch" && T !== "elasticsearch")) {
                        if (!r.endpoints) {
                            r.endpoints = [];
                        }
                        if (!r.bulk) {
                            r.bulk = {
                                index: ""
                            };
                        }
                        r.endpoints[0] = module1153(a.host, "http") ? `${a.host}:${a.port}` : `http://${a.host}:${a.port}`;
                        r.bulk.index = `{{ .cluster }}-${a.logstashPrefix}-%Y.%m.%d`;
                        delete r.host;
                        delete r.port;
                        delete r.logstashPrefix;
                    }
                    o = objectToYaml({
                        data: {
                            sinks: module31({}, R, r)
                        }
                    });
                    (c = store.detail._originData).data["sink.yaml"] = safeBtoa(o);
                    await store.patch(store.detail, c);
                    module788.close(M);
                    if (success) {
                        success();
                    }
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                },
                modal: module788.Form,
                data: I,
                width: 691,
                icon: "timed-task",
                title: t("EDIT_LOG_RECEIVER"),
                children: <N/>,
                store,
                ...rest
            });
        }
    }
};
export default O;
