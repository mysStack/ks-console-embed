import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module801 from "./module-801.js";
import module186 from "./module-186.js";
import Module791 from "components/Base/Text";
import Module842 from "components/Base/CodeEditor";
import module2750 from "./module-2750.js";
const g = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.triggerChange = module801(function() {
            const t_state = t.state;
            const { mode, config } = t_state;
            t.props.onChange({
                mode,
                config
            });
        }, 300);
        t.handleModeChange = function(mode_1) {
            t.setState({
                mode: mode_1
            }, function() {
                t.triggerChange();
            });
        };
        t.handleConfigChange = function(config_1) {
            t.setState({
                config: config_1
            }, function() {
                t.triggerChange();
            });
        };
        const e_data = e.data;
        const { mode, config } = e_data;
        t.state = {
            mode,
            config
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, showSelect, selectDisabled, editorClassName, readOnly } = props;
                const state = this.state;
                const { mode, config } = state;
                return <div className={module2750.wrapper}><div className={module2750.header}><div className={module2750.title}><module186.Icon name="coding" size={20}/><Module791 title={t(title)}/></div>{showSelect && <div className={module2750.select}><module186.Select disabled={selectDisabled} options={this.options} value={mode} onChange={this.handleModeChange}/></div>}</div><Module842 className={editorClassName} options={{
                    readOnly
                }} mode={mode} value={config} onChange={this.handleConfigChange}/></div>;
            }
        },
        {
            key: "options",
            get: function() {
                return [
                    {
                        label: "YAML",
                        value: "yaml"
                    },
                    {
                        label: "Properties",
                        value: "properties"
                    },
                    {
                        label: "JSON",
                        value: "json"
                    },
                    {
                        label: "Text",
                        value: "text"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    data: module1.object,
    showSelect: module1.bool,
    onChange: module1.func
};
g.defaultProps = {
    data: {
        mode: "yaml",
        config: ""
    },
    showSelect: true,
    onChange: function() {}
};
