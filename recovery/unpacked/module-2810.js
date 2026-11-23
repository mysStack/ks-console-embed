import module1113 from "./module-1113.js";
const a = {
    borderRadius: function(e) {
        return {
            msBorderRadius: e,
            MozBorderRadius: e,
            OBorderRadius: e,
            WebkitBorderRadius: e,
            borderRadius: e
        };
    },
    boxShadow: function(e) {
        return {
            msBoxShadow: e,
            MozBoxShadow: e,
            OBoxShadow: e,
            WebkitBoxShadow: e,
            boxShadow: e
        };
    },
    userSelect: function(e) {
        return {
            WebkitTouchCallout: e,
            KhtmlUserSelect: e,
            MozUserSelect: e,
            msUserSelect: e,
            WebkitUserSelect: e,
            userSelect: e
        };
    },
    flex: function(e) {
        return {
            WebkitBoxFlex: e,
            MozBoxFlex: e,
            WebkitFlex: e,
            msFlex: e,
            flex: e
        };
    },
    flexBasis: function(e) {
        return {
            WebkitFlexBasis: e,
            flexBasis: e
        };
    },
    justifyContent: function(e) {
        return {
            WebkitJustifyContent: e,
            justifyContent: e
        };
    },
    transition: function(e) {
        return {
            msTransition: e,
            MozTransition: e,
            OTransition: e,
            WebkitTransition: e,
            transition: e
        };
    },
    transform: function(e) {
        return {
            msTransform: e,
            MozTransform: e,
            OTransform: e,
            WebkitTransform: e,
            transform: e
        };
    },
    absolute: function(e) {
        const t = e && e.split(" ");
        return {
            position: "absolute",
            top: t && t[0],
            right: t && t[1],
            bottom: t && t[2],
            left: t && t[3]
        };
    },
    extend: function(extend, t) {
        return t[extend] || {
            extend
        };
    }
};
export const autoprefix = function(e) {
    const t = {};
    module1113(e, function(e, n) {
        let r = {};
        module1113(e, function(e, t) {
            const n = a[t];
            if (n) {
                r = {
                    ...r,
                    ...n(e)
                };
            } else {
                r[t] = e;
            }
        });
        t[n] = r;
    });
    return t;
};
export default autoprefix;
