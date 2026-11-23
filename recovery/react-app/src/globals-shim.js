import clientConfig from "./client-config.json";

const emptyNavs = {
  globalNavs: [],
  clusterNavs: [],
  workspaceNavs: { children: [] },
  projectNavs: [],
  devopsNavs: [],
  accessNavs: [{ items: [] }],
  observabilityNavs: { children: [] },
  manageAppNavs: [],
  federatedProjectNavs: [],
  edgeCalculationNavs: [],
  nodeGroupNavs: [],
  platformSettingsNavs: [],
};

window.globals = window.globals || {
  useDefaultTheme: true,
  defaultTheme: { logo: "/assets/logo.svg" },
  theme: { logo: "/assets/logo.svg" },
  config: Object.assign({}, emptyNavs, clientConfig, {
    title: "KubeSphere (recovered)",
    logo: "/assets/logo.svg",
    enableErrorNotify: false,
    disableAuthorization: true,
  }),
  ksConfig: {
    enabledExtensionModulesStatus: {},
    multicluster: { clusterRole: "none" },
    ksVersion: "v3.3.2",
  },
  clusterConfig: {
    default: { ksVersion: "v3.3.2" },
  },
  localeManifest: {
    "locale-en.json": "locale-en.60d9ddf6aff8fa136646.json",
    "locale-zh.json": "locale-zh.4dcfc8f8663252717a8c.json",
    "locale-tc.json": "locale-tc.51f034784a9c9904d493.json",
    "locale-es.json": "locale-es.17fac91efc88f812ecab.json",
  },
};
window.t =
  window.t ||
  function t(key) {
    return key;
  };
