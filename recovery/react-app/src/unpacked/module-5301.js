import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import * as module2008 from "unpacked/module-2008.js";
import module5304 from "unpacked/module-5304.js";
let n;
const o = this && this.__extends || (n = function(e, t) {
    return (n = Object.setPrototypeOf || ({
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
    n(e, t);
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i);
});
const l = ((Component_1)=>{
    function t(t) {
        const i = Component_1.call(this, t) || this;
        i.state = {
            value: i.props.value
        };
        i.onChange = i.onChange.bind(i);
        i.diff = i.diff.bind(i);
        return i;
    }
    o(t, Component_1);
    t.prototype.componentDidUpdate = function() {
        const value = this.props.value;
        if (value !== this.state.value) {
            this.setState({
                value
            });
        }
    };
    t.prototype.onChange = function(e) {
        this.setState({
            value: e
        });
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };
    t.prototype.diff = function() {
        const e = new module5304;
        const t = this.state.value[0];
        const i = this.state.value[1];
        if (t.length === 0 && i.length === 0) {
            return [];
        }
        const n = e.diff_main(t, i);
        e.diff_cleanupSemantic(n);
        const o = this.generateDiffedLines(n);
        return this.setCodeMarkers(o);
    };
    t.prototype.generateDiffedLines = function(e) {
        const t = {
            left: [],
            right: []
        };
        const i = {
            left: 1,
            right: 1
        };
        e.forEach(([n, o])=>{
            let s = o.split("\n").length - 1;
            if (o.length !== 0) {
                const r = o[0];
                const a = o[o.length - 1];
                let c = 0;
                switch(n){
                    case 0:
                        i.left += s;
                        i.right += s;
                        break;
                    case -1:
                        if (r === "\n") {
                            i.left++;
                            s--;
                        }
                        if ((c = s) === 0) {
                            t.right.push({
                                startLine: i.right,
                                endLine: i.right
                            });
                        }
                        if (a === "\n") {
                            c -= 1;
                        }
                        t.left.push({
                            startLine: i.left,
                            endLine: i.left + c
                        });
                        i.left += s;
                        break;
                    case 1:
                        if (r === "\n") {
                            i.right++;
                            s--;
                        }
                        if ((c = s) === 0) {
                            t.left.push({
                                startLine: i.left,
                                endLine: i.left
                            });
                        }
                        if (a === "\n") {
                            c -= 1;
                        }
                        t.right.push({
                            startLine: i.right,
                            endLine: i.right + c
                        });
                        i.right += s;
                        break;
                    default:
                        throw new Error("Diff type was not defined.");
                }
            }
        });
        return t;
    };
    t.prototype.setCodeMarkers = function(e = {
        left: [],
        right: []
    }) {
        const t = [];
        const i = {
            left: [],
            right: []
        };
        for(var n = 0; n < e.left.length; n++){
            var o = {
                startRow: e.left[n].startLine - 1,
                endRow: e.left[n].endLine,
                type: "text",
                className: "codeMarker"
            };
            i.left.push(o);
        }
        for(n = 0; n < e.right.length; n++){
            o = {
                startRow: e.right[n].startLine - 1,
                endRow: e.right[n].endLine,
                type: "text",
                className: "codeMarker"
            };
            i.right.push(o);
        }
        t[0] = i.left;
        t[1] = i.right;
        return t;
    };
    t.prototype.render = function() {
        const markers = this.diff();
        return <module2008.default name={this.props.name} className={this.props.className} focus={this.props.focus} orientation={this.props.orientation} splits={this.props.splits} mode={this.props.mode} theme={this.props.theme} height={this.props.height} width={this.props.width} fontSize={this.props.fontSize} showGutter={this.props.showGutter} onChange={this.onChange} onPaste={this.props.onPaste} onLoad={this.props.onLoad} onScroll={this.props.onScroll} minLines={this.props.minLines} maxLines={this.props.maxLines} readOnly={this.props.readOnly} highlightActiveLine={this.props.highlightActiveLine} showPrintMargin={this.props.showPrintMargin} tabSize={this.props.tabSize} cursorStart={this.props.cursorStart} editorProps={this.props.editorProps} style={this.props.style} scrollMargin={this.props.scrollMargin} setOptions={this.props.setOptions} wrapEnabled={this.props.wrapEnabled} enableBasicAutocompletion={this.props.enableBasicAutocompletion} enableLiveAutocompletion={this.props.enableLiveAutocompletion} value={this.state.value} markers={markers}/>;
    };
    t.propTypes = {
        cursorStart: module1.number,
        editorProps: module1.object,
        enableBasicAutocompletion: module1.bool,
        enableLiveAutocompletion: module1.bool,
        focus: module1.bool,
        fontSize: module1.number,
        height: module1.string,
        highlightActiveLine: module1.bool,
        maxLines: module1.number,
        minLines: module1.number,
        mode: module1.string,
        name: module1.string,
        className: module1.string,
        onLoad: module1.func,
        onPaste: module1.func,
        onScroll: module1.func,
        onChange: module1.func,
        orientation: module1.string,
        readOnly: module1.bool,
        scrollMargin: module1.array,
        setOptions: module1.object,
        showGutter: module1.bool,
        showPrintMargin: module1.bool,
        splits: module1.number,
        style: module1.object,
        tabSize: module1.number,
        theme: module1.string,
        value: module1.array,
        width: module1.string,
        wrapEnabled: module1.bool
    };
    t.defaultProps = {
        cursorStart: 1,
        editorProps: {},
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        focus: false,
        fontSize: 12,
        height: "500px",
        highlightActiveLine: true,
        maxLines: null,
        minLines: null,
        mode: "",
        name: "ace-editor",
        onLoad: null,
        onScroll: null,
        onPaste: null,
        onChange: null,
        orientation: "beside",
        readOnly: false,
        scrollMargin: [
            0,
            0,
            0,
            0
        ],
        setOptions: {},
        showGutter: true,
        showPrintMargin: true,
        splits: 2,
        style: {},
        tabSize: 4,
        theme: "github",
        value: [
            "",
            ""
        ],
        width: "500px",
        wrapEnabled: true
    };
    return t;
})(Component);
export default l;
