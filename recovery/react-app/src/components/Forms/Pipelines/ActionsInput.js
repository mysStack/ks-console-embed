import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module198 from "unpacked/module-198.js";
import module189 from "unpacked/module-189.js";
import module63 from "unpacked/module-63.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import { PIPELINE_ACTION_TYPES } from "utils/constants";
import Module3215 from "components/Forms/Pipelines/ActionsInput/Item";
import module1718 from "unpacked/module-1718.js";
const _ = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleChange = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange({
                ...a_value,
                ...t
            });
        };
        e.handleDelete = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange(module189(a_value, t));
        };
        e.handleMoreMenuClick = function(t, a) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            if (!module198(value, a)) {
                switch(a){
                    case "discover_branches":
                        onChange({
                            ...value,
                            discover_branches: 1
                        });
                        break;
                    case "discover_pr_from_origin":
                        onChange({
                            ...value,
                            discover_pr_from_origin: 1
                        });
                        break;
                    case "discover_pr_from_forks":
                        onChange({
                            ...value,
                            discover_pr_from_forks: {
                                strategy: 1,
                                trust: 2
                            }
                        });
                        break;
                    case "discover_tags":
                        onChange({
                            ...value,
                            discover_tags: true
                        });
                }
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "renderMoreMenu",
            value: function() {
                const _this = this;
                const value = this.props.value;
                const r = Object.keys(value);
                return <module186.Menu onClick={this.handleMoreMenuClick}>{!module63(this.menuData) && Object.keys(this.menuData).map((a)=><module186.Menu.MenuItem key={a} disabled={r.includes(a)}><module186.Icon name="ticket"/> {t(_this.menuData[a].replace(/\s/g, "_").toUpperCase())}</module186.Menu.MenuItem>)}</module186.Menu>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { name, value } = props;
                return <div><div className={module1718.header}><module186.Dropdown theme="dark" content={this.renderMoreMenu()} trigger="click" placement="bottomRight"><module186.Button type="control">{t("ADD_STRATEGY")}</module186.Button></module186.Dropdown></div><div className={module1718.content}>{Object.keys(this.menuData).filter(module198.bind(this, value)).map((t, a)=><Module3215 key={a} value={module31({}, t, value[t])} prefix={`${name}[${a}]`} onDelete={_this.handleDelete.bind(_this, t)} onChange={_this.handleChange} menuData={_this.menuData}/>)}</div></div>;
            }
        },
        {
            key: "menuData",
            get: function() {
                const sourceType = this.props.sourceType;
                if ([
                    "gitlab",
                    "github",
                    "bitbucket_server"
                ].includes(sourceType)) {
                    return PIPELINE_ACTION_TYPES;
                }
                return {};
            }
        }
    ]);
    return r;
})(Component);
export default _;
_.propTypes = {
    name: module1.string,
    value: module1.object,
    onChange: module1.func,
    sourceType: module1.string
};
_.defaultProps = {
    name: "",
    value: {},
    sourceType: "",
    onChange: function() {}
};
