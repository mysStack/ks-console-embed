import "./module-15.js";
import "./module-28.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
const u = (()=>{
    function e(t) {
        module36(this, e);
        this.data = [];
        this.maxLength = 50;
        this.cursor = 0;
        if (!isNaN(t)) {
            this.maxLength = t;
        }
    }
    module37(e, [
        {
            key: "push",
            value: function(e) {
                if (this.data.length >= this.maxLength) {
                    this.data.shift();
                }
                this.data.push(e);
                this.cursor = 0;
            }
        },
        {
            key: "undo",
            value: function() {
                if (this.cursor < this.data.length - 1) {
                    this.cursor += 1;
                }
                return this.data[this.data.length - 1 - this.cursor];
            }
        },
        {
            key: "redo",
            value: function() {
                if (this.cursor > 0) {
                    this.cursor -= 1;
                }
                return this.data[this.data.length - 1 - this.cursor];
            }
        }
    ]);
    return e;
})();
export default u;
