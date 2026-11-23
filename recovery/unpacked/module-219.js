import module25 from "./module-25.js";
import module54 from "./module-54.js";
const module25_document = module25.document;
const i = module54(module25_document) && module54(module25_document.createElement);
export default function(E) {
    if (i) {
        return module25_document.createElement(E);
    }
    return {};
};
