export const a = function(e, t) {
    const n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
        let r = n.createSVGPoint();
        r.x = t.clientX;
        r.y = t.clientY;
        return [
            (r = r.matrixTransform(e.getScreenCTM().inverse())).x,
            r.y
        ];
    }
    const o = e.getBoundingClientRect();
    return [
        t.clientX - o.left - e.clientLeft,
        t.clientY - o.top - e.clientTop
    ];
};
