/*
 TechanJS v0.6.0
 (c) 2014 - 2015 Andre Dumas | https://github.com/andredumas/techan.js
 */
!function (a) {
    if ("object" == typeof exports && "undefined" != typeof module)module.exports = a(); else if ("function" == typeof define && define.amd)define([], a); else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.techan = a()
    }
}(function () {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i)return i(g, !0);
                    if (f)return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {exports: {}};
                b[g][0].call(k.exports, function (a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }

        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)e(d[g]);
        return e
    }({
        1: [function (a, b, c) {
            "use strict";
            b.exports = "0.6.0"
        }, {}], 2: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.r(b)
                }

                function b() {
                    return a.d = c, a.adx = d, a.plusDi = e, a.minusDi = f, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.adx
                }, e = function (a) {
                    return a.plusDi
                }, f = function (a) {
                    return a.minusDi
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.adx = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.plusDi = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, a.minusDi = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, b()
            }
        }, {}], 3: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.r(b)
                }

                function b() {
                    return a.d = c, a.up = d, a.down = e, a.oscillator = f, a.ob = g, a.os = h, a.m = i, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.up
                }, e = function (a) {
                    return a.down
                }, f = function (a) {
                    return a.oscillator
                }, g = function (a) {
                    return a.overbought
                }, h = function (a) {
                    return a.oversold
                }, i = function (a) {
                    return a.middle
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.up = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.down = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, a.oscillator = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, a.overbought = function (a) {
                    return arguments.length ? (g = a, b()) : g
                }, a.oversold = function (a) {
                    return arguments.length ? (h = a, b()) : h
                }, a.middle = function (a) {
                    return arguments.length ? (i = a, b()) : i
                }, b()
            }
        }, {}], 4: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.up(b)
                }

                function b() {
                    return a.d = c, a.up = d, a.dn = e, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.up
                }, e = function (a) {
                    return a.down
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.up = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.down = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, b()
            }
        }, {}], 5: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.r(b)
                }

                function b() {
                    return a.d = c, a.middle = d, a.upper = e, a.lower = f, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.middleBand
                }, e = function (a) {
                    return a.upperBand
                }, f = function (a) {
                    return a.lowerBand
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.middle = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.upper = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, a.lower = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, b()
            }
        }, {}], 6: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.ts(b)
                }

                function b() {
                    return a.d = c, a.ts = d, a.ks = e, a.sa = f, a.sb = g, a.c = h, a.pts = i, a.pks = j, a.pssb = k, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.tenkanSen
                }, e = function (a) {
                    return a.kijunSen
                }, f = function (a) {
                    return a.senkouSpanA
                }, g = function (a) {
                    return a.senkouSpanB
                }, h = function (a) {
                    return a.chikouSpan
                }, i = function (a) {
                    return a.parameters.tenkanSen
                }, j = function (a) {
                    return a.parameters.kijunSen
                }, k = function (a) {
                    return a.parameters.senkouSpanB
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.tenkanSen = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.kijunSen = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, a.senkouSpanA = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, a.senkouSpanB = function (a) {
                    return arguments.length ? (g = a, b()) : g
                }, a.chikouSpan = function (a) {
                    return arguments.length ? (h = a, b()) : h
                }, a.ptenanSen = function (a) {
                    return arguments.length ? (i = a, b()) : i
                }, a.pkijunSen = function (a) {
                    return arguments.length ? (j = a, b()) : j
                }, a.psenkouSpanB = function (a) {
                    return arguments.length ? (k = a, b()) : k
                }, b()
            }
        }, {}], 7: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                return {
                    atrtrailingstop: a("./atrtrailingstop"),
                    ichimoku: a("./ichimoku"),
                    macd: a("./macd"),
                    ohlc: a("./ohlc"),
                    rsi: a("./rsi"),
                    trendline: a("./trendline"),
                    value: a("./value"),
                    volume: a("./volume"),
                    tick: a("./tick"),
                    trade: a("./trade"),
                    adx: a("./adx"),
                    aroon: a("./aroon"),
                    stochastic: a("./stochastic"),
                    williams: a("./williams"),
                    bollinger: a("./bollinger")
                }
            }
        }, {
            "./adx": 2,
            "./aroon": 3,
            "./atrtrailingstop": 4,
            "./bollinger": 5,
            "./ichimoku": 6,
            "./macd": 8,
            "./ohlc": 9,
            "./rsi": 10,
            "./stochastic": 11,
            "./tick": 12,
            "./trade": 13,
            "./trendline": 14,
            "./value": 15,
            "./volume": 16,
            "./williams": 17
        }], 8: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.m(b)
                }

                function b() {
                    return a.d = c, a.m = d, a.s = f, a.dif = g, a.z = e, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.macd
                }, e = function (a) {
                    return a.zero
                }, f = function (a) {
                    return a.signal
                }, g = function (a) {
                    return a.difference
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.macd = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.signal = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, a.difference = function (a) {
                    return arguments.length ? (g = a, b()) : g
                }, b()
            }
        }, {}], 9: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.c(b)
                }

                function b() {
                    return a.d = c, a.o = d, a.h = e, a.l = f, a.c = g, a.v = h, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.open
                }, e = function (a) {
                    return a.high
                }, f = function (a) {
                    return a.low
                }, g = function (a) {
                    return a.close
                }, h = function (a) {
                    return a.volume
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.open = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.high = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, a.low = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, a.close = function (a) {
                    return arguments.length ? (g = a, b()) : g
                }, a.volume = function (a) {
                    return arguments.length ? (h = a, b()) : h
                }, b()
            }
        }, {}], 10: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.r(b)
                }

                function b() {
                    return a.d = c, a.r = d, a.ob = e, a.os = f, a.m = g, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.rsi
                }, e = function (a) {
                    return a.overbought
                }, f = function (a) {
                    return a.oversold
                }, g = function (a) {
                    return a.middle
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.rsi = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.overbought = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, a.oversold = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, a.middle = function (a) {
                    return arguments.length ? (g = a, b()) : g
                }, b()
            }
        }, {}], 11: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.r(b)
                }

                function b() {
                    return a.d = c, a.k = d, a.sd = e, a.ob = f, a.os = g, a.m = h, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.stochasticK
                }, e = function (a) {
                    return a.stochasticD
                }, f = function (a) {
                    return a.overbought
                }, g = function (a) {
                    return a.oversold
                }, h = function (a) {
                    return a.middle
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.stochasticK = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.stochasticD = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, a.overbought = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, a.oversold = function (a) {
                    return arguments.length ? (g = a, b()) : g
                }, a.middle = function (a) {
                    return arguments.length ? (h = a, b()) : h
                }, b()
            }
        }, {}], 12: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(a) {
                    b()
                }

                function b() {
                    return a.d = c, a.h = d, a.l = e, a.s = f, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.high
                }, e = function (a) {
                    return a.low
                }, f = function (a) {
                    return a.spread
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.high = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.low = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, a.spread = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, b()
            }
        }, {}], 13: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.p(b)
                }

                function b() {
                    return a.d = c, a.t = d, a.p = e, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.type
                }, e = function (a) {
                    return a.price
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.type = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.price = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, b()
            }
        }, {}], 14: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.sv(b)
                }

                function b() {
                    return a.sd = c, a.sv = d, a.ed = e, a.ev = f, a
                }

                var c = function (a, b) {
                    return arguments.length < 2 ? a.start.date : void(a.start.date = b)
                }, d = function (a, b) {
                    return arguments.length < 2 ? a.start.value : void(a.start.value = b)
                }, e = function (a, b) {
                    return arguments.length < 2 ? a.end.date : void(a.end.date = b)
                }, f = function (a, b) {
                    return arguments.length < 2 ? a.end.value : void(a.end.value = b)
                };
                return a.startDate = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.startValue = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.endDate = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, a.endValue = function (a) {
                    return arguments.length ? (f = a, b()) : f
                }, b()
            }
        }, {}], 15: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.v(b)
                }

                function b() {
                    return a.d = c, a.v = d, a.z = e, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (b, c) {
                    return arguments.length < 2 ? b.value : (b.value = c, a)
                }, e = function (a) {
                    return a.zero
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.value = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, a.zero = function (a) {
                    return arguments.length ? (e = a, b()) : e
                }, b()
            }
        }, {}], 16: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.v(b)
                }

                function b() {
                    return a.d = c, a.v = d, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.volume
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.volume = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, b()
            }
        }, {}], 17: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b) {
                    return a.r(b)
                }

                function b() {
                    return a.d = c, a.w = d, a
                }

                var c = function (a) {
                    return a.date
                }, d = function (a) {
                    return a.williams
                };
                return a.date = function (a) {
                    return arguments.length ? (c = a, b()) : c
                }, a.williams = function (a) {
                    return arguments.length ? (d = a, b()) : d
                }, b()
            }
        }, {}], 18: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                return c ? {date: a, adx: b, plusDi: c, minusDi: d} : {date: a, adx: null, plusDi: null, minusDi: null}
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var b = c().accessor(e.accessor()).period(g).init(), h = c().accessor(e.accessor()).period(g).init(), i = c().accessor(e.accessor()).period(g).init(), j = c().accessor(e.accessor()).period(g).init();
                        return g = parseInt(g), a.map(function (c, e) {
                            if (1 > e)return d(f.accessor.d(c));
                            var k = f.accessor.h(a[e]) - f.accessor.h(a[e - 1]), l = f.accessor.l(a[e - 1]) - f.accessor.l(a[e]), m = 0;
                            k > l && k > 0 && (m = k);
                            var n = 0;
                            l > k && l > 0 && (n = l);
                            var o = d3.max([f.accessor.h(c) - f.accessor.l(c), Math.abs(f.accessor.h(c) - f.accessor.c(a[e - 1])), Math.abs(f.accessor.l(c) - f.accessor.c(a[e - 1]))]), p = b.average(m), q = h.average(n), r = i.average(o);
                            if (e > g) {
                                var s = 100 * p / r, t = 100 * q / r, u = 0;
                                s - t !== 0 && (u = Math.abs((s - t) / (s + t)));
                                var v = 100 * j.average(u);
                                return e >= 2 * g ? d(f.accessor.d(c), v, s, t) : d(f.accessor.d(c))
                            }
                            return d(f.accessor.d(c))
                        }).filter(function (a) {
                            return a.adx
                        })
                    }

                    var f = {}, g = 14;
                    return e.period = function (a) {
                        return arguments.length ? (g = a, e) : g
                    }, a(e, f).accessor(b()), e
                }
            }
        }, {}], 19: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g) {
                return b ? {date: a, up: b, down: c, oscillator: d, middle: e, overbought: f, oversold: g} : {
                    date: a,
                    up: null,
                    down: null,
                    oscillator: null,
                    middle: null,
                    overbought: null,
                    oversold: null
                }
            }

            b.exports = function (a, b) {
                return function () {
                    function c(a) {
                        return a.map(function (b, c) {
                            if (c >= f - 1) {
                                for (var j = 0, k = 0, l = 1e4, m = 0, n = 0; f > n; n++)e.accessor.h(a[c - n]) > j && (j = e.accessor.h(a[c - n]), k = n), e.accessor.l(a[c - n]) < l && (l = e.accessor.l(a[c - n]), m = n);
                                var o = (f - k) / f * 100, p = (f - m) / f * 100, q = o - p;
                                return d(e.accessor.d(b), o, p, q, h, g, i)
                            }
                            return d(e.accessor.d(b))
                        }).filter(function (a) {
                            return a.up
                        })
                    }

                    var e = {}, f = 20, g = 70, h = 0, i = 30;
                    return c.period = function (a) {
                        return arguments.length ? (f = a, c) : f
                    }, c.overbought = function (a) {
                        return arguments.length ? (g = a, c) : g
                    }, c.middle = function (a) {
                        return arguments.length ? (h = a, c) : h
                    }, c.oversold = function (a) {
                        return arguments.length ? (i = a, c) : i
                    }, a(c, e).accessor(b()), c
                }
            }
        }, {}], 20: [function (a, b, c) {
            "use strict";
            function d(a, b) {
                return b ? {date: a, value: b} : {date: a, value: null}
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        return e.init(), a.map(function (a, b) {
                            var c = e.atr(a);
                            return b >= f.period ? d(f.accessor.d(a), c) : d(f.accessor.d(a))
                        }).filter(function (a) {
                            return null !== a.value
                        })
                    }

                    var f = {}, g = c(), h = null, i = 0, j = 0;
                    return e.init = function () {
                        return g.accessor(e.accessor()).period(f.period).init(), h = null, i = 0, j = 0, e
                    }, e.atr = function (a) {
                        var b = null === h ? f.accessor.h(a) - f.accessor.l(a) : Math.max(f.accessor.h(a) - f.accessor.l(a), Math.abs(f.accessor.h(a) - f.accessor.c(h)), Math.abs(f.accessor.l(a) - f.accessor.c(h)));
                        return h = a, i = j++ <= f.period ? g.average(b) : (i * (f.period - 1) + b) / f.period
                    }, a(e, f).accessor(b()).period(14), e
                }
            }
        }, {}], 21: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b, c) {
                return function () {
                    function d(a) {
                        return g.accessor(e.accessor).period(e.period).init(), a.map(function (a, b) {
                            var c = e.accessor.c(a), d = g.atr(a) * f;
                            return b >= e.period ? {
                                date: e.accessor.d(a),
                                close: c,
                                up: c - d,
                                down: c + d
                            } : {date: e.accessor.d(a), up: null, down: null}
                        }).filter(function (a) {
                            return null !== a.up && null !== a.down
                        }).reduce(function (a, b, c) {
                            var d = a[c - 1], e = 0 === c ? b.up : null, f = null;
                            return d && null !== d.up && (b.close > d.up ? e = Math.max(b.up, d.up) : f = b.down), d && null !== d.down && (b.close < d.down ? f = Math.min(b.down, d.down) : e = b.up), a.push({
                                date: b.date,
                                up: e,
                                down: f
                            }), a
                        }, [])
                    }

                    var e = {}, f = 3, g = c();
                    return d.multiplier = function (a) {
                        return arguments.length ? (f = a, d) : f
                    }, a(d, e).accessor(b()).period(14), d
                }
            }
        }, {}], 22: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                return b ? {date: a, middleBand: b, upperBand: c, lowerBand: d} : {
                    date: a,
                    middleBand: null,
                    upperBand: null,
                    lowerBand: null
                }
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var b, j = c().accessor(e.accessor()).period(h).init();
                        return a.map(function (c, e) {
                            var k = j.average(g.accessor(c));
                            if (e >= h) {
                                var l = 0;
                                for (b = 0; h > b; b++)l += Math.pow(g.accessor.c(a[e - b]) - k, 2);
                                f = Math.sqrt(l / h);
                                var m = k + i * f, n = k - i * f;
                                return d(g.accessor.d(c), k, m, n)
                            }
                            return d(g.accessor.d(c))
                        }).filter(function (a) {
                            return a.middleBand
                        })
                    }

                    var f, g = {}, h = 20, i = 2;
                    return e.period = function (a) {
                        return arguments.length ? (h = a, e) : h
                    }, e.sdMultiplication = function (a) {
                        return arguments.length ? (i = a, e) : i
                    }, a(e, g).accessor(b()), e
                }
            }
        }, {}], 23: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b, c) {
                return function () {
                    function d(a) {
                        return d.init(), a.map(e).filter(function (a) {
                            return null !== a.value
                        })
                    }

                    function e(a, b) {
                        var c = d.average(j.accessor(a));
                        return b + 1 < j.period && (c = null), {date: j.accessor.d(a), value: c}
                    }

                    var f, g, h, i, j = {};
                    return d.init = function () {
                        return f = null, g = c(j.period), h = 0, i = 0, d
                    }, d.average = function (a) {
                        return i < j.period ? (h += a) / ++i : (i === j.period && (f = h / i++), f += g * (a - f))
                    }, a(d, j).accessor(b()).period(10), d
                }
            }
        }, {}], 24: [function (a, b, c) {
            "use strict";
            function d(a, b, c) {
                return {
                    parameters: a,
                    date: b,
                    chikouSpan: c,
                    tenkanSen: null,
                    kijunSen: null,
                    senkouSpanA: null,
                    senkouSpanB: null
                }
            }

            function e(a, b) {
                return null !== a && null !== b ? f(a, b) : null
            }

            function f(a, b) {
                return (a + b) / 2
            }

            b.exports = function (a, b) {
                return function () {
                    function c(a) {
                        for (var b = {
                            tenkanSen: i,
                            kijunSen: j,
                            senkouSpanB: k
                        }, c = new Array(a.length), d = c.length - 1; d >= 0; d--)c[d] = g(b, a, d);
                        return c
                    }

                    function g(a, b, c) {
                        for (var g = b[c], i = h.accessor.l(g), j = h.accessor.h(g), k = d(a, h.accessor.d(g), h.accessor.c(g)), l = 0, m = l + 1; l < a.senkouSpanB && c - l >= 0; l++, m = l + 1)g = b[c - l], i = Math.min(i, h.accessor.l(g)), j = Math.max(j, h.accessor.h(g)), k.tenkanSen = m === a.tenkanSen ? f(i, j) : k.tenkanSen, k.kijunSen = m === a.kijunSen ? f(i, j) : k.kijunSen, k.senkouSpanB = m === a.senkouSpanB ? f(i, j) : k.senkouSpanB;
                        return k.senkouSpanA = e(k.tenkanSen, k.kijunSen), k
                    }

                    var h = {}, i = 9, j = 26, k = 52;
                    return c.tenkanSen = function (a) {
                        return arguments.length ? (i = a, c) : i
                    }, c.kijunSen = function (a) {
                        return arguments.length ? (j = a, c) : j
                    }, c.senkouSpanB = function (a) {
                        return arguments.length ? (k = a, c) : k
                    }, a(c, h).accessor(b()), c
                }
            }
        }, {}], 25: [function (a, b, c) {
            "use strict";
            function d(a) {
                return 2 / (a + 1)
            }

            function e(a) {
                return 1 / a
            }

            b.exports = function () {
                var b = a("./indicatormixin")(), c = a("../accessor")(), f = a("./ema"), g = f(b, c.ohlc, d), h = a("./sma")(b, c.ohlc), i = a("./atr")(b, c.ohlc, h), j = a("./vwap")(b, c.ohlc);
                return {
                    atr: i,
                    atrtrailingstop: a("./atrtrailingstop")(b, c.ohlc, i),
                    ema: g,
                    ichimoku: a("./ichimoku")(b, c.ohlc),
                    macd: a("./macd")(b, c.ohlc, g),
                    rsi: a("./rsi")(b, c.ohlc, g),
                    sma: h,
                    wilderma: f(b, c.ohlc, e),
                    aroon: a("./aroon")(b, c.ohlc),
                    stochastic: a("./stochastic")(b, c.ohlc, g),
                    williams: a("./williams")(b, c.ohlc, g),
                    adx: a("./adx")(b, c.ohlc, g),
                    bollinger: a("./bollinger")(b, c.ohlc, h),
                    vwap: j
                }
            }
        }, {
            "../accessor": 7,
            "./adx": 18,
            "./aroon": 19,
            "./atr": 20,
            "./atrtrailingstop": 21,
            "./bollinger": 22,
            "./ema": 23,
            "./ichimoku": 24,
            "./indicatormixin": 26,
            "./macd": 27,
            "./rsi": 28,
            "./sma": 29,
            "./stochastic": 30,
            "./vwap": 31,
            "./williams": 32
        }], 26: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                return function (a, b) {
                    var c = {};
                    return c.period = function (d) {
                        return b.period = d, a.period = function (c) {
                            return arguments.length ? (b.period = c, a) : b.period
                        }, c
                    }, c.accessor = function (d) {
                        return b.accessor = d, a.accessor = function (c) {
                            return arguments.length ? (b.accessor = c, a) : b.accessor
                        }, c
                    }, c
                }
            }
        }, {}], 27: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e) {
                return b ? {date: a, macd: b, signal: c, difference: d, zero: e} : {
                    date: a,
                    macd: null,
                    signal: null,
                    difference: null,
                    zero: null
                }
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var b = Math.max(g, h) - 1, c = b + i - 1;
                        return j.accessor(e.accessor()).period(i).init(), k.accessor(e.accessor()).period(g).init(), l.accessor(e.accessor()).period(h).init(), a.map(function (a, e) {
                            var g = k.average(f.accessor(a)) - l.average(f.accessor(a)), h = e >= b ? j.average(g) : null;
                            return e >= c ? d(f.accessor.d(a), g, h, g - h, 0) : d(f.accessor.d(a))
                        }).filter(function (a) {
                            return null !== a.macd
                        })
                    }

                    var f = {}, g = 12, h = 26, i = 9, j = c(), k = c(), l = c();
                    return e.fast = function (a) {
                        return arguments.length ? (g = a, e) : g
                    }, e.slow = function (a) {
                        return arguments.length ? (h = a, e) : h
                    }, e.signal = function (a) {
                        return arguments.length ? (i = a, e) : i
                    }, a(e, f).accessor(b()), e
                }
            }
        }, {}], 28: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e) {
                return b ? {date: a, rsi: b, middle: c, overbought: d, oversold: e} : {
                    date: a,
                    rsi: null,
                    middle: null,
                    overbought: null,
                    oversold: null
                }
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        return j.accessor(e.accessor()).period(f.period).init(), k.accessor(e.accessor()).period(f.period).init(), a.map(function (b, c) {
                            if (1 > c)return d(f.accessor.d(b));
                            var e = f.accessor(b) - f.accessor(a[c - 1]), l = k.average(Math.max(e, 0)), m = Math.abs(j.average(Math.min(e, 0)));
                            if (c >= f.period) {
                                var n = 100 - 100 / (1 + l / m);
                                return d(f.accessor.d(b), n, h, g, i)
                            }
                            return d(f.accessor.d(b))
                        }).filter(function (a) {
                            return null !== a.rsi
                        })
                    }

                    var f = {}, g = 70, h = 50, i = 30, j = c(), k = c();
                    return e.overbought = function (a) {
                        return arguments.length ? (g = a, e) : g
                    }, e.middle = function (a) {
                        return arguments.length ? (h = a, e) : h
                    }, e.oversold = function (a) {
                        return arguments.length ? (i = a, e) : i
                    }, a(e, f).accessor(b()).period(14), e
                }
            }
        }, {}], 29: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b) {
                return function () {
                    function c(a) {
                        return c.init(), a.map(d).filter(function (a) {
                            return null !== a.value
                        })
                    }

                    function d(a, b) {
                        var d = c.average(h.accessor(a));
                        return b + 1 < h.period && (d = null), {date: h.accessor.d(a), value: d}
                    }

                    var e, f, g, h = {};
                    return c.init = function () {
                        return g = 0, e = [], f = 0, c
                    }, c.average = function (a) {
                        return g += a, e.length + 1 < h.period ? (e.push(a), g / ++f) : (e.length < h.period && (e.push(a), g += a), g -= e[f], e[f] = a, ++f === h.period && (f = 0), g / h.period)
                    }, a(c, h).accessor(b()).period(10), c
                }
            }
        }, {}], 30: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f) {
                return b ? {date: a, stochasticK: b, stochasticD: c, middle: d, overbought: e, oversold: f} : {
                    date: a,
                    stochasticK: null,
                    stochasticD: null,
                    middle: d,
                    overbought: e,
                    oversold: f
                }
            }

            b.exports = function (a, b) {
                return function () {
                    function c(a) {
                        var b = parseInt(f) + parseInt(g);
                        return a.map(function (c, k) {
                            if (k >= b) {
                                for (var l = [], m = [], n = [], o = 0; g > o; o++)l.push(0), m.push(1e4), n.push(0);
                                for (var p = 0, q = 0; g > q; q++) {
                                    for (var r = 0; f > r; r++)e.accessor.h(a[k - r - q]) > l[q] && (l[q] = e.accessor.h(a[k - r - q])), e.accessor.l(a[k - r - q]) < m[q] && (m[q] = e.accessor.l(a[k - r - q]));
                                    var s = l[q] - m[q];
                                    s > 0 ? n[q] = (e.accessor.c(a[k - q]) - m[q]) / (l[q] - m[q]) * 100 : n[q] = 50, p += n[q]
                                }
                                var t = n[0];
                                return p /= g, d(e.accessor.d(c), t, p, i, h, j)
                            }
                            return d(e.accessor.d(c), null, null, i, h, j)
                        }).filter(function (a) {
                            return a.stochasticK
                        })
                    }

                    var e = {}, f = 20, g = 3, h = 80, i = 50, j = 20;
                    return c.period = function (a) {
                        return arguments.length ? (f = a, c) : f
                    }, c.periodD = function (a) {
                        return arguments.length ? (g = a, c) : g
                    }, c.overbought = function (a) {
                        return arguments.length ? (h = a, c) : h
                    }, c.middle = function (a) {
                        return arguments.length ? (i = a, c) : i
                    }, c.oversold = function (a) {
                        return arguments.length ? (j = a, c) : j
                    }, a(c, e).accessor(b()), c
                }
            }
        }, {}], 31: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b) {
                return function () {
                    function c(a) {
                        return c.init(), a.map(d).filter(function (a) {
                            return null !== a.value
                        })
                    }

                    function d(a, b) {
                        b > 0 && g.getDate() != h.accessor.d(a).getDate() && (e = 0, f = 0);
                        var c = (h.accessor.h(a) + h.accessor.l(a) + h.accessor.c(a)) / 3;
                        return e += c * h.accessor.v(a), f += h.accessor.v(a), g = h.accessor.d(a), {
                            date: h.accessor.d(a),
                            value: e / f
                        }
                    }

                    var e, f, g, h = {};
                    return c.init = function () {
                        return e = 0, f = 0, c
                    }, a(c, h).accessor(b()).period(1), c
                }
            }
        }, {}], 32: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e) {
                return b ? {date: a, williams: b, middle: c, overbought: d, oversold: e} : {
                    date: a,
                    williams: null,
                    middle: null,
                    overbought: null,
                    oversold: null
                }
            }

            b.exports = function (a, b) {
                return function () {
                    function c(a) {
                        return a.map(function (b, c) {
                            if (c >= f) {
                                for (var j = 0, k = 0, l = 1e4, m = 0, n = 0; f > n; n++)e.accessor.h(a[c - n]) > j && (j = e.accessor.h(a[c - n]), k = n), e.accessor.l(a[c - n]) < l && (l = e.accessor.l(a[c - n]), m = n);
                                var o = (e.accessor.c(a[c]) - l) / (j - l) * 100;
                                return d(e.accessor.d(b), o, h, g, i)
                            }
                            return d(e.accessor.d(b))
                        }).filter(function (a) {
                            return a.williams
                        })
                    }

                    var e = {}, f = 20, g = 80, h = 50, i = 20;
                    return c.period = function (a) {
                        return arguments.length ? (f = a, c) : f
                    }, c.overbought = function (a) {
                        return arguments.length ? (g = a, c) : g
                    }, c.middle = function (a) {
                        return arguments.length ? (h = a, c) : h
                    }, c.oversold = function (a) {
                        return arguments.length ? (i = a, c) : i
                    }, a(c, e).accessor(b()), c
                }
            }
        }, {}], 33: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g, h) {
                a.selectAll("path.adx").attr("d", f), a.selectAll("path.plusDi").attr("d", g), a.selectAll("path.minusDi").attr("d", h)
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var c = b.groupSelect(a, b.dataMapper.array, g.accessor.d);
                        c.entry.append("path").attr("class", "adx"), c.entry.append("path").attr("class", "plusDi"), c.entry.append("path").attr("class", "minusDi"), e.refresh(a)
                    }

                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.adx, g.yScale), i.init(g.accessor.d, g.xScale, g.accessor.plusDi, g.yScale), j.init(g.accessor.d, g.xScale, g.accessor.minusDi, g.yScale)
                    }

                    var g = {}, h = b.pathLine(), i = b.pathLine(), j = b.pathLine();
                    return e.refresh = function (a) {
                        d(a, g.accessor, g.xScale, g.yScale, b, h, i, j)
                    }, c(e, g).plot(a(), f), f(), e
                }
            }
        }, {}], 34: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g, h, i, j) {
                a.selectAll("path.overbought").attr("d", e.horizontalPathLine(b.d, c, b.ob, d)), a.selectAll("path.oversold").attr("d", e.horizontalPathLine(b.d, c, b.os, d)), a.selectAll("path.aroon.oscillator").attr("d", f), a.selectAll("path.aroon.oscillatorArea").attr("d", g), a.selectAll("path.aroon.middle").attr("d", h), a.selectAll("path.aroon.up").attr("d", i), a.selectAll("path.aroon.down").attr("d", j)
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var c = b.groupSelect(a, b.dataMapper.array, g.accessor.d);
                        c.entry.append("path").attr("class", "overbought"), c.entry.append("path").attr("class", "oversold"), c.entry.append("path").attr("class", "aroon oscillator"), c.entry.append("path").attr("class", "aroon oscillatorArea"), c.entry.append("path").attr("class", "aroon middle"), c.entry.append("path").attr("class", "aroon up"), c.entry.append("path").attr("class", "aroon down"), e.refresh(a)
                    }

                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.oscillator, g.yScale), i.init(g.accessor.d, g.xScale, g.accessor.oscillator, g.yScale, 0), j.init(g.accessor.d, g.xScale, g.accessor.m, g.yScale), k.init(g.accessor.d, g.xScale, g.accessor.up, g.yScale), l.init(g.accessor.d, g.xScale, g.accessor.down, g.yScale)
                    }

                    var g = {}, h = b.pathLine(), i = b.pathArea(), j = b.pathLine(), k = b.pathLine(), l = b.pathLine();
                    return e.refresh = function (a) {
                        d(a, g.accessor, g.xScale, g.yScale, b, h, i, j, k, l)
                    }, c(e, g).plot(a(), f), f(), e
                }
            }
        }, {}], 35: [function (a, b, c) {
            "use strict";
            function d(a, b, c) {
                a.selectAll("path.up").attr("d", b), a.selectAll("path.down").attr("d", c)
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var c = b.groupSelect(a, b.dataMapper.array);
                        c.entry.append("path").attr("class", "up"), c.entry.append("path").attr("class", "down"), e.refresh(a)
                    }

                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.up, g.yScale), i.init(g.accessor.d, g.xScale, g.accessor.dn, g.yScale)
                    }

                    var g = {}, h = b.pathLine(), i = b.pathLine();
                    return e.refresh = function (a) {
                        d(a, h, i)
                    }, c(e, g).plot(a(), f), f(), e
                }
            }
        }, {}], 36: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, g, j, k, l, m) {
                var n = "left" === d.orient() || "top" === d.orient() ? -1 : 1, o = a.select("g.translate"), p = b.groupSelect(o, e(c, d.scale()));
                p.entry.append("path"), p.entry.append("text"), o.attr("transform", "translate(" + m[0] + "," + m[1] + ")"), p.selection.selectAll("path").attr("d", i(c, d, j, k, l, n)), p.selection.selectAll("text").text(h(c, g)).call(f, c, d, n)
            }

            function e(a, b) {
                return function (c) {
                    var d = b.range(), e = d[0], f = d[d.length - 1];
                    return d = f > e ? [e, f] : [f, e], c.filter(function (c) {
                        if (!a(c))return !1;
                        var e = b(a(c));
                        return e && !isNaN(e) && d[0] <= e && e <= d[1]
                    })
                }
            }

            function f(a, b, c, d) {
                var e = c.scale();
                switch (c.orient()) {
                    case"left":
                    case"right":
                        a.attr({
                            x: d * (Math.max(c.innerTickSize(), 0) + c.tickPadding())+chartScrollLeft,
                            y: g(b, e),
                            dy: ".32em"
                        }).style("text-anchor", 0 > d ? "end" : "start");
                        break;
                    case"top":
                    case"bottom":
                        a.attr({
                            x: g(b, e),
                            y: d * (Math.max(c.innerTickSize(), 0) + c.tickPadding()),
                            dy: 0 > d ? "0em" : ".72em"
                        }).style("text-anchor", "middle")
                }
            }

            function g(a, b) {
                return function (c) {
                    return b(a(c))
                }
            }

            function h(a, b) {
                return function (c) {
                    return b(a(c))
                }
            }

            function i(a, b, c, d, e, f) {
                return function (g) {
                    var h = b.scale(), i = h(a(g)), j = e;
                    switch (b.orient()) {
                        case"left":
                        case"right":
                            var k = 0;
                            return e > c / 2 ? j = c / 2 : k = c / 2 - e, ["M", chartScrollLeft, i, "l", f * Math.max(b.innerTickSize(), 1), -j, "l", 0, -k, "l", f * d, 0, "l", 0, c, "l", f * -d, 0, "l", 0, -k].join(" ");
                        case"top":
                        case"bottom":
                            var l = 0;
                            return e > d / 2 ? j = d / 2 : l = d / 2 - e, ["M", i, 0, "l", -j, f * Math.max(b.innerTickSize(), 1), "l", -l, 0, "l", 0, f * c, "l", d, 0, "l", 0, f * -c, "l", -l, 0].join(" ");
                        default:
                            throw"Unsupported axis.orient() = " + b.orient()
                    }
                }
            }

            b.exports = function (a, b, c, e) {
                return function () {
                    function f(a) {
                        a.selectAll("g.translate").data(c.dataMapper.array).enter().append("g").attr("class", "translate"), f.refresh(a)
                    }

                    var g, h = {}, i = a(), j = 4, k = 14, l = 50, m = [0, 0];
                    return f.refresh = function (a) {
                        var b = g ? g : i.tickFormat() ? i.tickFormat() : i.scale().tickFormat();
                        d(a, c, h.accessor, i, b, k, l, j, m)
                    }, f.axis = function (a) {
                        return arguments.length ? (i = a, f) : i
                    }, f.format = function (a) {
                        return arguments.length ? (g = a, f) : g
                    }, f.height = function (a) {
                        return arguments.length ? (k = a, f) : k
                    }, f.width = function (a) {
                        return arguments.length ? (l = a, f) : l
                    }, f.translate = function (a) {
                        return arguments.length ? (m = a, f) : m
                    }, e(f, h).accessor(b()), f
                }
            }
        }, {}], 37: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g, h) {
                a.selectAll("path.upper").attr("d", f), a.selectAll("path.middle").attr("d", g), a.selectAll("path.lower").attr("d", h)
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var c = b.groupSelect(a, b.dataMapper.array, g.accessor.d);
                        c.entry.append("path").attr("class", "upper"), c.entry.append("path").attr("class", "middle"), c.entry.append("path").attr("class", "lower"), e.refresh(a)
                    }

                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.upper, g.yScale), i.init(g.accessor.d, g.xScale, g.accessor.middle, g.yScale), j.init(g.accessor.d, g.xScale, g.accessor.lower, g.yScale)
                    }

                    var g = {}, h = b.pathLine(), i = b.pathLine(), j = b.pathLine();
                    return e.refresh = function (a) {
                        d(a, g.accessor, g.xScale, g.yScale, b, h, i, j)
                    }, c(e, g).plot(a(), f), f(), e
                }
            }
        }, {}], 38: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b, c, d, e) {
                return function () {
                    function a(b) {
                        var c = d.groupSelect(b, d.dataMapper.array, k.accessor.d);
                        d.appendPathsUpDownEqual(c.selection, k.accessor, ["candle", "body"]), d.appendPathsUpDownEqual(c.selection, k.accessor, ["candle", "wick"]), a.refresh(b)
                    }

                    function b() {
                        h = d.joinPath(f), i = d.joinPath(g), j = d.lineWidth(k.xScale, 1, 4)
                    }

                    function f() {
                        var a = k.accessor, b = k.xScale, c = k.yScale, d = k.width(b);
                        return function (e) {
                            var f = [], g = c(a.o(e)), h = c(a.c(e)), i = b(a.d(e)) - d / 2;
                            return f.push("M", i, g, "l", d, 0), g != h && f.push("L", i + d, h, "l", -d, 0, "L", i, g), f.join(" ")
                        }
                    }

                    function g() {
                        var a = k.accessor, b = k.xScale, c = k.yScale, d = k.width(b);
                        return function (e) {
                            var f = [], g = c(a.o(e)), h = c(a.c(e)), i = b(a.d(e)), j = i - d / 2;
                            return f.push("M", i, c(a.h(e)), "L", i, Math.min(g, h)), g == h && f.push("M", j, g, "l", d, 0), f.push("M", i, Math.max(g, h), "L", i, c(a.l(e))), f.join(" ")
                        }
                    }

                    var h, i, j, k = {};
                    return a.refresh = function (a) {
                        a.selectAll("path.candle.body").attr("d", h), a.selectAll("path.candle.wick").attr("d", i).style("stroke-width", j)
                    }, e(a, k).plot(c(), b).width(b), a
                }
            }
        }, {}], 39: [function (a, b, c) {
            "use strict";
            function d(a, b) {
                a.select("g.data.top").style("display", b)
            }

            function e(a, b) {
                return function (c) {
                    if (null === c)return null;
                    var d = a(c);
                    return ["M", b[0], d, "L", b[b.length - 1], d].join(" ")
                }
            }

            function f(a, b) {
                return function (c) {
                    if (null === c)return null;
                    var d = a(c), e = a.range();
                    return d < Math.min(e[0], e[e.length - 1]) || d > Math.max(e[0], e[e.length - 1]) ? null : ["M", d, b[0], "L", d, b[b.length - 1]].join(" ")
                }
            }

            b.exports = function (a, b, c, g, h, i) {
                return function () {
                    function a(b) {
                        var c = b.selectAll("g.data.top").data([q], function (a) {
                            return a
                        }), d = c.enter(), e = d.append("g").attr("class", "data top").style("display", "none");
                        var lineXlocation = screenWidth/2+chartScrollLeft;
                        c.exit().remove(), e.append("path").attr("class", "horizontal wire").attr("d","M 0 95 L 960 95"), e.append("path").attr("class", "vertical wire").attr("d","M "+lineXlocation+" 0 L "+lineXlocation+" 190"), h.annotation.append(e, o, "x"), h.annotation.append(e, p, "y"), b.selectAll("rect").data([0]).enter().append("rect").style({
                            fill: "none",
                            "pointer-events": "all"
                        }), a.refresh(b)
                    }

                    function dd(a, b) {
                        a.select("g.data.top").style("display", b)
                    }

                    function b(a, b, d, e) {
                        return function () {
                            if(!shouldScroll){
                                var f = c(this),  g = m.xScale.invert(f[0]), i = m.yScale.invert(f[1]);
                                j(a.datum(g), b.datum(i), d.each(h.annotation.update(o, f[0])), e.each(h.annotation.update(p, f[1]))), n.move([g, i])
                                var index = Math.round(f[0]*tickToShow/screenWidth);
                                updateOHLC(index);
                            }
                        }
                    }

                    function bs(a,b,d,e) {
                        return function () {
                            var f = c(this),  g = m.xScale.invert(f[0]), i = m.yScale.invert(f[1]);
                            j(a.datum(g), b.datum(i), d.each(h.annotation.update(o, f[0])), e.each(h.annotation.update(p, f[1]))), n.move([g, i])
                            if(!shouldScroll) {
                                dd(a, "inline");
                                n.enter();
                            }
                        }
                    }

                    function updateOHLC(index) {
                        $("#open").text(String(data[index]['open']));
                        $("#high").text(String(data[index]['high']));
                        $("#low").text(String(data[index]['low']));
                        $("#close").text(String(data[index]['close']));
                        $("#volume").text(String(data[index]['volume']));
                    }

                    function j(a, b, c, d) {
                        var g = m.xScale, i = m.yScale;
                        a.attr("d", f(g, k || i.range())), b.attr("d", e(i, l || g.range())), c.each(h.annotation.refresh(o)), d.each(h.annotation.refresh(p))
                    }

                    var k, l, m = {}, n = g("enter", "out", "move"), o = [], p = [], q = 0;
                    return a.refresh = function (a) {
                        var c = m.xScale.range(), e = m.yScale.range(), f = a.selectAll("g.data"), g = a.selectAll("rect"), h = f.selectAll("path.vertical"), i = f.selectAll("path.horizontal"), k = f.selectAll("g.axisannotation.x > g"), l = f.selectAll("g.axisannotation.y > g");
                        g.attr({
                            x: Math.min.apply(null, c),
                            y: Math.min.apply(null, e),
                            height: Math.abs(e[e.length - 1] - e[0]),
                            width: Math.abs(c[c.length - 1] - c[0])
                        }).on("touchstart",bs(h,i,k,l))
                            .on("touchend", function () {
                                d(a, "none"), n.out();
                                $("#candleStick svg").off('touchstart', crosshairWillMove);
                                $("#candleStick").off('touchmove', chartShouldRedraw);
                                svgYaxis.attr("width",screenWidth);
                                shouldScroll = true;
                                $("#candleStick svg").on('touchstart', crosshairWillMove);
                                $("#candleStick").on('touchmove', chartShouldRedraw);
                            }).on("touchmove", b(h, i, k, l));
                        //j(h, i, k, l);
                    }, a.xAnnotation = function (b) {
                        return arguments.length ? (o = b instanceof Array ? b : [b], q++, a) : o
                    }, a.yAnnotation = function (b) {
                        return arguments.length ? (p = b instanceof Array ? b : [b], q++, a) : p
                    }, a.verticalWireRange = function (b) {
                        return arguments.length ? (k = b, a) : k
                    }, a.horizontalWireRange = function (b) {
                        return arguments.length ? (l = b, a) : l
                    }, i(a, m).xScale().yScale().on(n), a
                }
            }
        }, {}], 40: [function (a, b, c) {
            "use strict";
            function d(a) {
                return function (b) {
                    return -a(b)
                }
            }

            function e() {
                return Math.random().toString(36).substr(2, 9)
            }

            b.exports = function (a, b, c, f) {
                return function () {
                    function g(a) {
                        var b = c.groupSelect(a, c.dataMapper.array), d = "kumoclipup-" + e(), f = "kumoclipdown-" + e();
                        b.entry.append("clipPath").attr({
                            id: f,
                            "class": "kumoclipdown"
                        }).append("path"), b.entry.append("clipPath").attr({
                            id: d,
                            "class": "kumoclipup"
                        }).append("path"), b.entry.append("path").attr({
                            "class": "kumo down",
                            "clip-path": "url(#" + f + ")"
                        }), b.entry.append("path").attr({
                            "class": "kumo up",
                            "clip-path": "url(#" + d + ")"
                        }), b.entry.append("path").attr("class", "senkouspanb"), b.entry.append("path").attr("class", "senkouspana"), b.entry.append("path").attr("class", "chikouspan"), b.entry.append("path").attr("class", "kijunsen"), b.entry.append("path").attr("class", "tenkansen"), g.refresh(a)
                    }

                    function h(a, b) {
                        a.selectAll(".kumoclipdown path").attr("d", m.y1(b.range()[0])), a.selectAll(".kumoclipup path").attr("d", m.y1(b.range()[1])), a.selectAll("path.kumo.down").attr("d", n), a.selectAll("path.kumo.up").attr("d", n), a.selectAll("path.senkouspanb").attr("d", p), a.selectAll("path.senkouspana").attr("d", o), a.selectAll("path.chikouspan").attr("d", q), a.selectAll("path.kijunsen").attr("d", s), a.selectAll("path.tenkansen").attr("d", r)
                    }

                    function i() {
                        o.init(l.accessor.d, l.xScale, l.accessor.sa, l.yScale, l.accessor.pks), p.init(l.accessor.d, l.xScale, l.accessor.sb, l.yScale, l.accessor.pks), q.init(l.accessor.d, l.xScale, l.accessor.c, l.yScale, d(l.accessor.pks)), r.init(l.accessor.d, l.xScale, l.accessor.ts, l.yScale),
                            s.init(l.accessor.d, l.xScale, l.accessor.ks, l.yScale)
                    }

                    function j() {
                        return a().interpolate("monotone").defined(function (a) {
                            return null !== l.accessor.sb(a)
                        }).x(function (a) {
                            return l.xScale(l.accessor.d(a), l.accessor.pks(a))
                        }).y0(function (a) {
                            return l.yScale(l.accessor.sb(a))
                        })
                    }

                    function k() {
                        return a().interpolate("monotone").defined(function (a) {
                            return null !== l.accessor.sa(a) && null !== l.accessor.sb(a)
                        }).x(function (a) {
                            return l.xScale(l.accessor.d(a), l.accessor.pks(a))
                        }).y0(function (a) {
                            return l.yScale(l.accessor.sa(a))
                        }).y1(function (a) {
                            return l.yScale(l.accessor.sb(a))
                        })
                    }

                    var l = {}, m = j(), n = k(), o = c.pathLine(), p = c.pathLine(), q = c.pathLine(), r = c.pathLine(), s = c.pathLine();
                    return g.refresh = function (a) {
                        h(a, l.yScale)
                    }, f(g, l).plot(b(), i), i(), g
                }
            }
        }, {}], 41: [function (a, b, c) {
            "use strict";
            function d() {
                return d3.event
            }

            b.exports = function (b) {
                var c = a("../scale")(b), e = a("../accessor")(), f = a("./plot")(b.svg.line, b.select), g = a("./plotmixin")(b.scale.linear, b.functor, c.financetime, f.barWidth), h = a("./line"), i = a("./axisannotation")(b.svg.axis, e.value, f, g), j = a("../svg")(b);
                return {
                    tradearrow: a("./tradearrow")(b.select, b.functor, b.mouse, b.dispatch, e.trade, f, g, j.arrow),
                    atr: h(e.value, f, g),
                    atrtrailingstop: a("./atrtrailingstop")(e.atrtrailingstop, f, g),
                    axisannotation: i,
                    candlestick: a("./candlestick")(b.scale.linear, b.extent, e.ohlc, f, g),
                    crosshair: a("./crosshair")(b.select, d, b.mouse, b.dispatch, f, g),
                    ema: h(e.value, f, g),
                    ichimoku: a("./ichimoku")(b.svg.area, e.ichimoku, f, g),
                    ohlc: a("./ohlc")(b.scale.linear, b.extent, e.ohlc, f, g),
                    tick: a("./tick")(b.scale.linear, b.extent, e.tick, f, g),
                    close: h(e.ohlc, f, g),
                    volume: a("./volume")(e.volume, f, g),
                    rsi: a("./rsi")(e.rsi, f, g),
                    macd: a("./macd")(e.macd, f, g),
                    momentum: h(e.value, f, g, !0),
                    moneyflow: h(e.value, f, g, !0),
                    sma: h(e.value, f, g),
                    supstance: a("./supstance")(b.behavior.drag, d, b.select, b.dispatch, e.value, f, g),
                    trendline: a("./trendline")(b.behavior.drag, d, b.select, b.dispatch, e.trendline, f, g),
                    wilderma: h(e.value, f, g),
                    adx: a("./adx")(e.adx, f, g),
                    aroon: a("./aroon")(e.aroon, f, g),
                    stochastic: a("./stochastic")(e.stochastic, f, g),
                    williams: a("./williams")(e.williams, f, g),
                    bollinger: a("./bollinger")(e.bollinger, f, g),
                    vwap: h(e.value, f, g)
                }
            }
        }, {
            "../accessor": 7,
            "../scale": 56,
            "../svg": 59,
            "./adx": 33,
            "./aroon": 34,
            "./atrtrailingstop": 35,
            "./axisannotation": 36,
            "./bollinger": 37,
            "./candlestick": 38,
            "./crosshair": 39,
            "./ichimoku": 40,
            "./line": 42,
            "./macd": 43,
            "./ohlc": 44,
            "./plot": 45,
            "./plotmixin": 46,
            "./rsi": 47,
            "./stochastic": 48,
            "./supstance": 49,
            "./tick": 50,
            "./tradearrow": 51,
            "./trendline": 52,
            "./volume": 53,
            "./williams": 54
        }], 42: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g) {
                a.selectAll("path.line").attr("d", f), g && a.selectAll("path.zero").attr("d", e.horizontalPathLine(c, b.z, d))
            }

            b.exports = function (a, b, c, e) {
                return e = e || !1, function () {
                    function f(a) {
                        var c = b.groupSelect(a, b.dataMapper.array);
                        c.entry.append("path").attr("class", "line"), e && c.selection.append("path").attr("class", "zero"), f.refresh(a)
                    }

                    function g() {
                        i.init(h.accessor.d, h.xScale, h.accessor, h.yScale)
                    }

                    var h = {}, i = b.pathLine();
                    return f.refresh = function (a) {
                        d(a, h.accessor, h.xScale, h.yScale, b, i, e)
                    }, c(f, h).plot(a(), g), g(), f
                }
            }
        }, {}], 43: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g, h) {
                a.selectAll("path.difference").attr("d", f), a.selectAll("path.zero").attr("d", e.horizontalPathLine(b.d, c, b.z, d)), a.selectAll("path.macd").attr("d", g), a.selectAll("path.signal").attr("d", h)
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var c = b.groupSelect(a, b.dataMapper.array, i.accessor.d);
                        c.selection.append("path").attr("class", "difference"), c.selection.append("path").attr("class", "zero"), c.selection.append("path").attr("class", "macd"), c.selection.append("path").attr("class", "signal"), e.refresh(a)
                    }

                    function f() {
                        h = b.joinPath(g), j.init(i.accessor.d, i.xScale, i.accessor.m, i.yScale), k.init(i.accessor.d, i.xScale, i.accessor.s, i.yScale)
                    }

                    function g() {
                        var a = i.accessor, c = i.xScale, d = i.yScale, e = i.width(c);
                        b.r;
                        return function (b) {
                            var f = d(0), g = d(a.dif(b)) - f, h = c(a.d(b)) - e / 2;
                            return ["M", h, f, "l", 0, g, "l", e, 0, "l", 0, -g].join(" ")
                        }
                    }

                    var h, i = {}, j = b.pathLine(), k = b.pathLine();
                    return e.refresh = function (a) {
                        d(a, i.accessor, i.xScale, i.yScale, b, h, j, k)
                    }, c(e, i).plot(a(), f).width(f), f(), e
                }
            }
        }, {}], 44: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b, c, d, e) {
                return function () {
                    function a(b) {
                        var c = d.groupSelect(b, d.dataMapper.array, i.accessor.d);
                        d.appendPathsUpDownEqual(c.selection, i.accessor, "ohlc"), a.refresh(b)
                    }

                    function b() {
                        g = d.joinPath(f), h = d.lineWidth(i.xScale, 1, 2)
                    }

                    function f() {
                        var a = i.accessor, b = i.xScale, c = i.yScale, e = i.width(b);
                        d.r;
                        return function (d) {
                            var f = c(a.o(d)), g = c(a.c(d)), h = b(a.d(d)), i = h - e / 2;
                            return ["M", i, f, "l", e / 2, 0, "M", h, c(a.h(d)), "L", h, c(a.l(d)), "M", h, g, "l", e / 2, 0].join(" ")
                        }
                    }

                    var g, h, i = {};
                    return a.refresh = function (a) {
                        a.selectAll("path.ohlc").attr("d", g).style("stroke-width", h)
                    }, e(a, i).plot(c(), b).width(b), a
                }
            }
        }, {}], 45: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b) {
                function c(a, b, c) {
                    var d = a.selectAll("g.data").data(b, c);
                    return d.exit().remove(), d
                }

                function d(a) {
                    return a.enter().append("g").attr("class", "data")
                }

                function e() {
                    function b(a) {
                        return c(a)
                    }

                    var c = a().interpolate("monotone");
                    return b.init = function (a, b, d, e, f) {
                        return c.defined(function (a) {
                            return null !== d(a)
                        }).x(function (c) {
                            return b(a(c), void 0 === f ? f : f(c))
                        }).y(function (a) {
                            return e(d(a))
                        })
                    }, b.d3 = function () {
                        return c
                    }, b
                }

                function f() {
                    function a(a) {
                        return b(a)
                    }

                    var b = d3.svg.area().interpolate("monotone");
                    return a.init = function (a, c, d, e, f) {
                        return b.defined(function (a) {
                            return null !== d(a)
                        }).x(function (b) {
                            return c(a(b))
                        }).y0(function (a) {
                            return e(f)
                        }).y1(function (a) {
                            return e(d(a))
                        })
                    }, a.d3 = function () {
                        return b
                    }, a
                }

                function g(a) {
                    return {
                        up: function (b) {
                            return a.o(b) < a.c(b)
                        }, down: function (b) {
                            return a.o(b) > a.c(b)
                        }, equal: function (b) {
                            return a.o(b) === a.c(b)
                        }
                    }
                }

                function h(a, b, c, d) {
                    var e = c instanceof Array ? c : [c];
                    d = d || g(b), Object.keys(d).forEach(function (b) {
                        j(a, d[b], e, b)
                    })
                }

                function i(a, b, c) {
                    h(a, b, c, g(b))
                }

                function j(a, b, c, d) {
                    a.selectAll("path." + c.join(".") + "." + d).data(function (a) {
                        return [a.filter(b)]
                    }).enter().append("path").attr("class", c.join(" ") + " " + d)
                }

                function k(a) {
                    return void 0 !== a.band ? Math.max(a.band(), 1) : 3
                }

                return {
                    dataMapper: {
                        unity: function (a) {
                            return a
                        }, array: function (a) {
                            return [a]
                        }
                    }, dataSelection: c, dataEntry: d, groupSelect: function (a, b, e) {
                        var f = c(a, b, e), g = d(f);
                        return {selection: f, entry: g}
                    }, appendPathsGroupBy: h, appendPathsUpDownEqual: i, horizontalPathLine: function (a, b, c, d) {
                        return function (e) {
                            if (!e.length)return null;
                            var f = e[0], g = e[e.length - 1];
                            return ["M", b(a(f)), d(c(f)), "L", b(a(g)), d(c(g))].join(" ")
                        }
                    }, pathLine: e, pathArea: f, barWidth: k, lineWidth: function (a, b, c) {
                        return b = b || 1, c = c || 1, function () {
                            return Math.min(b, k(a) / c)
                        }
                    }, joinPath: function (a) {
                        return function (b) {
                            return b.map(a()).join(" ")
                        }
                    }, interaction: {
                        mousedispatch: function (a) {
                            return function (c) {
                                return c.on("mouseenter", function (c) {
                                    b(this.parentNode).classed("mouseover", !0), a.mouseenter(c)
                                }).on("mouseleave", function (c) {
                                    var d = b(this.parentNode);
                                    d.classed("dragging") || (d.classed("mouseover", !1), a.mouseout(c))
                                }).on("mousemove", function (b) {
                                    a.mousemove(b)
                                })
                            }
                        }, dragStartEndDispatch: function (a, c) {
                            return a.on("dragstart", function (a) {
                                b(this.parentNode.parentNode).classed("dragging", !0), c.dragstart(a)
                            }).on("dragend", function (a) {
                                b(this.parentNode.parentNode).classed("dragging", !1), c.dragend(a)
                            })
                        }
                    }, annotation: {
                        append: function (a, c, d, e, f) {
                            var g = arguments.length, h = a.append("g").attr("class", "axisannotation " + d).selectAll("g").data(function (a) {
                                var b = g > 3 ? f(e(a)) : null;
                                return c.map(function (a) {
                                    var c = g > 3 ? a.axis().scale().invert(b) : null;
                                    return [{value: c}]
                                })
                            });
                            h.enter().append("g").attr("class", function (a, b) {
                                return b
                            }).each(function (a, d) {
                                this.__annotation__ = d, c[d](b(this))
                            })
                        }, update: function (a, b) {
                            return function (c) {
                                var d = a[this.__annotation__];
                                c[0].value = d.axis().scale().invert(b)
                            }
                        }, refresh: function (a) {
                            return function () {
                                a[this.__annotation__].refresh(b(this))
                            }
                        }
                    }
                }
            }
        }, {}], 46: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b, c, d) {
                return function (e, f) {
                    var g = {};
                    return g.xScale = function (a) {
                        return f.xScale = c(), e.xScale = function (b) {
                            return arguments.length ? (f.xScale = b, a && a(), e) : f.xScale
                        }, g
                    }, g.yScale = function (b) {
                        return f.yScale = a(), e.yScale = function (a) {
                            return arguments.length ? (f.yScale = a, b && b(), e) : f.yScale
                        }, g
                    }, g.accessor = function (a, b) {
                        return f.accessor = a, e.accessor = function (a) {
                            return arguments.length ? (f.accessor = a, b && b(), e) : f.accessor
                        }, g
                    }, g.width = function (a) {
                        return f.width = d, e.width = function (c) {
                            return arguments.length ? (f.width = b(c), a && a(), e) : f.width
                        }, g
                    }, g.on = function (a, b) {
                        return e.on = function (c, d) {
                            return a.on(c, d), b && b(), e
                        }, g
                    }, g.plot = function (a, b) {
                        return g.xScale(b).yScale(b).accessor(a, b)
                    }, g
                }
            }
        }, {}], 47: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f) {
                a.selectAll("path.overbought").attr("d", e.horizontalPathLine(b.d, c, b.ob, d)), a.selectAll("path.middle").attr("d", e.horizontalPathLine(b.d, c, b.m, d)), a.selectAll("path.oversold").attr("d", e.horizontalPathLine(b.d, c, b.os, d)), a.selectAll("path.rsi").attr("d", f)
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var c = b.groupSelect(a, b.dataMapper.array, g.accessor.d);
                        c.entry.append("path").attr("class", "overbought"), c.entry.append("path").attr("class", "middle"), c.entry.append("path").attr("class", "oversold"), c.entry.append("path").attr("class", "rsi"), e.refresh(a)
                    }

                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.r, g.yScale)
                    }

                    var g = {}, h = b.pathLine();
                    return e.refresh = function (a) {
                        d(a, g.accessor, g.xScale, g.yScale, b, h)
                    }, c(e, g).plot(a(), f), f(), e
                }
            }
        }, {}], 48: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f, g) {
                a.selectAll("path.overbought").attr("d", e.horizontalPathLine(b.d, c, b.ob, d)), a.selectAll("path.oversold").attr("d", e.horizontalPathLine(b.d, c, b.os, d)), a.selectAll("path.stochastic.up").attr("d", f), a.selectAll("path.stochastic.down").attr("d", g)
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var c = b.groupSelect(a, b.dataMapper.array, g.accessor.d);
                        c.entry.append("path").attr("class", "overbought"), c.entry.append("path").attr("class", "oversold"), c.entry.append("path").attr("class", "stochastic up"), c.entry.append("path").attr("class", "stochastic down"), e.refresh(a)
                    }

                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.k, g.yScale), i.init(g.accessor.d, g.xScale, g.accessor.sd, g.yScale)
                    }

                    var g = {}, h = b.pathLine(), i = b.pathLine();
                    return e.refresh = function (a) {
                        d(a, g.accessor, g.xScale, g.yScale, b, h, i)
                    }, c(e, g).plot(a(), f), f(), e
                }
            }
        }, {}], 49: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, f, g, h) {
                a.selectAll(".supstance path").attr("d", e(c, d, f)), a.selectAll(".interaction path").attr("d", e(c, d, f)), g.each(b.annotation.refresh(h))
            }

            function e(a, b, c) {
                return function (d) {
                    var e = [], f = b.range();
                    return e.push("M", f[0], c(a(d))), e.push("L", f[f.length - 1], c(a(d))), e.join(" ")
                }
            }

            b.exports = function (a, b, c, e, f, g, h) {
                function i() {
                    function a(d) {
                        var e = g.groupSelect(d, g.dataMapper.unity);
                        e.entry.append("g").attr("class", "supstance").append("path"), g.annotation.append(e.entry, i, "y", b.accessor, b.yScale);
                        var f = e.entry.append("g").attr("class", "interaction").style({
                            opacity: 0,
                            fill: "none"
                        }).call(g.interaction.mousedispatch(c));
                        f.append("path").style("stroke-width", 16), a.refresh(d)
                    }

                    var b = {}, c = e("mouseenter", "mouseout", "mousemove", "drag", "dragstart", "dragend"), i = [];
                    return a.refresh = function (a) {
                        d(a, g, b.accessor, b.xScale, b.yScale, a.selectAll(".axisannotation.y > g"), i)
                    }, a.drag = function (a) {
                        a.selectAll(".interaction path").call(j(c, b.accessor, b.xScale, b.yScale, i))
                    }, a.annotation = function (b) {
                        return arguments.length ? (i = b instanceof Array ? b : [b], a) : i
                    }, h(a, b).plot(f()).on(c), a
                }

                function j(e, f, h, i, j) {
                    var k = a().origin(function (a) {
                        return {x: 0, y: i(f(a))}
                    }).on("drag", function (a) {
                        var k = i.invert(b().y), l = c(this.parentNode.parentNode), m = l.selectAll(".axisannotation.y > g");
                        f.v(a, k), m.each(g.annotation.update(j, b().y)), d(l, g, f, h, i, m, j), e.drag(a)
                    });
                    return g.interaction.dragStartEndDispatch(k, e)
                }

                return i
            }
        }, {}], 50: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b, c, d, e) {
                return function () {
                    function a(b) {
                        var c = d.groupSelect(b, d.dataMapper.array, i.accessor.d);
                        c.entry.append("path").attr("class", "tick"), a.refresh(b)
                    }

                    function b() {
                        g = d.joinPath(f), h = d.lineWidth(i.xScale, 1, 2)
                    }

                    function f() {
                        var a = i.accessor, b = i.xScale, c = i.yScale, e = i.width(b);
                        d.r;
                        return function (d) {
                            var f = c(a.h(d)), g = c(a.l(d)), h = b(a.d(d)), i = h - e / 2;
                            return ["M", i, f, "l", e, 0, "M", h, f, "L", h, g, "M", i, g, "l", e, 0].join(" ")
                        }
                    }

                    var g, h, i = {};
                    return a.refresh = function (a) {
                        a.selectAll("path.tick").attr("d", g).style("stroke-width", h)
                    }, e(a, i).plot(c(), b).width(b), a
                }
            }
        }, {}], 51: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b, c, d, e, f, g, h) {
                return function () {
                    function i(b) {
                        var d = f.groupSelect(b, f.dataMapper.array), e = l(b.datum());
                        f.appendPathsGroupBy(d.entry, n.accessor, "tradearrow", e), d.entry.append("path").attr("class", "highlight").style({"pointer-events": "none"}), d.selection.selectAll("path.tradearrow").on("mouseenter", function (b) {
                            var d = k(b, c(this)[0]);
                            a(this.parentNode).select("path.highlight").datum(d.d).attr("d", q).classed(e), o.mouseenter(d.d, d.i)
                        }).on("mouseout", function (b) {
                            a(this.parentNode).selectAll("path.highlight").datum([]).attr("d", null).attr("class", "highlight");
                            var d = k(b, c(this)[0]);
                            o.mouseout(d.d, d.i)
                        }), i.refresh(b)
                    }

                    function j() {
                        return q.x(function (a) {
                            return n.xScale(n.accessor.d(a))
                        }).y(p), m = f.joinPath(function () {
                            return q
                        }), i
                    }

                    function k(a, b) {
                        return a.map(function (a, b) {
                            return {d: a, i: b, x: n.xScale(n.accessor.d(a))}
                        }).reduce(function (a, c) {
                            return Math.abs(a.x - b) < Math.abs(c.x - b) ? a : c
                        })
                    }

                    function l(a) {
                        return a.map(function (a) {
                            return n.accessor.t(a)
                        }).reduce(function (a, b) {
                            return void 0 === a[b] && (a[b] = function (a) {
                                return b === n.accessor.t(a)
                            }), a
                        }, {})
                    }

                    var m, n = {}, o = d("mouseenter", "mouseout"), p = function (a) {
                        return n.yScale(n.accessor.p(a))
                    }, q = h().orient(function (a) {
                        return "buy" === n.accessor.t(a) ? "up" : "down"
                    });
                    return i.refresh = function (a) {
                        a.selectAll("path.tradearrow").attr("d", m)
                    }, i.orient = function (a) {
                        return arguments.length ? (q.orient(a), j()) : q.orient()
                    }, i.y = function (a) {
                        return arguments.length ? (p = b(a), j()) : p
                    }, i.arrow = function () {
                        return q
                    }, g(i, n).plot(e(), j).on(o), j(), i
                }
            }
        }, {}], 52: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                a.selectAll(".trendline path.body").attr("d", e(b, c, d)), a.selectAll(".trendline circle.start").attr(f(b.sd, c, b.sv, d)), a.selectAll(".trendline circle.end").attr(f(b.ed, c, b.ev, d)), a.selectAll(".interaction path.body").attr("d", e(b, c, d)), a.selectAll(".interaction circle.start").attr(f(b.sd, c, b.sv, d)), a.selectAll(".interaction circle.end").attr(f(b.ed, c, b.ev, d))
            }

            function e(a, b, c) {
                return function (d) {
                    var e = [];
                    return e.push("M", b(a.sd(d)), c(a.sv(d))), e.push("L", b(a.ed(d)), c(a.ev(d))), e.join(" ")
                }
            }

            function f(a, b, c, d) {
                return {
                    cx: function (c) {
                        return b(a(c))
                    }, cy: function (a) {
                        return d(c(a))
                    }
                }
            }

            b.exports = function (a, b, c, e, f, g, h) {
                function i() {
                    function a(b) {
                        var d = g.groupSelect(b, g.dataMapper.unity), e = d.entry.append("g").attr("class", "trendline");
                        e.append("path").attr("class", "body"), e.append("circle").attr({
                            "class": "start",
                            r: 1
                        }), e.append("circle").attr({"class": "end", r: 1});
                        var f = d.entry.append("g").attr("class", "interaction").style({
                            opacity: 0,
                            fill: "none"
                        }).call(g.interaction.mousedispatch(c));
                        f.append("path").attr("class", "body").style("stroke-width", 16), f.append("circle").attr({
                            "class": "start",
                            r: 8
                        }), f.append("circle").attr({"class": "end", r: 8}), a.refresh(b)
                    }

                    var b = {}, c = e("mouseenter", "mouseout", "mousemove", "drag", "dragstart", "dragend");
                    return a.refresh = function (a) {
                        d(a, b.accessor, b.xScale, b.yScale)
                    }, a.drag = function (a) {
                        a.selectAll(".interaction circle.start").call(j(c, b.accessor, b.accessor.sd, b.xScale, b.accessor.sv, b.yScale)), a.selectAll(".interaction circle.end").call(j(c, b.accessor, b.accessor.ed, b.xScale, b.accessor.ev, b.yScale)), a.selectAll(".interaction path.body").call(k(c, b.accessor, b.xScale, b.yScale))
                    }, h(a, b).plot(f()).on(c), a
                }

                function j(e, f, h, i, j, k) {
                    var m = a();
                    return m.origin(function (a) {
                        return {x: i(h(a)), y: k(j(a))}
                    }).on("drag", function (a) {
                        l(h, i, b().x, j, k, b().y, a), d(c(this.parentNode.parentNode), f, i, k), e.drag(a)
                    }), g.interaction.dragStartEndDispatch(m, e)
                }

                function k(e, f, h, i) {
                    var j = {}, k = a();
                    return k.origin(function (a) {
                        return j.start = {date: h(f.sd(a)), value: i(f.sv(a))}, j.end = {
                            date: h(f.ed(a)),
                            value: i(f.ev(a))
                        }, {x: 0, y: 0}
                    }).on("drag", function (a) {
                        l(f.sd, h, b().x + j.start.date, f.sv, i, b().y + j.start.value, a), l(f.ed, h, b().x + j.end.date, f.ev, i, b().y + j.end.value, a), d(c(this.parentNode.parentNode), f, h, i), e.drag(a)
                    }), g.interaction.dragStartEndDispatch(k, e)
                }

                function l(a, b, c, d, e, f, g) {
                    var h = b.invert(c);
                    h && a(g, h), d(g, e.invert(f))
                }

                return i
            }
        }, {}], 53: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b, c) {
                return function () {
                    function d(a) {
                        var c = b.groupSelect(a, b.dataMapper.array, h.accessor.d);
                        h.accessor.o && h.accessor.c ? b.appendPathsUpDownEqual(c.selection, h.accessor, "volume") : c.entry.append("path").attr("class", "volume"), d.refresh(a)
                        //b.appendPathsUpDownEqual(c.selection, h.accessor, "volume"), d.refresh(a)
                    }

                    function e() {
                        g = b.joinPath(f)
                    }

                    function f() {
                        var a = h.accessor, b = h.xScale, c = h.yScale, d = h.width(b);
                        return function (e) {
                            var f = a.v(e);
                            if (isNaN(f))return null;
                            var r = [], g = c(0), h = c(f) - g, i = b(a.d(e)) - d / 2;
                            return r.push("M", i, g, "l", 0, h, "l", d, 0, "l", 0, -h), r.join(" ");
                        }
                    }

                    var g, h = {};
                    return d.refresh = function (a) {
                        a.selectAll("path.volume").attr("d", g)
                    }, c(d, h).plot(a(), e).width(e), d
                }
            }
        }, {}], 54: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d, e, f) {
                a.selectAll("path.williams.up").attr("d", f)
            }

            b.exports = function (a, b, c) {
                return function () {
                    function e(a) {
                        var c = b.groupSelect(a, b.dataMapper.array, g.accessor.d);
                        c.entry.append("path").attr("class", "williams up"), e.refresh(a)
                    }

                    function f() {
                        h.init(g.accessor.d, g.xScale, g.accessor.w, g.yScale)
                    }

                    var g = {}, h = b.pathLine();
                    return e.refresh = function (a) {
                        d(a, g.accessor, g.xScale, g.yScale, b, h)
                    }, c(e, g).plot(a(), f), f(), e
                }
            }
        }, {}], 55: [function (a, b, c) {
            "use strict";
            b.exports = function (a, b, c, d, e, f) {
                function g(b, m, q, r, s, t, u, v) {
                    function w(a, b) {
                        var d = B[+a];
                        return b = b || 0, void 0 === d && (d = r[0] > a ? -1 : c(r, a)), q(d + b)
                    }

                    function x() {
                        return D = h(q, r, s), w
                    }

                    function y() {
                        B = j(r)
                    }

                    function z() {
                        return y(), q.domain([0, r.length - 1]), x(), q.domain(q.range().map(e(t, D)).map(q.invert)), u = q.domain(), x()
                    }

                    function A(a, d, e) {
                        if (1 == a.length)return m;
                        var f = a[a.length - 1] - a[0], g = 1 > f / n, h = g ? b.intraday : b.daily, j = g ? p : o, k = Math.min(Math.round(i(a, d) * e), e), l = f / k, q = c(j, l);
                        return q == h.length ? h[q - 1] : q ? h[l / j[q - 1] < j[q] / l ? q - 1 : q] : h[q]
                    }

                    var B, C = {tickFormat: b.daily[b.daily.length - 1][2]}, D = 3;
                    return q = q || a(), r = r || [new Date(0), new Date(1)], s = void 0 === s ? .2 : s, t = void 0 === t ? .65 : t, u = u || q.domain(), v = v || !1, w.invert = function (a) {
                        var b = r[w.invertToIndex(a)];
                        return b ? b : null
                    }, w.invertToIndex = function (a) {
                        return Math.round(q.invert(a))
                    }, w.domain = function (a) {
                        if (!arguments.length) {
                            var b = q.domain();
                            return b[0] < 0 && b[b.length - 1] < 0 ? [] : (b = [Math.max(Math.ceil(b[0]), 0), Math.min(Math.floor(b[b.length - 1]), r.length - 1)], r.slice(b[0], b[b.length - 1] + 1))
                        }
                        return r = a, z()
                    }, w.copy = function () {
                        return g(b, m, q.copy(), r, s, t, u, v)
                    }, w.band = function () {
                        return D
                    }, w.outerPadding = function (a) {
                        return arguments.length ? (t = a, z()) : t
                    }, w.padding = function (a) {
                        return arguments.length ? (s = a, z()) : s
                    }, w.zoomable = function () {
                        return f(q, x, u)
                    }, w.ticks = function (a, b) {
                        var c = w.domain(), d = q.domain();
                        if (!c.length)return [];
                        var e = void 0 === a ? A(c, d, 10) : "number" == typeof a ? A(c, d, a) : null;
                        C.tickFormat = e ? e[2] : A(c, d, 10)[2], e && (a = e[0], b = e[1]);
                        var f = a.range(c[0], +c[c.length - 1] + 1, b);
                        return f.map(k(c, v)).reduce(l, [])
                    }, w.closestTicks = function (a) {
                        return arguments.length ? (v = a, w) : v
                    }, w.tickFormat = function () {
                        return function (a) {
                            return C.tickFormat(a)
                        }
                    }, d(w, q, x, "range"), y(), x()
                }

                function h(a, b, c) {
                    return Math.abs(a(b.length - 1) - a(0)) / Math.max(1, b.length - 1) * (1 - c)
                }

                function i(a, b) {
                    return a.length / (b[b.length - 1] - b[0])
                }

                function j(a) {
                    var b = {};
                    return a.forEach(function (a, c) {
                        b[+a] = c
                    }), b
                }

                function k(a, b) {
                    var d = j(a);
                    return function (e) {
                        var f = d[+e];
                        if (void 0 !== f)return a[f];
                        var g = c(a, e);
                        return b && g > 0 && +e - +a[g - 1] < +a[g] - +e && g--, a[g]
                    }
                }

                function l(a, b) {
                    return (0 === a.length || a[a.length - 1] !== b) && a.push(b), a
                }

                function m() {
                    return g({daily: y, intraday: z}, t)
                }

                var n = 864e5, o = [n, 6048e5, 2592e6, 7776e6, 31536e6], p = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5], q = b.format("%b %e"), r = b.format.multi([["%b %Y", function (a) {
                    return a.getMonth()
                }], ["%Y", function () {
                    return !0
                }]]), s = b.format.multi([[":%S", function (a) {
                    return a.getSeconds()
                }], ["%I:%M", function (a) {
                    return a.getMinutes()
                }], ["%I %p", function () {
                    return !0
                }]]), t = [b.second, 1, b.format.multi([[":%S", function (a) {
                    return a.getSeconds()
                }], ["%I:%M", function (a) {
                    return a.getMinutes()
                }], ["%I %p", function (a) {
                    return a.getHours()
                }], ["%b %e", function () {
                    return !0
                }]])], u = b.format.utc("%b %e"), v = b.format.utc.multi([["%b %Y", function (a) {
                    return a.getUTCMonth()
                }], ["%Y", function () {
                    return !0
                }]]), w = b.format.utc.multi([[":%S", function (a) {
                    return a.getUTCSeconds()
                }], ["%I:%M", function (a) {
                    return a.getUTCMinutes()
                }], ["%I %p", function () {
                    return !0
                }]]), x = [b.second, 1, b.format.utc.multi([[":%S", function (a) {
                    return a.getUTCSeconds()
                }], ["%I:%M", function (a) {
                    return a.getUTCMinutes()
                }], ["%I %p", function (a) {
                    return a.getUTCHours()
                }], ["%b %e", function () {
                    return !0
                }]])], y = [[b.day, 1, q], [b.monday, 1, q], [b.month, 1, r], [b.month, 3, r], [b.year, 1, r]], z = [[b.second, 1, s], [b.second, 5, s], [b.second, 15, s], [b.second, 30, s], [b.minute, 1, s], [b.minute, 5, s], [b.minute, 15, s], [b.minute, 30, s], [b.hour, 1, s], [b.hour, 3, s], [b.hour, 6, s], [b.hour, 12, s], [b.day, 1, q]], A = [[b.day.utc, 1, u], [b.monday.utc, 1, u], [b.month.utc, 1, v], [b.month.utc, 3, v], [b.year.utc, 1, v]], B = [[b.second.utc, 1, w], [b.second.utc, 5, w], [b.second.utc, 15, w], [b.second.utc, 30, w], [b.minute.utc, 1, w], [b.minute.utc, 5, w], [b.minute.utc, 15, w], [b.minute.utc, 30, w], [b.hour.utc, 1, w], [b.hour.utc, 3, w], [b.hour.utc, 6, w], [b.hour.utc, 12, w], [b.day.utc, 1, u]];
                return m.utc = function () {
                    return g({daily: A, intraday: B}, x)
                }, m
            }
        }, {}], 56: [function (a, b, c) {
            "use strict";
            function d(a, b, c, d) {
                return b.length > 0 ? a.extent(b, c).map(f(d)) : []
            }

            function e(a, b, c, e) {
                return a.scale.linear().domain(d(a, b, c, e)).range([1, 0])
            }

            function f(a, b) {
                return a = a || 0, function (c, d, e) {
                    if (e.length > 2)throw"array.length > 2 unsupported. array.length = " + e.length;
                    return b = b || e[e.length - 1] - e[0], c + (2 * d - 1) * b * a
                }
            }

            function g(a, b) {
                return a.map(b).reduce(function (a, b) {
                    return a.concat(b)
                }).filter(function (a) {
                    return null !== a
                })
            }

            b.exports = function (b) {
                var c = a("./zoomable")(), d = a("../util")(), h = a("../accessor")(), i = a("./financetime")(b.scale.linear, b.time, b.bisect, d.rebindCallback, f, c);
                return {
                    financetime: i, analysis: {
                        supstance: function (a, c) {
                            return b.scale.linear()
                        }, trendline: function (a, c) {
                            return b.scale.linear()
                        }
                    }, plot: {
                        time: function (a, b) {
                            return b = b || h.value(), i().domain(a.map(b.d))
                        }, atr: function (a, c) {
                            return c = c || h.value(), e(b, a, c, .04)
                        }, ichimoku: function (a, c) {
                            c = c || h.ichimoku();
                            var d = g(a, function (b, d) {
                                var e = a[d + c.pks(b)], f = a[d - c.pks(b)];
                                return [c.ts(b), c.ks(b), f ? c.sa(f) : null, f ? c.sb(f) : null, e ? c.c(e) : null]
                            });
                            return b.scale.linear().domain(b.extent(d).map(f(.02))).range([1, 0])
                        }, percent: function (a, b) {
                            var c = a.domain();
                            return b = b || c[0], a.copy().domain([c[0], c[c.length - 1]].map(function (a) {
                                return (a - b) / b
                            }))
                        }, ohlc: function (a, c) {
                            return c = c || h.ohlc(), b.scale.linear().domain([b.min(a.map(c.low())), b.max(a.map(c.high()))].map(f(.02))).range([1, 0])
                        }, volume: function (a, c) {
                            return c = c || h.ohlc().v, b.scale.linear().domain([0, 1.15 * b.max(a.map(c))]).range([1, 0])
                        }, atrtrailingstop: function (a, c) {
                            c = c || h.atrtrailingstop();
                            var d = g(a, function (a) {
                                return [c.up(a), c.dn(a)]
                            });
                            return b.scale.linear().domain(b.extent(d).map(f(.04))).range([1, 0])
                        }, rsi: function () {
                            return b.scale.linear().domain([0, 100]).range([1, 0])
                        }, momentum: function (a, c) {
                            return c = c || h.value(), e(b, a, c, .04)
                        }, moneyflow: function (a, c) {
                            return c = c || h.value(), e(b, a, c, .04)
                        }, macd: function (a, c) {
                            return c = c || h.macd(), e(b, a, c, .04)
                        }, movingaverage: function (a, c) {
                            return c = c || h.value(), e(b, a, c)
                        }, adx: function () {
                            return b.scale.linear().domain([0, 100]).range([1, 0])
                        }, aroon: function () {
                            return b.scale.linear().domain([-100, 100]).range([1, 0])
                        }, stochastic: function () {
                            return b.scale.linear().domain([0, 100]).range([1, 0])
                        }, williams: function () {
                            return b.scale.linear().domain([0, 100]).range([1, 0])
                        }, bollinger: function (a, c) {
                            return c = c || h.bollinger(), b.scale.linear().domain([b.min(a.map(function (a) {
                                return c.lower(a)
                            })), b.max(a.map(function (a) {
                                return c.upper(a)
                            }))].map(f(.02))).range([1, 0])
                        }
                    }, position: {}
                }
            }
        }, {"../accessor": 7, "../util": 61, "./financetime": 55, "./zoomable": 57}], 57: [function (a, b, c) {
            "use strict";
            b.exports = function () {
                function a(b, c, d) {
                    function e(a) {
                        return b.apply(b, arguments)
                    }

                    var f = !0;
                    return e.invert = b.invert, e.domain = function (a) {
                        return arguments.length ? (f ? b.domain([Math.max(d[0], a[0]), Math.min(d[1], a[1])]) : b.domain(a), c && c(), e) : b.domain()
                    }, e.range = function (a) {
                        if (!arguments.length)return b.range();
                        throw"zoomable is a read only range. Use this scale for zooming only"
                    }, e.copy = function () {
                        return a(b.copy(), c, d)
                    }, e.clamp = function (a) {
                        return arguments.length ? (f = a, e) : f
                    }, e
                }

                return a
            }
        }, {}], 58: [function (a, b, c) {
            "use strict";
            b.exports = function (a) {
                return function () {
                    function b(a, b) {
                        var i = [], j = c(a, b), k = d(a, b), l = e(a, b), m = f(a, b), n = g(a, b), o = h(a, b), p = "left" === n || "up" === n ? 1 : -1, q = l / 3, r = l / 2, s = o ? m / 2 : m;
                        switch (i.push("M", j, k), n) {
                            case"up":
                            case"down":
                                i.push("l", -r, p * s, "l", q, 0), o && i.push("l", 0, p * s), i.push("l", q, 0), o && i.push("l", 0, -p * s), i.push("l", q, 0);
                                break;
                            case"left":
                            case"right":
                                i.push("l", p * s, -r, "l", 0, q), o && i.push("l", p * s, 0), i.push("l", 0, q), o && i.push("l", -p * s, 0), i.push("l", 0, q);
                                break;
                            default:
                                throw"Unsupported arrow.orient() = " + g
                        }
                        return i.push("z"), i.join(" ")
                    }

                    var c = a(0), d = a(0), e = a(12), f = a(15), g = a("up"), h = a(!0);
                    return b.x = function (d) {
                        return arguments.length ? (c = a(d), b) : c
                    }, b.y = function (c) {
                        return arguments.length ? (d = a(c), b) : d
                    }, b.height = function (c) {
                        return arguments.length ? (f = a(c), b) : f
                    }, b.width = function (c) {
                        return arguments.length ? (e = a(c), b) : e
                    }, b.orient = function (c) {
                        return arguments.length ? (g = a(c), b) : g
                    }, b.tail = function (c) {
                        return arguments.length ? (h = a(c), b) : h
                    }, b
                }
            }
        }, {}], 59: [function (a, b, c) {
            "use strict";
            b.exports = function (b) {
                return {arrow: a("./arrow")(b.functor)}
            }
        }, {"./arrow": 58}], 60: [function (a, b, c) {
            "use strict";
            var d;
            if ("undefined" != typeof window)d = window.d3; else {
                if ("object" != typeof b)throw"Unsupported runtime environment: Could not find d3. Ensure defined globally on window, or available as dependency.";
                d = a("d3")
            }
            b.exports = function (b) {
                return {
                    version: a("../build/version"),
                    accessor: a("./accessor")(),
                    indicator: a("./indicator")(),
                    plot: a("./plot")(b),
                    scale: a("./scale")(b),
                    svg: a("./svg")(b)
                }
            }(d)
        }, {
            "../build/version": 1,
            "./accessor": 7,
            "./indicator": 25,
            "./plot": 41,
            "./scale": 56,
            "./svg": 59,
            d3: "d3"
        }], 61: [function (a, b, c) {
            "use strict";
            function d(a, b, c) {
                for (var d, f = 2, g = arguments.length; ++f < g;)a[d = arguments[f]] = e(a, b, b[d], c);
                return a
            }

            function e(a, b, c, d) {
                return function () {
                    var e = c.apply(b, arguments);
                    return d && e === b && d(), e === b ? a : e
                }
            }

            b.exports = function () {
                return {
                    rebindCallback: d, rebind: function (a, b) {
                        var c = Array.prototype.slice.call(arguments, 0);
                        return c.splice(2, 0, void 0), d.apply(this, c)
                    }
                }
            }
        }, {}]
    }, {}, [60])(60)
});
//# sourceMappingURL=techan.min.js.map