export default function(e) {
    const t = [];
    if (e != null) {
        for(const n in Object(e)){
            t.push(n);
        }
    }
    return t;
};
