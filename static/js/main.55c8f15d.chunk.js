(this["webpackJsonpstarter-app"]=this["webpackJsonpstarter-app"]||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Matt_Desktop_CodeNation_week_05_starter_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_calc_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_calc_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_calc_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_Matt_Desktop_CodeNation_week_05_starter_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),calc=_useState2[0],setCalc=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(C_Users_Matt_Desktop_CodeNation_week_05_starter_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],ops=["/","*","+","-","."],updateCalc=function updateCalc(value){ops.includes(value)&&""===calc||ops.includes(value)&&ops.includes(calc.slice(-1))||(setCalc(calc+value),ops.includes(value)||setResult(eval(calc+value).toString()))},createDigits=function(){for(var _=[],e=function(e){_.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc(e.toString())},children:e},e))},t=1;t<10;t++)e(t);return _},calculate=function calculate(){setCalc(eval(calc).toString())},deleteLast=function(){if(""!=calc){var _=calc.slice(0,-1);setCalc(_)}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"display",children:[result?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:["(0",result,")"]}):"","\xa0",calc||"0"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"operators",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("/")},children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("*")},children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("+")},children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("-")},children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:deleteLast,children:"DEL"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"digits",children:[createDigits(),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc("/0")},children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function(){return updateCalc(".")},children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:calculate,children:"="})]})]})})};__webpack_exports__.a=App},function(_,e,t){"use strict";t.r(e);t(1);var c=t(4),a=t.n(c),r=(t(11),t(5)),s=t(0);a.a.render(Object(s.jsx)(r.a,{}),document.getElementById("root"))},,,,,function(_,e,t){},function(_,e,t){}],[[6,1,2]]]);
//# sourceMappingURL=main.55c8f15d.chunk.js.map