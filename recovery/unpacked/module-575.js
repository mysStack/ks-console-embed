export default {
    locale: "en",
    pluralRuleFunction: function(e, t) {
        const n = String(e).split(".");
        const r = !n[1];
        const o = Number(n[0]) == e;
        const a = o && n[0].slice(-1);
        const i = o && n[0].slice(-2);
        if (t) {
            if (a == 1 && i != 11) {
                return "one";
            }
            if (a == 2 && i != 12) {
                return "two";
            }
            if (a == 3 && i != 13) {
                return "few";
            }
            return "other";
        }
        if (e == 1 && r) {
            return "one";
        }
        return "other";
    }
};
