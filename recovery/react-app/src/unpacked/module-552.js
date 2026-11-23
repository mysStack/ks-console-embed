import module8 from "unpacked/module-8.js";
import self from "unpacked/module-25.js";
import module113 from "unpacked/module-113.js";
import module33 from "unpacked/module-33.js";
const forced = self.self !== self;
try {
    if (module33) {
        const c = Object.getOwnPropertyDescriptor(self, "self");
        if (!(!forced && c && c.get && c.enumerable)) {
            module113(self, "self", {
                get: function() {
                    return self;
                },
                set: function(value) {
                    if (this !== self) {
                        throw new TypeError("Illegal invocation");
                    }
                    Object.defineProperty(self, "self", {
                        value,
                        writable: true,
                        configurable: true,
                        enumerable: true
                    });
                },
                configurable: true,
                enumerable: true
            });
        }
    } else {
        module8({
            global: true,
            simple: true,
            forced
        }, {
            self
        });
    }
} catch (e) {}
