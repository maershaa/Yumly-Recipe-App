import{A as e,D as t,E as n,F as r,G as i,K as a,M as o,O as s,P as c,U as l,V as u,W as d,a as f,b as p,c as m,d as h,f as g,h as _,i as v,j as y,l as b,m as x,o as S,p as C,q as w,r as T,s as E,u as D,w as O}from"./index-3MJi5YT8.js";var k=w(a(),1),ee=()=>(0,k.useCallback)(async(e,t)=>{try{let{data:n,error:r}=await u.from(`recipes`).insert({...e,user_id:t}).select();if(r)throw r;return n}catch(e){throw console.error(`Error creating recipe:`,e.message),e}},[]),te=async(e,t)=>{try{let{data:n,error:r}=await u.storage.from(`recipeImage`).upload(e,t,{cacheControl:`3600`,upsert:!0});if(r)throw r;let{data:i}=u.storage.from(`recipeImage`).getPublicUrl(e);return i.publicUrl}catch(e){throw console.error(`Error saving recipe:`,e.message),e}},ne=()=>async(e,t,n)=>{let{data:r,error:i}=await u.from(`recipes`).update(e).eq(`id`,n).eq(`user_id`,t).select().single();if(i)throw console.error(`Error updating recipe:`,i.message),i;return r},re=async e=>{try{let{data:t,error:n}=await u.from(`recipes`).select(`*, 
   favorites (
   user_id    )
  `).eq(`id`,e).single();if(n)throw n;let{count:r,error:i}=await u.from(`favorites`).select(`*`,{count:`exact`,head:!0}).eq(`recipe_id`,e);if(i)throw i;return t.likes=r,t}catch(e){throw console.error(`Error get recipe details:`,e.message),e}},ie=async e=>{try{let{data:t,error:n}=await u.from(`recipes`).select(`*`).eq(`user_id`,e);if(n)throw n;return t}catch(e){throw console.error(`Error get user recipes:`,e.message),e}},ae=async e=>{try{let{data:t,error:n}=await u.from(`recipes`).delete().eq(`id`,e).select();if(n)throw n;return t}catch(e){throw console.log(`Error during deleted recipe`),e}},oe=d.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 380px));
  gap: 24px;
  width: 100%;
  justify-content: space-evenly;
`,A=i(),se=({recipes:e})=>(0,A.jsx)(oe,{children:(0,k.useMemo)(()=>e.filter((e,t,n)=>n.findIndex(t=>t.recipe_name===e.recipe_name)===t),[e]).map(e=>(0,A.jsx)(_e,{recipe:e},e.id))}),ce=`/Yumly-Recipe-App/assets/AddImgPlaceholder-DDbwgLW1.png`,j=`/Yumly-Recipe-App/assets/noImgPlaceholder-DJz9WGul.png`,le=`/Yumly-Recipe-App/assets/AugusteEscoffier-CU7TKz1s.jpg`,ue=`/Yumly-Recipe-App/assets/JuliaChild-DnsHjasB.webp`,de=`/Yumly-Recipe-App/assets/GordonRamsay-C6xI6snX.jpg`,M=`/Yumly-Recipe-App/assets/MassimoBottura-DnWjcYZN.avif`,N=`/Yumly-Recipe-App/assets/AnthonyBourdain-88qzJNNQ.webp`,P=`/Yumly-Recipe-App/assets/WolfgangPuck-B-nYPbau.jpg`,F=`/Yumly-Recipe-App/assets/JamieOliver-DFo7PBQr.jpeg`,I=`/Yumly-Recipe-App/assets/FerranAdria-C24zFSum.jpg`,L=`/Yumly-Recipe-App/assets/ThomasKeller-YNFlbXhj.jpg`,R=`/Yumly-Recipe-App/assets/MarcoPierreWhite-C-I0kMdb.avif`,z=`/Yumly-Recipe-App/assets/InaGarten-rJoTJRBE.jpg`,B=`/Yumly-Recipe-App/assets/PaulBocuse-BfdJx54h.webp`,V=`/Yumly-Recipe-App/assets/AliceWaters-omH06hMT.jpg`,H=`/Yumly-Recipe-App/assets/ReneRedzepi-C_C1DHxz.webp`,fe=`/Yumly-Recipe-App/assets/JoseAndres-CFVZAdgk.webp`,pe=d.li`
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
`,me=d.h2`
  margin-bottom: 14px;
  font-size: clamp(18px, 2vw, 22px); //clamp(min, preferred, max)
  font-weight: 700;
  line-height: 1.3;
  color: ${({theme:e})=>e.colors.textPrimary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,he=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  color: ${({theme:e})=>e.colors.textSecondary};
  font-size: 16px;
`,ge=d.ul`
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
`,U=()=>({id:crypto.randomUUID(),name:``,amount:``,unit:`g`}),W=()=>({id:crypto.randomUUID(),text:``}),G=e=>{if(e<60)return e+`min`;{let t=Math.floor(e/60),n=e-60*t;return n?`${t}h ${n}m`:`${t}h`}},_e=({recipe:e})=>{let t=r(),{id:n,recipe_name:i,image_url:a,tags:o,cooking_time:s}=e,c=e=>{t(`/recipes/${e}`)};if(!e)return;let l=a||j,u=G(s);return(0,A.jsxs)(pe,{onClick:()=>c(n),children:[(0,A.jsx)(`img`,{src:l,alt:i,loading:`lazy`}),(0,A.jsx)(me,{children:i}),(0,A.jsxs)(he,{children:[(0,A.jsxs)(`span`,{children:[`Prep time: `,u,` `]}),(0,A.jsx)(ge,{children:o?.slice(0,4).map(e=>(0,A.jsx)(`li`,{children:(0,A.jsx)(`span`,{children:e.toUpperCase()})},e))})]})]})},ve=d.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;

  margin: 50px auto;

  margin: 32px auto;
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    gap: 15px;
    margin: 40px auto;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    gap: 20px;
    margin: 50px auto;
  }

  li {
    display: inline-flex;
    background-color: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.lg};
    transition: ${({theme:e})=>e.transitions.main};

    &:hover {
      box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
      transform: translateY(-1px);
    }

    &.active {
      background-color: ${({theme:e})=>e.colors.accentBgSuccess};
      border-color: ${({theme:e})=>e.colors.accent};
      box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
      transform: none;

      button {
        color: ${({theme:e})=>e.colors.accent};
      }
    }

    button {
      padding: 8px 14px;

      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.2;
      color: ${({theme:e})=>e.colors.textSecondary};
      text-transform: uppercase;

      transition: color ${({theme:e})=>e.transitions.main};

      &:hover {
        color: ${({theme:e})=>e.colors.accent};
      }

      @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
        padding: 10px 16px;
      }

      @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
        font-size: 1rem;
      }
    }
  }
`,ye=[`Ukrainian`,`American`,`British`,`Chinese`,`French`,`German`,`Greek`,`Indian`,`Italian`,`Japanese`,`Jewish`,`Korean`,`Mexican`,`Spanish`,`Thai`,`Vietnamese`],be=[`g`,`kg`,`ml`,`l`,`pcs`,`tbsp`,`tsp`],xe=[{name:`Julia Child`,quote:`The only real stumbling block is fear of failure. In cooking, you’ve got to have a what-the-hell attitude and never be afraid to try something new.`,avatar:ue,status:`Cookbook author`},{name:`Gordon Ramsay`,quote:`Cooking is about passion. When you care deeply about what you create, every ingredient matters and every meal becomes an opportunity to improve.`,avatar:de,status:`Michelin starred chef`},{name:`Auguste Escoffier`,quote:`Good food is the foundation of genuine happiness. The simplest meal prepared with care can bring people together in extraordinary ways.`,avatar:le,status:`King of chefs`},{name:`Massimo Bottura`,quote:`Cooking is an act of love. It is sharing stories, memories and emotions through ingredients that connect people around the same table.`,avatar:M,status:`Chef and restaurateur`},{name:`Anthony Bourdain`,quote:`You learn a lot about someone when you share a meal together. Food has a unique way of breaking barriers and creating connections.`,avatar:N,status:`Chef and author`},{name:`Wolfgang Puck`,quote:`Cooking is like painting or writing a song. The ingredients are your colors and the plate becomes a canvas for creativity.`,avatar:P,status:`Celebrity chef`},{name:`Thomas Keller`,quote:`A recipe has no soul. You, as the cook, must bring soul to the recipe through attention, patience and personal expression.`,avatar:L,status:`Fine dining pioneer`},{name:`Jamie Oliver`,quote:`Real food doesn’t have ingredients. Real food is ingredients. The closer we stay to them, the better our cooking becomes.`,avatar:F,status:`Food activist`},{name:`Alice Waters`,quote:`Let things taste of what they are. Respecting ingredients is often the simplest path to creating unforgettable dishes.`,avatar:V,status:`Farm to table pioneer`},{name:`Paul Bocuse`,quote:`Classical cuisine is the foundation upon which all modern cooking rests. Understanding the basics gives freedom to innovate.`,avatar:B,status:`ChefO of the century`},{name:`Ferran Adrià`,quote:`Creativity means not copying. True innovation comes from curiosity, experimentation and the courage to challenge traditions.`,avatar:I,status:`Modernist suisine innovator`},{name:`Marco Pierre White`,quote:`Perfection is lots of little things done well. Excellence is rarely one big achievement but thousands of small decisions.`,avatar:R,status:`Celebrity chef`},{name:`Ina Garten`,quote:`Food is not about impressing people. It is about making them feel comfortable, welcome and cared for in your home.`,avatar:z,status:`Cookbook author`},{name:`René Redzepi`,quote:`The best meals are the ones that tell a story. Every ingredient has a history, and every dish has something to say.`,avatar:H,status:`Noma founder`},{name:`José Andrés`,quote:`Food is the great connector. It brings people together, creates understanding and reminds us how much we share.`,avatar:fe,status:`Chef and humanitarian`}];function Se(e){return t({tag:`svg`,attr:{viewBox:`0 0 256 256`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z`},child:[]}]})(e)}function Ce(e){return t({tag:`svg`,attr:{viewBox:`0 0 256 256`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M207.06,72.67A111.24,111.24,0,0,0,128,40h-.4C66.07,40.21,16,91,16,153.13V176a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V152A111.25,111.25,0,0,0,207.06,72.67ZM224,176H119.71l54.76-75.3a8,8,0,0,0-12.94-9.42L99.92,176H32V153.13c0-3.08.15-6.12.43-9.13H56a8,8,0,0,0,0-16H35.27c10.32-38.86,44-68.24,84.73-71.66V80a8,8,0,0,0,16,0V56.33A96.14,96.14,0,0,1,221,128H200a8,8,0,0,0,0,16h23.67c.21,2.65.33,5.31.33,8Z`},child:[]}]})(e)}function we(e){return t({tag:`svg`,attr:{viewBox:`0 0 256 256`,fill:`currentColor`},child:[{tag:`path`,attr:{d:`M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85ZM128,216a72.08,72.08,0,0,1-72-72c0-22,8.09-44.79,24.06-67.84l26.37,25.58a8,8,0,0,0,13.09-3l22.27-61.07C164.21,58.08,200,97.91,200,144A72.08,72.08,0,0,1,128,216Z`},child:[]}]})(e)}var K=[{value:`italian`,icon:(0,A.jsx)(x,{})},{value:`breakfast`,icon:(0,A.jsx)(g,{})},{value:`lunch`,icon:(0,A.jsx)(S,{})},{value:`dinner`,icon:(0,A.jsx)(m,{})},{value:`easy`,icon:(0,A.jsx)(Se,{})},{value:`medium`,icon:(0,A.jsx)(Ce,{})},{value:`hard`,icon:(0,A.jsx)(we,{})},{value:`healthy`,icon:(0,A.jsx)(E,{})},{value:`vegetarian`,icon:(0,A.jsx)(D,{})},{value:`dessert`,icon:(0,A.jsx)(f,{})}],q=[{value:`breakfast`,label:`Breakfast`,icon:(0,A.jsx)(g,{})},{value:`lunch`,label:`Lunch`,icon:(0,A.jsx)(S,{})},{value:`dinner`,label:`Dinner`,icon:(0,A.jsx)(m,{})},{value:`healthy`,label:`Healthy`,icon:(0,A.jsx)(E,{})},{value:`vegan`,label:`Vegan`,icon:(0,A.jsx)(D,{})},{value:`dessert`,label:`Dessert`,icon:(0,A.jsx)(f,{})}],Te=({setSelectedTag:e,selectedTag:t})=>(0,A.jsxs)(ve,{children:[(0,A.jsx)(`li`,{className:t===`all`?`active`:``,children:(0,A.jsx)(`button`,{type:`button`,onClick:()=>e(`all`),children:`ALL`})},`all`),K.slice(0,7).map(n=>(0,A.jsx)(`li`,{className:n.value===t.value?`active`:``,children:(0,A.jsx)(`button`,{type:`button`,onClick:()=>e(n.value.toLowerCase()),children:n.value.toUpperCase()})},n.value))]}),Ee=d.div`
  position: relative;
  display: flex;
  margin: 50px auto;
  width: 100%;
  max-width: 500px;
`,De=d.div`
  position: absolute;

  left: 16px;
  top: 50%;

  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme:e})=>e.colors.textSecondary};

  pointer-events: none;
`,Oe=d.input`
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
`,ke=({type:e,name:t,placeholder:r,filterValue:i,setFilterValue:a})=>(0,A.jsxs)(Ee,{children:[(0,A.jsx)(De,{children:(0,A.jsx)(n,{size:18})}),(0,A.jsx)(Oe,{type:e,name:t,placeholder:r,value:i,onChange:e=>a(e.target.value)})]}),Ae=d.header`
  display: flex;
  align-items: center;
  justify-content: center;
`,je=({children:t,title:n})=>(0,A.jsxs)(Ae,{children:[(0,A.jsx)(e,{title:n}),t]}),Me=d.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 24px auto;
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    gap: 24px;
    margin: 40px auto;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    min-width: 700px;
    max-width: 70%;
  }

  .invalid {
    border: 1px solid ${({theme:e})=>e.colors.danger};
    box-shadow: ${({theme:e})=>e.colors.hoverShadowDanger};

    &:hover,
    &:focus-within {
      border-color: ${({theme:e})=>e.colors.dangerHover||e.colors.danger};
      box-shadow: ${({theme:e})=>e.colors.hoverShadowDanger};
    }
  }
`,J=d.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
  padding: 20px;

  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 24px;
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
    font-size: 1rem;
    font-weight: 500;
  }

  /* Стили для базовых инпутов формы */
  input,
  select,
  textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 1rem;
    background-color: transparent;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.md};
    color: ${({theme:e})=>e.colors.textPrimary};
    outline: none;
    transition: ${({theme:e})=>e.transitions.main};

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      padding: 14px 18px;
    }

    &:hover,
    &:focus {
      border-color: ${({theme:e})=>e.colors.hoverBorderAccent};
      box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
    }

    &::placeholder {
      color: ${({theme:e})=>e.colors.textSecondary};
    }
  }

  select {
    cursor: pointer;
    option {
      background-color: ${({theme:e})=>e.colors.surface};
      color: ${({theme:e})=>e.colors.textPrimary};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;d.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex: 6;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    max-width: 680px;
  }
`,d.button`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 24px;
  padding: 18px;

  border: none;
  border-radius: ${({theme:e})=>e.radii.lg};
  background-color: ${({theme:e})=>e.colors.accentSecondary};
  color: ${({theme:e})=>e.colors.background};
  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.main};

  &:hover {
    box-shadow: ${({theme:e})=>e.colors.hoverShadowSecondary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Ne=({recipeForm:e,setRecipeForm:t,handleSubmit:n,currentUserId:r,isSubmitting:i,isFormValid:a,submitButtonText:o,validationErrors:c})=>{let[l,u]=(0,k.useState)({recipe_name:!1,description:!1,cuisine:!1,cooking_time:!1,servings:!1,image_url:!1,tips:!1}),[d,f]=(0,k.useState)(`generalInfo`),p=e=>{let{name:n,value:r}=e.target;t(e=>({...e,[n]:r}))},m=async e=>{let n=e.target.files[0];if(!n)return;if(n.size>5*1024*1024){alert(`Слишком большой файл. Выберите файл до 5 мб`);return}let i=n.name.split(`.`).pop(),a=`${r}/${`${crypto.randomUUID()}.${i}`}`;try{let e=await te(a,n);t(t=>({...t,image_url:e}))}catch(e){console.error(`Ошибка при загрузке изображения:`,e)}},h=(e,n)=>{let{name:r,value:i}=n.target;t(t=>({...t,ingredients:t.ingredients.map(t=>t.id===e?{...t,[r]:i}:t)}))},g=(e,n)=>{let{value:r}=n.target;t(t=>({...t,instructions:t.instructions.map(t=>t.id===e?{...t,text:r}:t)}))},_=()=>{t(e=>({...e,ingredients:[...e.ingredients,U()]}))},v=()=>{t(e=>({...e,instructions:[...e.instructions,W()]}))},y=e=>{t(t=>({...t,ingredients:t.ingredients.filter(t=>t.id!==e)}))},b=e=>{t(t=>({...t,instructions:t.instructions.filter(t=>t.id!==e)}))},S=()=>{t(e=>({...e,image_url:``}))},C=e=>{let t=e.currentTarget.name;u(e=>({...e,[t]:!0}))};return(0,A.jsxs)(Me,{onSubmit:n,children:[(0,A.jsx)(qe,{activeTab:d,onTabChange:f}),d===`generalInfo`&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(J,{children:(0,A.jsx)(Fe,{values:e,onChange:p,validationErrors:c,handleInputBlur:C,isTouched:l})}),(0,A.jsx)(J,{children:(0,A.jsx)(Le,{values:e,onChange:({target:{value:e}})=>{t(t=>({...t,tags:t.tags.includes(e)?t.tags.filter(t=>t!==e):[...t.tags,e]}))}})}),(0,A.jsx)(J,{children:(0,A.jsx)(We,{recipe_name:e.recipe_name,image_url:e.image_url,handleImageUpload:m,removeImage:S,isImgError:c.image,handleInputBlur:C,isTouched:l})}),(0,A.jsx)(Y,{nextStep:`ingredients`,nextStepName:`Ingredients`,onTabChange:f})]}),d===`ingredients`&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(J,{children:(0,A.jsx)(ze,{ingredients:e.ingredients,onChange:h,addIngredient:_,removeIngredient:y,isIngredientsError:c.ingredients})}),(0,A.jsx)(Y,{nextStep:`cooking`,nextStepName:`Cooking Steps`,onTabChange:f})]}),d===`cooking`&&(0,A.jsx)(J,{children:(0,A.jsx)(Ve,{instructions:e.instructions,onChange:g,addStep:v,removeStep:b,isStepsError:c.instructions})}),(0,A.jsxs)(s,{type:`submit`,variant:`submit`,disabled:!a||i,children:[(0,A.jsx)(x,{}),o]})]})},Pe=d.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`,Fe=({values:e,onChange:t,validationErrors:n,handleInputBlur:r,isTouched:i})=>{let{recipe_name:a,description:o,servings:s,cuisine:c,cooking_time:l,tips:u}=e,{recipe_name:d,description:f,servings:p,cuisine:m,cooking_time:h,tips:g}=n,{recipe_name:v,description:y,servings:b,cuisine:x,cooking_time:S,tips:C}=i,w=d&&v,T=f&&y,E=m&&x,D=h&&S,O=p&&b,k=g&&C;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`h2`,{children:`Recipe Info`}),(0,A.jsxs)(`label`,{children:[`Title`,(0,A.jsx)(`input`,{type:`text`,name:`recipe_name`,onChange:t,onBlur:r,value:a,placeholder:`Recipe title`,className:w?`invalid`:``})]}),w&&(0,A.jsx)(_,{errorMessage:d}),(0,A.jsxs)(`label`,{children:[`Description`,(0,A.jsx)(`textarea`,{name:`description`,value:o,onChange:t,onBlur:r,placeholder:`Share the story behind this dish or what makes it special...`,className:T?`invalid`:``})]}),T&&(0,A.jsx)(_,{errorMessage:f}),(0,A.jsxs)(`label`,{children:[`Choose a Cuisine`,(0,A.jsxs)(`select`,{name:`cuisine`,value:c,onChange:t,onBlur:r,className:E?`invalid`:``,children:[(0,A.jsx)(`option`,{value:``,disabled:!0,children:`Cuisine...`}),ye.map(e=>(0,A.jsx)(`option`,{value:e,children:e},e))]})]}),E&&(0,A.jsx)(_,{errorMessage:m}),(0,A.jsxs)(Pe,{children:[(0,A.jsxs)(`label`,{children:[`Cooking Time`,(0,A.jsx)(`input`,{type:`number`,name:`cooking_time`,value:l,onChange:t,onBlur:r,placeholder:`Enter time in mins`,min:`1`,className:D?`invalid`:``})]}),(0,A.jsxs)(`label`,{children:[`Servings`,(0,A.jsx)(`input`,{type:`number`,name:`servings`,placeholder:`Number of servings`,value:s,onChange:t,onBlur:r,min:`1`,className:O?`invalid`:``})]})]}),D&&(0,A.jsx)(_,{errorMessage:h}),O&&(0,A.jsx)(_,{errorMessage:p}),(0,A.jsx)(`label`,{children:(0,A.jsx)(`textarea`,{name:`tips`,rows:3,onChange:t,onBlur:r,value:u,placeholder:`Share your kitchen secrets...`,className:k?`invalid`:``})}),k&&(0,A.jsx)(_,{errorMessage:g})]})},Ie=d.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr; // На мобильных устройствах каждый чекбокс занимает всю ширину строки
  align-items: stretch; // Растягиваем элементы по высоте, если строки отличаются по содержимому

  column-gap: 10px;
  margin-top: 10px;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: repeat(
      2,
      1fr
    ); //На планшетах и десктопах отображаем чекбоксы в две колонки

    column-gap: 20px;
    row-gap: 10px;

    align-items: center;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    column-gap: 30px;
  }

  svg {
    color: ${({theme:e})=>e.colors.icon};
  }

  .tagContent {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  label {
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    margin-bottom: 10px;
    font-size: 1.4rem;

    transition: ${({theme:e})=>e.transitions.main};
  }

  /* При наведении на всю область label подсвечиваем кастомный checkbox */
  label:hover .customCheckbox {
    background-color: ${({theme:e})=>e.colors.accentBgSuccess};
    border-color: ${({theme:e})=>e.colors.accent};
  }

  input {
    /* Скрываем нативный checkbox,
   оставляя его доступным для клавиатуры и screen readers */
    position: absolute;
    opacity: 0;
    pointer-events: none;

    &:checked ~ .customCheckbox {
      background-color: ${({theme:e})=>e.colors.accent};
      border-color: ${({theme:e})=>e.colors.accent};
    }

    &:hover {
      border-color: transparent;
      box-shadow: none;
    }
  }

  /* Визуальная часть кастомного checkbox. Сам квадратик */
  .customCheckbox {
    position: relative;

    width: 30px;
    height: 30px;

    flex-shrink: 0;

    background-color: ${({theme:e})=>e.colors.surface};
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.sm};

    transition: ${({theme:e})=>e.transitions.main};
  }

  /* Добавляем псевдоэлемент с галочкой только для выбранного checkbox */
  input:checked ~ .customCheckbox::after {
    position: absolute;

    content: '✓';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;

    color: ${({theme:e})=>e.colors.surface};
  }

  /* Показываем outline только при навигации с клавиатуры */
  input:focus-visible + .customCheckbox {
    outline: 2px solid ${({theme:e})=>e.colors.accent};
    outline-offset: 3px;
  }
`,Le=({onChange:e,values:t})=>(0,A.jsx)(Ie,{children:q.map(n=>(0,A.jsxs)(`label`,{children:[(0,A.jsx)(`input`,{name:`tags`,type:`checkbox`,value:n.value,checked:t.tags.includes(n.value),onChange:e}),(0,A.jsx)(`span`,{className:`customCheckbox`}),(0,A.jsxs)(`span`,{className:`tagContent`,children:[n.icon,` `,n.label]})]},n.value))}),Re=d.div`
  display: grid;
  /* 
    1fr — название (забирает всё свободное место).
    80px — количество (фиксированная небольшая ширина).
    90px — селект (фиксированная небольшая ширина).
    auto — кнопка удаления (по размеру иконки).
  */
  grid-template-columns: 1fr 80px 90px auto;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 12px;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr 120px 110px auto;
    gap: 15px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    grid-template-columns: 1fr 110px 50px auto;
    gap: 10px;
  }

  //Убираем стандартную стрелку select
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`,ze=({ingredients:e,onChange:t,addIngredient:n,removeIngredient:r,isIngredientsError:i})=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`h2`,{children:`Ingredients`}),e.map(({id:n,name:i,amount:a,unit:o})=>(0,A.jsxs)(Re,{children:[(0,A.jsx)(`input`,{type:`text`,name:`name`,onChange:e=>t(n,e),value:i,placeholder:`Ingredient name`}),` `,(0,A.jsx)(`input`,{type:`number`,name:`amount`,min:`0`,step:`0.01`,onChange:e=>t(n,e),value:a,placeholder:`Amount`}),(0,A.jsx)(`select`,{name:`unit`,value:o,onChange:e=>t(n,e),children:be.map(e=>(0,A.jsx)(`option`,{value:e,children:e},e))}),(0,A.jsx)(s,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,A.jsx)(C,{})})]},n)),i&&(0,A.jsx)(_,{errorMessage:i}),(0,A.jsxs)(s,{variant:`add`,onClick:n,children:[(0,A.jsx)(b,{}),`Add Ingredient`]})]}),Be=d.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  margin-bottom: 16px;

  .step-number {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({theme:e})=>e.colors.textSecondary};
    padding-top: 10px;
    min-width: 24px;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 1.2rem;
      padding-top: 12px;
    }
  }

  textarea {
    flex: 1;
  }

  /* Кнопка удаления */
  button {
    margin-top: 4px;
  }
`,Ve=({instructions:e,onChange:t,addStep:n,removeStep:r,isStepsError:i})=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`h2`,{children:`Steps`}),e.map(({id:n,text:i},a)=>(0,A.jsxs)(Be,{children:[(0,A.jsxs)(`span`,{className:`step-number`,children:[a+1,`.`]}),` `,(0,A.jsx)(`textarea`,{type:`text`,onChange:e=>t(n,e),value:i,placeholder:`Describe step ${a+1}`,rows:3}),(0,A.jsx)(s,{variant:`delete`,onClick:()=>r(n),disabled:e.length<=3,children:(0,A.jsx)(C,{})})]},n)),i&&(0,A.jsx)(_,{errorMessage:i}),(0,A.jsxs)(s,{variant:`add`,onClick:n,children:[(0,A.jsx)(b,{}),`Add Step`]})]}),He=d.div`
  position: relative;

  display: flex;
  margin: 0 auto;

  background-image: url(${ce});
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
`,Ue=d.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 30px;

  width: 100%;
  max-width: 500px;

  img {
    width: 100%;
    display: block;
    aspect-ratio: 4 / 3;
    object-fit: cover;

    border: 2px dashed ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.lg};

    overflow: hidden;
  }

  button {
    width: 100%;
  }
`,We=({recipe_name:e,image_url:t,handleImageUpload:n,removeImage:r,isImgError:i,handleInputBlur:a,isTouched:o})=>{let{image_url:c}=o;return(0,A.jsxs)(A.Fragment,{children:[t?(0,A.jsxs)(Ue,{children:[(0,A.jsx)(`img`,{src:t,alt:e||`Recipe image`,loading:`lazy`}),(0,A.jsx)(s,{variant:`delete`,onClick:r,children:`Replace image`})]}):(0,A.jsx)(He,{children:(0,A.jsx)(`label`,{children:(0,A.jsx)(`input`,{type:`file`,accept:`.jpg, .png, .jpeg`,multiple:!1,onChange:n,onBlur:a,name:`image_url`})})}),i&&c&&(0,A.jsx)(_,{errorMessage:i})]})},Ge=d.div`
  display: flex;
  gap: 12px;
  width: 100%;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  margin-bottom: 20px;
  overflow-x: auto;
`,Ke=d.button`
  cursor: pointer;

  position: relative;
  padding: 12px 16px;
  white-space: nowrap;
  background: none;
  border: none;

  border-bottom: 2px solid
    ${({$isActive:e,theme:t})=>e?t.colors.accentSecondary:`transparent`};

  color: ${({$isActive:e,theme:t})=>e?t.colors.textPrimary:t.colors.textSecondary};

  transition: ${({theme:e})=>e.transitions.main};

  &:hover {
    color: ${({theme:e})=>e.colors.textPrimary};
  }

  span {
    font-size: 1rem;
    font-weight: 600;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 1.2rem;
    }
  }
`,qe=({activeTab:e,onTabChange:t})=>(0,A.jsx)(Ge,{role:`tablist`,children:[{id:`generalInfo`,label:`Basic Info`},{id:`ingredients`,label:`Ingredients`},{id:`cooking`,label:`Cooking Steps`}].map(({id:n,label:r})=>{let i=e===n;return(0,A.jsx)(Ke,{type:`button`,role:`tab`,"aria-selected":i,$isActive:i,onClick:()=>t(n),children:(0,A.jsxs)(`span`,{children:[` `,r]})},n)})}),Je=d.button`
  margin: 20px 0 20px auto;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;

  border-radius: ${({theme:e})=>e.radii.md};
  border: none;

  border: 2px solid ${({theme:e})=>e.colors.accent};
  color: ${({theme:e})=>e.colors.textPrimary};

  background: ${({theme:e})=>e.colors.accentBgSuccess};
  cursor: pointer;

  transition: ${({theme:e})=>e.transitions.main};

  &:hover {
    background-color: ${({theme:e})=>e.colors.accent};
    box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
    transform: translateY(-2px);
  }

  span {
    font-size: 0.9rem;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`,Y=({onTabChange:e,nextStep:t,nextStepName:n})=>(0,A.jsxs)(Je,{type:`button`,onClick:()=>e(t),children:[(0,A.jsxs)(`span`,{children:[` `,n]}),(0,A.jsx)(v,{})]},t),Ye=d.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
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
`,Xe=({recipe:e,setRecipe:t})=>{let{user_id:n,id:r,recipe_name:i,description:a,servings:o,likes:s,image_url:c,cooking_time:l,tags:u=[],favorites:d=[]}=e,f=G(l);return(0,A.jsxs)(Ye,{children:[(0,A.jsx)(it,{id:r,servings:o,likes:s,recipe_name:i,cooking_time:f,image_url:c,favorites:d,setRecipe:t}),(0,A.jsx)(ct,{id:r,user_id:n,recipe_name:i,cooking_time:f,description:a,tags:u})]})},Ze=d.div`
  position: relative;
  overflow: hidden;

  border-radius: ${({theme:e})=>e.radii.lg};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    border-top-left-radius: ${({theme:e})=>e.radii.lg};
    border-bottom-left-radius: ${({theme:e})=>e.radii.lg};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  img {
    width: 100%;
    display: block;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  .badgesWrapper {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      gap: 10px;
      right: auto; /* На планшетах отключаем ограничение по правой стороне */
    }
  }

  .badge {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;

    padding: 4px 8px;
    border: 1px solid ${({theme:e})=>e.colors.border};
    border-radius: ${({theme:e})=>e.radii.pill};
    background-color: ${({theme:e})=>e.colors.cardSecondary};

    span {
      font-size: 0.7rem;
      font-weight: 500;
      color: ${({theme:e})=>e.colors.textPrimary};
      white-space: nowrap; /* Запрещаем тексту внутри бейджа разбиваться на 2 строки */
    }

    svg {
      width: 14px;
      height: 14px;
      color: ${({theme:e})=>e.colors.textPrimary};
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      padding: 6px 9px;
      gap: 6px;

      span {
        font-size: 0.9rem;
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`,Qe=d.button`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 35px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({theme:e})=>e.colors.cardSecondary};
  border-radius: ${({theme:e})=>e.radii.rounded};
  border: none;

  cursor: pointer;
  transition: ${({theme:e})=>e.transitions.main};

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    width: 25px;
    height: 25px;

    color: ${({theme:e})=>e.colors.danger};
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    width: 45px;
    height: 45px;

    svg {
      width: 33px;
      height: 33px;
    }
  }
`;function X(e){return t({tag:`svg`,attr:{viewBox:`0 0 1024 1024`},child:[{tag:`path`,attr:{d:`M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z`},child:[]},{tag:`path`,attr:{d:`M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z`},child:[]}]})(e)}function Z(e){return t({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z`},child:[]}]})(e)}function $e(e){return t({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{d:`m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`},child:[]}]})(e)}function et(e){return t({tag:`svg`,attr:{viewBox:`0 0 24 24`},child:[{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0z`},child:[]},{tag:`path`,attr:{fill:`none`,d:`M0 0h24v24H0V0z`},child:[]},{tag:`path`,attr:{d:`M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z`},child:[]}]})(e)}function tt(e){return t({tag:`svg`,attr:{fill:`currentColor`,viewBox:`0 0 16 16`},child:[{tag:`path`,attr:{d:`M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z`},child:[]}]})(e)}var nt=async(e,t)=>{try{let{data:n,error:r}=await u.from(`favorites`).insert({user_id:t,recipe_id:e});if(r)throw r;return n}catch(e){throw console.error(`Error adding recipe to favorites:`,e.message),e}},Q=async(e,t)=>{try{let{data:n,error:r}=await u.from(`favorites`).delete().eq(`user_id`,t).eq(`recipe_id`,e);if(r)throw r;return n}catch(e){throw console.error(`Error during deleted recipe from favorites:`,e.message),e}},rt=async e=>{try{let{data:t,error:n}=await u.from(`recipes`).select(`
            *,
    favorites!inner()
  `).eq(`favorites.user_id`,e);if(n)throw n;return t}catch(e){throw console.error(`Error loading favorites:`,e.message),e}},it=({id:e,recipe_name:t,servings:n,cooking_time:r,image_url:i,favorites:a=[],likes:o=0,setRecipe:s})=>{let[c,u]=(0,k.useState)(!1),{id:d}=l(T),f=i||j,p=a.some(e=>e.user_id===d);return(0,A.jsxs)(Ze,{children:[(0,A.jsx)(`img`,{src:f,alt:t,loading:`lazy`}),(0,A.jsx)(Qe,{onClick:async()=>{if(!c){if(!d){y.info(`Please log in previously`);return}u(!0);try{p?(await Q(e,d),s(e=>({...e,favorites:[...e.favorites.filter(e=>e.user_id!==d)],likes:e.likes-1}))):(await nt(e,d),s(e=>({...e,favorites:[...e.favorites,{user_id:d}],likes:e.likes+1})))}catch(e){y.error(e.message||`Something went wrong`)}finally{u(!1)}}},disabled:c,children:p?(0,A.jsx)($e,{}):(0,A.jsx)(Z,{})}),(0,A.jsxs)(`div`,{className:`badgesWrapper`,children:[(0,A.jsxs)(`span`,{className:`badge`,children:[(0,A.jsx)(X,{}),r]}),(0,A.jsxs)(`span`,{className:`badge`,children:[(0,A.jsx)(tt,{}),n,` servings`]}),(0,A.jsxs)(`span`,{className:`badge`,children:[(0,A.jsx)(Z,{}),o,` likes`]})]})]})},at=d.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
  padding: 15px 15px 40px 15px;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    padding: 15px;
    gap: 35px;
  }

  @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
    gap: 45px;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    line-height: 1.4;

    color: ${({theme:e})=>e.colors.textPrimary};

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 1.5rem;
    }
    @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
      font-size: 1.7rem;
    }
  }

  .description {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${({theme:e})=>e.colors.textSecondary};

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }

  .cookingTimeMain {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    font-size: 1rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.textPrimary};

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 1.1rem;
    }

    .accent {
      color: ${({theme:e})=>e.colors.accent};
    }
  }

  .tagsList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;

    li {
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;

      padding: 6px 12px;
      background-color: ${({theme:e})=>e.colors.accentBgWarning};
      border: 1px solid ${({theme:e})=>e.colors.hoverBorderSecondary};
      border-radius: ${({theme:e})=>e.radii.pill};
      color: ${({theme:e})=>e.colors.accentSecondary};
    }

    svg {
      width: 14px;
      height: 14px;
      color: ${({theme:e})=>e.colors.accentSecondary};
      flex-shrink: 0;
    }

    span {
      font-size: 0.7rem;
      font-weight: 500;
      color: ${({theme:e})=>e.colors.accentSecondary};
      white-space: nowrap; /* Запрещаем тексту внутри бейджа разбиваться на 2 строки */
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      gap: 15px;

      svg {
        width: 16px;
        height: 16px;
      }
      span {
        font-size: 0.85rem;
      }
    }
  }
`,ot=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,st=d.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    justify-content: flex-end;
  }

  .actionsItem {
    //общий класс для EditBtn и DeleteBtn
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: ${({theme:e})=>e.radii.rounded};
    transition: ${({theme:e})=>e.transitions.main};
    text-decoration: none;

    color: ${({theme:e})=>e.colors.textPrimary};
    opacity: 0.7;

    svg {
      display: block;
      width: 26px;
      height: 26px;
      flex-shrink: 0;

      @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
        width: 32px;
        height: 32px;
      }
    }
  }
  .edit {
    color: ${({theme:e})=>e.colors.accent};

    &:hover {
      box-shadow: ${({theme:e})=>e.colors.hoverShadowAccent};
      transform: translateY(-1px);
      opacity: 1;
    }

    &:focus-visible {
      outline: 2px solid ${({theme:e})=>e.colors.accent};
      outline-offset: 2px;
      opacity: 1;
    }
  }

  .delete {
    color: ${({theme:e})=>e.colors.danger};

    &:hover {
      box-shadow: ${({theme:e})=>e.colors.hoverShadowDanger};
      transform: translateY(-1px);
      opacity: 1;
    }

    &:focus-visible {
      outline: 2px solid ${({theme:e})=>e.colors.danger};
      outline-offset: 2px;
      opacity: 1;
    }
  }
`,ct=({id:e,user_id:t,recipe_name:n,cooking_time:i,description:a,tags:s})=>{let u=c(),d=r(),{id:f}=l(T),p=f===t,m=e=>{let t=K.find(t=>t.value===e.toLowerCase());return t?t.icon:null},h=async e=>{try{await ae(e),y.success(`Recipe deleted successfully.`),d(`/my-recipes`)}catch(e){console.error(`Failed to delete recipe:`,e),y.error(`Failed to delete the recipe. Please try again.`)}};return(0,A.jsxs)(at,{children:[(0,A.jsxs)(ot,{children:[(0,A.jsx)(`h1`,{children:n}),p&&(0,A.jsxs)(st,{children:[(0,A.jsx)(o,{className:`actionsItem edit`,to:`/my-recipes/${e}/edit`,state:u.state,children:(0,A.jsx)(O,{})}),(0,A.jsx)(`button`,{className:`actionsItem delete`,type:`button`,onClick:()=>h(e),children:(0,A.jsx)(et,{})})]})]}),(0,A.jsx)(`p`,{className:`description`,children:a}),(0,A.jsxs)(`span`,{className:`cookingTimeMain`,children:[(0,A.jsx)(X,{className:`accent`,size:22}),(0,A.jsx)(`span`,{children:` Prep time:`}),(0,A.jsx)(`span`,{className:`accent`,children:i})]}),(0,A.jsx)(`ul`,{className:`tagsList`,children:s?.map(e=>(0,A.jsxs)(`li`,{children:[m(e),(0,A.jsx)(`span`,{children:e.toUpperCase()})]},e))})]})};function lt(e){return t({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{d:`M255 22.31c-21.2 0-40.5 10.78-50.5 27.63l-4.4 7.42-7.6-4.08c-7.1-3.85-15.2-5.89-23.3-5.89-28.3 0-51.3 23.57-51.3 53.21 0 26.5 18.6 48.6 43.5 52.6l7.6 1.2v53.4c57.9-11.1 116-11.6 174 0v-69.7l4.8-2.6c15.7-8.3 26.1-26.1 26.1-46.15 0-28.8-20.7-51.12-45.4-51.12-6.5 0-13 1.61-18.9 4.72l-6.2 3.2-4.6-5.09C288 29.29 272 22.31 255 22.31zm1 194.79c-25.6 0-51.1 2.4-76.7 7-.9 6-1.3 12.2-1.3 18.6 0 29 9.2 55.2 23.6 73.7 14.4 18.5 33.5 29.3 54.4 29.3s40-10.8 54.4-29.3c14.4-18.5 23.6-44.7 23.6-73.7 0-6.4-.5-12.7-1.3-18.7-25.6-4.7-51.1-7-76.7-6.9zM208.7 348l-89.2 29.7-27.98 112H321.6L307.1 388l17.8-2.6 14.9 104.3h80.7l-28-112-89.2-29.7c-13.8 9.9-30 15.7-47.3 15.7-17.3 0-33.5-5.8-47.3-15.7zm69.3 52.7a9.999 9.999 0 0 1 10 10 9.999 9.999 0 0 1-10 10 9.999 9.999 0 0 1-10-10 9.999 9.999 0 0 1 10-10zm7 46a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z`},child:[]}]})(e)}var ut=d.div`
  display: grid;
  grid-template-columns: minmax(0px, 1fr);

  gap: 40px;

  @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: stretch; //обе колонки грида будут строго одинаковой высоты, независимо от количества ингредиентов или шагов
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

      border: 1px solid ${({theme:e})=>e.colors.border};
      background-color: ${({theme:e})=>e.colors.accentBgSuccess};
      border-radius: ${({theme:e})=>e.radii.lg};

      font-size: 0.9rem;
      font-weight: 400;
      color: ${({theme:e})=>e.colors.textPrimary};
      line-height: 1.4;

      @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
        font-size: 1rem;
      }
      @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
        font-size: 1.1rem;
      }

      svg {
        width: 30px;
        height: 30px;
        flex-shrink: 0; //  запрещаем иконке сжиматься, если текст длинный */
        color: ${({theme:e})=>e.colors.accent};

        @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`,$=d.div`
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

    font-size: 1.25rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.textPrimary};

    margin-bottom: 30px;

    padding-bottom: 25px;
    border-bottom: 2px solid ${({theme:e})=>e.colors.accent};

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 1.5rem;
    }
    @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
      font-size: 1.7rem;
    }

    svg {
      width: 30px;
      height: 30px;
      flex-shrink: 0; //  запрещаем иконке сжиматься, если текст длинный */
      color: ${({theme:e})=>e.colors.accent};
    }

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      width: 40px;
      height: 40px;
    }
  }
`,dt=d.ul`
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
    font-size: 1rem;
    font-weight: 600;
    color: ${({theme:e})=>e.colors.accent};

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 1.8rem;
    }
  }

  .ingredient {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({theme:e})=>e.colors.textPrimary};
    line-height: 1.4;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      font-size: 1rem;
    }
    @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
      font-size: 1.1rem;
    }
  }
`,ft=d.ul`
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

    gap: 10px;
    padding: 5px 10px;

    @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
      gap: 20px;
      padding: 10px 20px;
    }

    .step {
      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-shrink: 0;

      border-radius: ${({theme:e})=>e.radii.rounded};
      background-color: ${({theme:e})=>e.colors.accentBgSuccess};
      color: ${({theme:e})=>e.colors.accent};

      font-size: 0.9rem;
      font-weight: 600;

      @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
        width: 40px;
        height: 40px;

        font-size: 1rem;
      }
      @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
        font-size: 1.1rem;
      }
    }

    .text {
      font-size: 0.9rem;
      font-weight: 400;
      color: ${({theme:e})=>e.colors.textPrimary};
      line-height: 1.4;

      @media (min-width: ${({theme:e})=>e.breakpoints.tablet}) {
        font-size: 1rem;
      }
      @media (min-width: ${({theme:e})=>e.breakpoints.desktop}) {
        font-size: 1.1rem;
      }
    }
  }
`,pt=({ingredients:e,instructions:t,tips:n})=>(0,A.jsxs)(ut,{children:[(0,A.jsxs)($,{className:`ingredientsAndTips`,children:[(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(h,{}),`Ingredients`]}),(0,A.jsx)(dt,{children:e.map((e,t)=>(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`span`,{className:`dot`,children:`•`}),(0,A.jsx)(`span`,{className:`ingredient`,children:e.name}),(0,A.jsxs)(`span`,{className:`ingredient`,children:[e.amount,` `,e.unit]})]},t))}),(0,A.jsxs)(`p`,{className:`tips`,children:[(0,A.jsx)(p,{}),(0,A.jsxs)(`span`,{children:[n,` `]})]})]}),(0,A.jsxs)($,{className:`preparingSteps`,children:[(0,A.jsxs)(`h3`,{children:[(0,A.jsx)(lt,{}),`Instructions`]}),(0,A.jsx)(ft,{children:t.map((e,t)=>(0,A.jsxs)(`li`,{children:[(0,A.jsxs)(`span`,{className:`step`,children:[e.step,`.`]}),(0,A.jsx)(`span`,{className:`text`,children:e.text})]},t))})]})]}),mt=d.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin: 0 auto;
  padding: 50px 0;
`,ht=({recipe:e,setRecipe:t})=>{let{tips:n,ingredients:r=[],instructions:i}=e;return(0,A.jsxs)(mt,{children:[(0,A.jsx)(Xe,{recipe:e,setRecipe:t}),(0,A.jsx)(pt,{tips:n,ingredients:r,instructions:i})]})};export{ke as a,xe as c,se as d,ie as f,ee as h,je as i,W as l,ne as m,rt as n,Te as o,re as p,Ne as r,q as s,ht as t,U as u};