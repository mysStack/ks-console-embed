import module100 from "./module-100.js";
const module100_isFinite = module100.isFinite;
export default function(e) {
    return typeof e === "number" && module100_isFinite(e);
};
