import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import { getLocalTime } from "utils/index";
import module814 from "components/Base/List";
import Module816 from "components/Clusters/ClusterTitle";
import module4054 from "unpacked/module-4054.js";
const y = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
    })(r);
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleClick = function() {
            const e_props = e.props;
            const { data, onEnter } = e_props;
            if (!e.notReady) {
                if (onEnter) {
                    onEnter(data.name);
                }
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, isEdgeWize } = props;
                const details = [
                    {
                        title: data.nodeCount,
                        description: t("NODE_COUNT")
                    },
                    {
                        title: data.kubernetesVersion,
                        description: t("KUBERNETES_VERSION")
                    },
                    {
                        title: (isEdgeWize ? data.hostCluster : data.provider) || "-",
                        description: isEdgeWize ? t("HOSTED_IN") : t("PROVIDER"),
                        className: module4054.provider,
                        withDomTitle: true
                    },
                    {
                        title: data.createTime ? getLocalTime(data.createTime).format("YYYY-MM-DD HH:mm:ss") : "-",
                        description: t("CREATION_TIME")
                    }
                ];
                const title = <Module816 cluster={data} isEdgeWize={isEdgeWize}/>;
                return <module814.Item className={module3(module4054.wrapper, module31({}, module4054.notReady, this.notReady))} titleClass={module4054.title} title={title} details={details} onClick={this.handleClick}/>;
            }
        },
        {
            key: "notReady",
            get: function() {
                return module26(this.props.data, "conditions.Ready.status") !== "True";
            }
        }
    ]);
    return r;
})(Component);
export default y;
