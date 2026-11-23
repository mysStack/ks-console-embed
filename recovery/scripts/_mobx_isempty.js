const { observable, toJS } = require("mobx");
const { isEmpty, has } = require("lodash");

const plain = { app: "web-matrix" };
const obs = observable.object({ selector: { app: "web-matrix" } });
const boxed = observable({ app: "web-matrix" });

console.log("plain", isEmpty(plain), Object.keys(plain));
console.log("obs.selector", isEmpty(obs.selector), Object.keys(obs.selector || {}));
console.log("boxed", isEmpty(boxed), Object.keys(boxed));
console.log("toJS boxed", isEmpty(toJS(boxed)));
console.log("has labelSelector empty str", has({ labelSelector: "" }, "labelSelector"));
console.log("isEmpty undefined", isEmpty(undefined));
console.log("isEmpty {}", isEmpty({}));
