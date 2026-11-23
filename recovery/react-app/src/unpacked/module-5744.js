export const generateConfig = function(scaledCharWidth, scaledCharHeight, i, r) {
    const colors = {
        foreground: r.foreground,
        background: r.background,
        cursor: null,
        cursorAccent: null,
        selection: null,
        ansi: r.ansi.slice(0, 16)
    };
    return {
        type: i.options.experimentalCharAtlas,
        devicePixelRatio: window.devicePixelRatio,
        scaledCharWidth,
        scaledCharHeight,
        fontFamily: i.options.fontFamily,
        fontSize: i.options.fontSize,
        fontWeight: i.options.fontWeight,
        fontWeightBold: i.options.fontWeightBold,
        allowTransparency: i.options.allowTransparency,
        colors
    };
};
export const configEquals = function(e, t) {
    for(let i = 0; i < e.colors.ansi.length; i++){
        if (e.colors.ansi[i].rgba !== t.colors.ansi[i].rgba) {
            return false;
        }
    }
    return e.type === t.type && e.devicePixelRatio === t.devicePixelRatio && e.fontFamily === t.fontFamily && e.fontSize === t.fontSize && e.fontWeight === t.fontWeight && e.fontWeightBold === t.fontWeightBold && e.allowTransparency === t.allowTransparency && e.scaledCharWidth === t.scaledCharWidth && e.scaledCharHeight === t.scaledCharHeight && e.colors.foreground === t.colors.foreground && e.colors.background === t.colors.background;
};
