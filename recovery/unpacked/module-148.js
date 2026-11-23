import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-210.js";
import "./module-200.js";
import "./module-30.js";
import "./module-48.js";
import "./module-16.js";
import "./module-326.js";
import "./module-4.js";
import "./module-17.js";
import "./module-324.js";
import "./module-38.js";
import "./module-32.js";
import "./module-249.js";
import "./module-45.js";
import "./module-118.js";
import "./module-42.js";
import "./module-24.js";
import "./module-193.js";
import "./module-460.js";
import "./module-461.js";
import "./module-462.js";
import "./module-463.js";
import "./module-464.js";
import "./module-465.js";
import "./module-466.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
const s = (()=>{
    function e() {
        module36(this, e);
        this.listeners = new Map;
        this.errors = new Map;
    }
    module37(e, [
        {
            key: "on",
            value: function(e, t) {
                if (!this.listeners.has(e)) {
                    this.listeners.set(e, new Set);
                }
                this.listeners.get(e).add(t);
            }
        },
        {
            key: "off",
            value: function(e, t) {
                if (this.listeners.has(e)) {
                    this.listeners.get(e).delete(t);
                }
            }
        },
        {
            key: "emit",
            value: function(e, ...args) {
                if (this.listeners.has(e)) {
                    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++){
                        n[r - 1] = arguments[r];
                    }
                    for (const l of this.listeners.get(e)){
                        try {
                            l.apply(undefined, n);
                        } catch (error) {
                            this.handleError(e, error);
                        }
                    }
                }
            }
        },
        {
            key: "hasEvent",
            value: function(e) {
                return this.listeners.has(e);
            }
        },
        {
            key: "hasListener",
            value: function(e, t) {
                return !!this.listeners.has(e) && this.listeners.get(e).has(t);
            }
        },
        {
            key: "onError",
            value: function(e, t) {
                this.errors.set(e, t);
            }
        },
        {
            key: "handleError",
            value: function(e, t) {
                if (this.errors.has(e)) {
                    this.errors.get(e)(t);
                } else {
                    console.error(`Error in event "${e}":`, t);
                }
            }
        }
    ]);
    return e;
})();
export default s;
export const eventBus = new s;
