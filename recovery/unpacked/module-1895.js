import module909 from "./module-909.js";
class o {
    constructor(){
        this._arr = [];
        this._keyIndices = {};
    }
    size() {
        return this._arr.length;
    }
    keys() {
        return this._arr.map((e)=>e.key);
    }
    has(e) {
        return module909.has(this._keyIndices, e);
    }
    priority(e) {
        const t = this._keyIndices[e];
        if (t !== undefined) {
            return this._arr[t].priority;
        }
    }
    min() {
        if (this.size() === 0) {
            throw new Error("Queue underflow");
        }
        return this._arr[0].key;
    }
    add(e, priority) {
        const _keyIndices = this._keyIndices;
        e = String(e);
        if (!module909.has(_keyIndices, e)) {
            const o = this._arr;
            const i = o.length;
            _keyIndices[e] = i;
            o.push({
                key: e,
                priority
            });
            this._decrease(i);
            return true;
        }
        return false;
    }
    removeMin() {
        this._swap(0, this._arr.length - 1);
        const e = this._arr.pop();
        delete this._keyIndices[e.key];
        this._heapify(0);
        return e.key;
    }
    decrease(e, t) {
        const n = this._keyIndices[e];
        if (t > this._arr[n].priority) {
            throw new Error(`New priority is greater than current priority. Key: ${e} Old: ${this._arr[n].priority} New: ${t}`);
        }
        this._arr[n].priority = t;
        this._decrease(n);
    }
    _heapify(e) {
        const _arr = this._arr;
        const n = 2 * e;
        const r = n + 1;
        let o = e;
        if (n < _arr.length) {
            o = _arr[n].priority < _arr[o].priority ? n : o;
            if (r < _arr.length) {
                o = _arr[r].priority < _arr[o].priority ? r : o;
            }
            if (o !== e) {
                this._swap(e, o);
                this._heapify(o);
            }
        }
    }
    _decrease(e) {
        let t;
        for(const n = this._arr, r = n[e].priority; e !== 0 && !(n[t = e >> 1].priority < r);){
            this._swap(e, t);
            e = t;
        }
    }
    _swap(e, t) {
        const _arr = this._arr;
        const _keyIndices = this._keyIndices;
        const o = _arr[e];
        const i = _arr[t];
        _arr[e] = i;
        _arr[t] = o;
        _keyIndices[i.key] = e;
        _keyIndices[o.key] = t;
    }
}
export default o;
