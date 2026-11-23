import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-109.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import module3542 from "./module-3542.js";
import module3544 from "./module-3544.js";
import module3546 from "./module-3546.js";
import module74 from "./module-74.js";
const E = {
    "user.create": {
        on: function({ store, success, ...rest }) {
            let a;
            var d = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (a) {
                                        e.next = 3;
                                        break;
                                    }
                                    module788.close(d);
                                    return e.abrupt("return");
                                case 3:
                                    module74(a, 'metadata.annotations["iam.kubesphere.io/uninitialized"]', "true");
                                    e.next = 6;
                                    return store.create(a);
                                case 6:
                                    module788.close(d);
                                    module240.success({
                                        content: t("CREATE_SUCCESSFUL")
                                    });
                                    if (success) {
                                        success();
                                    }
                                case 9:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                modal: module3542,
                store,
                ...rest
            });
        }
    },
    "user.edit": {
        on: function({ store, detail, success, ...rest }) {
            let a;
            var p = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (a) {
                                        e.next = 3;
                                        break;
                                    }
                                    module788.close(p);
                                    return e.abrupt("return");
                                case 3:
                                    module74(a, "metadata.resourceVersion", detail.resourceVersion);
                                    e.next = 6;
                                    return store.update(detail, a);
                                case 6:
                                    module788.close(p);
                                    module240.success({
                                        content: t("UPDATE_SUCCESSFUL")
                                    });
                                    if (success) {
                                        success();
                                    }
                                case 9:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                modal: module3542,
                detail,
                store,
                ...rest
            });
        }
    },
    "user.setting": {
        on: function({ store, success, ...rest }) {
            let a;
            var f = module788.open({
                onOk: (a = module44(module41.mark(function e(a) {
                    let currentPassword;
                    let password;
                    let d;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (a) {
                                        e.next = 3;
                                        break;
                                    }
                                    module788.close(f);
                                    return e.abrupt("return");
                                case 3:
                                    currentPassword = a.currentPassword;
                                    password = a.password;
                                    a.rePassword;
                                    d = module58(a, [
                                        "currentPassword",
                                        "password",
                                        "rePassword"
                                    ]);
                                    if (!currentPassword || !password) {
                                        e.next = 10;
                                        break;
                                    }
                                    e.next = 7;
                                    return store.modifyPassword({
                                        name: globals.user.username
                                    }, {
                                        currentPassword,
                                        password
                                    });
                                case 7:
                                    setTimeout(()=>{
                                        location.href = "/login";
                                    }, 1000);
                                    e.next = 12;
                                    break;
                                case 10:
                                    e.next = 12;
                                    return store.update({
                                        name: globals.user.username
                                    }, d);
                                case 12:
                                    module788.close(f);
                                    module240.success({
                                        content: t("UPDATE_SUCCESSFUL")
                                    });
                                    if (success) {
                                        success();
                                    }
                                case 15:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return a.apply(this, arguments);
                }),
                modal: module3546,
                store,
                ...rest
            });
        }
    },
    "user.modifypassword": {
        on: function({ store, detail, success, ...rest }) {
            var o = module788.open({
                onOk: function(e) {
                    if (e) {
                        store.modifyPassword(detail, e).then(()=>{
                            module788.close(o);
                            module240.success({
                                content: t("UPDATE_SUCCESSFUL")
                            });
                            if (success) {
                                success();
                            }
                        });
                    } else {
                        module788.close(o);
                    }
                },
                modal: module3544,
                detail,
                store,
                ...rest
            });
        }
    }
};
export default E;
