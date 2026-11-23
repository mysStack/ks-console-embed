import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
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
import "./module-41.js";
import "./module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "./module-553.js";
import { observer } from "./module-239.js";
import module788 from "components/Base/Modal";
import module186 from "./module-186.js";
import module1009 from "./module-1009.js";
import module3016 from "./module-3016.js";
const y = new module1009;
export const BoundNodeGroupModal = observer(function({ cluster, visible, onCancel, onOk }) {
    const ref = module553.createRef();
    const f = module553.useState({
        page: 1,
        limit: 10,
        total: 0,
        data: []
    });
    const m = module96(f, 2);
    const pagination = m[0];
    const g = m[1];
    const b = module553.useState(false);
    const S = module96(b, 2);
    const isLoading = S[0];
    const O = S[1];
    const C = module553.useState("");
    const T = module96(C, 2);
    const R = T[0];
    const D = T[1];
    const N = module553.useState([]);
    const k = module96(N, 2);
    const options = k[0];
    const P = k[1];
    function onFetch(e) {
        return w.apply(this, arguments);
    }
    function w() {
        return (w = async function e(t) {
            let r;
            let n;
            O(true);
            if (r = await y.fetchList({
                ...pagination,
                cluster,
                ...t,
                labelSelector: "!apps.edgewize.io/nodegroup,node-role.kubernetes.io/edge",
                type: ""
            })) {
                n = r.filter((e)=>!e.metadata.labels["apps.edgewize.io/nodegroup"]).map((e)=>({
                        label: `${e.name}(${e.ip})`,
                        value: e.name
                    }));
                g({
                    ...pagination,
                    ...t
                });
                O(false);
                P(n);
            }
        }).apply(this, arguments);
    }
    module553.useEffect(function() {
        onFetch();
    }, []);
    return module553.default.createElement(module788, {
        bodyClassName: module3016["tree-modal-body"],
        visible,
        width: 600,
        title: t("BOUND_NODE_GROUP"),
        onOk: function() {
            onOk(R);
        },
        onCancel
    }, module553.default.createElement(module186.Form, {
        ref
    }, module553.default.createElement(module186.Form.Item, {
        label: t("EDGE_NODE_PL"),
        rules: [
            {
                required: true,
                message: t("SELECT_A_TARGET_NODE")
            }
        ]
    }, module553.default.createElement(module186.Select, {
        name: "node",
        options,
        onChange: function(e) {
            D(e);
        },
        pagination,
        isLoading,
        onFetch,
        searchable: true,
        multi: true,
        placeholder: " "
    }))));
});
export default BoundNodeGroupModal;
