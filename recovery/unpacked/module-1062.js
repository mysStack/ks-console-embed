import "./module-1104.js";
import "./module-1171.js";
import { createElement } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
const s = {
    children: module1.node,
    className: module1.string,
    componentCls: module1.string,
    as: module1.string
};
const c = function({ children, as = "div", componentCls, className, ...rest }) {
    return createElement(as, {
        className: module3(componentCls, className),
        ...rest
    }, children);
};
c.propTypes = s;
export default c;
