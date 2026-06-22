import{B as e,H as t,L as n,M as r,N as i,P as a,T as o,V as s,a as c,g as l,k as u,n as d,t as f,z as p}from"./index-BODT-GLF.js";var m=e=>e?.trim().length>=3,h=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),g=e=>e?.length>=6,_=(e,t)=>e===t,v=e=>{let t=m(e.userName),n=h(e.email),r=g(e.password),i=_(e.password,e.confirmPassword);return{isFormValid:t&&n&&r&&i,errors:{userName:t?``:`Name must be at least 3 characters long.`,email:n?``:`Enter your email in the format name@google.com`,password:r?``:`Password must be at least 6 characters long.`,confirmPassword:i?``:`Passwords are different`}}},y=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),b=e=>e?.length>=6,x=e=>{let t=y(e.email),n=b(e.password);return{isFormValid:t&&n,errors:{email:t?``:`Enter your email in the format name@google.com`,password:n?``:`Password must be at least 6 characters long.`}}},S=t(s(),1),C=e(),w=()=>{let e={email:``,password:``},t={email:!1,password:!1},[a,o]=(0,S.useState)(e),[s,p]=(0,S.useState)(t),m=n(),h=u(),{isFormValid:g,errors:_}=x(a),{email:v,password:y}=_,{email:b,password:w}=s,T=v&&b,E=y&&w,D=e=>{let{name:t,value:n}=e.target;o(e=>({...e,[t]:n}))},O=e=>{let{name:t}=e.target;p(e=>({...e,[t]:!0}))};return(0,C.jsxs)(l,{title:`Sign in to Yumly`,handleSubmit:async t=>{if(t.preventDefault(),!g)return;let n={email:a.email.trim(),password:a.password};try{await m(r(n)).unwrap(),o(e),h(`/my-recipes`),m(i())}catch(t){o(e),t===`Email not confirmed`?f.error(t):t===`Invalid login credentials`?f.error(`Invalid email or password`):f.error(t)}},children:[(0,C.jsxs)(`label`,{children:[`Email`,(0,C.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:D,onBlur:O,value:a.email,required:!0,className:T?`invalid`:``})]}),T&&(0,C.jsx)(c,{errorMessage:v}),(0,C.jsxs)(`label`,{children:[`Password`,(0,C.jsx)(`input`,{type:`password`,name:`password`,onChange:D,onBlur:O,value:a.password,required:!0,minLength:6,className:E?`invalid`:``})]}),E&&(0,C.jsx)(c,{errorMessage:y}),(0,C.jsx)(`button`,{type:`submit`,disabled:!g,children:`Sign in`}),(0,C.jsx)(d,{spanText:`New to Yumly?`,linkText:`Create an account`,to:`/auth/register`})]})},T=()=>{let e={userName:``,email:``,password:``,confirmPassword:``},t={userName:!1,email:!1,password:!1,confirmPassword:!1},[r,i]=(0,S.useState)(e),[o,s]=(0,S.useState)(t),{isFormValid:p,errors:m}=v(r),h=u(),g=n(),_=e=>{let{name:t,value:n}=e.target;i(e=>({...e,[t]:n}))},{userName:y,email:b,password:x,confirmPassword:w}=m,{userName:T,email:E,password:D,confirmPassword:O}=o,k=y&&T,A=b&&E,j=x&&D,M=w&&O,N=p&&O&&D&&T&&E,P=async t=>{if(t.preventDefault(),!p)return;let n={userName:r.userName.trim(),email:r.email.trim(),password:r.password};try{await g(a(n)).unwrap(),i(e),h(`/auth/verify-email`)}catch(e){f.error(e),console.error(e)}},F=e=>{let{name:t}=e.target;s(e=>({...e,[t]:!0}))};return(0,C.jsxs)(l,{title:`Join Yumly & Start Cooking`,handleSubmit:P,children:[(0,C.jsxs)(`label`,{children:[`Login`,(0,C.jsx)(`input`,{type:`text`,name:`userName`,onChange:_,onBlur:F,value:r.userName,required:!0,className:k?`invalid`:``})]}),k&&(0,C.jsx)(c,{errorMessage:y}),(0,C.jsxs)(`label`,{children:[`Email`,(0,C.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:_,onBlur:F,value:r.email,required:!0,className:A?`invalid`:``})]}),A&&(0,C.jsx)(c,{errorMessage:b}),(0,C.jsxs)(`label`,{children:[`Password`,(0,C.jsx)(`input`,{type:`password`,name:`password`,onChange:_,onBlur:F,value:r.password,required:!0,minLength:6,className:j?`invalid`:``})]}),j&&(0,C.jsx)(c,{errorMessage:x}),(0,C.jsxs)(`label`,{children:[`Confirm password`,(0,C.jsx)(`input`,{type:`password`,name:`confirmPassword`,onChange:_,onBlur:F,value:r.confirmPassword,required:!0,minLength:6,className:M?`invalid`:``})]}),M&&(0,C.jsx)(c,{errorMessage:w}),(0,C.jsx)(`button`,{type:`submit`,disabled:!N,children:`Sign in`}),(0,C.jsx)(d,{spanText:`Already have an account?`,linkText:`Sign in`,to:`/auth/login`})]})},E=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  padding: 60px 20px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 740px;

  h1 {
    margin: 0 0 8px;
    font-size: 2rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.textPrimary};
  }

  div {
    background-color: ${({theme:e})=>e.colors.surface};

    width: 84px;
    height: 84px;
    border-radius: ${({theme:e})=>e.radii.rounded};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border: 1px solid ${({theme:e})=>e.colors.border};

    svg {
      color: ${({theme:e})=>e.colors.accent};
      opacity: 0.6;
    }
  }

  p {
    margin: 0 0 8px;
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${({theme:e})=>e.colors.textSecondary};
  }

  span {
    font-weight: 700;
  }
`;function D(e){return o({tag:`svg`,attr:{viewBox:`0 0 1024 1024`},child:[{tag:`path`,attr:{d:`M1023.31 473.296c-1.36-11.312-5.614-21.713-12.095-30.465h.16l-.88-.88c-3.28-4.32-7.12-8.128-11.408-11.504L581.807 27.04c-36.223-36.223-99.504-36.288-135.776 0L28.815 427.295c-9.024 8.4-28.88 31.09-28.88 53.345v479.52c0 35.184 28.816 64 64 64h896c35.183 0 64-28.816 64-64V481.904c.223-2.88-.065-5.76-.625-8.607zM269.794 726.335L63.938 915.902V544.718zm65.775 26.384c2.288-1.52 4.465-3.248 6.37-5.408.367-.416.623-.912.96-1.344l141.167-130c7.248-5.84 15.84-8.912 24.88-8.912 9.184 0 18.367 3.216 24.527 8l383.6 345.104H110.337zm421.889-22.161l202.48-179.696v361.84zm-653.68-287.729L491.279 72.285c6.064-6.032 14.097-9.376 22.625-9.376 8.56 0 16.592 3.344 22.656 9.376l361.376 344.352h-.975l54.896 55.792-242.304 215.04-135.248-121.664c-37.68-29.536-91.775-30.816-131.68 1.376L317.121 682.765 75.33 469.421l26.992-26.592h1.456z`},child:[]}]})(e)}var O=()=>(0,C.jsxs)(E,{children:[(0,C.jsx)(`div`,{children:(0,C.jsx)(D,{size:32})}),(0,C.jsx)(`h1`,{children:`Check your email`}),(0,C.jsx)(`p`,{children:`We've sent a confirmation email.`}),(0,C.jsxs)(`p`,{children:[`Open your inbox and`,(0,C.jsx)(`span`,{children:` click the verification link `}),`before signing in.`]}),(0,C.jsxs)(`p`,{children:[`If you don't see the email, check your `,(0,C.jsx)(`span`,{children:`Spam`}),` folder.`]}),(0,C.jsx)(d,{to:`/auth/login`,linkText:`Move to Sign In`})]});export{T as n,w as r,O as t};