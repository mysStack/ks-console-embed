const r = new function e() {
    const _this = this;
    ((e, t)=>{
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    })(this, e);
    this.register = function(e) {
        if (_this.openInstances.indexOf(e) === -1) {
            _this.openInstances.push(e);
            _this.emit("register");
        }
    };
    this.deregister = function(e) {
        const n = _this.openInstances.indexOf(e);
        if (n !== -1) {
            _this.openInstances.splice(n, 1);
            _this.emit("deregister");
        }
    };
    this.subscribe = function(e) {
        _this.subscribers.push(e);
    };
    this.emit = function(e) {
        _this.subscribers.forEach((n)=>n(e, _this.openInstances.slice()));
    };
    this.openInstances = [];
    this.subscribers = [];
};
export default r;
