"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = updateIn;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateIn(o, ns, v) {
    if (!ns) return null;
    !Array.isArray(ns) && (ns = [ns]);

    function _updateIn(_o) {
        var tn = ns.shift();
        if (Array.isArray(_o)) {
            var __o = _o.slice();
            __o[tn] = ns.length ? _updateIn(__o[tn]) : v;
            return __o;
        } else return Object.assign({}, _o, _defineProperty({}, tn, ns.length ? _updateIn(_o[tn]) : v));
    }
    return _updateIn(o);
}