import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module455 from "./module-455.js";
import module186 from "./module-186.js";
import Module2881 from "./module-2881.js";
import module1674 from "./module-1674.js";
const g = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.handleClick = function() {
            r.autosuggest.focus();
        };
        r.handleInputChange = function(e, t) {
            r.props.onInputChange(e, t);
        };
        r.handleAdd = function(e) {
            const tags = r.state.tags;
            const onChange = r.props.onChange;
            const l = [].concat(module61(tags), [
                e
            ]);
            r.setState({
                tags: l
            }, function() {
                onChange(l);
            });
        };
        r.handleDelete = function() {
            const tags = r.state.tags;
            const onChange = r.props.onChange;
            if (!(tags.length <= 0)) {
                const a = tags.filter((t, a)=>a !== tags.length - 1);
                r.setState({
                    tags: a
                }, function() {
                    onChange(a);
                });
            }
        };
        r.handleCloseTag = function({ value, index }) {
            const tags = r.state.tags;
            const onChange = r.props.onChange;
            const u = tags.filter((e, r)=>e !== value && r !== index);
            r.setState({
                tags: u
            }, function() {
                onChange(u);
            });
        };
        r.renderTags = function() {
            const tags = r.state.tags;
            return <>{tags.map((item, index)=><module186.Tag key={`${item}-${index + 1}`}>{item}<module186.Icon name="close" color={{
                    primary: "rgb(255,255,255)"
                }} size={16} clickable onClick={function() {
                    return r.handleCloseTag({
                        item,
                        index
                    });
                }}/></module186.Tag>)}</>;
        };
        r.state = {
            tags: e.value || []
        };
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                return <div className={module3("input", module1674.filterInput)} onClick={this.handleClick}>{this.renderTags()}<Module2881 ref={function(t) {
                    _this.autosuggest = t;
                }} placeholder={this.placeholder} onChange={this.handleInputChange} onAdd={this.handleAdd} onDelte={this.handleDelete}/></div>;
            }
        },
        {
            key: "placeholder",
            get: function() {
                const placeholder = this.props.placeholder;
                if (this.state.tags.length === 0) {
                    return placeholder;
                }
                return null;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (t.tags !== e.value) {
                    return {
                        tags: e.value
                    };
                }
                return null;
            }
        }
    ]);
    return a;
})(Component);
export default g;
g.propTypes = {
    placeholder: module1.string,
    value: module1.array,
    onChange: module1.func,
    onInputChange: module1.func
};
g.defaultProps = {
    value: [],
    onChange: module455,
    onBlur: module455,
    onFocus: module455,
    onClear: module455,
    onInputChange: module455
};
