import "unpacked/module-15.js";
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
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import Module1825 from "components/Cards/Volumes";
import { isEdgeWizePage } from "utils/index";
import Module3902 from "pages/projects/components/Cards/Probe";
import Module3904 from "pages/projects/components/Cards/Lifecycle";
let l;
const y = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "renderVolumes",
            value: function() {
                const containers = [
                    module14.toJS(this.store.detail)
                ];
                const volumes = module14.toJS(this.store.volumes);
                return <Module1825 isEdgeWize={this.isEdgeWize} title={t("VOLUME_PL")} volumes={volumes} containers={containers} loading={this.store.isLoading} match={this.props.match}/>;
            }
        },
        {
            key: "renderProb",
            value: function() {
                const e = module14.toJS(this.store.detail);
                const { livenessProbe, readinessProbe } = e;
                if (livenessProbe || readinessProbe) {
                    return <Module3902 isEdgeWizePage={this.isEdgeWize} detail={this.store.detail}/>;
                }
                return null;
            }
        },
        {
            key: "renderLife",
            value: function() {
                if (module14.toJS(this.store.detail).lifecycle) {
                    return <Module3904 isEdgeWizePage={this.isEdgeWize} detail={this.store.detail}/>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                return <div>{this.renderProb()}{this.renderLife()}{this.renderVolumes()}</div>;
            }
        },
        {
            key: "isEdgeWize",
            get: function() {
                return isEdgeWizePage();
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default y;
