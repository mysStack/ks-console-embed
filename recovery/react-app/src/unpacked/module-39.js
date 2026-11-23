import module172 from "./module-172.js";
const call = Function.prototype.call;
export default module172 ? call.bind(call) : function() {
    return call.apply(call, arguments);
};
