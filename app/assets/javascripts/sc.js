(function () {
    var requirejs, require, define, __inflate;
    (function (e) {
        function a(e, t) {
            var n = t && t.split("/"),
                i = r.map,
                s = i && i["*"] || {},
                o, u, a, f, l, c, h;
            if (e && e.charAt(0) === "." && t) {
                n = n.slice(0, n.length - 1), e = n.concat(e.split("/"));
                for (l = 0; h = e[l]; l++) if (h === ".") e.splice(l, 1), l -= 1;
                else if (h === "..") {
                    if (l === 1 && (e[2] === ".." || e[0] === "..")) return !0;
                    l > 0 && (e.splice(l - 1, 2), l -= 2)
                }
                e = e.join("/")
            }
            if ((n || s) && i) {
                o = e.split("/");
                for (l = o.length; l > 0; l -= 1) {
                    u = o.slice(0, l).join("/");
                    if (n) for (c = n.length; c > 0; c -= 1) {
                        a = i[n.slice(0, c).join("/")];
                        if (a) {
                            a = a[u];
                            if (a) {
                                f = a;
                                break
                            }
                        }
                    }
                    f = f || s[u];
                    if (f) {
                        o.splice(0, l, f), e = o.join("/");
                        break
                    }
                }
            }
            return e
        }
        function f(t, n) {
            return function () {
                return u.apply(e, s.call(arguments, 0).concat([t, n]))
            }
        }
        function l(e) {
            return function (t) {
                return a(t, e)
            }
        }
        function c(e) {
            return function (n) {
                t[e] = n
            }
        }
        function h(r) {
            if (n.hasOwnProperty(r)) {
                var s = n[r];
                delete n[r], i[r] = !0, o.apply(e, s)
            }
            if (!t.hasOwnProperty(r)) throw new Error("No " + r);
            return t[r]
        }
        function p(e, t) {
            var n, r, i = e.indexOf("!");
            return i !== -1 ? (n = a(e.slice(0, i), t), e = e.slice(i + 1), r = h(n), r && r.normalize ? e = r.normalize(e, l(t)) : e = a(e, t)) : e = a(e, t), {
                f: n ? n + "!" + e : e,
                n: e,
                p: r
            }
        }
        function d(e) {
            return function () {
                return r && r.config && r.config[e] || {}
            }
        }
        var t = {},
            n = {},
            r = {},
            i = {},
            s = [].slice,
            o, u;
        o = function (r, s, o, u) {
            var a = [],
                l, v, m, g, y, b;
            u = u || r, typeof o == "string" && (o = __inflate(r, o));
            if (typeof o == "function") {
                s = !s.length && o.length ? ["require", "exports", "module"] : s;
                for (b = 0; b < s.length; b++) {
                    y = p(s[b], u), m = y.f;
                    if (m === "require") a[b] = f(r);
                    else if (m === "exports") a[b] = t[r] = {}, l = !0;
                    else if (m === "module") v = a[b] = {
                        id: r,
                        uri: "",
                        exports: t[r],
                        config: d(r)
                    };
                    else if (t.hasOwnProperty(m) || n.hasOwnProperty(m)) a[b] = h(m);
                    else if (y.p) y.p.load(y.n, f(u, !0), c(m), {}), a[b] = t[m];
                    else if (!i[m]) throw new Error(r + " missing " + m)
                }
                g = o.apply(t[r], a);
                if (r) if (v && v.exports !== e && v.exports !== t[r]) t[r] = v.exports;
                else if (g !== e || !l) t[r] = g
            } else r && (t[r] = o)
        }, requirejs = require = u = function (t, n, i, s) {
            return typeof t == "string" ? h(p(t, n).f) : (t.splice || (r = t, n.splice ? (t = n, n = i, i = null) : t = e), n = n ||
            function () {}, s ? o(e, t, n, i) : setTimeout(function () {
                o(e, t, n, i)
            }, 15), u)
        }, u.config = function (e) {
            return r = e, u
        }, define = function (e, t, r) {
            t.splice || (r = t, t = []), n[e] = [e, t, r]
        }, define.amd = {
            jQuery: !0
        }
    })(), __inflate = function (name, src) {
        var r;
        return eval(["r = function(a,b,c){", "\n};\n//@ sourceURL=" + name + "\n"].join(src)), r
    }, define("lib/api/events", ["require", "exports", "module"], function (e, t, n) {
        t.api = {
            LOAD_PROGRESS: "loadProgress",
            PLAY_PROGRESS: "playProgress",
            PLAY: "play",
            PAUSE: "pause",
            FINISH: "finish",
            SEEK: "seek",
            READY: "ready",
            OPEN_SHARE_PANEL: "sharePanelOpened",
            CLICK_DOWNLOAD: "downloadClicked",
            CLICK_BUY: "buyClicked",
            ERROR: "error"
        }, t.bridge = {
            REMOVE_LISTENER: "removeEventListener",
            ADD_LISTENER: "addEventListener"
        }
    }), define("lib/api/getters", ["require", "exports", "module"], function (e, t, n) {
        n.exports = {
            GET_VOLUME: "getVolume",
            GET_DURATION: "getDuration",
            GET_POSITION: "getPosition",
            GET_SOUNDS: "getSounds",
            GET_CURRENT_SOUND: "getCurrentSound",
            GET_CURRENT_SOUND_INDEX: "getCurrentSoundIndex",
            IS_PAUSED: "isPaused"
        }
    }), define("lib/api/setters", ["require", "exports", "module"], function (e, t, n) {
        n.exports = {
            PLAY: "play",
            PAUSE: "pause",
            TOGGLE: "toggle",
            SEEK_TO: "seekTo",
            SET_VOLUME: "setVolume",
            NEXT: "next",
            PREV: "prev",
            SKIP: "skip"
        }
    }), define("lib/api/api", ["require", "exports", "module", "lib/api/events", "lib/api/getters", "lib/api/setters"], function (e, t, n) {
        function m(e) {
            return !!(e === "" || e && e.charCodeAt && e.substr)
        }
        function g(e) {
            return !!(e && e.constructor && e.call && e.apply)
        }
        function y(e) {
            return !!e && e.nodeType === 1 && e.nodeName.toUpperCase() === "IFRAME"
        }
        function b(e) {
            var t = !1,
                n;
            for (n in i) if (i.hasOwnProperty(n) && i[n] === e) {
                t = !0;
                break
            }
            return t
        }
        function w(e) {
            var t, n, r;
            for (t = 0, n = f.length; t < n; t++) {
                r = e(f[t]);
                if (r === !1) break
            }
        }
        function E(e) {
            var t = "",
                n, r, i;
            e.substr(0, 2) === "//" && (e = window.location.protocol + e), i = e.split("/");
            for (n = 0, r = i.length; n < r; n++) {
                if (!(n < 3)) break;
                t += i[n], n < 2 && (t += "/")
            }
            return t
        }
        function S(e) {
            return e.contentWindow ? e.contentWindow : e.contentDocument && "parentWindow" in e.contentDocument ? e.contentDocument.parentWindow : null
        }
        function x(e) {
            var t = [],
                n;
            for (n in e) e.hasOwnProperty(n) && t.push(e[n]);
            return t
        }
        function T(e, t, n) {
            n.callbacks[e] = n.callbacks[e] || [], n.callbacks[e].push(t)
        }
        function N(e, t) {
            var n = !0,
                r;
            return t.callbacks[e] = [], w(function (t) {
                r = t.callbacks[e] || [];
                if (r.length) return n = !1, !1
            }), n
        }
        function C(e, t, n) {
            var r = S(n),
                i, s;
            if (!r.postMessage) return !1;
            i = n.getAttribute("src").split("?")[0], s = JSON.stringify({
                method: e,
                value: t
            }), i.substr(0, 2) === "//" && (i = window.location.protocol + i), i = i.replace(/http:\/\/(w|wt).soundcloud.com/, "https://$1.soundcloud.com"), r.postMessage(s, i)
        }
        function k(e) {
            var t;
            return w(function (n) {
                if (n.instance === e) return t = n, !1
            }), t
        }
        function L(e) {
            var t;
            return w(function (n) {
                if (S(n.element) === e) return t = n, !1
            }), t
        }
        function A(e, t) {
            return function (n) {
                var r = g(n),
                    i = k(this),
                    s = !r && t ? n : null,
                    o = r && !t ? n : null;
                return o && T(e, o, i), C(e, s, i.element), this
            }
        }
        function O(e, t, n) {
            var r, i, s;
            for (r = 0, i = t.length; r < i; r++) s = t[r], e[s] = A(s, n)
        }
        function M(e, t, n) {
            return e + "?url=" + t + "&" + _(n)
        }
        function _(e) {
            var t, n, r = [];
            for (t in e) e.hasOwnProperty(t) && (n = e[t], r.push(t + "=" + (t === "start_track" ? parseInt(n, 10) : n ? "true" : "false")));
            return r.join("&")
        }
        function D(e, t, n) {
            var r = e.callbacks[t] || [],
                i, s;
            for (i = 0, s = r.length; i < s; i++) r[i].apply(e.instance, n);
            if (b(t) || t === o.READY) e.callbacks[t] = []
        }
        function P(e) {
            var t, n, r, i, s;
            try {
                n = JSON.parse(e.data)
            } catch (u) {
                return !1
            }
            t = L(e.source), r = n.method, i = n.value;
            if (t && H(e.origin) !== H(t.domain)) return !1;
            if (!t) return r === o.READY && a.push(e.source), !1;
            r === o.READY && (t.isReady = !0, D(t, l), N(l, t)), r === o.PLAY && !t.playEventFired && (t.playEventFired = !0), r === o.PLAY_PROGRESS && !t.playEventFired && (t.playEventFired = !0, D(t, o.PLAY, [i])), s = [], i !== undefined && s.push(i), D(t, r, s)
        }
        function H(e) {
            return e.replace(h, "")
        }
        var r = e("lib/api/events"),
            i = e("lib/api/getters"),
            s = e("lib/api/setters"),
            o = r.api,
            u = r.bridge,
            a = [],
            f = [],
            l = "__LATE_BINDING__",
            c = "http://wt.soundcloud.dev:9200/",
            h = /^http(?:s?)/,
            p, d, v;
        window.addEventListener ? window.addEventListener("message", P, !1) : window.attachEvent("onmessage", P), n.exports = v = function (e, t, n) {
            m(e) && (e = document.getElementById(e));
            if (!y(e)) throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");
            t && (n = n || {}, e.src = M(c, t, n));
            var r = L(S(e)),
                i, s;
            return r && r.instance ? r.instance : (i = a.indexOf(S(e)) > -1, s = new p(e), f.push(new d(s, e, i)), s)
        }, v.Events = o, window.SC = window.SC || {}, window.SC.Widget = v, d = function (e, t, n) {
            this.instance = e, this.element = t, this.domain = E(t.getAttribute("src")), this.isReady = !! n, this.callbacks = {}
        }, p = function () {}, p.prototype = {
            constructor: p,
            load: function (e, t) {
                if (!e) return;
                t = t || {};
                var n = this,
                    r = k(this),
                    i = r.element,
                    s = i.src,
                    a = s.substr(0, s.indexOf("?"));
                r.isReady = !1, r.playEventFired = !1, i.onload = function () {
                    n.bind(o.READY, function () {
                        var e, n = r.callbacks;
                        for (e in n) n.hasOwnProperty(e) && e !== o.READY && C(u.ADD_LISTENER, e, r.element);
                        t.callback && t.callback()
                    })
                }, i.src = M(a, e, t)
            },
            bind: function (e, t) {
                var n = this,
                    r = k(this);
                return r && r.element && (e === o.READY && r.isReady ? setTimeout(t, 1) : r.isReady ? (T(e, t, r), C(u.ADD_LISTENER, e, r.element)) : T(l, function () {
                    n.bind(e, t)
                }, r)), this
            },
            unbind: function (e) {
                var t = k(this),
                    n;
                t && t.element && (n = N(e, t), e !== o.READY && n && C(u.REMOVE_LISTENER, e, t.element))
            }
        }, O(p.prototype, x(i)), O(p.prototype, x(s), !0)
    }), window.SC = window.SC || {}, window.SC.Widget = require("lib/api/api")
})()
