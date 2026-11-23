import { Component, createElement } from "unpacked/module-553.js";
export const active = function(e, t = "span") {
    return class r extends Component {
        constructor(...f){
            super(...f);
            var _this = this;
            this.state = {
                active: false
            };
            this.handleMouseDown = function() {
                return _this.setState({
                    active: true
                });
            };
            this.handleMouseUp = function() {
                return _this.setState({
                    active: false
                });
            };
            this.render = function() {
                return createElement(t, {
                    onMouseDown: _this.handleMouseDown,
                    onMouseUp: _this.handleMouseUp
                }, createElement(e, {
                    ..._this.props,
                    ..._this.state
                }));
            };
        }
    };
};
export default active;
