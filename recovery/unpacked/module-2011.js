import { CHAR_ATLAS_CELL_SPACING } from "./module-2012.js";
import { isFirefox, isSafari } from "./module-1147.js";
export function clearColor(e, t) {
    let i = true;
    const r = t.rgba >>> 24;
    const n = t.rgba >>> 16 & 255;
    const s = t.rgba >>> 8 & 255;
    for(let o = 0; o < e.data.length; o += 4){
        if (e.data[o] === r && e.data[o + 1] === n && e.data[o + 2] === s) {
            e.data[o + 3] = 0;
        } else {
            i = false;
        }
    }
    return i;
}
function o(e, t) {
    return `${e} ${t.fontSize * t.devicePixelRatio}px ${t.fontFamily}`;
}
export const generateStaticCharAtlasTexture = function(e, t, i) {
    const a = i.scaledCharWidth + CHAR_ATLAS_CELL_SPACING;
    const l = i.scaledCharHeight + CHAR_ATLAS_CELL_SPACING;
    const h = t(255 * a, 34 * l);
    const c = h.getContext("2d", {
        alpha: i.allowTransparency
    });
    c.fillStyle = i.colors.background.css;
    c.fillRect(0, 0, h.width, h.height);
    c.save();
    c.fillStyle = i.colors.foreground.css;
    c.font = o(i.fontWeight, i);
    c.textBaseline = "top";
    for(var u = 0; u < 256; u++){
        c.save();
        c.beginPath();
        c.rect(u * a, 0, a, l);
        c.clip();
        c.fillText(String.fromCharCode(u), u * a, 0);
        c.restore();
    }
    c.save();
    c.font = o(i.fontWeightBold, i);
    for(u = 0; u < 256; u++){
        c.save();
        c.beginPath();
        c.rect(u * a, l, a, l);
        c.clip();
        c.fillText(String.fromCharCode(u), u * a, l);
        c.restore();
    }
    c.restore();
    c.font = o(i.fontWeight, i);
    for(var _ = 0; _ < 16; _++){
        var f = (_ + 2) * l;
        for(u = 0; u < 256; u++){
            c.save();
            c.beginPath();
            c.rect(u * a, f, a, l);
            c.clip();
            c.fillStyle = i.colors.ansi[_].css;
            c.fillText(String.fromCharCode(u), u * a, f);
            c.restore();
        }
    }
    c.font = o(i.fontWeightBold, i);
    for(_ = 0; _ < 16; _++){
        f = (_ + 2 + 16) * l;
        for(u = 0; u < 256; u++){
            c.save();
            c.beginPath();
            c.rect(u * a, f, a, l);
            c.clip();
            c.fillStyle = i.colors.ansi[_].css;
            c.fillText(String.fromCharCode(u), u * a, f);
            c.restore();
        }
    }
    c.restore();
    if (!("createImageBitmap" in e) || isFirefox || isSafari) {
        if (h instanceof HTMLCanvasElement) {
            return h;
        }
        return new Promise((resolve)=>resolve(h.transferToImageBitmap()));
    }
    const d = c.getImageData(0, 0, h.width, h.height);
    clearColor(d, i.colors.background);
    return e.createImageBitmap(d);
};
