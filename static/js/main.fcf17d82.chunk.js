(this.webpackJsonpCwitter=this.webpackJsonpCwitter||[]).push([[0],{38:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(3),c=n.n(a),s=n(30),i=n.n(s),u=n(8),o=n(47),j=n(7),l=n(11),d=n.n(l),b=n(23),p=(n(151),n(49));n(445),n(452),n(453);p.a.initializeApp({apiKey:"AIzaSyAkIDqVems9yxHaVqEr6Yx9_aTBtbDSZfU",authDomain:"twitter-52af4.firebaseapp.com",projectId:"twitter-52af4",storageBucket:"twitter-52af4.appspot.com",messagingSenderId:"614450065306",appId:"1:614450065306:web:9286e492457ed832631423"});var O=p.a,f=p.a.auth(),h=p.a.firestore(),x=p.a.storage(),m=(n(38),function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),o=i[0],j=i[1],l=Object(a.useState)(!0),p=Object(u.a)(l,2),O=p[0],h=p[1],x=Object(a.useState)(""),m=Object(u.a)(x,2),v=m[0],w=m[1],g=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?c(r):"password"===n&&j(r)},y=function(){var e=Object(b.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:e.sent;case 11:e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),r=e.t0.message,w(r),console.log(r);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:y,children:[Object(r.jsx)("input",{name:"email",type:"text",placeholder:"Email",value:n,onChange:g,required:!0}),Object(r.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:o,onChange:g,required:!0}),Object(r.jsx)("input",{type:"submit",value:O?"Create Account":"Log In"}),v&&Object(r.jsx)("span",{styles:"color: red;",children:"error"})]}),Object(r.jsx)("span",{onClick:function(){return h((function(e){return!e}))},children:O?"Sign in":"Create Account"})]})}),v=function(){var e=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new O.auth.GoogleAuthProvider:"github"===n&&(r=new O.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(r);case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{name:"google",onClick:e,children:"Continue with Google"}),Object(r.jsx)("button",{name:"github",onClick:e,children:"Continue with Github"})]})]})},w=n(145),g=function(e){var t=e.cweetObj,n=e.isOwner,c=Object(a.useState)(!1),s=Object(u.a)(c,2),i=s[0],o=s[1],j=Object(a.useState)(t.text),l=Object(u.a)(j,2),p=l[0],O=l[1],f=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this cweet?")){e.next=6;break}return e.next=4,h.doc("tweets/".concat(t.id)).delete();case 4:return e.next=6,x.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){o((function(e){return!e}))},v=function(){var e=Object(b.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("tweets/".concat(t.id)).update({text:p});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:i?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("form",{onSubmit:v,children:n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{type:"text",placeholder:"Edit your cweet",value:p,onChange:function(e){var t=e.target.value;O(t)},required:!0}),Object(r.jsx)("input",{type:"submit",value:"Update Cweet"})]})}),Object(r.jsx)("button",{onClick:m,children:"Cancel"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{className:"cweet__txt",children:t.text}),t.attachmentUrl&&Object(r.jsx)("img",{src:t.attachmentUrl,className:"cweet_img"}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:f,children:"Delete Cweet"}),Object(r.jsx)("button",{onClick:m,children:"Edit Cweet"})]})]})})},y=n(455),C=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),j=Object(u.a)(o,2),l=j[0],p=j[1],O=function(){var e=Object(b.a)(d.a.mark((function e(n){var r,a,c,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===s){e.next=10;break}return a=x.ref().child("".concat(t.uid,"/").concat(Object(y.a)())),e.next=6,a.putString(s,"data_url");case 6:return c=e.sent,e.next=9,c.ref.getDownloadURL();case 9:r=e.sent;case 10:return u={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:r},e.next=13,h.collection("tweets").add(u);case 13:p(""),i("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{onSubmit:O,children:[Object(r.jsx)("input",{value:l,onChange:function(e){var t=e.target.value;p(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(r.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.target.result;i(t)},n.readAsDataURL(t)}}),Object(r.jsx)("input",{type:"submit",value:"Cweet"}),s&&Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:s,width:"130px",height:"90px"}),Object(r.jsx)("button",{onClick:function(){i(null)},children:"Clear"})]})]})},S=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(u.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){h.collection("tweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));i(t),console.log(t)}))}),[]),Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(C,{userObj:t}),Object(r.jsx)("div",{className:"cweets",children:s.map((function(e){return Object(r.jsx)("div",{className:"cweet",children:Object(r.jsx)(g,{cweetObj:e,isOwner:e.creatorId===t.uid},e.id)})}))})]})},k=function(e){var t=e.userObj,n=e.refreshUser,c=Object(a.useState)([]),s=Object(u.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(t.displayName),p=Object(u.a)(l,2),O=p[0],x=p[1],m=Object(j.f)(),v=function(){var e=Object(b.a)(d.a.mark((function e(){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("tweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:n=e.sent,r=n.docs.map((function(e){return e.data()})),o(r),console.log(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){v()}),[]);var w=function(){var e=Object(b.a)(d.a.mark((function e(r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t.displayName===O){e.next=5;break}return e.next=4,t.updateProfile({displayName:O});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:w,children:[Object(r.jsx)("input",{type:"text",placeholder:"Display name",value:O,onChange:function(e){var t=e.target.value;x(t)}}),Object(r.jsx)("input",{type:"submit",value:"Update profile"})]}),Object(r.jsx)("button",{onClick:function(){f.signOut(),m.push("/")},children:"Sign Out"}),i.map((function(e){return Object(r.jsx)("div",{className:"cweet",children:Object(r.jsx)(g,{cweetObj:e,isOwner:e.creatorId===t.uid},e.id)})}))]})},N=n(59),I=function(e){var t,n=e.displayName;return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",(t={className:"navigator"},Object(N.a)(t,"className","nav"),Object(N.a)(t,"children",[Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/",className:"nav_prop",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsxs)(o.b,{to:"/profile",className:"nav_prop",children:[n,"'s Profile"]})})]),t))})},U=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(r.jsxs)(o.a,{children:[t&&Object(r.jsx)(I,{displayName:n.displayName}),Object(r.jsx)(j.c,{children:t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(S,{userObj:n})}),Object(r.jsx)(j.a,{exact:!0,path:"/profile",children:Object(r.jsx)(k,{userObj:n,refreshUser:a})})]}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(v,{})})})})]})};var A=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(u.a)(s,2),o=i[0],j=i[1],l=Object(a.useState)(null),d=Object(u.a)(l,2),b=d[0],p=d[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){e?(j(!0),p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(j(!1),p({displayName:""})),c(!0)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[n?Object(r.jsx)(U,{isLoggedIn:o,userObj:b,refreshUser:function(){var e=f.currentUser;p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):Object(r.jsx)("div",{className:"init",children:Object(r.jsx)("span",{className:"init_txt",children:"Initializing..."})}),Object(r.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Cwitter"]})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[451,1,2]]]);
//# sourceMappingURL=main.fcf17d82.chunk.js.map