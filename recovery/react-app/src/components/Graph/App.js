import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module321 from "unpacked/module-321.js";
import module857 from "unpacked/module-857.js";
import module3 from "unpacked/module-3.js";
import Module4756 from "components/Graph/Card";
import module4758 from "unpacked/module-4758.js";
const E = ((Component_1)=>{
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
        e.handleClick = function() {
            const data = e.props.data;
            e.context.onSelectApp(data, "app");
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { data, store } = props;
                const context = this.context;
                const { selectedData, selectedType } = context;
                if (!data.nodes) {
                    return null;
                }
                const c = module857(data.nodes, function(e) {
                    if (e.data.nodeType === "unknown") {
                        return "app";
                    }
                    return e.data.nodeType;
                });
                const inGroup = module26(c, "service.length") > 0;
                const d = module26(data, "health.workloadStatuses", []).reduce((acc, item)=>acc + (item.replicas || item.availableReplicas || 0), 0);
                const E = module26(data, "health.workloads", {});
                const b = module321(module26(data, "edges.inner", []), "data.target");
                return <div className="ks-app-component" onClick={inGroup ? this.handleClick : null} data-component={data.name} style={{
                    position: "absolute",
                    top: data.position.y,
                    left: data.position.x,
                    zIndex: 2
                }}>{inGroup && <p className={module4758.title}>{data.name}</p>}<div className={module3((e = {}, module31(e, module4758.group, inGroup), module31(e, module4758.selected, selectedType === "app" && selectedData.name === data.name), module31(e, module4758.error, module26(data, "health.requests.errorRatio") > 0 || module26(data, "health.service.requests.errorRatio") > 0), e))}>{inGroup && <p className={module4758.pods}><img src="/assets/health.svg" alt=""/>{t("PODS")}: {d}</p>}{c.service && c.service.map((e)=><div key={e.data.id} data-service={e.data.service} data-service-id={e.data.id}/>)}{c.app && c.app.map((e)=><Module4756 className={module4758.app} key={e.data.id} data={e.data} edge={b[e.data.id]} health={E[e.data.workload]} inGroup={inGroup} store={store}/>)}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.propTypes = {
    data: module1.object
};
E.contextTypes = {
    selectedData: module1.object,
    selectedType: module1.string,
    onSelectApp: module1.func
};
