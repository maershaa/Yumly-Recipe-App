import{a as e,c as t,d as n,f as r,h as i,l as a,m as o,p as s,u as c}from"./index-DRkuNqqO.js";import{t as l}from"./selectors-h1hSARvO.js";var u=i(o(),1),d=r.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
`,f=s(),p=({recipes:e})=>(0,f.jsx)(d,{children:(0,u.useMemo)(()=>e.filter(e=>e.image_url!==null),[e]).map(e=>(0,f.jsx)(v,{recipe:e},e.id))}),m=r.li`
  cursor: pointer;

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
    display: block;
    height: 220px;

    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: ${({theme:e})=>e.radii.lg};
    margin-bottom: 16px;
  }
`,h=r.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,g=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,_=r.ul`
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
`,v=({recipe:t})=>{let n=e(),{id:r,recipe_name:i,image_url:a,tags:o,cooking_time:s}=t,c=e=>{n(`recipes:${e}`)};if(t)return(0,f.jsxs)(m,{onClick:()=>c(r),children:[(0,f.jsx)(`img`,{src:a,alt:i,loading:`lazy`}),(0,f.jsx)(h,{children:i}),(0,f.jsxs)(g,{children:[(0,f.jsxs)(`span`,{children:[`Prep: `,s,`m `]}),(0,f.jsx)(_,{children:o?.map(e=>(0,f.jsx)(`li`,{children:(0,f.jsx)(`span`,{children:e.toUpperCase()})},e))}),(0,f.jsx)(`p`,{})]})]})},y=r.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;

  margin: 50px auto;

  li {
    padding: 6px 10px;

    background-color: ${({theme:e})=>e.colors.cardSecondary};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.lg};
    color: ${({theme:e})=>e.colors.accentSecondary};

    &.active {
      background-color: ${({theme:e})=>e.colors.accentSecondary};
      border: ${({theme:e})=>e.colors.hoverBorderSecondary};
      box-shadow: ${({theme:e})=>e.colors.hoverShadowSecondary};
    }

    button {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`,b=({tags:e,setSelectedTag:t,selectedTag:n})=>(0,f.jsx)(y,{children:e.map(e=>(0,f.jsx)(`li`,{className:e===n?`active`:``,children:(0,f.jsx)(`button`,{type:`button`,onClick:()=>t(e),children:e.toUpperCase()})},e))}),x=()=>{let[e,r]=(0,u.useState)(``),i=n(l),o=c(),s=(0,u.useMemo)(()=>i.filter(e=>e?.tags).map(e=>e.tags).reduce((e,t)=>(t.forEach(t=>{if(e.includes(t))return e;e.push(t)}),e),[]),[i]);(0,u.useEffect)(()=>{o(t()),o(a())},[o]);let d=(0,u.useMemo)(()=>e?i.filter(t=>t.tags?.includes(e)):i,[e,i]);return(0,f.jsxs)(`div`,{style:{margin:`20px 50px`},children:[(0,f.jsx)(`h1`,{children:`Home Page`}),(0,f.jsx)(b,{tags:s,selectedTag:e,setSelectedTag:r}),(0,f.jsx)(p,{recipes:d})]})};export{x as default};