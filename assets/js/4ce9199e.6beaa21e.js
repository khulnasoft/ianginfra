"use strict";(self.webpackChunklanginfra_docs=self.webpackChunklanginfra_docs||[]).push([[7118],{69716:(e,n,r)=>{r.r(n),r.d(n,{CH:()=>u,assets:()=>h,chCodeConfig:()=>p,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>d,toc:()=>b});var l=r(74848),t=r(28453),o=r(24754),i=r(11470),s=r(19365);const a={title:"Global variables",slug:"/configuration-global-variables"},c=void 0,d={id:"Configuration/configuration-global-variables",title:"Global variables",description:"Global variables let you store and reuse generic input values and credentials across your projects.",source:"@site/docs/Configuration/configuration-global-variables.md",sourceDirName:"Configuration",slug:"/configuration-global-variables",permalink:"/configuration-global-variables",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Global variables",slug:"/configuration-global-variables"},sidebar:"docs",previous:{title:"Langinfra CLI",permalink:"/configuration-cli"},next:{title:"Environment variables",permalink:"/environment-variables"}},h={},u={annotations:o.hk,Code:o.Cy},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},b=[{value:"Create a global variable",id:"3543d5ef00eb453aa459b97ba85501e5",level:2},{value:"Edit a global variable",id:"edit-a-global-variable",level:2},{value:"Delete a global variable",id:"delete-a-global-variable",level:2},{value:"Add global variables from the environment",id:"76844a93dbbc4d1ba551ea1a4a89ccdd",level:2},{value:"Custom environment variables",id:"custom-environment-variables",level:3},{value:"Default environment variables",id:"default-environment-variables",level:3},{value:"Security best practices",id:"security-best-practices",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return u||g("CH",!1),u.Code||g("CH.Code",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n","\n",(0,l.jsx)(n.p,{children:"Global variables let you store and reuse generic input values and credentials across your projects.\nYou can use a global variable in any text input field that displays the \ud83c\udf10 icon."}),"\n",(0,l.jsx)(n.p,{children:"Langinfra stores global variables in its internal database, and encrypts the values using a secret key."}),"\n",(0,l.jsx)(n.h2,{id:"3543d5ef00eb453aa459b97ba85501e5",children:"Create a global variable"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the Langinfra UI, click your profile icon, and then select ",(0,l.jsx)(n.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Global Variables"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Add New"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.strong,{children:"Create Variable"})," dialog, enter a name for your variable in the ",(0,l.jsx)(n.strong,{children:"Variable Name"})," field."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Optional: Select a ",(0,l.jsx)(n.strong,{children:"Type"})," for your global variable. The available types are ",(0,l.jsx)(n.strong,{children:"Generic"})," (default) and ",(0,l.jsx)(n.strong,{children:"Credential"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["No matter which ",(0,l.jsx)(n.strong,{children:"Type"})," you select, Langinfra still encrypts the ",(0,l.jsx)(n.strong,{children:"Value"})," of the global variable."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Enter the ",(0,l.jsx)(n.strong,{children:"Value"})," for your global variable."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Optional: Use the ",(0,l.jsx)(n.strong,{children:"Apply To Fields"})," menu to select one or more fields that you want Langinfra to automatically apply your global variable to. For example, if you select ",(0,l.jsx)(n.strong,{children:"OpenAI API Key"}),", Langinfra will automatically apply the variable to any ",(0,l.jsx)(n.strong,{children:"OpenAI API Key"})," field."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Save Variable"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"You can now select your global variable from any text input field that displays the \ud83c\udf10 icon."}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["Because values are encrypted, you can't view the actual values of your global variables.\nIn ",(0,l.jsx)(n.strong,{children:"Settings > Global Variables"}),", the ",(0,l.jsx)(n.strong,{children:"Value"})," column shows the encrypted hash for ",(0,l.jsx)(n.strong,{children:"Generic"})," type variables, and shows nothing for ",(0,l.jsx)(n.strong,{children:"Credential"})," type variables."]})}),"\n",(0,l.jsx)(n.h2,{id:"edit-a-global-variable",children:"Edit a global variable"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the Langinfra UI, click your profile icon, and then select ",(0,l.jsx)(n.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Global Variables"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Click on the global variable you want to edit."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the ",(0,l.jsx)(n.strong,{children:"Update Variable"})," dialog, you can edit the following fields: ",(0,l.jsx)(n.strong,{children:"Variable Name"}),", ",(0,l.jsx)(n.strong,{children:"Value"}),", and ",(0,l.jsx)(n.strong,{children:"Apply To Fields"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Update Variable"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"delete-a-global-variable",children:"Delete a global variable"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Deleting a global variable permanently deletes any references to it from your existing projects."})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the Langinfra UI, click your profile icon, and then select ",(0,l.jsx)(n.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Global Variables"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Click the checkbox next to the global variable that you want to delete."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Click the Trash icon."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The global variable, and any existing references to it, are deleted."}),"\n",(0,l.jsx)(n.h2,{id:"76844a93dbbc4d1ba551ea1a4a89ccdd",children:"Add global variables from the environment"}),"\n",(0,l.jsx)(n.h3,{id:"custom-environment-variables",children:"Custom environment variables"}),"\n",(0,l.jsxs)(n.p,{children:["You can use the ",(0,l.jsx)(n.code,{children:"LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT"})," environment variable to source global variables from your runtime environment."]}),"\n",(0,l.jsxs)(i.A,{children:[(0,l.jsxs)(s.A,{value:"local",label:"Local",default:!0,children:[(0,l.jsxs)(n.p,{children:["If you installed Langinfra locally, you must define the ",(0,l.jsx)(n.code,{children:"LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT"})," environment variable in a ",(0,l.jsx)(n.code,{children:".env"})," file."]}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Create a ",(0,l.jsx)(n.code,{children:".env"})," file and open it in your preferred editor."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add the ",(0,l.jsx)(n.code,{children:"LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT"})," environment variable as follows:"]}),"\n",(0,l.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".env"',focus:"",code:{lines:[{tokens:[{content:"LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT=VARIABLE1,VARIABLE2",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,l.jsxs)(n.p,{children:["Replace ",(0,l.jsx)(n.code,{children:"VARIABLE1,VARIABLE2"})," with a comma-separated list (no spaces) of variables that you want Langinfra to source from the environment.\nFor example, ",(0,l.jsx)(n.code,{children:"my_key,some_string"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Save and close the file."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Start Langinfra with the ",(0,l.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,l.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"VARIABLE1",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"VALUE1"',props:{style:{color:"#A5D6FF"}}},{content:" VARIABLE2",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"VALUE2" ',props:{style:{color:"#A5D6FF"}}},{content:"python ",props:{style:{color:"#FFA657"}}},{content:"-m ",props:{style:{color:"#79C0FF"}}},{content:"langinfra run ",props:{style:{color:"#A5D6FF"}}},{content:"--env-file ",props:{style:{color:"#79C0FF"}}},{content:".env",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["In this example, the environment variables (",(0,l.jsx)(n.code,{children:'VARIABLE1="VALUE1"'})," and ",(0,l.jsx)(n.code,{children:'VARIABLE2="VALUE2"'}),") are prefixed to the startup command.\nThis is a rudimentary method for exposing environment variables to Python on the command line, and is meant for illustrative purposes.\nMake sure to expose your environment variables to Langinfra in a manner that best suits your own environment."]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Confirm that Langinfra successfully sourced the global variables from the environment."}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["In the Langinfra UI, click your profile icon, and then select ",(0,l.jsx)(n.strong,{children:"Settings"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Click ",(0,l.jsx)(n.strong,{children:"Global Variables"}),"."]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["The environment variables appear in the list of ",(0,l.jsx)(n.strong,{children:"Global Variables"}),"."]}),"\n"]}),"\n"]})]}),(0,l.jsxs)(s.A,{value:"docker",label:"Docker",children:[(0,l.jsxs)(n.p,{children:["If you're using Docker, you can pass ",(0,l.jsx)(n.code,{children:"LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT"})," directly from the command line or from a ",(0,l.jsx)(n.code,{children:".env"})," file."]}),(0,l.jsxs)(n.p,{children:["To pass ",(0,l.jsx)(n.code,{children:"LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT"})," directly from the command line:"]}),(0,l.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"-it --rm \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -p ",props:{style:{color:"#79C0FF"}}},{content:"7860:",props:{style:{color:"#A5D6FF"}}},{content:"7860 \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -e ",props:{style:{color:"#79C0FF"}}},{content:'LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT="VARIABLE1,VARIABLE2" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -e ",props:{style:{color:"#79C0FF"}}},{content:'VARIABLE1="VALUE1" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -e ",props:{style:{color:"#79C0FF"}}},{content:'VARIABLE2="VALUE2" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    khulnasoft/langinfra:latest",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),(0,l.jsxs)(n.p,{children:["To pass ",(0,l.jsx)(n.code,{children:"LANGINFRA_VARIABLES_TO_GET_FROM_ENVIRONMENT"})," from a ",(0,l.jsx)(n.code,{children:".env"})," file:"]}),(0,l.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"-it --rm \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -p ",props:{style:{color:"#79C0FF"}}},{content:"7860:",props:{style:{color:"#A5D6FF"}}},{content:"7860 \\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    --env-file ",props:{style:{color:"#79C0FF"}}},{content:".env ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -e ",props:{style:{color:"#79C0FF"}}},{content:'VARIABLE1="VALUE1" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    -e ",props:{style:{color:"#79C0FF"}}},{content:'VARIABLE2="VALUE2" ',props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"    khulnasoft/langinfra:latest",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]})]})]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsx)(n.p,{children:"When adding global variables from the environment, the following limitations apply:"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["You can only source the ",(0,l.jsx)(n.strong,{children:"Name"})," and ",(0,l.jsx)(n.strong,{children:"Value"})," from the environment.\nTo add additional parameters, such as the ",(0,l.jsx)(n.strong,{children:"Apply To Fields"})," parameter, you must edit the global variables in the Langinfra UI."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Global variables that you add from the environment always have the ",(0,l.jsx)(n.strong,{children:"Credential"})," type."]}),"\n"]}),"\n"]})]}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsxs)(n.p,{children:["If you want to explicitly prevent Langinfra from sourcing global variables from the environment, set ",(0,l.jsx)(n.code,{children:"LANGINFRA_STORE_ENVIRONMENT_VARIABLES"})," to ",(0,l.jsx)(n.code,{children:"false"})," in your ",(0,l.jsx)(n.code,{children:".env"})," file:"]}),(0,l.jsx)(u.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",title:'".env"',focus:"",code:{lines:[{tokens:[{content:"LANGINFRA_STORE_ENVIRONMENT_VARIABLES=false",props:{}}]}],lang:"text"},annotations:[]}]})]}),"\n",(0,l.jsx)(n.h3,{id:"default-environment-variables",children:"Default environment variables"}),"\n",(0,l.jsxs)(n.p,{children:["Langinfra automatically detects and converts some environment variables into global variables of the type ",(0,l.jsx)(n.strong,{children:"Credential"}),", which are applied to the specific fields in components that require them. Currently, the following variables are supported:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"OPENAI_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"ANTHROPIC_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"GOOGLE_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"COHERE_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"GROQ_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"HUGGINGFACEHUB_API_TOKEN"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"SEARCHAPI_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"SERPAPI_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AZURE_OPENAI_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AZURE_OPENAI_API_VERSION"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AZURE_OPENAI_API_INSTANCE_NAME"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AZURE_OPENAI_API_DEPLOYMENT_NAME"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"PINECONE_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"ASTRA_DB_APPLICATION_TOKEN"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"ASTRA_DB_API_ENDPOINT"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"UPSTASH_VECTOR_REST_URL"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"UPSTASH_VECTOR_REST_TOKEN"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"VECTARA_CUSTOMER_ID"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"VECTARA_CORPUS_ID"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"VECTARA_API_KEY"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["For information about other environment variables and their usage, see ",(0,l.jsx)(n.a,{href:"/environment-variables",children:"Environment Variables"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"security-best-practices",children:"Security best practices"}),"\n",(0,l.jsxs)(n.p,{children:["For information about securing your global variables and other sensitive data, see ",(0,l.jsx)(n.a,{href:"/configuration-security-best-practices",children:"Security best practices"}),"."]})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var l=r(18215);const t={tabItem:"tabItem_Ymn6"};var o=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,l.A)(t.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var l=r(96540),t=r(18215),o=r(23104),i=r(56347),s=r(205),a=r(57485),c=r(31682),d=r(70679);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:t}}=e;return{value:n,label:r,attributes:l,default:t}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(o),(0,l.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=u(e),[i,a]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:o}))),[c,h]=b({queryString:r,groupId:t}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(r);return[t,(0,l.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),g=(()=>{const e=c??x;return p({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&a(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,o]),tabValues:o}}var j=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function v(e){let{className:n,block:r,selectedValue:l,selectValue:i,tabValues:s}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,r=a.indexOf(n),t=s[r].value;t!==l&&(c(n),i(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...o,className:(0,t.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function A(e){let{lazy:n,children:r,selectedValue:o}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,l.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function m(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(A,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,f.jsx)(m,{...e,children:h(e.children)},String(n))}}}]);