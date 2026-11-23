import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
const a = module553;
const style_1 = {
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    height: 0,
    overflow: "scroll",
    whiteSpace: "pre"
};
const c = [
    "extraWidth",
    "injectStyles",
    "inputClassName",
    "inputRef",
    "inputStyle",
    "minWidth",
    "onAutosize",
    "placeholderIsMinWidth"
];
const f = (e, t)=>{
    t.style.fontSize = e.fontSize;
    t.style.fontFamily = e.fontFamily;
    t.style.fontWeight = e.fontWeight;
    t.style.fontStyle = e.fontStyle;
    t.style.letterSpacing = e.letterSpacing;
    t.style.textTransform = e.textTransform;
};
const d = !(typeof window === "undefined" || !window.navigator) && /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent);
const p = ()=>{
    if (d) {
        return `_${Math.random().toString(36).substr(2, 12)}`;
    }
};
class h extends module553.Component {
    constructor(e){
        var n = ((e, t)=>{
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!t || typeof t !== "object" && typeof t !== "function") {
                return e;
            }
            return t;
        })(this, super(e));
        n.inputRef = function(e) {
            n.input = e;
            if (typeof n.props.inputRef === "function") {
                n.props.inputRef(e);
            }
        };
        n.placeHolderSizerRef = function(e) {
            n.placeHolderSizer = e;
        };
        n.sizerRef = function(e) {
            n.sizer = e;
        };
        n.state = {
            inputWidth: e.minWidth,
            inputId: e.id || p(),
            prevId: e.id
        };
        return n;
    }
    static getDerivedStateFromProps({ id }, t) {
        if (id !== t.prevId) {
            return {
                inputId: id || p(),
                prevId: id
            };
        }
        return null;
    }
    componentDidMount() {
        this.mounted = true;
        this.copyInputStyles();
        this.updateInputWidth();
    }
    componentDidUpdate(e, t) {
        if (t.inputWidth !== this.state.inputWidth && typeof this.props.onAutosize === "function") {
            this.props.onAutosize(this.state.inputWidth);
        }
        this.updateInputWidth();
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    copyInputStyles() {
        if (this.mounted && window.getComputedStyle) {
            const e = this.input && window.getComputedStyle(this.input);
            if (e) {
                f(e, this.sizer);
                if (this.placeHolderSizer) {
                    f(e, this.placeHolderSizer);
                }
            }
        }
    }
    updateInputWidth() {
        if (this.mounted && this.sizer && this.sizer.scrollWidth !== undefined) {
            let inputWidth;
            inputWidth = this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth) ? Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2 : this.sizer.scrollWidth + 2;
            if ((inputWidth += this.props.type === "number" && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0) < this.props.minWidth) {
                inputWidth = this.props.minWidth;
            }
            if (inputWidth !== this.state.inputWidth) {
                this.setState({
                    inputWidth
                });
            }
        }
    }
    getInput() {
        return this.input;
    }
    focus() {
        this.input.focus();
    }
    blur() {
        this.input.blur();
    }
    select() {
        this.input.select();
    }
    renderStyles() {
        const injectStyles = this.props.injectStyles;
        if (d && injectStyles) {
            return <style dangerouslySetInnerHTML={{
                __html: `input#${this.state.inputId}::-ms-clear {display: none;}`
            }}/>;
        }
        return null;
    }
    render() {
        const e = [
            this.props.defaultValue,
            this.props.value,
            ""
        ].reduce((acc, item)=>acc ?? item);
        const style = {
            ...this.props.style
        };
        if (!style.display) {
            style.display = "inline-block";
        }
        const n = {
            boxSizing: "content-box",
            width: `${this.state.inputWidth}px`,
            ...this.props.inputStyle
        };
        const { ...rest } = this.props;
        ((rest_1)=>{
            c.forEach((t)=>delete rest_1[t]);
        })(rest);
        rest.className = this.props.inputClassName;
        rest.id = this.state.inputId;
        rest.style = n;
        return <div className={this.props.className} style={style}>{this.renderStyles()}<input {...rest} ref={this.inputRef}/><div ref={this.sizerRef} style={style_1}>{e}</div>{this.props.placeholder ? <div ref={this.placeHolderSizerRef} style={style_1}>{this.props.placeholder}</div> : null}</div>;
    }
}
h.propTypes = {
    className: module1.string,
    defaultValue: module1.any,
    extraWidth: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    id: module1.string,
    injectStyles: module1.bool,
    inputClassName: module1.string,
    inputRef: module1.func,
    inputStyle: module1.object,
    minWidth: module1.oneOfType([
        module1.number,
        module1.string
    ]),
    onAutosize: module1.func,
    onChange: module1.func,
    placeholder: module1.string,
    placeholderIsMinWidth: module1.bool,
    style: module1.object,
    value: module1.any
};
h.defaultProps = {
    minWidth: 1,
    injectStyles: true
};
export default h;
