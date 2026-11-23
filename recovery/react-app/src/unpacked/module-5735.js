export class CompositionHelper {
    constructor(e, t, i){
        this._textarea = e;
        this._compositionView = t;
        this._terminal = i;
        this._isComposing = false;
        this._isSendingComposition = false;
        this._compositionPosition = {
            start: null,
            end: null
        };
    }
    compositionstart() {
        this._isComposing = true;
        this._compositionPosition.start = this._textarea.value.length;
        this._compositionView.textContent = "";
        this._compositionView.classList.add("active");
    }
    compositionupdate(e) {
        const _this = this;
        this._compositionView.textContent = e.data;
        this.updateCompositionElements();
        setTimeout(()=>{
            _this._compositionPosition.end = _this._textarea.value.length;
        }, 0);
    }
    compositionend() {
        this._finalizeComposition(true);
    }
    keydown(e) {
        if (this._isComposing || this._isSendingComposition) {
            if (e.keyCode === 229) {
                return false;
            }
            if (e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18) {
                return false;
            }
            this._finalizeComposition(false);
        }
        return e.keyCode !== 229 || (this._handleAnyTextareaChanges(), false);
    }
    _finalizeComposition(e) {
        const _this = this;
        this._compositionView.classList.remove("active");
        this._isComposing = false;
        this._clearTextareaPosition();
        if (e) {
            const i = {
                start: this._compositionPosition.start,
                end: this._compositionPosition.end
            };
            this._isSendingComposition = true;
            setTimeout(()=>{
                if (_this._isSendingComposition) {
                    _this._isSendingComposition = false;
                    let e;
                    e = _this._isComposing ? _this._textarea.value.substring(i.start, i.end) : _this._textarea.value.substring(i.start);
                    _this._terminal.handler(e);
                }
            }, 0);
        } else {
            this._isSendingComposition = false;
            const r = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
            this._terminal.handler(r);
        }
    }
    _handleAnyTextareaChanges() {
        const _this = this;
        const value = this._textarea.value;
        setTimeout(()=>{
            if (!_this._isComposing) {
                const i = _this._textarea.value.replace(value, "");
                if (i.length > 0) {
                    _this._terminal.handler(i);
                }
            }
        }, 0);
    }
    updateCompositionElements(e) {
        const _this = this;
        if (this._isComposing) {
            if (this._terminal.buffer.isCursorInViewport) {
                const i = Math.ceil(this._terminal.charMeasure.height * this._terminal.options.lineHeight);
                const r = this._terminal.buffer.y * i;
                const n = this._terminal.buffer.x * this._terminal.charMeasure.width;
                this._compositionView.style.left = `${n}px`;
                this._compositionView.style.top = `${r}px`;
                this._compositionView.style.height = `${i}px`;
                this._compositionView.style.lineHeight = `${i}px`;
                const s = this._compositionView.getBoundingClientRect();
                this._textarea.style.left = `${n}px`;
                this._textarea.style.top = `${r}px`;
                this._textarea.style.width = `${s.width}px`;
                this._textarea.style.height = `${s.height}px`;
                this._textarea.style.lineHeight = `${s.height}px`;
            }
            if (!e) {
                setTimeout(()=>_this.updateCompositionElements(true), 0);
            }
        }
    }
    _clearTextareaPosition() {
        this._textarea.style.left = "";
        this._textarea.style.top = "";
    }
}
