import{a as e,f as t,h as n,m as r,o as i,p as a,r as o,s,t as c,u as l}from"./index-DRkuNqqO.js";var u=n(r(),1),d=t.p`
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
`,f=a(),p=()=>{let[t,n]=(0,u.useState)(``),[r,a]=(0,u.useState)(``),s=l(),p=e(),m=e=>{let{name:t,value:r}=e.target;if(t===`email`)n(r);else if(t===`password`)a(r);else return};return(0,f.jsxs)(c,{title:`Sign in to Yumly`,handleSubmit:async e=>{if(e.preventDefault(),!t||!r)return;let o={email:t,password:r};try{await s(i(o)).unwrap(),n(``),a(``),p(`/my-recipes`)}catch(e){console.error(e)}},children:[(0,f.jsxs)(`label`,{children:[`Email`,(0,f.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:m,value:t,required:!0})]}),(0,f.jsxs)(`label`,{children:[`Password`,(0,f.jsx)(`input`,{type:`password`,name:`password`,onChange:m,value:r,required:!0,minLength:4})]}),(0,f.jsx)(`button`,{type:`submit`,children:`Sign in`}),(0,f.jsxs)(d,{children:[(0,f.jsx)(`span`,{children:`New to Yumly?`}),(0,f.jsx)(o,{to:`/auth/register`,children:`Create an account`})]})]})},m=t.p`
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
`,h=()=>{let[t,n]=(0,u.useState)(``),[r,i]=(0,u.useState)(``),[a,d]=(0,u.useState)(``),p=e(),h=l(),g=e=>{let{name:t,value:r}=e.target;if(t===`userName`)n(r);else if(t===`email`)i(r);else if(t===`password`)d(r);else return};return(0,f.jsxs)(c,{title:`Join Yumly & Start Cooking`,handleSubmit:async e=>{e.preventDefault();let o={userName:t,email:r,password:a};if(!(!t||!r||!a))try{await h(s(o)).unwrap(),n(``),i(``),d(``),p(`/auth/check-email`)}catch(e){console.error(e)}},children:[(0,f.jsxs)(`label`,{children:[`Login`,(0,f.jsx)(`input`,{type:`text`,name:`userName`,onChange:g,value:t,required:!0})]}),(0,f.jsxs)(`label`,{children:[`Email`,(0,f.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:g,value:r,required:!0})]}),(0,f.jsxs)(`label`,{children:[`Password`,(0,f.jsx)(`input`,{type:`password`,name:`password`,onChange:g,value:a,required:!0,minLength:4})]}),(0,f.jsx)(`button`,{type:`submit`,children:`Sign in`}),(0,f.jsxs)(m,{children:[(0,f.jsx)(`span`,{children:`Already have an account?`}),(0,f.jsx)(o,{to:`/auth/login`,children:`Sign in`})]})]})};export{p as n,h as t};