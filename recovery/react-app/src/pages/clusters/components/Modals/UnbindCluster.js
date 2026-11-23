import "unpacked/module-15.js";
import "unpacked/module-16.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module816 from "components/Clusters/ClusterTitle";
import { getLocalTime } from "utils/index";
import { ClusterTagGroup } from "unpacked/module-925.js";
import module2704 from "pages/clusters/components/Modals/UnbindCluster/SliderConfirm";
import module2706 from "unpacked/module-2706.js";
export default function(e) {
    const { visible, isSubmitting, onCancel, onOk, title, isEdgeWize } = e;
    const cluster = module14.toJS(e.detail);
    const y_expiredDay = cluster.expiredDay;
    const isExpired = y_expiredDay && y_expiredDay < 0;
    const S = module553.useState(false);
    const _ = module96(S, 2);
    const O = _[0];
    const C = _[1];
    const T = module553.useState("");
    const R = module96(T, 2);
    const D = R[0];
    const N = R[1];
    return module553.default.createElement(module788, {
        width: 600,
        showIcon: true,
        imageIcon: "/assets/unbindCluster.svg",
        headerClassName: module2706.header,
        bodyClassName: module2706.body,
        title,
        visible,
        isSubmitting,
        onCancel,
        hideFooter: true
    }, module553.default.createElement("div", {
        style: {
            padding: "0px 20px"
        }
    }, module553.default.createElement("div", {
        className: module2706.tipBox
    }, module553.default.createElement("p", {
        className: module2706.title
    }, t("RISK_WARNING")), module553.default.createElement("ul", null, module553.default.createElement("li", {
        className: module2706.des
    }, isEdgeWize ? t("REMOVE_EDGEWIZE_TIP_A") : t("REMOVE_CLUSTER_TIP_A")), module553.default.createElement("li", {
        className: module2706.des
    }, isEdgeWize ? t("REMOVE_EDGEWIZE_TIP_B") : t("REMOVE_CLUSTER_TIP_C")))), module553.default.createElement("div", {
        className: module2706.cluster
    }, module553.default.createElement("div", {
        className: module2706.header
    }, module553.default.createElement(module816, {
        cluster,
        isExpired,
        isEdgeWize
    })), module553.default.createElement("div", {
        className: module2706.info
    }, module553.default.createElement("div", {
        className: module2706.item
    }, module553.default.createElement("span", {
        className: module2706.label
    }, t("NODE_COUNT"), ":"), module553.default.createElement("span", {
        className: module2706.value
    }, cluster.nodeCount)), module553.default.createElement("div", {
        className: module2706.item
    }, module553.default.createElement("span", {
        className: module2706.label
    }, t("KUBERNETES_VERSION"), ":"), module553.default.createElement("span", {
        className: module2706.value
    }, cluster.kubernetesVersion)), module553.default.createElement("div", {
        className: module2706.item
    }, module553.default.createElement("span", {
        className: module2706.label
    }, isEdgeWize ? t("HOSTED_IN") : t("PROVIDER"), ":"), module553.default.createElement("span", {
        className: module2706.value
    }, isEdgeWize ? cluster.hostCluster : cluster.provider)), module553.default.createElement("div", {
        className: module2706.item
    }, module553.default.createElement("span", {
        className: module2706.label
    }, t("CREATION_TIME"), ":"), module553.default.createElement("span", {
        className: module2706.value
    }, getLocalTime(cluster.createTime).format("YYYY-MM-DD HH:mm:ss"))), !isEdgeWize && module553.default.createElement("div", {
        className: module2706.row
    }, module553.default.createElement("span", {
        className: module2706.label
    }, t("TAG"), ":"), module553.default.createElement("span", {
        className: module2706.value
    }, module553.default.createElement(ClusterTagGroup, {
        data: cluster.tags
    }))))), !O && module553.default.createElement("div", {
        style: {
            marginBottom: 20
        }
    }, module553.default.createElement(module2704, {
        width: 560,
        height: 40,
        borderRadius: 40,
        tipText: t("DELETE_CLUSTER_SWIPE_DESC"),
        handleSuccess: function() {
            C(true);
        }
    })), O && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module2706.confirmInput
    }, module553.default.createElement("p", null, t.html("ENTER_CLUSTER_NAME", {
        name: cluster.name
    })), module553.default.createElement(module186.Input, {
        placeholder: cluster.name,
        autoFocus: true,
        onChange: function(e) {
            N(e.target.value);
        }
    })))), O && module553.default.createElement("div", {
        className: module2706.footer
    }, module553.default.createElement(module186.Button, {
        onClick: onCancel
    }, t("CANCEL")), module553.default.createElement(module186.Button, {
        type: "danger",
        loading: isSubmitting,
        disabled: isSubmitting || !!cluster && D !== cluster.name,
        onClick: function() {
            onOk(false);
        }
    }, t("DROP"))));
};
