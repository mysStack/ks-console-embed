"use strict";

(function (e) {
  var r = n(861);
  var o = typeof exports == "object" && exports && !exports.nodeType && exports;
  var i = o && typeof e == "object" && e && !e.nodeType && e;
  var a = i && i.exports === o ? r.a.Buffer : undefined;
  var l = a ? a.allocUnsafe : undefined;
  t.a = function (e, t) {
    if (t) {
      return e.slice();
    }
    var n = e.length;
    var r = l ? l(n) : new e.constructor(n);
    e.copy(r);
    return r;
  };
}).call(this, n(1342)(e));