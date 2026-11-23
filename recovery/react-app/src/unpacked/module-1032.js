import module844 from "unpacked/module-844.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module2135 from "unpacked/module-2135.js";
import module3 from "unpacked/module-3.js";
import { isNumOrStr, isNumber } from "unpacked/module-827.js";
import { PRESENTATION_ATTRIBUTES, filterEventAttributes, getPresentationAttributes, isSsr } from "unpacked/module-810.js";
import { getStringSize } from "unpacked/module-1276.js";
function f() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    f = function() {
        return weakMap;
    };
    return weakMap;
}
function p(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
function h(e, t, n) {
    if (t in e) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        e[t] = n;
    }
    return e;
}
function v(e) {
    return (v = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function y(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function m(e) {
    return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function b(e, t) {
    return (b = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const x = /[ \f\n\r\t\v\u2028\u2029]+/;
const w = ((e)=>{
    function t(e) {
        let n;
        ((e, t)=>{
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        })(this, t);
        n = ((e, t)=>{
            if (!t || v(t) !== "object" && typeof t !== "function") {
                return ((e)=>{
                    if (e === undefined) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return e;
                })(e);
            }
            return t;
        })(this, m(t).call(this, e));
        n.getWordsWithoutCalculate = function(e) {
            return [
                {
                    words: module844(e.children) ? [] : e.children.toString().split(x)
                }
            ];
        };
        n.state = {
            wordsByLines: n.getWordsByLines(e, true)
        };
        return n;
    }
    let n;
    let i;
    ((e, t)=>{
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: true,
                configurable: true
            }
        });
        if (t) {
            b(e, t);
        }
    })(t, e);
    n = t;
    if (i = [
        {
            key: "componentDidMount",
            value: function() {
                this.updateWordsByLines(this.props, true);
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.width !== this.props.width || e.scaleToFit !== this.props.scaleToFit || e.children !== this.props.children || e.style !== this.props.style) {
                    const t = this.props.children !== e.children || this.props.style !== e.style;
                    this.updateWordsByLines(this.props, t);
                }
            }
        },
        {
            key: "updateWordsByLines",
            value: function(e, t) {
                this.setState({
                    wordsByLines: this.getWordsByLines(e, t)
                });
            }
        },
        {
            key: "getWordsByLines",
            value: function(e, t) {
                if ((e.width || e.scaleToFit) && !isSsr()) {
                    if (t) {
                        const n = ((e)=>{
                            try {
                                return {
                                    wordsWithComputedWidth: (module844(e.children) ? [] : e.children.toString().split(x)).map((word)=>({
                                            word,
                                            width: getStringSize(word, e.style).width
                                        })),
                                    spaceWidth: getStringSize(" ", e.style).width
                                };
                            } catch (e) {
                                return null;
                            }
                        })(e);
                        if (!n) {
                            return this.getWordsWithoutCalculate(e);
                        }
                        const { wordsWithComputedWidth, spaceWidth } = n;
                        this.wordsWithComputedWidth = wordsWithComputedWidth;
                        this.spaceWidth = spaceWidth;
                    }
                    return this.calculateWordsByLines(this.wordsWithComputedWidth, this.spaceWidth, e.width);
                }
                return this.getWordsWithoutCalculate(e);
            }
        },
        {
            key: "calculateWordsByLines",
            value: function(e, t, n) {
                const scaleToFit = this.props.scaleToFit;
                return (e || []).reduce((acc, { word, width })=>{
                    const l = acc[acc.length - 1];
                    if (l && (n == null || scaleToFit || l.width + width + t < n)) {
                        l.words.push(word);
                        l.width += width + t;
                    } else {
                        const u = {
                            words: [
                                word
                            ],
                            width
                        };
                        acc.push(u);
                    }
                    return acc;
                }, []);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { dx, dy, textAnchor, verticalAnchor, scaleToFit, angle, lineHeight, capHeight, className, ...rest } = props;
                const wordsByLines = this.state.wordsByLines;
                if (!isNumOrStr(rest.x) || !isNumOrStr(rest.y)) {
                    return null;
                }
                let m;
                const x_1 = rest.x + (isNumber(dx) ? dx : 0);
                const y_1 = rest.y + (isNumber(dy) ? dy : 0);
                switch(verticalAnchor){
                    case "start":
                        m = module2135(`calc(${capHeight})`);
                        break;
                    case "middle":
                        m = module2135(`calc(${(wordsByLines.length - 1) / 2} * -${lineHeight} + (${capHeight} / 2))`);
                        break;
                    default:
                        m = module2135(`calc(${wordsByLines.length - 1} * -${lineHeight})`);
                }
                const w = [];
                if (scaleToFit) {
                    const _ = wordsByLines[0].width;
                    w.push(`scale(${this.props.width / _})`);
                }
                if (angle) {
                    w.push(`rotate(${angle}, ${x_1}, ${y_1})`);
                }
                if (w.length) {
                    rest.transform = w.join(" ");
                }
                return module553.default.createElement("text", {
                    ...getPresentationAttributes(rest),
                    ...filterEventAttributes(rest),
                    x: x_1,
                    y: y_1,
                    className: module3("recharts-text", className),
                    textAnchor
                }, wordsByLines.map((e, t)=>module553.default.createElement("tspan", {
                        x: x_1,
                        dy: t === 0 ? m : lineHeight,
                        key: t
                    }, e.words.join(" "))));
            }
        }
    ]) {
        y(n.prototype, i);
    }
    return t;
})(module553.Component);
w.propTypes = {
    ...PRESENTATION_ATTRIBUTES,
    scaleToFit: module1.bool,
    angle: module1.number,
    textAnchor: module1.oneOf([
        "start",
        "middle",
        "end",
        "inherit"
    ]),
    verticalAnchor: module1.oneOf([
        "start",
        "middle",
        "end"
    ]),
    style: module1.object
};
w.defaultProps = {
    x: 0,
    y: 0,
    lineHeight: "1em",
    capHeight: "0.71em",
    scaleToFit: false,
    textAnchor: "start",
    verticalAnchor: "end"
};
export default w;
