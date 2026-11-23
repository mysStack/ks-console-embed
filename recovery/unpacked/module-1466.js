export class RenderDebouncer {
    constructor(e, t){
        this._terminal = e;
        this._callback = t;
        this._animationFrame = null;
    }
    dispose() {
        if (this._animationFrame) {
            window.cancelAnimationFrame(this._animationFrame);
            this._animationFrame = null;
        }
    }
    refresh(e, t) {
        const _this = this;
        e = e ?? 0;
        t = t ?? this._terminal.rows - 1;
        const r = this._rowStart !== undefined && this._rowStart !== null;
        const n = this._rowEnd !== undefined && this._rowEnd !== null;
        this._rowStart = r ? Math.min(this._rowStart, e) : e;
        this._rowEnd = n ? Math.max(this._rowEnd, t) : t;
        if (!this._animationFrame) {
            this._animationFrame = window.requestAnimationFrame(function() {
                return _this._innerRefresh();
            });
        }
    }
    _innerRefresh() {
        this._rowStart = Math.max(this._rowStart, 0);
        this._rowEnd = Math.min(this._rowEnd, this._terminal.rows - 1);
        this._callback(this._rowStart, this._rowEnd);
        this._rowStart = null;
        this._rowEnd = null;
        this._animationFrame = null;
    }
}
