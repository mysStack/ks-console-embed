import "./module-15.js";
import "./module-553.js";
import module186 from "./module-186.js";
import module3522 from "./module-3522.js";
export default function({ type, cluster, clusters, setCluster }) {
    return <div className={module3522.title}><h2>{t("RESOURCE_CONSUMPTION_STATISTICS")}</h2>{type === "workspaces" && globals.app.isMultiCluster && clusters.length > 0 ? <module186.Select className={module3522.clusterSelect} options={clusters} optionRenderer={function({ label, disabled }) {
        return <span style={{
            display: "flex",
            alignItem: "center"
        }}>{label}<span style={{
            marginLeft: "10px"
        }}>{disabled ? <module186.Icon name="update" color={{
            primary: "#ffc781",
            secondary: "#f5a623"
        }}/> : null}</span></span>;
    }} value={cluster} onChange={function(e) {
        setCluster(e);
    }} showTip/> : null}</div>;
};
