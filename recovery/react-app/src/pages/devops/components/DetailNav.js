import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { NavLink } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import module1253 from "pages/devops/components/Health";
import { ReactComponent } from "unpacked/module-1145.js";
import module5116 from "unpacked/module-5116.js";
const b = ((e)=>{
    module55(n, e);
    var r = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n() {
        module36(this, n);
        return r.apply(this, arguments);
    }
    module37(n, [
        {
            key: "renderBaseInfo",
            value: function() {
                const detail = this.props.detailStore.detail;
                return module553.default.createElement(module186.Columns, {
                    className: module5116.baseInfo
                }, module553.default.createElement(module186.Column, {
                    className: module5116.baseInfo__item
                }, module553.default.createElement("div", {
                    className: module5116.dashboardValue
                }, module553.default.createElement(module1253, {
                    score: detail.weatherScore
                })), module553.default.createElement("div", {
                    className: module5116.dashboardLable
                }, t("HEALTH_STATUS_SCAP"))), this.isMultibranch ? module553.default.createElement(module186.Column, {
                    className: module5116.baseInfo__item
                }, module553.default.createElement("div", {
                    className: module5116.dashboardValue
                }, module553.default.createElement(ReactComponent, {
                    style: {
                        width: "20px",
                        height: "20px"
                    }
                }), " ", detail.totalNumberOfBranches || "-"), module553.default.createElement("div", {
                    className: module5116.dashboardLable
                }, detail.totalNumberOfBranches && detail.totalNumberOfBranches === 1 ? t("BRANCH_SI") : t("BRANCH_PL"))) : null, module553.default.createElement(module186.Column, {
                    className: module5116.baseInfo__item
                }));
            }
        },
        {
            key: "renderNavLink",
            value: function({ name, title }) {
                const props = this.props;
                const { detailStore, sonarqubeStore } = props;
                const l = this.enabledActions.includes("edit");
                if (!name) {
                    return null;
                }
                if (detailStore && sonarqubeStore) {
                    if ((!l || this.isMultibranch) && name === "pipeline") {
                        return null;
                    }
                    if (!sonarqubeStore.detail.totalStatus && name === "code-quality") {
                        return null;
                    }
                    if (!this.isMultibranch && name === "branch") {
                        return null;
                    }
                    if (!detailStore.detail.totalNumberOfPullRequests && name === "pull-request") {
                        return null;
                    }
                }
                return module553.default.createElement(NavLink, {
                    key: name,
                    className: module5116.navItem,
                    activeClassName: module5116.active,
                    to: `${this.props.match.url}/${name}`
                }, t(title));
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const route = this.props.route;
                return module553.default.createElement(module553.default.Fragment, null, this.renderBaseInfo(), module553.default.createElement("div", {
                    className: module5116.nav
                }, route.routes.map((t)=>_this.renderNavLink(t))));
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { cluster, devops } = params;
                return globals.app.getActions({
                    module: "pipelines",
                    cluster,
                    devops
                });
            }
        },
        {
            key: "isMultibranch",
            get: function() {
                const detailStore = this.props.detailStore;
                return module14.toJS(detailStore.detail.isMultiBranch);
            }
        }
    ]);
    return n;
})(module553.Component);
b.defaultProps = {
    module: ""
};
const E = inject("rootStore")(observer(b));
export default E;
