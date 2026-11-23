const STORAGE_KEY = "ks-recovered-session-user";

export function rememberSessionUser(username) {
  if (!username || username === "recovered") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, username);
}

export function rememberedSessionUser() {
  const name = window.localStorage.getItem(STORAGE_KEY) || "";
  if (!name || name === "recovered") {
    return "";
  }
  return name;
}

function mapUser(body) {
  const name = body?.metadata?.name;
  if (!name) {
    return null;
  }
  const annotations = body.metadata.annotations || {};
  return {
    username: name,
    email: body.spec?.email,
    lang: body.spec?.lang || "en",
    globalrole: annotations["iam.kubesphere.io/globalrole"] || "",
    globalRules: {},
    clusterRules: {},
    workspaceRules: {},
    projectRules: {},
    devopsRules: {},
    workspaces: [],
  };
}

async function resolveUserBody(username) {
  const encoded = encodeURIComponent(username);
  const direct = await fetch(`/kapis/iam.kubesphere.io/v1beta1/users/${encoded}`, {
    credentials: "include",
  });
  if (direct.ok) {
    return direct.json();
  }
  const list = await fetch("/kapis/iam.kubesphere.io/v1beta1/users?limit=50", {
    credentials: "include",
  });
  if (!list.ok) {
    return null;
  }
  const payload = await list.json();
  const items = Array.isArray(payload.items) ? payload.items : [];
  const lowered = username.toLowerCase();
  return (
    items.find((item) => item?.metadata?.name === username) ||
    items.find((item) => (item?.spec?.email || "").toLowerCase() === lowered) ||
    null
  );
}

export async function fetchCurrentUser(username) {
  if (!username) {
    return null;
  }
  const body = await resolveUserBody(username);
  if (!body) {
    return null;
  }
  const user = mapUser(body);
  if (!user) {
    return null;
  }
  try {
    const workspaces = await fetch("/kapis/tenant.kubesphere.io/v1beta1/workspacetemplates", {
      credentials: "include",
    });
    if (workspaces.ok) {
      const payload = await workspaces.json();
      if (Array.isArray(payload.items)) {
        user.workspaces = payload.items
          .map((item) => item?.metadata?.name)
          .filter(Boolean);
      }
    }
  } catch (e) {
    // keep user even if workspace list fails
  }
  try {
    const roles = await fetch(
      `/kapis/iam.kubesphere.io/v1beta1/users/${encodeURIComponent(username)}/roletemplates?scope=`,
      { credentials: "include" }
    );
    if (roles.ok) {
      const payload = await roles.json();
      const items = payload.items || [];
      const globalRules = {};
      items.forEach((item) => {
        const raw = item?.metadata?.annotations?.["iam.kubesphere.io/role-template-rules"];
        if (!raw) return;
        let parsed = {};
        try {
          parsed = JSON.parse(raw);
        } catch (err) {
          return;
        }
        Object.keys(parsed).forEach((key) => {
          const value = parsed[key];
          globalRules[key] = globalRules[key] || [];
          if (Array.isArray(value)) {
            globalRules[key] = globalRules[key].concat(value);
          } else {
            globalRules[key].push(value);
          }
        });
      });
      user.globalRules = globalRules;
    }
  } catch (e) {
    // keep user even if rules fail
  }
  return user;
}

export async function restoreSession() {
  const existing = window.globals && window.globals.user;
  if (existing && existing.username && existing.username !== "recovered") {
    return existing;
  }
  const username = rememberedSessionUser();
  if (!username) {
    return null;
  }
  const user = await fetchCurrentUser(username);
  if (user) {
    window.globals.user = user;
  }
  return user;
}
