export class GridCache {
    constructor(){
        this.cache = [];
    }
    resize(e, t) {
        for(let i = 0; i < e; i++){
            if (this.cache.length <= i) {
                this.cache.push([]);
            }
            for(let r = this.cache[i].length; r < t; r++){
                this.cache[i].push(null);
            }
            this.cache[i].length = t;
        }
        this.cache.length = e;
    }
    clear() {
        for(let e = 0; e < this.cache.length; e++){
            for(let t = 0; t < this.cache[e].length; t++){
                this.cache[e][t] = null;
            }
        }
    }
}
