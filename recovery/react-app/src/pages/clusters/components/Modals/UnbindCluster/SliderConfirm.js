import "unpacked/module-15.js";
import "unpacked/module-5.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module2705 from "unpacked/module-2705.js";
export default function({ width = 560, height = 40, borderRadius = 40, tipText, handleSuccess = function() {} }) {
    const pRef = module553.useRef(false);
    const mRef = module553.useRef(0);
    const vRef = module553.useRef(0);
    const hRef = module553.useRef(width - 56);
    const ERef = module553.useRef(false);
    const y = module553.useState(false);
    const g = module96(y, 2);
    const b = g[0];
    const S = g[1];
    const _ = module553.useState(0);
    const O = module96(_, 2);
    const C = O[0];
    const T = O[1];
    const onMouseUp = function() {
        if (!ERef.current) {
            pRef.current = false;
            S(true);
            T(0);
        }
    };
    const onMouseMove = function(e) {
        if (pRef.current && !ERef.current) {
            e.preventDefault();
            e.stopPropagation();
            vRef.current = e.x;
            let t = vRef.current - mRef.current;
            if (t < 0) {
                t = 0;
            }
            if (t >= hRef.current) {
                t = hRef.current;
                T(t);
                ERef.current = true;
                return void (handleSuccess && handleSuccess());
            }
            T(t);
        }
    };
    module553.useEffect(function() {
        document.body.addEventListener("mouseup", onMouseUp);
        document.body.addEventListener("mousemove", onMouseMove);
        return function() {
            document.body.removeEventListener("mouseup", onMouseUp);
            document.body.removeEventListener("mousemove", onMouseMove);
        };
    }, []);
    const N = {
        borderRadius,
        opacity: b && C / hRef.current,
        width: 56 + C,
        transitionDuration: b && pRef.current ? "0s" : ".3s"
    };
    const k = {
        borderRadius,
        height: height - 8,
        transitionDuration: b && pRef.current ? "0s" : ".3s",
        transform: `translateX(${C}px)`
    };
    const I = {
        color: `rgb(${121 + C / hRef.current * 134},
    ${135 + C / hRef.current * 120},
    ${156 + C / hRef.current * 99})`
    };
    return module553.default.createElement("div", {
        className: module2705.content,
        style: {
            width
        }
    }, module553.default.createElement("div", {
        className: module2705.background,
        style: {
            borderRadius
        }
    }, module553.default.createElement("span", {
        style: I
    }, tipText)), module553.default.createElement("div", {
        className: module2705.sliderBox,
        style: N
    }), module553.default.createElement("div", {
        style: k,
        className: module2705.slider,
        onMouseEnter: function() {
            if (!(ERef.current || pRef.current)) {
                S(true);
                T(0);
            }
        },
        onMouseLeave: function() {
            if (!(ERef.current || pRef.current)) {
                S(false);
            }
        },
        onMouseDown: function(e) {
            if (!(ERef.current || e.button !== 0)) {
                mRef.current = e.nativeEvent.x || e.touches[0].clientX;
                pRef.current = true;
            }
        },
        onMouseUp,
        onMouseMove
    }, module553.default.createElement("img", {
        className: module2705.icon,
        src: "/assets/ksLogo.svg"
    })));
};
