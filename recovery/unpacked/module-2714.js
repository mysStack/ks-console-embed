import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-137.js";
import "./module-7.js";
import "./module-28.js";
import "./module-448.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import "./module-58.js";
import module240 from "./module-240.js";
import module63 from "./module-63.js";
import { Modal } from "./module-904.js";
import module2715 from "./module-2715.js";
import module2718 from "./module-2718.js";
import module2719 from "./module-2719.js";
import module2724 from "./module-2724.js";
const y = {
    "cluster.tag.add": {
        on: function({ store, module, success, ...rest }) {
            let a;
            var p = Modal.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (a) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    e.next = 4;
                                    return store.create(a);
                                case 4:
                                    Modal.close(p);
                                    module240.success({
                                        content: t("CREATE_SUCCESSFUL")
                                    });
                                    if (success) {
                                        success();
                                    }
                                case 7:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                okText: t("CREATE"),
                module,
                title: t("CREATE_TAGS"),
                modal: module2715,
                isAdd: true,
                store,
                ...rest
            });
        }
    },
    "cluster.tag.edit": {
        on: function({ store, module, success, ...rest }) {
            let a;
            var p = Modal.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (a) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    e.next = 4;
                                    return g(store, a, rest.name);
                                case 4:
                                    Modal.close(p);
                                    module240.success({
                                        content: t("UPDATE_SUCCESSFUL")
                                    });
                                    if (success) {
                                        success();
                                    }
                                case 7:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                module,
                title: t("EDIT_TAG"),
                modal: module2715,
                isAdd: false,
                store,
                ...rest
            });
        }
    },
    "cluster.tag.delete": {
        on: function({ store, module, detail, success, ...rest }) {
            const resource = [].concat(detail).map((e)=>`${e.label}:${e.value}`).join(", ");
            var v = Modal.open({
                onOk: async ()=>{
                    await b(store, detail);
                    Modal.close(v);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                module,
                title: resource.split(", ").length === 1 ? t("DELETE_TAG") : t("DELETE_MULTIPLE_TAGS"),
                modal: module2718,
                store,
                ...rest,
                resource,
                desc: resource.split(", ").length === 1 ? t.html("DELETE_CLUSTER_TAG_CONFIRM_DESC", {
                    resource
                }) : t.html("DELETE_CLUSTER_TAGS_CONFIRM_DESC", {
                    resource
                })
            });
        }
    },
    "cluster.tag.bind": {
        on: function({ store, module, success, ...rest }) {
            let a;
            var p = Modal.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (module63(a)) {
                                        e.next = 3;
                                        break;
                                    }
                                    e.next = 3;
                                    return _(store, a, [
                                        rest.detail
                                    ]);
                                case 3:
                                    Modal.close(p);
                                    module240.success({
                                        content: t("ADD_TAG_SUCCESSFUL")
                                    });
                                    if (success) {
                                        success();
                                    }
                                case 6:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                title: t("ADD_TAG_TO_CLUSTERS"),
                module,
                modal: module2719,
                hasBundled: false,
                store,
                ...rest
            });
        }
    },
    "cluster.tag.hasBundled": {
        on: function({ store, module, success, ...rest }) {
            var d = Modal.open({
                onOk: function(e, t) {
                    Modal.close(d);
                    if (success && t) {
                        success();
                    }
                },
                module,
                title: t("REMOVE_TAG_FROM_CLUSTERS"),
                modal: module2719,
                hasBundled: true,
                onUnBind: async (a)=>{
                    await S(store, a, rest.detail.name);
                    module240.success({
                        content: t("REMOVE_TAG_SUCCESSFUL")
                    });
                },
                store,
                ...rest
            });
        }
    },
    "cluster.tag.clusterItemTags": {
        on: function({ store, module, success, ...rest }) {
            let a;
            var d = Modal.open({
                onOk: (a = module44(module41.mark(function e(t) {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (module63(t)) {
                                        e.next = 3;
                                        break;
                                    }
                                    e.next = 3;
                                    return _(store, [].concat(rest.detail), t);
                                case 3:
                                    Modal.close(d);
                                    if (!module63(t) && success) {
                                        success();
                                    }
                                case 5:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                title: t("ADD_TAGS"),
                module,
                modal: module2724,
                isAdd: false,
                store,
                ...rest
            });
        }
    }
};
function g(store, t, name) {
    return store.update(t[0], {
        name
    });
}
function b(store, detail) {
    return store.delete([].concat(detail).map((e)=>e.name));
}
function S(store, t, name) {
    return store.unBind({
        clusters: [
            t.name
        ]
    }, {
        name
    });
}
function _(store, t, a) {
    return store.bind({
        labels: a.map((e)=>e.name),
        clusters: t.map((e)=>e.name)
    });
}
export default y;
