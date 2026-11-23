import module172 from "./module-172.js";
const call = Function.prototype.call;
const i = module172 && Function.prototype.bind.bind(call, call);
export default module172 ? i : function(e) {
    return function() {
        return call.apply(e, arguments);
    };
};
