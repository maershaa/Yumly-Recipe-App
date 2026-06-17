import{F as e,I as t,L as n,P as r,S as i,T as a,_ as o,b as s,c,d as l,g as u,h as d,j as f,m as p,p as m,u as h,v as g,w as _,x as v,y}from"./index-HpQ0__2G.js";import{n as b}from"./hi-Bixdcraz.js";var x=r.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 380px));
  gap: 24px;
  width: 100%;
  justify-content: space-evenly;
`,S=n(t(),1),C=e(),w=({recipes:e})=>(0,C.jsx)(x,{children:(0,S.useMemo)(()=>e.filter((e,t,n)=>n.findIndex(t=>t.recipe_name===e.recipe_name)===t),[e]).map(e=>(0,C.jsx)(O,{recipe:e},e.id))}),T=`/Yumly-Recipe-App/assets/AddImgPlaceholder-DDbwgLW1.png`,E=`/Yumly-Recipe-App/assets/noImgPlaceholder-DJz9WGul.png`,ee=r.li`
  cursor: pointer;

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
`,te=r.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ne=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,D=r.ul`
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
`,O=({recipe:e})=>{let t=a(),{id:n,recipe_name:r,image_url:i,tags:o,cooking_time:s}=e,c=e=>{t(`/recipes/${e}`)};if(e)return(0,C.jsxs)(ee,{onClick:()=>c(n),children:[(0,C.jsx)(`img`,{src:i||E,alt:r,loading:`lazy`}),(0,C.jsx)(te,{children:r}),(0,C.jsxs)(ne,{children:[(0,C.jsxs)(`span`,{children:[`Prep time: `,s,`m `]}),(0,C.jsx)(D,{children:o?.map(e=>(0,C.jsx)(`li`,{children:(0,C.jsx)(`span`,{children:e.toUpperCase()})},e))})]})]})},k=r.ul`
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
`,A=({tags:e,setSelectedTag:t,selectedTag:n})=>(0,C.jsxs)(k,{children:[(0,C.jsx)(`li`,{className:n===`all`?`active`:``,children:(0,C.jsx)(`button`,{type:`button`,onClick:()=>t(`all`),children:`ALL`})},`all`),e.map(e=>(0,C.jsx)(`li`,{className:e===n?`active`:``,children:(0,C.jsx)(`button`,{type:`button`,onClick:()=>t(e),children:e.toUpperCase()})},e)).slice(1,8)]}),j=r.div`
  position: relative;
  display: flex;
  margin: 50px auto;
  width: 100%;
  max-width: 500px;
`,M=r.div`
  position: absolute;

  left: 16px;
  top: 50%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.colors.textSecondary};

  pointer-events: none;
`,N=r.input`
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
`,P=({type:e,name:t,placeholder:n,filterValue:r,setFilterValue:i})=>(0,C.jsxs)(j,{children:[(0,C.jsx)(M,{children:(0,C.jsx)(h,{size:18})}),(0,C.jsx)(N,{type:e,name:t,placeholder:n,value:r,onChange:e=>i(e.target.value)})]}),F=r.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 0 auto;
  padding: 50px 0;
`,I=({recipe:e})=>{let{tips:t,ingredients:n=[],instructions:r}=e;return(0,C.jsxs)(F,{children:[(0,C.jsx)(be,{recipe:e}),(0,C.jsx)(Ae,{tips:t,ingredients:n,instructions:r})]})},L=r.header`
  display: flex;
  align-items: center;
  justify-content: center;
`,R=({children:e,title:t})=>(0,C.jsxs)(L,{children:[(0,C.jsx)(m,{title:t}),e]}),z=r.form`
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
`,B=r.div`
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
`,V=r.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    max-width: 500px;
  }
`,H=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex: 1;
    max-width: 700px;
  }
`;r.button`
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
`;var U=()=>(0,S.useCallback)(async(e,t)=>{try{let{data:n,error:r}=await f.from(`recipes`).insert({...e,user_id:t}).select();if(r)throw r;return console.log(`🚀 ~ Recipe successfully created:`,n),n}catch(e){throw console.error(`Error creating recipe:`,e.message),e}},[]),W=async(e,t)=>{try{let{data:n,error:r}=await f.storage.from(`recipeImage`).upload(e,t,{cacheControl:`3600`,upsert:!0});if(r)throw r;console.log(`🚀 ~ Upload success ~ data:`,n);let{data:i}=f.storage.from(`recipeImage`).getPublicUrl(e);return i.publicUrl}catch(e){throw console.error(`Error saving recipe:`,e.message),e}},G=()=>async(e,t,n)=>{let{data:r,error:i}=await f.from(`recipes`).update(e).eq(`id`,n).eq(`user_id`,t).select().single();if(i)throw console.error(`Error updating recipe:`,i.message),i;return r},K=async e=>{try{let{data:t,error:n}=await f.from(`recipes`).select(`*`).eq(`id`,e).single();if(n)throw n;return t}catch(e){throw console.error(`Error get recipe details:`,e.message),e}},q=async e=>{try{let{data:t,error:n}=await f.from(`recipes`).select(`*`).eq(`user_id`,e);if(n)throw n;return console.log(`🚀 ~ getUserRecipes ~ data:`,t),t}catch(e){throw console.error(`Error get user recipes:`,e.message),e}},J=()=>({id:crypto.randomUUID(),name:``,amount:``,unit:`g`}),Y=()=>({id:crypto.randomUUID(),text:``}),X=({recipeForm:e,setRecipeForm:t,handleSubmit:n,currentUserId:r,isSubmitting:i,isValid:a,submitButtonText:o})=>{let c=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))},u=async e=>{let n=e.target.files[0];if(!n)return;if(n.size>5*1024*1024){alert(`Слишком большой файл. Выберите файл до 5 мб`);return}let i=n.name.split(`.`).pop(),a=`${r}/${`${crypto.randomUUID()}.${i}`}`;try{let e=await W(a,n);t(t=>({...t,image_url:e}))}catch(e){console.error(`Ошибка при загрузке изображения:`,e)}},d=(e,n)=>{let{name:r,value:i}=n.target;t(t=>({...t,ingredients:t.ingredients.map(t=>t.id===e?{...t,[r]:i}:t)}))},f=(e,n)=>{let{value:r}=n.target;t(t=>({...t,instructions:t.instructions.map(t=>t.id===e?{...t,text:r}:t)}))},p=()=>{t(e=>({...e,ingredients:[...e.ingredients,J()]}))},m=()=>{t(e=>({...e,instructions:[...e.instructions,Y()]}))},h=e=>{t(t=>({...t,ingredients:t.ingredients.filter(t=>t.id!==e)}))},g=e=>{t(t=>({...t,instructions:t.instructions.filter(t=>t.id!==e)}))},_=()=>{t(e=>({...e,image_url:``}))};return(0,C.jsxs)(z,{onSubmit:n,children:[(0,C.jsxs)(V,{children:[(0,C.jsx)(B,{children:(0,C.jsx)(oe,{values:e,onChange:c,handleImageUpload:u,removeImage:_})}),(0,C.jsx)(B,{children:(0,C.jsx)(ce,{ingredients:e.ingredients,onChange:d,addIngredient:p,removeIngredient:h})})]}),(0,C.jsxs)(H,{children:[(0,C.jsx)(B,{children:(0,C.jsx)(ue,{instructions:e.instructions,onChange:f,addStep:m,removeStep:g})}),(0,C.jsx)(B,{children:(0,C.jsx)(pe,{recipe_name:e.recipe_name,image_url:e.image_url,handleImageUpload:u,removeImage:_})}),(0,C.jsxs)(l,{type:`submit`,variant:`submit`,disabled:!a||i,children:[(0,C.jsx)(s,{}),o]})]})]})},re=r.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;r.div`
  position: relative;

  display: flex;
  margin: 0 auto;

  background-image: url(${T});
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
`,r.div`
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
`;var ie=[`Ukrainian`,`American`,`British`,`Chinese`,`French`,`German`,`Greek`,`Indian`,`Italian`,`Japanese`,`Jewish`,`Korean`,`Mexican`,`Spanish`,`Thai`,`Vietnamese`],ae=[`g`,`kg`,`ml`,`l`,`pcs`,`tbsp`,`tsp`],oe=({values:e,onChange:t})=>{let{recipe_name:n,description:r,servings:i,cuisine:a,cooking_time:o,tips:s}=e;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`h2`,{children:`Recipe Info`}),(0,C.jsxs)(`label`,{children:[`Title`,(0,C.jsx)(`input`,{type:`text`,name:`recipe_name`,onChange:t,value:n,placeholder:`Recipe title`})]}),(0,C.jsxs)(`label`,{children:[`Description`,(0,C.jsx)(`textarea`,{name:`description`,value:r,onChange:t,placeholder:`Share the story behind this dish or what makes it special...`})]}),(0,C.jsxs)(`label`,{children:[`Choose a Cuisine`,(0,C.jsxs)(`select`,{name:`cuisine`,value:a,onChange:t,children:[(0,C.jsx)(`option`,{value:``,disabled:!0,children:`Cuisine...`}),ie.map(e=>(0,C.jsx)(`option`,{value:e,children:e},e))]})]}),(0,C.jsxs)(re,{children:[(0,C.jsxs)(`label`,{children:[`Cooking Time`,(0,C.jsx)(`input`,{type:`number`,name:`cooking_time`,value:o,onChange:t,placeholder:`Enter time in mins`,min:`1`})]}),(0,C.jsxs)(`label`,{children:[`Servings`,(0,C.jsx)(`input`,{type:`number`,name:`servings`,placeholder:`Number of servings`,value:i,onChange:t,min:`1`})]})]}),(0,C.jsx)(`label`,{children:(0,C.jsx)(`textarea`,{name:`tips`,rows:3,onChange:t,value:s,placeholder:`Share your kitchen secrets...`})})]})},se=r.div`
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
`,ce=({ingredients:e,onChange:t,addIngredient:n,removeIngredient:r})=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`h2`,{children:`Ingredients`}),e.map(({id:n,name:i,amount:a})=>(0,C.jsxs)(se,{children:[(0,C.jsxs)(`label`,{children:[(0,C.jsx)(`input`,{type:`text`,name:`name`,onChange:e=>t(n,e),value:i,placeholder:`Ingredient name`}),` `,(0,C.jsx)(`input`,{type:`number`,name:`amount`,min:1,onChange:e=>t(n,e),value:a,placeholder:`Amount`}),(0,C.jsx)(`select`,{name:`unit`,onChange:e=>t(n,e),children:ae.map(e=>(0,C.jsx)(`option`,{value:e,children:e},e))})]}),(0,C.jsx)(l,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,C.jsx)(y,{})})]},n)),(0,C.jsxs)(l,{variant:`add`,onClick:n,children:[(0,C.jsx)(u,{}),`Add Ingredient`]})]}),le=r.div`
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
`,ue=({instructions:e,onChange:t,addStep:n,removeStep:r})=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`h2`,{children:`Steps`}),e.map(({id:n,text:i},a)=>(0,C.jsxs)(le,{children:[(0,C.jsxs)(`label`,{children:[(0,C.jsxs)(`span`,{className:`step-number`,children:[a+1,`.`]}),` `,(0,C.jsx)(`textarea`,{type:`text`,name:`step`,onChange:e=>t(n,e),value:i,placeholder:`Describe step ${a+1}`,rows:3})]}),(0,C.jsx)(l,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,C.jsx)(y,{})})]},n)),(0,C.jsxs)(l,{variant:`add`,onClick:n,children:[(0,C.jsx)(u,{}),`Add Step`]})]}),de=r.div`
  position: relative;

  display: flex;
  margin: 0 auto;

  background-image: url(${T});
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
`,fe=r.div`
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
`,pe=({recipe_name:e,image_url:t,handleImageUpload:n,removeImage:r})=>(0,C.jsx)(C.Fragment,{children:t?(0,C.jsxs)(fe,{children:[(0,C.jsx)(`img`,{src:t,alt:e||`Recipe image`,loading:`lazy`}),(0,C.jsx)(l,{variant:`delete`,onClick:r,children:`Replace image`})]}):(0,C.jsx)(de,{children:(0,C.jsx)(`label`,{children:(0,C.jsx)(`input`,{type:`file`,accept:`.jpg, .png, .jpeg`,multiple:!1,onChange:n,name:`image_url`})})})}),me=r.header`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: flex-start;

  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr 0.9fr;
    gap: 30px;
    align-items: center;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    align-items: flex-start;
  }
`,he=r.div`
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;

    border-radius: ${({theme:e})=>e.radii.lg}
      ${({theme:e})=>e.radii.lg} 0 0;

    border-top-left-radius: ${({theme:e})=>e.radii.lg};
    border-bottom-left-radius: 0;
    border-top-right-radius: ${({theme:e})=>e.radii.lg};
    border-bottom-right-radius: 0;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      border-top-left-radius: ${({theme:e})=>e.radii.lg};
      border-bottom-left-radius: ${({theme:e})=>e.radii.lg};
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .liked {
    position: absolute;
    top: 10px;
    right: 10px;

    width: 40px;
    height: 40px;

    padding: 6px;
    border: 1px solid ${({theme:e})=>e.colors.textPrimary};
    border-radius: ${({theme:e})=>e.radii.rounded};

    background-color: transparent; //надо наверное чтото придумать чтобы кнопку видно было

    color: ${({theme:e})=>e.colors.textPrimary};

    cursor: pointer;
  }

  .chosen {
    color: red;
  }

  .badgesWrapper {
    position: absolute;
    bottom: 10px;
    left: 10px;

    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .badge {
    display: flex;
    flex-direction: row;
    gap: 5px;

    padding: 6px 9px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.pill};
    background-color: ${({theme:e})=>e.colors.cardSecondary};

    color: ${({theme:e})=>e.colors.textPrimary};

    img {
      width: 40px;
      height: 40px;
    }
  }
`;function Z(e){return v({tag:`svg`,attr:{viewBox:`0 0 1024 1024`},child:[{tag:`path`,attr:{d:`M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z`},child:[]},{tag:`path`,attr:{d:`M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z`},child:[]}]})(e)}function ge(e){return v({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z`},child:[]}]})(e)}function _e(e){return v({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`},child:[]}]})(e)}function ve(e){return v({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0V0z`},child:[]},{tag:`path`,attr:{d:`M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z`},child:[]}]})(e)}function ye(e){return v({tag:`svg`,attr:{fill:`currentColor`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{d:`M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z`},child:[]}]})(e)}var be=({recipe:e})=>{let[t,n]=(0,S.useState)(!1);console.log(`🚀 ~ RecipeHeader ~ recipe:`,e);let{id:r,recipe_name:i,description:a,servings:o,image_url:s,cooking_time:c,tags:l=[]}=e,u=s||E,d=async()=>{n(!t)};return(0,C.jsxs)(me,{children:[(0,C.jsxs)(he,{children:[(0,C.jsx)(`img`,{src:u,alt:i,loading:`lazy`}),t?(0,C.jsx)(_e,{size:22,className:`liked chosen`,onClick:d}):(0,C.jsx)(ge,{size:22,className:`liked`,onClick:d}),(0,C.jsxs)(`div`,{className:`badgesWrapper`,children:[(0,C.jsxs)(`span`,{className:`badge`,children:[(0,C.jsx)(Z,{size:22}),c,` min`]}),(0,C.jsxs)(`span`,{className:`badge`,children:[(0,C.jsx)(ye,{size:22}),o,` servings`]})]})]}),(0,C.jsx)(Te,{id:r,recipe_name:i,cooking_time:c,description:a,tags:l})]})},xe=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding: 15px 15px 40px 15px;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 15px;
    gap: 50px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.4;

    max-width: 540px;

    @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
      font-size: 2.7rem;
    }
  }

  .description {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.textSecondary};

    @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
      font-size: 1.3rem;
    }
  }

  .cookingTimeMain {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    font-size: 1.4rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.textPrimary};

    .accent {
      color: ${({theme:e})=>e.colors.accent};
    }
  }

  .tagsList {
    display: flex;
    flex-direction: row;
    gap: 15px;

    li {
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;

      padding: 8px;
      background-color: ${({theme:e})=>e.colors.cardSecondary};
      border: 1px solid ${({theme:e})=>e.colors.border};
      border-radius: ${({theme:e})=>e.radii.pill};
      color: ${({theme:e})=>e.colors.accentSecondary};
    }
  }
`,Q=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 30px;

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .btn {
    //общий класс для EditBtn и DeleteBtn
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: ${({theme:e})=>e.radii.md};
    transition: ${({theme:e})=>e.transitions.main};
    text-decoration: none;
    font-size: 1.6rem;
    line-height: 1;

    svg {
      display: block;
      font-size: 16px;
    }
  }
`,Se=r(i)`
  border: 2px solid ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.textPrimary};
  background: ${({theme:e})=>e.colors.accentBgSuccess};

  &:hover {
    background-color: ${({theme:e})=>e.colors.accent};
    box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 2px;
  }
`,Ce=r.button`
  border: 2px solid ${({theme:e})=>e.colors.danger};
  color: ${({theme:e})=>e.colors.textPrimary};
  background: ${({theme:e})=>e.colors.dangerBg};

  &:hover {
    background-color: ${({theme:e})=>e.colors.dangerHover};
    box-shadow: ${({theme:e})=>e.colors.hoverShadowDanger};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.danger};
    outline-offset: 2px;
  }
`;function we(e){return v({tag:`svg`,attr:{viewBox:`0 0 256 256`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z`},child:[]}]})(e)}var Te=({id:e,recipe_name:t,cooking_time:n,description:r,tags:i})=>{let a=_(),o={breakfast:(0,C.jsx)(g,{}),dinner:(0,C.jsx)(d,{}),healthy:(0,C.jsx)(p,{}),easy:(0,C.jsx)(we,{})},s=e=>{console.log(`delete recipe`,e)};return(0,C.jsxs)(xe,{children:[(0,C.jsxs)(Q,{children:[(0,C.jsx)(`h1`,{children:t}),(0,C.jsxs)(Se,{className:`btn`,to:`/my-recipes/${e}/edit`,state:a.state,children:[(0,C.jsx)(c,{}),(0,C.jsx)(`span`,{children:`Edit`})]}),(0,C.jsxs)(Ce,{className:`btn`,type:`button`,onClick:()=>s(e),children:[(0,C.jsx)(ve,{}),(0,C.jsx)(`span`,{children:`Delete`}),` `]})]}),(0,C.jsx)(`p`,{className:`description`,children:r}),(0,C.jsxs)(`span`,{className:`cookingTimeMain`,children:[(0,C.jsx)(Z,{className:`accent`,size:22}),(0,C.jsx)(`span`,{children:` Prep time:`}),(0,C.jsxs)(`span`,{className:`accent`,children:[n,` min`]})]}),(0,C.jsx)(`ul`,{className:`tagsList`,children:i?.map(e=>(0,C.jsxs)(`li`,{children:[o[e.toLowerCase()]||null,` `,(0,C.jsx)(`span`,{children:e.toUpperCase()})]},e))})]})};function Ee(e){return v({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M255 22.31c-21.2 0-40.5 10.78-50.5 27.63l-4.4 7.42-7.6-4.08c-7.1-3.85-15.2-5.89-23.3-5.89-28.3 0-51.3 23.57-51.3 53.21 0 26.5 18.6 48.6 43.5 52.6l7.6 1.2v53.4c57.9-11.1 116-11.6 174 0v-69.7l4.8-2.6c15.7-8.3 26.1-26.1 26.1-46.15 0-28.8-20.7-51.12-45.4-51.12-6.5 0-13 1.61-18.9 4.72l-6.2 3.2-4.6-5.09C288 29.29 272 22.31 255 22.31zm1 194.79c-25.6 0-51.1 2.4-76.7 7-.9 6-1.3 12.2-1.3 18.6 0 29 9.2 55.2 23.6 73.7 14.4 18.5 33.5 29.3 54.4 29.3s40-10.8 54.4-29.3c14.4-18.5 23.6-44.7 23.6-73.7 0-6.4-.5-12.7-1.3-18.7-25.6-4.7-51.1-7-76.7-6.9zM208.7 348l-89.2 29.7-27.98 112H321.6L307.1 388l17.8-2.6 14.9 104.3h80.7l-28-112-89.2-29.7c-13.8 9.9-30 15.7-47.3 15.7-17.3 0-33.5-5.8-47.3-15.7zm69.3 52.7a9.999 9.999 0 0 1 10 10 9.999 9.999 0 0 1-10 10 9.999 9.999 0 0 1-10-10 9.999 9.999 0 0 1 10-10zm7 46a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z`},child:[]}]})(e)}var De=r.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 40px;
  align-items: stretch; //обе колонки грида будут строго одинаковой высоты, независимо от количества ингредиентов или шагов

  @media (max-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  .ingredientsAndTips {
    .tips {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;

      padding: 18px;
      max-width: 600px;

      font-size: 1.7rem;

      border: 1px solid ${({theme:e})=>e.colors.border};
      background-color: ${({theme:e})=>e.colors.accentBgSuccess};
      border-radius: ${({theme:e})=>e.radii.lg};

      svg {
        color: ${({theme:e})=>e.colors.accent};
      }
    }
  }
`,$=r.div`
  width: 100%;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: stretch; /* растягиваем по ширине */
  justify-content: flex-start;
  gap: 30px;

  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    font-size: 1.8rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.textPrimary};

    margin-bottom: 30px;

    padding-bottom: 25px;
    border-bottom: 2px solid ${({theme:e})=>e.colors.accent};

    svg {
      width: 40px;
      height: 40px;

      color: ${({theme:e})=>e.colors.accent};
    }
  }
`,Oe=r.ul`
  padding: 0;
  margin: 0;

  li {
    width: 100%;

    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 15px;

    padding: 10px 20px;

    align-items: center;
    border-bottom: 1px dashed ${({theme:e})=>e.colors.border};
  }

  .dot {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.accent};
  }

  .ingredient {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.textPrimary};
    line-height: 1.4;
  }
`,ke=r.ul`
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: baseline;

  gap: 20px;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    padding: 10px 20px;

    .step {
      width: 40px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: ${({theme:e})=>e.radii.rounded};
      background-color: ${({theme:e})=>e.colors.accentBgSuccess};
      color: ${({theme:e})=>e.colors.accent};

      font-size: 1.8rem;
      font-weight: 600;
    }

    .text {
      font-size: 1.8rem;
      font-weight: 400;
      color: ${({theme:e})=>e.colors.textPrimary};
      line-height: 1.4;
    }
  }
`,Ae=({ingredients:e,instructions:t,tips:n})=>(0,C.jsxs)(De,{children:[(0,C.jsxs)($,{className:`ingredientsAndTips`,children:[(0,C.jsxs)(`h3`,{children:[(0,C.jsx)(o,{}),`Ingredients`]}),(0,C.jsx)(Oe,{children:e.map((e,t)=>(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`span`,{className:`dot`,children:`•`}),(0,C.jsx)(`span`,{className:`ingredient`,children:e.name}),(0,C.jsxs)(`span`,{className:`ingredient`,children:[e.amount,` `,e.unit]})]},t))}),(0,C.jsxs)(`p`,{className:`tips`,children:[(0,C.jsx)(b,{size:40}),(0,C.jsxs)(`span`,{children:[n,` `]})]})]}),(0,C.jsxs)($,{className:`preparingSteps`,children:[(0,C.jsxs)(`h3`,{children:[(0,C.jsx)(Ee,{}),`Instructions`]}),(0,C.jsx)(ke,{children:t.map((e,t)=>(0,C.jsxs)(`li`,{children:[(0,C.jsxs)(`span`,{className:`step`,children:[e.step,`.`]}),(0,C.jsx)(`span`,{className:`text`,children:e.text})]},t))})]})]});export{K as a,R as c,A as d,w as f,q as i,I as l,Y as n,G as o,J as r,U as s,X as t,P as u};