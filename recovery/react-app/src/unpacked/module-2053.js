import { Component } from "unpacked/module-553.js";
import module2054 from "unpacked/module-2054.js";
import module1 from "unpacked/module-1.js";
class c extends Component {
    constructor(...a_1){
        super(...a_1);
        var _this = this;
        this.state = {
            elementId: this.props.elementId || module2054()
        };
        this.clickInput = function() {
            const e = document.getElementById(_this.state.elementId);
            e.value = "";
            e.click();
        };
        this.handleFiles = function(e) {
            if (_this.props.base64) {
                _this.convertFilesToBase64(e.target.files);
            } else {
                _this.props.handleFiles(e.target.files);
            }
        };
        this.convertFilesToBase64 = function(e) {
            const fileList = e;
            if (_this.props.multipleFiles) {
                let n;
                let o;
                (()=>{
                    const e = {
                        base64: [],
                        fileList
                    };
                    const i = ()=>{
                        const fileReader = new FileReader;
                        const i = fileList[n];
                        fileReader.onloadend = function(n) {
                            e.base64.push(fileReader.result);
                            if (e.base64.length === fileList.length) {
                                _this.props.handleFiles(e);
                            }
                        };
                        fileReader.readAsDataURL(i);
                    };
                    n = 0;
                    for(o = fileList.length; n < o; n++){
                        i();
                    }
                })();
            } else {
                const i = {
                    base64: "",
                    fileList
                };
                const a = fileList[0];
                const l = new FileReader;
                l.onloadend = function(e) {
                    i.base64 = l.result;
                    _this.props.handleFiles(i);
                };
                l.readAsDataURL(a);
            }
        };
    }
    render() {
        return <div className="react-file-reader"><input type="file" onChange={this.handleFiles} accept={Array.isArray(this.props.fileTypes) ? this.props.fileTypes.join(",") : this.props.fileTypes} className="react-file-reader-input" id={this.state.elementId} multiple={this.props.multipleFiles} style={{
            width: "0px",
            opacity: "0",
            position: "fixed"
        }} disabled={this.props.disabled}/><div className="react-file-reader-button" onClick={this.clickInput}>{this.props.children}</div></div>;
    }
}
export default c;
c.defaultProps = {
    fileTypes: "image/*",
    multipleFiles: false,
    base64: false,
    disabled: false
};
c.propTypes = {
    multipleFiles: module1.bool,
    handleFiles: module1.func.isRequired,
    fileTypes: module1.oneOfType([
        module1.string,
        module1.array
    ]),
    base64: module1.bool,
    children: module1.element.isRequired,
    disabled: module1.bool
};
