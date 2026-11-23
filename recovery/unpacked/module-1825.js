import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
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
import module63 from "./module-63.js";
import { inject } from "./module-239.js";
import Module790 from "./module-790.js";
import Module3898 from "./module-3898.js";
import module1826 from "./module-1826.js";
let l;
let u;
let o;
const S = inject("projectStore")((o = u = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
    })(r);
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.getVolumeMounts = function(t) {
            const containers = e.props.containers;
            const r = [];
            containers.forEach((e)=>{
                if (!module63(e.volumeMounts)) {
                    e.volumeMounts.forEach((a)=>{
                        if (a.name === t.mountName) {
                            r.push({
                                ...a,
                                containerName: e.name,
                                accessMode: a.readOnly ? "read-only" : "read-write"
                            });
                        }
                    });
                }
            });
            return r;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const props = this.props;
                const { volumes, match, isEdgeWize } = props;
                if (module63(volumes)) {
                    return null;
                }
                return volumes.map((volume, key)=>{
                    volume.volumeMounts = _this.getVolumeMounts(volume);
                    return <Module3898 isEdgeWize={isEdgeWize} key={key} volume={volume} match={match} isMultiProject={_this.isMultiProject}/>;
                });
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const title = this.props.title || t("VOLUME_PL");
                return <Module790 className={className} title={title}><div className={module1826.wrapper}>{this.renderContent()}</div></Module790>;
            }
        },
        {
            key: "isMultiProject",
            get: function() {
                return this.props.projectStore.detail.isFedManaged;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    isEdgeWize: module1.bool,
    className: module1.string,
    title: module1.string,
    volumes: module1.array,
    containers: module1.array,
    loading: module1.bool
}, u.defaultProps = {
    isEdgeWize: false,
    volumes: [],
    containers: [],
    loading: true
}, l = o)) || l;
export default S;
