import{_ as e,a as t,c as n,f as r,g as i,h as a,l as o,m as s,r as c,t as l}from"./index-BDajHPR8.js";var u=e(i(),1),d=s.p`
  margin-top: 24px;

  display: flex;
  justify-content: center;
  gap: 6px;

  color: ${({theme:e})=>e.colors.textSecondary};

  a {
    color: ${({theme:e})=>e.colors.accent};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`,f=a(),p=()=>{let[e,i]=(0,u.useState)(``),[a,o]=(0,u.useState)(``),s=r(),p=t(),m=e=>{let{name:t,value:n}=e.target;if(t===`email`)i(n);else if(t===`password`)o(n);else return};return(0,f.jsxs)(l,{title:`Sign in to Yumly`,handleSubmit:async t=>{if(t.preventDefault(),!e||!a)return;let r={email:e,password:a};try{await s(n(r)).unwrap(),i(``),o(``),p(`/my-recipes`)}catch(e){console.error(e)}},children:[(0,f.jsxs)(`label`,{children:[`Email`,(0,f.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:m,value:e,required:!0})]}),(0,f.jsxs)(`label`,{children:[`Password`,(0,f.jsx)(`input`,{type:`password`,name:`password`,onChange:m,value:a,required:!0,minLength:4})]}),(0,f.jsx)(`button`,{type:`submit`,children:`Sign in`}),(0,f.jsxs)(d,{children:[(0,f.jsx)(`span`,{children:`New to Yumly?`}),(0,f.jsx)(c,{to:`/auth/register`,children:`Create an account`})]})]})},m=s.p`
  margin-top: 24px;

  display: flex;
  justify-content: center;
  gap: 6px;

  color: ${({theme:e})=>e.colors.textSecondary};

  a {
    color: ${({theme:e})=>e.colors.accent};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`,h=()=>{let[e,n]=(0,u.useState)(``),[i,a]=(0,u.useState)(``),[s,d]=(0,u.useState)(``),p=t(),h=r(),g=e=>{let{name:t,value:r}=e.target;if(t===`userName`)n(r);else if(t===`email`)a(r);else if(t===`password`)d(r);else return};return(0,f.jsxs)(l,{title:`Join Yumly & Start Cooking`,handleSubmit:async t=>{t.preventDefault();let r={userName:e,email:i,password:s};if(!(!e||!i||!s))try{await h(o(r)).unwrap(),n(``),a(``),d(``),p(`/auth/check-email`)}catch(e){console.error(e)}},children:[(0,f.jsxs)(`label`,{children:[`Login`,(0,f.jsx)(`input`,{type:`text`,name:`userName`,onChange:g,value:e,required:!0})]}),(0,f.jsxs)(`label`,{children:[`Email`,(0,f.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:g,value:i,required:!0})]}),(0,f.jsxs)(`label`,{children:[`Password`,(0,f.jsx)(`input`,{type:`password`,name:`password`,onChange:g,value:s,required:!0,minLength:4})]}),(0,f.jsx)(`button`,{type:`submit`,children:`Sign in`}),(0,f.jsxs)(m,{children:[(0,f.jsx)(`span`,{children:`Already have an account?`}),(0,f.jsx)(c,{to:`/auth/login`,children:`Sign in`})]})]})};export{p as n,h as t};