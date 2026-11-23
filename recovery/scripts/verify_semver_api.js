const semver = require("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/node_modules/semver");
console.log("version", require("/home/bruce/code/ks-develop/kse-console-v3/recovery/react-app/node_modules/semver/package.json").version);
console.log("type", typeof semver);
console.log("gte", typeof semver.gte, semver.gte("1.23.0", "1.21.0"));
console.log("validRange", typeof semver.validRange);
console.log("satisfies", typeof semver.satisfies);
console.log("keys", Object.keys(semver).slice(0, 20).join(","));
