import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-31.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import "unpacked/module-1080.js";
export function getGithubSource({ owner, repo }) {
    const r = repo.url || repo.remote || repo.repo;
    return {
        repo,
        owner,
        url: /^https:\/\//.test(r) ? r : `https://github.com/${owner}/${repo}`
    };
}
export function getGitlabSource({ owner, repo, server_name, url }) {
    return {
        repo,
        owner,
        server: server_name,
        url: `${url ?? server_name}/${owner}/${repo}`
    };
}
export function getBitbucketSource({ owner, repo, api_uri }) {
    let server = api_uri.substr(api_uri.length - 1) === "/" ? api_uri : `${api_uri}/`;
    if (!/https:\/\/bitbucket.org\/?/gm.test(server)) {
        server += "scm/";
    }
    return {
        repo,
        owner,
        server,
        url: `${server}${owner}/${repo}`
    };
}
export function getGitSource(e) {
    return {
        url: e.url
    };
}
export const getCodeRepoTemplate = {
    github: getGithubSource,
    gitlab: getGitlabSource,
    bitbucket_server: getBitbucketSource,
    git: getGitSource
};
export const gitRepositorySpec2GithubSource = function(e, t) {
    return {
        scm_id: t,
        owner: e?.owner,
        repo: e?.repo,
        credential_id: e?.secret?.name,
        discover_branches: 1,
        discover_pr_from_forks: {
            strategy: 2,
            trust: 2
        },
        discover_pr_from_origin: 2,
        discover_tags: true
    };
};
export const gitRepositorySpec2GitlabSource = function(e, t) {
    return {
        ...gitRepositorySpec2GithubSource(e, t),
        server_name: e?.server
    };
};
export const gitRepositorySpec2BitbucketSource = function(e, t) {
    return {
        ...gitRepositorySpec2GithubSource(e, t),
        api_uri: e?.server
    };
};
export const gitRepositorySpec2GitSource = function(e, t) {
    return {
        scm_id: t,
        credential_id: e?.secret?.name,
        url: e?.url,
        discover_branches: true
    };
};
export const gitRepositorySpec2Source = {
    github: gitRepositorySpec2GithubSource,
    gitlab: gitRepositorySpec2GitlabSource,
    bitbucket_server: gitRepositorySpec2BitbucketSource,
    git: gitRepositorySpec2GitSource
};
export const omitRepoKeys = {
    github: [
        "scm_id",
        "owner",
        "repo",
        "credential_id",
        "discover_branches",
        "discover_pr_from_forks",
        "discover_pr_from_origin",
        "discover_tags"
    ],
    gitlab: [
        "scm_id",
        "owner",
        "repo",
        "credential_id",
        "discover_branches",
        "discover_pr_from_forks",
        "discover_pr_from_origin",
        "discover_tags",
        "server_name"
    ],
    bitbucket_server: [
        "scm_id",
        "owner",
        "repo",
        "credential_id",
        "discover_branches",
        "discover_pr_from_forks",
        "discover_pr_from_origin",
        "discover_tags",
        "api_uri"
    ],
    git: [
        "scm_id",
        "credential_id",
        "url",
        "discover_branches"
    ]
};
