import "unpacked/module-15.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module807 from "unpacked/module-807.js";
import module60 from "unpacked/module-60.js";
import module2784 from "unpacked/module-2784.js";
export default function({ options, value, onChange }) {
    return <div className={module2784.wrapper}>{options.map((e, t)=><div className={module3(module31({}, module2784.select, module807(e.value.join(","), value.join(","))))} key={module60(e.value) ? e.value.join(",") : t} onClick={function() {
            onChange(e.value);
        }}><h3>{e.label}</h3><div className={module2784.colors}>{e.value.map((e)=><div key={e} style={{
                backgroundColor: e
            }}/>)}</div></div>)}</div>;
};
