import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { PureComponent } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import onFetchMore from "unpacked/module-455.js";
import { Link } from "unpacked/module-433.js";
import Module2639 from "components/Cards/App";
import module244 from "unpacked/module-244.js";
import module2642 from "unpacked/module-2642.js";
const g = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
    var a = ((e)=>{
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
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "renderApps",
            value: function() {
                const props = this.props;
                const { workspace, cluster, namespace, apps, iconName, showCreateVendor, isLoading, itemCls, disableLink, onClickAppItem } = props;
                if (apps.length === 0 && !isLoading) {
                    return <div className={module2642.noApp}><img src="/assets/empty-card.svg" alt=""/><p>{t("NO_RESOURCE_FOUND")}</p></div>;
                }
                const m = module244.stringify({
                    workspace,
                    cluster,
                    namespace
                });
                return <>{apps.map((app)=>{
                    const to = `/apps/${app.app_id}?${m}`;
                    if (disableLink && onClickAppItem) {
                        return <div key={app.app_id} className={module3(module2642.appItem, itemCls)} onClick={function() {
                            return onClickAppItem(app);
                        }}><Module2639 app={app} showCreateVendor={showCreateVendor} iconName={iconName}/></div>;
                    }
                    return <Link key={app.app_id} className={module3(module2642.appItem, itemCls)} to={to}><Module2639 app={app} showCreateVendor={showCreateVendor} iconName={iconName}/></Link>;
                })}</>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { apps, isLoading, total, onFetchMore, title, className, appRef } = props;
                return <div className={module3(module2642.appList, className)} ref={appRef}>{title && <p className="apps-title">{title}</p>}{this.renderApps()}{isLoading && <div className={module2642.loading}><module186.Loading/></div>}{!isLoading && apps.length < total && <a className={module2642.loadMore} onClick={onFetchMore}><span>{t("VIEW_MORE")}</span></a>}</div>;
            }
        }
    ]);
    return r;
})(PureComponent);
export default g;
g.propTypes = {
    apps: module1.array,
    isLoading: module1.bool,
    total: module1.number,
    onFetchMore: module1.func,
    itemCls: module1.string,
    title: module1.string,
    disableLink: module1.bool,
    onClickAppItem: module1.func,
    iconName: module1.string,
    showCreateVendor: module1.bool
};
g.defaultProps = {
    apps: [],
    isLoading: false,
    total: 0,
    onFetchMore,
    disableLink: false,
    showCreateVendor: false
};
