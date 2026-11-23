import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module1514 from "./module-1514.js";
import debounce from "./module-2166.js";
import throttle from "./module-2167.js";
const i = module553;
const f = {
    debounce,
    throttle
};
const style = {
    position: "absolute",
    width: 0,
    height: 0,
    visibility: "hidden",
    display: "none"
};
class p extends module553.PureComponent {
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
        n.createResizeObserver = function(e) {
            const n_props = n.props;
            const { handleWidth, handleHeight, onResize } = n_props;
            e.forEach(({ contentRect })=>{
                const { width, height } = contentRect;
                const u = handleWidth && n.width !== width;
                const s = handleHeight && n.height !== height;
                if (!(n.skipOnMount || !u && !s)) {
                    onResize(width, height);
                }
                n.width = width;
                n.height = height;
                n.skipOnMount = false;
            });
        };
        var r = e.skipOnMount;
        var o = e.refreshMode;
        var i = e.refreshRate;
        n.width = undefined;
        n.height = undefined;
        n.skipOnMount = r;
        var a = f[o] && f[o](n.createResizeObserver, i) || n.createResizeObserver;
        n.ro = new module1514(a);
        return n;
    }
    componentDidMount() {
        const resizableElementId = this.props.resizableElementId;
        const t = resizableElementId ? document.getElementById(resizableElementId) : this.el.parentElement;
        this.ro.observe(t);
    }
    componentWillUnmount() {
        const resizableElementId = this.props.resizableElementId;
        const t = resizableElementId ? document.getElementById(resizableElementId) : this.el.parentElement;
        this.ro.unobserve(t);
    }
    render() {
        const _this = this;
        return <div style={style} ref={function(t) {
            _this.el = t;
        }}/>;
    }
}
export default p;
p.propTypes = {
    handleWidth: module1.bool,
    handleHeight: module1.bool,
    skipOnMount: module1.bool,
    refreshRate: module1.number,
    refreshMode: module1.string,
    resizableElementId: module1.string,
    onResize: module1.func
};
p.defaultProps = {
    handleWidth: false,
    handleHeight: false,
    skipOnMount: false,
    refreshRate: 1000,
    refreshMode: undefined,
    resizableElementId: "",
    onResize: function(e) {
        return e;
    }
};
