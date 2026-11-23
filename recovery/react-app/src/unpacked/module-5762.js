import { CHAR_DATA_ATTR_INDEX, CHAR_DATA_CHAR_INDEX, CHAR_DATA_WIDTH_INDEX } from "unpacked/module-923.js";
export const BOLD_CLASS = "xterm-bold";
export const ITALIC_CLASS = "xterm-italic";
export const CURSOR_CLASS = "xterm-cursor";
export const CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block";
export const CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar";
export const CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
export class DomRendererRowFactory {
    constructor(e){
        this._document = e;
    }
    createRow(e, i, n, s, o, a) {
        const l = this._document.createDocumentFragment();
        let h = 0;
        for(let c = 0; c < e.length; c++){
            if (!(h >= a)) {
                const u = e.get(c);
                const _ = u[CHAR_DATA_CHAR_INDEX];
                const f = u[CHAR_DATA_ATTR_INDEX];
                const d = u[CHAR_DATA_WIDTH_INDEX];
                if (d !== 0) {
                    const p = this._document.createElement("span");
                    if (d > 1) {
                        p.style.width = `${o * d}px`;
                    }
                    const m = f >> 18;
                    let y = 511 & f;
                    let C = f >> 9 & 511;
                    if (i && c === s) {
                        p.classList.add(CURSOR_CLASS);
                        switch(n){
                            case "bar":
                                p.classList.add(CURSOR_STYLE_BAR_CLASS);
                                break;
                            case "underline":
                                p.classList.add(CURSOR_STYLE_UNDERLINE_CLASS);
                                break;
                            default:
                                p.classList.add(CURSOR_STYLE_BLOCK_CLASS);
                        }
                    }
                    if (8 & m) {
                        const g = y;
                        y = C;
                        if ((C = g) === 256) {
                            C = 0;
                        }
                        if (y === 257) {
                            y = 15;
                        }
                    }
                    if (1 & m) {
                        if (C < 8) {
                            C += 8;
                        }
                        p.classList.add(BOLD_CLASS);
                    }
                    if (64 & m) {
                        p.classList.add(ITALIC_CLASS);
                    }
                    p.textContent = _;
                    if (C !== 257) {
                        p.classList.add(`xterm-fg-${C}`);
                    }
                    if (y !== 256) {
                        p.classList.add(`xterm-bg-${y}`);
                    }
                    l.appendChild(p);
                    h += d;
                }
            }
        }
        return l;
    }
}
