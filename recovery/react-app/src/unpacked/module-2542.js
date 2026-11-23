import module798 from "./module-798.js";
export default function(e) {
    module798(e);
    return e.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&");
};

