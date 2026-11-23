import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-58.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module2256 from "unpacked/module-2256.js";
function d(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
export default function({ children, className, text, dataTest, onOK, modalHeight }) {
    const hRef = module553.useRef();
    const v = module553.useState(false);
    const g = module96(v, 2);
    const showModal = g[0];
    const E = g[1];
    const b = module553.useState({
        x: "100%",
        y: "100%",
        y1: 0,
        height: 32
    });
    const _ = module96(b, 2);
    const O = _[0];
    const S = _[1];
    const C = function() {
        E(!showModal);
    };
    const children_props = children.props;
    const { className: className_1, ...rest } = children_props;
    const T = module553.default.cloneElement(children, {
        className: module3(className_1, module2256.modal, module31({}, module2256.showModal, showModal)),
        getParentPosition: function() {
            return O;
        },
        showModal,
        hideModal: C,
        onOK: function(e) {
            C();
            onOK(e);
        },
        onCancel: C,
        ...rest
    });
    return module553.default.createElement("div", {
        className: module3(module2256.buttonModalBox, className),
        ref: hRef
    }, T, module553.default.createElement(module186.Button, {
        onClick: function() {
            let e;
            let x;
            let a;
            let height;
            let n;
            let l;
            let u;
            if (!showModal) {
                x = (e = hRef.current.getBoundingClientRect()).x;
                a = e.y;
                height = e.height;
                l = (n = window.innerHeight) - modalHeight;
                u = n - modalHeight / 2 - (a + O.height / 2);
                S({
                    x,
                    y: u > 0 ? l - u : l - 12,
                    y1: a + 7,
                    height
                });
            }
            E(!showModal);
        },
        "data-test": dataTest
    }, text), module553.default.createElement("div", {
        className: module3(module2256.triangle, module31({}, module2256.showModal, showModal)),
        style: {
            top: O.y1,
            left: O.x
        }
    }));
};
