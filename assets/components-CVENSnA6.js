import{B as e,I as t,M as n,N as r,R as i,T as a,V as o,a as s,g as c,k as l,n as u,t as d,z as f}from"./index-Bq7NrIJ0.js";var p=e=>e?.trim().length>=3,m=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),h=e=>e?.length>=6,g=(e,t)=>e===t,_=e=>{let t=p(e.userName),n=m(e.email),r=h(e.password),i=g(e.password,e.confirmPassword);return{isFormValid:t&&n&&r&&i,errors:{userName:t?``:`Name must be at least 3 characters long.`,email:n?``:`Enter your email in the format name@google.com`,password:r?``:`Password must be at least 6 characters long.`,confirmPassword:i?``:`Passwords are different`}}},v=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),y=e=>e?.length>=6,b=e=>{let t=v(e.email),n=y(e.password);return{isFormValid:t&&n,errors:{email:t?``:`Enter your email in the format name@google.com`,password:n?``:`Password must be at least 6 characters long.`}}},x=o(e(),1),S=f(),C=()=>{let e={email:``,password:``},r={email:!1,password:!1},[i,a]=(0,x.useState)(e),[o,f]=(0,x.useState)(r),p=t(),m=l(),{isFormValid:h,errors:g}=b(i),{email:_,password:v}=g,{email:y,password:C}=o,w=_&&y,T=v&&C,E=h&&y&&C,D=e=>{let{name:t,value:n}=e.target;a(e=>({...e,[t]:n}))},O=e=>{let{name:t}=e.target;f(e=>({...e,[t]:!0}))};return(0,S.jsxs)(c,{title:`Sign in to Yumly`,handleSubmit:async t=>{if(t.preventDefault(),!h)return;let r={email:i.email.trim(),password:i.password};try{await p(n(r)).unwrap(),a(e),m(`/my-recipes`)}catch(t){a(e),t===`Email not confirmed`?d.error(t):t===`Invalid login credentials`?d.error(`Invalid email or password`):d.error(t)}},children:[(0,S.jsxs)(`label`,{children:[`Email`,(0,S.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:D,onBlur:O,value:i.email,required:!0,className:w?`invalid`:``})]}),w&&(0,S.jsx)(s,{errorMessage:_}),(0,S.jsxs)(`label`,{children:[`Password`,(0,S.jsx)(`input`,{type:`password`,name:`password`,onChange:D,onBlur:O,value:i.password,required:!0,minLength:6,className:T?`invalid`:``})]}),T&&(0,S.jsx)(s,{errorMessage:v}),(0,S.jsx)(`button`,{type:`submit`,disabled:!E,children:`Sign in`}),(0,S.jsx)(u,{spanText:`New to Yumly?`,linkText:`Create an account`,to:`/auth/register`})]})},w=()=>{let e={userName:``,email:``,password:``,confirmPassword:``},n={userName:!1,email:!1,password:!1,confirmPassword:!1},[i,a]=(0,x.useState)(e),[o,f]=(0,x.useState)(n),{isFormValid:p,errors:m}=_(i),h=l(),g=t(),v=e=>{let{name:t,value:n}=e.target;a(e=>({...e,[t]:n}))},{userName:y,email:b,password:C,confirmPassword:w}=m,{userName:T,email:E,password:D,confirmPassword:O}=o,k=y&&T,A=b&&E,j=C&&D,M=w&&O,N=p&&O&&D&&T&&E,P=async t=>{if(t.preventDefault(),!p)return;let n={userName:i.userName.trim(),email:i.email.trim(),password:i.password};try{await g(r(n)).unwrap(),a(e),h(`/auth/verify-email`)}catch(e){d.error(e),console.error(e)}},F=e=>{let{name:t}=e.target;f(e=>({...e,[t]:!0}))};return(0,S.jsxs)(c,{title:`Join Yumly & Start Cooking`,handleSubmit:P,children:[(0,S.jsxs)(`label`,{children:[`Login`,(0,S.jsx)(`input`,{type:`text`,name:`userName`,onChange:v,onBlur:F,value:i.userName,required:!0,className:k?`invalid`:``})]}),k&&(0,S.jsx)(s,{errorMessage:y}),(0,S.jsxs)(`label`,{children:[`Email`,(0,S.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:v,onBlur:F,value:i.email,required:!0,className:A?`invalid`:``})]}),A&&(0,S.jsx)(s,{errorMessage:b}),(0,S.jsxs)(`label`,{children:[`Password`,(0,S.jsx)(`input`,{type:`password`,name:`password`,onChange:v,onBlur:F,value:i.password,required:!0,minLength:6,className:j?`invalid`:``})]}),j&&(0,S.jsx)(s,{errorMessage:C}),(0,S.jsxs)(`label`,{children:[`Confirm password`,(0,S.jsx)(`input`,{type:`password`,name:`confirmPassword`,onChange:v,onBlur:F,value:i.confirmPassword,required:!0,minLength:6,className:M?`invalid`:``})]}),M&&(0,S.jsx)(s,{errorMessage:w}),(0,S.jsx)(`button`,{type:`submit`,disabled:!N,children:`Sign in`}),(0,S.jsx)(u,{spanText:`Already have an account?`,linkText:`Sign in`,to:`/auth/login`})]})},T=i.div`
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
`;function E(e){return a({tag:`svg`,attr:{viewBox:`0 0 1024 1024`},child:[{tag:`path`,attr:{d:`M1023.31 473.296c-1.36-11.312-5.614-21.713-12.095-30.465h.16l-.88-.88c-3.28-4.32-7.12-8.128-11.408-11.504L581.807 27.04c-36.223-36.223-99.504-36.288-135.776 0L28.815 427.295c-9.024 8.4-28.88 31.09-28.88 53.345v479.52c0 35.184 28.816 64 64 64h896c35.183 0 64-28.816 64-64V481.904c.223-2.88-.065-5.76-.625-8.607zM269.794 726.335L63.938 915.902V544.718zm65.775 26.384c2.288-1.52 4.465-3.248 6.37-5.408.367-.416.623-.912.96-1.344l141.167-130c7.248-5.84 15.84-8.912 24.88-8.912 9.184 0 18.367 3.216 24.527 8l383.6 345.104H110.337zm421.889-22.161l202.48-179.696v361.84zm-653.68-287.729L491.279 72.285c6.064-6.032 14.097-9.376 22.625-9.376 8.56 0 16.592 3.344 22.656 9.376l361.376 344.352h-.975l54.896 55.792-242.304 215.04-135.248-121.664c-37.68-29.536-91.775-30.816-131.68 1.376L317.121 682.765 75.33 469.421l26.992-26.592h1.456z`},child:[]}]})(e)}var D=()=>(0,S.jsxs)(T,{children:[(0,S.jsx)(`div`,{children:(0,S.jsx)(E,{size:32})}),(0,S.jsx)(`h1`,{children:`Check your email`}),(0,S.jsx)(`p`,{children:`We've sent a confirmation email.`}),(0,S.jsxs)(`p`,{children:[`Open your inbox and`,(0,S.jsx)(`span`,{children:` click the verification link `}),`before signing in.`]}),(0,S.jsxs)(`p`,{children:[`If you don't see the email, check your `,(0,S.jsx)(`span`,{children:`Spam`}),` folder.`]}),(0,S.jsx)(u,{to:`/auth/login`,linkText:`Move to Sign In`})]});export{w as n,C as r,D as t};