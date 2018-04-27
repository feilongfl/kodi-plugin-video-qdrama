webpackJsonp([5], {
    "/Uby": function(t, e, n) {
        "use strict";
        var i = n("Dd8w")
          , a = n.n(i)
          , s = n("NYxO")
          , r = {
            name: "search-bar",
            computed: a()({}, Object(s.d)(["searchQuery"])),
            methods: a()({}, Object(s.b)(["fetchSearchResults"]), {
                onChange: function(t) {
                    var e = {}
                      , n = t.target.value.trim();
                    n.length && (e = {
                        path: "/search",
                        query: {
                            q: n
                        }
                    });
                    var i = "search" !== this.$route.name ? "push" : "replace";
                    this.$router[i](e),
                    this.fetchSearchResults(n)
                }
            })
        }
          , o = n("XyMi");
        var c = function(t) {
            n("IMvD")
        }
          , u = Object(o.a)(r, function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "search-bar"
            }, [e("input", {
                attrs: {
                    type: "text",
                    spellcheck: "false",
                    placeholder: "搜尋動畫作品"
                },
                domProps: {
                    value: this.searchQuery
                },
                on: {
                    input: this.onChange
                }
            })])
        }, [], !1, c, "data-v-007f5520", null);
        e.a = u.exports
    },
    "/XAD": function(t, e) {},
    "4xy9": function(t, e) {},
    "5DWM": function(t, e) {},
    "6qMM": function(t, e) {},
    "7oIK": function(t, e) {},
    "8ELW": function(t, e) {},
    "8laK": function(t, e) {},
    BB2M: function(t, e, n) {
        "use strict";
        var i = n("n5Qe")
          , a = {
            name: "ads",
            props: {
                type: {
                    type: String,
                    required: !0
                },
                size: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                src: function() {
                    var t = this.size
                      , e = t.width
                      , n = t.height;
                    return i.a.replace("_", "ads") + "/iframe?type=" + this.type + "#" + e + "x" + n
                },
                style: function() {
                    var t = this.size
                      , e = t.width;
                    return {
                        height: t.height + "px",
                        width: e + "px"
                    }
                }
            }
        }
          , s = n("XyMi");
        var r = function(t) {
            n("8ELW")
        }
          , o = Object(s.a)(a, function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "wrapper",
                style: this.style
            }, [e("iframe", {
                style: this.style,
                attrs: {
                    frameBorder: "0",
                    src: this.src
                }
            })])
        }, [], !1, r, "data-v-307d78bc", null);
        e.a = o.exports
    },
    FFZ1: function(t, e) {},
    IMvD: function(t, e) {},
    L295: function(t, e) {
        window.onload = function() {
            var t = [["https://i.imgur.com/BimpCoA.png", "62, 223, 232"], ["https://i.imgur.com/P58ED0J.png", "74, 247, 80"], ["https://i.imgur.com/wlHOvru.png", "255, 174, 244"], ["https://i.imgur.com/LWeBSWW.png", "180, 240, 255"]]
              , e = t[Math.floor(Math.random() * t.length)]
              , n = e[0]
              , i = e[1]
              , a = document.querySelector("#app > .phase-beam")
              , s = document.createDocumentFragment()
              , r = [200, 300, 400]
              , o = Math.max.apply(null, r)
              , c = window.innerWidth - o
              , u = window.innerHeight - o
              , l = [[.05, .4], [.4, .5], [.75, .2]]
              , d = "";
            r.forEach(function(t, e) {
                var n = "pbc" + Math.floor(Date.now() * Math.random()).toString(16)
                  , a = document.createElement("div")
                  , r = (c + u) / 2 * .2
                  , o = c * l[e][0] + Math.random() * r
                  , h = u * l[e][1] + Math.random() * r;
                a.setAttribute("data-" + n, ""),
                d += "\n      @keyframes " + n + " {\n        0% { transform: translate3d(" + o + "px, " + h + "px, 0); }\n        49.99% { transform: translate3d(" + (c + o) + "px, " + -1 * (u - h) + "px, 0); }\n        50% { transform: translate3d(" + -(c - o) + "px, " + (u + h) + "px, 0); }\n        100% { transform: translate3d(" + o + "px, " + h + "px, 0); }\n      }\n      [data-" + n + "] {\n        animation: " + n + " 60s infinite linear;\n        background: radial-gradient(rgba(" + i + ", .125) 0%, transparent " + t / 2 + "px);\n        height: " + t + "px;\n        position: absolute;\n        width: " + t + "px;\n        will-change: transform;\n      }\n    ",
                s.appendChild(a)
            });
            var h = document.createElement("style");
            h.innerHTML = d.replace(/\s{2,}/g, ""),
            s.appendChild(h),
            a.style.background = "url(" + n + ") center no-repeat",
            a.style.backgroundSize = "cover",
            a.style.height = "100%",
            a.style.left = 0,
            a.style.pointerEvents = "none",
            a.style.position = "fixed",
            a.style.top = 0,
            a.style.width = "100%",
            a.appendChild(s)
        }
    },
    LbrN: function(t, e, n) {
        t.exports = n.p + "static/img/ebuko-sprite_3.f42e7c4.png"
    },
    MCa2: function(t, e, n) {
        t.exports = n.p + "static/img/ebuko-sprite_4.74ef803.png"
    },
    NHnr: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("Xxa5")
          , a = n.n(i)
          , s = n("fZjL")
          , r = n.n(s)
          , o = n("exGp")
          , c = n.n(o)
          , u = n("//Fk")
          , l = n.n(u)
          , d = n("/5sW")
          , h = n("9mpg")
          , p = n.n(h)
          , f = n("no1S")
          , m = n.n(f)
          , v = n("Dd8w")
          , g = n.n(v)
          , y = n("NYxO")
          , b = n("O4Lo")
          , _ = n.n(b)
          , w = n("BB2M")
          , k = n("WaO5")
          , x = n.n(k)
          , C = n("OUrN")
          , S = n.n(C)
          , E = n("LbrN")
          , j = n.n(E)
          , T = n("MCa2")
          , P = n.n(T)
          , L = n("pFle")
          , M = n.n(L)
          , H = {
            name: "ebuko",
            data: function() {
                return {
                    context: null,
                    flag: null,
                    disappearing: !1,
                    currentFrameAborting: !1
                }
            },
            methods: {
                loadResource: function(t) {
                    var e = t.src
                      , n = t.frameCount
                      , i = t.fps;
                    return new l.a(function(t) {
                        var a = new Image;
                        a.onload = function() {
                            return t({
                                image: a,
                                frameCount: n,
                                fps: i
                            })
                        }
                        ,
                        a.src = e
                    }
                    )
                },
                draw: function(t, e) {
                    var n = this
                      , i = t.image
                      , s = t.frameCount;
                    return c()(a.a.mark(function t() {
                        var r, o, c, u, l, d;
                        return a.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    r = n.$el,
                                    o = r.width,
                                    c = r.height,
                                    u = i.height / s * e,
                                    l = i.width / (i.width / o),
                                    d = i.height / (i.height / c),
                                    window.requestAnimationFrame(function() {
                                        n.context.clearRect(0, 0, o, c),
                                        n.context.drawImage(i, 0, u, i.width, i.height, 0, 0, l, d * s)
                                    });
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }, t, n)
                    }))()
                },
                drawCycle: function(t) {
                    var e = this;
                    return new l.a(function(n) {
                        var i = 0
                          , a = setInterval(function() {
                            e.draw(t, i),
                            i += 1,
                            (e.currentFrameAborting || i === t.frameCount) && (clearInterval(a),
                            n())
                        }, 1e3 / t.fps)
                    }
                    )
                },
                onAction: function() {
                    "action" !== this.flag && (this.flag = "action",
                    this.currentFrameAborting = !0)
                }
            },
            mounted: function() {
                var t = this;
                return c()(a.a.mark(function e() {
                    var n, i, s, r, o, u, l, d, h, p;
                    return a.a.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.$el,
                                t.context = n.getContext("2d"),
                                i = n.width,
                                s = n.height,
                                n.width = i * window.devicePixelRatio,
                                n.height = s * window.devicePixelRatio,
                                n.style.width = i + "px",
                                n.style.height = s + "px",
                                t.context.imageSmoothingQuality = "medium",
                                e.next = 10,
                                t.loadResource({
                                    src: x.a,
                                    frameCount: 18,
                                    fps: 14
                                });
                            case 10:
                                return r = e.sent,
                                e.next = 13,
                                t.loadResource({
                                    src: S.a,
                                    frameCount: 19,
                                    fps: 14
                                });
                            case 13:
                                return o = e.sent,
                                e.next = 16,
                                t.loadResource({
                                    src: j.a,
                                    frameCount: 18,
                                    fps: 14
                                });
                            case 16:
                                return u = e.sent,
                                e.next = 19,
                                t.loadResource({
                                    src: P.a,
                                    frameCount: 39,
                                    fps: 18
                                });
                            case 19:
                                return l = e.sent,
                                e.next = 22,
                                t.loadResource({
                                    src: M.a,
                                    frameCount: 36,
                                    fps: 18
                                });
                            case 22:
                                d = e.sent,
                                (h = function e(n, i) {
                                    if (!t.disappearing) {
                                        var a = Math.round(400 * Math.random() + n - 200);
                                        setTimeout(function() {
                                            i(),
                                            e(n, i)
                                        }, a)
                                    }
                                }
                                )(5e3, function() {
                                    null === t.flag && (t.flag = Math.random() > .6 ? "smile" : "blink")
                                }),
                                h(3e4, function() {
                                    t.flag = "happy"
                                }),
                                (p = function() {
                                    var e = c()(a.a.mark(function e() {
                                        return a.a.wrap(function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (!t.disappearing) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return");
                                                case 2:
                                                    e.t0 = t.flag,
                                                    e.next = "blink" === e.t0 ? 5 : "smile" === e.t0 ? 9 : "happy" === e.t0 ? 13 : "action" === e.t0 ? 17 : 21;
                                                    break;
                                                case 5:
                                                    return e.next = 7,
                                                    t.drawCycle(o);
                                                case 7:
                                                    return t.currentFrameAborting || (t.flag = null),
                                                    e.abrupt("break", 23);
                                                case 9:
                                                    return e.next = 11,
                                                    t.drawCycle(u);
                                                case 11:
                                                    return t.currentFrameAborting || (t.flag = null),
                                                    e.abrupt("break", 23);
                                                case 13:
                                                    return e.next = 15,
                                                    t.drawCycle(l);
                                                case 15:
                                                    return t.currentFrameAborting || (t.flag = null),
                                                    e.abrupt("break", 23);
                                                case 17:
                                                    return e.next = 19,
                                                    t.drawCycle(d);
                                                case 19:
                                                    return t.currentFrameAborting || (t.flag = null),
                                                    e.abrupt("break", 23);
                                                case 21:
                                                    return e.next = 23,
                                                    t.drawCycle(r);
                                                case 23:
                                                    t.currentFrameAborting = !1,
                                                    p();
                                                case 25:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }, e, t)
                                    }));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }())();
                            case 28:
                            case "end":
                                return e.stop()
                            }
                    }, e, t)
                }))()
            },
            beforeDestroy: function() {
                this.disappearing = !0
            }
        }
          , R = n("XyMi");
        var I = function(t) {
            n("/XAD")
        }
          , O = Object(R.a)(H, function() {
            var t = this
              , e = t.$createElement;
            return (t._self._c || e)("canvas", {
                attrs: {
                    "data-ebuko": "",
                    width: "110",
                    height: "176"
                },
                on: {
                    contextmenu: function(t) {
                        t.preventDefault()
                    },
                    click: function(e) {
                        return e.preventDefault(),
                        t.onAction(e)
                    }
                }
            })
        }, [], !1, I, "data-v-1b567758", null).exports
          , D = n("wd27")
          , A = n("/Uby")
          , F = {
            name: "notification",
            props: {
                payload: {
                    type: Object,
                    required: !0
                }
            },
            methods: g()({}, Object(y.b)(["dequeueNotification"]), {
                dismiss: function() {
                    this.dequeueNotification(this.payload.id)
                }
            })
        };
        var W = function(t) {
            n("6qMM")
        }
          , q = Object(R.a)(F, function() {
            var t, e = this.$createElement, n = this._self._c || e;
            return n("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [n("div", {
                staticClass: "notification",
                on: {
                    click: this.dismiss
                }
            }, [n("i", {
                class: (t = {},
                t["fe-" + this.payload.type] = !0,
                t)
            }), this._v(" "), n("span", [this._v(this._s(this.payload.text))])])])
        }, [], !1, W, "data-v-7a10d543", null).exports
          , z = (n("L295"),
        {
            name: "app",
            components: {
                Ads: w.a,
                Ebuko: O,
                Loader: D.a,
                SearchBar: A.a,
                Notification: q
            },
            data: function() {
                return {
                    year: (new Date).getFullYear(),
                    loaded: !1,
                    adsDismissed: !1
                }
            },
            computed: g()({}, Object(y.d)(["isMobile", "showEbuko", "notifications"]), {
                specialClass: function() {
                    return null
                },
                screenWidth: function() {
                    return window.innerWidth
                }
            }),
            methods: g()({}, Object(y.b)(["setIsMobile", "setEbukoUnwell", "setShowEbuko", "fetchAnimeList", "fetchHPData"]), {
                checkEbukoHealth: function() {
                    var t = this;
                    return new l.a(function(e) {
                        var n = document.createElement("script")
                          , i = function(i) {
                            n.parentNode.removeChild(n),
                            t.setEbukoUnwell(i),
                            e()
                        };
                        n.onload = i.bind(!0, !1),
                        n.onerror = i.bind(!1, !0),
                        n.src = "https://admax.network",
                        document.head.appendChild(n)
                    }
                    )
                }
            }),
            mounted: function() {
                var t = this;
                return c()(a.a.mark(function e() {
                    var n;
                    return a.a.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.checkEbukoHealth();
                            case 2:
                                return n = _()(function() {
                                    var e = !!window.matchMedia("(max-width: 799px)").matches
                                      , n = !!window.matchMedia("(min-width: 1622px)").matches;
                                    t.setIsMobile(e),
                                    t.setShowEbuko(n)
                                }, 250),
                                window.addEventListener("resize", n),
                                n(),
                                e.next = 7,
                                t.fetchAnimeList();
                            case 7:
                                return e.next = 9,
                                t.fetchHPData();
                            case 9:
                                t.loaded = !0;
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }, e, t)
                }))()
            }
        });
        var B = function(t) {
            n("TuST"),
            n("anpH")
        }
          , X = Object(R.a)(z, function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: t.specialClass,
                attrs: {
                    id: "app"
                }
            }, [n("div", {
                staticClass: "content"
            }, [n("nav", [n("div", {
                staticClass: "left"
            }, [n("router-link", {
                staticClass: "logo link",
                attrs: {
                    to: {
                        name: "index"
                    }
                }
            }, [n("i"), t._v(" "), n("span", [t._v("ebb")])])], 1), t._v(" "), n("div", {
                staticClass: "center"
            }, [t.loaded && !t.isMobile ? n("search-bar") : t._e()], 1), t._v(" "), n("div", {
                staticClass: "right"
            }, [t.isMobile ? n("div", {
                staticClass: "icon"
            }, [n("router-link", {
                staticClass: "link",
                attrs: {
                    to: {
                        name: "search"
                    }
                }
            }, [n("i", {
                staticClass: "fe-search"
            })])], 1) : t._e(), t._v(" "), n("div", {
                staticClass: "icon"
            }, [n("router-link", {
                staticClass: "link",
                attrs: {
                    to: {
                        name: "watch-history"
                    }
                }
            }, [n("i", {
                staticClass: "fe-time"
            })])], 1)])]), t._v(" "), n("main", [t.loaded ? t._e() : n("loader"), t._v(" "), t.loaded ? n("router-view") : t._e()], 1), t._v(" "), n("footer", [n("div", [n("span", [t._v("© " + t._s(t.year) + " ebb.io")]), t._v(" "), n("ins"), t._v(" "), n("a", {
                staticClass: "link",
                attrs: {
                    href: "https://t.me/ebbStatus",
                    target: "_blank"
                }
            }, [t._v("最新消息")]), t._v(" "), n("ins"), t._v(" "), n("router-link", {
                staticClass: "link",
                attrs: {
                    to: {
                        name: "about"
                    }
                }
            }, [t._v("關於我們")]), t._v(" "), n("br"), t._v(" "), n("br"), t._v(" "), t._m(0)], 1)])]), t._v(" "), n("transition", {
                attrs: {
                    name: "ebuko",
                    mode: "out-in"
                }
            }, [t.showEbuko ? n("ebuko") : t._e()], 1), t._v(" "), n("div", {
                staticClass: "notification-wrapper"
            }, t._l(t.notifications, function(t) {
                return n("notification", {
                    key: t.id,
                    attrs: {
                        payload: t
                    }
                })
            })), t._v(" "), n("div", {
                staticClass: "phase-beam"
            }), t._v(" "), t.isMobile && !t.adsDismissed ? n("div", {
                staticClass: "mfloat-ads"
            }, [n("ads", {
                attrs: {
                    type: "iit_banner",
                    size: {
                        width: t.screenWidth,
                        height: 120
                    }
                }
            }), t._v(" "), n("i", {
                staticClass: "fe-remove",
                on: {
                    click: function(e) {
                        t.adsDismissed = !0
                    }
                }
            })], 1) : t._e()], 1)
        }, [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "disclaimer"
            }, [this._v("\n          本站影片皆串流自其他網站，伺服器並不保存影音資源\n          "), e("br"), this._v("\n          影片版權歸原作者所有，如有侵權請盡快通知我們反映\n        ")])
        }
        ], !1, B, "data-v-7389abdf", null).exports
          , U = n("d7EF")
          , N = n.n(U)
          , $ = n("bOdI")
          , Y = n.n($)
          , V = n("Y4FN")
          , Q = n.n(V)
          , K = n("n5Qe");
        d.default.use(y.a);
        var G = {
            isMobile: !1,
            showEbuko: !1,
            notifications: [],
            hpData: {},
            animeList: [],
            searchQuery: "",
            searchResultIds: [],
            directoryParams: null,
            playerConfig: g()({
                rate: 1,
                volume: 1
            }, Q.a.get("fl-player-config") || {}),
            watchHistory: Q.a.get("fl-watch-history") || {}
        }
          , Z = !1
          , J = {
            SET_IS_MOBILE: function(t, e) {
                t.isMobile = e
            },
            SET_SHOW_EBUKO: function(t, e) {
                t.showEbuko = e
            },
            ENQUEUE_NOTIFICATION: function(t, e) {
                t.notifications.push(e)
            },
            DEQUEUE_NOTIFICATION: function(t, e) {
                t.notifications = t.notifications.filter(function(t) {
                    return t.id !== e
                })
            },
            SET_HP_DATA: function(t, e) {
                t.hpData = e
            },
            SET_ANIME_LIST: function(t, e) {
                t.animeList = e
            },
            SET_SEARCH_QUERY: function(t, e) {
                t.searchQuery = e
            },
            SET_SEARCH_RESULT_IDS: function(t, e) {
                t.searchResultIds = e
            },
            UPDATE_DIRECTORY_PARAMS: function(t, e) {
                t.directoryParams = e
            },
            SET_PLAYER_CONFIG: function(t, e) {
                Q.a.set("fl-player-config", e),
                t.playerConfig = e
            },
            SET_WATCH_HISTORY: function(t, e) {
                Q.a.set("fl-watch-history", e),
                t.watchHistory = e
            }
        }
          , tt = {
            setIsMobile: function(t, e) {
                var n = this
                  , i = t.commit;
                return c()(a.a.mark(function t() {
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                i("SET_IS_MOBILE", e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            },
            setShowEbuko: function(t, e) {
                var n = this
                  , i = t.commit;
                return c()(a.a.mark(function t() {
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                i("SET_SHOW_EBUKO", e && !Z);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            },
            setEbukoUnwell: function(t, e) {
                var n = this;
                return c()(a.a.mark(function t() {
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                Z = e;
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            },
            enqueueNotification: function(t, e) {
                var n = this
                  , i = t.commit
                  , s = t.dispatch
                  , r = e.type
                  , o = e.text
                  , u = e.duration;
                return c()(a.a.mark(function t() {
                    var e;
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e = "" + (1e8 * Math.random()).toString(16),
                                i("ENQUEUE_NOTIFICATION", {
                                    id: e,
                                    type: r,
                                    text: o
                                }),
                                setTimeout(function() {
                                    return s("dequeueNotification", e)
                                }, u);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            },
            dequeueNotification: function(t, e) {
                var n = this
                  , i = t.commit;
                return c()(a.a.mark(function t() {
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                i("DEQUEUE_NOTIFICATION", e);
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            },
            fetchHPData: function(t) {
                var e = this
                  , n = t.commit;
                return c()(a.a.mark(function t() {
                    var i;
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                K.b.fetchHPData();
                            case 2:
                                i = t.sent,
                                n("SET_HP_DATA", i);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, e)
                }))()
            },
            fetchAnimeList: function(t) {
                var e = this
                  , n = t.commit;
                return c()(a.a.mark(function t() {
                    var i;
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                K.b.fetchAnimeList();
                            case 2:
                                i = t.sent,
                                n("SET_ANIME_LIST", i);
                            case 4:
                            case "end":
                                return t.stop()
                            }
                    }, t, e)
                }))()
            },
            fetchSearchResults: function(t, e) {
                var n = this
                  , i = t.commit;
                return c()(a.a.mark(function t() {
                    var s, r;
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return s = e.trim(),
                                i("SET_SEARCH_QUERY", s),
                                t.next = 4,
                                K.b.fetchSearchResults(s);
                            case 4:
                                r = t.sent,
                                window.ga("send", "event", "Search", "query", s),
                                i("SET_SEARCH_RESULT_IDS", r);
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            },
            updateDirectoryParams: function(t, e) {
                var n = this
                  , i = t.commit
                  , s = t.state;
                return c()(a.a.mark(function t() {
                    var r;
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 3;
                                    break
                                }
                                return i("UPDATE_DIRECTORY_PARAMS", null),
                                t.abrupt("return");
                            case 3:
                                r = void 0,
                                t.t0 = e.type,
                                t.next = "all" === t.t0 ? 7 : "tag" === t.t0 ? 9 : "studio" === t.t0 ? 9 : 18;
                                break;
                            case 7:
                                return r = s.animeList,
                                t.abrupt("break", 19);
                            case 9:
                                if (!((s.directoryParams && s.directoryParams.param) !== e.param)) {
                                    t.next = 16;
                                    break
                                }
                                return t.next = 13,
                                K.b.fetchAnimeList(e);
                            case 13:
                                r = t.sent,
                                t.next = 17;
                                break;
                            case 16:
                                r = s.directoryParams.list;
                            case 17:
                            case 18:
                                return t.abrupt("break", 19);
                            case 19:
                                i("UPDATE_DIRECTORY_PARAMS", g()({}, e, {
                                    list: r
                                }));
                            case 20:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            },
            updatePlayerConfig: function(t, e) {
                var n = this
                  , i = t.commit
                  , s = e.key
                  , r = e.value;
                return c()(a.a.mark(function t() {
                    var e;
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e = g()({}, G.playerConfig, Y()({}, s, r)),
                                i("SET_PLAYER_CONFIG", e);
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            },
            updateWatchHistory: function(t, e) {
                var n = this
                  , i = t.commit
                  , s = t.state
                  , r = e.key
                  , o = e.pl
                  , u = e.title
                  , l = e.time;
                return c()(a.a.mark(function t() {
                    var e;
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                e = g()({}, s.watchHistory, Y()({}, r, {
                                    pl: o,
                                    title: u,
                                    time: l,
                                    date: Date.now()
                                })),
                                i("SET_WATCH_HISTORY", e);
                            case 2:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            },
            removeWatchHistory: function(t, e) {
                var n = this
                  , i = t.commit;
                return c()(a.a.mark(function t() {
                    var s;
                    return a.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                delete (s = g()({}, G.watchHistory))[e],
                                i("SET_WATCH_HISTORY", s);
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }, t, n)
                }))()
            }
        }
          , et = {
            featuredSeasons: function(t) {
                return t.hpData.featured ? t.hpData.featured : null
            },
            informatizedAnimeList: function(t) {
                var e = []
                  , n = []
                  , i = new Date;
                return t.animeList.forEach(function(t) {
                    t.is_ended || e.push(t);
                    var a = new Date(t.last_updated);
                    (i.getTime() - a.getTime()) / 1e3 < 7776e3 && e.indexOf(t) < 0 && n.push(t)
                }),
                {
                    "最新連載": e,
                    "近期更新": n
                }
            },
            searchResultAnimeList: function(t) {
                return t.searchResultIds.length ? t.animeList.filter(function(e) {
                    return t.searchResultIds.indexOf(e.anime_id) >= 0
                }) : []
            },
            watchHistoryAnimeList: function(t) {
                if (!t.animeList.length)
                    return [];
                var e = r()(t.watchHistory).map(function(e) {
                    var n = g()({}, t.watchHistory[e])
                      , i = e.split("x")
                      , a = N()(i, 2)
                      , s = a[0]
                      , r = a[1]
                      , o = n.title.split(" - ")
                      , c = N()(o, 2)
                      , u = c[0]
                      , l = c[1]
                      , d = t.animeList.find(function(t) {
                        return t.anime_id === +s
                    });
                    return n.key = e,
                    n.anime = d,
                    g()({}, n, {
                        animeId: s,
                        seasonId: r,
                        seasonTitle: u,
                        episode: l
                    })
                });
                return e.sort(function(t, e) {
                    return e.date - t.date
                }),
                e
            },
            animeDirectory: function(t) {
                if (!t.directoryParams)
                    return null;
                var e = t.directoryParams
                  , n = e.type
                  , i = e.page
                  , a = e.param
                  , s = e.list
                  , r = Math.ceil(s.length / 21)
                  , o = s.slice(21 * (i - 1), 21 * i);
                return {
                    title: "tag" === n ? "標籤：" + a : "studio" === n ? "動畫製作：" + a : "動畫列表",
                    total: r,
                    items: o
                }
            }
        }
          , nt = new y.a.Store({
            state: G,
            getters: et,
            actions: tt,
            mutations: J,
            strict: !0
        })
          , it = n("/ocq")
          , at = n("c4Tg")
          , st = n("+X65")
          , rt = void 0
          , ot = void 0
          , ct = {
            name: "plark",
            data: function() {
                return {
                    offsetX: 0,
                    dragged: null,
                    dragStartPosition: null,
                    isDragging: null,
                    scrollDirection: null,
                    scrollDirectionResetTimer: null,
                    ticker: null,
                    timestamp: null,
                    frame: null,
                    target: null,
                    amplitude: null,
                    velocity: null
                }
            },
            methods: {
                updateOffsetXBy: function(t) {
                    var e = this.$refs.inner
                      , n = e.scrollWidth
                      , i = e.clientWidth
                      , a = this.offsetX - t;
                    a = Math.min(0, a),
                    a = Math.max(-1 * (n - i), a),
                    this.offsetX = a,
                    this.$refs.inner.style.transform = "translateX(" + this.offsetX + "px)"
                },
                handleMousewheel: n.n(st)()(function(t) {
                    var e = this
                      , n = t.deltaX
                      , i = t.deltaY
                      , a = Math.abs(n)
                      , s = Math.abs(i) > a ? 1 : -1
                      , r = 1 === s
                      , o = this.$refs.inner
                      , c = o.scrollWidth
                      , u = o.clientWidth
                      , l = t.deltaX < 0 && 0 === this.offsetX
                      , d = t.deltaX > 0 && this.offsetX === -(c - u);
                    if (rt || r || !l && !d) {
                        if (!this.scrollDirection)
                            return r || t.preventDefault(),
                            void (this.scrollDirection = s);
                        t.preventDefault(),
                        rt = !0,
                        clearTimeout(ot),
                        ot = setTimeout(function() {
                            rt = !1
                        }, 75),
                        clearInterval(this.ticker),
                        this.amplitude = null,
                        clearTimeout(this.scrollDirectionResetTimer),
                        this.scrollDirectionResetTimer = setTimeout(function() {
                            e.scrollDirection = null
                        }, 25),
                        r ? window.requestAnimationFrame(function() {
                            window.scrollBy(0, i)
                        }) : (this.timestamp = Date.now() - 80,
                        this.amplitude = -n,
                        this.target = Math.round(this.offsetX + this.amplitude),
                        this.autoScroll())
                    }
                }, 10),
                track: function() {
                    var t = Date.now()
                      , e = t - this.timestamp;
                    this.timestamp = t;
                    var n = this.offsetX - this.frame;
                    this.frame = this.offsetX;
                    var i = n / (e + 1) * 400;
                    this.velocity = .35 * i + .65 * this.velocity
                },
                autoScroll: function() {
                    if (this.amplitude) {
                        var t = Date.now() - this.timestamp
                          , e = -this.amplitude * Math.exp(-t / 125);
                        e > .5 || e < -.5 ? (this.updateOffsetXBy(this.offsetX - (this.target + e)),
                        setTimeout(this.autoScroll, 1e3 / 59)) : (this.updateOffsetXBy(this.offsetX - this.target),
                        this.amplitude = null)
                    }
                },
                onDown: function(t) {
                    var e = "touchstart" === t.type;
                    this.dragStartPosition = {
                        x: e ? t.touches[0].clientX : t.clientX,
                        y: e ? t.touches[0].clientY : t.clientY
                    },
                    this.dragged = 0,
                    this.amplitude = null,
                    this.velocity = 0,
                    this.frame = this.offsetX,
                    this.timestamp = Date.now(),
                    this.isDragging = !0,
                    clearInterval(this.ticker),
                    this.ticker = setInterval(this.track, 20)
                },
                onTouchMove: function(t) {
                    if (this.isDragging) {
                        var e = t.touches[0].clientX - this.dragStartPosition.x
                          , n = t.touches[0].clientY - this.dragStartPosition.y;
                        this.scrollDirection || (this.scrollDirection = Math.abs(n) > Math.abs(e) ? 1 : -1),
                        1 !== this.scrollDirection && (this.updateOffsetXBy(-e - this.dragged),
                        this.dragged = -e,
                        t.preventDefault(),
                        t.stopPropagation())
                    }
                },
                onMouseMove: function(t) {
                    if (this.isDragging) {
                        var e = t.clientX - this.dragStartPosition.x
                          , n = t.clientY - this.dragStartPosition.y;
                        0 === e && 0 === n || (this.updateOffsetXBy(-e - this.dragged),
                        this.dragged = -e)
                    }
                },
                onEnd: function() {
                    this.isDragging && (clearInterval(this.ticker),
                    this.scrollDirection = null,
                    this.isDragging = !1,
                    (this.velocity > 10 || this.velocity < -10) && (this.amplitude = .8 * this.velocity,
                    this.target = Math.round(this.offsetX + this.amplitude),
                    this.autoScroll()))
                }
            },
            mounted: function() {
                document.addEventListener("touchmove", this.onTouchMove),
                document.addEventListener("touchend", this.onEnd),
                document.addEventListener("mousemove", this.onMouseMove),
                document.addEventListener("mouseup", this.onEnd)
            },
            beforeDestroy: function() {
                this.amplitude = null,
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onEnd),
                document.removeEventListener("mousemove", this.onMouseMove),
                document.removeEventListener("mouseup", this.onEnd)
            }
        };
        var ut = function(t) {
            n("FFZ1")
        }
          , lt = Object(R.a)(ct, function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", {
                staticClass: "plark",
                on: {
                    mousewheel: this.handleMousewheel,
                    mousedown: this.onDown,
                    touchstart: this.onDown
                }
            }, [e("div", {
                ref: "inner",
                staticClass: "inner"
            }, [this._t("default")], 2)])
        }, [], !1, ut, "data-v-47d78b2a", null).exports
          , dt = {
            name: "index",
            components: {
                Ads: w.a,
                AnimeListRenderer: at.a,
                Plark: lt
            },
            data: function() {
                return {
                    calendarExpanded: !1,
                    expandedBlocks: [],
                    blockMaxHeight: Math.floor(.8 * window.screen.height)
                }
            },
            computed: g()({}, Object(y.d)({
                calendar: function(t) {
                    return t.hpData.calendar
                },
                animeList: "animeList"
            }), Object(y.c)(["featuredSeasons", "informatizedAnimeList"])),
            methods: {
                calendarLinkMousedown: function(t) {
                    var e = this
                      , n = t.button
                      , i = t.clientX
                      , a = t.clientY
                      , s = t.currentTarget;
                    if (0 === n) {
                        document.addEventListener("mouseup", function t(n) {
                            var r = n.clientX
                              , o = n.clientY;
                            document.removeEventListener("mouseup", t),
                            i === r && a === o && e.$router.push({
                                path: s.pathname
                            })
                        })
                    }
                },
                calendarLinkTouchstart: function(t) {
                    var e = this
                      , n = t.touches
                      , i = t.currentTarget
                      , a = n[0]
                      , s = a.clientX
                      , r = a.clientY
                      , o = void 0
                      , c = void 0
                      , u = function(t) {
                        var e = t.touches;
                        o = e[0].clientX,
                        c = e[0].clientY
                    };
                    document.addEventListener("touchmove", u),
                    document.addEventListener("touchend", function t() {
                        document.removeEventListener("touchmove", u),
                        document.removeEventListener("touchend", t),
                        s === o && r === c && e.$router.push({
                            path: i.pathname
                        })
                    })
                }
            },
            mounted: function() {
                var t = this;
                return c()(a.a.mark(function e() {
                    return a.a.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.$nextTick(function() {
                                    return t.$root.$emit("pageload")
                                });
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }, e, t)
                }))()
            }
        };
        var ht = function(t) {
            n("5DWM")
        }
          , pt = Object(R.a)(dt, function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("article", [n("var", {
                attrs: {
                    "data-mark": ""
                }
            }), t._v(" "), t.featuredSeasons ? n("section", [n("h1", [t._v("精選推介")]), t._v(" "), n("plark", [n("div", {
                staticClass: "featured"
            }, t._l(t.featuredSeasons, function(e) {
                return n("a", {
                    key: e.season_id,
                    attrs: {
                        href: "/anime/" + e.anime_id + "x" + e.season_id
                    },
                    on: {
                        click: function(t) {
                            t.preventDefault()
                        },
                        mousedown: function(e) {
                            return e.preventDefault(),
                            t.calendarLinkMousedown(e)
                        },
                        touchstart: t.calendarLinkTouchstart
                    }
                }, [n("article", [n("b", {
                    style: {
                        backgroundImage: "url(" + e.poster_large + ")"
                    }
                }), t._v(" "), n("h2", [t._v(t._s(e.name_chi) + " " + t._s(e.season_title))])])])
            }))])], 1) : t._e(), t._v(" "), t.calendar ? n("section", [n("h1", [t._v(t._s(t.calendar.title))]), t._v(" "), n("div", {
                class: "collapsable" + (t.calendarExpanded ? "" : " collapsed")
            }, [n("div", {
                staticClass: "inner",
                style: {
                    maxHeight: t.calendarExpanded ? null : "16rem"
                }
            }, [n("plark", [n("div", {
                staticClass: "calendar"
            }, t._l(t.calendar.days, function(e) {
                return n("div", {
                    key: e.label,
                    staticClass: "column"
                }, [n("b", [t._v(t._s(e.label))]), t._v(" "), n("ul", t._l(e.animes, function(e) {
                    return n("li", {
                        key: e.path
                    }, [e.path ? n("a", {
                        attrs: {
                            href: e.path
                        },
                        on: {
                            click: function(t) {
                                t.preventDefault()
                            },
                            mousedown: function(e) {
                                return e.preventDefault(),
                                t.calendarLinkMousedown(e)
                            },
                            touchstart: t.calendarLinkTouchstart
                        }
                    }, [t._v("\n                    " + t._s(e.name) + "\n                  ")]) : t._e(), t._v(" "), e.path ? t._e() : n("span", [t._v(t._s(e.name))])])
                }))])
            }))])], 1), t._v(" "), t.calendarExpanded ? t._e() : n("div", {
                staticClass: "show",
                on: {
                    click: function(e) {
                        t.calendarExpanded = !0
                    }
                }
            }, [t._v("全部顯示")])])]) : t._e(), t._v(" "), t._l(t.informatizedAnimeList, function(e, i) {
                return n("section", {
                    key: i
                }, [n("h1", [t._v(t._s(i))]), t._v(" "), n("div", {
                    class: "collapsable" + (t.expandedBlocks.indexOf(i) >= 0 ? "" : " collapsed")
                }, [n("div", {
                    staticClass: "inner",
                    style: {
                        maxHeight: t.expandedBlocks.indexOf(i) >= 0 ? null : t.blockMaxHeight + "px"
                    }
                }, [n("anime-list-renderer", {
                    attrs: {
                        items: e
                    }
                })], 1), t._v(" "), t.expandedBlocks.indexOf(i) < 0 ? n("div", {
                    staticClass: "show",
                    on: {
                        click: function(e) {
                            t.expandedBlocks.push(i)
                        }
                    }
                }, [t._v("全部顯示")]) : t._e()])])
            }), t._v(" "), n("section", [n("h1", [t._v("全部動畫")]), t._v(" "), n("router-link", {
                staticClass: "link",
                attrs: {
                    to: {
                        path: "/browse/all"
                    }
                }
            }, [t._v("檢視完整動畫列表 »")]), t._v(" "), n("br"), t._v(" "), n("div", {
                staticStyle: {
                    margin: "2rem"
                }
            }, [n("ads", {
                attrs: {
                    type: "ypa_banner",
                    size: {
                        width: 620,
                        height: 120
                    }
                }
            })], 1)], 1)], 2)
        }, [], !1, ht, "data-v-584a800a", null).exports
          , ft = n("UyXO")
          , mt = n.n(ft)
          , vt = n("O9Uj")
          , gt = {
            name: "disqus",
            props: {
                shortname: {
                    type: String,
                    required: !0
                },
                identifier: {
                    type: String,
                    required: !0
                }
            },
            methods: {
                reset: function() {
                    var t = this;
                    window.DISQUS.reset({
                        reload: !0,
                        config: function() {
                            this.page.identifier = t.identifier
                        }
                    })
                },
                init: function() {
                    var t = this
                      , e = this;
                    window.disqus_config = function() {
                        this.page.identifier = e.identifier
                    }
                    ,
                    window.requestAnimationFrame(function() {
                        var e = document
                          , n = e.createElement("script");
                        n.type = "text/javascript",
                        n.async = !0,
                        n.setAttribute("data-timestamp", Date.now()),
                        n.src = "//" + t.shortname + ".disqus.com/embed.js",
                        e.body.appendChild(n)
                    })
                }
            },
            mounted: function() {
                window.DISQUS ? this.reset() : this.init()
            },
            watch: {
                identifier: function() {
                    this.reset()
                }
            }
        }
          , yt = Object(R.a)(gt, function() {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                attrs: {
                    id: "disqus_thread"
                }
            })
        }, [], !1, null, null, null).exports
          , bt = n("Gu7T")
          , _t = n.n(bt)
          , wt = n("gRE1")
          , kt = n.n(wt)
          , xt = n("g6R2")
          , Ct = n.n(xt)
          , St = {
            name: "peek-preview",
            props: {
                enabled: {
                    type: Boolean,
                    required: !0
                },
                image: {
                    type: HTMLElement,
                    required: !1
                },
                timeProgress: {
                    type: Number,
                    required: !1
                },
                sliderRef: {
                    type: Object,
                    required: !1
                },
                visible: {
                    type: Boolean,
                    required: !0
                }
            },
            data: function() {
                return {
                    thumbnailWidth: null,
                    thumbnailHeight: null,
                    sliderRect: null,
                    rectUpdateListener: null
                }
            },
            computed: {
                peekLeft: function() {
                    var t = this.sliderRect.width
                      , e = this.timeProgress * t;
                    return e -= this.thumbnailWidth / 2,
                    e = Math.max(0, e),
                    (e = Math.min(t - this.thumbnailWidth, e)) + "px"
                }
            },
            mounted: function() {
                var t = this;
                this.rectUpdateListener = _()(function() {
                    t.sliderRect = t.sliderRef.$refs.slider.getBoundingClientRect()
                }, 250),
                window.addEventListener("resize", this.rectUpdateListener)
            },
            watch: {
                image: function() {
                    if (this.image) {
                        var t = this.image
                          , e = t.width
                          , n = t.height / (e / 100);
                        this.thumbnailWidth = 108,
                        this.thumbnailHeight = this.thumbnailWidth * n,
                        this.sliderRect = this.sliderRef.$refs.slider.getBoundingClientRect()
                    }
                }
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.rectUpdateListener)
            }
        };
        var Et = function(t) {
            n("8laK")
        }
          , jt = null
          , Tt = null
          , Pt = null
          , Lt = {
            name: "progress-slider",
            components: {
                PeekPreview: Object(R.a)(St, function() {
                    var t = this
                      , e = t.$createElement
                      , n = t._self._c || e;
                    return n("portal", {
                        attrs: {
                            to: "peek-preview"
                        }
                    }, [t.image && t.enabled ? n("span", {
                        staticClass: "peek",
                        style: {
                            backgroundImage: "url(" + t.image.src + ")",
                            backgroundPosition: Math.floor(100 * t.timeProgress) * -t.thumbnailWidth + "px",
                            backgroundSize: 100 * t.thumbnailWidth + "px " + t.thumbnailHeight + "px",
                            height: t.thumbnailHeight + "px",
                            left: t.peekLeft,
                            opacity: t.visible ? 0 : 1,
                            width: t.thumbnailWidth + "px",
                            zIndex: 100
                        }
                    }) : t._e()])
                }, [], !1, Et, "data-v-6ce21df8", null).exports
            },
            props: {
                currentTime: {
                    type: Number,
                    required: !0
                },
                duration: {
                    type: Number,
                    required: !0
                },
                buffered: {
                    type: Object,
                    required: !1
                },
                onSeek: {
                    type: Function,
                    required: !0
                },
                onPreventBlur: {
                    type: Function,
                    required: !0
                },
                peekSrc: {
                    type: String,
                    required: !1
                },
                hovering: {
                    type: Boolean,
                    required: !0
                }
            },
            data: function() {
                return {
                    expanded: !1,
                    dragSeekProgress: null,
                    sliderRect: null,
                    handleRect: null,
                    tooltipProgress: 0,
                    tooltipTimeProgress: 0,
                    tooltipArrowMove: 0,
                    tooltipHidden: !0,
                    peekImage: null
                }
            },
            computed: g()({}, Object(y.d)({
                isMobile: "isMobile"
            }), {
                thisRef: function() {
                    return this
                }
            }),
            methods: {
                expandTimeline: function() {
                    var t = this;
                    this.expanded = !0,
                    this.sliderRect = this.$refs.slider.getBoundingClientRect(),
                    this.handleRect = this.$refs.handle.getBoundingClientRect(),
                    jt = setTimeout(function() {
                        t.tooltipHidden = !1
                    }, 50)
                },
                shrinkTimeline: function() {
                    Tt || (this.expanded = !1,
                    this.sliderRect = null,
                    this.handleRect = null),
                    clearTimeout(jt),
                    this.tooltipHidden = !0
                },
                dragStart: function(t) {
                    var e = this
                      , n = t.type
                      , i = t.currentTarget
                      , a = t.touches
                      , s = t.clientX;
                    if (0 === t.button) {
                        var r = "touchstart" === n
                          , o = r ? "touchmove" : "mousemove"
                          , c = r ? "touchend" : "mouseup"
                          , u = r ? a[0].clientX : s;
                        Tt && window.removeEventListener(o, Tt),
                        Pt && window.removeEventListener(c, Pt);
                        var l = i.getBoundingClientRect().left
                          , d = u < l || u > l + 12
                          , h = this.$refs.slider.clientWidth;
                        d && (this.dragSeekProgress = (u - this.sliderRect.left) / h),
                        Tt = function(t) {
                            var n = t.type
                              , i = t.touches
                              , a = t.clientX
                              , s = ("touchmove" === n ? i[0].clientX : a) - e.sliderRect.left;
                            s = Math.min(h, s),
                            s = Math.max(0, s),
                            e.dragSeekProgress = s / h,
                            e.onPreventBlur(!0)
                        }
                        ,
                        window.addEventListener(o, Tt),
                        Pt = function(t) {
                            t.preventDefault(),
                            Tt && window.removeEventListener(o, Tt),
                            Pt && window.removeEventListener(c, Pt),
                            e.dragSeekProgress && e.onSeek(e.dragSeekProgress),
                            e.dragSeekProgress = null,
                            Tt = null,
                            Pt = null,
                            e.onPreventBlur(!1)
                        }
                        ,
                        window.addEventListener(c, Pt)
                    }
                },
                getHandleLeft: function() {
                    var t = this.$refs.slider && this.$refs.slider.clientWidth
                      , e = t * (this.dragSeekProgress ? this.dragSeekProgress : this.currentTime / this.duration) - 6;
                    return e > t - 12 ? e = t - 12 : e < 0 && (e = 0),
                    e + "px"
                },
                updateTooltip: function(t) {
                    var e = t.clientX
                      , n = t.clientY;
                    if (this.sliderRect) {
                        var i = this.sliderRect
                          , a = i.left
                          , s = i.top
                          , r = i.width
                          , o = i.height
                          , c = this.handleRect.height
                          , u = e - a
                          , l = n - s + (c - o);
                        if (!(u < 0 || u > r || l < 0 || l > c)) {
                            var d = u;
                            u = Math.max(u, 54),
                            u = Math.min(u, r - 54),
                            this.tooltipProgress = u / r,
                            this.tooltipTimeProgress = d / r,
                            this.tooltipArrowMove = d - u
                        }
                    }
                },
                getTooltipTime: function() {
                    return Object(vt.b)(this.tooltipTimeProgress * this.duration)
                },
                getBufferedLeft: function() {
                    return this.buffered ? this.buffered.start / this.duration * this.$refs.slider.clientWidth + "px" : null
                },
                getBufferedWidth: function() {
                    if (!this.buffered)
                        return null;
                    var t = this.buffered
                      , e = t.start;
                    return (t.end - e) / this.duration * this.$refs.slider.clientWidth + "px"
                }
            },
            watch: {
                peekSrc: function(t) {
                    var e = this;
                    this.peekImage = null;
                    var n = new Image;
                    n.onload = function() {
                        e.peekImage = n
                    }
                    ,
                    n.src = t
                }
            }
        };
        var Mt = function(t) {
            n("4xy9")
        }
          , Ht = Object(R.a)(Lt, function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: "slider-container" + (t.expanded ? " expanded" : ""),
                on: {
                    mouseenter: t.expandTimeline,
                    mousemove: t.updateTooltip,
                    mouseleave: t.shrinkTimeline
                }
            }, [n("div", {
                ref: "slider",
                staticClass: "slider"
            }, [n("peek-preview", {
                attrs: {
                    enabled: !t.isMobile,
                    image: t.peekImage,
                    timeProgress: t.tooltipTimeProgress,
                    sliderRef: t.thisRef,
                    visible: t.tooltipHidden || !t.hovering
                }
            }), t._v(" "), n("div", {
                staticClass: "tooltip",
                style: {
                    borderRadius: t.peekImage ? "0 0 3px 3px" : "3px",
                    left: 100 * t.tooltipProgress + "%",
                    opacity: t.tooltipHidden ? 0 : 1,
                    width: t.peekImage ? "108px" : "64px"
                }
            }, [n("ins", {
                style: {
                    marginLeft: t.tooltipArrowMove + "px"
                }
            }), t._v("\n      " + t._s(t.getTooltipTime()) + "\n    ")]), t._v(" "), n("span", {
                ref: "handle",
                staticClass: "handle",
                style: {
                    left: t.getHandleLeft()
                },
                on: {
                    mousedown: t.dragStart,
                    touchstart: t.dragStart
                }
            }), t._v(" "), n("div", {
                staticClass: "buffered",
                style: {
                    left: t.getBufferedLeft(),
                    width: t.getBufferedWidth()
                }
            })], 1)])
        }, [], !1, Mt, "data-v-1f2cc5e8", null).exports
          , Rt = 1
          , It = null
          , Ot = null
          , Dt = {
            name: "volume-slider",
            props: {
                volume: {
                    type: Number,
                    required: !0
                },
                onVolumeUpdate: {
                    type: Function,
                    required: !0
                },
                onPreventBlur: {
                    type: Function,
                    required: !0
                }
            },
            data: function() {
                return {
                    expanded: !1
                }
            },
            computed: {
                volumeStatus: function() {
                    return this.volume > .5 ? "full" : this.volume > 0 ? "half" : "mute"
                }
            },
            methods: {
                fadeInVolume: function() {
                    this.expanded = !0
                },
                fadeOutVolume: function() {
                    It || (this.expanded = !1)
                },
                dragStart: function(t) {
                    var e = this
                      , n = t.type
                      , i = t.target
                      , a = t.touches
                      , s = t.clientX;
                    if (0 === t.button) {
                        var r = "touchstart" === n
                          , o = r ? "touchmove" : "mousemove"
                          , c = r ? "touchend" : "mouseup"
                          , u = r ? a[0].clientX : s;
                        It && window.removeEventListener(o, It),
                        Ot && window.removeEventListener(c, Ot);
                        var l = i.getBoundingClientRect().left
                          , d = u > l && u < l + 12
                          , h = this.volume;
                        d || (h = (u - i.parentNode.getBoundingClientRect().left) / 64,
                        this.onVolumeUpdate(h));
                        var p = 64 * h;
                        It = function(t) {
                            var n = t.type
                              , i = t.touches
                              , a = t.clientX
                              , s = "touchmove" === n ? i[0].clientX : a;
                            e.onVolumeUpdate(Math.max(Math.min(64, s - u + p), 0) / 64),
                            e.onPreventBlur(!0)
                        }
                        ,
                        window.addEventListener(o, It),
                        Ot = function(t) {
                            t.preventDefault(),
                            It && window.removeEventListener(o, It),
                            Ot && window.removeEventListener(c, Ot),
                            It = null,
                            Ot = null,
                            e.onPreventBlur(!1)
                        }
                        ,
                        window.addEventListener(c, Ot)
                    }
                },
                toggleMute: function() {
                    this.volume > 0 ? (Rt = this.volume,
                    this.onVolumeUpdate(0)) : this.onVolumeUpdate(Rt)
                },
                getHandleLeft: function() {
                    var t = 64 * this.volume - 6;
                    return t > 52 ? t = 52 : t < 0 && (t = 0),
                    t + "px"
                }
            }
        };
        var At = function(t) {
            n("loXx")
        }
          , Ft = Object(R.a)(Dt, function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: "volume" + (t.expanded ? " expanded" : ""),
                on: {
                    mouseenter: t.fadeInVolume,
                    mouseleave: t.fadeOutVolume
                }
            }, [n("i", {
                class: "fe-volume-" + t.volumeStatus,
                on: {
                    click: t.toggleMute
                }
            }), t._v(" "), n("div", {
                staticClass: "slider"
            }, [n("span", {
                staticClass: "handle",
                style: {
                    left: t.getHandleLeft()
                },
                on: {
                    mousedown: t.dragStart,
                    touchstart: t.dragStart
                }
            })])])
        }, [], !1, At, "data-v-27f552fb", null).exports
          , Wt = [.5, 1, 1.5, 2]
          , qt = null
          , zt = null
          , Bt = null
          , Xt = []
          , Ut = {
            name: "player",
            props: {
                src: {
                    type: String,
                    required: !1
                },
                onReference: {
                    type: Function,
                    required: !0
                }
            },
            components: {
                Ads: w.a,
                ProgressSlider: Ht,
                VolumeSlider: Ft
            },
            data: function() {
                return {
                    pageComponent: null,
                    playbackEndedMessage: null,
                    isBuffering: !1,
                    playerData: {},
                    hls: null,
                    hovering: !1,
                    interacting: !1,
                    currentTime: 0,
                    duration: 0,
                    paused: !0,
                    buffered: null,
                    fullscreen: !1,
                    lightsout: !1,
                    canPlay: !1,
                    showIndicator: !1,
                    adsDismissed: !1,
                    isIOSSafari: !!navigator.platform.match(/ip(h|o|a)/i),
                    playbackCapture: null,
                    resumePlaybackAfterCapture: !1
                }
            },
            computed: g()({}, Object(y.d)(["isMobile", "watchHistory", "playerConfig"]), {
                title: function() {
                    var t = this.pageComponent
                      , e = t.playlist
                      , n = t.activeSeason
                      , i = t.activeEpisode;
                    return e.anime.name_chi + " " + n.season_title + " " + i.title
                },
                media: function() {
                    return this.$refs.media
                },
                nativeHlsSupported: function() {
                    var t = window.navigator.vendor.toLowerCase();
                    return t.indexOf("apple computer") > -1 || this.media && this.media.canPlayType("application/vnd.apple.mpegURL").length > 0 && t.indexOf("google") < 0
                },
                shouldShowCursor: function() {
                    return this.paused || this.interacting || this.hovering
                },
                peekSrc: function() {
                    if (!this.src)
                        return null;
                    return this.pageComponent.activeSeason.is_vapor ? this.src.replace("/s/", "/p/").replace("/manifest.csv", ".jpg") : this.src.replace(".pls", ".jpg")
                }
            }),
            methods: g()({}, Object(y.b)(["updatePlayerConfig", "updateWatchHistory"]), {
                onHover: function() {
                    var t = this;
                    clearTimeout(qt),
                    this.hovering = !0,
                    qt = setTimeout(function() {
                        t.hovering = !1
                    }, 5e3)
                },
                onBlur: function() {
                    this.hovering = !1
                },
                onPreventBlur: function(t) {
                    clearTimeout(qt),
                    this.interacting = t
                },
                onPlayerKeydown: function(t) {
                    var e = t.keyCode
                      , n = {
                        SPACE: 32,
                        ARROW_LEFT: 37,
                        ARROW_RIGHT: 39,
                        CHAR_F: 70,
                        CHAR_M: 77
                    };
                    if (!(kt()(n).indexOf(e) < 0))
                        switch (t.preventDefault(),
                        e) {
                        case n.SPACE:
                            this.togglePlayWithIndicator({});
                            break;
                        case n.ARROW_LEFT:
                        case n.ARROW_RIGHT:
                            this.currentTime = e === n.ARROW_RIGHT ? Math.min(this.currentTime + 5, this.duration) : Math.max(this.currentTime - 5, 0),
                            this.media.currentTime = this.currentTime;
                            break;
                        case n.CHAR_F:
                            this.toggleFullscreen();
                            break;
                        case n.CHAR_M:
                            this.$refs.volumeSlider.toggleMute()
                        }
                },
                onSeek: function(t) {
                    this.media.currentTime = Math.floor(t * this.duration)
                },
                onVolumeUpdate: function(t) {
                    this.media.volume = t
                },
                abortPlayNextTimer: function() {
                    this.playbackEndedMessage = null,
                    clearInterval(Bt),
                    Bt = null
                },
                attachListeners: function() {
                    var t = this;
                    if (!Xt.length) {
                        var e = function() {
                            if (t.media.buffered.length) {
                                for (var e = [], n = 0, i = 0; i < t.media.buffered.length; i += 1)
                                    e = [].concat(_t()(e), [{
                                        start: t.media.buffered.start(i),
                                        end: t.media.buffered.end(i)
                                    }]),
                                    t.media.currentTime >= e[i].start && t.media.currentTime <= e[i].end && (n = i);
                                var a = e[n]
                                  , s = a.start
                                  , r = a.end;
                                t.buffered = {
                                    start: s,
                                    end: r
                                }
                            }
                        };
                        Xt.push({
                            type: "timeupdate",
                            func: function() {
                                if (t.canPlay) {
                                    if (t.playbackEndedMessage = null,
                                    t.currentTime = t.media.currentTime,
                                    t.currentTime === t.duration) {
                                        var e = t.pageComponent
                                          , n = e.activeSeason
                                          , i = e.nextEpisode;
                                        if (i) {
                                            t.abortPlayNextTimer();
                                            var a = 4;
                                            Bt = setInterval(function() {
                                                a -= 1,
                                                t.playbackEndedMessage = a + " 秒後播放" + n.season_title + " " + i.title,
                                                a < 1 && t.pageComponent.play(i, !0)
                                            }, 1e3)
                                        } else
                                            t.playbackEndedMessage = "沒有下一集了 (・_・;)"
                                    }
                                    var s = t.playerData.historyKey
                                      , r = t.watchHistory[s];
                                    t.updateWatchHistory({
                                        key: s,
                                        title: r.title,
                                        pl: r.pl,
                                        time: t.currentTime
                                    })
                                }
                            }
                        }, {
                            type: "progress",
                            func: e
                        }, {
                            type: "seek",
                            func: e
                        }, {
                            type: "play",
                            func: function() {
                                t.paused = !1,
                                t.adsDismissed = !1
                            }
                        }, {
                            type: "pause",
                            func: function() {
                                t.paused = !0
                            }
                        }, {
                            type: "volumechange",
                            func: function() {
                                return t.updatePlayerConfig({
                                    key: "volume",
                                    value: t.media.volume
                                })
                            }
                        }, {
                            type: "ratechange",
                            func: function() {
                                return t.updatePlayerConfig({
                                    key: "rate",
                                    value: t.media.playbackRate
                                })
                            }
                        }, {
                            type: "durationchange",
                            func: function() {
                                t.duration = t.media.duration
                            }
                        }, {
                            type: "seeking",
                            func: function() {
                                t.isBuffering = !0
                            }
                        }, {
                            type: "seeked",
                            func: function() {
                                t.isBuffering = !1
                            }
                        }),
                        this.isIOSSafari ? Xt.push({
                            type: "webkitenterfullscreen",
                            func: function() {
                                t.fullscreen = !0
                            }
                        }, {
                            type: "webkitendfullscreen",
                            func: function() {
                                t.fullscreen = !1
                            }
                        }) : Ct.a.onfullscreenchange = function() {
                            t.fullscreen = !!Ct.a.fullscreenElement
                        }
                        ,
                        Xt.forEach(function(e) {
                            return t.media.addEventListener(e.type, e.func)
                        })
                    }
                },
                getFormattedTime: vt.b,
                togglePlayWithIndicator: function(t) {
                    var e = this;
                    if (t.target === t.currentTarget) {
                        this.togglePlay();
                        var n = function() {
                            clearTimeout(zt),
                            e.showIndicator = !0,
                            zt = setTimeout(function() {
                                e.showIndicator = !1
                            }, 500)
                        };
                        this.showIndicator ? (this.showIndicator = !1,
                        this.$nextTick(n)) : n()
                    }
                },
                togglePlay: function() {
                    this.media.paused ? this.media.play() : this.media.pause(),
                    clearTimeout(qt)
                },
                capturePlayback: function() {
                    var t = this
                      , e = document.createElement("canvas")
                      , n = e.getContext("2d");
                    e.width = this.media.videoWidth,
                    e.height = this.media.videoHeight;
                    n.beginPath(),
                    n.moveTo(6, 0),
                    n.lineTo(e.width - 6 + 0, 0),
                    n.quadraticCurveTo(0 + e.width, 0, 0 + e.width, 6),
                    n.lineTo(0 + e.width, e.height - 6 + 0),
                    n.quadraticCurveTo(0 + e.width, 0 + e.height, e.width - 6 + 0, 0 + e.height),
                    n.lineTo(6, 0 + e.height),
                    n.quadraticCurveTo(0, 0 + e.height, 0, e.height - 6 + 0),
                    n.lineTo(0, 6),
                    n.quadraticCurveTo(0, 0, 6, 0),
                    n.closePath(),
                    n.clip(),
                    n.drawImage(this.media, 0, 0, e.width, e.height),
                    window.fetch(e.toDataURL("image/png")).then(function(t) {
                        return t.blob()
                    }).then(function(e) {
                        e.size < 1 || (t.resumePlaybackAfterCapture = !t.media.paused,
                        t.media.pause(),
                        t.playbackCapture = URL.createObjectURL(e),
                        window.ga("send", "event", "Playback", "capture", t.title))
                    })
                },
                clearPlaybackCapture: function() {
                    this.playbackCapture = null,
                    this.resumePlaybackAfterCapture && this.media.play()
                },
                nextPlaybackRate: function() {
                    var t = this
                      , e = Wt.findIndex(function(e) {
                        return e === t.playerConfig.rate
                    })
                      , n = Wt[(e + 1) % Wt.length];
                    this.media.playbackRate = n
                },
                toggleFullscreen: function() {
                    this.fullscreen ? this.isIOSSafari ? this.media.webkitExitFullscreen() : Ct.a.exitFullscreen() : this.isIOSSafari ? this.media.webkitEnterFullScreen() : Ct.a.requestFullscreen(this.$el)
                },
                toggleLighting: function() {
                    this.lightsout = !this.lightsout
                },
                destroyHlsInstance: function() {
                    this.hls && (this.hls.destroy(),
                    this.hls = null)
                }
            }),
            mounted: function() {
                this.onReference(this),
                this.attachListeners()
            },
            watch: {
                src: function(t) {
                    var e = this;
                    this.canPlay = !1;
                    var n = function() {
                        e.canPlay = !0,
                        e.isIOSSafari || e.$refs.player.focus(),
                        e.media.volume = e.playerConfig.volume,
                        e.media.playbackRate = e.playerConfig.rate,
                        window.ga("send", "event", "Playback", "play", e.title)
                    };
                    if (this.nativeHlsSupported) {
                        this.media.setAttribute("src", t);
                        this.media.addEventListener("canplay", function t() {
                            e.media.removeEventListener("canplay", t),
                            n()
                        })
                    } else {
                        (window.Hls ? l.a.resolve() : new l.a(function(t) {
                            var e = document.createElement("script");
                            e.type = "text/javascript",
                            e.onload = t,
                            e.onerror = function() {
                                return alert("無法載入影片解碼器")
                            }
                            ,
                            e.src = "https://unpkg.com/hls.js@latest/dist/hls.js",
                            document.body.appendChild(e)
                        }
                        )).then(function() {
                            window.Hls.isSupported() ? (e.destroyHlsInstance(),
                            e.hls = new window.Hls({}),
                            e.hls.attachMedia(e.media),
                            e.hls.loadSource(t),
                            e.hls.on(window.Hls.Events.MANIFEST_PARSED, n)) : alert("請更新你的瀏覧器然後重新載入")
                        })
                    }
                },
                shouldShowCursor: function(t) {
                    !t && this.fullscreen ? document.body.setAttribute("style", "cursor: none") : document.body.removeAttribute("style")
                }
            },
            beforeDestroy: function() {
                var t = this;
                this.destroyHlsInstance(),
                Xt.forEach(function(e) {
                    return t.media.removeEventListener(e.type, e.func)
                }),
                Xt = [],
                qt = null,
                zt = null
            }
        };
        var Nt = function(t) {
            n("lBl7")
        }
          , $t = Object(R.a)(Ut, function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container",
                on: {
                    mousemove: t.onHover,
                    mouseleave: t.onBlur
                }
            }, [n("video", {
                ref: "media",
                style: {
                    opacity: t.canPlay ? 1 : .5
                },
                attrs: {
                    playsinline: "",
                    crossorigin: "anonymous",
                    controls: t.isIOSSafari
                }
            }), t._v(" "), t.isIOSSafari ? t._e() : n("div", {
                ref: "player",
                class: "player" + (t.shouldShowCursor ? " hovering" : "") + (t.lightsout ? " lightsout" : ""),
                attrs: {
                    tabindex: "1"
                },
                on: {
                    contextmenu: function(t) {
                        t.preventDefault()
                    },
                    click: t.togglePlayWithIndicator,
                    keydown: t.onPlayerKeydown
                }
            }, [n("div", {
                staticClass: "controls-wrapper"
            }, [n("progress-slider", {
                attrs: {
                    currentTime: t.currentTime,
                    duration: t.duration,
                    buffered: t.buffered,
                    "on-seek": t.onSeek,
                    "on-prevent-blur": t.onPreventBlur,
                    "peek-src": t.peekSrc,
                    hovering: t.hovering
                }
            }), t._v(" "), n("div", {
                staticClass: "controls"
            }, [n("i", {
                class: "play fe-" + (t.paused ? "play-circle" : "pause-circle"),
                on: {
                    click: t.togglePlay
                }
            }), t._v(" "), n("volume-slider", {
                ref: "volumeSlider",
                attrs: {
                    volume: t.playerConfig.volume,
                    "on-volume-update": t.onVolumeUpdate,
                    "on-prevent-blur": t.onPreventBlur
                }
            }), t._v(" "), n("span", {
                staticClass: "time"
            }, [t._v(t._s(t.getFormattedTime(t.currentTime)) + " / " + t._s(t.getFormattedTime(t.duration)))]), t._v(" "), n("div", {
                staticClass: "right"
            }, [t.isMobile ? t._e() : n("i", {
                staticClass: "fe-camera",
                on: {
                    click: t.capturePlayback
                }
            }), t._v(" "), n("b", {
                staticClass: "pbrate",
                on: {
                    click: function(e) {
                        t.nextPlaybackRate()
                    }
                }
            }, [t._v(t._s(t.playerConfig.rate)), n("small", [t._v("x")])]), t._v(" "), t.isMobile ? t._e() : n("i", {
                class: "fe-" + (t.lightsout ? "sun" : "moon"),
                on: {
                    click: t.toggleLighting
                }
            }), t._v(" "), n("i", {
                class: "fe-" + (t.fullscreen ? "minimize" : "maximize"),
                on: {
                    click: t.toggleFullscreen
                }
            })])], 1)], 1), t._v(" "), n("portal-target", {
                attrs: {
                    slim: "",
                    name: "peek-preview"
                }
            }), t._v(" "), t.isBuffering || !t.canPlay ? n("div", {
                staticClass: "buffering-indicator"
            }, [n("span")]) : t._e(), t._v(" "), t.showIndicator ? n("div", {
                staticClass: "playstate-indicator"
            }, [n("i", {
                class: "fe-" + (t.paused ? "pause" : "play")
            })]) : t._e(), t._v(" "), t.playbackEndedMessage ? n("div", {
                staticClass: "playback-message"
            }, [t._v("\n      " + t._s(t.playbackEndedMessage) + "\n    ")]) : t._e(), t._v(" "), !t.canPlay || t.isBuffering || t.isMobile || !t.paused || t.adsDismissed ? t._e() : n("div", {
                staticClass: "ads-wrapper"
            }, [n("div", [n("ads", {
                attrs: {
                    type: "iit_box",
                    size: {
                        width: 480,
                        height: 320
                    }
                }
            }), t._v(" "), n("i", {
                staticClass: "fe-remove",
                on: {
                    click: function(e) {
                        t.adsDismissed = !0
                    }
                }
            })], 1)])], 1), t._v(" "), t.playbackCapture ? n("div", {
                staticClass: "playback-capture"
            }, [n("i", {
                staticClass: "fe-remove",
                on: {
                    click: t.clearPlaybackCapture
                }
            }), t._v(" "), n("img", {
                attrs: {
                    alt: "",
                    src: t.playbackCapture
                }
            })]) : t._e()])
        }, [], !1, Nt, "data-v-fb8c9d1e", null).exports
          , Yt = null
          , Vt = {
            name: "anime",
            components: {
                Ads: w.a,
                Loader: D.a,
                Disqus: yt,
                Player: $t
            },
            data: function() {
                return {
                    src: null,
                    activeEpisodePl: null,
                    playlist: null,
                    loaded: !1,
                    restoreTimer: null,
                    isSwitchingEpisode: !1,
                    isSafari: navigator.userAgent.indexOf("Safari") > 0 && navigator.userAgent.indexOf("Chrome") < 0,
                    hasPlayedAnEpisode: !1
                }
            },
            computed: g()({}, Object(y.d)({
                watchHistory: "watchHistory",
                isMobile: "isMobile"
            }), {
                activeSeason: function() {
                    var t = this
                      , e = this.playlist.seasons.find(function(e) {
                        return e.id === +t.$route.params.seasonId
                    });
                    return e = g()({}, e, {
                        poster: K.a + "/poster/" + e.anime_id + "x" + e.id
                    }),
                    e
                },
                activeEpisode: function() {
                    var t = this;
                    return this.activeSeason.episodes.find(function(e) {
                        return e.pl === t.activeEpisodePl
                    })
                },
                activeSeasonStudios: function() {
                    return this.activeSeason.studio.split(/\r?\n/)
                },
                nextEpisode: function() {
                    var t = this
                      , e = this.activeSeason.episodes.findIndex(function(e) {
                        return e.pl === t.activeEpisodePl
                    });
                    return this.activeSeason.episodes[e - 1]
                },
                computedWatchHistory: function() {
                    var t = this.$route.path.split("/")[2];
                    return this.watchHistory[t]
                },
                shareUrl: function() {
                    var t = this.playlist.anime.name_chi + " " + this.activeSeason.season_title;
                    return t = (t = t.replace(/((?![\sa-z0-9\u3000\u3400-\u4DBF\u4E00-\u9FFF]).)/gi, " ")).trim().replace(/\s{1,}/g, "-"),
                    "https://ebb.io/anime/" + this.playlist.anime.id + "x" + this.activeSeason.id + "/" + t
                }
            }),
            methods: g()({}, Object(y.b)(["enqueueNotification", "updateWatchHistory", "removeWatchHistory"]), {
                splitTextIntoChunks: function(t) {
                    return mt()(t)
                },
                getFormattedDate: vt.a,
                hexToRgb: function(t) {
                    var e = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)].join(",")
                },
                saveReferences: function(t) {
                    (Yt = t).pageComponent = this
                },
                play: function(t) {
                    var e = this
                      , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return c()(a.a.mark(function i() {
                        var s, r;
                        return a.a.wrap(function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    if (!e.isSwitchingEpisode && (e.activeEpisode || {}).pl !== t.pl) {
                                        i.next = 2;
                                        break
                                    }
                                    return i.abrupt("return");
                                case 2:
                                    Yt.abortPlayNextTimer(),
                                    Yt.canPlay = !1,
                                    e.activeEpisodePl = t.pl,
                                    e.isSwitchingEpisode = !0,
                                    e.activeSeason.is_vapor ? e.src = "https://s1.ebbusercontent.com/s/" + e.activeEpisode.pl + "/manifest.csv" : e.src = K.a + "/load_pl/" + e.activeEpisode.pl + ".pls",
                                    s = e.$route.path.split("/")[2],
                                    Yt.playerData = {
                                        historyKey: s,
                                        autoPlay: n
                                    },
                                    r = e.computedWatchHistory && e.computedWatchHistory.pl === e.activeEpisode.pl,
                                    e.updateWatchHistory({
                                        key: s,
                                        title: e.activeSeason.season_title + " - " + e.activeEpisode.title,
                                        pl: e.activeEpisode.pl,
                                        time: r ? e.computedWatchHistory.time : 0
                                    }),
                                    clearInterval(e.restoreTimer),
                                    e.restoreTimer = setInterval(function() {
                                        Yt.canPlay && (clearInterval(e.restoreTimer),
                                        Yt.$refs.media.currentTime = e.computedWatchHistory ? e.computedWatchHistory.time : 0)
                                    }, 25),
                                    setTimeout(function() {
                                        !n || e.isSafari && !e.hasPlayedAnEpisode || Yt.$refs.media.play(),
                                        e.hasPlayedAnEpisode || (e.hasPlayedAnEpisode = !0)
                                    }, 1),
                                    e.isSwitchingEpisode = !1;
                                case 15:
                                case "end":
                                    return i.stop()
                                }
                        }, i, e)
                    }))()
                },
                routeChange: function() {
                    var t = this
                      , e = this.playlist.anime
                      , n = document.title.split(" - ")[1];
                    document.title = e.name_chi + " " + this.activeSeason.season_title + " - " + n,
                    document.querySelector('meta[name="description"]').content = "ebb 提供 " + e.name_chi + " " + this.activeSeason.season_title + " 的全集動畫，" + (new Date).getFullYear() + " 年線上新番及已完結舊番隨你點播。 作品介紹：" + e.description,
                    this.$nextTick(function() {
                        return t.$root.$emit("pageload")
                    })
                },
                restoreWatchHistory: function() {
                    if (this.computedWatchHistory) {
                        var t = {
                            pl: this.computedWatchHistory.pl,
                            title: this.computedWatchHistory.title.split(" - ")[1]
                        };
                        this.play(t, this.$route.params.autoPlay || !1)
                    }
                },
                actionShare: function(t) {
                    var e = t.currentTarget;
                    window.ga("send", "event", "Share", "method", e.parentNode.className),
                    window.ga("send", "event", "Share", "season", this.playlist.anime.name_chi + " " + this.activeSeason.season_title)
                },
                copyShareUrl: function() {
                    var t = this.$refs.copyArea;
                    t.focus(),
                    t.setSelectionRange(0, t.value.length),
                    document.execCommand("copy") && (this.enqueueNotification({
                        type: "info",
                        text: "已複製分享連結",
                        duration: 3e3
                    }),
                    t.blur())
                },
                loadSeason: function(t) {
                    var e = this;
                    return c()(a.a.mark(function n() {
                        var i, s, r;
                        return a.a.wrap(function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    K.b.fetchSeason(t);
                                case 2:
                                    if (i = n.sent,
                                    s = i.success,
                                    r = i.list,
                                    s) {
                                        n.next = 7;
                                        break
                                    }
                                    throw new Error("404");
                                case 7:
                                    e.playlist = r,
                                    e.sanitizeWatchHistory();
                                case 9:
                                case "end":
                                    return n.stop()
                                }
                        }, n, e)
                    }))()
                },
                sanitizeWatchHistory: function() {
                    if (this.computedWatchHistory) {
                        var t = this.activeSeason
                          , e = t.id
                          , n = t.anime_id;
                        t.episodes.map(function(t) {
                            return t.pl
                        }).indexOf(this.computedWatchHistory.pl) < 0 && this.removeWatchHistory(n + "x" + e)
                    }
                }
            }),
            mounted: function() {
                var t = this;
                return c()(a.a.mark(function e() {
                    var n;
                    return a.a.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.$route.params,
                                e.prev = 1,
                                e.next = 4,
                                t.loadSeason(n.animeId);
                            case 4:
                                t.routeChange(),
                                t.loaded = !0,
                                t.$nextTick(function() {
                                    if (t.restoreWatchHistory(),
                                    t.isMobile) {
                                        var e = document.querySelector(".playlist.seasons > .active");
                                        e.parentNode.scrollLeft = e.offsetLeft
                                    }
                                }),
                                e.next = 12;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(1),
                                t.$router.replace({
                                    path: "/404"
                                });
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }, e, t, [[1, 9]])
                }))()
            },
            watch: {
                $route: function() {
                    var t = this;
                    return c()(a.a.mark(function e() {
                        return a.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t.routeChange();
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }, e, t)
                    }))()
                }
            }
        };
        var Qt = function(t) {
            n("7oIK")
        }
          , Kt = Object(R.a)(Vt, function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [t.loaded ? t._e() : n("loader"), t._v(" "), t.loaded ? n("div", [n("var", {
                attrs: {
                    "data-mark": ""
                }
            }), t._v(" "), n("div", {
                staticClass: "player-container"
            }, [n("div", {
                staticClass: "player-outer"
            }, [n("player", {
                style: {
                    opacity: t.activeEpisodePl ? 1 : 0
                },
                attrs: {
                    src: t.src,
                    "on-reference": t.saveReferences
                }
            }), t._v(" "), t.activeEpisodePl ? t._e() : n("div", {
                staticClass: "message"
            }, [t._v("目前沒有正在播放的項目")])], 1)]), t._v(" "), n("div", {
                staticClass: "jouhou"
            }, [n("div", {
                staticClass: "info"
            }, [n("div", {
                staticClass: "inner"
            }, [n("header", [n("div", {
                staticClass: "image",
                style: {
                    backgroundImage: "url(" + t.activeSeason.poster + ")"
                }
            }), t._v(" "), n("div", {
                staticClass: "titles"
            }, [n("h1", t._l(t.splitTextIntoChunks(t.playlist.anime.name_chi), function(e) {
                return n("s", [t._v(t._s(e))])
            })), t._v(" "), n("h2", t._l(t.splitTextIntoChunks(t.playlist.anime.name_jpn), function(e) {
                return n("s", [t._v(t._s(e))])
            }))])]), t._v(" "), n("div", {
                staticClass: "desc"
            }, [t._v("\n            " + t._s(t.playlist.anime.description) + "\n          ")]), t._v(" "), n("div", {
                staticClass: "row"
            }, [n("span", [t._v("原　　作")]), t._v(" "), n("ins"), t._v(" "), n("span", [t._v(t._s(t.playlist.anime.author))])]), t._v(" "), n("div", {
                staticClass: "row"
            }, [n("span", [t._v("動畫製作")]), t._v(" "), n("ins"), t._v(" "), n("div", {
                staticClass: "tags"
            }, t._l(t.activeSeasonStudios, function(e) {
                return n("router-link", {
                    key: e,
                    attrs: {
                        to: {
                            path: "/browse/studio/" + e
                        }
                    }
                }, [t._v(t._s(e))])
            }))]), t._v(" "), n("div", {
                staticClass: "row"
            }, [n("span", [t._v("最後更新")]), t._v(" "), n("ins"), t._v(" "), n("span", [t._v(t._s(t.getFormattedDate(t.activeSeason.last_updated, "YYYY 年 M 月 D 日")))])]), t._v(" "), n("div", {
                staticClass: "row"
            }, [n("span", [t._v("作品類別")]), t._v(" "), n("ins"), t._v(" "), n("div", {
                staticClass: "tags"
            }, t._l(t.playlist.anime.tags, function(e) {
                return n("router-link", {
                    key: e.id,
                    style: {
                        background: "rgba(" + t.hexToRgb(e.color) + ",.2)",
                        boxShadow: "0 0 0 1px rgba(" + t.hexToRgb(e.color) + ",.7)"
                    },
                    attrs: {
                        to: {
                            path: "/browse/tag/" + e.name
                        }
                    }
                }, [t._v(t._s(e.name))])
            }))]), t._v(" "), n("div", {
                staticClass: "row"
            }, [n("span", [t._v("分　　享")]), t._v(" "), n("ins"), t._v(" "), n("div", {
                staticClass: "sharer"
            }, [n("div", {
                staticClass: "facebook"
            }, [n("a", {
                attrs: {
                    href: "https://www.facebook.com/sharer/sharer.php?u=" + t.shareUrl,
                    target: "_blank"
                },
                on: {
                    click: t.actionShare
                }
            }, [n("svg", {
                staticStyle: {
                    width: "20px",
                    height: "20px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [n("path", {
                attrs: {
                    fill: "currentColor",
                    d: "M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"
                }
            })])])]), t._v(" "), n("div", {
                staticClass: "twitter"
            }, [n("a", {
                attrs: {
                    href: "https://twitter.com/intent/tweet?text=" + t.shareUrl,
                    target: "_blank"
                },
                on: {
                    click: t.actionShare
                }
            }, [n("svg", {
                staticStyle: {
                    width: "20px",
                    height: "20px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [n("path", {
                attrs: {
                    fill: "currentColor",
                    d: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                }
            })])])]), t._v(" "), n("div", {
                staticClass: "telegram"
            }, [n("a", {
                attrs: {
                    href: "tg://msg_url?url=" + t.shareUrl,
                    target: "_blank"
                },
                on: {
                    click: t.actionShare
                }
            }, [n("svg", {
                staticStyle: {
                    width: "20px",
                    height: "20px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [n("path", {
                attrs: {
                    fill: "currentColor",
                    d: "M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"
                }
            })])])]), t._v(" "), n("div", {
                staticClass: "whatsapp"
            }, [n("a", {
                attrs: {
                    href: "whatsapp://send?text=" + t.shareUrl,
                    target: "_blank"
                },
                on: {
                    click: t.actionShare
                }
            }, [n("svg", {
                staticStyle: {
                    width: "20px",
                    height: "20px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [n("path", {
                attrs: {
                    fill: "currentColor",
                    d: "M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"
                }
            })])])]), t._v(" "), n("div", {
                staticClass: "copy"
            }, [n("textarea", {
                ref: "copyArea",
                staticClass: "hidden",
                attrs: {
                    readonly: ""
                }
            }, [t._v(t._s(t.shareUrl))]), t._v(" "), n("a", {
                attrs: {
                    href: "#"
                },
                on: {
                    click: [function(e) {
                        return e.preventDefault(),
                        t.copyShareUrl(e)
                    }
                    , t.actionShare]
                }
            }, [n("svg", {
                staticStyle: {
                    width: "20px",
                    height: "20px"
                },
                attrs: {
                    viewBox: "0 0 24 24"
                }
            }, [n("path", {
                attrs: {
                    fill: "currentColor",
                    d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
                }
            })])])])])]), t._v(" "), n("div", {
                staticClass: "info-ads"
            }, [n("ads", {
                attrs: {
                    type: "ypa_banner",
                    size: {
                        width: 620,
                        height: 120
                    }
                }
            })], 1)])]), t._v(" "), n("ul", {
                staticClass: "playlist seasons"
            }, t._l(t.playlist.seasons, function(e) {
                return n("li", {
                    key: e.id,
                    class: {
                        active: e.id === t.activeSeason.id
                    }
                }, [n("router-link", {
                    attrs: {
                        replace: "",
                        to: {
                            name: "anime",
                            params: {
                                animeId: t.playlist.anime.id,
                                seasonId: e.id
                            }
                        }
                    }
                }, [t._v("\n            " + t._s(e.season_title) + "\n          ")])], 1)
            })), t._v(" "), n("ul", {
                staticClass: "playlist episodes"
            }, t._l(t.activeSeason.episodes, function(e) {
                return n("li", {
                    key: e.pl,
                    class: {
                        active: e.pl === t.activeEpisodePl
                    }
                }, [n("a", {
                    attrs: {
                        href: "/anime/" + t.playlist.anime.id + "x" + t.activeSeason.id + "?ep=" + e.title
                    },
                    on: {
                        click: function(n) {
                            n.preventDefault(),
                            t.play(e)
                        }
                    }
                }, [t._v("\n            " + t._s(e.title) + "\n            "), t.computedWatchHistory && t.computedWatchHistory.pl === e.pl ? n("i", {
                    staticClass: "fe-time"
                }) : t._e()])])
            }))]), t._v(" "), n("div", {
                staticClass: "shrinked-ads"
            }, [n("ads", {
                attrs: {
                    type: "iit_banner",
                    size: {
                        width: 440,
                        height: 120
                    }
                }
            })], 1), t._v(" "), n("div", {
                staticClass: "comments-container"
            }, [n("div", {
                staticClass: "comments"
            }, [n("disqus", {
                attrs: {
                    shortname: "ebb-io",
                    identifier: "https://ebb.io/anime/" + t.playlist.anime.id + "x" + t.activeSeason.id
                }
            })], 1), t._v(" "), n("div", {
                staticClass: "info-ads"
            }, [n("ads", {
                attrs: {
                    type: "iit_banner",
                    size: {
                        width: 600,
                        height: 120
                    }
                }
            })], 1), t._v(" "), n("div", {
                staticClass: "shrinked-ads"
            }, [n("ads", {
                attrs: {
                    type: "iit_banner",
                    size: {
                        width: 440,
                        height: 120
                    }
                }
            })], 1)])]) : t._e()], 1)
        }, [], !1, Qt, "data-v-36d2cded", null).exports
          , Gt = {
            name: "not-found",
            data: function() {
                var t = ["https://i.imgur.com/aVF4YLY.png", "https://i.imgur.com/caeXjQK.gif", "https://i.imgur.com/P5hlCVV.png", "https://i.imgur.com/OJvbuFY.png", "https://i.imgur.com/MSRKiJ9.gif", "https://i.imgur.com/pkHGGox.gif", "https://i.imgur.com/Zrtfeac.gif"];
                return {
                    randomImage: t[Math.floor(Math.random() * t.length)]
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    return t.$root.$emit("pageload")
                })
            }
        };
        var Zt = function(t) {
            n("eqY+")
        }
          , Jt = Object(R.a)(Gt, function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", [e("var", {
                attrs: {
                    "data-mark": ""
                }
            }), this._v(" "), e("div", {
                staticClass: "image",
                style: {
                    backgroundImage: "url(" + this.randomImage + ")"
                }
            }), this._v(" "), e("h2", [this._v("404 網頁不存在")]), this._v(" "), e("router-link", {
                staticClass: "link",
                attrs: {
                    to: {
                        name: "index"
                    }
                }
            }, [this._v("返回首頁")])], 1)
        }, [], !1, Zt, "data-v-aeee1140", null).exports;
        d.default.use(it.a);
        var te = new it.a({
            mode: "history",
            routes: [{
                path: "/",
                name: "index",
                component: pt,
                meta: {
                    title: "新番連載"
                }
            }, {
                path: "/anime",
                redirect: "/browse/all"
            }, {
                path: "/search",
                name: "search",
                component: function() {
                    return n.e(3).then(n.bind(null, "/kg+"))
                },
                meta: {
                    title: "搜尋"
                }
            }, {
                path: "/watch-history",
                name: "watch-history",
                component: function() {
                    return n.e(1).then(n.bind(null, "Supz"))
                },
                meta: {
                    title: "播放紀錄"
                }
            }, {
                path: "/about",
                name: "about",
                component: function() {
                    return n.e(2).then(n.bind(null, "CU2C"))
                },
                meta: {
                    title: "關於"
                }
            }, {
                path: "/anime/:animeId(\\d+)x:seasonId(\\d+)(/.*)?",
                name: "anime",
                component: Kt,
                meta: {
                    title: "讀取中"
                }
            }, {
                path: "/browse/:path(.*[^/])",
                name: "directory",
                component: function() {
                    return n.e(0).then(n.bind(null, "H3+d"))
                },
                meta: {
                    title: "動畫列表"
                }
            }, {
                path: "*",
                name: "not-found",
                component: Jt,
                meta: {
                    title: "404"
                }
            }]
        })
          , ee = (n("89K5"),
        n("0K64"),
        n("X8hh"),
        n("VM32"),
        this);
        d.default.use(p.a),
        d.default.config.productionTip = !1;
        var ne, ie = document.title, ae = document.querySelector('meta[name="description"]').content.replace("2017", (new Date).getFullYear()), se = void 0, re = new l.a(function(t) {
            se = t
        }
        );
        te.afterEach((ne = c()(a.a.mark(function t(e) {
            var n, i;
            return a.a.wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return re = new l.a(function(t) {
                            se = t
                        }
                        ),
                        n = e.meta.title,
                        document.title = (n ? n + " - " : "") + ie,
                        document.querySelector('meta[name="description"]').content = ae,
                        i = e.path + (r()(e.query).length > 0 ? "?" : "") + m.a.stringify(e.query),
                        t.next = 7,
                        re;
                    case 7:
                        setTimeout(function() {
                            window.ga("set", "page", i),
                            window.ga("send", "pageview")
                        }, 10);
                    case 8:
                    case "end":
                        return t.stop()
                    }
            }, t, ee)
        })),
        function(t) {
            return ne.apply(this, arguments)
        }
        )),
        new d.default({
            el: "#app",
            router: te,
            store: nt,
            render: function(t) {
                return t(X)
            }
        }).$on("pageload", function() {
            return se()
        })
    },
    O9Uj: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r
        }),
        n.d(e, "a", function() {
            return o
        }),
        n.d(e, "c", function() {
            return c
        });
        var i = n("PJh5")
          , a = n.n(i)
          , s = n("BbgG");
        n.n(s);
        a.a.locale("zh-tw");
        var r = function(t) {
            return a()().startOf("day").seconds(t).format(t >= 3600 ? "H:mm:ss" : "m:ss")
        }
          , o = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD";
            return a()(t).format(e)
        }
          , c = function(t) {
            return a()(t).fromNow()
        }
    },
    OUrN: function(t, e, n) {
        t.exports = n.p + "static/img/ebuko-sprite_2.4f2af3a.png"
    },
    TuST: function(t, e) {},
    WaO5: function(t, e, n) {
        t.exports = n.p + "static/img/ebuko-sprite_1.c0d5afd.png"
    },
    anpH: function(t, e) {},
    c4Tg: function(t, e, n) {
        "use strict";
        var i = n("O4Lo")
          , a = n.n(i)
          , s = n("n5Qe")
          , r = n("O9Uj")
          , o = {
            name: "anime-list-renderer",
            components: {
                Ads: n("BB2M").a
            },
            props: {
                items: {
                    type: Array,
                    required: !0
                }
            },
            data: function() {
                return {
                    adSize: null,
                    resizeListener: null,
                    adStartPos: 1
                }
            },
            mounted: function() {
                var t = this;
                this.resizeListener = a()(function() {
                    var e = t.$el.children[0].getBoundingClientRect()
                      , n = e.width
                      , i = e.height;
                    n = Math.round(n),
                    i = Math.round(i),
                    t.adSize = {
                        width: n,
                        height: i
                    }
                }, 150),
                window.addEventListener("resize", this.resizeListener),
                this.resizeListener(),
                this.adStartPos = Math.round(3 * Math.random())
            },
            methods: {
                getFormattedDate: r.a,
                getPoster: function(t) {
                    return s.a + "/poster/" + t.anime_id + "x" + t.season_id
                }
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.resizeListener)
            }
        }
          , c = n("XyMi");
        var u = function(t) {
            n("uC2P")
        }
          , l = Object(c.a)(o, function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("ul", [t._l(t.items, function(e, i) {
                return [t.adSize && i % 4 === t.adStartPos ? n("li", [n("ads", {
                    attrs: {
                        type: "hpgrid_native",
                        size: t.adSize
                    }
                })], 1) : t._e(), t._v(" "), n("li", [n("router-link", {
                    attrs: {
                        to: {
                            name: "anime",
                            params: {
                                animeId: e.anime_id,
                                seasonId: e.season_id
                            }
                        }
                    }
                }, [n("div", {
                    staticClass: "image",
                    style: {
                        backgroundImage: "url(" + t.getPoster(e) + ")"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "desc"
                }, [n("h1", {
                    staticClass: "title",
                    attrs: {
                        title: e.name_chi
                    }
                }, [t._v(t._s(e.name_chi))]), t._v(" "), n("div", {
                    staticClass: "meta"
                }, [n("div", [t._v("季度：" + t._s(e.season_title))]), t._v(" "), n("div", [t._v("集數：" + t._s(e.episode_title))]), t._v(" "), n("div", [t._v("最後更新：" + t._s(t.getFormattedDate(e.last_updated)))])])])])], 1)]
            })], 2)
        }, [], !1, u, "data-v-e206b2c6", null);
        e.a = l.exports
    },
    "eqY+": function(t, e) {},
    jScs: function(t, e) {},
    lBl7: function(t, e) {},
    loXx: function(t, e) {},
    n5Qe: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return v
        });
        var i = n("Xxa5")
          , a = n.n(i)
          , s = n("exGp")
          , r = n.n(s)
          , o = n("mvHQ")
          , c = n.n(o)
          , u = n("fZjL")
          , l = n.n(u)
          , d = n("mtWM")
          , h = n.n(d)
          , p = n("TOa9")
          , f = n.n(p)
          , m = this
          , v = window.location.origin.replace("8080", "80") + "/_";
        FormData.prototype.appendRecursive = function(t) {
            var e = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            l()(t).forEach(function(i) {
                var a = n ? n + "[" + i + "]" : i;
                t[i]instanceof Array || t[i]instanceof Object ? e.appendRecursive(t[i], a) : e.append(a, c()(t[i]))
            })
        }
        ;
        var g, y = {}, b = (g = r()(a.a.mark(function t(e, n) {
            var i, s, r, o, c, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return a.a.wrap(function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        if (i = null,
                        s = null,
                        y[r = e + " " + n] && y[r].cancel("Operation cancelled by another request."),
                        y[r] = h.a.CancelToken.source(),
                        null === u) {
                            t.next = 15;
                            break
                        }
                        t.t0 = e,
                        t.next = "get" === t.t0 ? 9 : "delete" === t.t0 ? 11 : "post" === t.t0 ? 11 : "put" === t.t0 ? 11 : 14;
                        break;
                    case 9:
                        return i = u,
                        t.abrupt("break", 15);
                    case 11:
                        return (s = new FormData).appendRecursive(u),
                        t.abrupt("break", 15);
                    case 14:
                        return t.abrupt("break", 15);
                    case 15:
                        return t.prev = 15,
                        t.next = 18,
                        h()({
                            method: e,
                            url: v + n,
                            params: i,
                            data: s,
                            withCredentials: !0,
                            cancelToken: y[r].token
                        });
                    case 18:
                        return o = t.sent,
                        c = o.data,
                        t.abrupt("return", JSON.parse(f.a.decompressFromUTF16(c)));
                    case 23:
                        throw t.prev = 23,
                        t.t1 = t.catch(15),
                        console.log(t.t1),
                        t.t1;
                    case 27:
                        return t.prev = 27,
                        delete y[r],
                        t.finish(27);
                    case 30:
                    case "end":
                        return t.stop()
                    }
            }, t, m, [[15, 23, 27, 30]])
        })),
        function(t, e) {
            return g.apply(this, arguments)
        }
        );
        e.b = {
            fetchHPData: function() {
                return b("get", "/hpdata")
            },
            fetchAnimeList: function(t) {
                return b("get", "/anime_list", t)
            },
            fetchSeason: function(t) {
                return b("get", "/season_list/" + t)
            },
            fetchSearchResults: function(t) {
                return b("post", "/search", {
                    query: t
                })
            }
        }
    },
    pFle: function(t, e, n) {
        t.exports = n.p + "static/img/ebuko-sprite_5.dad6dd8.png"
    },
    uC2P: function(t, e) {},
    uslO: function(t, e, n) {
        var i = {
            "./af": "3CJN",
            "./af.js": "3CJN",
            "./ar": "3MVc",
            "./ar-dz": "tkWw",
            "./ar-dz.js": "tkWw",
            "./ar-kw": "j8cJ",
            "./ar-kw.js": "j8cJ",
            "./ar-ly": "wPpW",
            "./ar-ly.js": "wPpW",
            "./ar-ma": "dURR",
            "./ar-ma.js": "dURR",
            "./ar-sa": "7OnE",
            "./ar-sa.js": "7OnE",
            "./ar-tn": "BEem",
            "./ar-tn.js": "BEem",
            "./ar.js": "3MVc",
            "./az": "eHwN",
            "./az.js": "eHwN",
            "./be": "3hfc",
            "./be.js": "3hfc",
            "./bg": "lOED",
            "./bg.js": "lOED",
            "./bm": "hng5",
            "./bm.js": "hng5",
            "./bn": "aM0x",
            "./bn.js": "aM0x",
            "./bo": "w2Hs",
            "./bo.js": "w2Hs",
            "./br": "OSsP",
            "./br.js": "OSsP",
            "./bs": "aqvp",
            "./bs.js": "aqvp",
            "./ca": "wIgY",
            "./ca.js": "wIgY",
            "./cs": "ssxj",
            "./cs.js": "ssxj",
            "./cv": "N3vo",
            "./cv.js": "N3vo",
            "./cy": "ZFGz",
            "./cy.js": "ZFGz",
            "./da": "YBA/",
            "./da.js": "YBA/",
            "./de": "DOkx",
            "./de-at": "8v14",
            "./de-at.js": "8v14",
            "./de-ch": "Frex",
            "./de-ch.js": "Frex",
            "./de.js": "DOkx",
            "./dv": "rIuo",
            "./dv.js": "rIuo",
            "./el": "CFqe",
            "./el.js": "CFqe",
            "./en-au": "Sjoy",
            "./en-au.js": "Sjoy",
            "./en-ca": "Tqun",
            "./en-ca.js": "Tqun",
            "./en-gb": "hPuz",
            "./en-gb.js": "hPuz",
            "./en-ie": "ALEw",
            "./en-ie.js": "ALEw",
            "./en-il": "QZk1",
            "./en-il.js": "QZk1",
            "./en-nz": "dyB6",
            "./en-nz.js": "dyB6",
            "./eo": "Nd3h",
            "./eo.js": "Nd3h",
            "./es": "LT9G",
            "./es-do": "7MHZ",
            "./es-do.js": "7MHZ",
            "./es-us": "INcR",
            "./es-us.js": "INcR",
            "./es.js": "LT9G",
            "./et": "XlWM",
            "./et.js": "XlWM",
            "./eu": "sqLM",
            "./eu.js": "sqLM",
            "./fa": "2pmY",
            "./fa.js": "2pmY",
            "./fi": "nS2h",
            "./fi.js": "nS2h",
            "./fo": "OVPi",
            "./fo.js": "OVPi",
            "./fr": "tzHd",
            "./fr-ca": "bXQP",
            "./fr-ca.js": "bXQP",
            "./fr-ch": "VK9h",
            "./fr-ch.js": "VK9h",
            "./fr.js": "tzHd",
            "./fy": "g7KF",
            "./fy.js": "g7KF",
            "./gd": "nLOz",
            "./gd.js": "nLOz",
            "./gl": "FuaP",
            "./gl.js": "FuaP",
            "./gom-latn": "+27R",
            "./gom-latn.js": "+27R",
            "./gu": "rtsW",
            "./gu.js": "rtsW",
            "./he": "Nzt2",
            "./he.js": "Nzt2",
            "./hi": "ETHv",
            "./hi.js": "ETHv",
            "./hr": "V4qH",
            "./hr.js": "V4qH",
            "./hu": "xne+",
            "./hu.js": "xne+",
            "./hy-am": "GrS7",
            "./hy-am.js": "GrS7",
            "./id": "yRTJ",
            "./id.js": "yRTJ",
            "./is": "upln",
            "./is.js": "upln",
            "./it": "FKXc",
            "./it.js": "FKXc",
            "./ja": "ORgI",
            "./ja.js": "ORgI",
            "./jv": "JwiF",
            "./jv.js": "JwiF",
            "./ka": "RnJI",
            "./ka.js": "RnJI",
            "./kk": "j+vx",
            "./kk.js": "j+vx",
            "./km": "5j66",
            "./km.js": "5j66",
            "./kn": "gEQe",
            "./kn.js": "gEQe",
            "./ko": "eBB/",
            "./ko.js": "eBB/",
            "./ky": "6cf8",
            "./ky.js": "6cf8",
            "./lb": "z3hR",
            "./lb.js": "z3hR",
            "./lo": "nE8X",
            "./lo.js": "nE8X",
            "./lt": "/6P1",
            "./lt.js": "/6P1",
            "./lv": "jxEH",
            "./lv.js": "jxEH",
            "./me": "svD2",
            "./me.js": "svD2",
            "./mi": "gEU3",
            "./mi.js": "gEU3",
            "./mk": "Ab7C",
            "./mk.js": "Ab7C",
            "./ml": "oo1B",
            "./ml.js": "oo1B",
            "./mn": "CqHt",
            "./mn.js": "CqHt",
            "./mr": "5vPg",
            "./mr.js": "5vPg",
            "./ms": "ooba",
            "./ms-my": "G++c",
            "./ms-my.js": "G++c",
            "./ms.js": "ooba",
            "./mt": "oCzW",
            "./mt.js": "oCzW",
            "./my": "F+2e",
            "./my.js": "F+2e",
            "./nb": "FlzV",
            "./nb.js": "FlzV",
            "./ne": "/mhn",
            "./ne.js": "/mhn",
            "./nl": "3K28",
            "./nl-be": "Bp2f",
            "./nl-be.js": "Bp2f",
            "./nl.js": "3K28",
            "./nn": "C7av",
            "./nn.js": "C7av",
            "./pa-in": "pfs9",
            "./pa-in.js": "pfs9",
            "./pl": "7LV+",
            "./pl.js": "7LV+",
            "./pt": "ZoSI",
            "./pt-br": "AoDM",
            "./pt-br.js": "AoDM",
            "./pt.js": "ZoSI",
            "./ro": "wT5f",
            "./ro.js": "wT5f",
            "./ru": "ulq9",
            "./ru.js": "ulq9",
            "./sd": "fW1y",
            "./sd.js": "fW1y",
            "./se": "5Omq",
            "./se.js": "5Omq",
            "./si": "Lgqo",
            "./si.js": "Lgqo",
            "./sk": "OUMt",
            "./sk.js": "OUMt",
            "./sl": "2s1U",
            "./sl.js": "2s1U",
            "./sq": "V0td",
            "./sq.js": "V0td",
            "./sr": "f4W3",
            "./sr-cyrl": "c1x4",
            "./sr-cyrl.js": "c1x4",
            "./sr.js": "f4W3",
            "./ss": "7Q8x",
            "./ss.js": "7Q8x",
            "./sv": "Fpqq",
            "./sv.js": "Fpqq",
            "./sw": "DSXN",
            "./sw.js": "DSXN",
            "./ta": "+7/x",
            "./ta.js": "+7/x",
            "./te": "Nlnz",
            "./te.js": "Nlnz",
            "./tet": "gUgh",
            "./tet.js": "gUgh",
            "./tg": "5SNd",
            "./tg.js": "5SNd",
            "./th": "XzD+",
            "./th.js": "XzD+",
            "./tl-ph": "3LKG",
            "./tl-ph.js": "3LKG",
            "./tlh": "m7yE",
            "./tlh.js": "m7yE",
            "./tr": "k+5o",
            "./tr.js": "k+5o",
            "./tzl": "iNtv",
            "./tzl.js": "iNtv",
            "./tzm": "FRPF",
            "./tzm-latn": "krPU",
            "./tzm-latn.js": "krPU",
            "./tzm.js": "FRPF",
            "./ug-cn": "To0v",
            "./ug-cn.js": "To0v",
            "./uk": "ntHu",
            "./uk.js": "ntHu",
            "./ur": "uSe8",
            "./ur.js": "uSe8",
            "./uz": "XU1s",
            "./uz-latn": "/bsm",
            "./uz-latn.js": "/bsm",
            "./uz.js": "XU1s",
            "./vi": "0X8Q",
            "./vi.js": "0X8Q",
            "./x-pseudo": "e/KL",
            "./x-pseudo.js": "e/KL",
            "./yo": "YXlc",
            "./yo.js": "YXlc",
            "./zh-cn": "Vz2w",
            "./zh-cn.js": "Vz2w",
            "./zh-hk": "ZUyn",
            "./zh-hk.js": "ZUyn",
            "./zh-tw": "BbgG",
            "./zh-tw.js": "BbgG"
        };
        function a(t) {
            return n(s(t))
        }
        function s(t) {
            var e = i[t];
            if (!(e + 1))
                throw new Error("Cannot find module '" + t + "'.");
            return e
        }
        a.keys = function() {
            return Object.keys(i)
        }
        ,
        a.resolve = s,
        t.exports = a,
        a.id = "uslO"
    },
    wd27: function(t, e, n) {
        "use strict";
        var i = n("XyMi");
        var a = function(t) {
            n("jScs")
        }
          , s = Object(i.a)({
            name: "loader"
        }, function() {
            this.$createElement;
            this._self._c;
            return this._m(0)
        }, [function() {
            var t = this.$createElement
              , e = this._self._c || t;
            return e("div", [e("ins")])
        }
        ], !1, a, "data-v-ab13b0a0", null);
        e.a = s.exports
    }
}, ["NHnr"]);
