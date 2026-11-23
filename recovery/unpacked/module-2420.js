import module1567 from "./module-1567.js";
export default function(e, t) {
    if (e) {
        if (typeof e === "string") {
            return module1567(e, t);
        }
        let n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor) {
            n = e.constructor.name;
        }
        if (n === "Map" || n === "Set") {
            return Array.from(e);
        }
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
            return module1567(e, t);
        }
        return undefined;
    }
};
