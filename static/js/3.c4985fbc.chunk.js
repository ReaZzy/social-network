(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{295:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(51),o=a(52),l=a(54),r=a(53),s=a(11),c=a(0),u=a.n(c),i=a(14),m=function(e){var t=function(t){Object(l.a)(c,t);var a=Object(r.a)(c);function c(){return Object(n.a)(this,c),a.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(s.a,{to:"/login"})}}]),c}(u.a.Component);return Object(i.b)(p)(t)},p=function(e){return{isAuth:e.auth.isAuth}}},297:function(e,t,a){e.exports={textarea:"Posts_textarea__GKj3r",cominput:"Posts_cominput__BMiSf",text:"Posts_text__1PTc8"}},304:function(e,t,a){e.exports={content:"Profile_content__lT-26"}},305:function(e,t,a){e.exports={content:"ProfileInfo_content__1DCnB",pic:"ProfileInfo_pic__2j4Tv",text:"ProfileInfo_text__22XSw",inputPhoto:"ProfileInfo_inputPhoto__119TB",summary:"ProfileInfo_summary__2LNG1",unselectable:"ProfileInfo_unselectable__NnFUj",upload:"ProfileInfo_upload__117_9",button:"ProfileInfo_button__26ISU"}},306:function(e,t,a){e.exports={form:"ProfileDataForm_form__1pdeO",save:"ProfileDataForm_save__1A9DV"}},311:function(e,t,a){"use strict";a.r(t);var n=a(51),o=a(52),l=a(54),r=a(53),s=a(0),c=a.n(s),u=a(304),i=a.n(u),m=a(96),p=a(305),f=a.n(p),b=a(56),d=a(55),h=a.n(d),E=function(e){var t=e.statusProps,a=e.updateStatus,n=Object(s.useState)(!1),o=Object(m.a)(n,2),l=o[0],r=o[1],u=Object(s.useState)(t),i=Object(m.a)(u,2),p=i[0],f=i[1];Object(s.useEffect)((function(){f(t)}),[t]);return c.a.createElement(c.a.Fragment,null,!l&&c.a.createElement("span",{onDoubleClick:function(){r(!0)}},c.a.createElement("b",null,"Status"),": ",null!==t?t:"\u200e"),l&&c.a.createElement("span",null,c.a.createElement("b",null,"Status"),":",c.a.createElement("input",{autoFocus:!0,onBlur:function(){r(!1),a(p)},onChange:function(e){f(e.target.value)},value:p})))},v=a(129),g=a(130),_=a(58),P=a(57),I=a(306),O=a.n(I),j=Object(P.b)(1),N=Object(P.a)(60),S=Object(P.a)(150),k=Object(g.a)({form:"profileData"})((function(e){var t=e.handleSubmit,a=e.error;return c.a.createElement("form",{onSubmit:t,className:O.a.form},c.a.createElement("label",null,"Full name"),c.a.createElement(v.a,{placeholder:"Full name",component:_.b,name:"fullName",validate:[j,N]}),c.a.createElement("label",null,"Instagram"),c.a.createElement(v.a,{placeholder:"Instagram",component:_.b,name:"contacts.instagram"}),c.a.createElement("label",null,"lookingForAJob "),c.a.createElement(v.a,{placeholder:"lookingForAJob",type:"checkbox",component:"input",name:"lookingForAJob"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("label",null,"Description"),c.a.createElement(v.a,{placeholder:"Description",component:_.d,name:"lookingForAJobDescription",validate:[j,S]}),c.a.createElement("label",null,"About me "),c.a.createElement(v.a,{placeholder:"About me",component:_.b,name:"aboutMe",validate:[j,S]}),c.a.createElement("button",{className:O.a.save},"Save"),a&&c.a.createElement("div",null,a))})),y=function(e){var t=e.profileInfo,a=e.status,n=e.savePhoto,o=e.saveProfile,l=e.isOwner,r=(e.isAuth,e.updateStatus),u=(e.userId,e.photoLoading),i=Object(s.useState)(!1),p=Object(m.a)(i,2),d=p[0],v=p[1];if(!t)return c.a.createElement(b.a,null);return u?c.a.createElement(b.a,null):c.a.createElement("div",null,c.a.createElement("img",{className:f.a.pic,src:null!==t.photos.large?t.photos.large:h.a,width:"160px",alt:""}),l&&c.a.createElement(c.a.Fragment,null,c.a.createElement("details",{className:f.a.upload},c.a.createElement("summary",{className:f.a.unselectable+" "+f.a.summary},"Edit"),c.a.createElement("button",{className:f.a.button,onClick:function(){v(!d)}},d?c.a.createElement("span",null,"Cancel"):c.a.createElement("span",null,"Edit profile")),d&&c.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&n(e.target.files[0])},className:f.a.inputPhoto}))),d?c.a.createElement(k,{onSubmit:function(e){o(e,t.userId).then((function(){v(!1)}))},initialValues:t}):c.a.createElement("div",{className:f.a.text},c.a.createElement("h2",null,null!==t.fullName?t.fullName:"\u200e"),c.a.createElement(E,{statusProps:a,updateStatus:r}),c.a.createElement("br",null),c.a.createElement("b",null,"Instagram")," : ",null!==t.contacts.instagram?t.contacts.instagram:"\u200e",c.a.createElement("br",null),c.a.createElement("b",null,"Looking for a job")," : ",t.lookingForAJob?c.a.createElement("span",null,"\u2611"):c.a.createElement("span",null,"\u2612"),c.a.createElement("br",null),c.a.createElement("b",null,"Description")," : ",null!==t.lookingForAJobDescription?c.a.createElement("span",null,t.lookingForAJobDescription):" ",c.a.createElement("br",null),c.a.createElement("b",null,"About me"),": ",null!==t.aboutMe?t.aboutMe:"\u200e",c.a.createElement("br",null)))},A=a(59),x=a(70),F=a(297),D=a.n(F),L=a(13),w=function(e){var t=e.author_image,a=e.author,n=e.date,o=e.text,l=e.like_count;return c.a.createElement("div",{className:"comment"},c.a.createElement(L.b,{className:"avatar",to:"/#"},c.a.createElement("img",{src:t,alt:""})),c.a.createElement("div",{className:"content"},c.a.createElement(L.b,{className:"author",to:"/#"},a),c.a.createElement("div",{className:"metadata"},c.a.createElement("span",{className:"date"},n)),c.a.createElement("div",{className:"text"},o),c.a.createElement("div",{className:"actions"},c.a.createElement(L.b,{className:"reply",to:"/#"},"Reply"),c.a.createElement(L.b,{className:"reply",to:"/#"},l," Likes"))))},J=Object(P.b)(1),C=Object(P.a)(300),M=Object(g.a)({form:"postForm"})((function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t},c.a.createElement(v.a,{component:_.d,name:"postMessage",className:D.a.textarea,rows:"3",cols:"110",validate:[P.c,J,C]}),c.a.createElement("p",{className:D.a.cominput},c.a.createElement("button",{className:"ui tiny primary button unselectable"},"Save")))})),G=c.a.memo((function(e){var t=e.data,a=e.addPost,n=Object(x.a)(t).reverse().map((function(e){return c.a.createElement(w,{id:e.id,key:e.id,author_image:e.author_image,author:e.author,text:e.text,date:e.date,like_count:e.like_count})}));return c.a.createElement("div",{className:D.a.content},c.a.createElement("h3",{className:D.a.text},"Leave your comment here"),c.a.createElement(M,{onSubmit:function(e){a(e.postMessage),e.postMessage=""}}),c.a.createElement("div",{className:"ui comments"},n))})),B=a(14),T=Object(B.b)((function(e){return{data:e.profilePage.postData}}),{addPost:A.a})(G),U=function(e){var t=e.savePhoto,a=e.photoLoading,n=e.saveProfile,o=e.isOwner,l=e.profileInfo,r=e.status,s=e.updateStatus,u=e.isAuth,m=e.userId;return c.a.createElement("div",{className:i.a.content},c.a.createElement(y,{savePhoto:t,photoLoading:a,saveProfile:n,isOwner:o,profileInfo:l,userId:m,status:r,updateStatus:s,isAuth:u}),c.a.createElement(T,null))},V=a(11),K=a(295),R=a(8),X=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).reGetProfile=function(){var t=e.props.match.params.userId;e.props.isAuth&&!t&&(t=e.props.userId),e.props.getProfile(t),e.props.getStatus(t)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.reGetProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.reGetProfile()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(U,Object.assign({},this.props,{isOwner:!this.props.match.params.userId||this.props.userId==this.props.match.params.userId,savePhoto:this.props.savePhoto,profileInfo:this.props.profileInfo,status:this.props.status,updateStatus:this.props.updateStatus,photoLoading:this.props.photoLoading,saveProfile:this.props.saveProfile})))}}]),a}(c.a.Component);t.default=Object(R.d)(Object(B.b)((function(e){return{profileInfo:e.profilePage.profileInfo,status:e.profilePage.status,isAuth:e.auth.isAuth,userId:e.auth.id,photoLoading:e.profilePage.photoLoading,profileInfoLoading:e.profilePage.profileInfoLoading}}),{getProfile:A.c,getStatus:A.d,updateStatus:A.g,savePhoto:A.e,saveProfile:A.f}),V.g,K.a)(X)}}]);
//# sourceMappingURL=3.c4985fbc.chunk.js.map