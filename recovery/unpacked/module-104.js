import module21 from "./module-21.js";
export default {
    Set,
    add: module21(Set.prototype.add),
    has: module21(Set.prototype.has),
    remove: module21(Set.prototype.delete),
    proto: Set.prototype
};
