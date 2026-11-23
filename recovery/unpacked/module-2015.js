export const MouseHelper = function() {
    class e {
        constructor(e){
            this._renderer = e;
        }
        static getCoordsRelativeToElement(e, t) {
            if (e.pageX === null || e.pageX === undefined) {
                return null;
            }
            const i = t;
            let e_pageX = e.pageX;
            let e_pageY = e.pageY;
            while(t){
                e_pageX -= t.offsetLeft;
                e_pageY -= t.offsetTop;
                t = t.offsetParent;
            }
            for(t = i; t && t !== t.ownerDocument.body;){
                e_pageX += t.scrollLeft;
                e_pageY += t.scrollTop;
                t = t.parentElement;
            }
            return [
                e_pageX,
                e_pageY
            ];
        }
        getCoords(t, i, r, n, s, o, a) {
            if (!r.width || !r.height) {
                return null;
            }
            const l = e.getCoordsRelativeToElement(t, i);
            if (l) {
                l[0] = Math.ceil((l[0] + (a ? this._renderer.dimensions.actualCellWidth / 2 : 0)) / this._renderer.dimensions.actualCellWidth);
                l[1] = Math.ceil(l[1] / this._renderer.dimensions.actualCellHeight);
                l[0] = Math.min(Math.max(l[0], 1), s + (a ? 1 : 0));
                l[1] = Math.min(Math.max(l[1], 1), o);
                return l;
            }
            return null;
        }
        getRawByteCoords(e, t, i, r, n, s) {
            const o = this.getCoords(e, t, i, r, n, s);
            let a = o[0];
            let l = o[1];
            return {
                x: a += 32,
                y: l += 32
            };
        }
    }
    return e;
}();
