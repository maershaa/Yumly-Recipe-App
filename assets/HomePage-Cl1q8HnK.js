import{c as e,d as t,f as n,l as r,m as i,p as a,u as o}from"./index-CSl1n7XI.js";import{t as s}from"./selectors-h1hSARvO.js";var c=i(a(),1),l=t.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
`,u=n(),d=({recipes:e})=>(0,u.jsx)(l,{children:e.map(e=>(0,u.jsx)(g,{recipe:e},e.id))}),f=t.li`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 22px;

  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    border: ${({theme:e})=>e.colors.hoverBorderAccent};
    box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
  }

  img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: ${({theme:e})=>e.radii.lg};
    margin-bottom: 16px;
  }
`,p=t.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,m=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,h=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    padding: 6px 10px;

    font-size: 12px;
    font-weight: 600;

    background-color: ${({theme:e})=>e.colors.cardSecondary};

    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.lg};

    color: ${({theme:e})=>e.colors.accentSecondary};
  }
`,g=({recipe:e})=>{let{recipe_name:t,tags:n=[`easy`,`healthy`],cooking_time:r=10,ingredients:i,instructions:a}=e;if(e)return(0,u.jsxs)(f,{children:[(0,u.jsx)(`img`,{src:``,alt:``}),(0,u.jsx)(p,{children:t.toUpperCase()}),(0,u.jsxs)(m,{children:[(0,u.jsxs)(`span`,{children:[`Prep: `,r,`m `]}),(0,u.jsx)(h,{children:n.map(e=>(0,u.jsx)(`li`,{children:(0,u.jsx)(`span`,{children:e.toUpperCase()})}))}),(0,u.jsx)(`p`,{})]})]})},_=()=>{let t=r(),n=o(s),i=[`easy`,`hard`,`healthy`];(0,c.useEffect)(()=>{t(e())},[t]);let a=e=>{console.log(e)};return(0,u.jsxs)(`div`,{style:{margin:`20px 50px`},children:[(0,u.jsx)(`h1`,{children:`Home Page`}),(0,u.jsx)(`ul`,{children:i.map(e=>(0,u.jsx)(`li`,{children:(0,u.jsx)(`button`,{type:`button`,onClick:a,children:e.toUpperCase()})},e))}),(0,u.jsx)(d,{recipes:n})]})};export{_ as default};