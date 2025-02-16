import {
    _ as D,
    G as le,
    g as M,
    b0 as te,
    aY as ce,
    dA as be,
    o as ee,
    u as ye,
    S as re,
    a as we,
    dB as ke,
    dC as $e,
    dD as Se,
    dE as Ce,
    ba as Ae,
    bq as Ie,
    bb as De,
    bc as Le,
    K as ue,
    i as ae,
    h as Te,
    dF as oe,
    dG as Ee,
    r as de,
    j as Be,
} from "./page-activity-500eb065.js";
import {
    _ as V,
    P as ve,
    Q,
    a2 as I,
    o as _,
    j as k,
    a4 as Z,
    a5 as Pe,
    l as a,
    ae as S,
    H as r,
    a1 as y,
    a6 as h,
    a0 as d,
    a9 as _e,
    A as H,
    N as me,
    ap as pe,
    r as f,
    a3 as fe,
    aa as A,
    af as Ne,
    ag as xe,
    q as Ve,
    Z as Re,
    J as x,
    G as J,
    a7 as P,
    a8 as W,
    K as Fe,
    aD as Ge,
    aC as ne,
    b2 as Oe,
    X as je,
    ac as K,
    $ as He,
    B as Ue,
    b3 as Me,
    ak as U,
    k as We,
    a$ as Ke,
    b4 as ze,
    b5 as Ye,
    b6 as qe,
    b7 as Xe,
    b8 as Je,
    b9 as Qe,
    ba as Ze,
    bb as et,
    bc as tt,
    bd as st,
    be as at,
    bf as ot,
    bg as nt,
    bh as it,
    bi as lt,
    bj as ct,
    bk as rt,
    bl as ut,
    bm as dt,
    bn as vt,
    bo as _t,
    bp as mt,
    bq as pt,
    br as ft,
    bs as gt,
    bt as ht,
    bu as bt,
    bv as yt,
    bw as wt,
    bx as kt,
    by as $t,
    bz as St,
    bA as Ct,
    bB as At,
    bC as It,
    bD as Dt,
    bE as Lt,
    bF as Tt,
    bG as Et,
    bH as Bt,
    bI as Pt,
} from "./modules-8e4eb682.js";
import { u as Nt } from "./page-login-b89fd3ed.js";
import "./native/index-9a070501.js";
import "./en-15fa07f8.js";
import "./rus-97760f90.js";
import "./vi-2d05655c.js";
import "./id-3117b06e.js";
import "./hd-fd8b192b.js";
import "./tha-8487385e.js";
import "./md-e0522d3b.js";
import "./bra-961b9a7d.js";
import "./my-89562fe6.js";
import "./bdt-d6487d0e.js";
import "./zh-184b2083.js";
import "./pak-3bdeb9cb.js";
import "./ar-7f8a77f5.js";
import "./page-home-74725bb3.js";
window.getBuildInfo = function () {
    return { buildTime: "8/31/2024, 4:10:31 AM", branch: "origin/masterBranch/main-v2.24 commitId:3a1f1dd2b5eabad832436591ce088284d66e4d51" };
};
(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver((o) => {
        for (const i of o) if (i.type === "childList") for (const u of i.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && n(u);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? (i.credentials = "include") : o.crossOrigin === "anonymous" ? (i.credentials = "omit") : (i.credentials = "same-origin"),
            i
        );
    }
    function n(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = s(o);
        fetch(o.href, i);
    }
})();
const xt = { class: "tabbar__container" },
    Vt = ["onClick"],
    Rt = { key: 1, class: "promotionBg" },
    Ft = { key: 2 },
    Gt = V({
        __name: "index2",
        setup(t) {
            const e = ve(),
                s = Q();
            async function n(i) {
                await e.push({ name: i });
            }
            const o = [{ name: "promotion" }, { name: "activity" }, { name: "home" }, { name: "wallet" }, { name: "main" }];
            return (i, u) => {
                const c = I("svg-icon");
                return (
                    _(),
                    k("div", xt, [
                        (_(),
                        k(
                            Z,
                            null,
                            Pe(o, (l, v) =>
                                a(
                                    "div",
                                    { class: _e(["tabbar__container-item", { active: l.name === r(s).name }]), key: l + "" + v, onClick: (m) => n(l.name) },
                                    [
                                        v !== 2 ? (_(), S(c, { key: 0, name: l.name === r(s).name ? `p3_${l.name}_a` : `p3_${l.name}` }, null, 8, ["name"])) : y("v-if", !0),
                                        v == 2 ? (_(), k("div", Rt, [h(c, { name: l.name === r(s).name ? `p3_${l.name}_a` : `p3_${l.name}` }, null, 8, ["name"])])) : (_(), k("span", Ft, d(i.$t(l.name)), 1)),
                                    ],
                                    10,
                                    Vt
                                )
                            ),
                            64
                        )),
                    ])
                );
            };
        },
    });
const Ot = D(Gt, [
    ["__scopeId", "data-v-fb80cf49"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/TabBar/index2.vue"],
]);
function jt() {
    const t = le(),
        e = () => {
            document.visibilityState === "visible" ? t.setvisibility() : t.setvisibility(0);
        };
    H(() => {
        document.addEventListener("visibilitychange", e);
    }),
        me(() => {
            document.removeEventListener("visibilitychange", e);
        });
}
const Ht = V({
    __name: "Customer",
    setup(t) {
        pe((p) => ({ "f6a705e1-currentFontFamily": R.value }));
        const e = f(!1),
            s = f({ x: 0, y: 0 }),
            n = f(0),
            o = f(0),
            i = f(0),
            u = f(0),
            c = f(0),
            l = f(0),
            v = f();
        let m, L, T, E;
        const { getSelfCustomerServiceLink: G } = Nt({ ServerType: 2 });
        function O() {
            j(m, L, T, E) || G();
        }
        H(() => {
            v.value = document.getElementById("customerId");
        });
        function w(p) {
            e.value = !0;
            var g;
            p.touches ? (g = p.touches[0]) : (g = p), (s.value.x = g.clientX), (s.value.y = g.clientY), (n.value = v.value.offsetLeft), (o.value = v.value.offsetTop), (m = p.clientX), (L = p.clientY);
        }
        function C(p) {
            if (e.value) {
                var g,
                    B = document.getElementById("customerId"),
                    F = B.clientWidth,
                    z = B.clientHeight,
                    Y = document.documentElement.clientHeight,
                    b = document.documentElement.clientWidth;
                p.touches ? (g = p.touches[0]) : (g = p),
                    (i.value = g.clientX - s.value.x),
                    (u.value = g.clientY - s.value.y),
                    (c.value = n.value + i.value),
                    (l.value = o.value + u.value),
                    c.value <= 0 && (c.value = 0),
                    l.value <= 0 && (l.value = 0),
                    c.value >= b - F && (c.value = b - F),
                    l.value >= Y - z && (l.value = Y - z),
                    (v.value.style.left = c.value + "px"),
                    (v.value.style.top = l.value + "px"),
                    document.addEventListener(
                        "touchmove",
                        function () {
                            p.preventDefault();
                        },
                        !1
                    );
            }
            p.stopPropagation(), p.preventDefault();
        }
        function $(p) {
            (e.value = !1), (T = p.clientX), (E = p.clientY);
        }
        function j(p, g, B, F) {
            return !(Math.sqrt((p - B) * (p - B) + (g - F) * (g - F)) <= 1);
        }
        const R = f("bahnschrift");
        return (p, g) => {
            const B = fe("lazy");
            return _(), k("div", { class: "customer", onClick: O, onMousedown: w, onTouchstart: w, onMousemove: C, onTouchmove: C, onMouseup: $, id: "customerId" }, [A(a("img", null, null, 512), [[B, r(M)("home", "icon_sevice")]])], 32);
        };
    },
});
const Ut = D(Ht, [["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/Customer.vue"]]),
    Mt = "/assets/png/logo-57dd9283.png";
const Wt = {},
    ge = (t) => (Ne("data-v-5eb72be7"), (t = t()), xe(), t),
    Kt = { class: "start-page" },
    zt = ge(() => a("div", { class: "dice" }, null, -1)),
    Yt = ge(() => a("img", { class: "logo", src: Mt }, null, -1));
function qt(t, e) {
    return _(), k("div", Kt, [a("div", null, [zt, a("p", null, d(t.$t("fairAndSafe")), 1), Yt])]);
}
const Xt = D(Wt, [
        ["render", qt],
        ["__scopeId", "data-v-5eb72be7"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/entrance/ar062/StartPage.vue"],
    ]),
    Jt = { class: "header" },
    Qt = { class: "title" },
    Zt = { class: "tip" },
    es = { class: "container" },
    ts = { class: "footer" },
    ss = V({
        __name: "dialog",
        setup(t) {
            const e = ve(),
                s = Q(),
                n = f(!1),
                { closeFirstSave: o } = te(),
                { ActiveSotre: i, getFirstRechargeList: u } = ce(),
                c = Ve(new Date()).format("YYYY-MM-DD"),
                l = Re("firstSave", null),
                v = x(() => l.value == c),
                m = () => {
                    v.value ? ((l.value = ""), localStorage.removeItem("firstSave")) : (l.value = c);
                },
                L = () => {
                    (n.value = !1), o();
                },
                T = ["activity", "home", "main", "wallet", "promotion"];
            J(
                () => s.name,
                (w) => {
                    T.includes(s.name) && E();
                }
            );
            const E = () => {
                    l.value != c &&
                        u().then((w) => {
                            if (!w.length) {
                                (n.value = !1), o();
                                return;
                            }
                            const C = w.find(($) => $.isFinshed);
                            C && (i.value.isShowFirstSaveDialog = !1), C || (n.value = !0);
                        });
                },
                G = () => {
                    (n.value = !1), o(!0), e.push({ name: "FirstRecharge" });
                },
                O = () => {
                    (n.value = !1), o(!0), e.push({ name: "Recharge" });
                };
            return (
                H(() => {
                    T.includes(s.name) && E();
                }),
                (w, C) => {
                    const $ = I("svg-icon"),
                        j = I("van-dialog");
                    return (
                        _(),
                        S(
                            j,
                            { show: n.value, "onUpdate:show": C[0] || (C[0] = (R) => (n.value = R)), className: "firstSaveDialog" },
                            {
                                title: P(() => [a("div", Jt, [a("div", Qt, d(w.$t("firstDialogH")), 1), a("div", Zt, d(w.$t("firstDialogTip")), 1)])]),
                                footer: P(() => [
                                    a("div", ts, [a("div", { class: _e(["active", { a: v.value }]), onClick: m }, [h($, { name: "active" }), W(d(w.$t("noTipToday")), 1)], 2), a("div", { class: "btn", onClick: G }, d(w.$t("activity")), 1)]),
                                ]),
                                default: P(() => [a("div", es, [h(be, { list: r(i).FirstRechargeList, onGorecharge: O }, null, 8, ["list"])]), a("div", { class: "close", onClick: L })]),
                                _: 1,
                            },
                            8,
                            ["show"]
                        )
                    );
                }
            );
        },
    });
const as = D(ss, [
        ["__scopeId", "data-v-9cd12fb2"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/Activity/FirstRecharge/dialog.vue"],
    ]),
    os = { class: "dialog-window" },
    ns = { class: "dialog-wrapper" },
    is = { class: "dialog-title" },
    ls = { class: "dialog-content" },
    cs = { class: "dialog-window" },
    rs = { class: "dialog-wrapper" },
    us = { class: "dialog-title" },
    ds = { class: "dialog-tips" },
    vs = { class: "dialog-content" },
    _s = { class: "dialog-tips", style: { "margin-bottom": "0" } },
    ms = { class: "dialog-window" },
    ps = { class: "dialog-wrapper" },
    fs = { class: "dialog-tips", style: { "margin-top": "10px" } },
    gs = { class: "dialog-title", style: { "margin-top": "0" } },
    hs = { class: "dialog-tips" },
    bs = { class: "dialog-content" },
    ys = V({
        __name: "AllPageDialog",
        setup(t) {
            Q();
            const { ActiveSotre: e } = ce(),
                { store: s, closeInvite: n, showFirstSave: o, onReturnAwards: i } = te();
            return (u, c) => {
                const l = I("van-dialog"),
                    v = fe("lazy");
                return (
                    _(),
                    k(
                        Z,
                        null,
                        [
                            r(o) ? (_(), S(as, { key: 0 })) : y("v-if", !0),
                            h(
                                l,
                                { show: r(e).showReceiveDialog, "onUpdate:show": c[1] || (c[1] = (m) => (r(e).showReceiveDialog = m)), "show-confirm-button": !1, className: "noOverHidden" },
                                {
                                    default: P(() => [
                                        a("div", os, [
                                            a("div", ns, [
                                                A(a("img", null, null, 512), [[v, r(M)("public", "succeed")]]),
                                                a("div", is, d(u.$t("awardsReceived")), 1),
                                                a("div", ls, [A(a("img", null, null, 512), [[v, r(M)("activity/DailyTask", "amountIcon")]]), a("span", null, d(r(ee)(r(e).receiveAmount)), 1)]),
                                                a("div", { class: "dialog-btn", onClick: c[0] || (c[0] = (m) => (r(e).showReceiveDialog = !1)) }, d(u.$t("confirm")), 1),
                                            ]),
                                        ]),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ["show"]
                            ),
                            h(
                                l,
                                { show: r(s).invite, "onUpdate:show": c[3] || (c[3] = (m) => (r(s).invite = m)), "show-confirm-button": !1, className: "noOverHidden" },
                                {
                                    default: P(() => [
                                        a("div", cs, [
                                            a("div", rs, [
                                                A(a("img", null, null, 512), [[v, r(M)("public", "succeed")]]),
                                                a("div", us, d(u.$t("inviteTips")), 1),
                                                a("p", ds, d(u.$t("inviteAmount")), 1),
                                                a("div", vs, [a("span", _s, d(u.$t("commissionAmount")), 1), a("span", null, d(r(ee)(r(s).rebateAmount)), 1)]),
                                                a("div", { class: "dialog-btn", onClick: c[2] || (c[2] = (m) => r(n)()) }, d(u.$t("receive")), 1),
                                            ]),
                                        ]),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ["show"]
                            ),
                            h(
                                l,
                                { show: r(s).oldUser, "onUpdate:show": c[5] || (c[5] = (m) => (r(s).oldUser = m)), "show-confirm-button": !1, "close-on-click-overlay": !0, className: "noOverHidden" },
                                {
                                    default: P(() => [
                                        a("div", ms, [
                                            a("div", ps, [
                                                A(a("img", null, null, 512), [[v, r(M)("public", "succeed")]]),
                                                a("p", fs, d(u.$t("oldPromptTip")), 1),
                                                a("div", gs, d(u.$t("oldPrompt")), 1),
                                                a("p", hs, d(u.$t("oldPromptGift")), 1),
                                                a("div", bs, [a("span", null, d(r(ee)(r(s).returnAwards)), 1)]),
                                                a("div", { class: "dialog-btn", onClick: c[4] || (c[4] = (m) => r(i)()) }, d(u.$t("receive")), 1),
                                            ]),
                                        ]),
                                    ]),
                                    _: 1,
                                },
                                8,
                                ["show"]
                            ),
                        ],
                        64
                    )
                );
            };
        },
    });
const ws = D(ys, [
        ["__scopeId", "data-v-3d4fafbb"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/AllPageDialog.vue"],
    ]),
    ks = V({
        __name: "App",
        setup(t) {
            pe((b) => ({ "f13b4d11-currentFontFamily": R.value }));
            const { openAll: e } = te(),
                s = Ie(),
                n = f(!1),
                o = f(!1),
                i = Q(),
                u = ye(),
                c = re(),
                { locale: l } = Fe(),
                v = le(),
                m = f(!1),
                L = x(() => i.meta.tabBar),
                T = "public3Home",
                E = x(() =>
                    ["electronic", "blackGoldHome"].includes(T)
                        ? !1
                        : ![
                              "/wallet/Withdraw/C2cDetail",
                              "/wallet/RechargeHistory/RechargeUpiDetail",
                              "/wallet/Withdraw/Upi",
                              "/wallet/Withdraw/AddUpi",
                              "/wallet/Withdraw/c2cCancelWithdrawal/index.vue",
                              "/wallet/otherPay?type=C2C",
                              "/home/game",
                          ].includes(i.path)
                ),
                G = f(0),
                O = f(Math.floor(Math.random() * 1e4)),
                w = x(() => i.name + O.value),
                C = () => {
                    s.on("changeKeepAliveKey", () => {
                        O.value = Math.floor(Math.random() * 1e4);
                    });
                };
            sessionStorage.getItem("isload") ? (n.value = !1) : ((o.value = !0), sessionStorage.setItem("isload", o.value.toString()), (n.value = !0)),
                c.getHomeSetting(),
                J(
                    () => c.getAreacode,
                    (b) => {
                        b && u.setNumberType(b.substring(1));
                    }
                ),
                J(
                    () => c.getDL,
                    (b) => {
                        (l.value = b), v.updateLanguage(b), De(b), Le(ue.global.t);
                    }
                ),
                setTimeout(() => {
                    n.value = !1;
                }, 2e3);
            const $ = f(!1),
                j = we();
            j.$subscribe((b, N) => {
                ($.value = N.isLoading), j.setLoading($.value);
            });
            const R = f("bahnschrift");
            let p = ke(),
                g = c.getLanguage,
                B = $e(p, g);
            const F = async (b) => {
                    const N = [
                            { title: "vi", fontStyle: "bahnschrift" },
                            { title: "else", fontStyle: "'Roboto', 'Inter', sans-serif" },
                        ],
                        q = N.findIndex((X) => X.title == B);
                    q >= 0 ? (R.value = N[q].fontStyle) : (R.value = N[N.length - 1].fontStyle);
                },
                z = () => {
                    s.on("keyChange", () => {
                        G.value++;
                    }),
                        s.on("changeIsGame", () => {
                            (m.value = !m.value), ($.value = !$.value);
                        });
                },
                Y = () => {
                    s.off("keyChange"), s.off("changeKeepAliveKey"), s.off("changeIsGame");
                };
            return (
                u.setNumberType(c.getAreacode.substring(1)),
                F(),
                H(() => {
                    Se() && Ce(), e(), Y(), z(), C(), localStorage.getItem("language") && Ae(localStorage.getItem("language"));
                }),
                jt(),
                (b, N) => {
                    const q = I("LoadingView");
                    return (
                        _(),
                        k(
                            Z,
                            null,
                            [
                                h(
                                    q,
                                    { loading: $.value, type: "loading", isGame: m.value },
                                    {
                                        default: P(() => [
                                            (_(),
                                            S(
                                                r(Oe),
                                                { key: G.value },
                                                {
                                                    default: P(({ Component: X }) => [
                                                        (_(), S(Ge, { max: 1 }, [r(i).meta.keepAlive ? (_(), S(ne(X), { key: w.value })) : y("v-if", !0)], 1024)),
                                                        r(i).meta.keepAlive ? y("v-if", !0) : (_(), S(ne(X), { key: 0 })),
                                                    ]),
                                                    _: 1,
                                                }
                                            )),
                                            y("online custom service"),
                                            E.value ? (_(), S(Ut, { key: 0 })) : y("v-if", !0),
                                            L.value ? (_(), S(Ot, { key: 1 })) : y("v-if", !0),
                                        ]),
                                        _: 1,
                                    },
                                    8,
                                    ["loading", "isGame"]
                                ),
                                n.value ? (_(), S(Xt, { key: 0 })) : y("v-if", !0),
                                h(ws),
                            ],
                            64
                        )
                    );
                }
            );
        },
    });
const $s = D(ks, [["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/entrance/ar062/App.vue"]]);
const Ss = {
        mounted(t, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
            let s = null;
            const n = e.value[0],
                o = e.value[1];
            (t.__handleClick__ = function () {
                s && clearTimeout(s),
                    (s = setTimeout(() => {
                        n();
                    }, o || 500));
            }),
                t.addEventListener("click", t.__handleClick__);
        },
        beforeUnmount(t) {
            t.removeEventListener("click", t.__handleClick__);
        },
    },
    Cs = {
        mounted(t, e) {
            if (typeof e.value[0] != "function" || typeof e.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
            let s = null;
            const n = e.value[0],
                o = e.value[1];
            (t.__handleClick__ = function () {
                s && clearTimeout(s),
                    t.disabled ||
                        ((t.disabled = !0),
                        n(),
                        (s = setTimeout(() => {
                            t.disabled = !1;
                        }, o || 500)));
            }),
                t.addEventListener("click", t.__handleClick__);
        },
        beforeUnmount(t) {
            t.removeEventListener("click", t.__handleClick__);
        },
    },
    As = {
        mounted(t, e) {
            t.addEventListener("input", (s) => {
                const o = t.value.replace(/\D+/g, "");
                (t.value = o), (e.value = o);
            });
        },
    },
    Is = (t) => ({
        beforeMount: (e, s) => {
            e.classList.add("ar-lazyload");
            const { value: n } = s;
            (e.dataset.origin = n), t.observe(e);
        },
        updated(e, s) {
            (e.dataset.origin = s.value), t.observe(e);
        },
        unmounted(e, s) {
            t.unobserve(e);
        },
        mounted(e, s) {
            t.observe(e);
        },
    }),
    Ds = {
        mounted(t, e) {
            let s = 0;
            const n = e.value && e.value.wait ? e.value.wait : 3e3,
                o = (i) => {
                    const u = Date.now();
                    u - s >= n && ((s = u), e.value && e.value.handler && e.value.handler(i));
                };
            t.addEventListener("click", o),
                (t._throttleClickCleanup = () => {
                    t.removeEventListener("click", o);
                });
        },
        unmounted(t) {
            t._throttleClickCleanup && t._throttleClickCleanup(), delete t._throttleClickCleanup;
        },
    },
    Ls = {
        mounted(t, e) {
            const { value: s } = e;
            let n = je("permission", null);
            n.value === null || !s || (n && (n = JSON.parse(n.value)), n && n[s] === !1 && (t.style.display = "none"));
        },
    },
    ie = { debounce: Ss, throttle: Cs, onlyNum: As, throttleClick: Ds, haspermission: Ls },
    Ts = {
        install: function (t) {
            Object.keys(ie).forEach((s) => {
                t.directive(s, ie[s]);
            });
            const e = new IntersectionObserver(
                (s) => {
                    s.forEach((n) => {
                        if (n.isIntersecting) {
                            const o = n.target;
                            (o.src = o.dataset.origin || ae("images", "avatar")),
                                (o.onerror = () => {
                                    e.unobserve(o);
                                    let i = o.dataset.img || ae("images", "avatar");
                                    if (!i || (i != null && i.includes("undefined"))) {
                                        o.onerror = null;
                                        return;
                                    }
                                    (o.src = i), (o.style.objectFit = "contain");
                                }),
                                o.classList.remove("ar-lazyload"),
                                e.unobserve(o);
                        }
                    });
                },
                { rootMargin: "0px 0px -50px 0px" }
            );
            t.directive("lazy", Is(e));
        },
    },
    Es = { class: "navbar-fixed" },
    Bs = { class: "navbar__content" },
    Ps = { class: "navbar__content-center" },
    Ns = { class: "navbar__content-title" },
    xs = V({
        __name: "NavBar",
        props: {
            title: { type: String, default: "" },
            placeholder: { type: Boolean, default: !0 },
            leftArrow: { type: Boolean, default: !1 },
            backgroundColor: { type: String, default: "#f7f8ff" },
            classN: { type: String, default: "" },
            headLogo: { type: Boolean, default: !1 },
            headerUrl: { type: String, default: "" },
        },
        emits: ["click-left", "click-right"],
        setup(t, { emit: e }) {
            const s = f(),
                n = re(),
                o = x(() => n.getHeadLogo),
                i = () => {
                    e("click-left");
                },
                u = () => {
                    e("click-right");
                };
            return (
                H(() => {}),
                (c, l) => {
                    const v = I("van-icon");
                    return (
                        _(),
                        k(
                            "div",
                            { class: "navbar", ref_key: "navbar", ref: s },
                            [
                                a("div", Es, [
                                    a("div", Bs, [
                                        a("div", { class: "navbar__content-left", onClick: i }, [K(c.$slots, "left", {}, () => [t.leftArrow ? (_(), S(v, { key: 0, name: "arrow-left" })) : y("v-if", !0)], !0)]),
                                        a("div", Ps, [
                                            t.headLogo ? (_(), k("div", { key: 0, class: "headLogo", style: He({ backgroundImage: "url(" + (t.headerUrl || o.value) + ")" }) }, null, 4)) : y("v-if", !0),
                                            K(c.$slots, "center", {}, () => [a("div", Ns, d(t.title), 1)], !0),
                                        ]),
                                        a("div", { class: "navbar__content-right", onClick: u }, [K(c.$slots, "right", {}, void 0, !0)]),
                                    ]),
                                ]),
                            ],
                            512
                        )
                    );
                }
            );
        },
    });
const Vs = D(xs, [
        ["__scopeId", "data-v-12a80a3e"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/NavBar.vue"],
    ]),
    Rs = { class: "ar-loading-view" },
    Fs = { class: "loading-wrapper" },
    Gs = { class: "com__box" },
    Os = We(
        '<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>',
        1
    ),
    js = { class: "skeleton-wrapper" },
    Hs = { class: "iosDialog" },
    Us = { class: "title" },
    Ms = { class: "websit_info" },
    Ws = ["src"],
    Ks = { class: "link" },
    zs = { class: "text" },
    Ys = { class: "text" },
    qs = { class: "text" },
    Xs = ["src"],
    Js = V({
        __name: "LoadingView",
        props: { loading: { type: Boolean, required: !0 }, type: { type: String, required: !0 }, isGame: { type: Boolean, required: !0 } },
        setup(t) {
            const e = t,
                s = f();
            let n = null;
            const { homeState: o, downloadIcon: i, webSiteUrl: u } = Te(),
                c = x(() => location.origin || "");
            return (
                H(async () => {
                    await Ue(), (n = Me.loadAnimation({ container: s.value, renderer: "svg", loop: !0, autoplay: !0, path: "/data.json" }));
                }),
                J(
                    () => e.loading,
                    () => {
                        e.type === "loading" && !e.isGame && (e.loading ? n && n.play() : n && n.stop());
                    }
                ),
                me(() => {
                    n && n.destroy(), (n = null);
                }),
                (l, v) => {
                    const m = I("VanSkeleton"),
                        L = I("svg-icon"),
                        T = I("van-popup");
                    return (
                        _(),
                        k(
                            Z,
                            null,
                            [
                                A(
                                    a(
                                        "div",
                                        Rs,
                                        [
                                            K(
                                                l.$slots,
                                                "template",
                                                {},
                                                () => [
                                                    A(
                                                        a(
                                                            "div",
                                                            Fs,
                                                            [
                                                                y(" <VanLoading /> "),
                                                                A(a("div", { ref_key: "element", ref: s, class: "loading-animat" }, null, 512), [[U, !l.isGame]]),
                                                                A(a("div", Gs, [y(" loading "), Os, y(" 说明：组件名 ")], 512), [[U, l.isGame]]),
                                                                y(' <div class="animation"></div> '),
                                                            ],
                                                            512
                                                        ),
                                                        [[U, l.type === "loading"]]
                                                    ),
                                                    A(a("div", js, [h(m, { row: 10 }), h(m, { title: "", avatar: "", row: 5 }), h(m, { title: "", row: 5 })], 512), [[U, l.type === "skeleton"]]),
                                                ],
                                                !0
                                            ),
                                        ],
                                        512
                                    ),
                                    [[U, l.loading]]
                                ),
                                K(l.$slots, "default", {}, void 0, !0),
                                h(
                                    T,
                                    { show: r(o).iosDialog, "onUpdate:show": v[0] || (v[0] = (E) => (r(o).iosDialog = E)), round: "", closeable: "", position: "bottom", style: { height: "40%" } },
                                    {
                                        default: P(() => [
                                            a("div", Hs, [
                                                a("div", Us, d(l.$t("pwaInstall")), 1),
                                                a("div", Ms, [a("img", { class: "icon", src: r(i) }, null, 8, Ws), a("div", Ks, [a("div", null, d(c.value.split("://")[1]), 1), a("div", null, d(c.value), 1)])]),
                                                a("div", zs, [W("1. " + d(l.$t("pwaText1")) + " ", 1), h(L, { name: "share" })]),
                                                a("div", Ys, [W("2. " + d(l.$t("pwaText2")) + " ", 1), a("span", null, [W(d(l.$t("pwaText3")) + " ", 1), h(L, { name: "add_icon" })])]),
                                                a("div", qs, [W("3. " + d(l.$t("pwaText4")) + " ", 1), a("img", { class: "icon", src: r(i) }, null, 8, Xs)]),
                                            ]),
                                        ]),
                                        _: 1,
                                    },
                                    8,
                                    ["show"]
                                ),
                            ],
                            64
                        )
                    );
                }
            );
        },
    });
const Qs = D(Js, [
    ["__scopeId", "data-v-647954c7"],
    ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/LoadingView.vue"],
]);
const Zs = ["xlink:href"],
    ea = {
        __name: "svgIcons",
        props: { name: { type: String, required: !0 }, color: { type: String, default: "" } },
        setup(t) {
            const e = t,
                s = x(() => `#icon-${e.name}`),
                n = x(() => (e.name ? `svg-icon icon-${e.name}` : "svg-icon"));
            return (o, i) => (_(), k("svg", Ke({ class: n.value }, o.$attrs, { style: { color: t.color } }), [a("use", { "xlink:href": s.value }, null, 8, Zs)], 16));
        },
    },
    ta = D(ea, [["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/svgIcons.vue"]]),
    sa = { class: "ar-searchbar__selector" },
    aa = { class: "ar-searchbar__selector-default" },
    oa = V({
        __name: "ArSelect",
        props: { selectName: { type: String, default: "" } },
        emits: ["click-select"],
        setup(t, { emit: e }) {
            const s = () => {
                e("click-select");
            };
            return (n, o) => {
                const i = I("van-icon");
                return _(), k("div", sa, [a("div", { onClick: s }, [a("span", aa, d(t.selectName), 1), h(i, { name: "arrow-down" })])]);
            };
        },
    });
const na = D(oa, [
        ["__scopeId", "data-v-fa757a88"],
        ["__file", "/var/lib/jenkins/workspace/web-印度-DiuWin-ar062-webnew/src/components/common/ArSelect.vue"],
    ]),
    ia = (t) => {
        t.component("NavBar", Vs),
            t.component("LoadingView", Qs),
            t.component("ArSelect", na),
            t.component("svg-icon", ta),
            t
                .use(ze)
                .use(Ye)
                .use(qe)
                .use(Xe)
                .use(Je)
                .use(Qe)
                .use(Ze)
                .use(et)
                .use(tt)
                .use(st)
                .use(at)
                .use(ot)
                .use(nt)
                .use(it)
                .use(lt)
                .use(ct)
                .use(rt)
                .use(ut)
                .use(dt)
                .use(vt)
                .use(_t)
                .use(mt)
                .use(pt)
                .use(ft)
                .use(gt)
                .use(ht)
                .use(bt)
                .use(yt)
                .use(wt)
                .use(kt)
                .use($t)
                .use(St)
                .use(Ct)
                .use(At)
                .use(It)
                .use(Dt)
                .use(Lt)
                .use(ue)
                .use(Ts)
                .use(Tt);
        let e = t.config.globalProperties,
            s = {};
        (s.TopHeight = 38),
            Object.keys(oe.refiter).forEach((n) => {
                s[n] = oe.refiter[n];
            }),
            (e.$u = s);
    };
({}.VITE_POINT && Ee[{}.VITE_POINT]());
de.addRoute({
    path: "/",
    name: "home",
    component: () =>
        Be(() => import("./page-home-74725bb3.js").then((t) => t.X), [
            "assets/js/page-home-74725bb3.js",
            "assets/js/modules-8e4eb682.js",
            "assets/css/modules-5dd73da0.css",
            "assets/js/page-activity-500eb065.js",
            "assets/js/native/index-9a070501.js",
            "assets/js/en-15fa07f8.js",
            "assets/js/rus-97760f90.js",
            "assets/js/vi-2d05655c.js",
            "assets/js/id-3117b06e.js",
            "assets/js/hd-fd8b192b.js",
            "assets/js/tha-8487385e.js",
            "assets/js/md-e0522d3b.js",
            "assets/js/bra-961b9a7d.js",
            "assets/js/my-89562fe6.js",
            "assets/js/bdt-d6487d0e.js",
            "assets/js/zh-184b2083.js",
            "assets/js/pak-3bdeb9cb.js",
            "assets/js/ar-7f8a77f5.js",
            "assets/css/page-activity-93a8910e.css",
            "assets/css/page-home-a4807077.css",
        ]),
    meta: { title: "home", tabBar: !0, keepAlive: !1 },
});
const se = Et($s),
    he = Bt();
ia(se);
he.use(Pt);
se.use(de).use(he);
se.mount("#app");
