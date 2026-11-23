import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module332 from "./module-332.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module136 from "./module-136.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module68 from "./module-68.js";
const g = {
    es: {
        logstashFormat: true,
        timeKey: "@timestamp",
        logstashPrefix: "ks-logstash-log"
    }
};
const _ = {
    apiVersion: "logging.kubesphere.io/v1alpha2",
    kind: "Output",
    metadata: {
        name: "os",
        namespace: "kubesphere-logging-system"
    },
    spec: {
        matchRegex: "(?:kube|service).(.*)",
        opensearch: {
            httpPassword: {
                valueFrom: {
                    secretKeyRef: {
                        key: "password"
                    }
                }
            },
            httpUser: {
                valueFrom: {
                    secretKeyRef: {
                        key: "user"
                    }
                }
            },
            logstashFormat: true,
            logstashPrefix: "ks-logstash-log",
            suppressTypeName: true,
            timeKey: "@timestamp",
            tls: {
                verify: false
            }
        }
    }
};
const namespace = "kubesphere-logging-system";
const b = {
    logging: "kube.*",
    events: "kube_events",
    auditing: "kube_auditing"
};
const S = ((e)=>{
    module55(a, e);
    var t = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.module = "outputs";
        e.getDetailUrl = function({ name, cluster }) {
            return `${e.getListUrl({
                namespace,
                cluster
            })}/${name}`;
        };
        return e;
    }
    module37(a, [
        {
            key: "fetch",
            value: function(e) {
                this.fetchListByK8s({
                    namespace,
                    ...e
                });
            }
        },
        {
            key: "create",
            value: function({ Name, enabled = true, cluster, component, ...rest }) {
                let h = {};
                if (Name === "os") {
                    const { httpPassword, httpUser, ...rest_1 } = rest;
                    const R = module136(_);
                    const T = module26(R, "spec.opensearch");
                    module74(R, "metadata.name", `${Name}-${component}`);
                    module74(R, "spec.opensearch", {
                        ...T,
                        ...rest_1
                    });
                    module74(R, "spec.opensearch.httpPassword.valueFrom.secretKeyRef.name", httpPassword);
                    module74(R, "spec.opensearch.httpUser.valueFrom.secretKeyRef.name", httpUser);
                    module74(R, "metadata.labels", {
                        "logging.kubesphere.io/enabled": `${enabled}`,
                        "logging.kubesphere.io/component": component
                    });
                    h = {
                        ...R
                    };
                } else {
                    h = {
                        apiVersion: "logging.kubesphere.io/v1alpha2",
                        kind: "Output",
                        metadata: {
                            name: `${Name}-${component}`,
                            namespace,
                            labels: {
                                "logging.kubesphere.io/enabled": `${enabled}`,
                                "logging.kubesphere.io/component": component
                            }
                        },
                        spec: module31({
                            match: b[component]
                        }, Name, {
                            ...g[Name],
                            ...rest
                        })
                    };
                }
                return module332(module51(a.prototype), "create", this).call(this, h, {
                    cluster,
                    namespace
                });
            }
        },
        {
            key: "apiVersion",
            get: function() {
                return "apis/logging.kubesphere.io/v1alpha2";
            }
        }
    ]);
    return a;
})(module68);
export default S;
