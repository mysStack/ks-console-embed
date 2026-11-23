import "./module-15.js";
import "./module-553.js";
import module3 from "./module-3.js";
import module2405 from "./module-2405.js";
export default function({ className, text, icon }) {
    return <div className={module3(module2405.emptyTip, className)}>{icon || <img width={32} height={32} src="/assets/data_empty.svg"/>}{text || <p className={module2405.emptyText}>暂无相关数据</p>}</div>;
};
