const runtime = require("regenerator-runtime");

function isNativeGeneratorFunction(fn) {
  return (
    typeof fn === "function" &&
    fn.constructor &&
    fn.constructor.name === "GeneratorFunction"
  );
}

const origMark = runtime.mark.bind(runtime);
runtime.mark = function mark(fn) {
  if (isNativeGeneratorFunction(fn)) {
    return fn;
  }
  return origMark(fn);
};

module.exports = runtime;
module.exports.default = runtime;
