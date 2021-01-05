(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),o=n.n(i),s=n(17),c=n.n(s),r=n(8),u=(n(29),n(30),n(21)),l=n(2),p=n(3),d=n.p+"static/media/logo.a307e1c4.svg";var j=function(e){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:d,className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0435\u0440\u0432\u0438\u0441\u0430"}),Object(a.jsxs)("div",{className:"header__info-container",children:[Object(a.jsx)("p",{className:"header__user-login",children:e.userLogin}),Object(a.jsx)(r.b,{className:"header__navlink ".concat(e.isLoggedIn?"header__navlink_logged-in":""),to:e.navlinkPath,children:e.navlinkText})]})]})},m=n(22),b=n(23);function f(e){var t=e.component,n=Object(b.a)(e,["component"]);return Object(a.jsx)(p.b,{children:n.isLoggedIn?Object(a.jsx)(t,Object(m.a)({},n)):Object(a.jsx)(p.a,{to:"/signin"})})}var _=o.a.createContext();var h=function(e){var t=e.card,n=o.a.useContext(_),i=t.owner._id===n._id,s="element__trash-button ".concat(i?"":"element__trash-button_hidden"),c=t.likes.some((function(e){return e._id===n._id})),r="element__like-button ".concat(c?"element__like-button_active":"");return Object(a.jsxs)("li",{className:"element",children:[Object(a.jsx)("img",{className:"element__image",alt:t.name,src:t.link,onClick:function(){e.onCardClick(t)}}),Object(a.jsxs)("div",{className:"element__title-container",children:[Object(a.jsx)("h2",{className:"element__title",children:t.name}),Object(a.jsxs)("div",{className:"element__likes-container",children:[Object(a.jsx)("button",{type:"button",className:r,onClick:function(){e.onCardLike(t)}}),Object(a.jsx)("p",{className:"element__likes-count",children:t.likes.length})]})]}),Object(a.jsx)("button",{type:"button",className:s,onClick:function(){e.onCardDelete(t)}})]})};var O=function(e){var t=o.a.useContext(_);return Object(i.useEffect)((function(){return e.setHeaderNavlinkData("/signin","\u0412\u044b\u0439\u0442\u0438"),e.setHeaderUserLogin("Pidor"),function(){e.setHeaderUserLogin(""),e.setHeaderNavlinkData("/","")}})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar-container",children:[Object(a.jsx)("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar",src:t.avatar}),Object(a.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__edit-button profile__edit-button_type_avatar"})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__title-container",children:[Object(a.jsx)("h1",{className:"profile__title",children:t.name}),Object(a.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button profile__edit-button_type_profile"})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(a.jsx)("button",{onClick:e.onAddCard,type:"button",className:"profile__add-button"})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__list",children:e.cards.map((function(t){return Object(a.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};function v(e){return Object(a.jsxs)("form",{name:e.name,className:"form",onSubmit:e.onSubmit,children:[Object(a.jsx)("h2",{className:"form__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"form__submit-button",children:e.isLoading?e.buttonLoadingText:e.buttonText})]})}function x(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],c=Object(i.useState)(""),r=Object(l.a)(c,2),u=r[0],p=r[1];return Object(i.useEffect)((function(){return e.setHeaderNavlinkData("/signup","\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),function(){e.setHeaderNavlinkData("/","")}})),Object(a.jsx)("div",{className:"auth",children:Object(a.jsx)(v,{name:"login",onSubmit:e.onSubmit,title:"\u0412\u0445\u043e\u0434",isLoading:e.isLoading,buttonLoadingText:"\u0412\u0445\u043e\u0434...",buttonText:"\u0412\u043e\u0439\u0442\u0438",children:Object(a.jsxs)("fieldset",{className:"form__info",children:[Object(a.jsx)("input",{value:o||"",onChange:function(e){s(e.target.value)},name:"email-input",type:"email",className:"form__input form__input_type_email",placeholder:"Email",required:!0,maxLength:"50"}),Object(a.jsx)("span",{className:"form__input-error",id:"email-input-error"}),Object(a.jsx)("input",{value:u||"",onChange:function(e){p(e.target.value)},name:"password-input",type:"password",className:"form__input form__input_type_password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8",maxLength:"100"}),Object(a.jsx)("span",{className:"form__input-error",id:"password-input-error"})]})})})}function g(e){var t=Object(i.useState)(""),n=Object(l.a)(t,2),o=n[0],s=n[1],c=Object(i.useState)(""),u=Object(l.a)(c,2),p=u[0],d=u[1];return Object(i.useEffect)((function(){return e.setHeaderNavlinkData("/signin","\u0412\u043e\u0439\u0442\u0438"),function(){e.setHeaderNavlinkData("/","")}})),Object(a.jsxs)("div",{className:"auth",children:[Object(a.jsx)(v,{name:"register",onSubmit:e.onSubmit,title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",isLoading:e.isLoading,buttonLoadingText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f...",buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",children:Object(a.jsxs)("fieldset",{className:"form__info",children:[Object(a.jsx)("input",{value:o||"",onChange:function(e){s(e.target.value)},name:"email-input",type:"email",className:"form__input form__input_type_email",placeholder:"Email",required:!0,maxLength:"50"}),Object(a.jsx)("span",{className:"form__input-error",id:"email-input-error"}),Object(a.jsx)("input",{value:p||"",onChange:function(e){d(e.target.value)},name:"password-input",type:"password",className:"form__input form__input_type_password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8",maxLength:"100"}),Object(a.jsx)("span",{className:"form__input-error",id:"password-input-error"})]})}),Object(a.jsxs)("p",{className:"auth__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(a.jsx)(r.b,{to:"/signin",className:"auth__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}var L=function(){var e=(new Date).getFullYear();return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__copyright",lang:"en",children:["\xa9 ",e," Mesto Russia"]})})};var N=function(e){var t=o.a.useRef();return Object(a.jsx)("div",{ref:t,onClick:function(){e.onLayout(t.current)},className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("form",{name:e.name,className:"popup__form",noValidate:!0,onSubmit:e.onSubmit,children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__submit-button",children:e.isLoading?e.buttonLoadingText:e.buttonText}),Object(a.jsx)("button",{onClick:e.onClose,type:"reset",className:"popup__close-button"})]})})};var y=function(e){var t=o.a.useRef();return o.a.useEffect((function(){return t.current.value="",e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)(N,{onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},onClose:e.onClose,onLayout:e.onLayout,name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,isLoading:e.isLoading,buttonText:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",buttonLoadingText:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435...",children:Object(a.jsxs)("fieldset",{className:"popup__info",children:[Object(a.jsx)("input",{ref:t,name:"avatar-input",type:"url",className:"popup__input popup__input_type_avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"avatar-input-error"})]})})};var k=function(e){var t=o.a.useContext(_),n=o.a.useState(""),i=Object(l.a)(n,2),s=i[0],c=i[1],r=o.a.useState(""),u=Object(l.a)(r,2),p=u[0],d=u[1];return o.a.useEffect((function(){c(t.name),d(t.about)}),[t,e.isOpen]),o.a.useEffect((function(){return e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)(N,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},onClose:e.onClose,onLayout:e.onLayout,name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",isOpen:e.isOpen,isLoading:e.isLoading,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",buttonLoadingText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",children:Object(a.jsxs)("fieldset",{className:"popup__info",children:[Object(a.jsx)("input",{value:s||"",onChange:function(e){c(e.target.value)},name:"name-input",type:"text",className:"popup__input popup__input_type_name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(a.jsx)("input",{value:p||"",onChange:function(e){d(e.target.value)},name:"job-input",type:"text",className:"popup__input popup__input_type_job",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",required:!0,minLength:"2",maxLength:"200"}),Object(a.jsx)("span",{className:"popup__input-error",id:"job-input-error"})]})})};var C=function(e){var t=o.a.useState(""),n=Object(l.a)(t,2),i=n[0],s=n[1],c=o.a.useState(""),r=Object(l.a)(c,2),u=r[0],p=r[1];return o.a.useEffect((function(){return s(""),p(""),e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)(N,{onSubmit:function(t){t.preventDefault(),e.onAddCard({name:i,link:u})},onClose:e.onClose,onLayout:e.onLayout,name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,isLoading:e.isLoading,buttonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",buttonLoadingText:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435...",children:Object(a.jsxs)("fieldset",{className:"popup__info",children:[Object(a.jsx)("input",{value:i||"",onChange:function(e){s(e.target.value)},name:"place-input",type:"text",className:"popup__input popup__input_type_place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30"}),Object(a.jsx)("span",{className:"popup__input-error",id:"place-input-error"}),Object(a.jsx)("input",{value:u||"",onChange:function(e){p(e.target.value)},name:"link-input",type:"url",className:"popup__input popup__input_type_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})})};var E=function(e){var t=e.card,n=o.a.useRef();return o.a.useEffect((function(){return e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)("div",{ref:n,onClick:function(){e.onLayout(n.current)},className:"popup popup_type_image ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(a.jsx)("p",{className:"popup__subtitle",children:t.name}),Object(a.jsx)("button",{onClick:e.onClose,type:"reset",className:"popup__close-button"})]})})};var S=function(e){return o.a.useEffect((function(){return e.isOpen&&document.addEventListener("keyup",e.onEscape),function(){document.removeEventListener("keyup",e.onEscape)}}),[e]),Object(a.jsx)(N,{onSubmit:function(t){t.preventDefault(),e.onConfirm(e.card)},onClose:e.onClose,onLayout:e.onLayout,name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,isLoading:e.isLoading,buttonText:"\u0414\u0430",buttonLoadingText:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."})},T=n(19),D=n(20),P=new(function(){function e(t){Object(T.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(D.a)(e,[{key:"_handlePromiseRes",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._handlePromiseRes(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._handlePromiseRes(t)}))}},{key:"patchUserProfile",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:a})}).then((function(e){return t._handlePromiseRes(e)}))}},{key:"patchUserAvatar",value:function(e){var t=this,n=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:n})}).then((function(e){return t._handlePromiseRes(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return t._handlePromiseRes(e)}))}},{key:"deleteCard",value:function(e){var t=this,n=e._id;return fetch("".concat(this._url,"/cards/").concat(n),{method:"DELETE",headers:this._headers}).then((function(e){return t._handlePromiseRes(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this,a=e._id;return fetch("".concat(this._url,"/cards/likes/").concat(a),{method:t,headers:this._headers}).then((function(e){return n._handlePromiseRes(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"9dad3ee9-138f-48bd-8014-b648376a609a","Content-Type":"application/json"}});var w=function(){var e=Object(p.g)(),t=Object(i.useState)(!0),n=Object(l.a)(t,2),o=n[0],s=(n[1],Object(i.useState)({})),c=Object(l.a)(s,2),r=c[0],d=c[1],m=Object(i.useState)(!1),b=Object(l.a)(m,2),h=b[0],v=b[1],N=Object(i.useState)(!1),T=Object(l.a)(N,2),D=T[0],w=T[1],U=Object(i.useState)(!1),H=Object(l.a)(U,2),A=H[0],R=H[1],q=Object(i.useState)(!1),F=Object(l.a)(q,2),I=F[0],J=F[1],M=Object(i.useState)(!1),z=Object(l.a)(M,2),B=z[0],V=z[1],Y=Object(i.useState)(Object(a.jsx)(a.Fragment,{})),G=Object(l.a)(Y,2),K=G[0],Q=G[1],W=Object(i.useState)([]),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=Object(i.useState)(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1];function ie(e){e.addEventListener("mousedown",(function(e){e.target===e.currentTarget&&se()}))}function oe(e){"Escape"===e.key&&se()}function se(){v(!1),w(!1),R(!1),J(!1),V(!1)}Object(i.useEffect)((function(){P.getUserData().then((function(e){d(e)})).catch((function(e){console.log(e)}))}),[]),Object(i.useEffect)((function(){P.getInitialCards().then((function(e){$(e)})).catch((function(e){console.log(e)}))}),[]);var ce=Object(i.useState)("/"),re=Object(l.a)(ce,2),ue=re[0],le=re[1],pe=Object(i.useState)(""),de=Object(l.a)(pe,2),je=de[0],me=de[1],be=Object(i.useState)(""),fe=Object(l.a)(be,2),_e=fe[0],he=fe[1];function Oe(e,t){le(e),me(t)}return Object(a.jsxs)(_.Provider,{value:r,children:[Object(a.jsx)(j,{isLoggedIn:o,userLogin:_e,navlinkPath:ue,navlinkText:je}),Object(a.jsx)("main",{className:"main",children:Object(a.jsxs)(p.d,{children:[Object(a.jsx)(f,{exact:!0,path:"/",isLoggedIn:o,setHeaderNavlinkData:Oe,setHeaderUserLogin:he,component:O,onEditAvatar:function(){v(!0)},onEditProfile:function(){w(!0)},onAddCard:function(){R(!0)},onCardClick:function(e){J(!0),Q(e)},cards:Z,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===r._id}));P.changeLikeCardStatus({_id:e._id},t?"DELETE":"PUT").then((function(t){var n=Z.map((function(n){return n._id===e._id?t:n}));$(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){V(!0),Q(e)}}),Object(a.jsx)(p.b,{path:"/signin",children:Object(a.jsx)(x,{isLoading:ne,onSubmit:function(t){t.preventDefault(),e.push("/")},setHeaderNavlinkData:Oe})}),Object(a.jsx)(p.b,{path:"/signup",children:Object(a.jsx)(g,{isLoading:ne,onSubmit:function(t){t.preventDefault(),e.push("/signin")},setHeaderNavlinkData:Oe})}),Object(a.jsx)(p.b,{path:"*",children:Object(a.jsx)(p.a,{to:"/"})})]})}),Object(a.jsx)(L,{}),Object(a.jsx)(E,{isOpen:I,onClose:se,card:K,onLayout:ie,onEscape:oe}),Object(a.jsx)(y,{isOpen:h,onClose:se,onUpdateAvatar:function(e){var t=e.avatar;ae(!0),P.patchUserAvatar({avatar:t}).then((function(e){d(e),se()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},onLayout:ie,onEscape:oe,isLoading:ne}),Object(a.jsx)(k,{isOpen:D,onClose:se,onUpdateUser:function(e){var t=e.name,n=e.about;ae(!0),P.patchUserProfile({name:t,about:n}).then((function(e){d(e),se()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},onLayout:ie,onEscape:oe,isLoading:ne}),Object(a.jsx)(C,{isOpen:A,onClose:se,onAddCard:function(e){var t=e.name,n=e.link;ae(!0),P.addNewCard({name:t,link:n}).then((function(e){$([e].concat(Object(u.a)(Z))),se()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},onLayout:ie,onEscape:oe,isLoading:ne}),Object(a.jsx)(S,{card:K,onConfirm:function(e){ae(!0),P.deleteCard({_id:e._id}).then((function(){var t=Z.filter((function(t){return t._id!==e._id}));$(t),se()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},isOpen:B,onClose:se,onLayout:ie,onEscape:oe,isLoading:ne})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(r.a,{basename:"/react-mesto-auth",children:Object(a.jsx)(w,{})})}),document.querySelector(".page")),U()}},[[39,1,2]]]);
//# sourceMappingURL=main.4c167124.chunk.js.map