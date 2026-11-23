const foreground = l("#ffffff");
const background = l("#000000");
const cursor = l("#ffffff");
const cursorAccent = l("#000000");
const selection = {
    css: "rgba(255, 255, 255, 0.3)",
    rgba: 4294967159
};
function l(e) {
    return {
        css: e,
        rgba: parseInt(e.slice(1), 16) << 8 | 255
    };
}
function h(e) {
    const t = e.toString(16);
    if (t.length < 2) {
        return `0${t}`;
    }
    return t;
}
export const DEFAULT_ANSI_COLORS = (()=>{
    const e = [
        l("#2e3436"),
        l("#cc0000"),
        l("#4e9a06"),
        l("#c4a000"),
        l("#3465a4"),
        l("#75507b"),
        l("#06989a"),
        l("#d3d7cf"),
        l("#555753"),
        l("#ef2929"),
        l("#8ae234"),
        l("#fce94f"),
        l("#729fcf"),
        l("#ad7fa8"),
        l("#34e2e2"),
        l("#eeeeec")
    ];
    const t = [
        0,
        95,
        135,
        175,
        215,
        255
    ];
    for(var i = 0; i < 216; i++){
        const r = t[i / 36 % 6 | 0];
        const n = t[i / 6 % 6 | 0];
        const s = t[i % 6];
        e.push({
            css: `#${h(r)}${h(n)}${h(s)}`,
            rgba: (r << 24 | n << 16 | s << 8 | 255) >>> 0
        });
    }
    for(i = 0; i < 24; i++){
        const o = 8 + 10 * i;
        const a = h(o);
        e.push({
            css: `#${a}${a}${a}`,
            rgba: (o << 24 | o << 16 | o << 8 | 255) >>> 0
        });
    }
    return e;
})();
export class ColorManager {
    constructor(e, i){
        this.allowTransparency = i;
        var canvasElement = e.createElement("canvas");
        canvasElement.width = 1;
        canvasElement.height = 1;
        this._ctx = canvasElement.getContext("2d");
        this._ctx.globalCompositeOperation = "copy";
        this._litmusColor = this._ctx.createLinearGradient(0, 0, 1, 1);
        this.colors = {
            foreground,
            background,
            cursor,
            cursorAccent,
            selection,
            ansi: DEFAULT_ANSI_COLORS.slice()
        };
    }
    setTheme(e) {
        this.colors.foreground = this._parseColor(e.foreground, foreground);
        this.colors.background = this._parseColor(e.background, background);
        this.colors.cursor = this._parseColor(e.cursor, cursor, true);
        this.colors.cursorAccent = this._parseColor(e.cursorAccent, cursorAccent, true);
        this.colors.selection = this._parseColor(e.selection, selection, true);
        this.colors.ansi[0] = this._parseColor(e.black, DEFAULT_ANSI_COLORS[0]);
        this.colors.ansi[1] = this._parseColor(e.red, DEFAULT_ANSI_COLORS[1]);
        this.colors.ansi[2] = this._parseColor(e.green, DEFAULT_ANSI_COLORS[2]);
        this.colors.ansi[3] = this._parseColor(e.yellow, DEFAULT_ANSI_COLORS[3]);
        this.colors.ansi[4] = this._parseColor(e.blue, DEFAULT_ANSI_COLORS[4]);
        this.colors.ansi[5] = this._parseColor(e.magenta, DEFAULT_ANSI_COLORS[5]);
        this.colors.ansi[6] = this._parseColor(e.cyan, DEFAULT_ANSI_COLORS[6]);
        this.colors.ansi[7] = this._parseColor(e.white, DEFAULT_ANSI_COLORS[7]);
        this.colors.ansi[8] = this._parseColor(e.brightBlack, DEFAULT_ANSI_COLORS[8]);
        this.colors.ansi[9] = this._parseColor(e.brightRed, DEFAULT_ANSI_COLORS[9]);
        this.colors.ansi[10] = this._parseColor(e.brightGreen, DEFAULT_ANSI_COLORS[10]);
        this.colors.ansi[11] = this._parseColor(e.brightYellow, DEFAULT_ANSI_COLORS[11]);
        this.colors.ansi[12] = this._parseColor(e.brightBlue, DEFAULT_ANSI_COLORS[12]);
        this.colors.ansi[13] = this._parseColor(e.brightMagenta, DEFAULT_ANSI_COLORS[13]);
        this.colors.ansi[14] = this._parseColor(e.brightCyan, DEFAULT_ANSI_COLORS[14]);
        this.colors.ansi[15] = this._parseColor(e.brightWhite, DEFAULT_ANSI_COLORS[15]);
    }
    _parseColor(e, t, i = this.allowTransparency) {
        if (!e) {
            return t;
        }
        this._ctx.fillStyle = this._litmusColor;
        this._ctx.fillStyle = e;
        if (typeof this._ctx.fillStyle !== "string") {
            console.warn(`Color: ${e} is invalid using fallback ${t.css}`);
            return t;
        }
        this._ctx.fillRect(0, 0, 1, 1);
        const data = this._ctx.getImageData(0, 0, 1, 1).data;
        if (i || data[3] === 255) {
            return {
                css: e,
                rgba: (data[0] << 24 | data[1] << 16 | data[2] << 8 | data[3]) >>> 0
            };
        }
        console.warn(`Color: ${e} is using transparency, but allowTransparency is false. Using fallback ${t.css}.`);
        return t;
    }
}
