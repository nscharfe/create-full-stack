(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{55:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return i}));var a=r(2),n=(r(0),r(87));const s={id:"backend",title:"Backend"},o={unversionedId:"backend",id:"backend",isDocsHomePage:!1,title:"Backend",description:"Backend choices for Create Full Stack. Hasura is recommended for most cases.",source:"@site/docs/backend.md",slug:"/backend",permalink:"/docs/backend",editUrl:"https://github.com/tiagob/create-full-stack/edit/master/packages/docusaurus/docs/backend.md",version:"current",sidebar:"someSidebar",previous:{title:"Why?",permalink:"/docs/why"},next:{title:"Auth",permalink:"/docs/auth"}},c=[{value:"Apollo Server Express",id:"apollo-server-express",children:[{value:"Features",id:"features",children:[]},{value:"Stack",id:"stack",children:[]}]},{value:"Hasura",id:"hasura",children:[{value:"Features",id:"features-1",children:[]}]}],l={rightToc:c};function i({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Backend choices for Create Full Stack. Hasura is recommended for most cases."),Object(n.b)("h2",{id:"apollo-server-express"},"Apollo Server Express"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apollographql/apollo-server/stargazers/"}),Object(n.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/apollographql/apollo-server.svg?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"})))),Object(n.b)("p",null,"This choice scaffolds out a TypeScript Node server at ",Object(n.b)("inlineCode",{parentName:"p"},"packages/server/"),"."),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/apollo-server-express"}),"Apollo Server Express")," uses Node.js and the Express web framework to create a GraphQL API. Developers explicitly define the GraphQL resolvers. This makes use cases with lots of custom business logic simpler at the expense of manually coding everything."),Object(n.b)("h3",{id:"features"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GraphQL: Yes"),Object(n.b)("li",{parentName:"ul"},"Automatic resolvers: No"),Object(n.b)("li",{parentName:"ul"},"Developer console: No"),Object(n.b)("li",{parentName:"ul"},"GraphQL playground: Yes"),Object(n.b)("li",{parentName:"ul"},"Permissions/Auth support: Yes"),Object(n.b)("li",{parentName:"ul"},"Database: Postgres"),Object(n.b)("li",{parentName:"ul"},"ORM: ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://typeorm.io/#/"}),"TypeORM")),Object(n.b)("li",{parentName:"ul"},"Migration support: Yes"),Object(n.b)("li",{parentName:"ul"},"Custom business logic: Yes")),Object(n.b)("h3",{id:"stack"},"Stack"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-express"}),"Apollo Server Express")," (GraphQL resolver)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/expressjs/express"}),"Express")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kulshekhar/ts-jest"}),"TS Jest")," (testing)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/nodejs/node"}),"Node")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.postgresql.org/"}),"Postgres")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/typeorm/typeorm"}),"TypeORM")," (ORM)")),Object(n.b)("h2",{id:"hasura"},"Hasura"),Object(n.b)("p",null,Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hasura/graphql-engine/stargazers/"}),Object(n.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/hasura/graphql-engine.svg?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"})))),Object(n.b)("p",null,"This choice includes the Hasura Docker image and configuration files at ",Object(n.b)("inlineCode",{parentName:"p"},"hasura/"),"."),Object(n.b)("p",null,"Given a Postgres database ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://hasura.io/opensource"}),"Hasura")," provides a GraphQL API and a web console. From the web console developers can modify the Postgres schema, API permissions on a column level or add hooks for custom business logic. Schema changes from the console automatically create migration files which are applied anytime Hasura is spun up. Hasura is open-source and runs in a Docker container."),Object(n.b)("h3",{id:"features-1"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GraphQL: Yes"),Object(n.b)("li",{parentName:"ul"},"Automatic resolvers: Yes"),Object(n.b)("li",{parentName:"ul"},"Developer console: No"),Object(n.b)("li",{parentName:"ul"},"GraphQL playground: Yes"),Object(n.b)("li",{parentName:"ul"},"Permissions/Auth support: Yes"),Object(n.b)("li",{parentName:"ul"},"Database: Postgres"),Object(n.b)("li",{parentName:"ul"},"ORM: N/A"),Object(n.b)("li",{parentName:"ul"},"Migration support: Yes"),Object(n.b)("li",{parentName:"ul"},"Custom business logic: Requires additional service")))}i.isMDXComponent=!0},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=a,h=b["".concat(o,".").concat(m)]||b[m]||u[m]||s;return r?n.a.createElement(h,c(c({ref:t},i),{},{components:r})):n.a.createElement(h,c({ref:t},i))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<s;i++)o[i]=r[i];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);