export function loadSelector() {
  return import(
    /* webpackChunkName: "ks-project-selector" */
    "./components/Selector/index.js"
  );
}
