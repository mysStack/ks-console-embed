import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import module61 from "./module-61.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module241 from "./module-241.js";
import { Component } from "./module-553.js";
import module1108 from "./module-1108.js";
import module1677 from "./module-1677.js";
const S = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.codeStore = new module1108;
        e.state = {
            options: []
        };
        e.getRepoList = async (r)=>{
            let n;
            let devops;
            let cluster;
            let s;
            let i;
            n = e.props;
            devops = n.devops;
            cluster = n.cluster;
            await e.codeStore.fetchList({
                devops,
                cluster,
                ...r
            });
            s = e.codeStore.list.data.map((e)=>({
                    label: e.name,
                    value: e.repoURL,
                    icon: e.provider === "bitbucket_server" ? "bitbucket" : e.provider
                }));
            i = {
                label: t("ALL"),
                value: "*",
                icon: "allowlist"
            };
            e.setState({
                options: [
                    i
                ].concat(module61(s))
            });
        };
        e.repoOptionRenderer = function(e) {
            return function(t) {
                return <span className={module1677.option}>{!!e.icon && <module186.Icon name={e.icon} type={t === "value" ? "dark" : "light"}/>}{e.label}{e.value === "*" ? "" : ` (${e.value})`}</span>;
            };
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getRepoList();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, index } = props;
                return <module186.Select value={value} key={index} style={{
                    maxWidth: "100%"
                }} placeholder=" " options={this.state.options} pagination={module241(this.codeStore.list, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={this.codeStore.list.isLoading} onFetch={this.getRepoList} valueRenderer={function(t) {
                    return _this.repoOptionRenderer(t)("value");
                }} optionRenderer={function(t) {
                    return _this.repoOptionRenderer(t)("option");
                }} clearable searchable onChange={this.props.onChange}/>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
