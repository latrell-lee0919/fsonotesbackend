(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{41:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var c=e(17),r=e.n(c),o=e(8),i=e(3),a=e(2),u=e(6),s=e.n(u),j="/api/notes",l=function(){return s.a.get(j).then((function(t){return t.data}))},f=function(t){return s.a.post(j,t).then((function(t){return t.data}))},b=function(t,n){return s.a.put("".concat(j,"/").concat(t),n).then((function(t){return t.data}))},d=e(0),m=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(d.jsxs)("li",{className:"note",children:[n.content,Object(d.jsx)("button",{onClick:e,children:c})]})},O=function(t){var n=t.message;return null===n?null:Object(d.jsx)("div",{className:"error",children:n})},p=function(){return Object(d.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(d.jsx)("br",{}),Object(d.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},h=function(){var t=Object(a.useState)([]),n=Object(i.a)(t,2),e=n[0],c=n[1],r=Object(a.useState)(""),u=Object(i.a)(r,2),s=u[0],j=u[1],h=Object(a.useState)(!0),v=Object(i.a)(h,2),x=v[0],g=v[1],S=Object(a.useState)(null),k=Object(i.a)(S,2),y=k[0],w=k[1];Object(a.useEffect)((function(){l().then((function(t){c(t)}))}),[]);var N=x?e:e.filter((function(t){return!0===t.important}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Notes"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{message:y}),Object(d.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})]}),Object(d.jsx)("ul",{children:N.map((function(t,n){return Object(d.jsx)(m,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),r=Object(o.a)(Object(o.a)({},n),{},{important:!n.important});b(t,r).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(r){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),c(e.filter((function(n){return n.id!==t})))}))}(t.id)}},n)}))}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:s,date:(new Date).toISOString(),important:Math.random()<.5};f(n).then((function(t){c(e.concat(t)),j("")}))},children:[Object(d.jsx)("input",{value:s,onChange:function(t){j(t.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"save"})]}),Object(d.jsx)(p,{})]})};e(41);r.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.fcb612f8.chunk.js.map