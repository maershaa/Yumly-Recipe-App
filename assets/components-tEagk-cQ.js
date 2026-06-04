import{a as e,b as t,l as n,r,v as i,x as a,y as o}from"./index-f52xWSV9.js";var s=i.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  justify-content: center;
`,c=a(t(),1),l=o(),u=({recipes:e})=>(0,l.jsx)(s,{children:(0,c.useMemo)(()=>e.filter((e,t,n)=>n.findIndex(t=>t.recipe_name===e.recipe_name)===t),[e]).map(e=>(0,l.jsx)(h,{recipe:e},e.id))}),d=i.li`
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
`,f=i.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,p=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,m=i.ul`
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
`,h=({recipe:e})=>{let t=n(),{id:r,recipe_name:i,image_url:a,tags:o,cooking_time:s}=e,c=e=>{t(`/recipes/${e}`)};if(e)return(0,l.jsxs)(d,{onClick:()=>c(r),children:[(0,l.jsx)(`img`,{src:a,alt:i,loading:`lazy`}),(0,l.jsx)(f,{children:i}),(0,l.jsxs)(p,{children:[(0,l.jsxs)(`span`,{children:[`Prep time: `,s,`m `]}),(0,l.jsx)(m,{children:o?.map(e=>(0,l.jsx)(`li`,{children:(0,l.jsx)(`span`,{children:e.toUpperCase()})},e))})]})]})},g=i.ul`
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
`,_=({tags:e,setSelectedTag:t,selectedTag:n})=>(0,l.jsx)(g,{children:e.map(e=>(0,l.jsx)(`li`,{className:e===n?`active`:``,children:(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(e),children:e.toUpperCase()})},e))}),v=i.div`
  position: relative;
  display: flex;
  margin: 50px auto;
  width: 100%;
  max-width: 500px;
`,y=i.div`
  position: absolute;

  left: 16px;
  top: 50%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.colors.textSecondary};

  pointer-events: none;
`,b=i.input`
  width: 100%;

  padding: 14px 16px 14px 48px;

  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  background-color: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.textPrimary};

  font-size: 1rem;

  &:focus {
    outline: none;

    border-color: ${({theme:e})=>e.colors.accent};

    box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
  }
`,x=({type:e,name:t,placeholder:n,filterValue:i,setFilterValue:a})=>(0,l.jsxs)(v,{children:[(0,l.jsx)(y,{children:(0,l.jsx)(r,{size:18})}),(0,l.jsx)(b,{type:e,name:t,placeholder:n,value:i,onChange:e=>a(e.target.value)})]}),S=i.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  border: 2px solid pink;
  margin: 0 auto;
  padding: 50px;
`,C=({recipe:e})=>{let{recipe_name:t,image_url:n,cooking_time:r,tags:i=[],ingredients:a=[],instructions:o}=e;return(0,l.jsxs)(S,{children:[(0,l.jsx)(`div`,{className:`imgWrapper`,children:(0,l.jsx)(`img`,{src:n,alt:t,loading:`lazy`})}),(0,l.jsxs)(`div`,{className:`contentWrapper`,children:[(0,l.jsx)(`h2`,{children:t}),r&&(0,l.jsxs)(`span`,{children:[`Prep time: `,r,` min`]}),(0,l.jsx)(`ul`,{children:i?.map(e=>(0,l.jsx)(`li`,{children:(0,l.jsx)(`span`,{children:e.toUpperCase()})},e))}),(0,l.jsx)(`h3`,{children:`Ingredients`}),(0,l.jsx)(`ul`,{children:a.map((e,t)=>(0,l.jsx)(`li`,{children:(0,l.jsxs)(`span`,{children:[e.name,` — `,e.amount]})},t))}),(0,l.jsx)(`h3`,{children:`Instructions`}),(0,l.jsx)(`ul`,{children:JSON.parse(o).map((e,t)=>(0,l.jsx)(`li`,{children:`${t+1}. ${e}`},t))})]})]})},w=i.header`
  display: flex;
  align-items: center;
  justify-content: center;
`,T=({children:t,title:n})=>(0,l.jsxs)(w,{children:[(0,l.jsx)(e,{title:n}),t]});export{u as a,_ as i,C as n,x as r,T as t};