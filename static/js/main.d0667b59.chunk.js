(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{100:function(e,t,a){e.exports={container:"FilterForm_container__2V2Rn",keywords_wrapper:"FilterForm_keywords_wrapper__1QzGA"}},102:function(e,t,a){e.exports={nav:"Header_nav__1zPaZ",header_background:"Header_header_background__H6mRO",title:"Header_title__3sMWz"}},111:function(e,t,a){e.exports={container:"Filter_container__VYYXu",filter_overlay:"Filter_filter_overlay__3d13y"}},133:function(e,t,a){e.exports={container:"CharacterList_container__1Ckux"}},134:function(e,t,a){e.exports={main:"Main_main__15Qdr"}},149:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a(42),s=a.n(c),i=(a(149),a(40)),o=a(78),l=a(5),d=a(230),u=a(10),j=a(12),p=a.n(j),b=a(68),C=a(21),h=a(226),x=a(232),f=a(233),m=a(80),_=a.n(m),O=a(111),g=a.n(O),v={backgroundColor:"#F5F5F5",outline:"black",width:"154px",height:"57px",padding:"0 12px 0",fontFamily:"inherit",borderRadius:"4px",fontSize:"16px",fontWeight:"500",lineHeight:"24px",color:"#272B33"},w=a(136),y=a(220),N=a(114),k=a(100),A=a.n(k),F=function(){return Object(o.b)()},S=o.c,E=a(53),P=Object(E.c)({name:"filters",initialState:{character:null},reducers:{set:function(e,t){e.character=t.payload},clear:function(e){e.character=null}}}),L=P.reducer,D=P.actions,I=D.set,U=D.clear,T=Object(E.c)({name:"history",initialState:{data:[]},reducers:{set:function(e,t){e.data=t.payload},add:function(e,t){e.data.push(t.payload)},clear:function(e){e.data=[]}}}),R=T.reducer,M=T.actions,V=M.add,J=M.set,q=(M.clear,a(1)),H=function(){var e=S((function(e){return e.filters})).character,t=F(),a={name:(null===e||void 0===e?void 0:e.name)||"",status:(null===e||void 0===e?void 0:e.status)||"",species:(null===e||void 0===e?void 0:e.species)||"",type:(null===e||void 0===e?void 0:e.type)||"",gender:(null===e||void 0===e?void 0:e.gender)||""},n=N.b().matches(/^[A-Za-z0-9\s-]+$/,{message:"Only digits, characters, spaces, and hyphens are allowed",excludeEmptyString:!0}),r=N.a().shape({name:n,status:n,species:n,type:n,gender:n}),c=Object(w.a)({initialValues:a,validationSchema:r,onSubmit:function(e){var a=Object.entries(e).reduce((function(e,t){var a=Object(l.a)(t,2),n=a[0],r=a[1];return r&&(e[n]=r),e}),{});t(V(a)),t(I(a))}});return Object(q.jsx)("div",{className:A.a.container,children:Object(q.jsxs)("form",{onSubmit:c.handleSubmit,className:A.a.container,children:[Object(q.jsx)("div",{className:A.a.keywords_wrapper,children:Object.entries(c.values).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(q.jsx)(y.a,{name:a,label:a,variant:"filled",value:n,onChange:c.handleChange,onBlur:c.handleBlur,error:c.touched[a]&&Boolean(c.errors[a]),helperText:c.touched[a]&&c.errors[a],InputProps:{style:{background:"#F5F5F5"}}},a)}))}),Object(q.jsx)(h.a,{sx:v,variant:"outlined",type:"submit",children:"Find"})]})})},Q=function(e){var t=e.onBgClick,a=F();return Object(q.jsxs)("section",{className:g.a.container,children:[Object(q.jsx)("div",{onClick:function(){return t(!1)},className:g.a.filter_overlay}),Object(q.jsx)(h.a,{sx:v,variant:"outlined",onClick:function(){a(U())},children:"Remove Filter"}),Object(q.jsx)(H,{})]})},K=a(39),Z=a.n(K),B=function(e){return Number(e.split("/").pop())||-1},G=a(221).a.create({baseURL:"https://rickandmortyapi.com/api"}),z=function(){var e=Object(C.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("episode/".concat(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};!function(e){e.Unknown="Unknown",e.Alive="Alive",e.Dead="Dead"}(n||(n={}));var X=a(81),W=a.n(X),$=function(e){var t="";switch(e.status){case n.Unknown:t="".concat(W.a.grey);break;case n.Alive:t="".concat(W.a.green);break;case n.Dead:t="".concat(W.a.red);break;default:throw new Error("wrong status")}return Object(q.jsx)("span",{className:"".concat(W.a.container," ").concat(t)})},ee=function(e){var t=e.character,a=t.id,n=t.name,c=t.status,s=t.species,o=t.location,d=t.image,u=t.episode,j=Y(c),b=Object(r.useState)(""),h=Object(l.a)(b,2),x=h[0],f=h[1],m=function(){var e=Object(C.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B(u[0]),e.next=3,z(t);case 3:a=e.sent,f(a.name);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){m()}),[]),Object(q.jsxs)("div",{className:Z.a.container,children:[Object(q.jsx)("div",{className:Z.a.image_wrapper,children:Object(q.jsx)("img",{src:d,alt:n,className:Z.a.image})}),Object(q.jsxs)("div",{className:Z.a.info_wrapper,children:[Object(q.jsxs)("div",{className:Z.a.info,children:[Object(q.jsx)("h2",{className:Z.a.title,children:Object(q.jsx)(i.b,{to:"/details/".concat(a),children:n})}),Object(q.jsxs)("p",{className:Z.a.status_text,children:[Object(q.jsx)($,{status:j}),"".concat(j," - ").concat(s)]})]}),Object(q.jsxs)("div",{className:Z.a.info,children:[Object(q.jsx)("p",{className:Z.a.text_gray,children:"Last known location:"}),Object(q.jsx)("p",{className:Z.a.text,children:o.name})]}),Object(q.jsxs)("div",{className:Z.a.info,children:[Object(q.jsx)("p",{className:Z.a.text_gray,children:"First seen in:"}),Object(q.jsx)("p",{className:Z.a.text,children:x})]})]})]})},te=a(133),ae=a.n(te),ne=function(e){var t=e.characters;return Object(q.jsx)("section",{className:ae.a.container,children:t.map((function(e){return Object(q.jsx)(ee,{character:e},e.id)}))})},re=a(229),ce=a(224);function se(e,t){var a=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];null===r?a.delete(n):Array.isArray(r)?(a.delete(n),r.forEach((function(e){a.append(n,e)}))):a.set(n,r)})),a.toString()}var ie=function(e){var t=e.pageCount,a=e.currentPage,n=Object(i.c)(),r=Object(l.a)(n,1)[0],c=Object(u.o)();return Object(q.jsx)(re.a,{spacing:2,sx:{margin:"32px 0 16px",alignSelf:"center"},children:Object(q.jsx)(ce.a,{sx:{"& .MuiPaginationItem-root":{background:"#3C3E44",color:"#F5F5F5"},"& .MuiPaginationItem-ellipsis":{borderRadius:"4px",height:"32px",lineHeight:"2"},"& .MuiPaginationItem-root.Mui-selected":{background:"#F5F5F5",color:"#202329"}},count:t,page:a,onChange:function(e,t){var a={page:t.toString()};c({search:se(r,a)}),window.scrollTo(0,0)},variant:"outlined",shape:"rounded"})})},oe=function(e){var t="";return Object.entries(e).forEach((function(e,a,n){var r=Object(l.a)(e,2),c=r[0],s=r[1];0===a&&(t+="?"),t+="".concat(c,"=").concat(s),a!==n.length&&(t+="&")})),t},le=function(){var e=Object(C.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=oe(t),e.abrupt("return",G.get("character".concat(a)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=Object(E.b)("characters/fetch",(function(e){return le(e)})),ue=Object(E.c)({name:"character",initialState:{data:null,loading:!1,error:""},reducers:{clear:function(e){e.data=null}},extraReducers:function(e){e.addCase(de.pending,(function(e){e.loading=!0})),e.addCase(de.fulfilled,(function(e,t){e.data=t.payload.data,e.loading=!1})),e.addCase(de.rejected,(function(e){e.loading=!1,e.error="Error"}))}}),je=ue.reducer,pe=ue.actions.clear,be=function(){var e=Object(i.c)(),t=Object(l.a)(e,1)[0],a=Object(r.useState)(!1),n=Object(l.a)(a,2),c=n[0],s=n[1],o=S((function(e){return e})),d=o.characters,u=o.filters,j=d.data,m=d.loading,O=d.error,g=u.character,w=F(),y=j?Math.ceil(j.info.count/20):0,N=function(e,t){var a=Number(e.get("page"));return(a<=0||a>t||Number.isNaN(a))&&(a=1),a}(t,y),k=function(e){s(e)},A=function(){var e=Object(C.a)(p.a.mark((function e(){var t,a,n=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:N,a=g||{},w(pe()),w(de(Object(b.a)({page:t},a)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){A()}),[t]),Object(r.useEffect)((function(){A(1)}),[g]),Object(q.jsxs)("div",{className:_.a.container,children:[c?Object(q.jsx)(Q,{onBgClick:k}):Object(q.jsx)(h.a,{sx:Object(b.a)(Object(b.a)({},v),{},{position:"absolute",top:"40px",left:"118px"}),variant:"outlined",onClick:function(){return k(!0)},children:"Filter"}),!j&&!m&&O&&Object(q.jsx)("p",{className:_.a.error,children:"Error on loading"}),!j&&m&&!O&&Object(q.jsx)(x.a,{sx:{display:"flex",margin:"50px"},children:Object(q.jsx)(f.a,{size:"8rem"})}),j&&!m&&!O&&Object(q.jsxs)("div",{className:_.a.page_items_wrapper,children:[Object(q.jsx)(ne,{characters:j.results}),Object(q.jsx)(ie,{pageCount:y,currentPage:N})]}),j&&!m&&!O&&!j.results.length&&Object(q.jsx)("p",{className:_.a.error,children:"Cant find any fitting characters"})]})},Ce=a(34),he=a.n(Ce),xe=function(){var e=S((function(e){return e.characters})).data,t=F(),a=Object(r.useState)(null),n=Object(l.a)(a,2),c=n[0],s=n[1],i=Object(r.useState)([]),o=Object(l.a)(i,2),d=o[0],j=o[1],b=Object(u.q)().id,h=Y((null===c||void 0===c?void 0:c.status)||""),x=function(){var e=Object(C.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=6;break}return t=c.episode.map(function(){var e=Object(C.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=B(t),e.abrupt("return",z(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(t);case 4:a=e.sent,j(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(e&&b){var a=e.results.find((function(e){return+b===e.id}))||null;t(V((null===a||void 0===a?void 0:a.name)||"")),s(a)}}),[]),Object(r.useEffect)((function(){x()}),[c]),Object(q.jsx)("div",{className:he.a.container,children:c&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:he.a.image_wrapper,children:Object(q.jsx)("img",{src:c.image,alt:c.name,className:he.a.image})}),Object(q.jsxs)("div",{className:he.a.info_wrapper,children:[Object(q.jsxs)("div",{className:he.a.info,children:[Object(q.jsx)("h2",{className:he.a.title,children:c.name}),Object(q.jsxs)("p",{className:he.a.status_text,children:[Object(q.jsx)($,{status:h}),"".concat(h," - ").concat(c.species)]})]}),Object(q.jsxs)("div",{className:he.a.info,children:[Object(q.jsx)("p",{className:he.a.text_gray,children:"Last known location:"}),Object(q.jsx)("p",{className:he.a.text,children:c.location.name})]}),!!d.length&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("div",{className:he.a.info,children:[Object(q.jsx)("p",{className:he.a.text_gray,children:"First apperence in:"}),Object(q.jsx)("p",{className:he.a.text,children:!!d.length&&d[0].episode})]}),Object(q.jsxs)("div",{className:he.a.info,children:[Object(q.jsx)("p",{className:he.a.text_gray,children:"Appeared in episodes:"}),Object(q.jsx)("p",{className:he.a.text,children:d.map((function(e){return e.name})).join(", ")})]})]})]})]})})},fe=a(134),me=a.n(fe),_e=function(){return Object(q.jsx)("main",{className:me.a.main,children:Object(q.jsxs)(u.c,{children:[Object(q.jsx)(u.a,{path:"/",element:Object(q.jsx)(be,{})}),Object(q.jsx)(u.a,{path:"/details/:id",element:Object(q.jsx)(xe,{})})]})})},Oe=a(64),ge=a.n(Oe),ve=a.p+"static/media/logo_bg.9db75b1d.png",we=function(){return Object(q.jsxs)("svg",{width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(q.jsx)("g",{clipPath:"url(#clip0_101_549)",children:Object(q.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 0.25C4.0275 0.25 0 4.37937 0 9.47764C0 13.5609 2.57625 17.0097 6.15375 18.2324C6.60375 18.3131 6.7725 18.0363 6.7725 17.7941C6.7725 17.5749 6.76125 16.8482 6.76125 16.0754C4.5 16.5022 3.915 15.5102 3.735 14.9912C3.63375 14.7259 3.195 13.9069 2.8125 13.6878C2.4975 13.5147 2.0475 13.088 2.80125 13.0764C3.51 13.0649 4.01625 13.7454 4.185 14.0223C4.995 15.4179 6.28875 15.0258 6.80625 14.7835C6.885 14.1837 7.12125 13.78 7.38 13.5493C5.3775 13.3187 3.285 12.5228 3.285 8.99319C3.285 7.98969 3.63375 7.1592 4.2075 6.51326C4.1175 6.28257 3.8025 5.33674 4.2975 4.06794C4.2975 4.06794 5.05125 3.82571 6.7725 5.01377C7.4925 4.80615 8.2575 4.70234 9.0225 4.70234C9.7875 4.70234 10.5525 4.80615 11.2725 5.01377C12.9938 3.81418 13.7475 4.06794 13.7475 4.06794C14.2425 5.33674 13.9275 6.28257 13.8375 6.51326C14.4113 7.1592 14.76 7.97815 14.76 8.99319C14.76 12.5343 12.6562 13.3187 10.6538 13.5493C10.98 13.8377 11.2613 14.3914 11.2613 15.2565C11.2613 16.4907 11.25 17.4826 11.25 17.7941C11.25 18.0363 11.4187 18.3246 11.8688 18.2324C13.6554 17.614 15.2079 16.4366 16.3078 14.8662C17.4077 13.2957 17.9995 11.4111 18 9.47764C18 4.37937 13.9725 0.25 9 0.25Z",fill:"#9E9E9E"})}),Object(q.jsx)("defs",{children:Object(q.jsx)("clipPath",{id:"clip0_101_549",children:Object(q.jsx)("rect",{width:"18",height:"18",fill:"white",transform:"translate(0 0.25)"})})})]})},ye=function(){return Object(q.jsx)("svg",{width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(q.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.75 2.5C11.6183 2.5 10.7783 2.95818 10.1833 3.59091C9.58833 4.22364 9.27333 4.59455 9.25 4.68182C9.22667 4.59455 8.92333 4.22364 8.31667 3.59091C7.71 2.95818 6.95167 2.5 5.75 2.5C3.846 2.59382 2.30367 3.95418 2.25 5.77273C2.25 6.34 2.355 7.43091 3.03167 8.68545C3.70833 9.94 5.76167 11.8927 9.25 14.5C12.7267 11.8927 14.815 9.95091 15.48 8.68545C16.145 7.42 16.25 6.31818 16.25 5.77273C16.1952 3.92909 14.6843 2.59491 12.75 2.5Z",fill:"#9E9E9E"})})},Ne=function(){return Object(q.jsx)("svg",{width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(q.jsx)("path",{d:"M16.1498 5.67864C16.1612 5.84269 16.1612 6.00678 16.1612 6.17084C16.1612 11.1747 12.4493 16.9404 5.66499 16.9404C3.57488 16.9404 1.63326 16.3192 0 15.2412C0.296966 15.2763 0.582471 15.288 0.890863 15.288C2.61546 15.288 4.20305 14.6904 5.47083 13.6709C3.84899 13.6357 2.48985 12.5458 2.02156 11.0458C2.25001 11.081 2.47842 11.1044 2.71829 11.1044C3.0495 11.1044 3.38074 11.0575 3.6891 10.9755C1.99875 10.6239 0.730936 9.10052 0.730936 7.26067V7.21382C1.22204 7.49507 1.79315 7.67085 2.39844 7.69426C1.40478 7.01456 0.753788 5.85441 0.753788 4.5419C0.753788 3.83879 0.936496 3.19426 1.25631 2.63176C3.07232 4.92863 5.80203 6.42861 8.86293 6.5927C8.80583 6.31144 8.77155 6.01851 8.77155 5.72553C8.77155 3.63957 10.4162 1.94037 12.4607 1.94037C13.5228 1.94037 14.4822 2.3974 15.1561 3.13568C15.9898 2.97163 16.7893 2.6552 17.4975 2.22162C17.2233 3.10055 16.6409 3.83883 15.8756 4.30755C16.618 4.22555 17.3376 4.01457 18 3.72163C17.4975 4.4716 16.8693 5.13954 16.1498 5.67864Z",fill:"#9E9E9E"})})},ke=function(){return Object(q.jsxs)("footer",{className:ge.a.footer,children:[Object(q.jsxs)("p",{className:ge.a.text,children:["performed as part of a test case",Object(q.jsx)("br",{}),"for the company"]}),Object(q.jsxs)("div",{className:ge.a.image_wrapper,children:[Object(q.jsx)("img",{src:ve,alt:"Logo background",className:ge.a.logo_bg}),Object(q.jsx)("img",{src:"data:image/png;base64,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",alt:"Incode logo",className:ge.a.logo})]}),Object(q.jsxs)("div",{className:ge.a.social_links,children:[Object(q.jsx)(we,{}),Object(q.jsx)(ye,{}),Object(q.jsx)(Ne,{})]}),Object(q.jsx)("p",{className:ge.a.year,children:"2023"})]})},Ae=function(){return Object(q.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(q.jsx)("g",{clipPath:"url(#clip0_108_3202)",children:Object(q.jsx)("path",{d:"M17.6682 0.128414C13.1219 0.725412 9.16872 2.6159 6.00615 5.7157C3.27691 8.38688 1.44474 11.6091 0.52486 15.3595C0.129538 16.9745 -0.0073043 18.2144 0.000298047 20.0283C0.0079004 23.3194 0.6541 26.029 2.13656 29.0139C3.61902 31.9836 5.96054 34.6394 8.81904 36.5682C12.6354 39.1399 17.4781 40.3798 21.8494 39.8977C26.867 39.3389 30.8734 37.4484 34.2489 34.0272C38.8103 29.3966 40.7261 23.4114 39.753 16.7372C39.1904 12.8185 36.9477 8.50168 34.036 5.70805C31.284 3.07514 27.977 1.28414 24.3582 0.472836C22.2828 0.0136068 19.6144 -0.131816 17.6682 0.128414ZM22.4653 2.65418C27.9466 3.45782 32.7892 7.00154 35.298 12.0454C36.0582 13.5762 36.6056 15.3059 36.8793 17.005C37.0694 18.1838 37.0694 21.3448 36.8793 22.4393C36.3699 25.3324 35.336 27.7817 33.6027 30.1314C33.3138 30.5294 32.5612 31.3713 31.9378 31.9989L30.805 33.1317L30.8506 33.721L30.8962 34.3027L30.6758 33.4608C30.4173 32.4582 30.1892 31.8994 29.8547 31.4555C29.7179 31.2718 29.6038 31.0805 29.6038 31.0269C29.6114 30.981 29.8015 30.7973 30.0372 30.6289C30.4629 30.3227 31.0483 29.7027 31.3676 29.2129C31.4816 29.0522 31.6413 28.9221 31.801 28.8762C32.181 28.769 32.6144 28.3174 32.7132 27.927C32.8197 27.552 32.7816 27.376 32.5231 26.9857L32.3331 26.7101L32.5003 25.9524C32.6676 25.2023 32.6676 25.187 32.5383 24.0083C32.4699 23.3578 32.4167 22.7302 32.4167 22.623C32.4167 22.3551 31.8314 21.1764 31.3676 20.5258C30.5922 19.4237 30.3033 19.1634 29.1781 18.6124C27.8705 17.9618 27.3916 17.8546 26.0687 17.9082C24.9132 17.9542 23.9401 18.1761 23.0506 18.6047C22.1535 19.0334 21.1348 20.0513 20.1542 21.5132C19.8196 22.003 19.7968 22.0642 19.7968 22.5388C19.7968 22.9062 19.7208 23.2659 19.5231 23.8858C19.1886 24.9344 19.2038 25.1794 19.6828 25.9983C19.8729 26.3198 20.0249 26.6259 20.0249 26.6642C20.0249 26.7101 19.9261 26.8555 19.7968 26.9933C19.3939 27.4296 19.4015 28.1031 19.8196 28.5547C20.0553 28.8073 20.633 29.0446 20.7775 28.945C20.8155 28.9221 20.7851 28.7307 20.7015 28.5241C20.4734 27.9194 20.5342 27.8965 20.8155 28.4858C21.3705 29.6645 22.1231 30.4222 23.3319 31.0192C24.2442 31.4631 25.0272 31.6622 26.1448 31.7157C26.6466 31.7386 26.9886 31.7846 26.905 31.8152C26.4489 31.9759 24.3506 31.6774 23.3851 31.3101L22.8834 31.1187L22.7542 31.2947C22.4729 31.6622 21.9178 32.8791 21.781 33.4225C21.705 33.7363 21.5986 34.3716 21.5454 34.8308C21.3933 36.2621 21.3325 36.3922 21.1729 35.5502C20.9068 34.1573 19.1202 27.5597 18.8998 27.1617C18.8694 27.1005 18.3904 26.9398 17.8354 26.802C17.2805 26.6566 16.6722 26.4882 16.4822 26.4116C16.2998 26.3427 16.1249 26.3045 16.1021 26.3274C16.0793 26.3504 16.2085 26.5723 16.391 26.8173C16.5734 27.0622 16.8319 27.4372 16.9687 27.6439C17.3261 28.2179 18.1547 30.0089 18.398 30.7207C18.6641 31.4785 18.6413 31.532 17.843 32.2132C17.539 32.4734 17.2881 32.7414 17.2881 32.8102C17.2881 32.8714 17.6378 33.2542 18.0635 33.6522C18.8009 34.3486 18.8314 34.3946 18.7705 34.6089L18.7021 34.8385L18.6717 34.6012C18.6565 34.4175 18.474 34.2109 17.8582 33.6215C17.4173 33.2158 17.06 32.8332 17.06 32.7719C17.06 32.7184 17.3337 32.4352 17.6606 32.1443C18.4968 31.4249 18.5044 31.379 18.1623 30.4987C17.5846 29.0216 16.3454 26.7407 15.8892 26.3121C15.7448 26.1743 15.6915 26.0442 15.6915 25.8376C15.6915 25.5238 15.76 25.4472 16.1477 25.3171C16.543 25.187 16.9307 24.8885 17.1968 24.5134C17.4097 24.215 17.5009 24.1614 18.0863 23.9777C18.4436 23.8629 18.7325 23.7404 18.7325 23.7098C18.7325 23.6715 18.5957 23.4726 18.4284 23.2735C18.1015 22.8755 18.0406 22.5924 18.2611 22.5235C18.3296 22.5006 18.5957 22.4622 18.8466 22.4316C19.0974 22.4086 19.3254 22.3704 19.3559 22.3474C19.3863 22.3322 19.3102 22.0413 19.1886 21.7046C19.0594 21.3678 18.9606 21.0463 18.9606 21.0004C18.9606 20.9468 19.1582 20.8473 19.4015 20.7631C19.9413 20.587 20.8611 20.1278 20.8611 20.036C20.8611 19.9978 20.5798 19.814 20.2454 19.6303C19.5839 19.2782 18.915 18.7425 19.0138 18.6506C19.0442 18.62 19.3178 18.5129 19.6067 18.421C20.3366 18.1761 21.112 17.8164 21.7202 17.426C22.0015 17.25 22.2296 17.0893 22.2144 17.0816C22.1839 17.0586 20.1238 16.1708 19.9261 16.1019C19.8348 16.0637 19.812 16.0178 19.85 15.9489C19.8805 15.8876 20.3822 15.3978 20.96 14.862C21.5302 14.3186 22.0015 13.8517 22.0015 13.8211C22.0015 13.7598 21.5302 13.6757 20.139 13.4766C19.6372 13.4002 19.1962 13.3236 19.1658 13.293C19.1278 13.2624 19.4775 12.5888 19.9413 11.8005C20.6939 10.507 20.8383 10.2314 20.7623 10.2314C20.7471 10.2314 20.1237 10.4534 19.3787 10.729C18.2915 11.127 17.995 11.2035 17.919 11.127C17.7518 10.9586 17.5922 9.69568 17.5922 8.56288V7.46842L16.9763 7.79753C16.2542 8.18792 15.2886 8.9456 14.8401 9.47376C14.6728 9.6804 14.498 9.8488 14.4676 9.8488C14.4295 9.8488 14.1406 9.49672 13.8138 9.0604C13.2512 8.31032 12.3009 7.24646 12.1945 7.24646C12.1641 7.24646 12.1032 7.58323 12.0576 7.98888C11.9208 9.13696 11.5178 10.5376 11.3202 10.5376C11.267 10.5376 10.9021 10.3846 10.5143 10.2008C9.89096 9.91 8.94064 9.61912 8.59096 9.61912C8.49976 9.61912 8.54536 9.75688 8.76584 10.2085C9.10032 10.8897 9.4044 11.9536 9.3664 12.321L9.3436 12.5658L8.65936 12.6194C6.66756 12.7726 5.73247 12.8644 5.73247 12.9026C5.73247 12.9333 6.06698 13.293 6.4775 13.7139C7.24534 14.4946 7.80791 15.3289 7.7699 15.6198C7.7547 15.7269 7.36698 16.0483 6.56873 16.6071C5.92253 17.0586 5.38276 17.4643 5.36756 17.5026C5.35235 17.5409 5.43598 17.5944 5.55762 17.625C6.37106 17.801 6.72078 17.9159 7.00966 18.0842C7.40498 18.3215 7.81551 18.6736 8.0208 18.9645L8.1728 19.1788L7.32136 20.0283C6.60674 20.7478 6.4851 20.8932 6.57633 20.9774C6.63715 21.031 7.09329 21.207 7.59505 21.3601C8.0968 21.5132 8.53776 21.6739 8.57576 21.7122C8.61376 21.7505 8.55296 22.1408 8.40848 22.6766C8.27928 23.1741 8.1956 23.6103 8.2184 23.6486C8.25648 23.7174 9.5108 23.6562 9.71608 23.5797C9.90616 23.5108 9.98216 23.6945 10.0354 24.2992C10.0658 24.6513 10.1114 24.9498 10.1418 24.965C10.2026 25.0033 11.0541 24.6359 11.0541 24.5747C11.0541 24.5518 10.9553 24.391 10.8337 24.215C10.3243 23.4649 9.97456 22.5235 9.70088 21.1382C9.51848 20.2579 9.4348 19.416 9.52608 19.416C9.55648 19.416 9.60968 19.661 9.64008 19.9594C9.79216 21.6662 10.5752 23.8323 11.2898 24.5518C11.4722 24.7354 11.8676 24.9957 12.2477 25.1717L12.8863 25.4702L12.8634 25.7534L12.8406 26.0366L11.153 26.603L9.4652 27.1694L9.3132 27.6362C9.22952 27.8965 8.87984 29.0828 8.54536 30.2845C7.92194 32.4658 7.73189 33.0169 7.82312 32.3663C7.86113 32.0448 7.84592 32.0142 7.4582 31.5856C5.03306 28.9527 3.53539 25.8682 2.95001 22.2862C2.72954 20.9774 2.75235 18.1761 2.98802 16.8902C3.64942 13.2777 5.10908 10.331 7.49622 7.81285C11.3886 3.71806 16.8395 1.83522 22.4653 2.65418ZM12.1793 27.3913C11.6319 28.5318 10.6588 31.2642 10.7424 31.4096C10.7804 31.4785 11.1074 31.7922 11.4722 32.1137C11.8447 32.4352 12.1565 32.7337 12.1717 32.7873C12.1945 32.8408 12.0804 33.0092 11.9208 33.1699C11.7535 33.346 11.6927 33.3842 11.7687 33.2694C12.0652 32.8026 12.088 32.8638 11.3202 32.152C10.8032 31.6698 10.598 31.4326 10.598 31.3024C10.598 30.9044 12.1032 27.0698 12.2629 27.0698C12.3009 27.0698 12.2629 27.2153 12.1793 27.3913Z",fill:"#333333"})}),Object(q.jsx)("defs",{children:Object(q.jsx)("clipPath",{id:"clip0_108_3202",children:Object(q.jsx)("rect",{width:"40",height:"40",fill:"white"})})})]})},Fe=a(102),Se=a.n(Fe),Ee=function(){return Object(q.jsxs)("header",{children:[Object(q.jsx)("nav",{className:Se.a.nav,children:Object(q.jsx)(i.b,{to:"/",children:Object(q.jsx)(Ae,{})})}),Object(q.jsx)("div",{className:Se.a.header_background,children:Object(q.jsx)("h1",{className:Se.a.title,children:"The Rick and Morty API"})})]})},Pe=a(135),Le=a(45),De=a.n(Le),Ie=a.p+"static/media/more-vertical.1052ddd5.svg",Ue=a.p+"static/media/v-icon.126331bf.svg",Te=a.p+"static/media/alert-circle.d0de840e.svg",Re=a.p+"static/media/download.fe8598e0.svg",Me=function(e){var t=e.onHistoryClick,a="/details/"===Object(u.m)().pathname.slice(0,-1),n=Object(r.useState)(!1),c=Object(l.a)(n,2),s=c[0],i=c[1],o=S((function(e){return e.characters})).data;return Object(q.jsxs)("div",{className:De.a.container,children:[Object(q.jsxs)("div",{className:"".concat(De.a.hidden_buttons_wrapper," ").concat(s?De.a.open:""),children:[Object(q.jsx)("button",{type:"button",onClick:t,className:"".concat(De.a.icon_button," ").concat(De.a.small_button),children:Object(q.jsx)("img",{src:Te,alt:"history icon",className:De.a.icon})}),Object(q.jsx)(Pe.CSVLink,{data:(null===o||void 0===o?void 0:o.results)||[],children:Object(q.jsx)("button",{disabled:a,type:"button",className:"".concat(De.a.icon_button," ").concat(De.a.small_button),children:Object(q.jsx)("img",{src:Re,alt:"download icon",className:De.a.icon})})})]}),Object(q.jsx)("button",{type:"button",onClick:function(){i((function(e){return!e}))},className:De.a.icon_button,children:Object(q.jsx)("img",{src:s?Ue:Ie,alt:s?"close icon":"open icon",className:De.a.icon})})]})},Ve=a(46),Je=a.n(Ve),qe=function(e){var t=e.onClose,a=S((function(e){return e.history})).data,n=Object(r.useState)(a.length-1),c=Object(l.a)(n,2),s=c[0],i=c[1],o="string"!==typeof a[s],d=s===a.length-1,u=0===s,j=function(e){i((function(t){return t+e}))};return Object(q.jsxs)("div",{className:Je.a.container,children:[Object(q.jsxs)("div",{className:Je.a.info_wrapper,children:[Object(q.jsx)("h2",{children:"History"}),0===a.length?Object(q.jsx)("p",{className:Je.a.text,children:"Currently empty"}):o?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("h3",{className:Je.a.text_gray,children:"Filtered character by:"}),Object.entries(a[s]).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1],r=Y(a);return Object(q.jsx)("p",{className:Je.a.text,children:"".concat(r,": ").concat(n)},a)}))]}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("p",{className:Je.a.text_gray,children:"Checked character details of:"}),Object(q.jsx)("p",{className:Je.a.text,children:a[s]})]}),Object(q.jsxs)("div",{className:Je.a.buttons_wrapper,children:[Object(q.jsx)(h.a,{className:Je.a.button,variant:"outlined",onClick:function(){return j(-1)},disabled:u,children:"Prev"}),Object(q.jsx)(h.a,{className:Je.a.button,variant:"outlined",onClick:function(){return j(1)},disabled:d,children:"Next"})]})]}),Object(q.jsx)(h.a,{className:Je.a.button,variant:"text",onClick:t,children:"Close"})]})},He=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=S((function(e){return e.history})).data,s=F(),i=function(){n((function(e){return!e}))};return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("history")||"[]");return s(J(e)),function(){localStorage.setItem("history",JSON.stringify(c))}}),[]),Object(q.jsxs)("div",{className:"app",children:[Object(q.jsx)(Ee,{}),Object(q.jsx)(_e,{}),Object(q.jsx)(Me,{onHistoryClick:i}),Object(q.jsx)(d.a,{PaperProps:{sx:{width:"420px",height:"572px",borderRadius:"9px 0 0 9px",marginTop:"25vh"}},anchor:"right",open:a,onClose:i,children:Object(q.jsx)(qe,{onClose:i})}),Object(q.jsx)(ke,{})]})},Qe=Object(E.a)({reducer:{characters:je,filters:L,history:R}});s.a.render(Object(q.jsx)(o.a,{store:Qe,children:Object(q.jsx)(i.a,{children:Object(q.jsx)(He,{})})}),document.getElementById("root"))},34:function(e,t,a){e.exports={container:"DetailsPage_container__1GBTT",title:"DetailsPage_title__2Jt1k",image_wrapper:"DetailsPage_image_wrapper__3_cq9",image:"DetailsPage_image__1USfS",info_wrapper:"DetailsPage_info_wrapper__2jGF8",info:"DetailsPage_info__1JAYQ",text:"DetailsPage_text__8YSKL",text_gray:"DetailsPage_text_gray__-mlnW",status_text:"DetailsPage_status_text__r-vSf"}},39:function(e,t,a){e.exports={container:"CharacterCard_container__2dqoM",title:"CharacterCard_title__3wT_a",image_wrapper:"CharacterCard_image_wrapper__2ku8k",image:"CharacterCard_image__2dvw8",info_wrapper:"CharacterCard_info_wrapper__1KvTa",info:"CharacterCard_info__2bhJV",text:"CharacterCard_text__185xO",text_gray:"CharacterCard_text_gray__2IlV-",status_text:"CharacterCard_status_text__mDlWP"}},45:function(e,t,a){e.exports={container:"Fab_container__39-Hm",icon_button:"Fab_icon_button__B2433",icon:"Fab_icon__9jtQK",hidden_buttons_wrapper:"Fab_hidden_buttons_wrapper__275Lv",open:"Fab_open__1Tlw-",small_button:"Fab_small_button__1ODTU"}},46:function(e,t,a){e.exports={container:"History_container__3nmTx",info_wrapper:"History_info_wrapper__3SEGm",text:"History_text__Jpg2h",text_gray:"History_text_gray__3569j",button:"History_button__3mdJs",buttons_wrapper:"History_buttons_wrapper__25ejm"}},64:function(e,t,a){e.exports={footer:"Footer_footer__3knlV",text:"Footer_text__3DpOn",image_wrapper:"Footer_image_wrapper__3XJs5",logo_bg:"Footer_logo_bg__2SVar",logo:"Footer_logo__303xS",social_links:"Footer_social_links__3sQRb",year:"Footer_year__19gHg"}},80:function(e,t,a){e.exports={container:"HomePage_container__3MODo",page_items_wrapper:"HomePage_page_items_wrapper__1QrqX",error:"HomePage_error__2d6gW"}},81:function(e,t,a){e.exports={container:"StatusIcon_container__14G-k",grey:"StatusIcon_grey__1KM76",green:"StatusIcon_green__3jetO",red:"StatusIcon_red__9u3U_"}}},[[170,1,2]]]);
//# sourceMappingURL=main.d0667b59.chunk.js.map