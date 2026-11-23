(function(e) {
    const r = e !== undefined && e || typeof self !== "undefined" && self || window;
    const apply = Function.prototype.apply;
    class i {
        constructor(e, t){
            this._id = e;
            this._clearFn = t;
        }
        close() {
            this._clearFn.call(r, this._id);
        }
    }
    exports.setTimeout = function() {
        return new i(apply.call(setTimeout, r, arguments), clearTimeout);
    };
    exports.setInterval = function() {
        return new i(apply.call(setInterval, r, arguments), clearInterval);
    };
    exports.clearTimeout = exports.clearInterval = function(e) {
        if (e) {
            e.close();
        }
    };
    i.prototype.unref = i.prototype.ref = function() {};
    exports.enroll = function(e, t) {
        clearTimeout(e._idleTimeoutId);
        e._idleTimeout = t;
    };
    exports.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId);
        e._idleTimeout = -1;
    };
    exports._unrefActive = exports.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        const e__idleTimeout = e._idleTimeout;
        if (e__idleTimeout >= 0) {
            e._idleTimeoutId = setTimeout(()=>{
                if (e._onTimeout) {
                    e._onTimeout();
                }
            }, e__idleTimeout);
        }
    };
    require("unpacked/module-3457.js");
    exports.setImmediate = typeof self !== "undefined" && self.setImmediate || e !== undefined && e.setImmediate || this && this.setImmediate;
    exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || e !== undefined && e.clearImmediate || this && this.clearImmediate;
}).call(this, require("unpacked/module-69.js").default);
