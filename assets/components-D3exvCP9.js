import{D as e,E as t,O as n,S as r,T as i,d as a,f as o,g as s,l as c,n as l,o as u,s as d,u as f,w as p}from"./index-Cp3155xx.js";var m=i.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 380px));
  gap: 24px;
  width: 100%;
  justify-content: space-evenly;
`,h=n(e(),1),g=t(),_=({recipes:e})=>(0,g.jsx)(m,{children:(0,h.useMemo)(()=>e.filter((e,t,n)=>n.findIndex(t=>t.recipe_name===e.recipe_name)===t),[e]).map(e=>(0,g.jsx)(w,{recipe:e},e.id))}),v=`/Yumly-Recipe-App/assets/AddImgPlaceholder-DDbwgLW1.png`,y=`/Yumly-Recipe-App/assets/noImgPlaceholder-DJz9WGul.png`,b=i.li`
  cursor: pointer;
  max-width: 30vw;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 22px;

  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  transition: ${({theme:e})=>e.transitions.main};

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
`,x=i.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,S=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,C=i.ul`
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
`,w=({recipe:e})=>{let t=s(),{id:n,recipe_name:r,image_url:i,tags:a,cooking_time:o}=e,c=e=>{t(`/recipes/${e}`)};if(e)return(0,g.jsxs)(b,{onClick:()=>c(n),children:[(0,g.jsx)(`img`,{src:i||y,alt:r,loading:`lazy`}),(0,g.jsx)(x,{children:r}),(0,g.jsxs)(S,{children:[(0,g.jsxs)(`span`,{children:[`Prep time: `,o,`m `]}),(0,g.jsx)(C,{children:a?.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsx)(`span`,{children:e.toUpperCase()})},e))})]})]})},T=i.ul`
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
`,E=({tags:e,setSelectedTag:t,selectedTag:n})=>(0,g.jsxs)(T,{children:[(0,g.jsx)(`li`,{className:n===`all`?`active`:``,children:(0,g.jsx)(`button`,{type:`button`,onClick:()=>t(`all`),children:`ALL`})},`all`),e.map(e=>(0,g.jsx)(`li`,{className:e===n?`active`:``,children:(0,g.jsx)(`button`,{type:`button`,onClick:()=>t(e),children:e.toUpperCase()})},e))]}),D=i.div`
  position: relative;
  display: flex;
  margin: 50px auto;
  width: 100%;
  max-width: 500px;
`,O=i.div`
  position: absolute;

  left: 16px;
  top: 50%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.colors.textSecondary};

  pointer-events: none;
`,k=i.input`
  width: 100%;

  padding: 14px 16px 14px 48px;

  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  background-color: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.textPrimary};

  font-size: 1rem;

  &:focus {
    outline: none;

    border: ${({theme:e})=>e.colors.accent};

    box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.textSecondary};
  }
`,A=({type:e,name:t,placeholder:n,filterValue:r,setFilterValue:i})=>(0,g.jsxs)(D,{children:[(0,g.jsx)(O,{children:(0,g.jsx)(u,{size:18})}),(0,g.jsx)(k,{type:e,name:t,placeholder:n,value:r,onChange:e=>i(e.target.value)})]}),j=i.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-around;

  border: 2px solid pink;
  margin: 0 auto;
  padding: 50px;
`,M=i.div`
  img {
    width: 100%;
    max-width: 500px;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
`,N=i.div``,P=({recipe:e})=>{let{recipe_name:t,image_url:n,cooking_time:r,tags:i=[],ingredients:a=[],instructions:o}=e;return(0,g.jsxs)(j,{children:[(0,g.jsx)(M,{children:(0,g.jsx)(`img`,{src:n||y,alt:t,loading:`lazy`})}),(0,g.jsxs)(N,{children:[(0,g.jsx)(`h2`,{children:t}),r&&(0,g.jsxs)(`span`,{children:[`Prep time: `,r,` min`]}),(0,g.jsx)(`ul`,{children:i?.map(e=>(0,g.jsx)(`li`,{children:(0,g.jsx)(`span`,{children:e.toUpperCase()})},e))}),(0,g.jsx)(`h3`,{children:`Ingredients`}),(0,g.jsx)(`ul`,{children:a.map((e,t)=>(0,g.jsx)(`li`,{children:(0,g.jsxs)(`span`,{children:[e.name,` — `,e.amount]})},t))}),(0,g.jsx)(`h3`,{children:`Instructions`}),(0,g.jsx)(`ul`,{children:o.map((e,t)=>(0,g.jsx)(`li`,{children:`${t+1}. ${e}`},t))})]})]})},ee=i.header`
  display: flex;
  align-items: center;
  justify-content: center;
`,F=({children:e,title:t})=>(0,g.jsxs)(ee,{children:[(0,g.jsx)(c,{title:t}),e]}),I=i.form`
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
`,L=i.div`
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

    transition: ${({theme:e})=>e.transitions.main};

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
`,R=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 420px;
  }
`,z=i.div`
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex: 1;
    max-width: 700px;
  }
`;i.button`
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
`;var B=()=>(0,h.useCallback)(async(e,t)=>{try{let{data:n,error:i}=await r.from(`recipes`).insert({...e,user_id:t}).select();if(i)throw i;return console.log(`🚀 ~ Recipe successfully created:`,n),n}catch(e){throw console.error(`Error creating recipe:`,e.message),e}},[]),V=async(e,t)=>{try{let{data:n,error:i}=await r.storage.from(`recipeImage`).upload(e,t,{cacheControl:`3600`,upsert:!0});if(i)throw i;console.log(`🚀 ~ Upload success ~ data:`,n);let{data:a}=r.storage.from(`recipeImage`).getPublicUrl(e);return a.publicUrl}catch(e){throw console.error(`Error saving recipe:`,e.message),e}},H=()=>({id:crypto.randomUUID(),name:``,amount:``,unit:`g`}),U=()=>({id:crypto.randomUUID(),text:``}),W=e=>e<=30?`easy`:e>30&&e<=50?`medium`:e>50?`hard`:null,G=(...e)=>[...e.filter(e=>typeof e==`string`&&e.trim().length>0)],K=e=>{let t=W(Number(e.cooking_time));return{...e,ingredients:e.ingredients.map(e=>({name:e.name.trim(),amount:parseFloat(e.amount),unit:e.unit})),instructions:e.instructions.map((e,t)=>({step:t+1,text:e.text.trim()})),calories:null,difficulty:t,likes:0,tags:G(e.cuisine,t)}},q=()=>{let[e,t]=(0,h.useState)(!1),{id:n}=p(l),r=B(),i=()=>({recipe_name:``,cuisine:``,cooking_time:``,image_url:``,ingredients:[H(),H(),H()],instructions:[U(),U(),U()]}),[a,s]=(0,h.useState)(i),c=()=>{let e=a.recipe_name.trim().length>=3,t=a.cuisine!==``,n=Number(a.cooking_time)>0,r=a.ingredients.length>=3&&a.ingredients.every(e=>e.name.trim()&&Number(e.amount)>0),i=a.instructions.length>=3&&a.instructions.every(e=>e.text.trim().length>0);return e&&t&&n&&r&&i},u=async i=>{if(i.preventDefault(),c()&&!e)try{t(!0),await r(K(a),n),f()}catch(e){console.error(e)}finally{t(!1)}},f=()=>{s(i())};return(0,g.jsxs)(I,{onSubmit:u,children:[(0,g.jsxs)(R,{children:[(0,g.jsx)(L,{children:(0,g.jsx)(Q,{values:a,onChange:e=>{let{name:t,value:n}=e.target;s(e=>({...e,[t]:n}))},handleImageUpload:async e=>{let t=e.target.files[0];if(!t)return;if(t.size>5*1024*1024){alert(`Слишком большой файл. Выберите файл до 5 мб`);return}let r=t.name.split(`.`).pop(),i=`${n}/${`${crypto.randomUUID()}.${r}`}`;try{let e=await V(i,t);s(t=>({...t,image_url:e}))}catch(e){console.error(`Ошибка при загрузке изображения:`,e)}},removeImage:()=>{s(e=>({...e,image_url:``}))}})}),(0,g.jsx)(L,{children:(0,g.jsx)(te,{ingredients:a.ingredients,onChange:(e,t)=>{let{name:n,value:r}=t.target;s(t=>({...t,ingredients:t.ingredients.map(t=>t.id===e?{...t,[n]:r}:t)}))},addIngredient:()=>{s(e=>({...e,ingredients:[...e.ingredients,H()]}))},removeIngredient:e=>{s(t=>({...t,ingredients:t.ingredients.filter(t=>t.id!==e)}))}})})]}),(0,g.jsxs)(z,{children:[(0,g.jsx)(L,{children:(0,g.jsx)(re,{instructions:a.instructions,onChange:(e,t)=>{let{value:n}=t.target;s(t=>({...t,instructions:t.instructions.map(t=>t.id===e?{...t,text:n}:t)}))},addStep:()=>{s(e=>({...e,instructions:[...e.instructions,U()]}))},removeStep:e=>{s(t=>({...t,instructions:t.instructions.filter(t=>t.id!==e)}))}})}),(0,g.jsxs)(d,{type:`submit`,variant:`submit`,disabled:!c()||e,children:[(0,g.jsx)(o,{}),`Create Recipe`]})]})]})},J=i.div`
  position: relative;

  display: flex;
  margin: 0 auto;

  background-image: url(${v});
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
`,Y=i.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 30px;

  img {
    width: 100%;

    border: 2px dashed ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.lg};

    overflow: hidden;
  }

  button {
    width: 100%;
  }
`,X=[`Ukrainian`,`American`,`British`,`Chinese`,`French`,`German`,`Greek`,`Indian`,`Italian`,`Japanese`,`Jewish`,`Korean`,`Mexican`,`Spanish`,`Thai`,`Vietnamese`],Z=[`g`,`kg`,`ml`,`l`,`pcs`,`tbsp`,`tsp`],Q=({values:e,onChange:t,handleImageUpload:n,removeImage:r})=>{let{recipe_name:i,cuisine:a,cooking_time:o,image_url:s}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`h2`,{children:`Recipe Info`}),(0,g.jsxs)(`label`,{children:[`Title`,(0,g.jsx)(`input`,{type:`text`,name:`recipe_name`,onChange:t,value:i,placeholder:`Recipe title`})]}),(0,g.jsxs)(`label`,{children:[`Choose a Cuisine`,(0,g.jsxs)(`select`,{name:`cuisine`,value:a,onChange:t,children:[(0,g.jsx)(`option`,{value:``,disabled:!0,children:`Cuisine...`}),X.map(e=>(0,g.jsx)(`option`,{value:e,children:e},e))]})]}),(0,g.jsxs)(`label`,{children:[`Cooking Time`,(0,g.jsx)(`input`,{type:`number`,name:`cooking_time`,value:o,onChange:t})]}),s?(0,g.jsxs)(Y,{children:[(0,g.jsx)(`img`,{src:s,alt:i||`Recipe image`,loading:`lazy`}),(0,g.jsx)(d,{variant:`delete`,onClick:r,children:`Replace image`})]}):(0,g.jsx)(J,{children:(0,g.jsx)(`label`,{children:(0,g.jsx)(`input`,{type:`file`,accept:`.jpg, .png, .jpeg`,multiple:!1,onChange:n,name:`image_url`})})})]})},$=i.div`
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
`,te=({ingredients:e,onChange:t,addIngredient:n,removeIngredient:r})=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`h2`,{children:`Ingredients`}),e.map(({id:n,name:i,amount:o})=>(0,g.jsxs)($,{children:[(0,g.jsxs)(`label`,{children:[(0,g.jsx)(`input`,{type:`text`,name:`name`,onChange:e=>t(n,e),value:i,placeholder:`Ingredient name`}),` `,(0,g.jsx)(`input`,{type:`number`,name:`amount`,min:1,onChange:e=>t(n,e),value:o,placeholder:`Amount`}),(0,g.jsx)(`select`,{name:`unit`,onChange:e=>t(n,e),children:Z.map(e=>(0,g.jsx)(`option`,{value:e,children:e},e))})]}),(0,g.jsx)(d,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,g.jsx)(a,{})})]},n)),(0,g.jsxs)(d,{variant:`add`,onClick:n,children:[(0,g.jsx)(f,{}),`Add Ingredient`]})]}),ne=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    font-size: 1.5;
  }
`,re=({instructions:e,onChange:t,addStep:n,removeStep:r})=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`h2`,{children:`Steps`}),e.map(({id:n,text:i},o)=>(0,g.jsxs)(ne,{children:[(0,g.jsxs)(`label`,{children:[(0,g.jsxs)(`span`,{className:`step-number`,children:[o+1,`.`]}),` `,(0,g.jsx)(`textarea`,{type:`text`,name:`step`,onChange:e=>t(n,e),value:i,placeholder:`Describe step ${o+1}`,rows:3})]}),(0,g.jsx)(d,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,g.jsx)(a,{})})]},n)),(0,g.jsxs)(d,{variant:`add`,onClick:n,children:[(0,g.jsx)(f,{}),`Add Step`]})]});export{E as a,A as i,F as n,_ as o,P as r,q as t};