const r = "razdwatrzy";
export default function() {
    return typeof r.contains === "function" && r.contains("dwa") === true && r.contains("foo") === false;
};
