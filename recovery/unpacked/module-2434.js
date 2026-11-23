let r;
export const Element = Symbol.for("react.element");
export const Portal = Symbol.for("react.portal");
export const Fragment = Symbol.for("react.fragment");
export const StrictMode = Symbol.for("react.strict_mode");
export const Profiler = Symbol.for("react.profiler");
export const ContextProvider = Symbol.for("react.provider");
export const ContextConsumer = Symbol.for("react.context");
const SYMBOL_REACT_SERVER_CONTEXT = Symbol.for("react.server_context");
export const ForwardRef = Symbol.for("react.forward_ref");
export const Suspense = Symbol.for("react.suspense");
export const SuspenseList = Symbol.for("react.suspense_list");
export const Memo = Symbol.for("react.memo");
export const Lazy = Symbol.for("react.lazy");
const SYMBOL_REACT_OFFSCREEN = Symbol.for("react.offscreen");
export function typeOf(e) {
    if (typeof e === "object" && e !== null) {
        const t = e.$$typeof;
        switch(t){
            case Element:
                switch(e = e.type){
                    case Fragment:
                    case Profiler:
                    case StrictMode:
                    case Suspense:
                    case SuspenseList:
                        return e;
                    default:
                        switch(e = e && e.$$typeof){
                            case SYMBOL_REACT_SERVER_CONTEXT:
                            case ContextConsumer:
                            case ForwardRef:
                            case Lazy:
                            case Memo:
                            case ContextProvider:
                                return e;
                            default:
                                return t;
                        }
                }
            case Portal:
                return t;
        }
    }
}
r = Symbol.for("react.module.reference");
export const isAsyncMode = function() {
    return false;
};
export const isConcurrentMode = function() {
    return false;
};
export const isContextConsumer = function(e) {
    return typeOf(e) === ContextConsumer;
};
export const isContextProvider = function(e) {
    return typeOf(e) === ContextProvider;
};
export const isElement = function(e) {
    return typeof e === "object" && e !== null && e.$$typeof === Element;
};
export const isForwardRef = function(e) {
    return typeOf(e) === ForwardRef;
};
export const isFragment = function(e) {
    return typeOf(e) === Fragment;
};
export const isLazy = function(e) {
    return typeOf(e) === Lazy;
};
export const isMemo = function(e) {
    return typeOf(e) === Memo;
};
export const isPortal = function(e) {
    return typeOf(e) === Portal;
};
export const isProfiler = function(e) {
    return typeOf(e) === Profiler;
};
export const isStrictMode = function(e) {
    return typeOf(e) === StrictMode;
};
export const isSuspense = function(e) {
    return typeOf(e) === Suspense;
};
export const isSuspenseList = function(e) {
    return typeOf(e) === SuspenseList;
};
export const isValidElementType = function(e) {
    return typeof e === "string" || typeof e === "function" || e === Fragment || e === Profiler || e === StrictMode || e === Suspense || e === SuspenseList || e === SYMBOL_REACT_OFFSCREEN || typeof e === "object" && e !== null && (e.$$typeof === Lazy || e.$$typeof === Memo || e.$$typeof === ContextProvider || e.$$typeof === ContextConsumer || e.$$typeof === ForwardRef || e.$$typeof === r || e.getModuleId !== undefined);
};
