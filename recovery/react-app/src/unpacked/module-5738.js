import { C0, C1 } from "unpacked/module-1255.js";
import { CHARSETS, DEFAULT_CHARSET } from "unpacked/module-5739.js";
import { CHAR_DATA_CHAR_INDEX, CHAR_DATA_CODE_INDEX, CHAR_DATA_WIDTH_INDEX, DEFAULT_ATTR, NULL_CELL_CHAR, NULL_CELL_CODE, NULL_CELL_WIDTH } from "unpacked/module-923.js";
import { wcwidth } from "unpacked/module-2009.js";
import { EscapeSequenceParser } from "unpacked/module-5740.js";
import { Disposable } from "unpacked/module-1027.js";
import { BufferLine } from "unpacked/module-1464.js";
let r;
const n = this && this.__extends || (r = function(e, t) {
    return (r = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for(const i in t){
            if (t.hasOwnProperty(i)) {
                e[i] = t[i];
            }
        }
    })(e, t);
}, (e, t)=>{
    function i() {
        this.constructor = e;
    }
    r(e, t);
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i);
});
const _ = {
    "(": 0,
    ")": 1,
    "*": 2,
    "+": 3,
    "-": 1,
    ".": 2
};
class f {
    constructor(e){
        this._terminal = e;
    }
    hook(e, t, i) {
        this._data = "";
    }
    put(e, t, i) {
        this._data += e.substring(t, i);
    }
    unhook() {
        switch(this._data){
            case '"q':
                return this._terminal.handler(`${C0.ESC}P1\$r0"q${C0.ESC}\\`);
            case '"p':
                return this._terminal.handler(`${C0.ESC}P1\$r61"p${C0.ESC}\\`);
            case "r":
                const e = `${this._terminal.buffer.scrollTop + 1};${this._terminal.buffer.scrollBottom + 1}r`;
                return this._terminal.handler(`${C0.ESC}P1\$r${e}${C0.ESC}\\`);
            case "m":
                return this._terminal.handler(`${C0.ESC}P1\$r0m${C0.ESC}\\`);
            case " q":
                let t = {
                    block: 2,
                    underline: 4,
                    bar: 6
                }[this._terminal.getOption("cursorStyle")];
                t -= this._terminal.getOption("cursorBlink");
                return this._terminal.handler(`${C0.ESC}P1\$r${t} q${C0.ESC}\\`);
            default:
                this._terminal.error("Unknown DCS $q %s", this._data);
                this._terminal.handler(`${C0.ESC}P0\$r${C0.ESC}\\`);
        }
    }
}
export const InputHandler = ((Disposable_1)=>{
    function t(t, i = new EscapeSequenceParser) {
        const r = Disposable_1.call(this) || this;
        r._terminal = t;
        r._parser = i;
        r.register(r._parser);
        r._surrogateHigh = "";
        r._parser.setCsiHandlerFallback(function(e, params, i) {
            r._terminal.error("Unknown CSI code: ", {
                collect: e,
                params,
                flag: String.fromCharCode(i)
            });
        });
        r._parser.setEscHandlerFallback(function(e, t) {
            r._terminal.error("Unknown ESC code: ", {
                collect: e,
                flag: String.fromCharCode(t)
            });
        });
        r._parser.setExecuteHandlerFallback(function(code) {
            r._terminal.error("Unknown EXECUTE code: ", {
                code
            });
        });
        r._parser.setOscHandlerFallback(function(identifier, data) {
            r._terminal.error("Unknown OSC code: ", {
                identifier,
                data
            });
        });
        r._parser.setPrintHandler(function(e, t, i) {
            return r.print(e, t, i);
        });
        r._parser.setCsiHandler("@", function(e, t) {
            return r.insertChars(e);
        });
        r._parser.setCsiHandler("A", function(e, t) {
            return r.cursorUp(e);
        });
        r._parser.setCsiHandler("B", function(e, t) {
            return r.cursorDown(e);
        });
        r._parser.setCsiHandler("C", function(e, t) {
            return r.cursorForward(e);
        });
        r._parser.setCsiHandler("D", function(e, t) {
            return r.cursorBackward(e);
        });
        r._parser.setCsiHandler("E", function(e, t) {
            return r.cursorNextLine(e);
        });
        r._parser.setCsiHandler("F", function(e, t) {
            return r.cursorPrecedingLine(e);
        });
        r._parser.setCsiHandler("G", function(e, t) {
            return r.cursorCharAbsolute(e);
        });
        r._parser.setCsiHandler("H", function(e, t) {
            return r.cursorPosition(e);
        });
        r._parser.setCsiHandler("I", function(e, t) {
            return r.cursorForwardTab(e);
        });
        r._parser.setCsiHandler("J", function(e, t) {
            return r.eraseInDisplay(e);
        });
        r._parser.setCsiHandler("K", function(e, t) {
            return r.eraseInLine(e);
        });
        r._parser.setCsiHandler("L", function(e, t) {
            return r.insertLines(e);
        });
        r._parser.setCsiHandler("M", function(e, t) {
            return r.deleteLines(e);
        });
        r._parser.setCsiHandler("P", function(e, t) {
            return r.deleteChars(e);
        });
        r._parser.setCsiHandler("S", function(e, t) {
            return r.scrollUp(e);
        });
        r._parser.setCsiHandler("T", function(e, t) {
            return r.scrollDown(e, t);
        });
        r._parser.setCsiHandler("X", function(e, t) {
            return r.eraseChars(e);
        });
        r._parser.setCsiHandler("Z", function(e, t) {
            return r.cursorBackwardTab(e);
        });
        r._parser.setCsiHandler("`", function(e, t) {
            return r.charPosAbsolute(e);
        });
        r._parser.setCsiHandler("a", function(e, t) {
            return r.hPositionRelative(e);
        });
        r._parser.setCsiHandler("b", function(e, t) {
            return r.repeatPrecedingCharacter(e);
        });
        r._parser.setCsiHandler("c", function(e, t) {
            return r.sendDeviceAttributes(e, t);
        });
        r._parser.setCsiHandler("d", function(e, t) {
            return r.linePosAbsolute(e);
        });
        r._parser.setCsiHandler("e", function(e, t) {
            return r.vPositionRelative(e);
        });
        r._parser.setCsiHandler("f", function(e, t) {
            return r.hVPosition(e);
        });
        r._parser.setCsiHandler("g", function(e, t) {
            return r.tabClear(e);
        });
        r._parser.setCsiHandler("h", function(e, t) {
            return r.setMode(e, t);
        });
        r._parser.setCsiHandler("l", function(e, t) {
            return r.resetMode(e, t);
        });
        r._parser.setCsiHandler("m", function(e, t) {
            return r.charAttributes(e);
        });
        r._parser.setCsiHandler("n", function(e, t) {
            return r.deviceStatus(e, t);
        });
        r._parser.setCsiHandler("p", function(e, t) {
            return r.softReset(e, t);
        });
        r._parser.setCsiHandler("q", function(e, t) {
            return r.setCursorStyle(e, t);
        });
        r._parser.setCsiHandler("r", function(e, t) {
            return r.setScrollRegion(e, t);
        });
        r._parser.setCsiHandler("s", function(e, t) {
            return r.saveCursor(e);
        });
        r._parser.setCsiHandler("u", function(e, t) {
            return r.restoreCursor(e);
        });
        r._parser.setExecuteHandler(C0.BEL, function() {
            return r.bell();
        });
        r._parser.setExecuteHandler(C0.LF, function() {
            return r.lineFeed();
        });
        r._parser.setExecuteHandler(C0.VT, function() {
            return r.lineFeed();
        });
        r._parser.setExecuteHandler(C0.FF, function() {
            return r.lineFeed();
        });
        r._parser.setExecuteHandler(C0.CR, function() {
            return r.carriageReturn();
        });
        r._parser.setExecuteHandler(C0.BS, function() {
            return r.backspace();
        });
        r._parser.setExecuteHandler(C0.HT, function() {
            return r.tab();
        });
        r._parser.setExecuteHandler(C0.SO, function() {
            return r.shiftOut();
        });
        r._parser.setExecuteHandler(C0.SI, function() {
            return r.shiftIn();
        });
        r._parser.setExecuteHandler(C1.IND, function() {
            return r.index();
        });
        r._parser.setExecuteHandler(C1.NEL, function() {
            return r.nextLine();
        });
        r._parser.setExecuteHandler(C1.HTS, function() {
            return r.tabSet();
        });
        r._parser.setOscHandler(0, function(e) {
            return r.setTitle(e);
        });
        r._parser.setOscHandler(2, function(e) {
            return r.setTitle(e);
        });
        r._parser.setEscHandler("7", function() {
            return r.saveCursor([]);
        });
        r._parser.setEscHandler("8", function() {
            return r.restoreCursor([]);
        });
        r._parser.setEscHandler("D", function() {
            return r.index();
        });
        r._parser.setEscHandler("E", function() {
            return r.nextLine();
        });
        r._parser.setEscHandler("H", function() {
            return r.tabSet();
        });
        r._parser.setEscHandler("M", function() {
            return r.reverseIndex();
        });
        r._parser.setEscHandler("=", function() {
            return r.keypadApplicationMode();
        });
        r._parser.setEscHandler(">", function() {
            return r.keypadNumericMode();
        });
        r._parser.setEscHandler("c", function() {
            return r.reset();
        });
        r._parser.setEscHandler("n", function() {
            return r.setgLevel(2);
        });
        r._parser.setEscHandler("o", function() {
            return r.setgLevel(3);
        });
        r._parser.setEscHandler("|", function() {
            return r.setgLevel(3);
        });
        r._parser.setEscHandler("}", function() {
            return r.setgLevel(2);
        });
        r._parser.setEscHandler("~", function() {
            return r.setgLevel(1);
        });
        r._parser.setEscHandler("%@", function() {
            return r.selectDefaultCharset();
        });
        r._parser.setEscHandler("%G", function() {
            return r.selectDefaultCharset();
        });
        const n = (e)=>{
            _this._parser.setEscHandler(`(${e}`, function() {
                return r.selectCharset(`(${e}`);
            });
            _this._parser.setEscHandler(`)${e}`, function() {
                return r.selectCharset(`)${e}`);
            });
            _this._parser.setEscHandler(`*${e}`, function() {
                return r.selectCharset(`*${e}`);
            });
            _this._parser.setEscHandler(`+${e}`, function() {
                return r.selectCharset(`+${e}`);
            });
            _this._parser.setEscHandler(`-${e}`, function() {
                return r.selectCharset(`-${e}`);
            });
            _this._parser.setEscHandler(`.${e}`, function() {
                return r.selectCharset(`.${e}`);
            });
            _this._parser.setEscHandler(`/${e}`, function() {
                return r.selectCharset(`/${e}`);
            });
        };
        var _this = this;
        for(const l in CHARSETS){
            n(l);
        }
        r._parser.setErrorHandler(function(e) {
            r._terminal.error("Parsing error: ", e);
            return e;
        });
        r._parser.setDcsHandler("$q", new f(r._terminal));
        return r;
    }
    n(t, Disposable_1);
    t.prototype.dispose = function() {
        Disposable_1.prototype.dispose.call(this);
        this._terminal = null;
    };
    t.prototype.parse = function(e) {
        if (this._terminal) {
            let t = this._terminal.buffer;
            const { x, y } = t;
            if (this._terminal.debug) {
                this._terminal.log(`data: ${e}`);
            }
            if (this._surrogateHigh) {
                e = this._surrogateHigh + e;
                this._surrogateHigh = "";
            }
            this._parser.parse(e);
            if (!((t = this._terminal.buffer).x === x && t.y === y)) {
                this._terminal.emit("cursormove");
            }
        }
    };
    t.prototype.print = function(e, t, i) {
        let r;
        let n;
        let s;
        let o;
        const buffer = this._terminal.buffer;
        const charset = this._terminal.charset;
        const screenReaderMode = this._terminal.options.screenReaderMode;
        const cols = this._terminal.cols;
        const wraparoundMode = this._terminal.wraparoundMode;
        const insertMode = this._terminal.insertMode;
        const curAttr = this._terminal.curAttr;
        let m = buffer.lines.get(buffer.y + buffer.ybase);
        this._terminal.updateRange(buffer.y);
        for(let y = t; y < i; ++y){
            r = e.charAt(y);
            if ((n = e.charCodeAt(y)) >= 55296 && n <= 56319) {
                s = e.charCodeAt(y + 1);
                if (isNaN(s)) {
                    this._surrogateHigh = r;
                    continue;
                }
                n = 1024 * (n - 55296) + (s - 56320) + 65536;
                r += e.charAt(y + 1);
            }
            if (!(n >= 56320 && n <= 57343)) {
                o = wcwidth(n);
                if (charset) {
                    n = (r = charset[r] || r).charCodeAt(0);
                }
                if (screenReaderMode) {
                    this._terminal.emit("a11y.char", r);
                }
                if (o || !buffer.x) {
                    if (buffer.x + o - 1 >= cols) {
                        if (wraparoundMode) {
                            buffer.x = 0;
                            buffer.y++;
                            if (buffer.y > buffer.scrollBottom) {
                                buffer.y--;
                                this._terminal.scroll(true);
                            } else {
                                buffer.lines.get(buffer.y).isWrapped = true;
                            }
                            m = buffer.lines.get(buffer.y + buffer.ybase);
                        } else if (o === 2) {
                            continue;
                        }
                    }
                    if (insertMode) {
                        for(let C = 0; C < o; ++C){
                            const g = m.pop();
                            v = m.get(buffer.x - 2);
                            if (g[CHAR_DATA_WIDTH_INDEX] === 0 && v && v[CHAR_DATA_WIDTH_INDEX] === 2) {
                                m.set(this._terminal.cols - 2, [
                                    curAttr,
                                    NULL_CELL_CHAR,
                                    NULL_CELL_WIDTH,
                                    NULL_CELL_CODE
                                ]);
                            }
                            m.splice(buffer.x, 0, [
                                curAttr,
                                NULL_CELL_CHAR,
                                NULL_CELL_WIDTH,
                                NULL_CELL_CODE
                            ]);
                        }
                    }
                    m.set(buffer.x++, [
                        curAttr,
                        r,
                        o,
                        n
                    ]);
                    if (o === 2) {
                        m.set(buffer.x++, [
                            curAttr,
                            "",
                            0,
                            undefined
                        ]);
                    }
                } else {
                    var v;
                    const b = m.get(buffer.x - 1);
                    if (b) {
                        if (b[CHAR_DATA_WIDTH_INDEX]) {
                            b[CHAR_DATA_CHAR_INDEX] += r;
                            b[CHAR_DATA_CODE_INDEX] = n;
                        } else if (v = m.get(buffer.x - 2)) {
                            v[CHAR_DATA_CHAR_INDEX] += r;
                            v[CHAR_DATA_CODE_INDEX] = n;
                        }
                    }
                }
            }
        }
        this._terminal.updateRange(buffer.y);
    };
    t.prototype.bell = function() {
        this._terminal.bell();
    };
    t.prototype.lineFeed = function() {
        const buffer = this._terminal.buffer;
        if (this._terminal.options.convertEol) {
            buffer.x = 0;
        }
        buffer.y++;
        if (buffer.y > buffer.scrollBottom) {
            buffer.y--;
            this._terminal.scroll();
        }
        if (buffer.x >= this._terminal.cols) {
            buffer.x--;
        }
        this._terminal.emit("linefeed");
    };
    t.prototype.carriageReturn = function() {
        this._terminal.buffer.x = 0;
    };
    t.prototype.backspace = function() {
        if (this._terminal.buffer.x > 0) {
            this._terminal.buffer.x--;
        }
    };
    t.prototype.tab = function() {
        const e = this._terminal.buffer.x;
        this._terminal.buffer.x = this._terminal.buffer.nextStop();
        if (this._terminal.options.screenReaderMode) {
            this._terminal.emit("a11y.tab", this._terminal.buffer.x - e);
        }
    };
    t.prototype.shiftOut = function() {
        this._terminal.setgLevel(1);
    };
    t.prototype.shiftIn = function() {
        this._terminal.setgLevel(0);
    };
    t.prototype.insertChars = function(e) {
        this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).insertCells(this._terminal.buffer.x, e[0] || 1, [
            this._terminal.eraseAttr(),
            NULL_CELL_CHAR,
            NULL_CELL_WIDTH,
            NULL_CELL_CODE
        ]);
        this._terminal.updateRange(this._terminal.buffer.y);
    };
    t.prototype.cursorUp = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.y -= t;
        if (this._terminal.buffer.y < 0) {
            this._terminal.buffer.y = 0;
        }
    };
    t.prototype.cursorDown = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.y += t;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x--;
        }
    };
    t.prototype.cursorForward = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.x += t;
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x = this._terminal.cols - 1;
        }
    };
    t.prototype.cursorBackward = function([t]) {
        if (t < 1) {
            t = 1;
        }
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x--;
        }
        this._terminal.buffer.x -= t;
        if (this._terminal.buffer.x < 0) {
            this._terminal.buffer.x = 0;
        }
    };
    t.prototype.cursorNextLine = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.y += t;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
        this._terminal.buffer.x = 0;
    };
    t.prototype.cursorPrecedingLine = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.y -= t;
        if (this._terminal.buffer.y < 0) {
            this._terminal.buffer.y = 0;
        }
        this._terminal.buffer.x = 0;
    };
    t.prototype.cursorCharAbsolute = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.x = t - 1;
    };
    t.prototype.cursorPosition = function(e) {
        let t;
        let i = e[0] - 1;
        t = e.length >= 2 ? e[1] - 1 : 0;
        if (i < 0) {
            i = 0;
        } else if (i >= this._terminal.rows) {
            i = this._terminal.rows - 1;
        }
        if (t < 0) {
            t = 0;
        } else if (t >= this._terminal.cols) {
            t = this._terminal.cols - 1;
        }
        this._terminal.buffer.x = t;
        this._terminal.buffer.y = i;
    };
    t.prototype.cursorForwardTab = function(e) {
        for(let t = e[0] || 1; t--;){
            this._terminal.buffer.x = this._terminal.buffer.nextStop();
        }
    };
    t.prototype._eraseInBufferLine = function(e, t, i) {
        this._terminal.buffer.lines.get(this._terminal.buffer.ybase + e).replaceCells(t, i, [
            this._terminal.eraseAttr(),
            NULL_CELL_CHAR,
            NULL_CELL_WIDTH,
            NULL_CELL_CODE
        ]);
    };
    t.prototype.eraseInDisplay = function(e) {
        let t;
        switch(e[0]){
            case 0:
                t = this._terminal.buffer.y;
                this._terminal.updateRange(t);
                this._eraseInBufferLine(t++, this._terminal.buffer.x, this._terminal.cols);
                for(; t < this._terminal.rows; t++){
                    this._eraseInBufferLine(t, 0, this._terminal.cols);
                }
                this._terminal.updateRange(t);
                break;
            case 1:
                t = this._terminal.buffer.y;
                this._terminal.updateRange(t);
                this._eraseInBufferLine(t, 0, this._terminal.buffer.x + 1);
                while(t--){
                    this._eraseInBufferLine(t, 0, this._terminal.cols);
                }
                this._terminal.updateRange(0);
                break;
            case 2:
                t = this._terminal.rows;
                this._terminal.updateRange(t - 1);
                while(t--){
                    this._eraseInBufferLine(t, 0, this._terminal.cols);
                }
                this._terminal.updateRange(0);
                break;
            case 3:
                const i = this._terminal.buffer.lines.length - this._terminal.rows;
                if (i > 0) {
                    this._terminal.buffer.lines.trimStart(i);
                    this._terminal.buffer.ybase = Math.max(this._terminal.buffer.ybase - i, 0);
                    this._terminal.buffer.ydisp = Math.max(this._terminal.buffer.ydisp - i, 0);
                    this._terminal.emit("scroll", 0);
                }
        }
    };
    t.prototype.eraseInLine = function(e) {
        switch(e[0]){
            case 0:
                this._eraseInBufferLine(this._terminal.buffer.y, this._terminal.buffer.x, this._terminal.cols);
                break;
            case 1:
                this._eraseInBufferLine(this._terminal.buffer.y, 0, this._terminal.buffer.x + 1);
                break;
            case 2:
                this._eraseInBufferLine(this._terminal.buffer.y, 0, this._terminal.cols);
        }
        this._terminal.updateRange(this._terminal.buffer.y);
    };
    t.prototype.insertLines = function([t]) {
        if (t < 1) {
            t = 1;
        }
        const buffer = this._terminal.buffer;
        const r = buffer.y + buffer.ybase;
        const n = this._terminal.rows - 1 - buffer.scrollBottom;
        const s = this._terminal.rows - 1 + buffer.ybase - n + 1;
        while(t--){
            buffer.lines.splice(s - 1, 1);
            buffer.lines.splice(r, 0, BufferLine.blankLine(this._terminal.cols, this._terminal.eraseAttr()));
        }
        this._terminal.updateRange(buffer.y);
        this._terminal.updateRange(buffer.scrollBottom);
    };
    t.prototype.deleteLines = function([t]) {
        if (t < 1) {
            t = 1;
        }
        let i;
        const buffer = this._terminal.buffer;
        const n = buffer.y + buffer.ybase;
        i = this._terminal.rows - 1 - buffer.scrollBottom;
        for(i = this._terminal.rows - 1 + buffer.ybase - i; t--;){
            buffer.lines.splice(n, 1);
            buffer.lines.splice(i, 0, BufferLine.blankLine(this._terminal.cols, this._terminal.eraseAttr()));
        }
        this._terminal.updateRange(buffer.y);
        this._terminal.updateRange(buffer.scrollBottom);
    };
    t.prototype.deleteChars = function(e) {
        this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).deleteCells(this._terminal.buffer.x, e[0] || 1, [
            this._terminal.eraseAttr(),
            NULL_CELL_CHAR,
            NULL_CELL_WIDTH,
            NULL_CELL_CODE
        ]);
        this._terminal.updateRange(this._terminal.buffer.y);
    };
    t.prototype.scrollUp = function(e) {
        for(var t = e[0] || 1, i = this._terminal.buffer; t--;){
            i.lines.splice(i.ybase + i.scrollTop, 1);
            i.lines.splice(i.ybase + i.scrollBottom, 0, BufferLine.blankLine(this._terminal.cols, DEFAULT_ATTR));
        }
        this._terminal.updateRange(i.scrollTop);
        this._terminal.updateRange(i.scrollBottom);
    };
    t.prototype.scrollDown = function(e, t) {
        if (e.length < 2 && !t) {
            for(var i = e[0] || 1, r = this._terminal.buffer; i--;){
                r.lines.splice(r.ybase + r.scrollBottom, 1);
                r.lines.splice(r.ybase + r.scrollBottom, 0, BufferLine.blankLine(this._terminal.cols, DEFAULT_ATTR));
            }
            this._terminal.updateRange(r.scrollTop);
            this._terminal.updateRange(r.scrollBottom);
        }
    };
    t.prototype.eraseChars = function(e) {
        this._terminal.buffer.lines.get(this._terminal.buffer.y + this._terminal.buffer.ybase).replaceCells(this._terminal.buffer.x, this._terminal.buffer.x + (e[0] || 1), [
            this._terminal.eraseAttr(),
            NULL_CELL_CHAR,
            NULL_CELL_WIDTH,
            NULL_CELL_CODE
        ]);
    };
    t.prototype.cursorBackwardTab = function(e) {
        for(let t = e[0] || 1, i = this._terminal.buffer; t--;){
            i.x = i.prevStop();
        }
    };
    t.prototype.charPosAbsolute = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.x = t - 1;
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x = this._terminal.cols - 1;
        }
    };
    t.prototype.hPositionRelative = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.x += t;
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x = this._terminal.cols - 1;
        }
    };
    t.prototype.repeatPrecedingCharacter = function(e) {
        const buffer = this._terminal.buffer;
        const i = buffer.lines.get(buffer.ybase + buffer.y);
        i.replaceCells(buffer.x, buffer.x + (e[0] || 1), i.get(buffer.x - 1) || [
            DEFAULT_ATTR,
            NULL_CELL_CHAR,
            NULL_CELL_WIDTH,
            NULL_CELL_CODE
        ]);
    };
    t.prototype.sendDeviceAttributes = function(e, t) {
        if (!(e[0] > 0)) {
            if (t) {
                if (t === ">") {
                    if (this._terminal.is("xterm")) {
                        this._terminal.handler(`${C0.ESC}[>0;276;0c`);
                    } else if (this._terminal.is("rxvt-unicode")) {
                        this._terminal.handler(`${C0.ESC}[>85;95;0c`);
                    } else if (this._terminal.is("linux")) {
                        this._terminal.handler(`${e[0]}c`);
                    } else if (this._terminal.is("screen")) {
                        this._terminal.handler(`${C0.ESC}[>83;40003;0c`);
                    }
                }
            } else if (this._terminal.is("xterm") || this._terminal.is("rxvt-unicode") || this._terminal.is("screen")) {
                this._terminal.handler(`${C0.ESC}[?1;2c`);
            } else if (this._terminal.is("linux")) {
                this._terminal.handler(`${C0.ESC}[?6c`);
            }
        }
    };
    t.prototype.linePosAbsolute = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.y = t - 1;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
    };
    t.prototype.vPositionRelative = function([t]) {
        if (t < 1) {
            t = 1;
        }
        this._terminal.buffer.y += t;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x--;
        }
    };
    t.prototype.hVPosition = function(e) {
        if (e[0] < 1) {
            e[0] = 1;
        }
        if (e[1] < 1) {
            e[1] = 1;
        }
        this._terminal.buffer.y = e[0] - 1;
        if (this._terminal.buffer.y >= this._terminal.rows) {
            this._terminal.buffer.y = this._terminal.rows - 1;
        }
        this._terminal.buffer.x = e[1] - 1;
        if (this._terminal.buffer.x >= this._terminal.cols) {
            this._terminal.buffer.x = this._terminal.cols - 1;
        }
    };
    t.prototype.tabClear = function([t]) {
        if (t <= 0) {
            delete this._terminal.buffer.tabs[this._terminal.buffer.x];
        } else if (t === 3) {
            this._terminal.buffer.tabs = {};
        }
    };
    t.prototype.setMode = function(e, t) {
        if (e.length > 1) {
            for(let i = 0; i < e.length; i++){
                this.setMode([
                    e[i]
                ]);
            }
        } else if (t) {
            if (t === "?") {
                switch(e[0]){
                    case 1:
                        this._terminal.applicationCursor = true;
                        break;
                    case 2:
                        this._terminal.setgCharset(0, DEFAULT_CHARSET);
                        this._terminal.setgCharset(1, DEFAULT_CHARSET);
                        this._terminal.setgCharset(2, DEFAULT_CHARSET);
                        this._terminal.setgCharset(3, DEFAULT_CHARSET);
                        break;
                    case 3:
                        this._terminal.savedCols = this._terminal.cols;
                        this._terminal.resize(132, this._terminal.rows);
                        break;
                    case 6:
                        this._terminal.originMode = true;
                        break;
                    case 7:
                        this._terminal.wraparoundMode = true;
                        break;
                    case 12:
                        break;
                    case 66:
                        this._terminal.log("Serial port requested application keypad.");
                        this._terminal.applicationKeypad = true;
                        this._terminal.viewport.syncScrollArea();
                        break;
                    case 9:
                    case 1000:
                    case 1002:
                    case 1003:
                        this._terminal.x10Mouse = e[0] === 9;
                        this._terminal.vt200Mouse = e[0] === 1000;
                        this._terminal.normalMouse = e[0] > 1000;
                        this._terminal.mouseEvents = true;
                        this._terminal.element.classList.add("enable-mouse-events");
                        this._terminal.selectionManager.disable();
                        this._terminal.log("Binding to mouse events.");
                        break;
                    case 1004:
                        this._terminal.sendFocus = true;
                        break;
                    case 1005:
                        this._terminal.utfMouse = true;
                        break;
                    case 1006:
                        this._terminal.sgrMouse = true;
                        break;
                    case 1015:
                        this._terminal.urxvtMouse = true;
                        break;
                    case 25:
                        this._terminal.cursorHidden = false;
                        break;
                    case 1049:
                    case 47:
                    case 1047:
                        this._terminal.buffers.activateAltBuffer();
                        this._terminal.viewport.syncScrollArea();
                        this._terminal.showCursor();
                        break;
                    case 2004:
                        this._terminal.bracketedPasteMode = true;
                }
            }
        } else if (e[0] === 4) {
            this._terminal.insertMode = true;
        }
    };
    t.prototype.resetMode = function(e, t) {
        if (e.length > 1) {
            for(let i = 0; i < e.length; i++){
                this.resetMode([
                    e[i]
                ]);
            }
        } else if (t) {
            if (t === "?") {
                switch(e[0]){
                    case 1:
                        this._terminal.applicationCursor = false;
                        break;
                    case 3:
                        if (this._terminal.cols === 132 && this._terminal.savedCols) {
                            this._terminal.resize(this._terminal.savedCols, this._terminal.rows);
                        }
                        delete this._terminal.savedCols;
                        break;
                    case 6:
                        this._terminal.originMode = false;
                        break;
                    case 7:
                        this._terminal.wraparoundMode = false;
                        break;
                    case 12:
                        break;
                    case 66:
                        this._terminal.log("Switching back to normal keypad.");
                        this._terminal.applicationKeypad = false;
                        this._terminal.viewport.syncScrollArea();
                        break;
                    case 9:
                    case 1000:
                    case 1002:
                    case 1003:
                        this._terminal.x10Mouse = false;
                        this._terminal.vt200Mouse = false;
                        this._terminal.normalMouse = false;
                        this._terminal.mouseEvents = false;
                        this._terminal.element.classList.remove("enable-mouse-events");
                        this._terminal.selectionManager.enable();
                        break;
                    case 1004:
                        this._terminal.sendFocus = false;
                        break;
                    case 1005:
                        this._terminal.utfMouse = false;
                        break;
                    case 1006:
                        this._terminal.sgrMouse = false;
                        break;
                    case 1015:
                        this._terminal.urxvtMouse = false;
                        break;
                    case 25:
                        this._terminal.cursorHidden = true;
                        break;
                    case 1049:
                    case 47:
                    case 1047:
                        this._terminal.buffers.activateNormalBuffer();
                        this._terminal.refresh(0, this._terminal.rows - 1);
                        this._terminal.viewport.syncScrollArea();
                        this._terminal.showCursor();
                        break;
                    case 2004:
                        this._terminal.bracketedPasteMode = false;
                }
            }
        } else if (e[0] === 4) {
            this._terminal.insertMode = false;
        }
    };
    t.prototype.charAttributes = function(e) {
        if (e.length !== 1 || e[0] !== 0) {
            let t;
            for(var i = e.length, r = this._terminal.curAttr >> 18, n = this._terminal.curAttr >> 9 & 511, s = 511 & this._terminal.curAttr, o = 0; o < i; o++){
                if ((t = e[o]) >= 30 && t <= 37) {
                    n = t - 30;
                } else if (t >= 40 && t <= 47) {
                    s = t - 40;
                } else if (t >= 90 && t <= 97) {
                    n = (t += 8) - 90;
                } else if (t >= 100 && t <= 107) {
                    s = (t += 8) - 100;
                } else if (t === 0) {
                    r = DEFAULT_ATTR >> 18;
                    n = DEFAULT_ATTR >> 9 & 511;
                    s = 511 & DEFAULT_ATTR;
                } else if (t === 1) {
                    r |= 1;
                } else if (t === 3) {
                    r |= 64;
                } else if (t === 4) {
                    r |= 2;
                } else if (t === 5) {
                    r |= 4;
                } else if (t === 7) {
                    r |= 8;
                } else if (t === 8) {
                    r |= 16;
                } else if (t === 2) {
                    r |= 32;
                } else if (t === 22) {
                    r &= -2;
                    r &= -33;
                } else if (t === 23) {
                    r &= -65;
                } else if (t === 24) {
                    r &= -3;
                } else if (t === 25) {
                    r &= -5;
                } else if (t === 27) {
                    r &= -9;
                } else if (t === 28) {
                    r &= -17;
                } else if (t === 39) {
                    n = DEFAULT_ATTR >> 9 & 511;
                } else if (t === 49) {
                    s = 511 & DEFAULT_ATTR;
                } else if (t === 38) {
                    if (e[o + 1] === 2) {
                        o += 2;
                        if ((n = this._terminal.matchColor(255 & e[o], 255 & e[o + 1], 255 & e[o + 2])) === -1) {
                            n = 511;
                        }
                        o += 2;
                    } else if (e[o + 1] === 5) {
                        n = t = 255 & e[o += 2];
                    }
                } else if (t === 48) {
                    if (e[o + 1] === 2) {
                        o += 2;
                        if ((s = this._terminal.matchColor(255 & e[o], 255 & e[o + 1], 255 & e[o + 2])) === -1) {
                            s = 511;
                        }
                        o += 2;
                    } else if (e[o + 1] === 5) {
                        s = t = 255 & e[o += 2];
                    }
                } else if (t === 100) {
                    n = DEFAULT_ATTR >> 9 & 511;
                    s = 511 & DEFAULT_ATTR;
                } else {
                    this._terminal.error("Unknown SGR attribute: %d.", t);
                }
            }
            this._terminal.curAttr = r << 18 | n << 9 | s;
        } else {
            this._terminal.curAttr = DEFAULT_ATTR;
        }
    };
    t.prototype.deviceStatus = function(e, t) {
        if (t) {
            if (t === "?" && e[0] === 6) {
                i = this._terminal.buffer.y + 1;
                r = this._terminal.buffer.x + 1;
                this._terminal.emit("data", `${C0.ESC}[?${i};${r}R`);
            }
        } else {
            switch(e[0]){
                case 5:
                    this._terminal.emit("data", `${C0.ESC}[0n`);
                    break;
                case 6:
                    var i = this._terminal.buffer.y + 1;
                    var r = this._terminal.buffer.x + 1;
                    this._terminal.emit("data", `${C0.ESC}[${i};${r}R`);
            }
        }
    };
    t.prototype.softReset = function(e, t) {
        if (t === "!") {
            this._terminal.cursorHidden = false;
            this._terminal.insertMode = false;
            this._terminal.originMode = false;
            this._terminal.wraparoundMode = true;
            this._terminal.applicationKeypad = false;
            this._terminal.viewport.syncScrollArea();
            this._terminal.applicationCursor = false;
            this._terminal.buffer.scrollTop = 0;
            this._terminal.buffer.scrollBottom = this._terminal.rows - 1;
            this._terminal.curAttr = DEFAULT_ATTR;
            this._terminal.buffer.x = this._terminal.buffer.y = 0;
            this._terminal.charset = null;
            this._terminal.glevel = 0;
            this._terminal.charsets = [
                null
            ];
        }
    };
    t.prototype.setCursorStyle = function(e, t) {
        if (t === " ") {
            const i = e[0] < 1 ? 1 : e[0];
            switch(i){
                case 1:
                case 2:
                    this._terminal.setOption("cursorStyle", "block");
                    break;
                case 3:
                case 4:
                    this._terminal.setOption("cursorStyle", "underline");
                    break;
                case 5:
                case 6:
                    this._terminal.setOption("cursorStyle", "bar");
            }
            const r = i % 2 == 1;
            this._terminal.setOption("cursorBlink", r);
        }
    };
    t.prototype.setScrollRegion = function(e, t) {
        if (!t) {
            this._terminal.buffer.scrollTop = (e[0] || 1) - 1;
            this._terminal.buffer.scrollBottom = (e[1] && e[1] <= this._terminal.rows ? e[1] : this._terminal.rows) - 1;
            this._terminal.buffer.x = 0;
            this._terminal.buffer.y = 0;
        }
    };
    t.prototype.saveCursor = function(e) {
        this._terminal.buffer.savedX = this._terminal.buffer.x;
        this._terminal.buffer.savedY = this._terminal.buffer.y;
        this._terminal.savedCurAttr = this._terminal.curAttr;
    };
    t.prototype.restoreCursor = function(e) {
        this._terminal.buffer.x = this._terminal.buffer.savedX || 0;
        this._terminal.buffer.y = this._terminal.buffer.savedY || 0;
        this._terminal.curAttr = this._terminal.savedCurAttr || DEFAULT_ATTR;
    };
    t.prototype.setTitle = function(e) {
        this._terminal.handleTitle(e);
    };
    t.prototype.nextLine = function() {
        this._terminal.buffer.x = 0;
        this.index();
    };
    t.prototype.keypadApplicationMode = function() {
        this._terminal.log("Serial port requested application keypad.");
        this._terminal.applicationKeypad = true;
        if (this._terminal.viewport) {
            this._terminal.viewport.syncScrollArea();
        }
    };
    t.prototype.keypadNumericMode = function() {
        this._terminal.log("Switching back to normal keypad.");
        this._terminal.applicationKeypad = false;
        if (this._terminal.viewport) {
            this._terminal.viewport.syncScrollArea();
        }
    };
    t.prototype.selectDefaultCharset = function() {
        this._terminal.setgLevel(0);
        this._terminal.setgCharset(0, DEFAULT_CHARSET);
    };
    t.prototype.selectCharset = function(e) {
        if (e.length !== 2) {
            return this.selectDefaultCharset();
        }
        if (e[0] !== "/") {
            this._terminal.setgCharset(_[e[0]], CHARSETS[e[1]] || DEFAULT_CHARSET);
        }
    };
    t.prototype.index = function() {
        this._terminal.index();
    };
    t.prototype.tabSet = function() {
        this._terminal.tabSet();
    };
    t.prototype.reverseIndex = function() {
        this._terminal.reverseIndex();
    };
    t.prototype.reset = function() {
        this._parser.reset();
        this._terminal.reset();
    };
    t.prototype.setgLevel = function(e) {
        this._terminal.setgLevel(e);
    };
    return t;
})(Disposable);
