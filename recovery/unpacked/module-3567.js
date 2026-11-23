import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module96 from "./module-96.js";
import "./module-58.js";
import module186 from "./module-186.js";
import { observer, useLocalStore } from "./module-239.js";
import * as module553 from "./module-553.js";
import module908 from "./module-908.js";
import module241 from "./module-241.js";
import module14 from "./module-14.js";
const g = observer(function({ onChange, ...rest }) {
    const r = useLocalStore(function() {
        return new module908;
    });
    const n = module553.useState([]);
    const u = module96(n, 2);
    const options = u[0];
    const g = u[1];
    const onFetch = async function() {
        let t;
        let a;
        const n = arguments;
        t = n.length > 0 && n[0] !== undefined ? n[0] : {};
        await r.fetchList({
            ...t,
            status: "available"
        });
        a = r.list.data.map((e)=>({
                label: e.name,
                value: e.name
            }));
        g(a);
    };
    module553.useEffect(function() {
        onFetch();
    }, []);
    const r_list = r.list;
    return module553.default.createElement(module186.Select, {
        pagination: module241(r_list, [
            "page",
            "limit",
            "total"
        ]),
        isLoading: r_list.isLoading,
        onChange: function(e) {
            if (e) {
                const a = r.list.data.find((t)=>t.name === e);
                onChange(e, module14.toJS(a));
            } else {
                onChange(e);
            }
        },
        options,
        onFetch,
        searchable: true,
        clearable: true,
        ...rest
    });
});
export default g;
