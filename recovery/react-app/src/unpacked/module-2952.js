import "./module-15.js";
import "./module-97.js";
import module41 from "./module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "./module-4.js";
import "./module-22.js";
import module26 from "./module-26.js";
import module480 from "./module-480.js";
import module186 from "./module-186.js";
import module788 from "components/Base/Modal";
import modal from "components/Modals/Delete";
import module14 from "./module-14.js";
import { strategyMap } from "./module-468.js";
const m = {
    "grayrelease.takeover.confirm": {
        on: function(e) {
            return module44(module41.mark(function a() {
                let store;
                let n;
                let m;
                let h;
                let E;
                let y;
                let g;
                let b;
                let S;
                let _;
                let O;
                let C;
                let T;
                let R;
                let D;
                return module41.wrap(function(a) {
                    while(true){
                        switch(a.prev = a.next){
                            case 0:
                                ({ store, data: n, success: m, mode: h = "normal" } = e);
                                E = module14.toJS(store.detail);
                                y = module26(E, "_originData.spec.strategyPolicy");
                                g = module26(n, "spec.governor");
                                b = module14.toJS(store.components);
                                S = b.data;
                                _ = true;
                                if (g) {
                                    _ = module26(S, `${g}.isAllReady`, false);
                                } else if (module480(S).some((e)=>!module26(e, "isAllReady"))) {
                                    _ = false;
                                }
                                O = y === strategyMap.immediate && !_;
                                C = function() {
                                    module186.Notify.success({
                                        content: t("UPDATE_SUCCESSFUL"),
                                        duration: 1000
                                    });
                                    if (m) {
                                        m();
                                    }
                                };
                                T = async ()=>{
                                    await store.patch(E, n);
                                    await store.fetchDetail(E);
                                    C();
                                };
                                R = async ()=>{
                                    await store.update(E, n);
                                    await store.fetchDetail(E);
                                    C();
                                };
                                if (O) {
                                    a.next = 19;
                                    break;
                                }
                                if (h !== "edit") {
                                    a.next = 16;
                                    break;
                                }
                                a.next = 15;
                                return R();
                            case 15:
                                return a.abrupt("return", a.sent);
                            case 16:
                                a.next = 18;
                                return T();
                            case 18:
                                return a.abrupt("return", a.sent);
                            case 19:
                                D = module788.open({
                                    onOk: async function() {
                                        if (!(h !== "edit")) {
                                            await R();
                                        } else {
                                            await T();
                                        }
                                        module788.close(D);
                                    },
                                    modal,
                                    title: t("VERSION_NOT_READY_TITLE"),
                                    desc: t("VERSION_NOT_READY_DESC"),
                                    store
                                });
                            case 20:
                            case "end":
                                return a.stop();
                        }
                    }
                }, a);
            }))();
        }
    }
};
export default m;
