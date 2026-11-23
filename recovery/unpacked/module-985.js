import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-98.js";
import "./module-9.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-813.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import "./module-45.js";
import "./module-28.js";
import "./module-442.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import Module1163 from "./module-1163.js";
import Module1164 from "./module-1164.js";
import { getDateStr, getTimeLabel } from "./module-950.js";
import module3404 from "./module-3404.js";
let p;
let m;
let h;
let v;
let g;
let y;
let E;
let b;
let _;
let O;
let S;
let C;
let D;
let k;
const z = (e)=>{
    const t = e.match(/(\d+)(\w+)/);
    const [, n = 0, l] = module96(t, 3);
    return n * ({
        s: 1,
        m: 60,
        h: 3600,
        d: 86400
    })[l === undefined ? "s" : l];
};
const F = observer((k = D = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        module65(e, "searchWord", h, module88(e));
        module65(e, "showDropDown", v, module88(e));
        e.duration = module14.observable({
            end: Math.ceil(Date.now() / 1000),
            start: Math.ceil(Date.now() / 1000) - 1800,
            step: "1m"
        });
        e.inputRef = createRef();
        module65(e, "removeParam", g, module88(e));
        module65(e, "changeSearchWord", y, module88(e));
        e.changeInputKey = function(t) {
            if (t.keyCode === 13) {
                e.handlerInputEnter();
            }
        };
        module65(e, "hiddenDropDown", E, module88(e));
        module65(e, "changeNextQueryKey", b, module88(e));
        module65(e, "showDurationMenu", _, module88(e));
        module65(e, "removeParamsDuration", O, module88(e));
        module65(e, "cancelChangeTime", S, module88(e));
        e.focus = function() {
            e.inputRef.current.focus();
        };
        module65(e, "handleTimeChange", C, module88(e));
        return e;
    }
    module37(r, [
        {
            key: "handlerInputEnter",
            value: function() {
                const props = this.props;
                const { params, dropDownItems, onChange } = props;
                if (this.searchWord.trim()) {
                    const n = params.nextParamsKey;
                    const l = this.searchWord.match(/([^:]+):(.+)/) || [];
                    const u = module96(l, 3);
                    const o = u[1];
                    const value = u[2];
                    const c = this.findParamKeyInDropDown(o);
                    if (n) {
                        this.props.params.query.push({
                            key: n,
                            value: this.searchWord
                        });
                    } else if (c) {
                        this.props.params.query.push({
                            key: c,
                            value
                        });
                    } else {
                        this.props.params.query.push({
                            key: Object.keys(dropDownItems)[0],
                            value: this.searchWord
                        });
                    }
                    this.searchWord = "";
                    this.showDropDown = true;
                    params.nextParamsKey = "";
                    this.focus();
                    onChange();
                }
            }
        },
        {
            key: "findParamKeyInDropDown",
            value: function(e) {
                return (Object.entries(this.props.dropDownItems).find((t)=>module96(t, 2)[1].text === e) || [])[0];
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { enableClear, className } = props;
                return <div className={module3(module3404.container, className)} onClick={this.focus}>{this.renderParamsItems()}{this.renderParamsDuration()}{this.renderInput()}{enableClear && this.renderClear()}{this.showDurationDropDown && this.renderTimeDuration()}</div>;
            }
        },
        {
            key: "renderTimeDuration",
            value: function() {
                return <div className={module3404.durationDropdown}><Module1163 step={this.duration.step} times={this.durationTimes} onChange={this.handleTimeChange}/><Module1164 className={module3404.customRange} step={this.duration.step} times={this.durationTimes} onSubmit={this.handleTimeChange} onCancel={this.cancelChangeTime} showStep={this.props.showStep}/></div>;
            }
        },
        {
            key: "renderParamsDuration",
            value: function() {
                const params = this.props.params;
                const { start, end, durationAlias } = params;
                if (start) {
                    return <span className={module3404.param} key="_duration"><span>{durationAlias ? t("TIME_RANGE_LAST", {
                        value: getTimeLabel(durationAlias)
                    }) : t("TIME_RANGE_RANGE", {
                        startTime: getDateStr(start),
                        endTime: getDateStr(end)
                    })}</span><span onClick={this.removeParamsDuration}><module186.Icon name="close" className={module3404.removeParam} type="light"/></span></span>;
                }
                return null;
            }
        },
        {
            key: "renderParamsItems",
            value: function() {
                const _this = this;
                const props = this.props;
                const t_dropDownItems = props.dropDownItems;
                return props.params.query.map(({ key, value }, r)=>{
                    if (key) {
                        return <span className={module3404.param} key={r}><span>{module26(t_dropDownItems, `${key}.text`)}: {value}</span><span data-index={r} onClick={_this.removeParam}><module186.Icon name="close" className={module3404.removeParam} type="light"/></span></span>;
                    }
                    return null;
                });
            }
        },
        {
            key: "renderFilterKey",
            value: function() {
                if (this.currentParamText) {
                    return <span className={module3404.currentParam}>{this.currentParamText}:</span>;
                }
                return null;
            }
        },
        {
            key: "renderInput",
            value: function() {
                return <div className={module3404.input}>{this.renderFilterKey()}<input type="text" placeholder={t("SEARCH")} value={this.searchWord} ref={this.inputRef} disabled={this.showDurationDropDown} onChange={this.changeSearchWord} onFocus={this.changeSearchWord} onBlur={this.hiddenDropDown} onKeyUp={this.changeInputKey}/>{this.showDropDown && this.renderDropdownContent()}</div>;
            }
        },
        {
            key: "renderDropdownContent",
            value: function() {
                const _this = this;
                const props = this.props;
                const { dropDownItems, enableTimeDuration, dropdownClass, iconThem } = props;
                return <div className={module3(module3404.dropdown, dropdownClass)}>{Object.entries(dropDownItems).map((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const n = a[1];
                    return <div className={module3404.dropdownItem} key={r} onMouseDown={_this.changeNextQueryKey} data-query={r}><span className={module3404.icon}>{n.imgUrl ? <img height="100%" src={n.imgUrl}/> : <module186.Icon name={n.icon} type={iconThem || "dark"}/>}</span><span>{n.text}</span></div>;
                })}{enableTimeDuration && <div className={module3404.dropdownItem} onMouseDown={this.showDurationMenu} key="_time"><span className={module3404.icon}><module186.Icon name="clock"/></span><span>{t("TIME_RANGE_SCAP")}</span></div>}</div>;
            }
        },
        {
            key: "renderClear",
            value: function() {}
        },
        {
            key: "durationTimes",
            get: function() {
                return (this.duration.end - this.duration.start) / z(this.duration.step);
            }
        },
        {
            key: "showDurationDropDown",
            get: function() {
                return this.props.enableTimeDuration && this.props.params.nextParamsKey === "_time";
            }
        },
        {
            key: "currentParamText",
            get: function() {
                const props = this.props;
                const { dropDownItems, params } = props;
                if (params.nextParamsKey === "_time") {
                    return t("TIME_RANGE_SCAP");
                }
                return module26(dropDownItems, `${params.nextParamsKey}.text`);
            }
        }
    ]);
    return r;
})(Component), D.propType = {
    params: module1.object.isRequired,
    onChange: module1.func,
    dropDownItems: module1.object.isRequired,
    enableClear: module1.bool,
    enableTimeDuration: module1.bool
}, D.defaultProps = {
    enableTimeDuration: true,
    enableClear: false,
    onChange: function() {}
}, m = k, h = module49(m.prototype, "searchWord", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), v = module49(m.prototype, "showDropDown", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), module49(m.prototype, "durationTimes", [
    module14.computed
], Object.getOwnPropertyDescriptor(m.prototype, "durationTimes"), m.prototype), module49(m.prototype, "showDurationDropDown", [
    module14.computed
], Object.getOwnPropertyDescriptor(m.prototype, "showDurationDropDown"), m.prototype), module49(m.prototype, "currentParamText", [
    module14.computed
], Object.getOwnPropertyDescriptor(m.prototype, "currentParamText"), m.prototype), g = module49(m.prototype, "removeParam", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            const props = _this.props;
            const { onChange, params } = props;
            const l = module26(t, "currentTarget.dataset.index");
            params.query[l] = {};
            onChange();
        };
    }
}), y = module49(m.prototype, "changeSearchWord", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            const value = t.target.value;
            const params = _this.props.params;
            _this.showDropDown = !params.nextParamsKey || !value;
            _this.searchWord = value;
        };
    }
}), module49(m.prototype, "handlerInputEnter", [
    module14.action
], Object.getOwnPropertyDescriptor(m.prototype, "handlerInputEnter"), m.prototype), E = module49(m.prototype, "hiddenDropDown", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.showDropDown = false;
        };
    }
}), b = module49(m.prototype, "changeNextQueryKey", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            t.preventDefault();
            const a = module26(t, "currentTarget.dataset.query");
            _this.props.params.nextParamsKey = a;
            _this.focus();
        };
    }
}), _ = module49(m.prototype, "showDurationMenu", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.props.params.nextParamsKey = "_time";
            _this.searchWord = "";
            _this.showDropDown = false;
        };
    }
}), O = module49(m.prototype, "removeParamsDuration", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            const props = _this.props;
            const { params, onChange } = props;
            params.start = "";
            params.end = "";
            params.step = "";
            onChange();
        };
    }
}), S = module49(m.prototype, "cancelChangeTime", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.props.params.nextParamsKey = "";
        };
    }
}), C = module49(m.prototype, "handleTimeChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function({ step, start, end, lastTime }) {
            const props = _this.props;
            const { params, onChange } = props;
            params.step = step;
            params.durationAlias = lastTime;
            if (lastTime) {
                params.end = Math.ceil(Date.now() / 1000);
                params.start = Math.ceil(Date.now() / 1000) - z(lastTime);
            } else {
                params.end = end;
                params.start = start;
            }
            params.nextParamsKey = "";
            onChange();
        };
    }
}), p = m)) || p;
export default F;
