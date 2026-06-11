import{C as e,D as t,E as n,O as r,T as i,a,i as o,m as s,w as c,x as l}from"./index-CIsfiHJb.js";import{o as u}from"./components-DkWmCjnO.js";import{t as d}from"./selectors-h1hSARvO.js";var f=`/Yumly-Recipe-App/assets/hero_girl_curly_square-B_UvXRdi.png`,p=`/Yumly-Recipe-App/assets/chefPhoto1-g_ZqWb18.avif`,m=`/Yumly-Recipe-App/assets/chefPhoto2-CQNKfXhO.avif`,h=`/Yumly-Recipe-App/assets/chefPhoto3-CGmWpkek.avif`,g=`/Yumly-Recipe-App/assets/chefPhoto4-CgBNJWks.avif`,_=i.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  border: 2px dashed ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.lg};

  padding: 20px 30px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 0.9fr;
    gap: 60px;
  }
`,v=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  text-align: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }

  p {
    color: var(--text-secondary);

    font-size: 2rem;
    line-height: 1.6;

    font-style: italic;
    font-weight: 700;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 2.8rem;
    color: var(--text-primary);
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 16px;

    @media (min-width: 1200px) {
      font-size: 3.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: var(--text-secondary);
    font-style: italic;

    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 35px;
    max-width: 540px;

    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }
`,y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media (min-width: 480px) {
    flex-direction: row;
    width: auto;
  }
`,b=i(s)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 600;
  font-size: 1rem;
  padding: 14px 28px;
  border-radius: ${({theme:e})=>e.radii.lg};
  transition: all 0.3s ease;
  width: 100%;

  @media (min-width: 480px) {
    width: auto;
  }

  &.green {
    background-color: ${({theme:e})=>e.colors.accentBgSuccess};

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--hover-shadow-accent);
    }
  }

  &.orange {
    background-color: ${({theme:e})=>e.colors.accentBgWarning};

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--hover-shadow-secondary);
    }
  }
`,x=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${({theme:e})=>e.radii.lg};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`,S=n(),C=()=>(0,S.jsxs)(_,{children:[(0,S.jsxs)(v,{children:[(0,S.jsx)(`p`,{children:`Cook. Create. Share.`}),(0,S.jsx)(`h1`,{children:`Your Ultimate Digital Cookbook`}),(0,S.jsx)(`h2`,{children:`Store your favorite recipes, organize your collection and discover new dishes from the community.`}),(0,S.jsxs)(y,{children:[(0,S.jsxs)(b,{className:`green`,to:`/recipes`,children:[(0,S.jsx)(o,{size:32}),`Explore Recipes`]}),(0,S.jsxs)(b,{className:`orange`,to:`/my-recipes/new`,children:[(0,S.jsx)(a,{size:32}),`Create Recipe`]})]})]}),(0,S.jsx)(x,{children:(0,S.jsx)(`img`,{src:f,alt:`Cooking illustration`})})]}),w=i.section``,T=()=>(0,S.jsxs)(w,{children:[(0,S.jsx)(`h2`,{children:`Quick Actions`}),(0,S.jsx)(`button`,{children:`Create Recipe`}),(0,S.jsx)(`button`,{children:`Browse Recipes`}),(0,S.jsx)(`button`,{children:`My Cookbook`})]}),E=i.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 20px 30px;

  margin: 0 auto 40px auto;

  @media (min-width: 768px) {
    gap: 60px;
  }
`,D=i.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  text-align: center;

  h2 {
    font-size: 1rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;

    color: var(--text-secondary);
    font-weight: 600;

    opacity: 0.8;

    margin-bottom: 20px;
  }

  h3 {
    margin: 16px 0;

    display: inline;
    font-size: 2.5rem;
    font-style: italic;
    font-weight: 800;
    line-height: 1.4;

    max-width: 540px;

    text-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
    background: linear-gradient(
      120deg,
      var(--text-primary) 0%,
      var(--accent-color) 60%,
      rgba(94, 224, 163, 0.6) 100%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    letter-spacing: -0.02em;
    text-wrap: balance;

    @media (min-width: 1200px) {
      font-size: 2.7rem;
    }
  }

  span {
    margin-left: 15px;
    font-style: normal;
    -webkit-text-fill-color: initial;
    background: none;
    display: inline-block;
    transform: translateY(-2px);
    animation: floatEmoji 3s ease-in-out infinite;
  }

  @keyframes floatEmoji {
    0%,
    100% {
      transform: translateY(-2px);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  p {
    color: var(--text-secondary);

    font-size: 2rem;
    line-height: 1.6;

    font-style: italic;
    font-weight: 700;
    letter-spacing: 1px;
  }
`,O=r(t(),1),k=()=>{let t=e(),n=c(d),[r,i]=(0,O.useState)({title:``,emoji:``,tag:null}),a=(0,O.useMemo)(()=>n.filter(e=>e.tags?.includes(r.tag)).slice(0,4),[r.tag,n]);return(0,O.useEffect)(()=>{t(l()),(()=>{let e=new Date().getHours();i(e>6&&e<=11?{title:`Good morning! What’s for breakfast?`,emoji:`🍳`,tag:`breakfast`}:e>11&&e<=16?{title:`Hungry? Time for a hearty lunch!`,emoji:`🍲`,tag:`lunch`}:{title:`Cozy dinners for tonight`,emoji:`🌙`,tag:`dinner`})})()},[t]),a.length?(0,S.jsxs)(E,{children:[(0,S.jsxs)(D,{children:[(0,S.jsxs)(`div`,{className:`title-wrapper`,children:[(0,S.jsx)(`h2`,{children:`Smart Recommendation`}),(0,S.jsxs)(`h3`,{children:[r.title,(0,S.jsx)(`span`,{children:r.emoji})]})]}),(0,S.jsx)(`p`,{className:`subtitle`,children:`Tailored specifically to your current time of day`})]}),(0,S.jsx)(u,{recipes:a})]}):(0,S.jsx)(E,{children:(0,S.jsxs)(D,{children:[(0,S.jsx)(`h2`,{children:`Smart Recommendation`}),(0,S.jsx)(`h3`,{children:`Loading personalized recipes...`})]})})},A=i.section``,j=()=>(0,S.jsxs)(A,{children:[(0,S.jsx)(`h2`,{children:`Why Yumly`}),(0,S.jsxs)(`ul`,{children:[(0,S.jsx)(`li`,{children:`Create Your Own Recipes`}),(0,S.jsx)(`li`,{children:`Find Recipes Instantly`}),(0,S.jsx)(`li`,{children:`Build Your Personal Cookbook`})]})]}),M=i.section`
  padding: 80px 0;
  background-color: transparent;
`,N=i.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 80px;
  }
`,P=i.div`
  h2 {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin-bottom: 16px;
    font-weight: 700;
  }

  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 32px;
  }
`,F=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
  }

  .avatars {
    display: flex;
    align-items: center;
  }

  .avatar-plus {
    width: 44px;
    height: 44px;
    border-radius: ${({theme:e})=>e.radii.rounded};
    background: var(--card-secondary-color);
    border: 2px solid var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent-color);
    margin-left: -12px;
    z-index: 5;
  }
`,I=i.img`
  width: 44px;
  height: 44px;
  border-radius: ${({theme:e})=>e.radii.rounded};
  border: 2px solid var(--bg-color);
  object-fit: cover;
  margin-left: -12px;
  transition: transform 0.3s ease;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    transform: translateY(-4px);
    z-index: 10;
  }
`,L=i.span`
  font-size: 0.95rem;
  color: var(--text-secondary);

  strong {
    color: var(--text-primary);
  }
`,R=i.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,z=i.div`
  background-color: var(--surface-color);
  box-shadow: var(--hover-shadow-accent);
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    border: var(--hover-border-accent);
  }
`,B=i.div`
  width: 56px;
  height: 56px;
  border-radius: ${({theme:e})=>e.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;

  &.green {
    background-color: ${({theme:e})=>e.colors.accentBgSuccess};
  }

  &.orange {
    background-color: ${({theme:e})=>e.colors.accentBgWarning};
  }

  h3 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1.2;
  }

  p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    margin-top: 2px;
  }
`,V=[p,m,h,g],H=()=>(0,S.jsx)(M,{children:(0,S.jsxs)(N,{children:[(0,S.jsxs)(P,{children:[(0,S.jsx)(`h2`,{children:`Our Growing Family`}),(0,S.jsx)(`p`,{children:`Yumly is more than just a cookbook. It’s a global community of food lovers, home chefs, and culinary creators sharing their passion every day.`}),(0,S.jsxs)(F,{children:[(0,S.jsxs)(`div`,{className:`avatars`,children:[V.map((e,t)=>(0,S.jsx)(I,{src:e,alt:`Community chef ${t+1}`},t)),(0,S.jsx)(`div`,{className:`avatar-plus`,children:`+9k`})]}),(0,S.jsxs)(L,{children:[`Join `,(0,S.jsx)(`strong`,{children:`9,400+ chefs`}),` who already share their culinary secrets!`]})]})]}),(0,S.jsxs)(R,{children:[(0,S.jsxs)(z,{children:[(0,S.jsx)(B,{className:`green`,children:`🍳`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h3`,{children:`10,000+`}),(0,S.jsx)(`p`,{children:`Delicious Recipes Stored`})]})]}),(0,S.jsxs)(z,{children:[(0,S.jsx)(B,{className:`orange`,children:`🔥`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h3`,{children:`Daily`}),(0,S.jsx)(`p`,{children:`Fresh Recipes Added`})]})]})]})]})}),U=()=>(0,S.jsxs)(`div`,{children:[(0,S.jsx)(C,{}),(0,S.jsx)(T,{}),` //! пока мне не нравится эта секция`,(0,S.jsx)(j,{}),` //! придумать как ее отобразить`,(0,S.jsx)(k,{}),(0,S.jsx)(H,{}),(0,S.jsxs)(`section`,{children:[(0,S.jsx)(`p`,{children:`Start building your cookbook today`}),(0,S.jsx)(`button`,{children:`Create Your First Recipe`})]})]});export{U as default};