import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module241 from "unpacked/module-241.js";
import module186 from "unpacked/module-186.js";
import module1108 from "stores/codeRepo";
import module2654 from "unpacked/module-2654.js";
const b = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.codeStore = new module1108;
        e.state = {
            options: []
        };
        e.getRepoList = async (a)=>{
            let r;
            let devops;
            let cluster;
            let options;
            r = e.props;
            devops = r.devops;
            cluster = r.cluster;
            await e.codeStore.fetchList({
                devops,
                cluster,
                ...a
            });
            options = e.codeStore.list.data.map((e)=>({
                    label: e.name,
                    value: `${e.name}(${e.repoURL})`,
                    icon: e.provider === "bitbucket_server" ? "bitbucket" : e.provider
                }));
            e.setState({
                options
            });
        };
        e.repoOptionRenderer = function(e) {
            return function(t) {
                return <span className={module2654.option}><module186.Icon name={e.icon} type={t === "value" ? "dark" : "light"}/><span>{e.value}</span></span>;
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
                const { formRef, formTemplate } = props;
                return <module186.Form data={formTemplate} ref={formRef}><module186.Form.Item label={t("CODE_REPOSITORY")} rules={[
                    {
                        required: true,
                        message: t("REPO_EMPTY_DESC")
                    }
                ]}><module186.Select name="repoURL" options={this.state.options} valueRenderer={function(t) {
                    return _this.repoOptionRenderer(t)("value");
                }} optionRenderer={function(t) {
                    return _this.repoOptionRenderer(t)("option");
                }} pagination={module241(this.codeStore.list, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={this.codeStore.list.isLoading} onFetch={this.getRepoList} searchable clearable/></module186.Form.Item><module186.Form.Item><module186.Columns><module186.Column><module186.Form.Item label={t("REVISION")} desc={t("REVISIONS_DESC")}><module186.Input name="source.targetRevision" defaultValue="HEAD"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("MANIFEST_FILE_PATH")} desc={t("MANIFEST_FILE_PATH_DESC")}><module186.Input name="source.path" defaultValue="."/></module186.Form.Item></module186.Column></module186.Columns></module186.Form.Item></module186.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
