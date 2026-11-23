export const a = function(e) {
    let t = -1;
    const n = Array(e.size);
    e.forEach((e)=>{
        n[++t] = e;
    });
    return n;
};
