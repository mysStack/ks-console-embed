import { BufferSet } from "./module-5733.js";
import { DEFAULT_ATTR, MAX_BUFFER_SIZE, NULL_CELL_CHAR, NULL_CELL_CODE, NULL_CELL_WIDTH } from "./module-923.js";
import { CompositionHelper } from "./module-5735.js";
import { EventEmitter } from "./module-965.js";
import { Viewport } from "./module-5736.js";
import { copyHandler, moveTextAreaUnderMouseCursor, pasteHandler, rightClickHandler } from "./module-5737.js";
import { C0 } from "./module-1255.js";
import { InputHandler } from "./module-5738.js";
import { Renderer } from "./module-5741.js";
import { Linkifier } from "./module-5753.js";
import { SelectionManager } from "./module-5754.js";
import { CharMeasure } from "./module-5757.js";
import * as module1147 from "./module-1147.js";
import { addDisposableDomListener } from "./module-1254.js";
import { promptLabel } from "./module-1467.js";
import { MouseHelper } from "./module-2015.js";
import { clone } from "./module-5758.js";
import { DEFAULT_BELL_SOUND, SoundManager } from "./module-5759.js";
import { DEFAULT_ANSI_COLORS } from "./module-1257.js";
import { MouseZoneManager } from "./module-2014.js";
import { AccessibilityManager } from "./module-5760.js";
import { ScreenDprMonitor } from "./module-2013.js";
import { removeTerminalFromCache } from "./module-2010.js";
import { DomRenderer } from "./module-5761.js";
import { evaluateKeyboardEvent } from "./module-5763.js";
import { BufferLine } from "./module-1464.js";
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
const k = typeof window !== "undefined" ? window.document : null;
const H = [
    "cols",
    "rows"
];
const D = {
    cols: 80,
    rows: 24,
    convertEol: false,
    termName: "xterm",
    cursorBlink: false,
    cursorStyle: "block",
    bellSound: DEFAULT_BELL_SOUND,
    bellStyle: "none",
    drawBoldTextInBrightColors: true,
    enableBold: true,
    experimentalCharAtlas: "static",
    fontFamily: "courier-new, courier, monospace",
    fontSize: 15,
    fontWeight: "normal",
    fontWeightBold: "bold",
    lineHeight: 1,
    letterSpacing: 0,
    scrollback: 1000,
    screenKeys: false,
    screenReaderMode: false,
    debug: false,
    macOptionIsMeta: false,
    macOptionClickForcesSelection: false,
    cancelEvents: false,
    disableStdin: false,
    useFlowControl: false,
    allowTransparency: false,
    tabStopWidth: 8,
    theme: null,
    rightClickSelectsWord: module1147.isMac,
    rendererType: "canvas"
};
export const Terminal = ((EventEmitter_1)=>{
    function t(t = {}) {
        const i = EventEmitter_1.call(this) || this;
        i.browser = module1147;
        i.options = clone(t);
        i._setup();
        return i;
    }
    n(t, EventEmitter_1);
    t.prototype.dispose = function() {
        EventEmitter_1.prototype.dispose.call(this);
        this._customKeyEventHandler = null;
        removeTerminalFromCache(this);
        this.handler = function() {};
        this.write = function() {};
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    };
    t.prototype.destroy = function() {
        this.dispose();
    };
    t.prototype._setup = function() {
        const _this = this;
        Object.keys(D).forEach((t)=>{
            if (!(_this.options[t] !== null && _this.options[t] !== undefined)) {
                _this.options[t] = D[t];
            }
        });
        this._parent = k ? k.body : null;
        this.cols = this.options.cols;
        this.rows = this.options.rows;
        if (this.options.handler) {
            this.on("data", this.options.handler);
        }
        this.cursorState = 0;
        this.cursorHidden = false;
        this._customKeyEventHandler = null;
        this.applicationKeypad = false;
        this.applicationCursor = false;
        this.originMode = false;
        this.insertMode = false;
        this.wraparoundMode = true;
        this.bracketedPasteMode = false;
        this.charset = null;
        this.gcharset = null;
        this.glevel = 0;
        this.charsets = [
            null
        ];
        this.curAttr = DEFAULT_ATTR;
        this.params = [];
        this.currentParam = 0;
        this.writeBuffer = [];
        this._writeInProgress = false;
        this._xoffSentToCatchUp = false;
        this._userScrolling = false;
        this._inputHandler = new InputHandler(this);
        this.register(this._inputHandler);
        this.renderer = this.renderer || null;
        this.selectionManager = this.selectionManager || null;
        this.linkifier = this.linkifier || new Linkifier(this);
        this._mouseZoneManager = this._mouseZoneManager || null;
        this.soundManager = this.soundManager || new SoundManager(this);
        this.buffers = new BufferSet(this);
        if (this.selectionManager) {
            this.selectionManager.clearSelection();
            this.selectionManager.initBuffersListeners();
        }
    };
    Object.defineProperty(t.prototype, "buffer", {
        get: function() {
            return this.buffers.active;
        },
        enumerable: true,
        configurable: true
    });
    t.prototype.eraseAttr = function() {
        return -512 & DEFAULT_ATTR | 511 & this.curAttr;
    };
    t.prototype.focus = function() {
        if (this.textarea) {
            this.textarea.focus();
        }
    };
    Object.defineProperty(t.prototype, "isFocused", {
        get: function() {
            return k.activeElement === this.textarea;
        },
        enumerable: true,
        configurable: true
    });
    t.prototype.getOption = function(e) {
        if (!(e in D)) {
            throw new Error(`No option with key "${e}"`);
        }
        return this.options[e];
    };
    t.prototype.setOption = function(e, t) {
        if (!(e in D)) {
            throw new Error(`No option with key "${e}"`);
        }
        if (H.indexOf(e) !== -1) {
            console.error(`Option "${e}" can only be set in the constructor`);
        }
        if (this.options[e] !== t) {
            switch(e){
                case "bellStyle":
                    if (!t) {
                        t = "none";
                    }
                    break;
                case "cursorStyle":
                    if (!t) {
                        t = "block";
                    }
                    break;
                case "fontWeight":
                    if (!t) {
                        t = "normal";
                    }
                    break;
                case "fontWeightBold":
                    if (!t) {
                        t = "bold";
                    }
                    break;
                case "lineHeight":
                    if (t < 1) {
                        return void console.warn(`${e} cannot be less than 1, value: ${t}`);
                    }
                case "rendererType":
                    if (!t) {
                        t = "canvas";
                    }
                    break;
                case "tabStopWidth":
                    if (t < 1) {
                        return void console.warn(`${e} cannot be less than 1, value: ${t}`);
                    }
                    break;
                case "theme":
                    if (this.renderer) {
                        return void this._setTheme(t);
                    }
                    break;
                case "scrollback":
                    if ((t = Math.min(t, MAX_BUFFER_SIZE)) < 0) {
                        return void console.warn(`${e} cannot be less than 0, value: ${t}`);
                    }
                    if (this.options[e] !== t) {
                        const i = this.rows + t;
                        if (this.buffer.lines.length > i) {
                            const r = this.buffer.lines.length - i;
                            const n = this.buffer.ydisp - r < 0;
                            this.buffer.lines.trimStart(r);
                            this.buffer.ybase = Math.max(this.buffer.ybase - r, 0);
                            this.buffer.ydisp = Math.max(this.buffer.ydisp - r, 0);
                            if (n) {
                                this.refresh(0, this.rows - 1);
                            }
                        }
                    }
            }
            this.options[e] = t;
            switch(e){
                case "fontFamily":
                case "fontSize":
                    if (this.renderer) {
                        this.renderer.clear();
                        this.charMeasure.measure(this.options);
                    }
                    break;
                case "drawBoldTextInBrightColors":
                case "experimentalCharAtlas":
                case "enableBold":
                case "letterSpacing":
                case "lineHeight":
                case "fontWeight":
                case "fontWeightBold":
                    if (this.renderer) {
                        this.renderer.clear();
                        this.renderer.onResize(this.cols, this.rows);
                        this.refresh(0, this.rows - 1);
                    }
                case "rendererType":
                    if (this.renderer) {
                        this.unregister(this.renderer);
                        this.renderer.dispose();
                        this.renderer = null;
                    }
                    this._setupRenderer();
                    this.renderer.onCharSizeChanged();
                    if (this._theme) {
                        this.renderer.setTheme(this._theme);
                    }
                    break;
                case "scrollback":
                    this.buffers.resize(this.cols, this.rows);
                    if (this.viewport) {
                        this.viewport.syncScrollArea();
                    }
                    break;
                case "screenReaderMode":
                    if (t) {
                        if (!this._accessibilityManager) {
                            this._accessibilityManager = new AccessibilityManager(this);
                        }
                    } else if (this._accessibilityManager) {
                        this._accessibilityManager.dispose();
                        this._accessibilityManager = null;
                    }
                    break;
                case "tabStopWidth":
                    this.buffers.setupTabStops();
            }
            if (this.renderer) {
                this.renderer.onOptionsChanged();
            }
        }
    };
    t.prototype._onTextAreaFocus = function(e) {
        if (this.sendFocus) {
            this.handler(`${C0.ESC}[I`);
        }
        this.updateCursorStyle(e);
        this.element.classList.add("focus");
        this.showCursor();
        this.emit("focus");
    };
    t.prototype.blur = function() {
        return this.textarea.blur();
    };
    t.prototype._onTextAreaBlur = function() {
        this.textarea.value = "";
        this.refresh(this.buffer.y, this.buffer.y);
        if (this.sendFocus) {
            this.handler(`${C0.ESC}[O`);
        }
        this.element.classList.remove("focus");
        this.emit("blur");
    };
    t.prototype._initGlobal = function() {
        const _this = this;
        this._bindKeys();
        this.register(addDisposableDomListener(this.element, "copy", function(t) {
            if (_this.hasSelection()) {
                copyHandler(t, _this, _this.selectionManager);
            }
        }));
        const t = function(t) {
            return pasteHandler(t, _this);
        };
        this.register(addDisposableDomListener(this.textarea, "paste", t));
        this.register(addDisposableDomListener(this.element, "paste", t));
        if (module1147.isFirefox) {
            this.register(addDisposableDomListener(this.element, "mousedown", function(t) {
                if (t.button === 2) {
                    rightClickHandler(t, _this.textarea, _this.selectionManager, _this.options.rightClickSelectsWord);
                }
            }));
        } else {
            this.register(addDisposableDomListener(this.element, "contextmenu", function(t) {
                rightClickHandler(t, _this.textarea, _this.selectionManager, _this.options.rightClickSelectsWord);
            }));
        }
        if (module1147.isLinux) {
            this.register(addDisposableDomListener(this.element, "auxclick", function(t) {
                if (t.button === 1) {
                    moveTextAreaUnderMouseCursor(t, _this.textarea);
                }
            }));
        }
    };
    t.prototype._bindKeys = function() {
        const _this = this;
        const _this_1 = this;
        this.register(addDisposableDomListener(this.element, "keydown", function(e) {
            if (k.activeElement === this) {
                _this_1._keyDown(e);
            }
        }, true));
        this.register(addDisposableDomListener(this.element, "keypress", function(e) {
            if (k.activeElement === this) {
                _this_1._keyPress(e);
            }
        }, true));
        this.register(addDisposableDomListener(this.element, "keyup", function(i) {
            if (!((e)=>e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18)(i)) {
                _this.focus();
            }
            _this_1._keyUp(i);
        }, true));
        this.register(addDisposableDomListener(this.textarea, "keydown", function(t) {
            return _this._keyDown(t);
        }, true));
        this.register(addDisposableDomListener(this.textarea, "keypress", function(t) {
            return _this._keyPress(t);
        }, true));
        this.register(addDisposableDomListener(this.textarea, "compositionstart", function() {
            return _this._compositionHelper.compositionstart();
        }));
        this.register(addDisposableDomListener(this.textarea, "compositionupdate", function(t) {
            return _this._compositionHelper.compositionupdate(t);
        }));
        this.register(addDisposableDomListener(this.textarea, "compositionend", function() {
            return _this._compositionHelper.compositionend();
        }));
        this.register(this.addDisposableListener("refresh", function() {
            return _this._compositionHelper.updateCompositionElements();
        }));
        this.register(this.addDisposableListener("refresh", function(t) {
            return _this._queueLinkification(t.start, t.end);
        }));
    };
    t.prototype.open = function(e) {
        const _this = this;
        this._parent = e || this._parent;
        if (!this._parent) {
            throw new Error("Terminal requires a parent element.");
        }
        this._context = this._parent.ownerDocument.defaultView;
        this._document = this._parent.ownerDocument;
        this._screenDprMonitor = new ScreenDprMonitor;
        this._screenDprMonitor.setListener(function() {
            return _this.emit("dprchange", window.devicePixelRatio);
        });
        this.register(this._screenDprMonitor);
        this.element = this._document.createElement("div");
        this.element.dir = "ltr";
        this.element.classList.add("terminal");
        this.element.classList.add("xterm");
        this.element.setAttribute("tabindex", "0");
        this._parent.appendChild(this.element);
        const i = k.createDocumentFragment();
        this._viewportElement = k.createElement("div");
        this._viewportElement.classList.add("xterm-viewport");
        i.appendChild(this._viewportElement);
        this._viewportScrollArea = k.createElement("div");
        this._viewportScrollArea.classList.add("xterm-scroll-area");
        this._viewportElement.appendChild(this._viewportScrollArea);
        this.screenElement = k.createElement("div");
        this.screenElement.classList.add("xterm-screen");
        this._helperContainer = k.createElement("div");
        this._helperContainer.classList.add("xterm-helpers");
        this.screenElement.appendChild(this._helperContainer);
        i.appendChild(this.screenElement);
        this._mouseZoneManager = new MouseZoneManager(this);
        this.register(this._mouseZoneManager);
        this.register(this.addDisposableListener("scroll", function() {
            return _this._mouseZoneManager.clearAll();
        }));
        this.linkifier.attachToDom(this._mouseZoneManager);
        this.textarea = k.createElement("textarea");
        this.textarea.classList.add("xterm-helper-textarea");
        this.textarea.setAttribute("aria-label", promptLabel);
        this.textarea.setAttribute("aria-multiline", "false");
        this.textarea.setAttribute("autocorrect", "off");
        this.textarea.setAttribute("autocapitalize", "off");
        this.textarea.setAttribute("spellcheck", "false");
        this.textarea.tabIndex = 0;
        this.register(addDisposableDomListener(this.textarea, "focus", function(e) {
            return _this._onTextAreaFocus(e);
        }));
        this.register(addDisposableDomListener(this.textarea, "blur", function() {
            return _this._onTextAreaBlur();
        }));
        this._helperContainer.appendChild(this.textarea);
        this._compositionView = k.createElement("div");
        this._compositionView.classList.add("composition-view");
        this._compositionHelper = new CompositionHelper(this.textarea, this._compositionView, this);
        this._helperContainer.appendChild(this._compositionView);
        this.charMeasure = new CharMeasure(k, this._helperContainer);
        this.element.appendChild(i);
        this._setupRenderer();
        this._theme = this.options.theme;
        this.options.theme = null;
        this.viewport = new Viewport(this, this._viewportElement, this._viewportScrollArea, this.charMeasure);
        this.viewport.onThemeChanged(this.renderer.colorManager.colors);
        this.register(this.viewport);
        this.register(this.addDisposableListener("cursormove", function() {
            return _this.renderer.onCursorMove();
        }));
        this.register(this.addDisposableListener("resize", function() {
            return _this.renderer.onResize(_this.cols, _this.rows);
        }));
        this.register(this.addDisposableListener("blur", function() {
            return _this.renderer.onBlur();
        }));
        this.register(this.addDisposableListener("focus", function() {
            return _this.renderer.onFocus();
        }));
        this.register(this.addDisposableListener("dprchange", function() {
            return _this.renderer.onWindowResize(window.devicePixelRatio);
        }));
        this.register(addDisposableDomListener(window, "resize", function() {
            return _this.renderer.onWindowResize(window.devicePixelRatio);
        }));
        this.register(this.charMeasure.addDisposableListener("charsizechanged", function() {
            return _this.renderer.onCharSizeChanged();
        }));
        this.register(this.renderer.addDisposableListener("resize", function(e) {
            return _this.viewport.syncScrollArea();
        }));
        this.selectionManager = new SelectionManager(this, this.charMeasure);
        this.register(addDisposableDomListener(this.element, "mousedown", function(e) {
            return _this.selectionManager.onMouseDown(e);
        }));
        this.register(this.selectionManager.addDisposableListener("refresh", function(e) {
            return _this.renderer.onSelectionChanged(e.start, e.end, e.columnSelectMode);
        }));
        this.register(this.selectionManager.addDisposableListener("newselection", function(e) {
            _this.textarea.value = e;
            _this.textarea.focus();
            _this.textarea.select();
        }));
        this.register(this.addDisposableListener("scroll", function() {
            _this.viewport.syncScrollArea();
            _this.selectionManager.refresh();
        }));
        this.register(addDisposableDomListener(this._viewportElement, "scroll", function() {
            return _this.selectionManager.refresh();
        }));
        this.mouseHelper = new MouseHelper(this.renderer);
        if (this.options.screenReaderMode) {
            this._accessibilityManager = new AccessibilityManager(this);
        }
        this.charMeasure.measure(this.options);
        this.refresh(0, this.rows - 1);
        this._initGlobal();
        this.bindMouse();
    };
    t.prototype._setupRenderer = function() {
        switch(this.options.rendererType){
            case "canvas":
                this.renderer = new Renderer(this, this.options.theme);
                break;
            case "dom":
                this.renderer = new DomRenderer(this, this.options.theme);
                break;
            default:
                throw new Error(`Unrecognized rendererType "${this.options.rendererType}"`);
        }
        this.register(this.renderer);
    };
    t.prototype._setTheme = function(e) {
        this._theme = e;
        const t = this.renderer.setTheme(e);
        if (this.viewport) {
            this.viewport.onThemeChanged(t);
        }
    };
    t.prototype.bindMouse = function() {
        const _this = this;
        const element = this.element;
        const _this_1 = this;
        let r = 32;
        function n(e) {
            let t;
            let n;
            t = ((e)=>{
                let t;
                let r;
                let n;
                switch(e.overrideType || e.type){
                    case "mousedown":
                        t = e.button !== null && e.button !== undefined ? +e.button : e.which !== null && e.which !== undefined ? e.which - 1 : null;
                        if (module1147.isMSIE) {
                            t = t === 1 ? 0 : t === 4 ? 1 : t;
                        }
                        break;
                    case "mouseup":
                        t = 3;
                        break;
                    case "DOMMouseScroll":
                        t = e.detail < 0 ? 64 : 65;
                        break;
                    case "wheel":
                        t = e.wheelDeltaY > 0 ? 64 : 65;
                }
                n = (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0) | (r = e.ctrlKey ? 16 : 0);
                if (_this_1.vt200Mouse) {
                    n &= r;
                } else if (!_this_1.normalMouse) {
                    n = 0;
                }
                return 32 + (n << 2) + t;
            })(e);
            if (n = _this_1.mouseHelper.getRawByteCoords(e, _this_1.screenElement, _this_1.charMeasure, _this_1.options.lineHeight, _this_1.cols, _this_1.rows)) {
                o(t, n);
                switch(e.overrideType || e.type){
                    case "mousedown":
                        r = t;
                        break;
                    case "mouseup":
                        r = 32;
                }
            }
        }
        function s(e, t) {
            if (_this_1.utfMouse) {
                if (t === 2047) {
                    return void e.push(0);
                }
                if (t < 127) {
                    e.push(t);
                } else {
                    if (t > 2047) {
                        t = 2047;
                    }
                    e.push(192 | t >> 6);
                    e.push(128 | 63 & t);
                }
            } else {
                if (t === 255) {
                    return void e.push(0);
                }
                if (t > 127) {
                    t = 127;
                }
                e.push(t);
            }
        }
        function o(e, t) {
            if (_this_1._vt300Mouse) {
                e &= 3;
                t.x -= 32;
                t.y -= 32;
                let r = `${C0.ESC}[24`;
                if (e === 0) {
                    r += "1";
                } else if (e === 1) {
                    r += "3";
                } else if (e === 2) {
                    r += "5";
                } else {
                    if (e === 3) {
                        return;
                    }
                    r += "0";
                }
                r += `~[${t.x},${t.y}]\r`;
                return void _this_1.handler(r);
            }
            if (_this_1._decLocator) {
                e &= 3;
                t.x -= 32;
                t.y -= 32;
                switch(e){
                    case 0:
                        e = 2;
                        break;
                    case 1:
                        e = 4;
                        break;
                    case 2:
                        e = 6;
                        break;
                    default:
                        if (e === 3) {
                            e = 3;
                        }
                }
                return void _this_1.handler(`${C0.ESC}[${e};${e === 3 ? 4 : 0};${t.y};${t.x};${t.page}` || "0&w");
            }
            if (_this_1.urxvtMouse) {
                t.x -= 32;
                t.y -= 32;
                t.x++;
                t.y++;
                return void _this_1.handler(`${C0.ESC}[${e};${t.x};${t.y}M`);
            }
            if (_this_1.sgrMouse) {
                t.x -= 32;
                t.y -= 32;
                return void _this_1.handler(`${C0.ESC}[<${((3 & e) == 3 ? -4 & e : e) - 32};${t.x};${t.y}${(3 & e) == 3 ? "m" : "M"}`);
            }
            const n = [];
            s(n, e);
            s(n, t.x);
            s(n, t.y);
            _this_1.handler(`${C0.ESC}[M${String.fromCharCode(...n)}`);
        }
        this.register(addDisposableDomListener(element, "mousedown", function(t) {
            t.preventDefault();
            _this.focus();
            if (_this.mouseEvents && !_this.selectionManager.shouldForceSelection(t)) {
                n(t);
                if (_this.vt200Mouse) {
                    t.overrideType = "mouseup";
                    n(t);
                    return _this.cancel(t);
                }
                let s;
                if (_this.normalMouse) {
                    s = function(t) {
                        if (_this.normalMouse) {
                            ((e)=>{
                                let t = r;
                                const n = _this_1.mouseHelper.getRawByteCoords(e, _this_1.screenElement, _this_1.charMeasure, _this_1.options.lineHeight, _this_1.cols, _this_1.rows);
                                if (n) {
                                    o(t += 32, n);
                                }
                            })(t);
                        }
                    };
                    _this._document.addEventListener("mousemove", s);
                }
                const a = function(t) {
                    if (_this.normalMouse && !_this.x10Mouse) {
                        n(t);
                    }
                    if (s) {
                        _this._document.removeEventListener("mousemove", s);
                        s = null;
                    }
                    _this._document.removeEventListener("mouseup", a);
                    return _this.cancel(t);
                };
                _this._document.addEventListener("mouseup", a);
                return _this.cancel(t);
            }
        }));
        this.register(addDisposableDomListener(element, "wheel", function(t) {
            if (_this.mouseEvents) {
                if (!(_this.x10Mouse || _this._vt300Mouse || _this._decLocator)) {
                    n(t);
                    t.preventDefault();
                }
            } else if (!_this.buffer.hasScrollback) {
                const i = _this.viewport.getLinesScrolled(t);
                if (i === 0) {
                    return;
                }
                const r = C0.ESC + (_this.applicationCursor ? "O" : "[") + (t.deltaY < 0 ? "A" : "B");
                let s = "";
                for(let o = 0; o < Math.abs(i); o++){
                    s += r;
                }
                _this.handler(s);
            }
        }));
        this.register(addDisposableDomListener(element, "wheel", function(t) {
            if (!_this.mouseEvents) {
                _this.viewport.onWheel(t);
                return _this.cancel(t);
            }
        }));
        this.register(addDisposableDomListener(element, "touchstart", function(t) {
            if (!_this.mouseEvents) {
                _this.viewport.onTouchStart(t);
                return _this.cancel(t);
            }
        }));
        this.register(addDisposableDomListener(element, "touchmove", function(t) {
            if (!_this.mouseEvents) {
                _this.viewport.onTouchMove(t);
                return _this.cancel(t);
            }
        }));
    };
    t.prototype.refresh = function(e, t) {
        if (this.renderer) {
            this.renderer.refreshRows(e, t);
        }
    };
    t.prototype._queueLinkification = function(e, t) {
        if (this.linkifier) {
            this.linkifier.linkifyRows(e, t);
        }
    };
    t.prototype.updateCursorStyle = function(e) {
        if (this.selectionManager && this.selectionManager.shouldColumnSelect(e)) {
            this.element.classList.add("xterm-cursor-crosshair");
        } else {
            this.element.classList.remove("xterm-cursor-crosshair");
        }
    };
    t.prototype.showCursor = function() {
        if (!this.cursorState) {
            this.cursorState = 1;
            this.refresh(this.buffer.y, this.buffer.y);
        }
    };
    t.prototype.scroll = function(e) {
        const t = BufferLine.blankLine(this.cols, DEFAULT_ATTR, e);
        const i = this.buffer.ybase + this.buffer.scrollTop;
        const r = this.buffer.ybase + this.buffer.scrollBottom;
        if (this.buffer.scrollTop === 0) {
            const n = this.buffer.lines.length === this.buffer.lines.maxLength;
            if (r === this.buffer.lines.length - 1) {
                this.buffer.lines.push(t);
            } else {
                this.buffer.lines.splice(r + 1, 0, t);
            }
            if (n) {
                if (this._userScrolling) {
                    this.buffer.ydisp = Math.max(this.buffer.ydisp - 1, 0);
                }
            } else {
                this.buffer.ybase++;
                if (!this._userScrolling) {
                    this.buffer.ydisp++;
                }
            }
        } else {
            const s = r - i + 1;
            this.buffer.lines.shiftElements(i + 1, s - 1, -1);
            this.buffer.lines.set(r, t);
        }
        if (!this._userScrolling) {
            this.buffer.ydisp = this.buffer.ybase;
        }
        this.updateRange(this.buffer.scrollTop);
        this.updateRange(this.buffer.scrollBottom);
        this.emit("scroll", this.buffer.ydisp);
    };
    t.prototype.scrollLines = function(e, t) {
        if (e < 0) {
            if (this.buffer.ydisp === 0) {
                return;
            }
            this._userScrolling = true;
        } else {
            if (e + this.buffer.ydisp >= this.buffer.ybase) {
                this._userScrolling = false;
            }
        }
        const ydisp = this.buffer.ydisp;
        this.buffer.ydisp = Math.max(Math.min(this.buffer.ydisp + e, this.buffer.ybase), 0);
        if (ydisp !== this.buffer.ydisp) {
            if (!t) {
                this.emit("scroll", this.buffer.ydisp);
            }
            this.refresh(0, this.rows - 1);
        }
    };
    t.prototype.scrollPages = function(e) {
        this.scrollLines(e * (this.rows - 1));
    };
    t.prototype.scrollToTop = function() {
        this.scrollLines(-this.buffer.ydisp);
    };
    t.prototype.scrollToBottom = function() {
        this.scrollLines(this.buffer.ybase - this.buffer.ydisp);
    };
    t.prototype.scrollToLine = function(e) {
        const t = e - this.buffer.ydisp;
        if (t !== 0) {
            this.scrollLines(t);
        }
    };
    t.prototype.write = function(e) {
        const _this = this;
        if (!this._isDisposed) {
            if (e) {
                this.writeBuffer.push(e);
                if (this.options.useFlowControl && !this._xoffSentToCatchUp && this.writeBuffer.length >= 5) {
                    this.handler(C0.DC3);
                    this._xoffSentToCatchUp = true;
                }
                if (!this._writeInProgress && this.writeBuffer.length > 0) {
                    this._writeInProgress = true;
                    setTimeout(()=>{
                        _this._innerWrite();
                    });
                }
            }
        }
    };
    t.prototype._innerWrite = function() {
        const _this = this;
        if (this._isDisposed) {
            this.writeBuffer = [];
        }
        for(const t = this.writeBuffer.splice(0, 300); t.length > 0;){
            const i = t.shift();
            if (this._xoffSentToCatchUp && t.length === 0 && this.writeBuffer.length === 0) {
                this.handler(C0.DC1);
                this._xoffSentToCatchUp = false;
            }
            this._refreshStart = this.buffer.y;
            this._refreshEnd = this.buffer.y;
            this._inputHandler.parse(i);
            this.updateRange(this.buffer.y);
            this.refresh(this._refreshStart, this._refreshEnd);
        }
        if (this.writeBuffer.length > 0) {
            setTimeout(()=>_this._innerWrite(), 0);
        } else {
            this._writeInProgress = false;
        }
    };
    t.prototype.writeln = function(e) {
        this.write(`${e}\r\n`);
    };
    t.prototype.attachCustomKeyEventHandler = function(e) {
        this._customKeyEventHandler = e;
    };
    t.prototype.registerLinkMatcher = function(e, t, i) {
        const r = this.linkifier.registerLinkMatcher(e, t, i);
        this.refresh(0, this.rows - 1);
        return r;
    };
    t.prototype.deregisterLinkMatcher = function(e) {
        if (this.linkifier.deregisterLinkMatcher(e)) {
            this.refresh(0, this.rows - 1);
        }
    };
    t.prototype.registerCharacterJoiner = function(e) {
        const t = this.renderer.registerCharacterJoiner(e);
        this.refresh(0, this.rows - 1);
        return t;
    };
    t.prototype.deregisterCharacterJoiner = function(e) {
        if (this.renderer.deregisterCharacterJoiner(e)) {
            this.refresh(0, this.rows - 1);
        }
    };
    Object.defineProperty(t.prototype, "markers", {
        get: function() {
            return this.buffer.markers;
        },
        enumerable: true,
        configurable: true
    });
    t.prototype.addMarker = function(e) {
        if (this.buffer === this.buffers.normal) {
            return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e);
        }
    };
    t.prototype.hasSelection = function() {
        return !!this.selectionManager && this.selectionManager.hasSelection;
    };
    t.prototype.getSelection = function() {
        if (this.selectionManager) {
            return this.selectionManager.selectionText;
        }
        return "";
    };
    t.prototype.clearSelection = function() {
        if (this.selectionManager) {
            this.selectionManager.clearSelection();
        }
    };
    t.prototype.selectAll = function() {
        if (this.selectionManager) {
            this.selectionManager.selectAll();
        }
    };
    t.prototype.selectLines = function(e, t) {
        if (this.selectionManager) {
            this.selectionManager.selectLines(e, t);
        }
    };
    t.prototype._keyDown = function(e) {
        if (this._customKeyEventHandler && this._customKeyEventHandler(e) === false) {
            return false;
        }
        if (!this._compositionHelper.keydown(e)) {
            if (this.buffer.ybase !== this.buffer.ydisp) {
                this.scrollToBottom();
            }
            return false;
        }
        const t = evaluateKeyboardEvent(e, this.applicationCursor, this.browser.isMac, this.options.macOptionIsMeta);
        this.updateCursorStyle(e);
        if (t.type === 3 || t.type === 2) {
            const i = this.rows - 1;
            this.scrollLines(t.type === 2 ? -i : i);
            return this.cancel(e, true);
        }
        if (t.type === 1) {
            this.selectAll();
        }
        return !!this._isThirdLevelShift(this.browser, e) || (t.cancel && this.cancel(e, true), !t.key || (this.emit("keydown", e), this.emit("key", t.key, e), this.showCursor(), this.handler(t.key), this.cancel(e, true)));
    };
    t.prototype._isThirdLevelShift = function(e, t) {
        const i = e.isMac && !this.options.macOptionIsMeta && t.altKey && !t.ctrlKey && !t.metaKey || e.isMSWindows && t.altKey && t.ctrlKey && !t.metaKey;
        if (t.type === "keypress") {
            return i;
        }
        return i && (!t.keyCode || t.keyCode > 47);
    };
    t.prototype.setgLevel = function(e) {
        this.glevel = e;
        this.charset = this.charsets[e];
    };
    t.prototype.setgCharset = function(e, t) {
        this.charsets[e] = t;
        if (this.glevel === e) {
            this.charset = t;
        }
    };
    t.prototype._keyUp = function(e) {
        this.updateCursorStyle(e);
    };
    t.prototype._keyPress = function(e) {
        let t;
        if (this._customKeyEventHandler && this._customKeyEventHandler(e) === false) {
            return false;
        }
        this.cancel(e);
        if (e.charCode) {
            t = e.charCode;
        } else if (e.which === null || e.which === undefined) {
            t = e.keyCode;
        } else {
            if (e.which === 0 || e.charCode === 0) {
                return false;
            }
            t = e.which;
        }
        return !(!t || (e.altKey || e.ctrlKey || e.metaKey) && !this._isThirdLevelShift(this.browser, e) || (t = String.fromCharCode(t), this.emit("keypress", t, e), this.emit("key", t, e), this.showCursor(), this.handler(t), 0));
    };
    t.prototype.bell = function() {
        const _this = this;
        this.emit("bell");
        if (this._soundBell()) {
            this.soundManager.playBellSound();
        }
        if (this._visualBell()) {
            this.element.classList.add("visual-bell-active");
            clearTimeout(this._visualBellTimer);
            this._visualBellTimer = window.setTimeout(function() {
                _this.element.classList.remove("visual-bell-active");
            }, 200);
        }
    };
    t.prototype.log = function(e, t) {
        if (this.options.debug && this._context.console && this._context.console.log) {
            this._context.console.log(e, t);
        }
    };
    t.prototype.error = function(e, t) {
        if (this.options.debug && this._context.console && this._context.console.error) {
            this._context.console.error(e, t);
        }
    };
    t.prototype.resize = function(cols, rows) {
        if (!(isNaN(cols) || isNaN(rows))) {
            if (cols !== this.cols || rows !== this.rows) {
                if (cols < 1) {
                    cols = 1;
                }
                if (rows < 1) {
                    rows = 1;
                }
                this.buffers.resize(cols, rows);
                this.cols = cols;
                this.rows = rows;
                this.buffers.setupTabStops(this.cols);
                if (this.charMeasure) {
                    this.charMeasure.measure(this.options);
                }
                this.refresh(0, this.rows - 1);
                this.emit("resize", {
                    cols,
                    rows
                });
            } else if (!(!this.charMeasure || this.charMeasure.width && this.charMeasure.height)) {
                this.charMeasure.measure(this.options);
            }
        }
    };
    t.prototype.updateRange = function(e) {
        if (e < this._refreshStart) {
            this._refreshStart = e;
        }
        if (e > this._refreshEnd) {
            this._refreshEnd = e;
        }
    };
    t.prototype.maxRange = function() {
        this._refreshStart = 0;
        this._refreshEnd = this.rows - 1;
    };
    t.prototype.clear = function() {
        if (this.buffer.ybase !== 0 || this.buffer.y !== 0) {
            this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y));
            this.buffer.lines.length = 1;
            this.buffer.ydisp = 0;
            this.buffer.ybase = 0;
            this.buffer.y = 0;
            for(let e = 1; e < this.rows; e++){
                this.buffer.lines.push(BufferLine.blankLine(this.cols, DEFAULT_ATTR));
            }
            this.refresh(0, this.rows - 1);
            this.emit("scroll", this.buffer.ydisp);
        }
    };
    t.prototype.ch = function(e) {
        if (e) {
            return [
                this.eraseAttr(),
                NULL_CELL_CHAR,
                NULL_CELL_WIDTH,
                NULL_CELL_CODE
            ];
        }
        return [
            DEFAULT_ATTR,
            NULL_CELL_CHAR,
            NULL_CELL_WIDTH,
            NULL_CELL_CODE
        ];
    };
    t.prototype.is = function(e) {
        return `${this.options.termName}`.indexOf(e) === 0;
    };
    t.prototype.handler = function(e) {
        if (!this.options.disableStdin) {
            if (this.selectionManager && this.selectionManager.hasSelection) {
                this.selectionManager.clearSelection();
            }
            if (this.buffer.ybase !== this.buffer.ydisp) {
                this.scrollToBottom();
            }
            this.emit("data", e);
        }
    };
    t.prototype.handleTitle = function(e) {
        this.emit("title", e);
    };
    t.prototype.index = function() {
        this.buffer.y++;
        if (this.buffer.y > this.buffer.scrollBottom) {
            this.buffer.y--;
            this.scroll();
        }
        if (this.buffer.x >= this.cols) {
            this.buffer.x--;
        }
    };
    t.prototype.reverseIndex = function() {
        if (this.buffer.y === this.buffer.scrollTop) {
            const e = this.buffer.scrollBottom - this.buffer.scrollTop;
            this.buffer.lines.shiftElements(this.buffer.y + this.buffer.ybase, e, 1);
            this.buffer.lines.set(this.buffer.y + this.buffer.ybase, BufferLine.blankLine(this.cols, this.eraseAttr()));
            this.updateRange(this.buffer.scrollTop);
            this.updateRange(this.buffer.scrollBottom);
        } else {
            this.buffer.y--;
        }
    };
    t.prototype.reset = function() {
        this.options.rows = this.rows;
        this.options.cols = this.cols;
        const _customKeyEventHandler = this._customKeyEventHandler;
        const _inputHandler = this._inputHandler;
        const cursorState = this.cursorState;
        this._setup();
        this._customKeyEventHandler = _customKeyEventHandler;
        this._inputHandler = _inputHandler;
        this.cursorState = cursorState;
        this.refresh(0, this.rows - 1);
        if (this.viewport) {
            this.viewport.syncScrollArea();
        }
    };
    t.prototype.tabSet = function() {
        this.buffer.tabs[this.buffer.x] = true;
    };
    t.prototype.cancel = function(e, t) {
        if (this.options.cancelEvents || t) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    };
    t.prototype.matchColor = function(e, t, i) {
        const r = e << 16 | t << 8 | i;
        if (I[r] !== null && I[r] !== undefined) {
            return I[r];
        }
        let n;
        let s;
        let o = Infinity;
        let a = -1;
        for(let l = 0; l < DEFAULT_ANSI_COLORS.length; l++){
            if ((s = B(e, t, i, (n = DEFAULT_ANSI_COLORS[l].rgba) >>> 24, n >>> 16 & 255, n >>> 8 & 255)) === 0) {
                a = l;
                break;
            }
            if (s < o) {
                o = s;
                a = l;
            }
        }
        return I[r] = a;
    };
    t.prototype._visualBell = function() {
        return false;
    };
    t.prototype._soundBell = function() {
        return this.options.bellStyle === "sound";
    };
    return t;
})(EventEmitter);
var I = {};
function B(e, t, i, r, n, s) {
    return (30 * (e - r)) ** 2 + (59 * (t - n)) ** 2 + (11 * (i - s)) ** 2;
}
