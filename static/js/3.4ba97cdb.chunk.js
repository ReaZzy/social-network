(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(e,s,a){"use strict";a.d(s,"a",(function(){return A}));var t=a(51),n=a(52),i=a(54),r=a(53),g=a(9),o=a(0),l=a.n(o),c=a(14),A=function(e){var s=function(s){Object(i.a)(o,s);var a=Object(r.a)(o);function o(){return Object(t.a)(this,o),a.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(g.a,{to:"/login"})}}]),o}(l.a.Component);return Object(c.b)(p)(s)},p=function(e){return{isAuth:e.auth.isAuth}}},298:function(e,s,a){e.exports={content:"Dialogs_content__1FUzv",span:"Dialogs_span__3kP_e",title:"Dialogs_title__1nMPx",but:"Dialogs_but__2zZAW",button:"Dialogs_button__18bSs",messag:"Dialogs_messag__3ckUi"}},305:function(e,s,a){e.exports={dialog:"Dialog_dialog__30jsa",active:"Dialog_active__3Vfu9",f_img:"Dialog_f_img__1b7H3"}},306:function(e,s,a){e.exports={messages:"Message_messages__o67uO",yes:"Message_yes__aW4Sg",no:"Message_no__OHhsn",dots:"Message_dots__28C0f",viewed:"Message_viewed__1Mgjq"}},307:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA51BMVEUAAABAgIBVep1Wep5Ve51ggJ9Vep9VfZ9Ve5xXe59Xep5WeZ5VcapWep5VeZ5WeaBWfJ5VeZ5VeZ5WeZ5Ve59ZeptWep5Wep5Xe59Wep5Wep5Wep5Wep9Ye55Xep5Wep5VdZ9Wep5WeZ9Xep9Xe55Wep5NgJlVep5XeZ1Wep5Xep9QgJ9Wep5Wep1Xe59Wep9Xep9YeJ9We55Wep5Wep9Vep9Xep5We59Xd51VeZ5Vep5We5xWe55Ydp1Xe55Wep5Wep1WeZ5VgKpVep9Wep5Xep1YeZ9Wep5Wep9Wep5Ye51Wep4AAADyfsSWAAAAS3RSTlMABNHuUQhaLTZVmZEJ4lQ7RBV+u7kXq/iH45vKtB2W7xi+SoqB/Qp7jfJtEPdrnN5YIOdcyTDXTS8/yD6gGk+42YsGb81ePe13sTQNLdnyAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QMARAIKaoAyEQAAACdSURBVBjTRc/XEoJADEDR6Iq9ICgWUOy9V+y95v//x4UNct9yZrI7AQDw+RljAfCSggChsDtFov9icRsS6JW0ISV7pZ0dRaUyWfGIlstjoYi6gSUBZbOC1RrWFZQENJotG9qdLv3bw/6Aw3A0JpjgdMZhri0IZFyuOKxVg8DCzZbDTt8THPB44mCdLwRXvKn3Bz5fb/e8jziEfZ3pB+cVGZverKz3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTAxVDE2OjA4OjQxKzAwOjAwvyexxQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMi0wMVQxNjowODo0MSswMDowMM56CXkAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},310:function(e,s,a){"use strict";a.r(s);var t=a(51),n=a(52),i=a(54),r=a(53),g=a(97),o=a(0),l=a.n(o),c=a(298),A=a.n(c),p=a(305),d=a.n(p),m=a(13),u=a(96),b=a.n(u),E=function(e){return l.a.createElement("div",null,l.a.createElement(m.b,{to:"/messages/"+e.id,className:d.a.dialog,activeClassName:d.a.active,onClick:function(){e.getMessagesList(e.id)}},l.a.createElement("img",{src:e.photos||b.a,alt:"",className:d.a.f_img}),e.userName),l.a.createElement("br",null),l.a.createElement("br",null))},v=a(306),_=a.n(v),f=a(307),h=a.n(f),W=function(e){var s=e.senderId===e.currentUserId;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:s?_.a.yes:_.a.no},l.a.createElement("div",{className:_.a.messages},l.a.createElement("img",{className:_.a.img,src:e.img,alt:""}),l.a.createElement("span",{onClick:function(){var s;s=e.id,e.deleteMessage(s),e.getMessagesList(e.userId),e.getMessagesList(e.userId)}},l.a.createElement("img",{className:_.a.dots,src:h.a,alt:""})),!e.viewed&&l.a.createElement("span",{className:_.a.viewed},"."),l.a.createElement("span",{className:_.a.mes},e.message))))},M=a(130),y=a(131),D=a(72),Z=a(73),L=Object(D.b)(1),N=Object(D.a)(300),V=Object(y.a)({form:"sendMessage"})((function(e){return l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement(M.a,{rows:"3",cols:"50",someArbitraryOtherProp:"s.textarea1",name:"message",component:Z.b,placeholder:"Type your message...",validate:[D.c,L,N]}),l.a.createElement("span",{className:A.a.butt},l.a.createElement("button",{className:A.a.button},"Send")))})),O=a(55),j=function(e){var s=e.match.params.userId,a=e.dialogs.map((function(s){return l.a.createElement(E,{id:s.id,userName:s.userName,photos:s.photos.small,getMessagesList:e.getMessagesList,messages:e.messages})})),t=e.messages.map((function(a){return l.a.createElement(W,{getMessagesList:e.getMessagesList,deleteMessage:e.deleteMessage,userId:s,viewed:a.viewed,senderId:a.senderId,currentUserId:e.currentUserId,message:a.body,key:a.id,id:a.id})}));return l.a.createElement("div",{className:A.a.content},l.a.createElement("div",{className:A.a.dialogs+"unselectable"},l.a.createElement("div",{className:A.a.title},"Dialogs"),l.a.createElement("div",{className:A.a.span},e.dialogsLoading?l.a.createElement(O.a,null):a)),l.a.createElement("div",{className:A.a.messages},l.a.createElement("div",{className:A.a.messag},e.messagesLoading?l.a.createElement(O.a,null):t),l.a.createElement("div",{className:A.a.but},l.a.createElement(V,{onSubmit:function(a){e.sendMessage(s,a.message),e.getMessagesList(s),e.getMessagesList(s)}}))))},I=a(14),w=a(295),S=a(8),B=a(9),C=function(e){Object(i.a)(a,e);var s=Object(r.a)(a);function a(){var e;Object(t.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=s.call.apply(s,[this].concat(i))).reGetDialogs=function(){var s=e.props.match.params.userId;s&&e.props.getMessagesList(s),e.props.dialogs.length<1&&e.props.getDialogsPage()},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.reGetDialogs()}},{key:"componentDidUpdate",value:function(e,s,a){this.props.messages.length!==e.messages.length&&this.reGetDialogs()}},{key:"render",value:function(){return l.a.createElement(j,Object.assign({},this.props,{messages:this.props.messages,dialogs:this.props.dialogs,dialogsLoading:this.props.dialogsLoading,getMessagesList:this.props.getMessagesList,userId:this.props.userId,messagesLoading:this.props.messagesLoading,deleteMessage:this.props.deleteMessage,currentUserId:this.props.currentUserId}))}}]),a}(o.PureComponent);s.default=Object(S.d)(Object(I.b)((function(e){return{messages:e.dialogsPage.messageData,dialogs:e.dialogsPage.dialogsData,dialogsLoading:e.dialogsPage.dialogsLoading,messagesLoading:e.dialogsPage.messagesLoading,currentUserId:e.auth.id}}),{sendMessage:g.e,getDialogsPage:g.c,getMessagesList:g.d,deleteMessage:g.b}),B.g,w.a)(C)}}]);
//# sourceMappingURL=3.4ba97cdb.chunk.js.map