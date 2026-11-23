export default function(e, t) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(e)) {
        const n = [];
        let r = true;
        let o = false;
        let a;
        try {
            for(var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); r = true);
        } catch (error) {
            o = true;
            a = error;
        } finally{
            try {
                if (!(r || l.return == null)) {
                    l.return();
                }
            } finally{
                if (o) {
                    throw a;
                }
            }
        }
        return n;
    }
};
