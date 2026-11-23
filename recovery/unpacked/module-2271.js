import "./module-15.js";
import "./module-18.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module864 from "./module-864.js";
import module14 from "./module-14.js";
import module2274 from "./module-2274.js";
import module1539 from "./module-1539.js";
export default function({ selectedImageTag, onSelectImageTag, getImageList, tagList }) {
    const onChange = module553.useCallback(function(e) {
        onSelectImageTag(e);
    }, []);
    const d = tagList || {};
    const { data, page, total, isLoading } = d;
    return module553.default.createElement("div", {
        className: module1539.content
    }, module553.default.createElement(module186.RadioGroup, {
        wrapClassName: total === 1 ? module1539.radioOnlyOneListContent : module1539.radioListContent,
        onChange,
        value: selectedImageTag
    }, module553.default.createElement(module864, {
        className: module1539.radioList,
        data: module14.toJS(data),
        page,
        total,
        loading: isLoading,
        noMount: true,
        onFetch: getImageList
    }, data.map((e)=>module553.default.createElement(module186.Radio, {
            value: e,
            key: e
        }, module553.default.createElement(module2274, {
            tag: e,
            selectedImageTag
        }))))));
};
