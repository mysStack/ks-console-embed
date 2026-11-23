import module1245 from "unpacked/module-1245.js";
import module1899 from "unpacked/module-1899.js";
import module4582 from "unpacked/module-4582.js";
const module1245_longestPath = module1245.longestPath;
export default function(e) {
    switch(e.graph().ranker){
        default:
            l(e);
            break;
        case "tight-tree":
            ((e)=>{
                module1245_longestPath(e);
                module1899(e);
            })(e);
            break;
        case "longest-path":
            a(e);
    }
};
var a = module1245_longestPath;
function l(e) {
    module4582(e);
}
