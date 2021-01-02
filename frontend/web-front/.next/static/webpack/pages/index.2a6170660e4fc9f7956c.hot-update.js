webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/app/frontend/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(() => {\n  _s();\n\n  const {\n    0: todos,\n    1: setTodo\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  const getAPIData = async () => {\n    let instance;\n    instance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n      baseURL: 'http://localhost:8080'\n    });\n\n    try {\n      const response = await instance.get('/api/');\n      console.log(response === null || response === void 0 ? void 0 : response.data);\n      const tododata = response === null || response === void 0 ? void 0 : response.data;\n      setTodo(tododata);\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [\"hello world\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: getAPIData,\n      children: \"click\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, undefined), todos.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: item.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: item.body\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }, undefined)]\n    }, item.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }, undefined))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, undefined);\n}, \"AHDAwrrftur23arF5TvlQO1ChIo=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbInRvZG9zIiwic2V0VG9kbyIsInVzZVN0YXRlIiwiZ2V0QVBJRGF0YSIsImluc3RhbmNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInRvZG9kYXRhIiwiZXJyb3IiLCJtYXAiLCJpdGVtIiwidGl0bGUiLCJib2R5IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRZSxrRUFBQyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU07QUFBQSxPQUFDQSxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFtQkMsc0RBQVEsQ0FBUyxFQUFULENBQWpDOztBQUVBLFFBQU1DLFVBQVUsR0FBRyxZQUFZO0FBQzNCLFFBQUlDLFFBQUo7QUFFQUEsWUFBUSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDcEJDLGFBQU8sRUFBRTtBQURXLEtBQWIsQ0FBWDs7QUFJQSxRQUFJO0FBQ0EsWUFBTUMsUUFBUSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLE9BQWIsQ0FBdkI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlILFFBQVosYUFBWUEsUUFBWix1QkFBWUEsUUFBUSxDQUFFSSxJQUF0QjtBQUNBLFlBQU1DLFFBQVEsR0FBR0wsUUFBSCxhQUFHQSxRQUFILHVCQUFHQSxRQUFRLENBQUVJLElBQTNCO0FBQ0FYLGFBQU8sQ0FBQ1ksUUFBRCxDQUFQO0FBQ0gsS0FMRCxDQUtFLE9BQU9DLEtBQVAsRUFBYztBQUNaSixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWjtBQUNIO0FBQ0osR0FmRDs7QUFnQkEsc0JBQ0k7QUFBQSwyQ0FFSTtBQUFRLGFBQU8sRUFBRVgsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFHS0gsS0FBSyxDQUFDZSxHQUFOLENBQVdDLElBQUQsaUJBQ1A7QUFBQSw4QkFDSTtBQUFBLGtCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsa0JBQUlELElBQUksQ0FBQ0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUEsT0FBVUYsSUFBSSxDQUFDRyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsQ0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVlILENBL0JEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcydcblxudHlwZSBUb2RvID0ge1xuICAgIGlkOiBTdHJpbmdcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgYm9keTogU3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2RvXSA9IHVzZVN0YXRlPFRvZG9bXT4oW10pXG5cbiAgICBjb25zdCBnZXRBUElEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgaW5zdGFuY2U6IEF4aW9zSW5zdGFuY2VcblxuICAgICAgICBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbnN0YW5jZS5nZXQoJy9hcGkvJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuICAgICAgICAgICAgY29uc3QgdG9kb2RhdGEgPSByZXNwb25zZT8uZGF0YSBhcyBUb2RvW11cbiAgICAgICAgICAgIHNldFRvZG8odG9kb2RhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgaGVsbG8gd29ybGRcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0QVBJRGF0YX0+Y2xpY2s8L2J1dHRvbj5cbiAgICAgICAgICAgIHt0b2Rvcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59KSBhcyBGQyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})