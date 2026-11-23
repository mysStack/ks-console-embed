import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module63 from "unpacked/module-63.js";
import module60 from "unpacked/module-60.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import { PIPELINE_PARAMS_TYPES } from "utils/constants";
import Module3217 from "components/Forms/Pipelines/ParamsInput/Item";
import module1719 from "unpacked/module-1719.js";
const S = ((Component_1)=>{
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
        e.handleDelete = function(t) {
            const e_props = e.props;
            const { formTemplate, name } = e_props;
            module74(formTemplate, name, e.value.filter((e, a)=>a !== t));
            e.forceUpdate();
        };
        e.handleMoreMenuClick = function(t, type) {
            const e_props = e.props;
            const { formTemplate, name } = e_props;
            module74(formTemplate, name, [].concat(module61(module60(e.value) ? e.value : []), [
                {
                    type
                }
            ]));
            e.forceUpdate();
        };
        return e;
    }
    module37(r, [
        {
            key: "renderMoreMenu",
            value: function() {
                return <module186.Menu onClick={this.handleMoreMenuClick}>{Object.keys(PIPELINE_PARAMS_TYPES).map((e)=><module186.Menu.MenuItem key={e}><module186.Icon name="ticket"/> {t(PIPELINE_PARAMS_TYPES[e])}</module186.Menu.MenuItem>)}</module186.Menu>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const name = this.props.name;
                return <div className={module1719.wrapper}><div className={module1719.header}><module186.Dropdown theme="dark" content={this.renderMoreMenu()} trigger="click" placement="bottomRight"><module186.Button type="control">{t("ADD")}</module186.Button></module186.Dropdown></div><div className={module1719.content}>{module63(this.value) && <p className="text-center padding-12">{t("NO_DATA")}</p>}{module60(this.value) && this.value.map((value, r)=><Module3217 key={r} value={value} prefix={`${name}[${r}]`} onDelete={_this.handleDelete.bind(_this, r)}/>)}</div></div>;
            }
        },
        {
            key: "value",
            get: function() {
                return module26(this.props.formTemplate, this.props.name, []);
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    name: module1.string,
    value: module1.array,
    onChange: module1.func
};
S.defaultProps = {
    name: "",
    value: [],
    onChange: function() {}
};
