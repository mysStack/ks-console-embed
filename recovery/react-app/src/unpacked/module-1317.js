import module798 from "./module-798.js";
export default function(e) {
    module798(e);
    e = Date.parse(e);
    if (isNaN(e)) {
        return null;
    }
    return new Date(e);
};

