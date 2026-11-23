const n = /\w*$/;
export default function(e) {
    const t = new e.constructor(e.source, n.exec(e));
    t.lastIndex = e.lastIndex;
    return t;
};
