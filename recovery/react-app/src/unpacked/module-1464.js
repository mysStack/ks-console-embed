import { NULL_CELL_CHAR, NULL_CELL_CODE, NULL_CELL_WIDTH } from "unpacked/module-923.js";
export const BufferLine = function() {
    class e {
        constructor(e, t, i){
            this.isWrapped = false;
            this._data = [];
            this.length = this._data.length;
            if (e) {
                if (!t) {
                    t = [
                        0,
                        NULL_CELL_CHAR,
                        NULL_CELL_WIDTH,
                        NULL_CELL_CODE
                    ];
                }
                for(let n = 0; n < e; n++){
                    this.push(t);
                }
            }
            if (i) {
                this.isWrapped = true;
            }
        }
        static blankLine(t, i, n) {
            return new e(t, [
                i,
                NULL_CELL_CHAR,
                NULL_CELL_WIDTH,
                NULL_CELL_CODE
            ], n);
        }
        get(e) {
            return this._data[e];
        }
        set(e, t) {
            this._data[e] = t;
        }
        pop() {
            const e = this._data.pop();
            this.length = this._data.length;
            return e;
        }
        push(e) {
            this._data.push(e);
            this.length = this._data.length;
        }
        splice(e, t, ...r) {
            const s = this._data.splice(e, t, ...r);
            this.length = this._data.length;
            return s;
        }
        insertCells(e, t, i) {
            while(t--){
                this.splice(e, 0, i);
                this.pop();
            }
        }
        deleteCells(e, t, i) {
            while(t--){
                this.splice(e, 1);
                this.push(i);
            }
        }
        replaceCells(e, t, i) {
            while(e < t && e < this.length){
                this.set(e++, i);
            }
        }
    }
    return e;
}();
