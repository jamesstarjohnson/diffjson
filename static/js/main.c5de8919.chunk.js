(this.webpackJsonpdiffjson=this.webpackJsonpdiffjson||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(7),o=n.n(r),j=(n(13),n(4)),i=n(6),b=n(3),l=n(2),u=n.n(l);function O(e){var t=e.onChange,n=e.value,c=e.label;return Object(a.jsxs)("div",{className:u.a.textContainer,children:[Object(a.jsx)("p",{children:c}),Object(a.jsx)("textarea",{className:u.a.text,value:n,onChange:function(e){t(e.target.value)},cols:80,rows:30})]})}var p=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),o=Object(b.a)(r,2),l=o[0],p=o[1],h=Object(c.useState)(""),x=Object(b.a)(h,2),f=x[0],d=x[1],v=Object(c.useState)(0),C=Object(b.a)(v,2),g=C[0],_=C[1];return Object(a.jsxs)("div",{className:u.a.app,children:[Object(a.jsxs)("div",{className:u.a.jsonContainer,children:[Object(a.jsx)(O,{label:"Working Branch",onChange:p,value:l}),Object(a.jsx)(O,{label:"Master",onChange:s,value:n})]}),Object(a.jsx)("button",{className:u.a.button,onClick:function(){if(n&&l)try{var e=JSON.parse(n),t=JSON.parse(l),a=Object.entries(t).reduce((function(t,n){var a=Object(b.a)(n,2),c=a[0],s=a[1];return e[c]===s?t:Object(i.a)(Object(i.a)({},t),{},Object(j.a)({},c,s))}),{});d(JSON.stringify(a,null,2)),_(Object.keys(a).length)}catch(c){alert(c)}},children:"Diff"}),Object(a.jsxs)("p",{children:["Entries: ",g]}),Object(a.jsx)(O,{label:"Result",value:f,onChange:d})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),h()},2:function(e,t,n){e.exports={app:"app_app__cewju",jsonContainer:"app_jsonContainer__2oHUt",textContainer:"app_textContainer__1o8C2",text:"app_text__6HA0A",button:"app_button__1epl4"}}},[[14,1,2]]]);
//# sourceMappingURL=main.c5de8919.chunk.js.map