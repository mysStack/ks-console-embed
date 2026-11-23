import module172 from "unpacked/module-172.js";
const apply = Function.prototype.apply;
const call = Function.prototype.call;
export default typeof Reflect === "object" && Reflect.apply || (module172 ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});
