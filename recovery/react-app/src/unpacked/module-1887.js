import module162 from "unpacked/module-162.js";
export default function(e) {
    try {
        if (module162) {
            return Function(`return require("${e}")`)();
        }
    } catch (e) {}
};
