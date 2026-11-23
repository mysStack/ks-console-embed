import _MAX_SAFE_COMPONENT_LENGTH from "unpacked/module-233.js";
import module234 from "unpacked/module-234.js";
const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = _MAX_SAFE_COMPONENT_LENGTH;
const _t = {};
export default _t;
const l = _t.re = [];
const s = _t.safeRe = [];
const u = _t.src = [];
const c = _t.t = {};
let f = 0;
const d = [
    [
        "\\s",
        1
    ],
    [
        "\\d",
        MAX_LENGTH
    ],
    [
        "[a-zA-Z0-9-]",
        MAX_SAFE_BUILD_LENGTH
    ]
];
const p = (e, t, n)=>{
    const r = ((e)=>{
        for (const [t, n] of d){
            e = e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);
        }
        return e;
    })(t);
    const o = f++;
    module234(e, o, t);
    c[e] = o;
    u[o] = t;
    l[o] = new RegExp(t, n ? "g" : undefined);
    s[o] = new RegExp(r, n ? "g" : undefined);
};
p("NUMERICIDENTIFIER", "0|[1-9]\\d*");
p("NUMERICIDENTIFIERLOOSE", "\\d+");
p("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
p("MAINVERSION", `(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})`);
p("MAINVERSIONLOOSE", `(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})`);
p("PRERELEASEIDENTIFIER", `(?:${u[c.NUMERICIDENTIFIER]}|${u[c.NONNUMERICIDENTIFIER]})`);
p("PRERELEASEIDENTIFIERLOOSE", `(?:${u[c.NUMERICIDENTIFIERLOOSE]}|${u[c.NONNUMERICIDENTIFIER]})`);
p("PRERELEASE", `(?:-(${u[c.PRERELEASEIDENTIFIER]}(?:\\.${u[c.PRERELEASEIDENTIFIER]})*))`);
p("PRERELEASELOOSE", `(?:-?(${u[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[c.PRERELEASEIDENTIFIERLOOSE]})*))`);
p("BUILDIDENTIFIER", "[a-zA-Z0-9-]+");
p("BUILD", `(?:\\+(${u[c.BUILDIDENTIFIER]}(?:\\.${u[c.BUILDIDENTIFIER]})*))`);
p("FULLPLAIN", `v?${u[c.MAINVERSION]}${u[c.PRERELEASE]}?${u[c.BUILD]}?`);
p("FULL", `^${u[c.FULLPLAIN]}$`);
p("LOOSEPLAIN", `[v=\\s]*${u[c.MAINVERSIONLOOSE]}${u[c.PRERELEASELOOSE]}?${u[c.BUILD]}?`);
p("LOOSE", `^${u[c.LOOSEPLAIN]}$`);
p("GTLT", "((?:<|>)?=?)");
p("XRANGEIDENTIFIERLOOSE", `${u[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
p("XRANGEIDENTIFIER", `${u[c.NUMERICIDENTIFIER]}|x|X|\\*`);
p("XRANGEPLAIN", `[v=\\s]*(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:${u[c.PRERELEASE]})?${u[c.BUILD]}?)?)?`);
p("XRANGEPLAINLOOSE", `[v=\\s]*(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:${u[c.PRERELEASELOOSE]})?${u[c.BUILD]}?)?)?`);
p("XRANGE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAIN]}$`);
p("XRANGELOOSE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAINLOOSE]}$`);
p("COERCEPLAIN", `(^|[^\\d])(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
p("COERCE", `${u[c.COERCEPLAIN]}(?:\$|[^\\d])`);
p("COERCEFULL", u[c.COERCEPLAIN] + `(?:${u[c.PRERELEASE]})?` + `(?:${u[c.BUILD]})?(?:$|[^\\d])`);
p("COERCERTL", u[c.COERCE], true);
p("COERCERTLFULL", u[c.COERCEFULL], true);
p("LONETILDE", "(?:~>?)");
p("TILDETRIM", `(\\s*)${u[c.LONETILDE]}\\s+`, true);
_t.tildeTrimReplace = "$1~";
p("TILDE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAIN]}$`);
p("TILDELOOSE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAINLOOSE]}$`);
p("LONECARET", "(?:\\^)");
p("CARETTRIM", `(\\s*)${u[c.LONECARET]}\\s+`, true);
_t.caretTrimReplace = "$1^";
p("CARET", `^${u[c.LONECARET]}${u[c.XRANGEPLAIN]}$`);
p("CARETLOOSE", `^${u[c.LONECARET]}${u[c.XRANGEPLAINLOOSE]}$`);
p("COMPARATORLOOSE", `^${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]})$|^$`);
p("COMPARATOR", `^${u[c.GTLT]}\\s*(${u[c.FULLPLAIN]})$|^$`);
p("COMPARATORTRIM", `(\\s*)${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]}|${u[c.XRANGEPLAIN]})`, true);
_t.comparatorTrimReplace = "$1$2$3";
p("HYPHENRANGE", `^\\s*(${u[c.XRANGEPLAIN]})\\s+-\\s+(${u[c.XRANGEPLAIN]})\\s*$`);
p("HYPHENRANGELOOSE", `^\\s*(${u[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[c.XRANGEPLAINLOOSE]})\\s*$`);
p("STAR", "(<|>)?=?\\s*\\*");
p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
