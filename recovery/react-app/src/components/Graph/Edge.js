import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-86.js";
import "unpacked/module-87.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module159 from "unpacked/module-159.js";
import module4754 from "unpacked/module-4754.js";
const v = ((Component_1)=>{
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
        r.handleMouseover = function() {
            const data = r.props.data;
            document.getElementById(data.data.id).classList.add(module4754.selected);
        };
        r.handleMouseout = function() {
            const data = r.props.data;
            document.getElementById(data.data.id).classList.remove(module4754.selected);
        };
        r.getStatus = function() {
            const data = r.props.data;
            const t = module26(data, "data.traffic");
            if (!t || !t.rates) {
                return "nodata";
            }
            if (t.rates.tcp > 0) {
                return "tcpActive";
            }
            let a = 0;
            let n = 0;
            if (t.rates.http > 0) {
                a = Number(t.rates.http);
                n = t.rates.httpPercentErr > 0 ? Number(t.rates.httpPercentErr) : 0;
            } else if (t.rates.grpc > 0) {
                a = Number(t.rates.grpc);
                n = t.rates.grpcPercentErr > 0 ? Number(t.rates.grpcPercentErr) : 0;
            }
            if (a === 0) {
                return "nodata";
            }
            if (n > 20) {
                return "error";
            }
            if (n > 0.1) {
                return "degrade";
            }
            return "active";
        };
        r.getPath = function() {
            let e;
            const data = r.props.data;
            if (data.position.points.length <= 2) {
                const a = module96(data.position.points, 2);
                const n = a[0];
                const u = a[1];
                const o = (n.x + u.x) / 2;
                const i = (u.y - n.y) / 4;
                e = `M${n.x},${n.y} C${o},${n.y + i} ${o},${u.y - i} ${u.x},${u.y}`;
            } else {
                e = data.position.points.reduce((acc, point)=>{
                    if (acc === "") {
                        return `M${point.x},${point.y}`;
                    }
                    if (acc.indexOf("C") !== -1) {
                        return `${acc}, ${point.x} ${point.y}`;
                    }
                    return `${acc} C${point.x} ${point.y}`;
                }, "");
            }
            return e;
        };
        r.hoverRef = createRef();
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.hoverRef.current) {
                    this.hoverRef.current.addEventListener("mouseover", this.handleMouseover);
                    this.hoverRef.current.addEventListener("mouseout", this.handleMouseout);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.hoverRef.current) {
                    this.hoverRef.current.removeEventListener("mouseover", this.handleMouseover);
                    this.hoverRef.current.removeEventListener("mouseout", this.handleMouseout);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, selected } = props;
                const d_1 = this.getPath();
                const l = this.getStatus();
                const u = module3(module4754.path, module4754[l], module31({}, module4754.selected, selected));
                const o = module3(module4754.marker, module4754[l]);
                return <g><defs><marker id={`triangle-${l}`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" className={o}/></marker><marker id={`dot-${l}`} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"><circle cx="5" cy="5" r="5" className={o}/></marker></defs><path className={u} id={data.data.id} d={d_1} markerStart={`url(#dot-${l})`} markerEnd={`url(#triangle-${l})`}/><path ref={this.hoverRef} d={d_1} fill="none" stroke="transparent" strokeWidth="30"/>{[
                    "active",
                    "tcpActive"
                ].includes(l) && <circle r="6" className={o}><animateMotion dur="6s" repeatCount="indefinite"><mpath xlinkHref={`#${data.data.id}`}/></animateMotion></circle>}<text width="500" className={o} transform="translate(0 -20)"><textPath xlinkHref={`#${data.data.id}`} startOffset="50%" textAnchor="middle">{this.traffic}</textPath></text></g>;
            }
        },
        {
            key: "traffic",
            get: function() {
                const data = this.props.data;
                const t = module26(data, "data.traffic");
                const a = module26(t, "rates.tcp");
                if (!module159(a)) {
                    return `${a} B/s`;
                }
                const r = module26(t, "rates.http", 0);
                return `${r} RPS`;
            }
        }
    ]);
    return a;
})(Component);
export default v;
