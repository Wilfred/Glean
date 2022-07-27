"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[345],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){return function(n){var t=m(n.components);return r.createElement(e,a({},n,{components:t}))}},m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=m(t),u=i,p=c["".concat(o,".").concat(u)]||c[u]||f[u]||a;return t?r.createElement(p,l(l({ref:n},s),{},{components:t})):r.createElement(p,l({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12038:function(e,n,t){t.d(n,{EO:function(){return l},O1:function(){return o},Rr:function(){return d}});var r,i=t(67294),a=t(44256);function o(e){return i.createElement("a",{href:r+e.file},e.file)}function l(e){return i.createElement("a",{href:r+e.file},e.children)}r=(0,a.isInternal)()?"https://www.internalfb.com/code/fbsource/fbcode/":"https://github.com/facebookincubator/Glean/tree/master/";var d=function(e){e.children;var n=e.internal,t=e.external;return(0,a.fbContent)({internal:i.createElement("code",null,n),external:i.createElement("code",null,t)})}},1554:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return f}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=t(44256),l=t(12038),d=["components"],s={id:"write",title:"Writing data to Glean",sidebar_label:"Writing data to Glean"},c=void 0,m={unversionedId:"write",id:"write",title:"Writing data to Glean",description:"This page describes the various ways in which data gets into Glean.",source:"@site/docs/write.md",sourceDirName:".",slug:"/write",permalink:"/docs/write",draft:!1,editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/write.md",tags:[],version:"current",frontMatter:{id:"write",title:"Writing data to Glean",sidebar_label:"Writing data to Glean"},sidebar:"someSidebar",previous:{title:"Glean Databases",permalink:"/docs/databases"},next:{title:"Running the Tools",permalink:"/docs/running"}},u={},f=[{value:"Client-driven writing",id:"client-driven-writing",level:2},{value:"Server-driven writing",id:"server-driven-writing",level:2},{value:"APIs for writing",id:"apis-for-writing",level:2},{value:"Writing from the command line",id:"writing-from-the-command-line",level:2},{value:"JSON format",id:"json-format",level:3},{value:"Loading a DB from JSON in the shell",id:"loading-a-db-from-json-in-the-shell",level:3},{value:"Creating a database using the command line",id:"creating-a-database-using-the-command-line",level:3}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},h=p("Scribe"),x=p("Backup"),b={toc:f};function g(e){var n=e.components,t=(0,i.Z)(e,d);return(0,a.mdx)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This page describes the various ways in which data gets into Glean."),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"For a complete walkthrough of the steps necessary to write an indexer, see ",(0,a.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Glean/How_to:_write_a_Glean_indexer/"},"How to write a Glean indexer"),".")),(0,a.mdx)("p",null,"There are two main methods for creating a DB. Repo-wide indexing jobs\nwhich require multiple workers and have dependent tasks are managed by\nthe server, while simple one-off DB creation can be performed\nindependently by a single client."),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"After the data is ingested by the write tier (",(0,a.mdx)("inlineCode",{parentName:"p"},"glean.write"),"), it is backed up and copied to the read tier (",(0,a.mdx)("inlineCode",{parentName:"p"},"glean"),") for efficient access. For newly created DB names, check out ",(0,a.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Glean/Write/#configuring-db-backup-an"},"the section below")," for configuring this behavior.")),(0,a.mdx)("h2",{id:"client-driven-writing"},"Client-driven writing"),(0,a.mdx)("p",null,"A database can be created by a client using any of these methods:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Programmatically, using one of the APIs listed in ",(0,a.mdx)("a",{parentName:"li",href:"#apis-for-writing"},"APIs for Writing"),"."),(0,a.mdx)("li",{parentName:"ol"},"On the command line: invoke the ",(0,a.mdx)("inlineCode",{parentName:"li"},"glean")," command-line tool to send data in JSON format, see ",(0,a.mdx)("a",{parentName:"li",href:"#creating-a-database-usin"}," Creating a database using the command line"),"."),(0,a.mdx)("li",{parentName:"ol"},"In the shell, use ",(0,a.mdx)("inlineCode",{parentName:"li"},"glean shell --db-root=<dir>")," and then use the command ",(0,a.mdx)("inlineCode",{parentName:"li"},":load")," to create a DB from a JSON file. See ",(0,a.mdx)("a",{parentName:"li",href:"#loading-a-db-from-json-i"}," Loading a DB from JSON in the shell"),".")),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("ol",{start:4},(0,a.mdx)("li",{parentName:"ol"},"Via Scribe, see ",(0,a.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Glean/Write/#writing-data-using-scrib"},"Writing data using Scribe")))),(0,a.mdx)("h2",{id:"server-driven-writing"},"Server-driven writing"),(0,a.mdx)("p",null,"Large indexing jobs are coordinated by the server, using a ",(0,a.mdx)("em",{parentName:"p"},"recipe")," to\ndefine the various tasks and the dependencies between them.  Recipes\nare defined in the recipes configuration; see the ",(0,a.mdx)("inlineCode",{parentName:"p"},"--recipe-config"),"\noption in ",(0,a.mdx)("a",{parentName:"p",href:"/docs/running#common-options"},"Common options"),"."),(0,a.mdx)("p",null,"The job proceeds as follows:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"An indexing job is started by calling the server's ",(0,a.mdx)("inlineCode",{parentName:"p"},"kickOff")," Thrift\nmethod. This creates a work queue of tasks on the server.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Clients obtain tasks from the server by calling ",(0,a.mdx)("inlineCode",{parentName:"p"},"getWork"),". Tasks may\nhave dependencies between them, so the server won't hand out a task\nuntil its dependencies are complete.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"When all tasks are done, the server marks the database as complete."))),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"For the fbsource indexer, the components of this are:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The coordinator, run by a ",(0,a.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/chronos/job/?jobname=glean.clang.indexer&smc=chronos_gp_admin_client"},"chronos job"),", which calls ",(0,a.mdx)("inlineCode",{parentName:"li"},"kickoff")," and then waits for completion."),(0,a.mdx)("li",{parentName:"ul"},"The workers which poll the server (see ",(0,a.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Glean/ClangIndexer/"},"Glean/ClangIndexer"),")"),(0,a.mdx)("li",{parentName:"ul"},"The server (see ",(0,a.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/wiki/Glean/Infrastructure/"},"Glean/Infrastructure"),")"))),(0,a.mdx)("h2",{id:"apis-for-writing"},"APIs for writing"),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The C++ writing API is the most performant. It is used by the clang-based indexer for C++  and Objective C code.  See ",(0,a.mdx)("a",{parentName:"li",href:"https://phabricator.intern.facebook.com/diffusion/FBS/browse/master/fbcode/glean/cpp/glean.h"},"glean/cpp/glean.h")),(0,a.mdx)("li",{parentName:"ul"},"In Hack, ",(0,a.mdx)("a",{parentName:"li",href:"https://www.internalfb.com/intern/codex/symbol/php/Glean/genKickOffForHandle/"},"genKickOffForHandle")," and the various functions for writing facts."))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The Haskell API for writing",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Example: ",(0,a.mdx)(l.O1,{file:"glean/client/hs/example/ExampleWriter.hs",mdxType:"SrcFile"}))))),(0,a.mdx)("p",null,"If none of the above work for you, the Thrift API enable basic write\naccess to the database."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"kickOff")," can be used to create a new DB"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"sendJsonBatch")," is for sending facts in JSON-serialized form"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"finishBatch")," exposes the result of a previously sent JSON batch"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"workFinished")," closes a DB")),(0,a.mdx)("p",null,"A rough outline of a client looks like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"glean = make_glean_thrift_client()\ndb_handle = make_uuid()\nglean.kickOff(my_repo, KickOffFill(writeHandle=db_handle))\nfor json_batch in json_batches:\n    handle = glean.sendJsonBatch(json_batch)\n    result = glean.finishBatch(handle)\n    # handle result\nglean.workFinished(my_repo, db_handle, success_or_failure)\n")),(0,a.mdx)("h2",{id:"writing-from-the-command-line"},"Writing from the command line"),(0,a.mdx)("h3",{id:"json-format"},"JSON format"),(0,a.mdx)("p",null,"The JSON format for Glean data is described in ",(0,a.mdx)("a",{parentName:"p",href:"/docs/schema/thrift"},"Thrift and JSON"),"."),(0,a.mdx)("p",null,"Here's an example of JSON data for writing to Glean:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'[\n  { "predicate": "cxx1.Name.1",          # define facts for cxx1.Name.1\n    "facts": [\n      { "id": 1, "key": "abc" },         # define a fact with id 1\n      { "id": 2, "key": "def" }\n    ]\n  },\n  { "predicate": "cxx1.FunctionName.1",  # define facts for cxx1.FunctionName.1\n    "facts": [\n      { "id": 3,\n        "key": {\n          "name": { "id": 1 }}}          # reference to fact with id 1\n    ]\n  },\n  { "predicate": "cxx1.FunctionQName.1", # define facts for cxx1.FunctionQName.1\n    "facts": [\n      { "key": {\n        "name": 3,                       # 3 is shorthand for { "id": 3 }\n        "scope": { "global_": {} } } },\n      { "key": {\n        "name": {\n          "key": {                       # define a nested fact directly\n            "name": {\n              "key": "ghi" }}},         # another nested fact\n        "scope": {\n          "namespace_": {\n            "key": {\n              "name": {\n                "key": "std" }}}}}\n    ]\n  }\n]\n')),(0,a.mdx)("p",null,"The rules of the game are:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Predicate names must include versions, i.e. ",(0,a.mdx)("inlineCode",{parentName:"li"},"cxx1.Name.1")," rather than ",(0,a.mdx)("inlineCode",{parentName:"li"},"cxx1.Name"),"."),(0,a.mdx)("li",{parentName:"ul"},"The ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," field when defining a fact is optional. The ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," numbers in the input file will ",(0,a.mdx)("em",{parentName:"li"},"not")," be the final ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," numbers assigned to the facts in the database."),(0,a.mdx)("li",{parentName:"ul"},"There are no restrictions on ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," values (any 64-bit integer will do) but an ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," value may not be reused within a file."),(0,a.mdx)("li",{parentName:"ul"},"Later facts may refer to earlier ones using either ",(0,a.mdx)("inlineCode",{parentName:"li"},'{ "id": N }')," or just ",(0,a.mdx)("inlineCode",{parentName:"li"},"N"),"."),(0,a.mdx)("li",{parentName:"ul"},"It is only possible to refer to ",(0,a.mdx)("inlineCode",{parentName:"li"},"id"),"s from facts in the same file, if you are writing multiple files using ",(0,a.mdx)("inlineCode",{parentName:"li"},"glean write")," or via the ",(0,a.mdx)("inlineCode",{parentName:"li"},"sendJsonBatch")," API."),(0,a.mdx)("li",{parentName:"ul"},"a nested facts can be defined inline, instead of defining it with an ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," first and then referencing it."),(0,a.mdx)("li",{parentName:"ul"},"an inline nested fact can be given an ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," and referred to later.")),(0,a.mdx)("h3",{id:"loading-a-db-from-json-in-the-shell"},"Loading a DB from JSON in the shell"),(0,a.mdx)("p",null,"The shell is useful for experimenting with creating a DB from JSON data directly. Let's try loading the data above into a DB in the shell:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ mkdir /tmp/glean\n$ glean shell --db-root /tmp/glean\nGlean Shell, dev mode\ntype :help for help.\nno fbsource database availabe\n> :load test/0 /home/smarlow/test\nI0514 01:19:37.137109 3566745 Work.hs:184] test/16: database complete\n")),(0,a.mdx)("p",null,"Let's see what facts we loaded:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"test> :stat\n1\n  count: 72\n  size:  5988\ncxx1.FunctionName.1\n  count: 2\n  size:  66\ncxx1.FunctionQName.1\n  count: 2\n  size:  70\ncxx1.Name.1\n  count: 4\n  size:  148\ncxx1.NamespaceQName.1\n  count: 1\n  size:  35\ntest>\n")),(0,a.mdx)("p",null,"Note that there were 4 ",(0,a.mdx)("inlineCode",{parentName:"p"},"cxx1.Name.1")," facts - some of those were defined as inline nested facts in the JSON. We can query them all:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},'test> cxx1.Name _\n4 results, 1 queries, 4 facts, 0.22ms, 44296 bytes\n\n{ "id": 1096, "key": "abc" }\n{ "id": 1097, "key": "def" }\n{ "id": 1100, "key": "ghi" }\n{ "id": 1102, "key": "std" }\n')),(0,a.mdx)("p",null,"Note that the ",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," values here do not correspond to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"id")," values in the input file."),(0,a.mdx)("h3",{id:"creating-a-database-using-the-command-line"},"Creating a database using the command line"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"glean")," command-line tool can be used to create a database directly on the server."),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("p",null,"There is a default retention policy for databases created this way; for details and to discuss your requirements, talk to the Glean team before creating databases.")),(0,a.mdx)("p",null,"To create a database from a single file of JSON facts:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"glean create --service <write-server> --finish --repo <name>/<hash> <filename>\n")),(0,a.mdx)("p",null,"where"),(0,a.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"<write-server>")," can be ",(0,a.mdx)("inlineCode",{parentName:"li"},"glean.write.test")," for testing. ",(0,a.mdx)("inlineCode",{parentName:"li"},"glean.write")," is the production write tier."))),(0,a.mdx)(o.OssOnly,{mdxType:"OssOnly"},(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"<write-server>")," is the ",(0,a.mdx)("inlineCode",{parentName:"li"},"host:port")," of the Glean server"))),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"<name>")," is the name for your DB. For indexing repositories we normally use the name of the repository, but it's just a string, so you can use whatever you want."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"<hash>")," identifies this particular instance of your database. For repositories we normally use the revision hash, but, again, it's just a string."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"<filename>")," the file containing the JSON facts.")),(0,a.mdx)("p",null,"If the file is more than, say, 100MB, this operation will probably time out sending the data to the server. To send large amounts of data you need to batch it up into multiple files, and then send it like this:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"glean create --service <write-server> --repo <name>/<hash>\nglean write --service <write-server> --repo <name>/<hash> <filename1>\nglean write --service <write-server> --repo <name>/<hash> <filename2>\n...\nglean finish --service <write-server> --repo <name>/<hash>\n")),(0,a.mdx)("p",null,"To find out if your DB made it:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"glean shell --service <write-server> :list\n")),(0,a.mdx)("p",null,"This will list the DBs available on the write server."),(0,a.mdx)(h,{mdxType:"Scribe"}),(0,a.mdx)(x,{mdxType:"Backup"}))}g.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{d(r.next(e))}catch(n){a(n)}}function l(e){try{d(r.throw(e))}catch(n){a(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const i=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield i.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{d(r.next(e))}catch(n){a(n)}}function l(e){try{d(r.throw(e))}catch(n){a(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,i=0;const a={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in a||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?a[n].resolve(e.data.response):a[n].reject(new Error(e.data.error)),delete a[n]})));const n=i++,t=new Promise(((e,t)=>{a[n]={resolve:e,reject:t}})),o={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(o,l),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{d(r.next(e))}catch(n){a(n)}}function l(e){try{d(r.throw(e))}catch(n){a(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const i=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield i.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield i.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return i(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=a(t(47596)),n.uidocs=a(t(17483)),n.feedback=a(t(24855)),n.inpageeditor=a(t(27312));const o=["internal","external"];function l(e){return s(e),c()?"internal"in e?d(e.internal):[]:"external"in e?d(e.external):[]}function d(e){return"function"==typeof e?e():e}function s(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const n=Object.keys(e).filter((e=>!o.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${o}`)}function c(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function m(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=l,n.fbInternalOnly=function(e){return l({internal:e})},n.validateFbContentArgs=s,n.isInternal=c,n.hasEphemeralDiffNumber=function(){return Boolean(m())},n.getEphemeralDiffNumber=m,n.FbInternalOnly=function(e){return c()?e.children:null},n.OssOnly=function(e){return c()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{d(r.next(e))}catch(n){a(n)}}function l(e){try{d(r.throw(e))}catch(n){a(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const i=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:a}=e;try{return yield i.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:a}})}catch(o){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${o}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(i,a){function o(e){try{d(r.next(e))}catch(n){a(n)}}function l(e){try{d(r.throw(e))}catch(n){a(n)}}function d(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,l)}d((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const i=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield i.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);