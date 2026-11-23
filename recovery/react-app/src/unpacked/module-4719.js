import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import Module790 from "components/Base/Panel";
import module1026 from "unpacked/module-1026.js";
import Module4720 from "unpacked/module-4720.js";
import module1910 from "unpacked/module-1910.js";
let l;
const R = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
        e.store = new module1026;
        e.detailStore = e.props.detailStore;
        e.state = {
            enabled: e.detailStore.detail.enabled
        };
        e.fetchData = async function t() {
            let a;
            let r;
            let n;
            let o;
            let cluster;
            let namespace;
            const i = arguments;
            a = i.length > 0 && i[0] !== undefined ? i[0] : {};
            r = e.props;
            n = r.detailStore.detail.name;
            o = r.match.params;
            cluster = o.cluster;
            namespace = o.namespace;
            await e.store.fetchList({
                cluster,
                namespace,
                labelSelector: `springcloud.kubesphere.io/app=${n}`,
                ...a
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                const enabled = this.detailStore.detail.enabled;
                if (enabled !== t.enabled) {
                    this.setState({
                        enabled
                    });
                    this.fetchData();
                }
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const data = this.store.list.data;
                return <div className={module1910.body}>{module63(data) ? <div className={module1910.empty}>{t("NO_INSTANCE_FOUND")}</div> : data.map((detail)=><Module4720 key={detail.podName} detail={detail} {..._this.props.match.params}/>)}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.store.list;
                const { data, isLoading } = list;
                return <Module790 className={module1910.main} title={t("INSTANCE_PL")} empty={t("NO_INSTANCE_FOUND")} isEmpty={module63(data)} loading={isLoading}>{this.renderContent()}</Module790>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default R;
