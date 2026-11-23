const r = (()=>{
    function e() {
        this._didWarmUp = false;
    }
    e.prototype.dispose = function() {};
    e.prototype.warmUp = function() {
        if (!this._didWarmUp) {
            this._doWarmUp();
            this._didWarmUp = true;
        }
    };
    e.prototype._doWarmUp = function() {};
    e.prototype.beginFrame = function() {};
    return e;
})();
export default r;
