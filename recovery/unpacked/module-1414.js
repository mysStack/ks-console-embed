import "./module-15.js";
import "./module-553.js";
import { Link } from "./module-433.js";
export default function(e) {
    if (e.disabled) {
        return <a {...e}/>;
    }
    return <Link {...e}/>;
};
