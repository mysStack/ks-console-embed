import "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
const u = {
    className: module1.string,
    children: module1.oneOfType([
        module1.arrayOf(module1.node),
        module1.node
    ])
};
function SComponent({ children, className, ...rest }) {
    const className_1 = module3("recharts-layer", className);
    return <g className={className_1} {...rest}>{children}</g>;
}
SComponent.propTypes = u;
export default SComponent;
