import React from "react";

export default function inherits(subClass, superClass) {
  if (typeof superClass !== "function") {
    superClass = React.Component;
  }
  subClass.prototype = Object.create(superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(subClass, superClass);
  } else {
    subClass.__proto__ = superClass;
  }
}
