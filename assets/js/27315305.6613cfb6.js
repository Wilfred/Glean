"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[910],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return d},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){return function(n){var t=c(n.components);return r.createElement(e,l({},n,{components:t}))}},c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{O1:function(){return i},EO:function(){return o},Rr:function(){return s}});var r,a=t(67294),l=t(44256);function i(e){return a.createElement("a",{href:r+e.file},e.file)}function o(e){return a.createElement("a",{href:r+e.file},e.children)}r=(0,l.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var s=function(e){e.children;var n=e.internal,t=e.external;return(0,l.fbContent)({internal:a.createElement("code",null,n),external:a.createElement("code",null,t)})}},72024:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var r,a=t(87462),l=t(63366),i=(t(67294),t(3905)),o=t(44256),s=t(12038),d=["components"],u={id:"intro",title:"Querying Glean",sidebar_label:"Overview"},c=void 0,m={unversionedId:"query/intro",id:"query/intro",isDocsHomePage:!1,title:"Querying Glean",description:"Glean's query language is called Angle.  Read the [Angle",source:"@site/docs/query/intro.md",sourceDirName:"query",slug:"/query/intro",permalink:"/docs/query/intro",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/query/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"Querying Glean",sidebar_label:"Overview"},sidebar:"someSidebar",previous:{title:"Thrift and JSON",permalink:"/docs/schema/thrift"},next:{title:"Introduction",permalink:"/docs/angle/intro"}},p=[{value:"Query APIs",id:"query-apis",children:[{value:"Thrift",id:"thrift",children:[],level:3}],level:2},{value:"VS Code syntax highlighter",id:"vs-code-syntax-highlighter",children:[{value:"Building from source",id:"building-from-source",children:[],level:3},{value:"Downloading from CI",id:"downloading-from-ci",children:[],level:3},{value:"Installing",id:"installing",children:[],level:3}],level:2}],h=(r="Daiquery",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),f={toc:p};function g(e){var n=e.components,t=(0,l.Z)(e,d);return(0,i.mdx)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Glean's query language is called ",(0,i.mdx)("strong",{parentName:"p"},"Angle"),".  Read the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/angle/guide"},"Angle\nGuide")," to learn about how to write Angle queries."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/shell"},"shell")," can be used for testing queries and schema\nchanges, and exploring the data."),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"To try queries interactively run the REPL with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-lang=shell"},"glean shell\n")),(0,i.mdx)("p",null,"or build it from source"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-lang=shell"},"buck run //glean/tools/gleancli:glean -- shell\n")),(0,i.mdx)("p",null,"To make a single query:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-lang=shell"},"glean shell <query>\n"))),(0,i.mdx)(h,{mdxType:"Daiquery"}),(0,i.mdx)("h2",{id:"query-apis"},"Query APIs"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"There are APIs in ",(0,i.mdx)("a",{parentName:"p",href:"api/fb/hack.md"},"Hack"),", ",(0,i.mdx)("a",{parentName:"p",href:"api/fb/python.md"},"Python"),",\n",(0,i.mdx)("a",{parentName:"p",href:"api/fb/rust.md"},"Rust"),", and ",(0,i.mdx)("a",{parentName:"p",href:"/docs/query/api/haskell"},"Haskell"),".")),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"There is currently only a ",(0,i.mdx)("a",{parentName:"p",href:"/docs/query/api/haskell"},"Haskell")," API; APIs in other\nlanguages are coming soon.")),(0,i.mdx)("p",null,"All client layers are wrappers around the ",(0,i.mdx)("a",{parentName:"p",href:"#thrift"},"Thrift API"),"."),(0,i.mdx)("p",null,"The results of queries will be returned as instances of the Thrift\ntypes in ",(0,i.mdx)("inlineCode",{parentName:"p"},"glean/schema/thrift")," that are generated automatically from\nthe ",(0,i.mdx)("a",{parentName:"p",href:"/docs/schema/basic"},"schema"),"."),(0,i.mdx)("p",null,"The client layers provide a few useful things over the raw Thrift API:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Connecting to the most recent database for a given repository;"),(0,i.mdx)("li",{parentName:"ul"},"Sharding to ensure we connect to a suitable server for that database;"),(0,i.mdx)("li",{parentName:"ul"},"In some cases, an API for building queries programmatically.")),(0,i.mdx)("h3",{id:"thrift"},"Thrift"),(0,i.mdx)("p",null,"Glean exposes a ",(0,i.mdx)(s.EO,{file:"glean/if/glean.thrift",mdxType:"SrcFileLink"},"Thrift\nAPI"),"."),(0,i.mdx)("p",null,"The two methods for querying are"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"userQuery")," - general queries returning an arbitrary number of results"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"userQueryFacts")," - fetch the definition of a single fact given its ID")),(0,i.mdx)("p",null,"Queries are in Angle syntax, and results are encoded as JSON or Thrift\ncompact which you can encode/decode into the Thrift types."),(0,i.mdx)("h2",{id:"vs-code-syntax-highlighter"},"VS Code syntax highlighter"),(0,i.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"We have a VS Code plugin for Angle syntax highlighting in VS Code: ",(0,i.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/fb-vscode/marketplace/extension/nuclide.fb-glean/overview?leftNavTab=manage"},"Glean development Support")," the code lives ",(0,i.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/code/fbsource/%5Bmaster%5D/xplat/vscode/vscode-extensions/fb-glean/"},"here"))),(0,i.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"A VS Code plugin for Angle syntax highlighting is available in this repository, under\n",(0,i.mdx)("inlineCode",{parentName:"p"},"glean/vscode/"),". It can either be built from source and installed, or one can download and\ninstall the .vsix file generated by our CI system."),(0,i.mdx)("h3",{id:"building-from-source"},"Building from source"),(0,i.mdx)("p",null,"Assuming you have Node JS installed on your system, run the following commands:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-lang=shell"},"cd glean/vscode\nnpx vsce package\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"npx")," command should produce a ",(0,i.mdx)("inlineCode",{parentName:"p"},"glean-x.y.z.vsix")," file in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"glean/vscode/")," directory,\nthat you can install in VS Code by following the instructions of the ",(0,i.mdx)("em",{parentName:"p"},"Installing")," section below."),(0,i.mdx)("h3",{id:"downloading-from-ci"},"Downloading from CI"),(0,i.mdx)("p",null,"Simply visit ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookincubator/Glean/actions/workflows/ci.yml"},"this CI page"),",\nclick on the latest successful CI run, scroll down to the ",(0,i.mdx)("em",{parentName:"p"},"Artifacts")," section and click on\n",(0,i.mdx)("inlineCode",{parentName:"p"},"glean-vsix"),". This should give you a ",(0,i.mdx)("inlineCode",{parentName:"p"},".zip")," archive that contains a ",(0,i.mdx)("inlineCode",{parentName:"p"},"glean-x.y.z.vsix")," file\nthat you can install in VS Code by following the instructions in the next section."),(0,i.mdx)("h3",{id:"installing"},"Installing"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-lang=shell"},"code --install-extension path/to/glean-x.y.z.vsix\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix"},"The VS Code documentation"),"\ndescribes alternative ways to install an extension from a ",(0,i.mdx)("inlineCode",{parentName:"p"},".vsix")," file, from within the editor,\nin case the above command does not work or a more graphical, user-friendly is preferable.")))}g.isMDXComponent=!0}}]);