import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-58.js";
import module31 from "unpacked/module-31.js";
import module788 from "components/Base/Modal";
import module240 from "unpacked/module-240.js";
import module823 from "components/Modals/Delete";
import module2727 from "components/Modals/CodeRepoCreate";
import module435 from "utils/form.templates";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import { getBitbucketSource, getGitSource, getGithubSource, getGitlabSource } from "utils/devOpsRepos";
const b = ({ data, module, devops })=>{
    const l = module435[module]({
        namespace: devops
    });
    const source_type = data.sources.source_type;
    const u = module26(data, `sources.${source_type}_source`, {});
    const c = {
        git: getGitSource,
        github: getGithubSource,
        bitbucket_server: getBitbucketSource,
        gitlab: getGitlabSource
    }[source_type];
    const s = {
        provider: data.sources.source_type,
        secret: {
            name: u.credential_id || data.sources.credentialId,
            namespace: devops
        },
        ...c?.(u) ?? {}
    };
    module74(l, "metadata", data.metadata);
    module74(l, "spec", s);
    return l;
};
const S = {
    "codeRepo.create": {
        on: function({ store, cluster, devops, module, success, ...rest }) {
            var v = module788.open({
                onOk: async (a)=>{
                    let o;
                    o = b({
                        data: a,
                        module,
                        devops
                    });
                    await store.create({
                        data: o,
                        devops,
                        cluster
                    });
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                    module788.close(v);
                },
                store,
                module,
                cluster,
                devops,
                formTemplate: {},
                modal: module2727,
                ...rest
            });
        }
    },
    "codeRepo.edit": {
        on: function({ store, cluster, devops, module, detail, success, ...rest }) {
            let a;
            const _ = module136(detail);
            const metadata = module26(_, "_originData.metadata", {});
            const C = _.provider === "git" ? "url" : "repo";
            const formTemplate = {
                metadata,
                sources: (a = {
                    source_type: _.provider
                }, module31(a, `${_.provider}_source`, module31({}, C, _.repoURL)), module31(a, "credentialId", _.secret.name), a)
            };
            var R = module788.open({
                onOk: async (a)=>{
                    let r;
                    r = b({
                        data: a,
                        module,
                        devops
                    });
                    await store.edit({
                        data: r,
                        devops,
                        name: detail.name,
                        cluster
                    });
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                    module788.close(R);
                },
                store,
                module,
                cluster,
                devops,
                formTemplate,
                modal: module2727,
                isEdit: true,
                ...rest
            });
        }
    },
    "codeRepo.delete": {
        on: function({ store, detail, devops, success, ...rest }) {
            var m = module788.open({
                onOk: async ()=>{
                    await store.delete({
                        ...detail,
                        devops,
                        cluster: rest.cluster
                    });
                    module788.close(m);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                modal: module823,
                resource: detail.name,
                ...rest
            });
        }
    }
};
export default S;
