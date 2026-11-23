class r {
    constructor(e, t, n){
        this.type = e;
        this.tag = t;
        this.attrs = null;
        this.map = null;
        this.nesting = n;
        this.level = 0;
        this.children = null;
        this.content = "";
        this.markup = "";
        this.info = "";
        this.meta = null;
        this.block = false;
        this.hidden = false;
    }
    attrIndex(e) {
        let t;
        let n;
        let r;
        if (!this.attrs) {
            return -1;
        }
        n = 0;
        for(r = (t = this.attrs).length; n < r; n++){
            if (t[n][0] === e) {
                return n;
            }
        }
        return -1;
    }
    attrPush(e) {
        if (this.attrs) {
            this.attrs.push(e);
        } else {
            this.attrs = [
                e
            ];
        }
    }
    attrSet(e, t) {
        const n = this.attrIndex(e);
        const r = [
            e,
            t
        ];
        if (n < 0) {
            this.attrPush(r);
        } else {
            this.attrs[n] = r;
        }
    }
    attrGet(e) {
        const t = this.attrIndex(e);
        let n = null;
        if (t >= 0) {
            n = this.attrs[t][1];
        }
        return n;
    }
    attrJoin(e, t) {
        const n = this.attrIndex(e);
        if (n < 0) {
            this.attrPush([
                e,
                t
            ]);
        } else {
            this.attrs[n][1] = `${this.attrs[n][1]} ${t}`;
        }
    }
}
export default r;
