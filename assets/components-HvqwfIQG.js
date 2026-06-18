import{F as e,I as t,L as n,N as r,P as i,S as a,T as o,_ as s,b as c,c as l,d as u,g as d,h as f,i as p,j as m,m as h,p as g,u as _,v,w as y,x as b,y as x}from"./index-Drdxx26B.js";import{n as S}from"./hi-Djc3RXP2.js";var ee=i.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 380px));
  gap: 24px;
  width: 100%;
  justify-content: space-evenly;
`,C=n(t(),1),w=e(),T=({recipes:e})=>(0,w.jsx)(ee,{children:(0,C.useMemo)(()=>e.filter((e,t,n)=>n.findIndex(t=>t.recipe_name===e.recipe_name)===t),[e]).map(e=>(0,w.jsx)(O,{recipe:e},e.id))}),E=`/Yumly-Recipe-App/assets/AddImgPlaceholder-DDbwgLW1.png`,D=`/Yumly-Recipe-App/assets/noImgPlaceholder-DJz9WGul.png`,te=i.li`
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
`,ne=i.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,re=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,ie=i.ul`
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
`,O=({recipe:e})=>{let t=o(),{id:n,recipe_name:r,image_url:i,tags:a,cooking_time:s}=e,c=e=>{t(`/recipes/${e}`)};if(e)return(0,w.jsxs)(te,{onClick:()=>c(n),children:[(0,w.jsx)(`img`,{src:i||D,alt:r,loading:`lazy`}),(0,w.jsx)(ne,{children:r}),(0,w.jsxs)(re,{children:[(0,w.jsxs)(`span`,{children:[`Prep time: `,s,`m `]}),(0,w.jsx)(ie,{children:a?.map(e=>(0,w.jsx)(`li`,{children:(0,w.jsx)(`span`,{children:e.toUpperCase()})},e))})]})]})},k=i.ul`
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
`,A=({tags:e,setSelectedTag:t,selectedTag:n})=>(0,w.jsxs)(k,{children:[(0,w.jsx)(`li`,{className:n===`all`?`active`:``,children:(0,w.jsx)(`button`,{type:`button`,onClick:()=>t(`all`),children:`ALL`})},`all`),e.map(e=>(0,w.jsx)(`li`,{className:e===n?`active`:``,children:(0,w.jsx)(`button`,{type:`button`,onClick:()=>t(e),children:e.toUpperCase()})},e)).slice(1,8)]}),j=i.div`
  position: relative;
  display: flex;
  margin: 50px auto;
  width: 100%;
  max-width: 500px;
`,M=i.div`
  position: absolute;

  left: 16px;
  top: 50%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.colors.textSecondary};

  pointer-events: none;
`,N=i.input`
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
`,P=({type:e,name:t,placeholder:n,filterValue:r,setFilterValue:i})=>(0,w.jsxs)(j,{children:[(0,w.jsx)(M,{children:(0,w.jsx)(_,{size:18})}),(0,w.jsx)(N,{type:e,name:t,placeholder:n,value:r,onChange:e=>i(e.target.value)})]}),F=i.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 0 auto;
  padding: 50px 0;
`,I=({recipe:e})=>{let{tips:t,ingredients:n=[],instructions:r}=e;return(0,w.jsxs)(F,{children:[(0,w.jsx)(Ce,{recipe:e}),(0,w.jsx)(Me,{tips:t,ingredients:n,instructions:r})]})},L=i.header`
  display: flex;
  align-items: center;
  justify-content: center;
`,R=({children:e,title:t})=>(0,w.jsxs)(L,{children:[(0,w.jsx)(g,{title:t}),e]}),z=i.form`
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
`,B=i.div`
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
`,V=i.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    max-width: 500px;
  }
`,H=i.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
`;var U=()=>(0,C.useCallback)(async(e,t)=>{try{let{data:n,error:r}=await m.from(`recipes`).insert({...e,user_id:t}).select();if(r)throw r;return console.log(`🚀 ~ Recipe successfully created:`,n),n}catch(e){throw console.error(`Error creating recipe:`,e.message),e}},[]),W=async(e,t)=>{try{let{data:n,error:r}=await m.storage.from(`recipeImage`).upload(e,t,{cacheControl:`3600`,upsert:!0});if(r)throw r;console.log(`🚀 ~ Upload success ~ data:`,n);let{data:i}=m.storage.from(`recipeImage`).getPublicUrl(e);return i.publicUrl}catch(e){throw console.error(`Error saving recipe:`,e.message),e}},G=()=>async(e,t,n)=>{let{data:r,error:i}=await m.from(`recipes`).update(e).eq(`id`,n).eq(`user_id`,t).select().single();if(i)throw console.error(`Error updating recipe:`,i.message),i;return r},K=async e=>{try{let{data:t,error:n}=await m.from(`recipes`).select(`*`).eq(`id`,e).single();if(n)throw n;return t}catch(e){throw console.error(`Error get recipe details:`,e.message),e}},q=async e=>{try{let{data:t,error:n}=await m.from(`recipes`).select(`*`).eq(`user_id`,e);if(n)throw n;return console.log(`🚀 ~ getUserRecipes ~ data:`,t),t}catch(e){throw console.error(`Error get user recipes:`,e.message),e}},J=async e=>{console.log(`🚀 ~ deleteRecipe ~ recipeIdToDelete:`,e);try{let{data:t,error:n}=await m.from(`recipes`).delete().eq(`id`,e).select();if(n)throw n;return t}catch(e){throw console.log(`Error during deleted recipe`),e}},Y=()=>({id:crypto.randomUUID(),name:``,amount:``,unit:`g`}),X=()=>({id:crypto.randomUUID(),text:``}),ae=({recipeForm:e,setRecipeForm:t,handleSubmit:n,currentUserId:r,isSubmitting:i,isValid:a,submitButtonText:s})=>{let l=o(),d=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))},f=async e=>{let n=e.target.files[0];if(!n)return;if(n.size>5*1024*1024){alert(`Слишком большой файл. Выберите файл до 5 мб`);return}let i=n.name.split(`.`).pop(),a=`${r}/${`${crypto.randomUUID()}.${i}`}`;try{let e=await W(a,n);t(t=>({...t,image_url:e}))}catch(e){console.error(`Ошибка при загрузке изображения:`,e)}},p=(e,n)=>{let{name:r,value:i}=n.target;t(t=>({...t,ingredients:t.ingredients.map(t=>t.id===e?{...t,[r]:i}:t)}))},m=(e,n)=>{let{value:r}=n.target;t(t=>({...t,instructions:t.instructions.map(t=>t.id===e?{...t,text:r}:t)}))},h=()=>{t(e=>({...e,ingredients:[...e.ingredients,Y()]}))},g=()=>{t(e=>({...e,instructions:[...e.instructions,X()]}))},_=e=>{t(t=>({...t,ingredients:t.ingredients.filter(t=>t.id!==e)}))},v=e=>{t(t=>({...t,instructions:t.instructions.filter(t=>t.id!==e)}))},y=()=>{t(e=>({...e,image_url:``}))};return(0,w.jsxs)(z,{onSubmit:n,children:[(0,w.jsxs)(V,{children:[(0,w.jsx)(B,{children:(0,w.jsx)(le,{values:e,onChange:d,handleImageUpload:f,removeImage:y})}),(0,w.jsx)(B,{children:(0,w.jsx)(de,{ingredients:e.ingredients,onChange:p,addIngredient:h,removeIngredient:_})})]}),(0,w.jsxs)(H,{children:[(0,w.jsx)(B,{children:(0,w.jsx)(pe,{instructions:e.instructions,onChange:m,addStep:g,removeStep:v})}),(0,w.jsx)(B,{children:(0,w.jsx)(ge,{recipe_name:e.recipe_name,image_url:e.image_url,handleImageUpload:f,removeImage:y})}),(0,w.jsxs)(u,{type:`submit`,variant:`submit`,disabled:!a||i,onClick:()=>{l(`/my-recipes`)},children:[(0,w.jsx)(c,{}),s]})]})]})},oe=i.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;i.div`
  position: relative;

  display: flex;
  margin: 0 auto;

  background-image: url(${E});
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
`,i.div`
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
`;var se=[`Ukrainian`,`American`,`British`,`Chinese`,`French`,`German`,`Greek`,`Indian`,`Italian`,`Japanese`,`Jewish`,`Korean`,`Mexican`,`Spanish`,`Thai`,`Vietnamese`],ce=[`g`,`kg`,`ml`,`l`,`pcs`,`tbsp`,`tsp`],le=({values:e,onChange:t})=>{let{recipe_name:n,description:r,servings:i,cuisine:a,cooking_time:o,tips:s}=e;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`h2`,{children:`Recipe Info`}),(0,w.jsxs)(`label`,{children:[`Title`,(0,w.jsx)(`input`,{type:`text`,name:`recipe_name`,onChange:t,value:n,placeholder:`Recipe title`})]}),(0,w.jsxs)(`label`,{children:[`Description`,(0,w.jsx)(`textarea`,{name:`description`,value:r,onChange:t,placeholder:`Share the story behind this dish or what makes it special...`})]}),(0,w.jsxs)(`label`,{children:[`Choose a Cuisine`,(0,w.jsxs)(`select`,{name:`cuisine`,value:a,onChange:t,children:[(0,w.jsx)(`option`,{value:``,disabled:!0,children:`Cuisine...`}),se.map(e=>(0,w.jsx)(`option`,{value:e,children:e},e))]})]}),(0,w.jsxs)(oe,{children:[(0,w.jsxs)(`label`,{children:[`Cooking Time`,(0,w.jsx)(`input`,{type:`number`,name:`cooking_time`,value:o,onChange:t,placeholder:`Enter time in mins`,min:`1`})]}),(0,w.jsxs)(`label`,{children:[`Servings`,(0,w.jsx)(`input`,{type:`number`,name:`servings`,placeholder:`Number of servings`,value:i,onChange:t,min:`1`})]})]}),(0,w.jsx)(`label`,{children:(0,w.jsx)(`textarea`,{name:`tips`,rows:3,onChange:t,value:s,placeholder:`Share your kitchen secrets...`})})]})},ue=i.div`
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
`,de=({ingredients:e,onChange:t,addIngredient:n,removeIngredient:r})=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`h2`,{children:`Ingredients`}),e.map(({id:n,name:i,amount:a})=>(0,w.jsxs)(ue,{children:[(0,w.jsxs)(`label`,{children:[(0,w.jsx)(`input`,{type:`text`,name:`name`,onChange:e=>t(n,e),value:i,placeholder:`Ingredient name`}),` `,(0,w.jsx)(`input`,{type:`number`,name:`amount`,min:1,onChange:e=>t(n,e),value:a,placeholder:`Amount`}),(0,w.jsx)(`select`,{name:`unit`,onChange:e=>t(n,e),children:ce.map(e=>(0,w.jsx)(`option`,{value:e,children:e},e))})]}),(0,w.jsx)(u,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,w.jsx)(x,{})})]},n)),(0,w.jsxs)(u,{variant:`add`,onClick:n,children:[(0,w.jsx)(d,{}),`Add Ingredient`]})]}),fe=i.div`
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
`,pe=({instructions:e,onChange:t,addStep:n,removeStep:r})=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`h2`,{children:`Steps`}),e.map(({id:n,text:i},a)=>(0,w.jsxs)(fe,{children:[(0,w.jsxs)(`label`,{children:[(0,w.jsxs)(`span`,{className:`step-number`,children:[a+1,`.`]}),` `,(0,w.jsx)(`textarea`,{type:`text`,name:`step`,onChange:e=>t(n,e),value:i,placeholder:`Describe step ${a+1}`,rows:3})]}),(0,w.jsx)(u,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,w.jsx)(x,{})})]},n)),(0,w.jsxs)(u,{variant:`add`,onClick:n,children:[(0,w.jsx)(d,{}),`Add Step`]})]}),me=i.div`
  position: relative;

  display: flex;
  margin: 0 auto;

  background-image: url(${E});
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
`,he=i.div`
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
`,ge=({recipe_name:e,image_url:t,handleImageUpload:n,removeImage:r})=>(0,w.jsx)(w.Fragment,{children:t?(0,w.jsxs)(he,{children:[(0,w.jsx)(`img`,{src:t,alt:e||`Recipe image`,loading:`lazy`}),(0,w.jsx)(u,{variant:`delete`,onClick:r,children:`Replace image`})]}):(0,w.jsx)(me,{children:(0,w.jsx)(`label`,{children:(0,w.jsx)(`input`,{type:`file`,accept:`.jpg, .png, .jpeg`,multiple:!1,onChange:n,name:`image_url`})})})}),_e=i.header`
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
`,ve=i.div`
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
`;function Z(e){return b({tag:`svg`,attr:{viewBox:`0 0 1024 1024`},child:[{tag:`path`,attr:{d:`M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z`},child:[]},{tag:`path`,attr:{d:`M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z`},child:[]}]})(e)}function ye(e){return b({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z`},child:[]}]})(e)}function be(e){return b({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`},child:[]}]})(e)}function xe(e){return b({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0V0z`},child:[]},{tag:`path`,attr:{d:`M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z`},child:[]}]})(e)}function Se(e){return b({tag:`svg`,attr:{fill:`currentColor`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{d:`M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z`},child:[]}]})(e)}var Ce=({recipe:e})=>{let[t,n]=(0,C.useState)(!1),{user_id:r,id:i,recipe_name:a,description:o,servings:s,image_url:c,cooking_time:l,tags:u=[]}=e,d=c||D,f=async()=>{n(!t)};return(0,w.jsxs)(_e,{children:[(0,w.jsxs)(ve,{children:[(0,w.jsx)(`img`,{src:d,alt:a,loading:`lazy`}),t?(0,w.jsx)(be,{size:22,className:`liked chosen`,onClick:f}):(0,w.jsx)(ye,{size:22,className:`liked`,onClick:f}),(0,w.jsxs)(`div`,{className:`badgesWrapper`,children:[(0,w.jsxs)(`span`,{className:`badge`,children:[(0,w.jsx)(Z,{size:22}),l,` min`]}),(0,w.jsxs)(`span`,{className:`badge`,children:[(0,w.jsx)(Se,{size:22}),s,` servings`]})]})]}),(0,w.jsx)(De,{id:i,user_id:r,recipe_name:a,cooking_time:l,description:o,tags:u})]})},we=i.div`
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
`,Q=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 30px;

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,Te=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;

  .actionsItem {
    //общий класс для EditBtn и DeleteBtn
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 14px;
    border-radius: ${({theme:e})=>e.radii.rounded};
    transition: ${({theme:e})=>e.transitions.main};
    text-decoration: none;

    svg {
      display: block;
      font-size: 28px;
    }
  }

  .edit {
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
  }

  .delete {
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
  }
`;function Ee(e){return b({tag:`svg`,attr:{viewBox:`0 0 256 256`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z`},child:[]}]})(e)}var De=({id:e,user_id:t,recipe_name:n,cooking_time:i,description:s,tags:c})=>{let u=y(),d=o(),{id:m}=r(p),g=m===t,_={breakfast:(0,w.jsx)(v,{}),dinner:(0,w.jsx)(f,{}),healthy:(0,w.jsx)(h,{}),easy:(0,w.jsx)(Ee,{})},b=async e=>{try{await J(e),d(`/my-recipes`)}catch(e){console.log(`error:`,e)}};return(0,w.jsxs)(we,{children:[(0,w.jsxs)(Q,{children:[(0,w.jsx)(`h1`,{children:n}),g&&(0,w.jsxs)(Te,{children:[(0,w.jsx)(a,{className:`actionsItem edit`,to:`/my-recipes/${e}/edit`,state:u.state,children:(0,w.jsx)(l,{})}),(0,w.jsx)(`button`,{className:`actionsItem delete`,type:`button`,onClick:()=>b(e),children:(0,w.jsx)(xe,{})})]})]}),(0,w.jsx)(`p`,{className:`description`,children:s}),(0,w.jsxs)(`span`,{className:`cookingTimeMain`,children:[(0,w.jsx)(Z,{className:`accent`,size:22}),(0,w.jsx)(`span`,{children:` Prep time:`}),(0,w.jsxs)(`span`,{className:`accent`,children:[i,` min`]})]}),(0,w.jsx)(`ul`,{className:`tagsList`,children:c?.map(e=>(0,w.jsxs)(`li`,{children:[_[e.toLowerCase()]||null,` `,(0,w.jsx)(`span`,{children:e.toUpperCase()})]},e))})]})};function Oe(e){return b({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M255 22.31c-21.2 0-40.5 10.78-50.5 27.63l-4.4 7.42-7.6-4.08c-7.1-3.85-15.2-5.89-23.3-5.89-28.3 0-51.3 23.57-51.3 53.21 0 26.5 18.6 48.6 43.5 52.6l7.6 1.2v53.4c57.9-11.1 116-11.6 174 0v-69.7l4.8-2.6c15.7-8.3 26.1-26.1 26.1-46.15 0-28.8-20.7-51.12-45.4-51.12-6.5 0-13 1.61-18.9 4.72l-6.2 3.2-4.6-5.09C288 29.29 272 22.31 255 22.31zm1 194.79c-25.6 0-51.1 2.4-76.7 7-.9 6-1.3 12.2-1.3 18.6 0 29 9.2 55.2 23.6 73.7 14.4 18.5 33.5 29.3 54.4 29.3s40-10.8 54.4-29.3c14.4-18.5 23.6-44.7 23.6-73.7 0-6.4-.5-12.7-1.3-18.7-25.6-4.7-51.1-7-76.7-6.9zM208.7 348l-89.2 29.7-27.98 112H321.6L307.1 388l17.8-2.6 14.9 104.3h80.7l-28-112-89.2-29.7c-13.8 9.9-30 15.7-47.3 15.7-17.3 0-33.5-5.8-47.3-15.7zm69.3 52.7a9.999 9.999 0 0 1 10 10 9.999 9.999 0 0 1-10 10 9.999 9.999 0 0 1-10-10 9.999 9.999 0 0 1 10-10zm7 46a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z`},child:[]}]})(e)}var ke=i.div`
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
`,$=i.div`
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
`,Ae=i.ul`
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
`,je=i.ul`
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
`,Me=({ingredients:e,instructions:t,tips:n})=>(0,w.jsxs)(ke,{children:[(0,w.jsxs)($,{className:`ingredientsAndTips`,children:[(0,w.jsxs)(`h3`,{children:[(0,w.jsx)(s,{}),`Ingredients`]}),(0,w.jsx)(Ae,{children:e.map((e,t)=>(0,w.jsxs)(`li`,{children:[(0,w.jsx)(`span`,{className:`dot`,children:`•`}),(0,w.jsx)(`span`,{className:`ingredient`,children:e.name}),(0,w.jsxs)(`span`,{className:`ingredient`,children:[e.amount,` `,e.unit]})]},t))}),(0,w.jsxs)(`p`,{className:`tips`,children:[(0,w.jsx)(S,{size:40}),(0,w.jsxs)(`span`,{children:[n,` `]})]})]}),(0,w.jsxs)($,{className:`preparingSteps`,children:[(0,w.jsxs)(`h3`,{children:[(0,w.jsx)(Oe,{}),`Instructions`]}),(0,w.jsx)(je,{children:t.map((e,t)=>(0,w.jsxs)(`li`,{children:[(0,w.jsxs)(`span`,{className:`step`,children:[e.step,`.`]}),(0,w.jsx)(`span`,{className:`text`,children:e.text})]},t))})]})]});export{K as a,R as c,A as d,T as f,q as i,I as l,X as n,G as o,Y as r,U as s,ae as t,P as u};