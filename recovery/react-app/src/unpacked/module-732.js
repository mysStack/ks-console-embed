"use strict";
class r {
    constructor(e){
        let t = this;
        if (!(t instanceof r)) {
            t = new r;
        }
        t.tail = null;
        t.head = null;
        t.length = 0;
        if (e && typeof e.forEach === "function") {
            e.forEach((e)=>{
                t.push(e);
            });
        } else if (arguments.length > 0) {
            for(let n = 0, o = arguments.length; n < o; n++){
                t.push(arguments[n]);
            }
        }
        return t;
    }
    removeNode(e) {
        if (e.list !== this) {
            throw new Error("removing node which does not belong to this list");
        }
        const { next, prev } = e;
        if (next) {
            next.prev = prev;
        }
        if (prev) {
            prev.next = next;
        }
        if (e === this.head) {
            this.head = next;
        }
        if (e === this.tail) {
            this.tail = prev;
        }
        e.list.length--;
        e.next = null;
        e.prev = null;
        e.list = null;
        return next;
    }
    unshiftNode(e) {
        if (e !== this.head) {
            if (e.list) {
                e.list.removeNode(e);
            }
            const t = this.head;
            e.list = this;
            e.next = t;
            if (t) {
                t.prev = e;
            }
            this.head = e;
            if (!this.tail) {
                this.tail = e;
            }
            this.length++;
        }
    }
    pushNode(e) {
        if (e !== this.tail) {
            if (e.list) {
                e.list.removeNode(e);
            }
            const t = this.tail;
            e.list = this;
            e.prev = t;
            if (t) {
                t.next = e;
            }
            this.tail = e;
            if (!this.head) {
                this.head = e;
            }
            this.length++;
        }
    }
    push(...args) {
        for(let e = 0, t = args.length; e < t; e++){
            a(this, args[e]);
        }
        return this.length;
    }
    unshift(...args) {
        for(let e = 0, t = args.length; e < t; e++){
            i(this, args[e]);
        }
        return this.length;
    }
    pop() {
        if (this.tail) {
            const e = this.tail.value;
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
            this.length--;
            return e;
        }
    }
    shift() {
        if (this.head) {
            const e = this.head.value;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.length--;
            return e;
        }
    }
    forEach(e, t) {
        t = t || this;
        for(let n = this.head, r = 0; n !== null; r++){
            e.call(t, n.value, r, this);
            n = n.next;
        }
    }
    forEachReverse(e, t) {
        t = t || this;
        for(let n = this.tail, r = this.length - 1; n !== null; r--){
            e.call(t, n.value, r, this);
            n = n.prev;
        }
    }
    get(e) {
        for(var t = 0, n = this.head; n !== null && t < e; t++){
            n = n.next;
        }
        if (t === e && n !== null) {
            return n.value;
        }
    }
    getReverse(e) {
        for(var t = 0, n = this.tail; n !== null && t < e; t++){
            n = n.prev;
        }
        if (t === e && n !== null) {
            return n.value;
        }
    }
    map(e, t) {
        t = t || this;
        const n = new r;
        for(let o = this.head; o !== null;){
            n.push(e.call(t, o.value, this));
            o = o.next;
        }
        return n;
    }
    mapReverse(e, t) {
        t = t || this;
        const n = new r;
        for(let o = this.tail; o !== null;){
            n.push(e.call(t, o.value, this));
            o = o.prev;
        }
        return n;
    }
    reduce(e, t) {
        let n;
        let head = this.head;
        if (arguments.length > 1) {
            n = t;
        } else {
            if (!this.head) {
                throw new TypeError("Reduce of empty list with no initial value");
            }
            head = this.head.next;
            n = this.head.value;
        }
        for(let o = 0; head !== null; o++){
            n = e(n, head.value, o);
            head = head.next;
        }
        return n;
    }
    reduceReverse(e, t) {
        let n;
        let tail = this.tail;
        if (arguments.length > 1) {
            n = t;
        } else {
            if (!this.tail) {
                throw new TypeError("Reduce of empty list with no initial value");
            }
            tail = this.tail.prev;
            n = this.tail.value;
        }
        for(let o = this.length - 1; tail !== null; o--){
            n = e(n, tail.value, o);
            tail = tail.prev;
        }
        return n;
    }
    toArray() {
        const e = new Array(this.length);
        for(let t = 0, n = this.head; n !== null; t++){
            e[t] = n.value;
            n = n.next;
        }
        return e;
    }
    toArrayReverse() {
        const e = new Array(this.length);
        for(let t = 0, n = this.tail; n !== null; t++){
            e[t] = n.value;
            n = n.prev;
        }
        return e;
    }
    slice(e, t) {
        if ((t = t || this.length) < 0) {
            t += this.length;
        }
        if ((e = e || 0) < 0) {
            e += this.length;
        }
        const n = new r;
        if (t < e || t < 0) {
            return n;
        }
        if (e < 0) {
            e = 0;
        }
        if (t > this.length) {
            t = this.length;
        }
        for(var o = 0, a = this.head; a !== null && o < e; o++){
            a = a.next;
        }
        for(; a !== null && o < t; o++, a = a.next){
            n.push(a.value);
        }
        return n;
    }
    sliceReverse(e, t) {
        if ((t = t || this.length) < 0) {
            t += this.length;
        }
        if ((e = e || 0) < 0) {
            e += this.length;
        }
        const n = new r;
        if (t < e || t < 0) {
            return n;
        }
        if (e < 0) {
            e = 0;
        }
        if (t > this.length) {
            t = this.length;
        }
        for(var o = this.length, a = this.tail; a !== null && o > t; o--){
            a = a.prev;
        }
        for(; a !== null && o > e; o--, a = a.prev){
            n.push(a.value);
        }
        return n;
    }
    splice(e, t, ...n) {
        if (e > this.length) {
            e = this.length - 1;
        }
        if (e < 0) {
            e = this.length + e;
        }
        for(var r = 0, a = this.head; a !== null && r < e; r++){
            a = a.next;
        }
        const i = [];
        for(r = 0; a && r < t; r++){
            i.push(a.value);
            a = this.removeNode(a);
        }
        if (a === null) {
            a = this.tail;
        }
        if (a !== this.head && a !== this.tail) {
            a = a.prev;
        }
        for(r = 0; r < n.length; r++){
            a = o(this, a, n[r]);
        }
        return i;
    }
    reverse() {
        const head = this.head;
        const tail = this.tail;
        for(let n = head; n !== null; n = n.prev){
            const r = n.prev;
            n.prev = n.next;
            n.next = r;
        }
        this.head = tail;
        this.tail = head;
        return this;
    }
}
function o(e, t, n) {
    const r = t === e.head ? new l(n, null, t, e) : new l(n, t, t.next, e);
    if (r.next === null) {
        e.tail = r;
    }
    if (r.prev === null) {
        e.head = r;
    }
    e.length++;
    return r;
}
function a(e, t) {
    e.tail = new l(t, e.tail, null, e);
    if (!e.head) {
        e.head = e.tail;
    }
    e.length++;
}
function i(e, t) {
    e.head = new l(t, null, e.head, e);
    if (!e.tail) {
        e.tail = e.head;
    }
    e.length++;
}
function l(e, t, n, r) {
    if (!(this instanceof l)) {
        return new l(e, t, n, r);
    }
    this.list = r;
    this.value = e;
    if (t) {
        t.next = this;
        this.prev = t;
    } else {
        this.prev = null;
    }
    if (n) {
        n.prev = this;
        this.next = n;
    } else {
        this.next = null;
    }
}
module.exports = r;
r.Node = l;
r.create = r;
try {
    require("unpacked/module-733.js").default(r);
} catch (e) {}
