export default function(e) {
    e.prototype[Symbol.iterator] = function*() {
        for(let e = this.head; e; e = e.next){
            yield e.value;
        }
    };
};
