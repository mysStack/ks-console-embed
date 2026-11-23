class r {
    constructor(e){
        this.capacity = e;
        this._map = {};
        this._head = null;
        this._tail = null;
        this._nodePool = [];
        this.size = 0;
    }
    _unlinkNode(e) {
        const { prev, next } = e;
        if (e === this._head) {
            this._head = next;
        }
        if (e === this._tail) {
            this._tail = prev;
        }
        if (prev !== null) {
            prev.next = next;
        }
        if (next !== null) {
            next.prev = prev;
        }
    }
    _appendNode(e) {
        const _tail = this._tail;
        if (_tail !== null) {
            _tail.next = e;
        }
        e.prev = _tail;
        e.next = null;
        this._tail = e;
        if (this._head === null) {
            this._head = e;
        }
    }
    prealloc(e) {
        const _nodePool = this._nodePool;
        for(let i = 0; i < e; i++){
            _nodePool.push({
                prev: null,
                next: null,
                key: null,
                value: null
            });
        }
    }
    get(e) {
        const t = this._map[e];
        if (t !== undefined) {
            this._unlinkNode(t);
            this._appendNode(t);
            return t.value;
        }
        return null;
    }
    peekValue(e) {
        const t = this._map[e];
        if (t !== undefined) {
            return t.value;
        }
        return null;
    }
    peek() {
        const _head = this._head;
        if (_head === null) {
            return null;
        }
        return _head.value;
    }
    set(e, t) {
        let i = this._map[e];
        if (i !== undefined) {
            i = this._map[e];
            this._unlinkNode(i);
            i.value = t;
        } else if (this.size >= this.capacity) {
            i = this._head;
            this._unlinkNode(i);
            delete this._map[i.key];
            i.key = e;
            i.value = t;
            this._map[e] = i;
        } else {
            const r = this._nodePool;
            if (r.length > 0) {
                i = r.pop();
                i.key = e;
                i.value = t;
            } else {
                i = {
                    prev: null,
                    next: null,
                    key: e,
                    value: t
                };
            }
            this._map[e] = i;
            this.size++;
        }
        this._appendNode(i);
    }
}
export default r;
