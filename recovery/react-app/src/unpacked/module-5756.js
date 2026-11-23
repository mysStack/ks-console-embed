import { C0 } from "unpacked/module-1255.js";
export class AltClickHandler {
    constructor(e, t){
        var i;
        this._mouseEvent = e;
        this._terminal = t;
        this._lines = this._terminal.buffer.lines;
        this._startCol = this._terminal.buffer.x;
        this._startRow = this._terminal.buffer.y;
        var r = this._terminal.mouseHelper.getCoords(this._mouseEvent, this._terminal.element, this._terminal.charMeasure, this._terminal.options.lineHeight, this._terminal.cols, this._terminal.rows, false);
        if (r) {
            i = r.map((e)=>e - 1);
            this._endCol = i[0];
            this._endRow = i[1];
        }
    }
    move() {
        if (this._mouseEvent.altKey && this._endCol !== undefined && this._endRow !== undefined) {
            this._terminal.handler(this._arrowSequences());
        }
    }
    _arrowSequences() {
        if (this._terminal.buffer.hasScrollback) {
            return this._moveHorizontallyOnly();
        }
        return this._resetStartingRow() + this._moveToRequestedRow() + this._moveToRequestedCol();
    }
    _resetStartingRow() {
        if (this._moveToRequestedRow().length === 0) {
            return "";
        }
        return s(this._bufferLine(this._startCol, this._startRow, this._startCol, this._startRow - this._wrappedRowsForRow(this._startRow), false).length, this._sequence("D"));
    }
    _moveToRequestedRow() {
        const e = this._startRow - this._wrappedRowsForRow(this._startRow);
        const t = this._endRow - this._wrappedRowsForRow(this._endRow);
        return s(Math.abs(e - t) - this._wrappedRowsCount(), this._sequence(this._verticalDirection()));
    }
    _moveToRequestedCol() {
        let e;
        e = this._moveToRequestedRow().length > 0 ? this._endRow - this._wrappedRowsForRow(this._endRow) : this._startRow;
        const _endRow = this._endRow;
        const i = this._horizontalDirection();
        return s(this._bufferLine(this._startCol, e, this._endCol, _endRow, i === "C").length, this._sequence(i));
    }
    _moveHorizontallyOnly() {
        const e = this._horizontalDirection();
        return s(Math.abs(this._startCol - this._endCol), this._sequence(e));
    }
    _wrappedRowsCount() {
        let e = 0;
        for(let t = this._startRow - this._wrappedRowsForRow(this._startRow), i = this._endRow - this._wrappedRowsForRow(this._endRow), r = 0; r < Math.abs(t - i); r++){
            const n = this._verticalDirection() === "A" ? -1 : 1;
            if (this._lines.get(t + n * r).isWrapped) {
                e++;
            }
        }
        return e;
    }
    _wrappedRowsForRow(e) {
        let t = 0;
        for(let i = this._lines.get(e).isWrapped; i && e >= 0 && e < this._terminal.rows;){
            t++;
            e--;
            i = this._lines.get(e).isWrapped;
        }
        return t;
    }
    _horizontalDirection() {
        let e;
        e = this._moveToRequestedRow().length > 0 ? this._endRow - this._wrappedRowsForRow(this._endRow) : this._startRow;
        if (this._startCol < this._endCol && e <= this._endRow || this._startCol >= this._endCol && e < this._endRow) {
            return "C";
        }
        return "D";
    }
    _verticalDirection() {
        if (this._startRow > this._endRow) {
            return "A";
        }
        return "B";
    }
    _bufferLine(e, t, i, r, n) {
        for(var s = e, o = t, a = ""; s !== i || o !== r;){
            s += n ? 1 : -1;
            if (n && s > this._terminal.cols - 1) {
                a += this._terminal.buffer.translateBufferLineToString(o, false, e, s);
                s = 0;
                e = 0;
                o++;
            } else if (!n && s < 0) {
                a += this._terminal.buffer.translateBufferLineToString(o, false, 0, e + 1);
                e = s = this._terminal.cols - 1;
                o--;
            }
        }
        return a + this._terminal.buffer.translateBufferLineToString(o, false, e, s);
    }
    _sequence(e) {
        const t = this._terminal.applicationCursor ? "O" : "[";
        return C0.ESC + t + e;
    }
}
function s(e, t) {
    e = Math.floor(e);
    let i = "";
    for(let r = 0; r < e; r++){
        i += t;
    }
    return i;
}
