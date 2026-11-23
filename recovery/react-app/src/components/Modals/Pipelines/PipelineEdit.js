import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import Module788 from "components/Base/Modal";
import Module823 from "components/Modals/Delete";
import Module1124 from "pages/devops/components/Pipeline";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module3275 from "unpacked/module-3275.js";
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.hideConfirm = function() {
            t.setState({
                isshowComfirm: false
            });
        };
        t.showConfirm = function() {
            t.setState({
                isshowComfirm: true
            });
        };
        t.handleCancel = function() {
            t.hideConfirm();
            const params = t.props.params;
            const { devops, name } = params;
            localStorage.removeItem(`${globals.user.username}-${devops}-${name}`);
            t.props.onCancel();
        };
        t.CLIENT_WIDTH = document.body.clientWidth;
        t.state = {
            isshowComfirm: false,
            createPipelineType: module63(t.props.jsonData) ? undefined : "custom",
            jsonData: t.props.jsonData
        };
        return t;
    }
    module37(r, [
        {
            key: "renderPipelineContent",
            value: function() {
                const props = this.props;
                const { params, isSubmitting, onOk } = props;
                const jsonData = this.state.jsonData;
                return <Module1124 className={module3275.content} isEditMode params={params} jsonData={jsonData} onOk={onOk} onCancel={this.showConfirm} isSubmitting={isSubmitting} trigger={this.props.trigger}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const visible = this.props.visible;
                const createPipelineType = this.state.createPipelineType;
                const hideHeader = !module63(createPipelineType);
                const n = {
                    hideHeader,
                    closable: !hideHeader,
                    title: t("CREATE_PIPELINE"),
                    imageIcon: "/assets/pipeline/pipeline-icon-dark.svg",
                    description: t("CREATE_PIPELINE_DESC")
                };
                return <><Module788 width={createPipelineType ? Math.max(this.CLIENT_WIDTH - 40, 1200) : "1400px"} bodyClassName={module3(module3275.body, module31({}, module3275.templeHeight, !createPipelineType))} headerClassName={module3275.header} visible={visible} closable={false} maskClosable={false} onOk={this.props.onOk} onCancel={this.showConfirm} hideFooter {...n}>{this.renderPipelineContent()}</Module788><Module823 visible={this.state.isshowComfirm} onCancel={this.hideConfirm} onOk={this.handleCancel} title={t("CLOSE")} desc={t("Are you sure to close this pipeline Editor ?")}/></>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    name: module1.string,
    module: module1.string,
    store: module1.object,
    formTemplate: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    jsonData: module1.object,
    isSubmitting: module1.bool
};
b.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
