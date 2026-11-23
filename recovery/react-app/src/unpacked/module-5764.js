export function proposeGeometry(e) {
    if (!e.element.parentElement) {
        return null;
    }
    const t = window.getComputedStyle(e.element.parentElement);
    const i = parseInt(t.getPropertyValue("height"));
    const r = Math.max(0, parseInt(t.getPropertyValue("width")));
    const n = window.getComputedStyle(e.element);
    const s = i - (parseInt(n.getPropertyValue("padding-top")) + parseInt(n.getPropertyValue("padding-bottom")));
    const o = r - (parseInt(n.getPropertyValue("padding-right")) + parseInt(n.getPropertyValue("padding-left"))) - e._core.viewport.scrollBarWidth;
    return {
        cols: Math.floor(o / e._core.renderer.dimensions.actualCellWidth),
        rows: Math.floor(s / e._core.renderer.dimensions.actualCellHeight)
    };
}
export function fit(e) {
    const t = proposeGeometry(e);
    if (t) {
        if (!(e.rows === t.rows && e.cols === t.cols)) {
            e._core.renderer.clear();
            e.resize(t.cols, t.rows);
        }
    }
}
export const apply = function(e) {
    e.prototype.proposeGeometry = function() {
        return proposeGeometry(this);
    };
    e.prototype.fit = function() {
        fit(this);
    };
};
