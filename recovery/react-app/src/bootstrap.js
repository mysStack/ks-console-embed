import "./globals-shim.js";
import { restoreSession } from "./session-restore.js";

window.__ksLoadSelector = function ksLoadSelector() {
  return import(
    /* webpackChunkName: "ks-project-selector" */
    "./pages/projects/components/Selector/index.js"
  );
};

restoreSession().finally(() => {
  import("./unpacked/entry.js");
  let selectorRuntime = null;

  const renderSelector = () => {
    const host = document.getElementById("ks-project-selector-host");
    if (!host || !selectorRuntime) {
      return;
    }
    const { Comp, React, ReactDOM } = selectorRuntime;
    const detail = window.__ksProjectDetail || {};
    ReactDOM.render(
      React.createElement(Comp, {
        title: typeof t === "function" ? t("PROJECT") : "PROJECT",
        detail,
        workspace: detail.workspace,
        onChange(path) {
          if (typeof window.__ksProjectPush === "function") {
            window.__ksProjectPush(path);
          }
        },
      }),
      host
    );
  };

  window.__ksSyncSelector = renderSelector;

  const mountSelector = () => {
    const host = document.getElementById("ks-project-selector-host");
    if (!host) {
      return;
    }
    if (selectorRuntime) {
      renderSelector();
      return;
    }
    if (host.getAttribute("data-ks-mounted")) {
      return;
    }
    const load = window.__ksLoadSelector;
    if (typeof load !== "function") {
      return;
    }
    host.setAttribute("data-ks-mounted", "1");
    Promise.all([load(), import("react"), import("react-dom")])
      .then(([mod, reactMod, reactDomMod]) => {
        const Comp = mod && (mod.default || mod);
        const React = reactMod && (reactMod.default || reactMod);
        const ReactDOM = reactDomMod && (reactDomMod.default || reactDomMod);
        if (!Comp || !React || !ReactDOM || typeof ReactDOM.render !== "function") {
          host.removeAttribute("data-ks-mounted");
          return;
        }
        selectorRuntime = { Comp, React, ReactDOM };
        renderSelector();
      })
      .catch(() => {
        host.removeAttribute("data-ks-mounted");
      });
  };

  const observer = new MutationObserver(mountSelector);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  mountSelector();
});
