"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[684],{9684:function(e,a,t){t.r(a);var r=t(885),l=t(3360),n=t(3027),s=t(2791),i=t(9434),o=t(2359),m=t(9085),c=t(4373),u=t(184);a.default=function(){var e=(0,s.useState)(""),a=(0,r.Z)(e,2),t=a[0],h=a[1],d=(0,s.useState)(""),p=(0,r.Z)(d,2),x=p[0],w=p[1],f=(0,s.useState)(""),j=(0,r.Z)(f,2),Z=j[0],b=j[1],g=(0,i.I0)(),y=(0,i.v9)((function(e){return e.auth.loading})),v=function(e){var a=e.target,t=a.value;switch(a.name){case"name":h(t);break;case"email":w(t);break;case"password":b(t);break;default:return}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{style:{textAlign:"center",marginTop:"10px"},children:"Register View"}),(0,u.jsxs)(n.Z,{onSubmit:function(e){return e.preventDefault(),""===t.trim()||""===x.trim()||""===Z.trim()?m.Am.error("Please fill in all fields!"):Z.length<7?m.Am.info("Passwords must be at least 7 characters long!"):(g((0,o.zB)({name:t,email:x,password:Z})),h(""),w(""),void b(""))},style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsxs)(n.Z.Group,{className:"mb-3",children:[(0,u.jsx)(n.Z.Label,{children:"Name"}),(0,u.jsx)(n.Z.Control,{type:"name",name:"name",value:t,placeholder:"Enter name",onChange:v,style:{width:"500px"}}),(0,u.jsx)(n.Z.Label,{children:"Email"}),(0,u.jsx)(n.Z.Control,{type:"email",name:"email",value:x,placeholder:"Enter email",onChange:v,style:{width:"500px"}}),(0,u.jsx)(n.Z.Text,{className:"text-muted",children:"We'll never share your email with anyone else"})]}),(0,u.jsxs)(n.Z.Group,{className:"mb-3",children:[(0,u.jsx)(n.Z.Label,{children:"Password"}),(0,u.jsx)(n.Z.Control,{type:"password",name:"password",value:Z,placeholder:"Password",onChange:v,style:{width:"500px"}})]}),(0,u.jsx)(l.Z,{variant:"primary",type:"submit",children:"Sign In"}),y&&(0,u.jsx)(c.a,{})]})]})}}}]);
//# sourceMappingURL=684.70d35096.chunk.js.map