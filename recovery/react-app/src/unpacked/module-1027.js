export const Disposable = (()=>{
    function e() {
        this._disposables = [];
        this._isDisposed = false;
    }
    e.prototype.dispose = function() {
        this._isDisposed = true;
        this._disposables.forEach((e)=>e.dispose());
        this._disposables.length = 0;
    };
    e.prototype.register = function(e) {
        this._disposables.push(e);
    };
    e.prototype.unregister = function(e) {
        const t = this._disposables.indexOf(e);
        if (t !== -1) {
            this._disposables.splice(t, 1);
        }
    };
    return e;
})();
