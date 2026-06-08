import{C as e,E as t,S as n,T as r,a as i,b as a,c as o,i as s,l as c,m as l,n as u,s as d,u as f,w as p}from"./index-039BVXP1.js";var m=e.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  justify-content: center;
`,h=t(r(),1),g=p(),_=({recipes:e})=>(0,g.jsx)(m,{children:(0,h.useMemo)(()=>e.filter((e,t,n)=>n.findIndex(t=>t.recipe_name===e.recipe_name)===t),[e]).map(e=>(0,g.jsx)(S,{recipe:e},e.id))}),v=e.li`
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
`,y=e.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,b=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,x=e.ul`
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
`,S=({recipe:e})=>{let t=l(),{id:n,recipe_name:r,image_url:i,tags:a,cooking_time:o}=e,s=e=>{t(`/recipes/${e}`)};if(e)return(0,g.jsxs)(v,{onClick:()=>s(n),children:[(0,g.jsx)(`img`,{src:i,alt:r,loading:`lazy`}),(0,g.jsx)(y,{children:r}),(0,g.jsxs)(b,{children:[(0,g.jsxs)(`span`,{children:[`Prep time: `,o,`m `]}),(0,g.jsx)(x,{children:a?.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsx)(`span`,{children:e.toUpperCase()})},e))})]})]})},C=e.ul`
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
`,w=({tags:e,setSelectedTag:t,selectedTag:n})=>(0,g.jsx)(C,{children:e.map(e=>(0,g.jsx)(`li`,{className:e===n?`active`:``,children:(0,g.jsx)(`button`,{type:`button`,onClick:()=>t(e),children:e.toUpperCase()})},e))}),T=e.div`
  position: relative;
  display: flex;
  margin: 50px auto;
  width: 100%;
  max-width: 500px;
`,E=e.div`
  position: absolute;

  left: 16px;
  top: 50%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.colors.textSecondary};

  pointer-events: none;
`,D=e.input`
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
`,O=({type:e,name:t,placeholder:n,filterValue:r,setFilterValue:i})=>(0,g.jsxs)(T,{children:[(0,g.jsx)(E,{children:(0,g.jsx)(s,{size:18})}),(0,g.jsx)(D,{type:e,name:t,placeholder:n,value:r,onChange:e=>i(e.target.value)})]}),k=e.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  border: 2px solid pink;
  margin: 0 auto;
  padding: 50px;
`,A=({recipe:e})=>{let{recipe_name:t,image_url:n,cooking_time:r,tags:i=[],ingredients:a=[],instructions:o}=e;return(0,g.jsxs)(k,{children:[(0,g.jsx)(`div`,{className:`imgWrapper`,children:(0,g.jsx)(`img`,{src:n,alt:t,loading:`lazy`})}),(0,g.jsxs)(`div`,{className:`contentWrapper`,children:[(0,g.jsx)(`h2`,{children:t}),r&&(0,g.jsxs)(`span`,{children:[`Prep time: `,r,` min`]}),(0,g.jsx)(`ul`,{children:i?.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsx)(`span`,{children:e.toUpperCase()})},e))}),(0,g.jsx)(`h3`,{children:`Ingredients`}),(0,g.jsx)(`ul`,{children:a.map((e,t)=>(0,g.jsx)(`li`,{children:(0,g.jsxs)(`span`,{children:[e.name,` — `,e.amount]})},t))}),(0,g.jsx)(`h3`,{children:`Instructions`}),(0,g.jsx)(`ul`,{children:o.map((e,t)=>(0,g.jsx)(`li`,{children:`${t+1}. ${e}`},t))})]})]})},j=e.header`
  display: flex;
  align-items: center;
  justify-content: center;
`,M=({children:e,title:t})=>(0,g.jsxs)(j,{children:[(0,g.jsx)(d,{title:t}),e]}),N=e.form`
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
`,P=e.div`
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
`,F=e.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 420px;
  }
`,I=e.div`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex: 1;
    max-width: 700px;
  }
`;e.button`
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
`;var L=()=>({id:crypto.randomUUID(),name:``,amount:``,unit:`g`}),R=()=>({id:crypto.randomUUID(),text:``}),z=()=>{let[e,t]=(0,h.useState)({user_id:n(u),recipe_name:``,cuisine:``,cooking_time:``,ingredients:[L(),L(),L()],instructions:[R(),R(),R()],image_url:``}),r=(0,h.useCallback)(async e=>{try{let{data:t,error:n}=await a.from(`recipes`).insert(e).select();if(n)throw n;return console.log(`🚀 ~ Recipe successfully created:`,t),t}catch(e){throw console.error(`Error creating recipe:`,e.message),e}},[]);return(0,g.jsxs)(N,{onSubmit:t=>{t.preventDefault(),r(e)},children:[(0,g.jsxs)(F,{children:[(0,g.jsx)(P,{children:(0,g.jsx)(V,{values:e,onChange:e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))}})}),(0,g.jsx)(P,{children:(0,g.jsx)(U,{ingredients:e.ingredients,onChange:(e,n)=>{let{name:r,value:i}=n.target;t(t=>({...t,ingredients:t.ingredients.map(t=>t.id===e?{...t,[r]:i}:t)}))},addIngredient:()=>{t(e=>({...e,ingredients:[...e.ingredients,L()]}))},removeIngredient:e=>{t(t=>({...t,ingredients:t.ingredients.filter(t=>t.id!==e)}))}})})]}),(0,g.jsxs)(I,{children:[(0,g.jsx)(P,{children:(0,g.jsx)(G,{instructions:e.instructions,onChange:(e,n)=>{let{value:r}=n.target;t(t=>({...t,instructions:t.instructions.map(t=>t.id===e?{...t,text:r}:t)}))},addStep:()=>{t(e=>({...e,instructions:[...e.instructions,R()]}))},removeStep:e=>{t(t=>({...t,instructions:t.instructions.filter(t=>t.id!==e)}))}})}),(0,g.jsxs)(i,{type:`submit`,variant:`submit`,children:[(0,g.jsx)(f,{}),`Create Recipe`]})]})]})},B=e.div`
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
`,V=({values:e,onChange:t})=>{let n=[`Ukrainian`,`American`,`British`,`Chinese`,`French`,`German`,`Greek`,`Indian`,`Italian`,`Japanese`,`Jewish`,`Korean`,`Mexican`,`Spanish`,`Thai`,`Vietnamese`],{recipe_name:r,cuisine:i,cooking_time:a,image_url:o}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`h2`,{children:`Recipe Info`}),(0,g.jsxs)(`label`,{children:[`Title`,(0,g.jsx)(`input`,{type:`text`,name:`recipe_name`,onChange:t,value:r,placeholder:`Recipe title`})]}),(0,g.jsxs)(`label`,{children:[`Choose a Cuisine`,(0,g.jsxs)(`select`,{name:`cuisine`,value:i,onChange:t,children:[(0,g.jsx)(`option`,{value:``,disabled:!0,children:`Cuisine...`}),n.map(e=>(0,g.jsx)(`option`,{value:e,children:e},e))]})]}),(0,g.jsxs)(`label`,{children:[`Cooking Time`,(0,g.jsx)(`input`,{type:`number`,name:`cooking_time`,value:a,onChange:t})]}),(0,g.jsx)(B,{children:(0,g.jsx)(`label`,{children:(0,g.jsx)(`input`,{type:`file`,accept:`.jpg, .png, .jpeg`,multiple:!1,onChange:t,value:o,name:`image_url`})})})]})},H=e.div`
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
`,U=({ingredients:e,onChange:t,addIngredient:n,removeIngredient:r})=>{let a=[`g`,`kg`,`ml`,`l`,`pcs`,`tbsp`,`tsp`];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`h2`,{children:`Ingredients`}),e.map(({id:n,name:o,amount:s})=>(0,g.jsxs)(H,{children:[(0,g.jsxs)(`label`,{children:[(0,g.jsx)(`input`,{type:`text`,name:`name`,onChange:e=>t(n,e),value:o,placeholder:`Ingredient name`}),` `,(0,g.jsx)(`input`,{type:`number`,name:`amount`,min:1,onChange:e=>t(n,e),value:s,placeholder:`Amount`}),(0,g.jsx)(`select`,{name:`unit`,onChange:e=>t(n,e),children:a.map(e=>(0,g.jsx)(`option`,{value:e,children:e},e))})]}),(0,g.jsx)(i,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,g.jsx)(c,{})})]},n)),(0,g.jsxs)(i,{variant:`add`,onClick:n,children:[(0,g.jsx)(o,{}),`Add Ingredient`]})]})},W=e.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`,G=({instructions:e,onChange:t,addStep:n,removeStep:r})=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`h2`,{children:`Steps`}),e.map(({id:n,text:a},o)=>(0,g.jsxs)(W,{children:[(0,g.jsx)(`label`,{children:(0,g.jsx)(`textarea`,{type:`text`,name:`step`,onChange:e=>t(n,e),value:a,placeholder:`Describe step ${o+1}`,rows:3})}),(0,g.jsx)(i,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,g.jsx)(c,{})})]},n)),(0,g.jsxs)(i,{variant:`add`,onClick:n,children:[(0,g.jsx)(o,{}),`Add Step`]})]});export{w as a,O as i,M as n,_ as o,A as r,z as t};