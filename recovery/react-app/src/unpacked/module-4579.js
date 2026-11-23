class n {
    constructor(){
        const e = {};
        e._next = e._prev = e;
        this._sentinel = e;
    }
    dequeue() {
        const _sentinel = this._sentinel;
        const e__prev = _sentinel._prev;
        if (e__prev !== _sentinel) {
            r(e__prev);
            return e__prev;
        }
    }
    enqueue(e) {
        const _sentinel = this._sentinel;
        if (e._prev && e._next) {
            r(e);
        }
        e._next = _sentinel._next;
        _sentinel._next._prev = e;
        _sentinel._next = e;
        e._prev = _sentinel;
    }
    toString() {
        const e = [];
        for(let t = this._sentinel, n = t._prev; n !== t;){
            e.push(JSON.stringify(n, o));
            n = n._prev;
        }
        return `[${e.join(", ")}]`;
    }
}
function r(e) {
    e._prev._next = e._next;
    e._next._prev = e._prev;
    delete e._next;
    delete e._prev;
}
function o(e, t) {
    if (e !== "_next" && e !== "_prev") {
        return t;
    }
}
export default n;
