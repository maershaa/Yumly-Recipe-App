import{a as e,i as t,o as n,r}from"./index-C299IeAm.js";var i=n(e(),1),a=t(),o=({title:e})=>(0,a.jsx)(`h1`,{children:e}),s=r.form`
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
`,c=r.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${({theme:e})=>e.colors.textPrimary};
  font-weight: 500;
`,l=r.input`
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
`,u=r.button`
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
`,d=()=>{let[e,t]=(0,i.useState)(``),[n,r]=(0,i.useState)(``),d=e=>{let{name:n,value:i}=e.target;if(n===`email`)t(i);else if(n===`password`)r(i);else return};return(0,a.jsxs)(s,{autoComplete:`on`,onSubmit:i=>{i.preventDefault(),!e||!n||(console.log(`🚀 ~ handleSubmit ~ authInfo:`,{email:e,password:n}),t(``),r(``))},children:[(0,a.jsx)(o,{title:`Sign in to Yumly`}),(0,a.jsxs)(c,{children:[`Email`,(0,a.jsx)(l,{type:`email`,name:`email`,placeholder:`example@gmail.com`,onChange:d,value:e,required:!0})]}),(0,a.jsxs)(c,{children:[`Password`,(0,a.jsx)(l,{type:`password`,name:`password`,onChange:d,value:n,required:!0,minLength:4})]}),(0,a.jsx)(u,{type:`submit`,children:`Sign in`})]})},f=()=>(0,a.jsx)(`div`,{children:(0,a.jsx)(d,{})});export{f as default};