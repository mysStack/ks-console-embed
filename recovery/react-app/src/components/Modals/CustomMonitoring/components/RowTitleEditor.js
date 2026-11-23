import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module2830 from "unpacked/module-2830.js";
const d = ((Component_1)=>{
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
    function a(...l) {
        let e;
        module36(this, a);
        e = t.call(this, ...l);
        e.state = {
            editing: false
        };
        e.handleEditClick = function() {
            e.setState({
                editing: true
            }, function() {
                e.inputRef.current.focus();
            });
        };
        e.inputRef = createRef();
        e.onChange = function(t) {
            e.props.onChange(t.target.value);
        };
        e.onBlur = function() {
            e.setState({
                editing: false
            });
        };
        e.onKeyUp = function(t) {
            if (t.keyCode === 13) {
                e.setState({
                    editing: false
                });
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const editing = this.state.editing;
                const props = this.props;
                const { title, onDescClick, onAscClick, onDeleteClick } = props;
                return <div className={module2830.wrapper}><h3>{editing ? <input ref={this.inputRef} type="text" value={title} onBlur={this.onBlur} onChange={this.onChange} onKeyUp={this.onKeyUp}/> : title}</h3><span className={module2830.tools}><module186.Icon name="pen" onClick={this.handleEditClick}/><module186.Icon name="trash" onClick={onDeleteClick}/><module186.Icon name="sort-descending" onClick={onDescClick}/><module186.Icon name="sort-ascending" onClick={onAscClick}/></span></div>;
            }
        }
    ]);
    return a;
})(Component);
export default d;
