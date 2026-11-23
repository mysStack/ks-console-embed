import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-84.js";
import "./module-16.js";
import "./module-4.js";
const r = [
    "docker",
    "containerd",
    "nvidia-docker2"
];
export const getSoftIconName = function(e) {
    switch(e){
        case "edgecore":
            return "iot-duotone";
        case "nvidia-docker2":
            return "docker";
        case "containerd":
            return "container";
        default:
            return e;
    }
};
export const getSoftStatus = function(e) {
    if (e === "installed") {
        return {
            name: "success",
            color: {
                primary: "#ffffff",
                secondary: "#55bc8a"
            }
        };
    }
    return {
        name: "information",
        color: {
            primary: "#ffffff"
        }
    };
};
export const getAccessNodeDisplayName = function({ name, alias }) {
    if (alias) {
        return `${alias} (${name})`;
    }
    return name;
};
export const getNodeSpecification = function({ cpu, mem, disk }) {
    return `${cpu}核 CPU | ${mem}M 内存 | ${disk}GB 磁盘`;
};
export const getContainerEngineSofts = function(e) {
    return e.filter(({ name })=>r.includes(name));
};
export const getEdgeSofts = function(e) {
    return e.filter(({ name })=>!r.includes(name));
};
export const getRegisterFormTemplate = function(clusterName, t) {
    if (!t) {
        return {
            clusterName,
            edgeNodeName: "",
            edgeNodeAlias: "",
            edgeIpList: [],
            arch: "",
            userName: "",
            password: "",
            description: ""
        };
    }
    const { name, alias, description } = t;
    return {
        clusterName,
        edgeNodeName: name,
        edgeNodeAlias: alias,
        edgeIpList: [
            t.nodeIP
        ],
        arch: t.arch,
        userName: "",
        password: "",
        description
    };
};
