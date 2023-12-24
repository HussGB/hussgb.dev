"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/login-btn.jsx":
/*!**********************************!*\
  !*** ./components/login-btn.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\hxsna\\\\OneDrive\\\\Documents\\\\hussgb.dev-main\\\\components\\\\login-btn.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// Navbar.js\n\n\n\n\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      darkMode = _useState[0],\n      setDarkMode = _useState[1];\n\n  var _useSession = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.useSession)(),\n      session = _useSession.data;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var savedDarkMode = localStorage.getItem('darkMode');\n\n    if (savedDarkMode) {\n      setDarkMode(savedDarkMode === 'true');\n    }\n  }, []);\n\n  var toggleDarkMode = function toggleDarkMode() {\n    var newDarkMode = !darkMode;\n    setDarkMode(newDarkMode);\n    localStorage.setItem('darkMode', String(newDarkMode));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"nav\", {\n    className: \"fixed w-full \".concat(darkMode ? 'bg-gray-900' : 'bg-transparent', \" p-4\"),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"container mx-auto flex justify-between items-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n          className: \"text-\".concat(darkMode ? 'white' : 'black', \" text-lg font-bold\"),\n          children: \"Your Logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"flex items-center space-x-4\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          onClick: toggleDarkMode,\n          className: \"text-\".concat(darkMode ? 'white' : 'black', \" hover:underline\"),\n          children: darkMode ? 'Light Mode' : 'Dark Mode'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            className: \"text-\".concat(darkMode ? 'white' : 'black'),\n            children: [\"Signed in as \", session.user.email]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n            onClick: function onClick() {\n              return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.signOut)();\n            },\n            className: \"text-\".concat(darkMode ? 'white' : 'black', \" hover:underline\"),\n            children: \"Sign out\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            className: \"text-\".concat(darkMode ? 'white' : 'black'),\n            children: \"Not signed in\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n            onClick: function onClick() {\n              return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.signIn)();\n            },\n            className: \"text-\".concat(darkMode ? 'white' : 'black', \" hover:underline\"),\n            children: \"Sign in\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"Vy6fDZidRrKWoCxVOdfTw3l1KgI=\", false, function () {\n  return [next_auth_react__WEBPACK_IMPORTED_MODULE_0__.useSession];\n});\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ2luLWJ0bi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixrQkFBZ0NELCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9FLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0Esb0JBQTBCTCwyREFBVSxFQUFwQztBQUFBLE1BQWNNLE9BQWQsZUFBUUMsSUFBUjs7QUFFQU4sRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTU8sYUFBYSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsQ0FBdEI7O0FBQ0EsUUFBSUYsYUFBSixFQUFtQjtBQUNqQkgsTUFBQUEsV0FBVyxDQUFDRyxhQUFhLEtBQUssTUFBbkIsQ0FBWDtBQUNEO0FBQ0YsR0FMUSxFQUtOLEVBTE0sQ0FBVDs7QUFPQSxNQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsUUFBTUMsV0FBVyxHQUFHLENBQUNSLFFBQXJCO0FBQ0FDLElBQUFBLFdBQVcsQ0FBQ08sV0FBRCxDQUFYO0FBQ0FILElBQUFBLFlBQVksQ0FBQ0ksT0FBYixDQUFxQixVQUFyQixFQUFpQ0MsTUFBTSxDQUFDRixXQUFELENBQXZDO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMseUJBQWtCUixRQUFRLEdBQUcsYUFBSCxHQUFtQixnQkFBN0MsU0FBZDtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHFEQUFmO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLGlCQUFVQSxRQUFRLEdBQUcsT0FBSCxHQUFhLE9BQS9CLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsZ0NBQ0U7QUFDRSxpQkFBTyxFQUFFTyxjQURYO0FBRUUsbUJBQVMsaUJBQVVQLFFBQVEsR0FBRyxPQUFILEdBQWEsT0FBL0IscUJBRlg7QUFBQSxvQkFJR0EsUUFBUSxHQUFHLFlBQUgsR0FBa0I7QUFKN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQU9HRSxPQUFPLGdCQUNOO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxpQkFBVUYsUUFBUSxHQUFHLE9BQUgsR0FBYSxPQUEvQixDQUFaO0FBQUEsd0NBQW9FRSxPQUFPLENBQUNTLElBQVIsQ0FBYUMsS0FBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1qQix3REFBTyxFQUFiO0FBQUEsYUFEWDtBQUVFLHFCQUFTLGlCQUFVSyxRQUFRLEdBQUcsT0FBSCxHQUFhLE9BQS9CLHFCQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsd0JBRE0sZ0JBV047QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLGlCQUFVQSxRQUFRLEdBQUcsT0FBSCxHQUFhLE9BQS9CLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTU4sdURBQU0sRUFBWjtBQUFBLGFBRFg7QUFFRSxxQkFBUyxpQkFBVU0sUUFBUSxHQUFHLE9BQUgsR0FBYSxPQUEvQixxQkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLHdCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0F2REQ7O0dBQU1EO1VBRXNCSDs7O0tBRnRCRztBQXlETiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luLWJ0bi5qc3g/ZDVhZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOYXZiYXIuanNcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCBbZGFya01vZGUsIHNldERhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNhdmVkRGFya01vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKTtcclxuICAgIGlmIChzYXZlZERhcmtNb2RlKSB7XHJcbiAgICAgIHNldERhcmtNb2RlKHNhdmVkRGFya01vZGUgPT09ICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhcmtNb2RlID0gIWRhcmtNb2RlO1xyXG4gICAgc2V0RGFya01vZGUobmV3RGFya01vZGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtNb2RlJywgU3RyaW5nKG5ld0RhcmtNb2RlKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtgZml4ZWQgdy1mdWxsICR7ZGFya01vZGUgPyAnYmctZ3JheS05MDAnIDogJ2JnLXRyYW5zcGFyZW50J30gcC00YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B0ZXh0LSR7ZGFya01vZGUgPyAnd2hpdGUnIDogJ2JsYWNrJ30gdGV4dC1sZyBmb250LWJvbGRgfT5Zb3VyIExvZ288L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhcmtNb2RlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LSR7ZGFya01vZGUgPyAnd2hpdGUnIDogJ2JsYWNrJ30gaG92ZXI6dW5kZXJsaW5lYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhcmtNb2RlID8gJ0xpZ2h0IE1vZGUnIDogJ0RhcmsgTW9kZSd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIHtzZXNzaW9uID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQtJHtkYXJrTW9kZSA/ICd3aGl0ZScgOiAnYmxhY2snfWB9PlNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LSR7ZGFya01vZGUgPyAnd2hpdGUnIDogJ2JsYWNrJ30gaG92ZXI6dW5kZXJsaW5lYH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTaWduIG91dFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC0ke2RhcmtNb2RlID8gJ3doaXRlJyA6ICdibGFjayd9YH0+Tm90IHNpZ25lZCBpbjwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtJHtkYXJrTW9kZSA/ICd3aGl0ZScgOiAnYmxhY2snfSBob3Zlcjp1bmRlcmxpbmVgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwiZGFya01vZGUiLCJzZXREYXJrTW9kZSIsInNlc3Npb24iLCJkYXRhIiwic2F2ZWREYXJrTW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2dnbGVEYXJrTW9kZSIsIm5ld0RhcmtNb2RlIiwic2V0SXRlbSIsIlN0cmluZyIsInVzZXIiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/login-btn.jsx\n");

/***/ })

});