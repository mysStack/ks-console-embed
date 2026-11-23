import "unpacked/module-15.js";
import module31 from "unpacked/module-31.js";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module4684 from "unpacked/module-4684.js";
import { strategyOptionType } from "unpacked/module-1907.js";
import module4686 from "unpacked/module-4686.js";
function useM({ option, hiddenRadio }) {
    const nRef = module553.useRef(null);
    const o = function() {
        try {
            if (nRef.current) {
                const e = nRef.current.querySelector('input[type="radio"]');
                if (e) {
                    e.click();
                }
            }
        } catch (error) {
            console.error("RadioItem handleClick error:", error);
        }
    };
    const i = module3(module4686.outerWrapper, module31({}, module4686.noCursor, hiddenRadio));
    const f = module3(module4686.radioContent, module31({}, module4686.noMargin, hiddenRadio));
    return module553.default.createElement(module4684, {
        hoverable: !hiddenRadio
    }, module553.default.createElement("button", {
        className: i,
        onClick: hiddenRadio ? undefined : o,
        ref: nRef,
        disabled: hiddenRadio,
        onKeyDown: function(e) {
            if (!(hiddenRadio || e.key !== "Enter" && e.key !== " ")) {
                o();
            }
        }
    }, !hiddenRadio && module553.default.createElement(module186.Radio, {
        value: option.value,
        disabled: option.disabled
    }), module553.default.createElement("div", {
        className: f
    }, module553.default.createElement("img", {
        className: module4686.img,
        src: `/assets/${option.iconName}`,
        alt: ""
    }), module553.default.createElement("div", {
        className: module4686.textContent
    }, module553.default.createElement("span", {
        className: module4686.title
    }, t(option.title)), module553.default.createElement("span", {
        className: module4686.desc
    }, t(option.desc))))));
}
useM.propTypes = {
    option: strategyOptionType,
    hiddenRadio: module1.bool
};
useM.defaultProps = {
    option: {
        value: "",
        iconName: "",
        title: "",
        desc: "",
        disabled: false
    },
    hiddenRadio: false
};
export default useM;
