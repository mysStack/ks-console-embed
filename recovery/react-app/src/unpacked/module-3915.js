export default function(e) {
    let t = -1;
    const n = Array(e.size);
    e.forEach((e)=>{
        n[++t] = [
            e,
            e
        ];
    });
    return n;
};
