import{_ as e,a as t,g as n,h as r,m as i}from"./index-BDajHPR8.js";var a=i.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  justify-content: center;
`,o=e(n(),1),s=r(),c=({recipes:e})=>(0,s.jsx)(a,{children:(0,o.useMemo)(()=>e.filter((e,t,n)=>n.findIndex(t=>t.recipe_name===e.recipe_name)===t),[e]).map(e=>(0,s.jsx)(p,{recipe:e},e.id))}),l=i.li`
  cursor: pointer;
  max-width: 30vw;

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
`,u=i.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,d=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,f=i.ul`
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
`,p=({recipe:e})=>{let n=t(),{id:r,recipe_name:i,image_url:a,tags:o,cooking_time:c}=e,p=e=>{n(`/recipes/${e}`)};if(e)return(0,s.jsxs)(l,{onClick:()=>p(r),children:[(0,s.jsx)(`img`,{src:a,alt:i,loading:`lazy`}),(0,s.jsx)(u,{children:i}),(0,s.jsxs)(d,{children:[(0,s.jsxs)(`span`,{children:[`Prep time: `,c,`m `]}),(0,s.jsx)(f,{children:o?.map(e=>(0,s.jsx)(`li`,{children:(0,s.jsx)(`span`,{children:e.toUpperCase()})},e))})]})]})},m=i.ul`
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
`,h=({tags:e,setSelectedTag:t,selectedTag:n})=>(0,s.jsx)(m,{children:e.map(e=>(0,s.jsx)(`li`,{className:e===n?`active`:``,children:(0,s.jsx)(`button`,{type:`button`,onClick:()=>t(e),children:e.toUpperCase()})},e))}),g=i.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  border: 2px solid pink;
  margin: 0 auto;
  padding: 50px;
`,_=({recipe:e})=>{let{recipe_name:t,image_url:n,cooking_time:r,tags:i=[],ingredients:a=[],instructions:o}=e;return(0,s.jsxs)(g,{children:[(0,s.jsx)(`div`,{className:`imgWrapper`,children:(0,s.jsx)(`img`,{src:n,alt:t,loading:`lazy`})}),(0,s.jsxs)(`div`,{className:`contentWrapper`,children:[(0,s.jsx)(`h2`,{children:t}),r&&(0,s.jsxs)(`span`,{children:[`Prep time: `,r,` min`]}),(0,s.jsx)(`ul`,{children:i?.map(e=>(0,s.jsx)(`li`,{children:(0,s.jsx)(`span`,{children:e.toUpperCase()})},e))}),(0,s.jsx)(`h3`,{children:`Ingredients`}),(0,s.jsx)(`ul`,{children:a.map((e,t)=>(0,s.jsx)(`li`,{children:(0,s.jsxs)(`span`,{children:[e.name,` — `,e.amount]})},t))}),(0,s.jsx)(`h3`,{children:`Instructions`}),(0,s.jsx)(`ul`,{children:JSON.parse(o).map((e,t)=>(0,s.jsx)(`li`,{children:`${t+1}. ${e}`},t))})]})]})};export{h as n,c as r,_ as t};