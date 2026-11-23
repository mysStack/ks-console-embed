import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module63 from "unpacked/module-63.js";
import { observer } from "unpacked/module-239.js";
import module839 from "stores/volume";
import Module790 from "components/Base/Panel";
import { joinSelector } from "utils/index";
import Module4749 from "pages/projects/components/Cards/Volumes/Item";
import module1913 from "unpacked/module-1913.js";
let o;
let c;
let s;
const S = observer((s = c = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.store = new module839;
        e.getData = function() {
            const e_props = e.props;
            const { selector, cluster, namespace } = e_props;
            if (!module63(selector)) {
                e.store.fetchListByK8s({
                    cluster,
                    namespace,
                    labelSelector: joinSelector(selector)
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "renderContent",
            value: function() {
                const prefix = this.props.prefix;
                const data = this.store.list.data;
                if (module63(data)) {
                    return null;
                }
                return <div className={module1913.content}>{data.map((volume, key)=><Module4749 key={key} volume={volume} prefix={prefix}/>)}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, title } = props;
                const n = this.renderContent();
                if (n) {
                    return <Module790 className={className} title={title || t("VOLUME_PL")}>{n}</Module790>;
                }
                return null;
            }
        }
    ]);
    return r;
})(Component), c.propTypes = {
    className: module1.string,
    title: module1.string,
    selector: module1.object
}, c.defaultProps = {
    className: ""
}, o = s)) || o;
export default S;
