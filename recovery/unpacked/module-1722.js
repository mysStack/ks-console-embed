import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import "./module-191.js";
import "./module-160.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module14 from "./module-14.js";
import "./module-553.js";
import Module3259 from "./module-3259.js";
export default function({ zIndex, listType, steps }) {
    const c = module14.toJS(steps);
    return <>{!module63(c) && module60(c) && c.map((e, index)=><Module3259 key={JSON.stringify(module14.toJS(e.name)) + index} step={module14.toJS(e)} index={index} zIndex={zIndex} listType={listType} isLast={c.length - 1 === index}/>)}</>;
};
