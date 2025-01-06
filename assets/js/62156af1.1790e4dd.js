"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[6545],{62981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(74848),i=t(28453);t(96540),t(65195);const r={title:"Integrate Google OAuth with Langinfra",slug:"/integrations-setup-google-oauth-langinfra",description:"A comprehensive guide on creating a Google OAuth app, obtaining tokens, and integrating them with Langinfra's Google components."},l=void 0,a={id:"Integrations/Google/integrations-setup-google-oauth-langinfra",title:"Integrate Google OAuth with Langinfra",description:"A comprehensive guide on creating a Google OAuth app, obtaining tokens, and integrating them with Langinfra's Google components.",source:"@site/docs/Integrations/Google/integrations-setup-google-oauth-langinfra.md",sourceDirName:"Integrations/Google",slug:"/integrations-setup-google-oauth-langinfra",permalink:"/integrations-setup-google-oauth-langinfra",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Integrate Google OAuth with Langinfra",slug:"/integrations-setup-google-oauth-langinfra",description:"A comprehensive guide on creating a Google OAuth app, obtaining tokens, and integrating them with Langinfra's Google components."},sidebar:"docs",previous:{title:"LangWatch",permalink:"/integrations-langwatch"},next:{title:"Integrate Google Cloud Vertex AI with Langinfra",permalink:"/integrations-setup-google-cloud-vertex-ai-langinfra"}},s={},c=[{value:"Create an OAuth Application in Google Cloud",id:"5b8981b15d86192d17b0e5725c1f95e7",level:2},{value:"Retrieve Access and Refresh Tokens",id:"retrieve-access-and-refresh-tokens",level:2},{value:"Create a flow with Google Drive loader",id:"create-a-flow-with-google-drive-loader",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Langinfra integrates with ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2",children:"Google OAuth"})," for authenticating the ",(0,o.jsx)(n.a,{href:"/components-data#gmail-loader",children:"Gmail loader"}),", ",(0,o.jsx)(n.a,{href:"components-data#google-drive-loader",children:"Google Drive loader"}),", and ",(0,o.jsx)(n.a,{href:"/components-data#google-drive-search",children:"Google Drive Search"})," components."]}),"\n",(0,o.jsx)(n.p,{children:"Learn how to create an OAuth app in Google Cloud, obtain the necessary credentials and access tokens, and add them to Langinfra\u2019s Google components."}),"\n",(0,o.jsx)(n.h2,{id:"5b8981b15d86192d17b0e5725c1f95e7",children:"Create an OAuth Application in Google Cloud"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the ",(0,o.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"Select a project"}),", and then click ",(0,o.jsx)(n.strong,{children:"New Project"})," to create a new project."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"OAuth Client ID and Secret",src:t(36758).A+"",width:"800",height:"450"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["To enable APIs for the project, select ",(0,o.jsx)(n.strong,{children:"APIs & Services"}),", and then click ",(0,o.jsx)(n.strong,{children:"Library"}),". Enable the APIs you need for your project. For example, if your flow uses the Google Drive component, enable the Google Drive API."]}),"\n",(0,o.jsxs)(n.li,{children:["To navigate to the OAuth consent screen, click ",(0,o.jsx)(n.strong,{children:"APIs & Services"}),", and then click ",(0,o.jsx)(n.strong,{children:"OAuth consent screen"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Populate your OAuth consent screen with the application name, user support email, required ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"scopes"}),", and authorized domains."]}),"\n",(0,o.jsxs)(n.li,{children:["To create an ",(0,o.jsx)(n.strong,{children:"OAuth Client ID"}),", navigate to ",(0,o.jsx)(n.strong,{children:"Clients"}),", and then click ",(0,o.jsx)(n.strong,{children:"Create Client"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.strong,{children:"Desktop app"})," as the application type, and then name your client ID."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Create"}),". A Client ID and Client Secret are created. Download the credentials as a JSON file to your local machine and save it securely."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"OAuth Client ID and Secret",src:t(4728).A+"",width:"3450",height:"1756"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"retrieve-access-and-refresh-tokens",children:"Retrieve Access and Refresh Tokens"}),"\n",(0,o.jsx)(n.p,{children:"With your OAuth application configured and your credentials JSON file created, follow these steps to authenticate the Langinfra application."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Create a new project in Langinfra."}),"\n",(0,o.jsxs)(n.li,{children:["Add a ",(0,o.jsx)(n.strong,{children:"Google OAuth Token"})," component to your flow."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Credentials File"})," field of the Google OAuth Token component, enter the path to your ",(0,o.jsx)(n.strong,{children:"Credentials File"}),", the JSON file containing the Client ID credentials you downloaded from Google in the previous steps."]}),"\n",(0,o.jsxs)(n.li,{children:["To authenticate your application, in the ",(0,o.jsx)(n.strong,{children:"Google OAuth Token"})," component, click ",(0,o.jsx)(n.strong,{children:"Play"}),".\nA new tab opens in the browser to authenticate your application using your Google Cloud account. You must authenticate the application with the same Google account that created the OAuth credentials."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["If a new tab does not open automatically, check the Langinfra ",(0,o.jsx)(n.strong,{children:"Logs"})," for the Google authentication URL. Open this URL in your browser to complete the authentication."]})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"After successful authentication, your Langinfra application can now request and refresh tokens. These tokens enable Langinfra to interact with Google services on your behalf and execute the requests you\u2019ve specified."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-flow-with-google-drive-loader",children:"Create a flow with Google Drive loader"}),"\n",(0,o.jsxs)(n.p,{children:["For a pre-built JSON file of a flow that uses the Google Drive loader component, download the ",(0,o.jsx)("a",{href:"./files/Google_Drive_Docs_Translations_Example.json",download:!0,children:"Google Drive Document Translation Example Flow JSON"})," to your local machine."]}),"\n",(0,o.jsxs)(n.p,{children:["In this example, the ",(0,o.jsx)(n.strong,{children:"Google Drive loader"})," component loads a text file hosted on Google Drive, translates the text to Spanish, and returns it to a chat output."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Download the ",(0,o.jsx)("a",{href:"./files/Google_Drive_Docs_Translations_Example.json",download:!0,children:"Google Drive Document Translation Example Flow JSON"})," to your local machine."]}),"\n",(0,o.jsxs)(n.li,{children:["To import the downloaded JSON to Langinfra, click ",(0,o.jsx)(n.strong,{children:"Options"}),", and then select ",(0,o.jsx)(n.strong,{children:"Import"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Credentials File"})," field of the Google OAuth Token component, enter the path to your ",(0,o.jsx)(n.strong,{children:"Credentials File"}),", the JSON file containing the Client ID credentials you downloaded from Google in the previous steps."]}),"\n",(0,o.jsxs)(n.li,{children:["In the Google Drive loader component, in the ",(0,o.jsx)(n.code,{children:"JSON String of the Service Account Token"})," field, enter the JSON string containing the token returned in the output of the Google OAuth Token component."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The example flow includes a ",(0,o.jsx)(n.strong,{children:"Parse data"})," component to convert the ",(0,o.jsx)(n.code,{children:"data"})," output of the Google OAuth Token component to the ",(0,o.jsx)(n.code,{children:"text"})," input of the JSON Cleaner component."]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"To allow the Langinfra component to access the file in Google Drive, copy the Google Drive File ID from the document's URL."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The file ID is located between ",(0,o.jsx)(n.code,{children:"/d/"})," and ",(0,o.jsx)(n.code,{children:"/edit"})," in a Google Drive document's URL.\nFor example, in the URL ",(0,o.jsx)(n.code,{children:"https://drive.google.com/file/d/1a2b3c4D5E6F7gHI8J9klmnopQ/edit"}),", the File ID is ",(0,o.jsx)(n.code,{children:"1a2b3c4D5E6F7gHI8J9klmnopQ"}),"."]})}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsxs)(n.li,{children:["In the Google Drive loader component, in the ",(0,o.jsx)(n.strong,{children:"Document ID"})," field, paste the document URL."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Chat output"})," component, and then click ",(0,o.jsx)(n.strong,{children:"Play"}),".\nThe chat output should display a translated document."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},65195:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(96540),i=t(6342);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):o.push(i)})),o}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:o});return function(e){return e.level>=t&&e.level<=o}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const o=e.find((e=>a(e).top>=t));if(o){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(o))?o:e[e.indexOf(o)-1]??null}return e[e.length-1]??null}function c(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,o.useRef)(void 0),t=c();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:i,minHeadingLevel:r,maxHeadingLevel:l}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const o=[];for(let i=n;i<=t;i+=1)o.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(o.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),c=s(a,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var h=t(28774),g=t(74848);function u(e){let{toc:n,className:t,linkClassName:o,isChild:i}=e;return n.length?(0,g.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,g.jsxs)("li",{children:[(0,g.jsx)(h.A,{to:`#${e.id}`,className:o??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,g.jsx)(u,{isChild:!0,toc:e.children,className:t,linkClassName:o})]},e.id)))}):null}const p=o.memo(u);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:c,maxHeadingLevel:h,...u}=e;const f=(0,i.p)(),m=c??f.tableOfContents.minHeadingLevel,x=h??f.tableOfContents.maxHeadingLevel,j=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,o.useMemo)((()=>l({toc:r(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:m,maxHeadingLevel:x});return d((0,o.useMemo)((()=>{if(a&&s)return{linkClassName:a,linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:x}}),[a,s,m,x])),(0,g.jsx)(p,{toc:j,className:t,linkClassName:a,...u})}},36758:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/create-a-google-cloud-project-cb1730f824bb28b1caa950c492726f87.gif"},4728:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/create-oauth-client-id-57b94aad2bf2859ae9011f6f2a0d52d3.gif"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);