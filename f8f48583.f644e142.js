(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),r=(n(0),n(128)),c=["components"],l={id:"syntax",title:"Syntax",sidebar_label:"Syntax"},o={unversionedId:"schema/syntax",id:"schema/syntax",isDocsHomePage:!1,title:"Syntax",description:"Schemas are written in Glean's Angle language.",source:"@site/../docs/schema/syntax.md",slug:"/schema/syntax",permalink:"/docs/schema/syntax",editUrl:"https://www.internalfb.com/intern/diffusion/FBS/browse/master/fbcode/glean/website/../docs/schema/syntax.md",version:"current",sidebar_label:"Syntax",sidebar:"someSidebar",previous:{title:"Built-in Types",permalink:"/docs/schema/types"},next:{title:"Recursion",permalink:"/docs/schema/recursion"}},s=[{value:"Named schemas",id:"named-schemas",children:[]},{value:"Predicates",id:"predicates",children:[]},{value:"Referring to other predicates",id:"referring-to-other-predicates",children:[]},{value:"Named types",id:"named-types",children:[]},{value:"Importing and inheriting",id:"importing-and-inheriting",children:[{value:"Importing",id:"importing",children:[]},{value:"Inheritance and revising schemas",id:"inheritance-and-revising-schemas",children:[]}]},{value:"Naming rules and conventions",id:"naming-rules-and-conventions",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,c);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Schemas are written in Glean's ",Object(r.b)("strong",{parentName:"p"},"Angle")," language."),Object(r.b)("h2",{id:"named-schemas"},"Named schemas"),Object(r.b)("p",null,"We usually create a new named schema for a family of related types and predicates. For example ",Object(r.b)("inlineCode",{parentName:"p"},"hack")," is the schema for facts about Hack code, ",Object(r.b)("inlineCode",{parentName:"p"},"cxx")," is the schema for facts about C/C++ and Objective C code, ",Object(r.b)("inlineCode",{parentName:"p"},"java")," is the schema for facts about Java code, and so on."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"schema java.1 {\n# your types and predicates go here\n}\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"What does the .1 suffix mean?")," This is the ",Object(r.b)("em",{parentName:"p"},"version")," of the schema. You can later create ",Object(r.b)("inlineCode",{parentName:"p"},"java.2")," which adds and revises types and predicates in ",Object(r.b)("inlineCode",{parentName:"p"},"java.1")," without breaking existing clients that are using ",Object(r.b)("inlineCode",{parentName:"p"},"java.1"),"."),Object(r.b)("p",null,"The name of the schema will be also used as the ",Object(r.b)("em",{parentName:"p"},"namespace")," for the\ngenerated Thrift types. You'll notice that each schema gets a separate\ngenerated ",Object(r.b)("a",{parentName:"p",href:"/docs/schema/thrift"},"Thrift file")," for working with the data in your code."),Object(r.b)("h2",{id:"predicates"},"Predicates"),Object(r.b)("p",null,"A predicate definition looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"predicate P : KeyType -> ValueType\n")),Object(r.b)("p",null,"where"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"P")," is the name of the predicate. e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"src.File")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"KeyType")," is the ",Object(r.b)("em",{parentName:"li"},"key type")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ValueType")," is the ",Object(r.b)("em",{parentName:"li"},"value type"))),Object(r.b)("p",null,"For example, the example schema that we saw in the ",Object(r.b)("a",{parentName:"p",href:"/docs/introduction"},"Introduction"),"\ncontains the ",Object(r.b)("inlineCode",{parentName:"p"},"Class")," predicate:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"schema example.1 {\npredicate Class :\n  {\n     name : string,\n     line : nat,\n  }\n}\n")),Object(r.b)("p",null,"This defines:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A predicate called ",Object(r.b)("inlineCode",{parentName:"li"},"example.Class.1")," (you can usually refer to it by its unversioned name, ",Object(r.b)("inlineCode",{parentName:"li"},"example.Class"),")."),Object(r.b)("li",{parentName:"ul"},"With a key type that is a record, consisting of",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"a field ",Object(r.b)("inlineCode",{parentName:"li"},"name"),", that has type ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},"a field ",Object(r.b)("inlineCode",{parentName:"li"},"line"),", of type ",Object(r.b)("inlineCode",{parentName:"li"},"nat"))))),Object(r.b)("h2",{id:"referring-to-other-predicates"},"Referring to other predicates"),Object(r.b)("p",null,"A key feature of Glean is the ability to refer directly to other types\nto build up nested structures."),Object(r.b)("p",null,"To refer to a predicate defined in the same schema, we just use its\nunqualified name:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"schema example.1 {\npredicate Class :\n  {\n     name : string,\n     line : nat,\n  }\n\npredicate Parent :\n  {\n     child : Class,\n     parent : Class,\n  }\n}\n")),Object(r.b)("p",null,"We can also refer to predicates defined in other schemas, but we have\nto bring them into scope using an ",Object(r.b)("inlineCode",{parentName:"p"},"import")," declaration.  For example,\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"src")," schema contains a ",Object(r.b)("inlineCode",{parentName:"p"},"File")," predicate:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"schema src.1 {\npredicate File : string\n}\n")),Object(r.b)("p",null,"If we want to extend our ",Object(r.b)("inlineCode",{parentName:"p"},"Class")," predicate with the file that contains\nit, we can do it like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"schema example.1 {\nimport src.1\n\npredicate Class :\n  {\n     name : string,\n     line : nat,\n     file : src.File\n  }\n}\n")),Object(r.b)("p",null,"Note that to refer to a predicate from another schema, we have to\nqualify it with the name of its schema, as in ",Object(r.b)("inlineCode",{parentName:"p"},"src.File")," above. We\ndon't have to add the version though - there can only be one version\nof any given predicate in scope at a time."),Object(r.b)("h2",{id:"named-types"},"Named types"),Object(r.b)("p",null,"It's useful to be able to name a type so that it can be used in multiple places. The form of a type definition is similar to a predicate:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"type <name> = <type>\n")),Object(r.b)("p",null,"For example, the ",Object(r.b)("inlineCode",{parentName:"p"},"src")," schema has a type for source locations:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-lang=python"},"schema src.1 {\npredicate File : string\n\n# Common source code location type\ntype Loc = {\n  file : File,\n  line : nat,\n  column : nat,\n}\n}\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Types cannot be recursive or mutually recursive. If you want a\nrecursive type, the cycle must go through at least one predicate. For\nmore details, see ",Object(r.b)("a",{parentName:"p",href:"/docs/schema/recursion"},"Recursion"),"."))),Object(r.b)("h2",{id:"importing-and-inheriting"},"Importing and inheriting"),Object(r.b)("p",null,"There are two ways for schemas to refer to each other:"),Object(r.b)("h3",{id:"importing"},"Importing"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"schema example.1 {\nimport src.1\n...\n}\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"import")," declaration brings into scope all the predicates and\ntypes defined by the named schema. Those predicates and types are\nreferred to by qualified names, e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"src.File")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"File"),"\npredicate defined by the schema ",Object(r.b)("inlineCode",{parentName:"p"},"src"),". The version number is dropped;\neach schema exports a single version of a predicate or type, so the\nunversioned name is unambiguous."),Object(r.b)("h3",{id:"inheritance-and-revising-schemas"},"Inheritance and revising schemas"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"schema example.2 : example.1 {\npredicate Class :\n  {\n       # new definition of Class\n  }\n}\n")),Object(r.b)("p",null,"Inheritance is useful for making changes to a schema by creating a new schema version:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Inheriting from a schema brings into scope all the types and predicates of that schema, both qualified ",Object(r.b)("em",{parentName:"li"},"and unqualified"),"."),Object(r.b)("li",{parentName:"ul"},"The new schema also exports all the types and predicates defined in the schemas it inherits from, ",Object(r.b)("em",{parentName:"li"},"except those that are re-defined"),".")),Object(r.b)("p",null,"Specifically, in the above example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We can ",Object(r.b)("inlineCode",{parentName:"li"},"import example.2")," anywhere and get all the predicates defined in ",Object(r.b)("inlineCode",{parentName:"li"},"example.1"),", except that we'll get the new ",Object(r.b)("inlineCode",{parentName:"li"},"Class")," defined in ",Object(r.b)("inlineCode",{parentName:"li"},"example.2"),"."),Object(r.b)("li",{parentName:"ul"},"We can still ",Object(r.b)("inlineCode",{parentName:"li"},"import example.1")," and get the old version of the schema.")),Object(r.b)("p",null,"Note that if you have predicates that depend on a predicate that was revised in this way, you must also copy those predicates to the new schema, because the existing predicates will refer to the old version of the predicate you revised. (In due course Glean will probably provide a convenient way to do this; in the meantime you have to copy & paste. Not a big deal because you'll usually delete the old one at some point, and you can't modify it anyway.)"),Object(r.b)("p",null,"Named schemas can ",Object(r.b)("em",{parentName:"p"},"not")," form cycles through their ",Object(r.b)("inlineCode",{parentName:"p"},"import")," or\ninheritance declarations."),Object(r.b)("h2",{id:"naming-rules-and-conventions"},"Naming rules and conventions"),Object(r.b)("p",null,"Names take the form of a dot-separated sequence of alphanumeric words. For example, ",Object(r.b)("inlineCode",{parentName:"p"},"sys.Blob"),", ",Object(r.b)("inlineCode",{parentName:"p"},"clang.File"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"cxx.objc.Name"),". The words up to the last dot are the ",Object(r.b)("em",{parentName:"p"},"namespace"),", the final word is the ",Object(r.b)("em",{parentName:"p"},"name"),"."),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/docs/angle/reference#names"},"Names")," for full details."),Object(r.b)("p",null,"Briefly:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Namespaces (schema names) are dot-separated sequences of identifiers each beginning with a lower-case letter"),Object(r.b)("li",{parentName:"ul"},"Names and namespaces can contain only alphanumeric characters, '_', or '.' (namespaces only)"),Object(r.b)("li",{parentName:"ul"},"There is a set of reserved words that can't be used for names, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"class"),". Syncing the schema will fail with an error if you use a reserved word.")))}b.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,h=b["".concat(c,".").concat(m)]||b[m]||d[m]||r;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);