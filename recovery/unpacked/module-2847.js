import "./module-15.js";
import "./module-315.js";
import "./module-58.js";
import "./module-553.js";
import module3 from "./module-3.js";
import Module2848 from "./module-2848.js";
import module2850 from "./module-2850.js";
export default function({ theme, className, ...rest }) {
    const i = theme === "light" ? module2850.light : module2850.dark;
    return <Module2848 className={module3(className, i)} {...rest}/>;
};
