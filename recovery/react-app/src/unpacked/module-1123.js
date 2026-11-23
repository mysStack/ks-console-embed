let r;
let o;
if ((o = typeof (r = function(e) {
    "use strict";
    let t;
    const n = this && this.__makeTemplateObject || ((e, t)=>{
        if (Object.defineProperty) {
            Object.defineProperty(e, "raw", {
                value: t
            });
        } else {
            e.raw = t;
        }
        return e;
    });
    t = {
        EOS: 0,
        0: "EOS",
        Text: 1,
        1: "Text",
        Incomplete: 2,
        2: "Incomplete",
        ESC: 3,
        3: "ESC",
        Unknown: 4,
        4: "Unknown",
        SGR: 5,
        5: "SGR",
        OSCURL: 6,
        6: "OSCURL"
    };
    class r {
        constructor(){
            this.VERSION = "5.0.0";
            this.setup_palettes();
            this._use_classes = false;
            this.bold = false;
            this.fg = this.bg = null;
            this._buffer = "";
            this._url_whitelist = {
                http: 1,
                https: 1
            };
        }
        get use_classes() {
            return this._use_classes;
        }
        set use_classes(e) {
            this._use_classes = e;
        }
        get url_whitelist() {
            return this._url_whitelist;
        }
        set url_whitelist(e) {
            this._url_whitelist = e;
        }
        setup_palettes() {
            const _this = this;
            this.ansi_colors = [
                [
                    {
                        rgb: [
                            0,
                            0,
                            0
                        ],
                        class_name: "ansi-black"
                    },
                    {
                        rgb: [
                            187,
                            0,
                            0
                        ],
                        class_name: "ansi-red"
                    },
                    {
                        rgb: [
                            0,
                            187,
                            0
                        ],
                        class_name: "ansi-green"
                    },
                    {
                        rgb: [
                            187,
                            187,
                            0
                        ],
                        class_name: "ansi-yellow"
                    },
                    {
                        rgb: [
                            0,
                            0,
                            187
                        ],
                        class_name: "ansi-blue"
                    },
                    {
                        rgb: [
                            187,
                            0,
                            187
                        ],
                        class_name: "ansi-magenta"
                    },
                    {
                        rgb: [
                            0,
                            187,
                            187
                        ],
                        class_name: "ansi-cyan"
                    },
                    {
                        rgb: [
                            255,
                            255,
                            255
                        ],
                        class_name: "ansi-white"
                    }
                ],
                [
                    {
                        rgb: [
                            85,
                            85,
                            85
                        ],
                        class_name: "ansi-bright-black"
                    },
                    {
                        rgb: [
                            255,
                            85,
                            85
                        ],
                        class_name: "ansi-bright-red"
                    },
                    {
                        rgb: [
                            0,
                            255,
                            0
                        ],
                        class_name: "ansi-bright-green"
                    },
                    {
                        rgb: [
                            255,
                            255,
                            85
                        ],
                        class_name: "ansi-bright-yellow"
                    },
                    {
                        rgb: [
                            85,
                            85,
                            255
                        ],
                        class_name: "ansi-bright-blue"
                    },
                    {
                        rgb: [
                            255,
                            85,
                            255
                        ],
                        class_name: "ansi-bright-magenta"
                    },
                    {
                        rgb: [
                            85,
                            255,
                            255
                        ],
                        class_name: "ansi-bright-cyan"
                    },
                    {
                        rgb: [
                            255,
                            255,
                            255
                        ],
                        class_name: "ansi-bright-white"
                    }
                ]
            ];
            this.palette_256 = [];
            this.ansi_colors.forEach((t)=>{
                t.forEach((t)=>{
                    _this.palette_256.push(t);
                });
            });
            const t = [
                0,
                95,
                135,
                175,
                215,
                255
            ];
            for(let n = 0; n < 6; ++n){
                for(let r = 0; r < 6; ++r){
                    for(let o = 0; o < 6; ++o){
                        const i = {
                            rgb: [
                                t[n],
                                t[r],
                                t[o]
                            ],
                            class_name: "truecolor"
                        };
                        this.palette_256.push(i);
                    }
                }
            }
            let a = 8;
            for(let l = 0; l < 24; ++l, a += 10){
                const u = {
                    rgb: [
                        a,
                        a,
                        a
                    ],
                    class_name: "truecolor"
                };
                this.palette_256.push(u);
            }
        }
        escape_txt_for_html(e) {
            return e.replace(/[&<>"']/gm, (e)=>{
                switch(e){
                    case "&":
                        return "&amp;";
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;";
                    case '"':
                        return "&quot;";
                    case "'":
                        return "&#x27;";
                    default:
                        return undefined;
                }
            });
        }
        append_buffer(e) {
            const t = this._buffer + e;
            this._buffer = t;
        }
        get_next_packet() {
            const e = {
                kind: t.EOS,
                text: "",
                url: ""
            };
            const length = this._buffer.length;
            if (length == 0) {
                return e;
            }
            const i = this._buffer.indexOf("");
            if (i == -1) {
                e.kind = t.Text;
                e.text = this._buffer;
                this._buffer = "";
                return e;
            }
            if (i > 0) {
                e.kind = t.Text;
                e.text = this._buffer.slice(0, i);
                this._buffer = this._buffer.slice(i);
                return e;
            }
            if (i == 0) {
                if (length == 1) {
                    e.kind = t.Incomplete;
                    return e;
                }
                const a = this._buffer.charAt(1);
                if (a != "[" && a != "]") {
                    e.kind = t.ESC;
                    e.text = this._buffer.slice(0, 1);
                    this._buffer = this._buffer.slice(1);
                    return e;
                }
                if (a == "[") {
                    if (!this._csi_regex) {
                        this._csi_regex = o(n([
                            "\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          [                      # CSI\n                          ([<-?]?)              # private-mode char\n                          ([d;]*)                    # any digits or semicolons\n                          ([ -/]?               # an intermediate modifier\n                          [@-~])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          [                      # CSI\n                          [ -~]*                # anything legal\n                          ([\0-:])              # anything illegal\n                        )\n                    "
                        ], [
                            "\n                        ^                           # beginning of line\n                                                    #\n                                                    # First attempt\n                        (?:                         # legal sequence\n                          \\x1b\\[                      # CSI\n                          ([\\x3c-\\x3f]?)              # private-mode char\n                          ([\\d;]*)                    # any digits or semicolons\n                          ([\\x20-\\x2f]?               # an intermediate modifier\n                          [\\x40-\\x7e])                # the command\n                        )\n                        |                           # alternate (second attempt)\n                        (?:                         # illegal sequence\n                          \\x1b\\[                      # CSI\n                          [\\x20-\\x7e]*                # anything legal\n                          ([\\x00-\\x1f:])              # anything illegal\n                        )\n                    "
                        ]));
                    }
                    if ((s = this._buffer.match(this._csi_regex)) === null) {
                        e.kind = t.Incomplete;
                        return e;
                    }
                    if (s[4]) {
                        e.kind = t.ESC;
                        e.text = this._buffer.slice(0, 1);
                        this._buffer = this._buffer.slice(1);
                        return e;
                    }
                    if (s[1] != "" || s[3] != "m") {
                        e.kind = t.Unknown;
                    } else {
                        e.kind = t.SGR;
                    }
                    e.text = s[2];
                    var l = s[0].length;
                    this._buffer = this._buffer.slice(l);
                    return e;
                }
                if (a == "]") {
                    if (length < 4) {
                        e.kind = t.Incomplete;
                        return e;
                    }
                    if (this._buffer.charAt(2) != "8" || this._buffer.charAt(3) != ";") {
                        e.kind = t.ESC;
                        e.text = this._buffer.slice(0, 1);
                        this._buffer = this._buffer.slice(1);
                        return e;
                    }
                    if (!this._osc_st) {
                        this._osc_st = ((e, ...t)=>{
                            const r = e.raw[0];
                            const o = /^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm;
                            const i = r.replace(o, "");
                            return new RegExp(i, "g");
                        })(n([
                            "\n                        (?:                         # legal sequence\n                          (\\)                    # ESC                           |                           # alternate\n                          ()                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\0-]                 # anything illegal\n                          |                           # alternate\n                          [\b-]                 # anything illegal\n                          |                           # alternate\n                          [-]                 # anything illegal\n                        )\n                    "
                        ], [
                            "\n                        (?:                         # legal sequence\n                          (\\x1b\\\\)                    # ESC \\\n                          |                           # alternate\n                          (\\x07)                      # BEL (what xterm did)\n                        )\n                        |                           # alternate (second attempt)\n                        (                           # illegal sequence\n                          [\\x00-\\x06]                 # anything illegal\n                          |                           # alternate\n                          [\\x08-\\x1a]                 # anything illegal\n                          |                           # alternate\n                          [\\x1c-\\x1f]                 # anything illegal\n                        )\n                    "
                        ]));
                    }
                    this._osc_st.lastIndex = 0;
                    const u = this._osc_st.exec(this._buffer);
                    if (u === null) {
                        e.kind = t.Incomplete;
                        return e;
                    }
                    if (u[3]) {
                        e.kind = t.ESC;
                        e.text = this._buffer.slice(0, 1);
                        this._buffer = this._buffer.slice(1);
                        return e;
                    }
                    var s;
                    const c = this._osc_st.exec(this._buffer);
                    if (c === null) {
                        e.kind = t.Incomplete;
                        return e;
                    }
                    if (c[3]) {
                        e.kind = t.ESC;
                        e.text = this._buffer.slice(0, 1);
                        this._buffer = this._buffer.slice(1);
                        return e;
                    }
                    if (!this._osc_regex) {
                        this._osc_regex = o(n([
                            "\n                        ^                           # beginning of line\n                                                    #\n                        ]8;                    # OSC Hyperlink\n                        [ -:<-~]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([!-~]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                        ([!-~]+)              # TEXT capture\n                        ]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\)                  # ESC                           |                           # alternate\n                          (?:)                    # BEL (what xterm did)\n                        )\n                    "
                        ], [
                            "\n                        ^                           # beginning of line\n                                                    #\n                        \\x1b\\]8;                    # OSC Hyperlink\n                        [\\x20-\\x3a\\x3c-\\x7e]*       # params (excluding ;)\n                        ;                           # end of params\n                        ([\\x21-\\x7e]{0,512})        # URL capture\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                        ([\\x21-\\x7e]+)              # TEXT capture\n                        \\x1b\\]8;;                   # OSC Hyperlink End\n                        (?:                         # ST\n                          (?:\\x1b\\\\)                  # ESC \\\n                          |                           # alternate\n                          (?:\\x07)                    # BEL (what xterm did)\n                        )\n                    "
                        ]));
                    }
                    if ((s = this._buffer.match(this._osc_regex)) === null) {
                        return e.kind = t.ESC, e.text = this._buffer.slice(0, 1), this._buffer = this._buffer.slice(1), e;
                    }
                    return e.kind = t.OSCURL, e.url = s[1], e.text = s[2], l = s[0].length, this._buffer = this._buffer.slice(l), e;
                }
            }
        }
        ansi_to_html(e) {
            this.append_buffer(e);
            const n = [];
            while(true){
                const r = this.get_next_packet();
                if (r.kind == t.EOS || r.kind == t.Incomplete) {
                    break;
                }
                if (r.kind != t.ESC && r.kind != t.Unknown) {
                    if (r.kind == t.Text) {
                        n.push(this.transform_to_html(this.with_state(r)));
                    } else if (r.kind == t.SGR) {
                        this.process_ansi(r);
                    } else if (r.kind == t.OSCURL) {
                        n.push(this.process_hyperlink(r));
                    }
                }
            }
            return n.join("");
        }
        with_state(e) {
            return {
                bold: this.bold,
                fg: this.fg,
                bg: this.bg,
                text: e.text
            };
        }
        process_ansi(e) {
            for(const t = e.text.split(";"); t.length > 0;){
                const n = t.shift();
                const r = parseInt(n, 10);
                if (isNaN(r) || r === 0) {
                    this.fg = this.bg = null;
                    this.bold = false;
                } else if (r === 1) {
                    this.bold = true;
                } else if (r === 22) {
                    this.bold = false;
                } else if (r === 39) {
                    this.fg = null;
                } else if (r === 49) {
                    this.bg = null;
                } else if (r >= 30 && r < 38) {
                    this.fg = this.ansi_colors[0][r - 30];
                } else if (r >= 40 && r < 48) {
                    this.bg = this.ansi_colors[0][r - 40];
                } else if (r >= 90 && r < 98) {
                    this.fg = this.ansi_colors[1][r - 90];
                } else if (r >= 100 && r < 108) {
                    this.bg = this.ansi_colors[1][r - 100];
                } else if ((r === 38 || r === 48) && t.length > 0) {
                    const o = r === 38;
                    const i = t.shift();
                    if (i === "5" && t.length > 0) {
                        const a = parseInt(t.shift(), 10);
                        if (a >= 0 && a <= 255) {
                            if (o) {
                                this.fg = this.palette_256[a];
                            } else {
                                this.bg = this.palette_256[a];
                            }
                        }
                    }
                    if (i === "2" && t.length > 2) {
                        const l = parseInt(t.shift(), 10);
                        const u = parseInt(t.shift(), 10);
                        const s = parseInt(t.shift(), 10);
                        if (l >= 0 && l <= 255 && u >= 0 && u <= 255 && s >= 0 && s <= 255) {
                            const c = {
                                rgb: [
                                    l,
                                    u,
                                    s
                                ],
                                class_name: "truecolor"
                            };
                            if (o) {
                                this.fg = c;
                            } else {
                                this.bg = c;
                            }
                        }
                    }
                }
            }
        }
        transform_to_html(e) {
            let e_text = e.text;
            if (e_text.length === 0) {
                return e_text;
            }
            e_text = this.escape_txt_for_html(e_text);
            if (!e.bold && e.fg === null && e.bg === null) {
                return e_text;
            }
            const n = [];
            const r = [];
            const { fg, bg } = e;
            if (e.bold) {
                n.push("font-weight:bold");
            }
            if (this._use_classes) {
                if (fg) {
                    if (fg.class_name !== "truecolor") {
                        r.push(`${fg.class_name}-fg`);
                    } else {
                        n.push(`color:rgb(${fg.rgb.join(",")})`);
                    }
                }
                if (bg) {
                    if (bg.class_name !== "truecolor") {
                        r.push(`${bg.class_name}-bg`);
                    } else {
                        n.push(`background-color:rgb(${bg.rgb.join(",")})`);
                    }
                }
            } else {
                if (fg) {
                    n.push(`color:rgb(${fg.rgb.join(",")})`);
                }
                if (bg) {
                    n.push(`background-color:rgb(${bg.rgb})`);
                }
            }
            let a = "";
            let l = "";
            if (r.length) {
                a = ` class="${r.join(" ")}"`;
            }
            if (n.length) {
                l = ` style="${n.join(";")}"`;
            }
            return `<span${l}${a}>${e_text}</span>`;
        }
        process_hyperlink(e) {
            const t = e.url.split(":");
            if (t.length < 1) {
                return "";
            }
            if (this._url_whitelist[t[0]]) {
                return `<a href="${this.escape_txt_for_html(e.url)}">${this.escape_txt_for_html(e.text)}</a>`;
            }
            return "";
        }
    }
    function o(e, ...t) {
        const r = e.raw[0];
        const o = /^\s+|\s+\n|\s*#[\s\S]*?\n|\n/gm;
        const i = r.replace(o, "");
        return new RegExp(i);
    }
    Object.defineProperty(e, "__esModule", {
        value: true
    });
    e.default = r;
}) === "function" ? r.apply(exports, [
    exports
]) : r) !== undefined) {
    module.exports = o;
}
