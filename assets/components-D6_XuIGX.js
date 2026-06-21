import{A as e,C as t,D as n,I as r,L as i,P as a,R as o,j as s,m as c,r as l,z as u}from"./index-C18wZHis.js";var d=u(o(),1),f=i(),p=()=>{let[t,r]=(0,d.useState)(``),[i,o]=(0,d.useState)(``),s=a(),u=n(),p=e=>{let{name:t,value:n}=e.target;if(t===`email`)r(n);else if(t===`password`)o(n);else return};return(0,f.jsxs)(c,{title:`Sign in to Yumly`,handleSubmit:async n=>{if(n.preventDefault(),!t||!i)return;let a={email:t,password:i};try{await s(e(a)).unwrap(),r(``),o(``),u(`/my-recipes`)}catch(e){r(``),o(``),e===`Email not confirmed`?alert(`Please confirm your email`):e===`Invalid login credentials`&&alert(`Invalid username or password`)}},children:[(0,f.jsxs)(`label`,{children:[`Email`,(0,f.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:p,value:t,required:!0})]}),(0,f.jsxs)(`label`,{children:[`Password`,(0,f.jsx)(`input`,{type:`password`,name:`password`,onChange:p,value:i,required:!0,minLength:4})]}),(0,f.jsx)(`button`,{type:`submit`,children:`Sign in`}),(0,f.jsx)(l,{spanText:`New to Yumly?`,linkText:`Create an account`,to:`/auth/register`})]})},m=()=>{let[e,t]=(0,d.useState)(``),[r,i]=(0,d.useState)(``),[o,u]=(0,d.useState)(``),p=n(),m=a(),h=e=>{let{name:n,value:r}=e.target;if(n===`userName`)t(r);else if(n===`email`)i(r);else if(n===`password`)u(r);else return};return(0,f.jsxs)(c,{title:`Join Yumly & Start Cooking`,handleSubmit:async n=>{n.preventDefault();let a={userName:e,email:r,password:o};if(!(!e||!r||!o))try{await m(s(a)).unwrap(),t(``),i(``),u(``),p(`/auth/check-email`)}catch(e){console.error(e)}},children:[(0,f.jsxs)(`label`,{children:[`Login`,(0,f.jsx)(`input`,{type:`text`,name:`userName`,onChange:h,value:e,required:!0})]}),(0,f.jsxs)(`label`,{children:[`Email`,(0,f.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:h,value:r,required:!0})]}),(0,f.jsxs)(`label`,{children:[`Password`,(0,f.jsx)(`input`,{type:`password`,name:`password`,onChange:h,value:o,required:!0,minLength:4})]}),(0,f.jsx)(`button`,{type:`submit`,children:`Sign in`}),(0,f.jsx)(l,{spanText:`Already have an account?`,linkText:`Sign in`,to:`/auth/login`})]})},h=r.div`
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
`;function g(e){return t({tag:`svg`,attr:{viewBox:`0 0 1024 1024`},child:[{tag:`path`,attr:{d:`M1023.31 473.296c-1.36-11.312-5.614-21.713-12.095-30.465h.16l-.88-.88c-3.28-4.32-7.12-8.128-11.408-11.504L581.807 27.04c-36.223-36.223-99.504-36.288-135.776 0L28.815 427.295c-9.024 8.4-28.88 31.09-28.88 53.345v479.52c0 35.184 28.816 64 64 64h896c35.183 0 64-28.816 64-64V481.904c.223-2.88-.065-5.76-.625-8.607zM269.794 726.335L63.938 915.902V544.718zm65.775 26.384c2.288-1.52 4.465-3.248 6.37-5.408.367-.416.623-.912.96-1.344l141.167-130c7.248-5.84 15.84-8.912 24.88-8.912 9.184 0 18.367 3.216 24.527 8l383.6 345.104H110.337zm421.889-22.161l202.48-179.696v361.84zm-653.68-287.729L491.279 72.285c6.064-6.032 14.097-9.376 22.625-9.376 8.56 0 16.592 3.344 22.656 9.376l361.376 344.352h-.975l54.896 55.792-242.304 215.04-135.248-121.664c-37.68-29.536-91.775-30.816-131.68 1.376L317.121 682.765 75.33 469.421l26.992-26.592h1.456z`},child:[]}]})(e)}var _=()=>(0,f.jsxs)(h,{children:[(0,f.jsx)(`div`,{children:(0,f.jsx)(g,{size:32})}),(0,f.jsx)(`h1`,{children:`Check your email`}),(0,f.jsx)(`p`,{children:`We've sent a confirmation email.`}),(0,f.jsxs)(`p`,{children:[`Open your inbox and`,(0,f.jsx)(`span`,{children:` click the verification link `}),`before signing in.`]}),(0,f.jsxs)(`p`,{children:[`If you don't see the email, check your `,(0,f.jsx)(`span`,{children:`Spam`}),` folder.`]}),(0,f.jsx)(l,{to:`/auth/login`,linkText:`Move to Sign In`})]});export{m as n,p as r,_ as t};