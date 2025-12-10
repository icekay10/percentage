module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/src/Components/Navbar.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Navbar-module__qy8vZq__active",
  "hamburgerLine": "Navbar-module__qy8vZq__hamburgerLine",
  "logoLink": "Navbar-module__qy8vZq__logoLink",
  "logoText": "Navbar-module__qy8vZq__logoText",
  "menuToggle": "Navbar-module__qy8vZq__menuToggle",
  "navbar": "Navbar-module__qy8vZq__navbar",
  "navbarContainer": "Navbar-module__qy8vZq__navbarContainer",
  "navbarItem": "Navbar-module__qy8vZq__navbarItem",
  "navbarLink": "Navbar-module__qy8vZq__navbarLink",
  "navbarLogo": "Navbar-module__qy8vZq__navbarLogo",
  "navbarMenu": "Navbar-module__qy8vZq__navbarMenu",
  "navbarScrolled": "Navbar-module__qy8vZq__navbarScrolled",
});
}),
"[project]/src/Components/Navbar.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/Components/Navbar.module.css [ssr] (css module)");
;
;
;
;
;
const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Handle scroll effect for navbar
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    // Close mobile menu when clicking outside
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (isMenuOpen && !event.target.closest(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbar}`) && !event.target.closest(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].menuToggle}`)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [
        isMenuOpen
    ]);
    // Close mobile menu when route changes
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setIsMenuOpen(false);
    }, [
        router.pathname
    ]);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const navItems = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Percentage Calculator',
            path: '/percentage-calculator'
        },
        {
            label: 'About',
            path: '/about'
        },
        {
            label: 'Contact',
            path: '/contact'
        }
    ];
    const isActive = (path)=>{
        return router.pathname === path;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbar} ${isScrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbarScrolled : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbarContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbarLogo,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].logoLink,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].logoText,
                            children: "PercentDiscount&Tip"
                        }, void 0, false, {
                            fileName: "[project]/src/Components/Navbar.jsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Navbar.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/Components/Navbar.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbarMenu} ${isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                    children: navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbarItem,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navbarLink} ${isActive(item.path) ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: ()=>setIsMenuOpen(false),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/Components/Navbar.jsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/src/Components/Navbar.jsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/Components/Navbar.jsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].menuToggle} ${isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                    onClick: toggleMenu,
                    "aria-label": "Toggle menu",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].hamburgerLine
                        }, void 0, false, {
                            fileName: "[project]/src/Components/Navbar.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].hamburgerLine
                        }, void 0, false, {
                            fileName: "[project]/src/Components/Navbar.jsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].hamburgerLine
                        }, void 0, false, {
                            fileName: "[project]/src/Components/Navbar.jsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Components/Navbar.jsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Navbar.jsx",
            lineNumber: 55,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/Components/Navbar.jsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/src/Components/Footer.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "copyright": "Footer-module__yRIjCG__copyright",
  "footer": "Footer-module__yRIjCG__footer",
  "footerBottom": "Footer-module__yRIjCG__footerBottom",
  "footerBottomContent": "Footer-module__yRIjCG__footerBottomContent",
  "footerContainer": "Footer-module__yRIjCG__footerContainer",
  "footerContent": "Footer-module__yRIjCG__footerContent",
  "footerDescription": "Footer-module__yRIjCG__footerDescription",
  "footerLink": "Footer-module__yRIjCG__footerLink",
  "footerLinkItem": "Footer-module__yRIjCG__footerLinkItem",
  "footerLinks": "Footer-module__yRIjCG__footerLinks",
  "footerSection": "Footer-module__yRIjCG__footerSection",
  "footerSubtitle": "Footer-module__yRIjCG__footerSubtitle",
  "footerTitle": "Footer-module__yRIjCG__footerTitle",
});
}),
"[project]/src/Components/Footer.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/Components/Footer.module.css [ssr] (css module)");
;
;
;
const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerTitle,
                                    children: "PercentDiscount&Tip"
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/Footer.jsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerDescription,
                                    children: "Free, fast, and accurate percentage, discount, and tip calculator."
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/Footer.jsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/Footer.jsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerSubtitle,
                                    children: "Tools"
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/Footer.jsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinks,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/percentage-calculator",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Percentage Calculator"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 22,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/discount-calculator",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Discount Calculator"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/tip-calculator",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Tip Calculator"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/tip-calculators-stress-free-dining-and-service-payments",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Tip Calculators: Stress-Free Dining and Service Payments"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/discount-calculators-save-more-while-shopping",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Discount Calculators: Save More While Shopping"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/percentage-calculators-beyond-discounts-and-tips",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Percentage Calculators Beyond Discounts and Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/percentage-calculators-beyond-discounts-and-tips",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Percentage Calculators Beyond Discounts and Tips"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/advanced-uses-of-percentage-calculators",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Advanced Uses of Percentage Calculators"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/Footer.jsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/Footer.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerSubtitle,
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/src/Components/Footer.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinks,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLinkItem,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy-policy",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                children: "Privacy Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/Components/Footer.jsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/Components/Footer.jsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/Components/Footer.jsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/Footer.jsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Components/Footer.jsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerBottom,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerBottomContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].copyright,
                            children: [
                                "© ",
                                currentYear,
                                " PercentDiscount&Tip. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/Components/Footer.jsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/Components/Footer.jsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/Components/Footer.jsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Components/Footer.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/Components/Footer.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/pages/_app.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/Navbar.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Components/Footer.jsx [ssr] (ecmascript)");
;
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "app-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                    ...pageProps
                }, void 0, false, {
                    fileName: "[project]/src/pages/_app.js",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__33606325._.js.map