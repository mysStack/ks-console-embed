import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1977 from "unpacked/module-1977.js";
import Module4908 from "pages/projects/components/Cards/ImageArtifacts/Item";
let c;
const y = observer(c = ((e)=>{
    module55(a, e);
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
    function a(...o_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...o_1);
        e.fetchData = async function t() {
            let a;
            let r;
            let limit;
            let c;
            const s = arguments;
            a = s.length > 0 && s[0] !== undefined ? s[0] : {};
            r = e.props;
            limit = r.limit;
            c = r.params;
            c.status = "Successful";
            await e.store.fetchS2IRunRecords({
                limit,
                ...c,
                ...a
            });
            e.setAutoRefresh();
        };
        return e;
    }
    module37(a, [
        {
            key: "renderItem",
            value: function(runDetail) {
                const isLoading = this.store.list.isLoading;
                return <Module4908 key={runDetail.name} runDetail={runDetail} loading={isLoading} store={this.store}/>;
            }
        }
    ]);
    return a;
})(module1977)) || c;
export default y;
