import{C as e,S as t,T as n,c as r,i,l as a,o,p as s,r as c,s as l,w as u}from"./index-DxNfaLH0.js";var d=t.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  justify-content: center;
`,f=n(u(),1),p=e(),m=({recipes:e})=>(0,p.jsx)(d,{children:(0,f.useMemo)(()=>e.filter((e,t,n)=>n.findIndex(t=>t.recipe_name===e.recipe_name)===t),[e]).map(e=>(0,p.jsx)(y,{recipe:e},e.id))}),h=t.li`
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
`,g=t.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,_=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,v=t.ul`
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
`,y=({recipe:e})=>{let t=s(),{id:n,recipe_name:r,image_url:i,tags:a,cooking_time:o}=e,c=e=>{t(`/recipes/${e}`)};if(e)return(0,p.jsxs)(h,{onClick:()=>c(n),children:[(0,p.jsx)(`img`,{src:i,alt:r,loading:`lazy`}),(0,p.jsx)(g,{children:r}),(0,p.jsxs)(_,{children:[(0,p.jsxs)(`span`,{children:[`Prep time: `,o,`m `]}),(0,p.jsx)(v,{children:a?.map(e=>(0,p.jsx)(`li`,{children:(0,p.jsx)(`span`,{children:e.toUpperCase()})},e))})]})]})},b=t.ul`
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
`,x=({tags:e,setSelectedTag:t,selectedTag:n})=>(0,p.jsx)(b,{children:e.map(e=>(0,p.jsx)(`li`,{className:e===n?`active`:``,children:(0,p.jsx)(`button`,{type:`button`,onClick:()=>t(e),children:e.toUpperCase()})},e))}),S=t.div`
  position: relative;
  display: flex;
  margin: 50px auto;
  width: 100%;
  max-width: 500px;
`,C=t.div`
  position: absolute;

  left: 16px;
  top: 50%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.colors.textSecondary};

  pointer-events: none;
`,w=t.input`
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
`,T=({type:e,name:t,placeholder:n,filterValue:r,setFilterValue:i})=>(0,p.jsxs)(S,{children:[(0,p.jsx)(C,{children:(0,p.jsx)(c,{size:18})}),(0,p.jsx)(w,{type:e,name:t,placeholder:n,value:r,onChange:e=>i(e.target.value)})]}),E=t.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  border: 2px solid pink;
  margin: 0 auto;
  padding: 50px;
`,D=({recipe:e})=>{let{recipe_name:t,image_url:n,cooking_time:r,tags:i=[],ingredients:a=[],instructions:o}=e;return(0,p.jsxs)(E,{children:[(0,p.jsx)(`div`,{className:`imgWrapper`,children:(0,p.jsx)(`img`,{src:n,alt:t,loading:`lazy`})}),(0,p.jsxs)(`div`,{className:`contentWrapper`,children:[(0,p.jsx)(`h2`,{children:t}),r&&(0,p.jsxs)(`span`,{children:[`Prep time: `,r,` min`]}),(0,p.jsx)(`ul`,{children:i?.map(e=>(0,p.jsx)(`li`,{children:(0,p.jsx)(`span`,{children:e.toUpperCase()})},e))}),(0,p.jsx)(`h3`,{children:`Ingredients`}),(0,p.jsx)(`ul`,{children:a.map((e,t)=>(0,p.jsx)(`li`,{children:(0,p.jsxs)(`span`,{children:[e.name,` — `,e.amount]})},t))}),(0,p.jsx)(`h3`,{children:`Instructions`}),(0,p.jsx)(`ul`,{children:JSON.parse(o).map((e,t)=>(0,p.jsx)(`li`,{children:`${t+1}. ${e}`},t))})]})]})},O=t.header`
  display: flex;
  align-items: center;
  justify-content: center;
`,k=({children:e,title:t})=>(0,p.jsxs)(O,{children:[(0,p.jsx)(o,{title:t}),e]}),A=t.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 32px auto;

  justify-content: center;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    gap: 32px;
  }
`,j=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  padding: 20px;

  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 28px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    padding: 32px;
  }

  label {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({theme:e})=>e.colors.textPrimary};
    font-weight: 500;
  }

  input,
  select {
    width: 100%;
    padding: 14px 18px;
    background-color: transparent;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.md};
    color: ${({theme:e})=>e.colors.textPrimary};
    outline: none;
    transition: all 0.3s ease;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      flex: 1;
    }

    &:hover,
    &:focus {
      border: ${({theme:e})=>e.colors.hoverBorderAccent};
      box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
    }

    &::placeholder {
      color: ${({theme:e})=>e.colors.textSecondary};
    }

    option {
      color: ${({theme:e})=>e.colors.textPrimary};
      font-weight: 500;
    }
  }

  textarea {
    width: 100%;
    padding: 14px 18px;
    background-color: transparent;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.md};
    color: ${({theme:e})=>e.colors.textPrimary};
    resize: vertical;
    outline: none;

    &:hover,
    &:focus {
      border: ${({theme:e})=>e.colors.hoverBorderAccent};
      box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
    }
  }
`,M=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 420px;
  }
`,N=t.div`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex: 1;
    max-width: 700px;
  }
`;t.button`
  width: 100%;
  height: 56px;

  font-size: 16px;
  font-weight: 700;

  display: flex;

  margin-top: 24px auto;
  padding: 18px;
  font-size: 16px;
  font-weight: 700;

  border-radius: ${({theme:e})=>e.radii.lg};
  background-color: ${({theme:e})=>e.colors.accentSecondary};
  color: ${({theme:e})=>e.colors.background};

  &:hover {
    box-shadow: ${({theme:e})=>e.colors.hoverShadowSecondary};
  }
`;var P=()=>({id:crypto.randomUUID(),name:``,amount:``,unit:`g`}),F=()=>({id:crypto.randomUUID(),text:``}),I=()=>{let[e,t]=(0,f.useState)({recipe_name:``,cuisine:``,cooking_time:``,ingredients:[P(),P(),P()],instructions:[F(),F(),F()],image_url:``});return(0,p.jsxs)(A,{onSubmit:t=>{t.preventDefault(),console.log(e)},children:[(0,p.jsxs)(M,{children:[(0,p.jsx)(j,{children:(0,p.jsx)(R,{values:e,onChange:e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))}})}),(0,p.jsx)(j,{children:(0,p.jsx)(B,{ingredients:e.ingredients,onChange:(e,n)=>{let{name:r,value:i}=n.target;t(t=>({...t,ingredients:t.ingredients.map(t=>t.id===e?{...t,[r]:i}:t)}))},addIngredient:()=>{t(e=>({...e,ingredients:[...e.ingredients,P()]}))},removeIngredient:e=>{t(t=>({...t,ingredients:t.ingredients.filter(t=>t.id!==e)}))}})})]}),(0,p.jsxs)(N,{children:[(0,p.jsx)(j,{children:(0,p.jsx)(H,{instructions:e.instructions,onChange:(e,n)=>{let{value:r}=n.target;t(t=>({...t,instructions:t.instructions.map(t=>t.id===e?{...t,text:r}:t)}))},addStep:()=>{t(e=>({...e,instructions:[...e.instructions,F()]}))},removeStep:e=>{t(t=>({...t,instructions:t.instructions.filter(t=>t.id!==e)}))}})}),(0,p.jsxs)(i,{type:`submit`,variant:`submit`,children:[(0,p.jsx)(a,{}),`Create Recipe`]})]})]})},L=t.div`
  position: relative;

  display: flex;
  margin: 0 auto;

  background-image: url(${`/Yumly-Recipe-App/assets/AddImgPlaceholder-DDbwgLW1.png`});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  width: 250px;
  height: 250px;

  border: 2px dashed ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  cursor: pointer;

  input {
    position: absolute;

    top: 0;
    left: 0;
    opacity: 0;

    width: 100%;
    height: 100%;

    cursor: pointer;
  }
`,R=({values:e,onChange:t})=>{let n=[`Ukrainian`,`American`,`British`,`Chinese`,`French`,`German`,`Greek`,`Indian`,`Italian`,`Japanese`,`Jewish`,`Korean`,`Mexican`,`Spanish`,`Thai`,`Vietnamese`],{recipe_name:r,cuisine:i,cooking_time:a,image_url:o}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`h2`,{children:`Recipe Info`}),(0,p.jsxs)(`label`,{children:[`Title`,(0,p.jsx)(`input`,{type:`text`,name:`recipe_name`,onChange:t,value:r,placeholder:`Recipe title`})]}),(0,p.jsxs)(`label`,{children:[`Choose a Cuisine`,(0,p.jsxs)(`select`,{name:`cuisine`,value:i,onChange:t,children:[(0,p.jsx)(`option`,{value:``,disabled:!0,children:`Cuisine...`}),n.map(e=>(0,p.jsx)(`option`,{value:e,children:e},e))]})]}),(0,p.jsxs)(`label`,{children:[`Cooking Time`,(0,p.jsx)(`input`,{type:`number`,name:`cooking_time`,value:a,onChange:t})]}),(0,p.jsx)(L,{children:(0,p.jsx)(`label`,{children:(0,p.jsx)(`input`,{type:`file`,accept:`.jpg, .png, .jpeg`,multiple:!1,onChange:t,value:o,name:`image_url`})})})]})},z=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }

  label {
    flex-direction: row;
  }
`,B=({ingredients:e,onChange:t,addIngredient:n,removeIngredient:a})=>{let o=[`g`,`kg`,`ml`,`l`,`pcs`,`tbsp`,`tsp`];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`h2`,{children:`Ingredients`}),e.map(({id:n,name:s,amount:c})=>(0,p.jsxs)(z,{children:[(0,p.jsxs)(`label`,{children:[(0,p.jsx)(`input`,{type:`text`,name:`name`,onChange:e=>t(n,e),value:s,placeholder:`Ingredient name`}),` `,(0,p.jsx)(`input`,{type:`number`,name:`amount`,min:1,onChange:e=>t(n,e),value:c,placeholder:`Amount`}),(0,p.jsx)(`select`,{name:`unit`,onChange:e=>t(n,e),children:o.map(e=>(0,p.jsx)(`option`,{value:e,children:e},e))})]}),(0,p.jsx)(i,{variant:`delete`,onClick:()=>a(n),disabled:e.length<=3,children:(0,p.jsx)(r,{})})]},n)),(0,p.jsxs)(i,{variant:`add`,onClick:n,children:[(0,p.jsx)(l,{}),`Add Ingredient`]})]})},V=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`,H=({instructions:e,onChange:t,addStep:n,removeStep:a})=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`h2`,{children:`Steps`}),e.map(({id:n,text:o},s)=>(0,p.jsxs)(V,{children:[(0,p.jsx)(`label`,{children:(0,p.jsx)(`textarea`,{type:`text`,name:`step`,onChange:e=>t(n,e),value:o,placeholder:`Describe step ${s+1}`,rows:3})}),(0,p.jsx)(i,{variant:`delete`,onClick:()=>a(n),disabled:e.length<=3,children:(0,p.jsx)(r,{})})]},n)),(0,p.jsxs)(i,{variant:`add`,onClick:n,children:[(0,p.jsx)(l,{}),`Add Step`]})]});export{x as a,T as i,k as n,m as o,D as r,I as t};