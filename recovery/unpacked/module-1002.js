import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module2343 from "./module-2343.js";
import module186 from "./module-186.js";
import module2397 from "./module-2397.js";
function v(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const g = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.handleIFrameLoad = function() {
            r.iframeLoaded = true;
            r.setState({
                loading: false
            });
            r.updateMarkdown();
        };
        r.updateIFrame = function() {
            if (r.iframe) {
                r.iframe.style.height = `${r.iframe.contentWindow.document.body.scrollHeight + 16}px`;
            }
        };
        r.handleIFrameRef = function(e) {
            r.iframe = e;
        };
        r.iframeLoaded = false;
        r.md = new module2343({
            html: true,
            linkify: true,
            ...e.options
        });
        r.state = {
            loading: true
        };
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.iframe.addEventListener("load", this.handleIFrameLoad);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.iframe.removeEventListener("load", this.handleIFrameLoad);
                this.removeMediaListeners();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.options !== this.props.options) {
                    this.md = new module2343(this.props.options);
                }
                this.updateMarkdown();
            }
        },
        {
            key: "addMediaListeners",
            value: function() {
                const _this = this;
                const contentDocument = this.iframe.contentDocument;
                this.iframeMedias = contentDocument.querySelectorAll("img, video, audio");
                if (this.iframeMedias && this.iframeMedias.length > 0) {
                    Array.prototype.forEach.call(this.iframeMedias, function(t) {
                        t.removeEventListener("load", _this.updateIFrame);
                        t.addEventListener("load", _this.updateIFrame);
                    });
                }
            }
        },
        {
            key: "removeMediaListeners",
            value: function() {
                const _this = this;
                if (this.iframeMedias && this.iframeMedias.length > 0) {
                    Array.prototype.forEach.call(this.iframeMedias, function(t) {
                        t.removeEventListener("load", _this.updateIFrame);
                    });
                }
            }
        },
        {
            key: "updateMarkdown",
            value: function() {
                const contentDocument = this.iframe.contentDocument;
                if (this.iframeLoaded) {
                    contentDocument.body.innerHTML = this.md.render(this.props.source);
                    this.iframe.style.height = `${contentDocument.body.scrollHeight + 16}px`;
                }
                this.removeMediaListeners();
                this.addMediaListeners();
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                return <div>{this.state.loading && <module186.Loading className="loading"/>}<iframe className={module3(module2397.markdown, className)} ref={this.handleIFrameRef} src="/blank_md" name="frame_markdown" width="100%" frameBorder="0" scrolling="no"/></div>;
            }
        }
    ]);
    return a;
})(Component);
g.propTypes = {
    source: module1.string,
    options: module1.object
};
g.defaultProps = {
    source: "",
    options: {}
};
export default g;
