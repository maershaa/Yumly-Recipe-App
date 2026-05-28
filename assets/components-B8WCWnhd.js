import{c as e,l as t,s as n,u as r}from"./index-BEx9iRkc.js";var i=r(t(),1),a=n.h1`
  text-align: center;
`,o=e(),s=({title:e})=>(0,o.jsx)(a,{children:e}),c=n.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadows.main};

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({theme:e})=>e.colors.textPrimary};
    font-weight: 500;
  }

  input {
    padding: 14px 18px;
    background-color: transparent;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.md};
    color: ${({theme:e})=>e.colors.textPrimary};
    outline: none;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      border: ${({theme:e})=>e.colors.hoverBorderAccent};
      box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
    }

    &::placeholder {
      color: ${({theme:e})=>e.colors.textSecondary};
    }
  }

  button {
    margin-top: 10px;
    padding: 16px;
    background-color: ${({theme:e})=>e.colors.accent};
    color: ${({theme:e})=>e.colors.background};
    border-radius: ${({theme:e})=>e.radii.md};
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({theme:e})=>e.colors.accentSecondary};
      border: ${({theme:e})=>e.colors.hoverBorderSecondary};
      box-shadow: ${({theme:e})=>e.colors.hoverShadowSecondary};
    }
  }
`,l=({children:e,handleSubmit:t,title:n})=>(0,o.jsxs)(c,{onSubmit:t,children:[(0,o.jsx)(s,{title:n}),e]}),u=()=>{let[e,t]=(0,i.useState)(``),[n,r]=(0,i.useState)(``),a=e=>{let{name:n,value:i}=e.target;if(n===`email`)t(i);else if(n===`password`)r(i);else return};return(0,o.jsxs)(l,{title:`Sign in to Yumly`,handleSubmit:i=>{i.preventDefault(),!e||!n||(console.log(`🚀 ~ handleSubmit ~ authInfo:`,{email:e,password:n}),t(``),r(``))},children:[(0,o.jsxs)(`label`,{children:[`Email`,(0,o.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:a,value:e,required:!0})]}),(0,o.jsxs)(`label`,{children:[`Password`,(0,o.jsx)(`input`,{type:`password`,name:`password`,onChange:a,value:n,required:!0,minLength:4})]}),(0,o.jsx)(`button`,{type:`submit`,children:`Sign in`})]})},d=()=>{let[e,t]=(0,i.useState)(``),[n,r]=(0,i.useState)(``),[a,s]=(0,i.useState)(``),c=e=>{let{name:n,value:i}=e.target;if(n===`userName`)t(i);else if(n===`email`)r(i);else if(n===`password`)s(i);else return};return(0,o.jsxs)(l,{title:`Join Yumly & Start Cooking`,handleSubmit:t=>{t.preventDefault(),!e||!n||!a||console.log(`🚀 ~ handleSubmit ~ userInfo:`,{userName:e,email:n,password:a})},children:[(0,o.jsxs)(`label`,{children:[`Login`,(0,o.jsx)(`input`,{type:`text`,name:`userName`,onChange:c,value:e,required:!0})]}),(0,o.jsxs)(`label`,{children:[`Email`,(0,o.jsx)(`input`,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:c,value:n,required:!0})]}),(0,o.jsxs)(`label`,{children:[`Password`,(0,o.jsx)(`input`,{type:`password`,name:`password`,onChange:c,value:a,required:!0,minLength:4})]}),(0,o.jsx)(`button`,{type:`submit`,children:`Sign in`})]})};export{u as n,d as t};