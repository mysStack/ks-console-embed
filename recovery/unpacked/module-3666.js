import "./module-15.js";
import "./module-97.js";
import "./module-4.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import { StarDuotone, StarHalfDuotone } from "./module-3667.js";
import module3 from "./module-3.js";
import { addDashboardHistory, removeDashboardHistory, useDashboardHistory } from "./module-3670.js";
import { useEventEmitter } from "./module-3671.js";
import module186 from "./module-186.js";
import module3673 from "./module-3673.js";
export default function({ item, user }) {
    const n = useDashboardHistory(user);
    const l = module96(n, 2);
    const m = l[0];
    const h = l[1];
    const v = m.some((e)=>e.id === item.id);
    const g = useEventEmitter();
    module553.useEffect(function() {
        g.$emit(`FavoriteHistory-${item.id}`, m);
    }, [
        m
    ]);
    module553.useEffect(function() {
        const e = function(e) {
            if (m !== e) {
                h(e);
            }
        };
        g.$on(`FavoriteHistory-${item.id}`, e);
        return function() {
            g.$off(`FavoriteHistory-${item.id}`, e);
        };
    }, []);
    return module553.default.createElement("div", {
        className: module3(module3673.favorite, "favorite-icon")
    }, module553.default.createElement(module186.Tooltip, {
        content: v ? t("CANCEL_QUICK_ACCESS") : t("ADD_TO_QUICK_ACCESS")
    }, module553.default.createElement("div", {
        onClick: function(e) {
            e.stopPropagation();
            e.preventDefault();
            h(v ? removeDashboardHistory(user, item.id, false) : addDashboardHistory(user, item, false));
        }
    }, v ? module553.default.createElement(StarDuotone, {
        className: "star",
        color: "#F5A623",
        size: 16
    }) : module553.default.createElement(StarHalfDuotone, {
        className: "starHalf",
        size: 16,
        color: "#36435C"
    }))));
};
