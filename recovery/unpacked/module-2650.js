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
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import { Component } from "./module-553.js";
import module1108 from "./module-1108.js";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "./module-72.js";
import module1617 from "./module-1617.js";
import Module2651 from "./module-2651.js";
const _ = ((Component_1)=>{
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
                return <span className={module1617.option}><module186.Icon name={e.icon} type={t === "value" ? "dark" : "light"}/><span>{e.value}</span></span>;
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
                const props = this.props;
                const { formRef, formTemplate } = props;
                return <module186.Form ref={formRef} data={formTemplate}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.name" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><div className={module1617.wrapper}><h6>{t("DEPLOY_LOCATION")}</h6><div className={module1617.wrapper_item}><module186.Form.Item rules={[
                    {
                        required: true,
                        message: t("PROJECT_NOT_SELECT_DESC")
                    }
                ]}><Module2651 name="destination" prefix="destination" formData={formTemplate} {...this.props}/></module186.Form.Item></div></div></module186.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default _;
