import module8 from "unpacked/module-8.js";
import module25 from "unpacked/module-25.js";
import module145 from "unpacked/module-145.js";
import module591 from "unpacked/module-591.js";
const module25_WebAssembly = module25.WebAssembly;
const forced = new Error("e", {
    cause: 7
}).cause !== 7;
const u = (e, t)=>{
    const n = {};
    n[e] = module591(e, t, forced);
    module8({
        global: true,
        constructor: true,
        arity: 1,
        forced
    }, n);
};
const c = (e, t)=>{
    if (module25_WebAssembly && module25_WebAssembly[e]) {
        const n = {};
        n[e] = module591(`WebAssembly.${e}`, t, forced);
        module8({
            target: "WebAssembly",
            stat: true,
            constructor: true,
            arity: 1,
            forced
        }, n);
    }
};
u("Error", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
u("EvalError", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
u("RangeError", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
u("ReferenceError", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
u("SyntaxError", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
u("TypeError", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
u("URIError", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
c("CompileError", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
c("LinkError", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
c("RuntimeError", function(e) {
    return function(t) {
        return module145(e, this, arguments);
    };
});
