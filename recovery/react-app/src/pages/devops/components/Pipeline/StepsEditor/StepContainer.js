import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-191.js";
import "unpacked/module-160.js";
import module60 from "unpacked/module-60.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import "unpacked/module-553.js";
import Module3273 from "pages/devops/components/Pipeline/StepsEditor/StepCard";
export default function({ zIndex, listType, steps }) {
    const c = module14.toJS(steps);
    return <>{!module63(c) && module60(c) && c.map((e, index)=><Module3273 key={JSON.stringify(module14.toJS(e.name)) + index} step={module14.toJS(e)} index={index} zIndex={zIndex} listType={listType} isLast={c.length - 1 === index}/>)}</>;
};
