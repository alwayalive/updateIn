export default Tool = {
    updateIn(o, ns, v) {
        if (!ns) return null;
        !Array.isArray(ns) && (ns = [ns])

        function _updateIn(_o) {
            let tn = ns.shift();
            if (Array.isArray(_o)) {
                let __o = _o.slice();
                __o[tn] = ns.length ? _updateIn(__o[tn]) : v
                return __o
            } else return Object.assign({}, _o, {
                [tn]: (ns.length ? _updateIn(_o[tn]) : v) })
        }
        return _updateIn(o);
    }
}