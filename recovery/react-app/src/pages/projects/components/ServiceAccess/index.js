import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-553.js";
import Module791 from "components/Base/Text";
export default function({ data }) {
    if (data.specType === "ClusterIP") {
        return <Module791 description={t("VIRTUAL_IP_ADDRESS")} title={data.clusterIP}/>;
    }
    if (data.specType === "NodePort") {
        return <Module791 description={t("PORT_PL")} title={data.ports.filter((e)=>e.nodePort).map((e)=>`${e.port}:${e.nodePort}/${e.protocol}`).join("; ")}/>;
    }
    if (data.specType === "LoadBalancer") {
        return <Module791 description={data.loadBalancerIngress.length > 1 ? t("LOAD_BALANCERS_SCAP") : t("LOAD_BALANCER_SCAP")} title={data.loadBalancerIngress.join("; ")}/>;
    }
    return <Module791 description={data.specType} title={data.externalName}/>;
};
