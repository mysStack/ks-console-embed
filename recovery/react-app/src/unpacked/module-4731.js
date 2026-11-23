import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import Module790 from "components/Base/Panel";
import Module4732 from "unpacked/module-4732.js";
let n;
const m = inject("detailStore", "historyStore")(n = observer(n = ((Component_1)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.state = {
            expandItem: ""
        };
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, namespace, name } = params;
            e.historyStore.fetchList({
                cluster,
                namespace,
                labelSelector: `springcloud.kubesphere.io/configuration.name=${name}`
            });
        };
        e.handleExpand = function(t) {
            e.setState(function(e) {
                return {
                    expandItem: e.expandItem === t ? "" : t
                };
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const data = this.historyStore.list.data;
                const expandItem = this.state.expandItem;
                return <Module790>{data.map((detail, index)=><Module4732 key={detail.uid} index={index} detail={detail} isExpand={expandItem === detail.uid} onExpand={_this.handleExpand}/>)}</Module790>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "historyStore",
            get: function() {
                return this.props.historyStore;
            }
        }
    ]);
    return a;
})(Component)) || n) || n;
export default m;
