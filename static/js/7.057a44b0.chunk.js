(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{299:function(e,t,n){e.exports={todoItem:"todo_todoItem__PK7sr",button:"todo_button__2NENI",done:"todo_done__XBZKs",id:"todo_id__3uSHW",butCancel:"todo_butCancel__3d3Mw",ul:"todo_ul__14Lbk"}},314:function(e,t,n){"use strict";n.r(t);var o=n(96),a=n(0),c=n.n(a),l=n(129),u=n(130),m=n(58),r=n(57),i=n(299),d=n.n(i),s=Object(r.b)(1),p=Object(r.a)(300),b=Object(u.a)({form:"todo"})((function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t},c.a.createElement(l.a,{component:m.e,name:"todoItem",validate:[r.c,s,p]}),c.a.createElement("div",null,c.a.createElement("button",{className:d.a.button},"Save")))}));t.default=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],l=n[1];Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]);return a.createElement("div",null,a.createElement("h1",null,"TODO LIST"),a.createElement("div",null,a.createElement(b,Object.assign({},e,{onSubmit:function(e){l(c.concat([{id:c.length+1,completed:!1,title:e.todoItem}])),e.todoItem=""}})),a.createElement("ul",{className:d.a.ul},c.map((function(e,t){return a.createElement("li",{className:e.completed?d.a.done:"",key:e.id},a.createElement("div",{className:d.a.todoItem},a.createElement("span",null,a.createElement("input",{type:"checkbox",checked:e.completed,onChange:function(){var t;t=e.id,l(c.map((function(e){return e.id===t&&(e.completed=!e.completed),e})))}}),"\xa0",a.createElement("strong",{className:d.a.id},t+1),e.title),a.createElement("button",{className:d.a.butCancel,onClick:function(){return t=e.id,void l(c.filter((function(e){return e.id!==t})));var t}},"\xd7")))})))))}}}]);
//# sourceMappingURL=7.057a44b0.chunk.js.map