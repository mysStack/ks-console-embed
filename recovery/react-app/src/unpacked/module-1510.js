import "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import { getPresentationAttributes } from "unpacked/module-810.js";
const s = {
    width: module1.number.isRequired,
    height: module1.number.isRequired,
    viewBox: module1.shape({
        x: module1.number,
        y: module1.number,
        width: module1.number,
        height: module1.number
    }),
    className: module1.string,
    style: module1.object,
    children: module1.oneOfType([
        module1.arrayOf(module1.node),
        module1.node
    ])
};
function CComponent({ children, width, height, viewBox, className, style, ...rest }) {
    const d = viewBox || {
        width,
        height,
        x: 0,
        y: 0
    };
    const className_1 = module3("recharts-surface", className);
    const h = getPresentationAttributes(rest);
    return <svg {...h} className={className_1} width={width} height={height} style={style} viewBox={`${d.x} ${d.y} ${d.width} ${d.height}`} version="1.1">{children}</svg>;
}
CComponent.propTypes = s;
export default CComponent;
