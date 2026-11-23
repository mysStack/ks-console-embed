function n(t) {
    n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    };
    n.default = n;
    return n(t);
}
export { n as default };
n.default = n;
