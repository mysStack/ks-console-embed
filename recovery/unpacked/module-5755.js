export class SelectionModel {
    constructor(e){
        this._terminal = e;
        this.clearSelection();
    }
    clearSelection() {
        this.selectionStart = null;
        this.selectionEnd = null;
        this.isSelectAllActive = false;
        this.selectionStartLength = 0;
    }
    get finalSelectionStart() {
        if (this.isSelectAllActive) {
            return [
                0,
                0
            ];
        }
        if (this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed()) {
            return this.selectionEnd;
        }
        return this.selectionStart;
    }
    get finalSelectionEnd() {
        if (this.isSelectAllActive) {
            return [
                this._terminal.cols,
                this._terminal.buffer.ybase + this._terminal.rows - 1
            ];
        }
        if (!this.selectionStart) {
            return null;
        }
        if (!this.selectionEnd || this.areSelectionValuesReversed()) {
            const e = this.selectionStart[0] + this.selectionStartLength;
            if (e > this._terminal.cols) {
                return [
                    e % this._terminal.cols,
                    this.selectionStart[1] + Math.floor(e / this._terminal.cols)
                ];
            }
            return [
                e,
                this.selectionStart[1]
            ];
        }
        if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
            return [
                Math.max(this.selectionStart[0] + this.selectionStartLength, this.selectionEnd[0]),
                this.selectionEnd[1]
            ];
        }
        return this.selectionEnd;
    }
    areSelectionValuesReversed() {
        const selectionStart = this.selectionStart;
        const selectionEnd = this.selectionEnd;
        return !(!selectionStart || !selectionEnd) && (selectionStart[1] > selectionEnd[1] || selectionStart[1] === selectionEnd[1] && selectionStart[0] > selectionEnd[0]);
    }
    onTrim(e) {
        if (this.selectionStart) {
            this.selectionStart[1] -= e;
        }
        if (this.selectionEnd) {
            this.selectionEnd[1] -= e;
        }
        if (this.selectionEnd && this.selectionEnd[1] < 0) {
            this.clearSelection();
            return true;
        }
        if (this.selectionStart && this.selectionStart[1] < 0) {
            this.selectionStart[1] = 0;
        }
        return false;
    }
}
