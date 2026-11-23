import module558 from "unpacked/module-558.js";
function resetWarningCache() {}
function checkPropTypes() {}
checkPropTypes.resetWarningCache = resetWarningCache;
export default function() {
    function e(e, t, n, o, a, i) {
        if (i !== module558) {
            const l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            l.name = "Invariant Violation";
            throw l;
        }
    }
    function t() {
        return e;
    }
    e.isRequired = e;
    const n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes,
        resetWarningCache
    };
    n.PropTypes = n;
    return n;
};
