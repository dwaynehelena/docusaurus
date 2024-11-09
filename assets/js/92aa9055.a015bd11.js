"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["62976"],{44854:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return a}});var r=t(97432),s=t(24246),o=t(80980);let i={mdx:{format:"md"},date:"2019-11-08T20:00"},c="2.0.0-alpha.33",l={authorsImageUrls:[]},a=[{value:"Features",id:"features",level:2},{value:"Fixes",id:"fixes",level:2},{value:"Others",id:"others",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Table of contents is now highlighted depending on current active headings. (thanks to awesome @SantiagoGdaR) ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/1896",children:"#1896"})]}),"\n",(0,s.jsxs)(n.li,{children:["Official blog plugin can now generate feed for blog posts. (thanks to awesome @moozzyk) ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/1916",children:"#1916"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"BREAKING"})," ",(0,s.jsx)(n.code,{children:"prismTheme"})," is renamed to ",(0,s.jsx)(n.code,{children:"theme"})," as part new ",(0,s.jsx)(n.code,{children:"prism"})," object in ",(0,s.jsx)(n.code,{children:"themeConfig"})," field in your ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"}),". Eg:\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" themeConfig: {\n-   prismTheme: require('prism-react-renderer/themes/dracula'),\n+   prism: {\n+     theme: require('prism-react-renderer/themes/dracula'),\n+   },\n},\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Added new ",(0,s.jsx)(n.code,{children:"prism"})," option ",(0,s.jsx)(n.code,{children:"defaultLanguage"})," that is used if the language is not specified in code blocks. ",(0,s.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/1910",children:"#1910"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Fix babel/env not picking the correct browserslist configuration during development. When running ",(0,s.jsx)(n.code,{children:"docusaurus start"}),", ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," is now consistently set to ",(0,s.jsx)(n.code,{children:"development"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Ensure routes config generation to be more consistent in ordering. Nested routes should be placed last in routes.js. This will allow user to create ",(0,s.jsx)(n.code,{children:"src/pages/docs.js"})," to create custom docs page for ",(0,s.jsx)(n.code,{children:"/docs"})," or even ",(0,s.jsx)(n.code,{children:"src/pages/docs/super.js"})," to create page for ",(0,s.jsx)(n.code,{children:"/docs/super/"}),";"]}),"\n",(0,s.jsx)(n.li,{children:"Fix watcher does not trigger reload on windows."}),"\n",(0,s.jsx)(n.li,{children:"Fix build compilation error if exists only one code tab."}),"\n",(0,s.jsx)(n.li,{children:"Add minor padding to docs container so that hash-link won't be cut off."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"others",children:"Others"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Misc dependency upgrades."}),"\n",(0,s.jsx)(n.li,{children:"Stability improvement (more tests) & refactoring on docs plugin to prevent regression."}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},80980:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(27378);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}},97432:function(e){e.exports=JSON.parse('{"permalink":"/changelog/2.0.0-alpha.33","source":"@site/changelog/source/2.0.0-alpha.33.md","title":"2.0.0-alpha.33","description":"Features","date":"2019-11-08T20:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[],"frontMatter":{"mdx":{"format":"md"},"date":"2019-11-08T20:00"},"unlisted":false,"prevItem":{"title":"2.0.0-alpha.34","permalink":"/changelog/2.0.0-alpha.34"},"nextItem":{"title":"2.0.0-alpha.32","permalink":"/changelog/2.0.0-alpha.32"},"listPageLink":"/changelog/page/5"}')}}]);