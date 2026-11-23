import { Component, createElement } from "unpacked/module-553.js";
export const hover = function(e, t = "span") {
    return class r extends Component {
        constructor(...f){
            super(...f);
            var _this = this;
            this.state = {
                hover: false
            };
            this.handleMouseOver = function() {
                return _this.setState({
                    hover: true
                });
            };
            this.handleMouseOut = function() {
                return _this.setState({
                    hover: false
                });
            };
            this.render = function() {
                return createElement(t, {
                    onMouseOver: _this.handleMouseOver,
                    onMouseOut: _this.handleMouseOut
                }, createElement(e, {
                    ..._this.props,
                    ..._this.state
                }));
            };
        }
    };
};
export default hover;
