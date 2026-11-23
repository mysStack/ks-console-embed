function copyOwn(target, source) {
  if (!source || (typeof source !== "object" && typeof source !== "function")) {
    return target;
  }
  let keys;
  try {
    keys = Object.getOwnPropertyNames(source);
  } catch (error) {
    return target;
  }
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (key === "__esModule") continue;
    try {
      const value = source[key];
      target[key] = value;
    } catch (error) {
      /* native getters can throw */
    }
  }
  return target;
}

export function __recoverInterop(ns) {
  if (!ns || (typeof ns !== "object" && typeof ns !== "function")) {
    return ns;
  }
  const exported = ns.default;
  if (exported === undefined) {
    return ns;
  }
  if (typeof exported === "function") {
    const wrapped = function recoveredDefault() {
      if (typeof Reflect === "object" && Reflect.construct && new.target) {
        return Reflect.construct(exported, arguments, new.target);
      }
      return exported.apply(this, arguments);
    };
    try {
      Object.setPrototypeOf(wrapped, exported);
    } catch (error) {
      /* ignore */
    }
    copyOwn(wrapped, ns);
    copyOwn(wrapped, exported);
    try {
      wrapped.default = exported;
    } catch (error) {
      /* ignore */
    }
    return wrapped;
  }
  return exported;
}
