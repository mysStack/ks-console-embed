import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-75.js";
import "unpacked/module-7.js";
import module61 from "unpacked/module-61.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import "unpacked/module-249.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-193.js";
import "unpacked/module-1080.js";
import module240 from "unpacked/module-240.js";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module199 from "unpacked/module-199.js";
import module74 from "unpacked/module-74.js";
const v = (e)=>{
    for(const t in e){
        if (t.startsWith("enable_") && e[t] === false) {
            delete e[t.slice(7)];
            if (e.git_source) {
                delete e.git_source[t.slice(7)];
            }
            if (e.github_source) {
                delete e.github_source[t.slice(7)];
            }
            if (e.bitbucket_server_source) {
                delete e.bitbucket_server_source[t.slice(7)];
            }
            if (e.svn_source) {
                delete e.svn_source[t.slice(7)];
            }
        }
    }
};
export const updatePipelineParams = function(e) {
    const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    const { multi_branch_pipeline, pipeline, type: _type, ...rest } = e;
    if (t && !rest.description) {
        rest.description = "";
    }
    const l = module136(rest);
    if (l.metadata) {
        delete l.metadata;
    }
    if (multi_branch_pipeline) {
        if (t) {
            Object.assign(e.multi_branch_pipeline, l);
        } else if (rest) {
            Object.assign(e.multi_branch_pipeline, rest);
        }
        e.type = "multi-branch-pipeline";
        v(e.multi_branch_pipeline);
    }
    if (pipeline) {
        if (t) {
            Object.assign(e.pipeline, l);
        } else {
            Object.assign(e.pipeline, rest);
        }
        e.type = "pipeline";
        v(e.pipeline);
    }
    if (!t) {
        for(const u in rest){
            if (u !== "devopsName") {
                delete e[u];
            }
        }
    }
};
export const resetPipelineMultiBranch = function(e) {
    if (e.multi_branch_pipeline && e.__multi_branch_pipeline) {
        e.multi_branch_pipeline = module199(e.__multi_branch_pipeline, e.multi_branch_pipeline);
    }
    delete e.__multi_branch_pipeline;
};
export const updatePipelineParamsInSpec = function(e, t) {
    if (e.multi_branch_pipeline) {
        delete (e = module74(e, "metadata.name", e.multi_branch_pipeline.name)).multi_branch_pipeline.metadata;
        e.spec = {
            multi_branch_pipeline: {
                ...e.multi_branch_pipeline
            },
            type: e.type
        };
        delete e.multi_branch_pipeline;
    }
    if (e.pipeline) {
        delete (e = module74(e, "metadata.name", e.pipeline.name)).pipeline.metadata;
        e.spec = {
            pipeline: {
                ...e.pipeline
            },
            type: e.type
        };
        delete e.pipeline;
    }
    delete e.type;
    delete e.description;
    e = module74(e, "metadata.namespace", t);
};
export const groovyToJS = function(e) {
    let t;
    for(var a = /([\w-]*) ?: '?([\w-:/_.]*)'?/g, r = {}; (t = a.exec(e)) !== null;){
        if (t[1]) {
            r[t[1]] = t[2];
        }
    }
    return r;
};
export const getLanguageIcon = function(e, t) {
    if ([
        "java",
        "gradle",
        "javascript",
        "php",
        "python",
        "golang",
        "nodejs",
        "jar",
        "war",
        "binary"
    ].includes(e)) {
        return e;
    }
    return t;
};
export const getRepoUrl = function({ provider, owner, repo, server, url, api_uri } = {}) {
    if (url) {
        return url;
    }
    switch(provider){
        case "github":
            return `https://github.com/${owner}/${repo}`;
        case "gitlab":
            return `${server}/${owner}/${repo}`;
        case "bitbucket_server":
            const o = api_uri;
            let i = o.substr(o.length - 1) === "/" ? o : `${o}/`;
            if (!/https:\/\/bitbucket.org\/?/gm.test(i)) {
                i += "scm/";
            }
            return `${i}${owner}/${repo}`;
        default:
            return "";
    }
};
export const getCommonSource = function({ provider, owner, repo, url, secret, server }) {
    if (provider === "git") {
        return {
            url,
            discover_branches: true,
            credential_id: secret?.name
        };
    }
    return {
        owner,
        repo,
        server_name: server,
        url,
        credential_id: secret?.name,
        discover_branches: 1,
        discover_pr_from_forks: {
            strategy: 2,
            trust: 2
        },
        discover_pr_from_origin: 2,
        discover_tags: true
    };
};
export const checkRepoSource = function({ source_type, ...rest }) {
    const n = module26(rest, `${source_type}_source`, {});
    const { owner, repo, server_name, url, remote } = n;
    let p = owner && repo;
    switch(source_type){
        case "svn":
        case "single_svn":
            p = !!remote;
            break;
        case "git":
            p = !!url;
            break;
        case "gitlab":
            p = p && server_name;
    }
    if (!p) {
        module240.error(t("NOT_VALID_REPO"));
        throw Error(t("NOT_VALID_REPO"));
    }
};
export const isSvnRepo = function(e) {
    return [
        "svn",
        "single_svn"
    ].includes(e);
};
const g = function(e) {
    const t = e.match(/(.+)(>|>=|==|!=)(.+)/);
    const a = module96(t, 4);
    const r = a[1];
    const operator = a[2];
    const value = a[3];
    return {
        key: r.replace(".param.", ""),
        operator,
        value
    };
};
const y = (e, t)=>{
    const a = module26(t, e.key);
    switch(e.operator){
        case "==":
            return a === e.value;
        case ">=":
            return a >= e.value;
        case "<=":
            return a <= e.value;
        case "!=":
            return a !== e.value;
        default:
            return false;
    }
};
export const isArgo = globals.config.gitopsEngine === "argocd";
export const parseCondition = function(e, t) {
    try {
        const a = e.match(/(.+?)(&&|\|\|)/g);
        if (!a) {
            return y(g(e), t);
        }
        const r = [].concat(module61(a.map((e)=>e.slice(0, -2))), [
            e.slice(a.reduce((acc, item)=>acc + item.length, 0))
        ]).map(g);
        return a.map((e)=>e.slice(-2)).reduce((acc, item, index)=>{
            const l = index === 0 ? y(r[0], t) : acc;
            const u = y(r[index + 1], t);
            switch(item){
                case "&&":
                    return l && u;
                case "||":
                    return l || u;
                default:
                    return false;
            }
        }, false);
    } catch (e) {
        return false;
    }
};
