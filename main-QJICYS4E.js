import{A as W,B as bt,D as re,E as J,G as y,H as g,I,O as v,P as xt,Q as P,T as oe,_ as se,ba as le,ca as ce,e as ee,o as vt,p as ne,s as S,t as ae,z as ie}from"./chunk-WZZ4NC5Y.js";var fe=(()=>{class t{Constructor(){}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=S({type:t,selectors:[["app-navbar"]],standalone:!0,features:[P],decls:15,vars:0,consts:[["href","#","routerLink","/app-component","routerLinkActive","active"],["href","/blog","routerLink","/blog-component","routerLinkActive","active"],["href","/projects","routerLink","/projects-component","routerLinkActive","active"]],template:function(a,i){a&1&&(y(0,"header")(1,"nav")(2,"p"),v(3," bradyhawkins.dev "),g(),y(4,"ul")(5,"li")(6,"a",0),v(7,"Home"),g()(),y(8,"li")(9,"a",1),v(10,"Blog"),g()(),y(11,"li")(12,"a",2),v(13,"Projects"),g()()()(),I(14,"hr"),g())},styles:["header[_ngcontent-%COMP%]{padding-top:1em;padding-bottom:1em;margin-right:0}nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;display:flex}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.2em}nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--yellow)}"]})}}return t})();var ue=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=S({type:t,selectors:[["app-footer"]],standalone:!0,features:[P],decls:10,vars:0,consts:[[1,"icon-container"],["href","https://www.linkedin.com/in/brady-hawkins"],[1,"icon","fab","fa-linkedin","fa-2x"],["href","https://github.com/hawk0120"],[1,"icon","fab","fa-github","fa-2x"],["href","https://bsky.app/profile/bradyhawkins.dev"],[1,"icon","fab","fa-bluesky","fa-2x"]],template:function(a,i){a&1&&(y(0,"footer")(1,"p"),v(2,"Brady Hawkins"),g(),y(3,"div",0)(4,"a",1),I(5,"i",2),g(),y(6,"a",3),I(7,"i",4),g(),y(8,"a",5),I(9,"i",6),g()()())},styles:["footer[_ngcontent-%COMP%]{position:fixed;bottom:0;display:flex;overflow:visible;width:800px;justify-content:space-between;margin:0 auto}.icon[_ngcontent-%COMP%]{color:var(--grey);padding:12px;width:10px;height:10px}.icon[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--yellow)}"]})}}return t})();var wt=(()=>{class t{constructor(){this.title="Brady Hawkins"}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=S({type:t,selectors:[["app-root"]],standalone:!0,features:[P],decls:4,vars:0,template:function(a,i){a&1&&(I(0,"app-navbar"),y(1,"router-outlet")(2,"router-outlet"),I(3,"app-footer"),g()())},dependencies:[fe,ue,le],styles:["[_ngcontent-%COMP%]:root{margin:0}"]})}}return t})();var de=(()=>{class t{getProjects(){return ee([{name:"Clammy",description:"The project is a Insurance Claim Management Platform, powered by Angular on the front end. I wrote the REST Service in Java/Spring and Typescript/Express as an experiment in verbosity. The user can create, resolve and retrieve insurance claims.",url:"https://github.com/hawk0120/clammy"},{name:"debby",description:"debby is file based database system. I enjoy the speed and ease of sqlLite, but found myself wanting something even simpler so I built a database system that stores data in a file. It has read, write, and update commands. It loads the entire database into memory when the read command is called. Its a simple solution for small projects.",url:"https://www.bradyhawkins.dev/blog/bld-debby"},{name:"Weapy",description:"Developed a mobile application that tracks and displays real-time pollen levels for trees, grass, weeds, and mold based on the user's current location. Used React Native, @rneui/themed for custom theming, and react-native-elements for UI components. Features include automatic location-based updates, a manual location reset modal, and animated indicators for pollen severity.",url:"https://www.bradyhawkins.dev/blog/bld-weepy"},{name:"Songbird Tribe",description:"The project is a React based landing page for a musician that I designed and developed.",url:"http://www.songbirdtribe.com"},{name:"Cooking With Andrea Application",description:"A cross platform recipe application using React Native. Uses backend RESTful API using Node.js, Express, and MongoDB to shuttle recipes to a React Native front end",url:""},{name:"bowmaneconomics.ca",description:"A static website written in vanilla javascript, html, and css. The client wanted a stripped down UI to market their services.",url:"https://www.bowmaneconomics.ca"},{name:"ScottyAuto.ca",description:"A standalone single-page application developed with React and TypeScript, providing customers with a dedicated portal for interacting with Scotty's Auto services. It features a contact form utilizing Formspree for seamless communication with the company.",url:"https://www.scottysauto.ca"},{name:"Personal portfolio site",description:"Used Angular to create persoanl website that dynamically render markdown files in blog posts",url:"https://www.bradyhawkins.dev"},{name:"Counter React Native Application",description:"A simple React Native application developed to track the number of people entering a building. This project was initiated during the Covid-19 pandemic to aid clients in managing and monitoring occupancy levels effectively.",url:"https://github.com/hawk0120/counter"},{name:"compassionatekenora.ca",description:"A wordpress multipage application that to brought awareness to the grassroots organization. Lead the designed and implementation.",url:"https://www.compassionatekenora.ca"}])}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275prov=vt({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Pn(t,e){if(t&1&&(y(0,"div",2)(1,"p",3),v(2),g(),y(3,"p",4),v(4),g(),y(5,"a",5),v(6,"Visit Project"),g()()),t&2){let n=e.$implicit;W(2),xt(n.name),W(2),xt(n.description),W(),J("href",n.url,ie)}}var rt=(()=>{class t{constructor(n){this.projectService=n,this.numOfProjectToShow=8,this.project=[]}ngOnInit(){this.projectService.getProjects().subscribe(n=>{this.project=n.slice(0,this.numOfProjectToShow)})}static{this.\u0275fac=function(a){return new(a||t)(bt(de))}}static{this.\u0275cmp=S({type:t,selectors:[["app-projects"]],inputs:{numOfProjectToShow:"numOfProjectToShow"},standalone:!0,features:[P],decls:2,vars:1,consts:[[1,"projects-list"],["class","project-item",4,"ngFor","ngForOf"],[1,"project-item"],[1,"project-name"],[1,"project.description"],["target","_blank",1,"project-link",3,"href"]],template:function(a,i){a&1&&(y(0,"div",0),re(1,Pn,7,3,"div",1),g()),a&2&&(W(),J("ngForOf",i.project))},dependencies:[oe],styles:[".projects-list[_ngcontent-%COMP%]{text-decoration:none!important;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin:0 auto}.project-link[_ngcontent-%COMP%]{margin-bottom:3px}.project-link[_ngcontent-%COMP%]:hover{color:var(--yellow);padding:.1em;border-radius:3px;translate:4em}"]})}}return t})();function On(t,e,n){return(e=Fn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?me(Object(n),!0).forEach(function(a){On(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function En(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Fn(t){var e=En(t,"string");return typeof e=="symbol"?e:e+""}var pe=()=>{},Bt={},We={},He=null,Ye={mark:pe,measure:pe};try{typeof window<"u"&&(Bt=window),typeof document<"u"&&(We=document),typeof MutationObserver<"u"&&(He=MutationObserver),typeof performance<"u"&&(Ye=performance)}catch{}var{userAgent:he=""}=Bt.navigator||{},D=Bt,h=We,ge=He,ot=Ye,Ui=!!D.document,N=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ue=~he.indexOf("MSIE")||~he.indexOf("Trident/"),Mn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Tn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Be={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Nn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$e=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],b="classic",dt="duotone",jn="sharp",_n="sharp-duotone",Ve=[b,dt,jn,_n],Dn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},zn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Ln=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Rn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Wn=["fak","fa-kit","fakd","fa-kit-duotone"],ye={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Hn=["kit"],Yn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Un=["fak","fakd"],Bn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ve={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},st={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$n=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Vn=["fak","fa-kit","fakd","fa-kit-duotone"],Gn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Xn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},qn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Pt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Kn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ot=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...$n,...Kn],Jn=["solid","regular","light","thin","duotone","brands"],Ge=[1,2,3,4,5,6,7,8,9,10],Qn=Ge.concat([11,12,13,14,15,16,17,18,19,20]),Zn=[...Object.keys(qn),...Jn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",st.GROUP,st.SWAP_OPACITY,st.PRIMARY,st.SECONDARY].concat(Ge.map(t=>"".concat(t,"x"))).concat(Qn.map(t=>"w-".concat(t))),ta={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},M="___FONT_AWESOME___",Et=16,Xe="fa",qe="svg-inline--fa",Y="data-fa-i2svg",Ft="data-fa-pseudo-element",ea="data-fa-pseudo-element-pending",$t="data-prefix",Vt="data-icon",be="fontawesome-i2svg",na="async",aa=["HTML","HEAD","STYLE","SCRIPT"],Ke=(()=>{try{return!0}catch{return!1}})();function at(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[b]}})}var Je=s({},Be);Je[b]=s(s(s(s({},{"fa-duotone":"duotone"}),Be[b]),ye.kit),ye["kit-duotone"]);var ia=at(Je),Mt=s({},Rn);Mt[b]=s(s(s(s({},{duotone:"fad"}),Mt[b]),ve.kit),ve["kit-duotone"]);var xe=at(Mt),Tt=s({},Pt);Tt[b]=s(s({},Tt[b]),Bn.kit);var Gt=at(Tt),Nt=s({},Xn);Nt[b]=s(s({},Nt[b]),Yn.kit);var Bi=at(Nt),ra=Mn,Qe="fa-layers-text",oa=Tn,sa=s({},Dn),$i=at(sa),la=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kt=Nn,ca=[...Hn,...Zn],Z=D.FontAwesomeConfig||{};function fa(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ua(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e,i=ua(fa(n));i!=null&&(Z[a]=i)});var Ze={styleDefault:"solid",familyDefault:b,cssPrefix:Xe,replacementClass:qe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var q=s(s({},Ze),Z);q.autoReplaceSvg||(q.observeMutations=!1);var c={};Object.keys(Ze).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){q[t]=e,tt.forEach(n=>n(c))},get:function(){return q[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,tt.forEach(e=>e(c))},get:function(){return q.cssPrefix}});D.FontAwesomeConfig=c;var tt=[];function da(t){return tt.push(t),()=>{tt.splice(tt.indexOf(t),1)}}var _=Et,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ma(t){if(!t||!N)return;let e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let n=h.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=r)}return h.head.insertBefore(e,a),t}var pa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function et(){let t=12,e="";for(;t-- >0;)e+=pa[Math.random()*62|0];return e}function K(t){let e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xt(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function tn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ha(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(tn(t[n]),'" '),"").trim()}function mt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function qt(t){return t.size!==O.size||t.x!==O.x||t.y!==O.y||t.rotate!==O.rotate||t.flipX||t.flipY}function ga(t){let{transform:e,containerWidth:n,iconWidth:a}=t,i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(r," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:i,inner:u,path:f}}function ya(t){let{transform:e,width:n=Et,height:a=Et,startCentered:i=!1}=t,r="";return i&&Ue?r+="translate(".concat(e.x/_-n/2,"em, ").concat(e.y/_-a/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/_,"em), calc(-50% + ").concat(e.y/_,"em)) "):r+="translate(".concat(e.x/_,"em, ").concat(e.y/_,"em) "),r+="scale(".concat(e.size/_*(e.flipX?-1:1),", ").concat(e.size/_*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var va=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function en(){let t=Xe,e=qe,n=c.cssPrefix,a=c.replacementClass,i=va;if(n!==t||a!==e){let r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return i}var we=!1;function Ct(){c.autoAddCss&&!we&&(ma(en()),we=!0)}var ba={mixout(){return{dom:{css:en,insertCss:Ct}}},hooks(){return{beforeDOMElementCreation(){Ct()},beforeI2svg(){Ct()}}}},T=D||{};T[M]||(T[M]={});T[M].styles||(T[M].styles={});T[M].hooks||(T[M].hooks={});T[M].shims||(T[M].shims=[]);var E=T[M],nn=[],an=function(){h.removeEventListener("DOMContentLoaded",an),ft=1,nn.map(t=>t())},ft=!1;N&&(ft=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),ft||h.addEventListener("DOMContentLoaded",an));function xa(t){N&&(ft?setTimeout(t,0):nn.push(t))}function it(t){let{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?tn(t):"<".concat(e," ").concat(ha(n),">").concat(a.map(it).join(""),"</").concat(e,">")}function ke(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wa=function(e,n){return function(a,i,r,o){return e.call(n,a,i,r,o)}},At=function(e,n,a,i){var r=Object.keys(e),o=r.length,l=i!==void 0?wa(n,i):n,u,f,d;for(a===void 0?(u=1,d=e[r[0]]):(u=0,d=a);u<o;u++)f=r[u],d=l(d,e[f],f,e);return d};function ka(t){let e=[],n=0,a=t.length;for(;n<a;){let i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<a){let r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function jt(t){let e=ka(t);return e.length===1?e[0].toString(16):null}function Ca(t,e){let n=t.length,a=t.charCodeAt(e),i;return a>=55296&&a<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(a-55296)*1024+i-56320+65536:a}function Ce(t){return Object.keys(t).reduce((e,n)=>{let a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function _t(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=n,i=Ce(e);typeof E.hooks.addPack=="function"&&!a?E.hooks.addPack(t,Ce(e)):E.styles[t]=s(s({},E.styles[t]||{}),i),t==="fas"&&_t("fa",e)}var{styles:nt,shims:Aa}=E,rn=Object.keys(Gt),Sa=rn.reduce((t,e)=>(t[e]=Object.keys(Gt[e]),t),{}),Kt=null,on={},sn={},ln={},cn={},fn={};function Ia(t){return~ca.indexOf(t)}function Pa(t,e){let n=e.split("-"),a=n[0],i=n.slice(1).join("-");return a===t&&i!==""&&!Ia(i)?i:null}var un=()=>{let t=a=>At(nt,(i,r,o)=>(i[o]=At(r,a,{}),i),{});on=t((a,i,r)=>(i[3]&&(a[i[3]]=r),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=r}),a)),sn=t((a,i,r)=>(a[r]=r,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=r}),a)),fn=t((a,i,r)=>{let o=i[2];return a[r]=r,o.forEach(l=>{a[l]=r}),a});let e="far"in nt||c.autoFetchSvg,n=At(Aa,(a,i)=>{let r=i[0],o=i[1],l=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(a.names[r]={prefix:o,iconName:l}),typeof r=="number"&&(a.unicodes[r.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});ln=n.names,cn=n.unicodes,Kt=pt(c.styleDefault,{family:c.familyDefault})};da(t=>{Kt=pt(t.styleDefault,{family:c.familyDefault})});un();function Jt(t,e){return(on[t]||{})[e]}function Oa(t,e){return(sn[t]||{})[e]}function H(t,e){return(fn[t]||{})[e]}function dn(t){return ln[t]||{prefix:null,iconName:null}}function Ea(t){let e=cn[t],n=Jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function z(){return Kt}var mn=()=>({prefix:null,iconName:null,rest:[]});function Fa(t){let e=b,n=rn.reduce((a,i)=>(a[i]="".concat(c.cssPrefix,"-").concat(i),a),{});return Ve.forEach(a=>{(t.includes(n[a])||t.some(i=>Sa[a].includes(i)))&&(e=a)}),e}function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:n=b}=e,a=ia[n][t];if(n===dt&&!t)return"fad";let i=xe[n][t]||xe[n][a],r=t in E.styles?t:null;return i||r||null}function Ma(t){let e=[],n=null;return t.forEach(a=>{let i=Pa(c.cssPrefix,a);i?n=i:a&&e.push(a)}),{iconName:n,rest:e}}function Ae(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:n=!1}=e,a=null,i=Ot.concat(Vn),r=Ae(t.filter(p=>i.includes(p))),o=Ae(t.filter(p=>!Ot.includes(p))),l=r.filter(p=>(a=p,!$e.includes(p))),[u=null]=l,f=Fa(r),d=s(s({},Ma(o)),{},{prefix:pt(u,{family:f})});return s(s(s({},d),_a({values:t,family:f,styles:nt,config:c,canonical:d,givenPrefix:a})),Ta(n,a,d))}function Ta(t,e,n){let{prefix:a,iconName:i}=n;if(t||!a||!i)return{prefix:a,iconName:i};let r=e==="fa"?dn(i):{},o=H(a,i);return i=r.iconName||o||i,a=r.prefix||a,a==="far"&&!nt.far&&nt.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:i}}var Na=Ve.filter(t=>t!==b||t!==dt),ja=Object.keys(Pt).filter(t=>t!==b).map(t=>Object.keys(Pt[t])).flat();function _a(t){let{values:e,family:n,canonical:a,givenPrefix:i="",styles:r={},config:o={}}=t,l=n===dt,u=e.includes("fa-duotone")||e.includes("fad"),f=o.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Na.includes(n)&&(Object.keys(r).find(m=>ja.includes(m))||o.autoFetchSvg)){let m=Ln.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||i==="fa")&&(a.prefix=z()||"fas"),a}var Dt=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];let i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=s(s({},this.definitions[r]||{}),i[r]),_t(r,i[r]);let o=Gt[b][r];o&&_t(o,i[r]),un()})}reset(){this.definitions={}}_pullDefinitions(e,n){let a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(i=>{let{prefix:r,iconName:o,icon:l}=a[i],u=l[2];e[r]||(e[r]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[r][f]=l)}),e[r][o]=l}),e}},Se=[],G={},X={},Da=Object.keys(X);function za(t,e){let{mixoutsTo:n}=e;return Se=t,G={},Object.keys(X).forEach(a=>{Da.indexOf(a)===-1&&delete X[a]}),Se.forEach(a=>{let i=a.mixout?a.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),a.hooks){let r=a.hooks();Object.keys(r).forEach(o=>{G[o]||(G[o]=[]),G[o].push(r[o])})}a.provides&&a.provides(X)}),n}function zt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];return(G[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(G[t]||[]).forEach(r=>{r.apply(null,n)})}function L(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return X[t]?X[t].apply(null,e):void 0}function Lt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,n=t.prefix||z();if(e)return e=H(n,e)||e,ke(pn.definitions,n,e)||ke(E.styles,n,e)}var pn=new Dt,La=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,U("noAuto")},Ra={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return N?(U("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,xa(()=>{Ha({autoReplaceSvgRoot:e}),U("watch",t)})}},Wa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=pt(t[0]);return{prefix:n,iconName:H(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(ra))){let e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||z(),iconName:H(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=z();return{prefix:e,iconName:H(e,t)||t}}}},k={noAuto:La,config:c,dom:Ra,parse:Wa,library:pn,findIconDefinition:Lt,toHtml:it},Ha=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=h}=t;(Object.keys(E.styles).length>0||c.autoFetchSvg)&&N&&c.autoReplaceSvg&&k.dom.i2svg({node:e})};function gt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>it(n))}}),Object.defineProperty(t,"node",{get:function(){if(!N)return;let n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ya(t){let{children:e,main:n,mask:a,attributes:i,styles:r,transform:o}=t;if(qt(o)&&n.found&&!a.found){let{width:l,height:u}=n,f={x:l/u/2,y:.5};i.style=mt(s(s({},r),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function Ua(t){let{prefix:e,iconName:n,children:a,attributes:i,symbol:r}=t,o=r===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},i),{},{id:o}),children:a}]}]}function Qt(t){let{icons:{main:e,mask:n},prefix:a,iconName:i,transform:r,symbol:o,title:l,maskId:u,titleId:f,extra:d,watchable:p=!1}=t,{width:m,height:x}=n.found?n:e,j=Un.includes(a),R=[c.replacementClass,i?"".concat(c.cssPrefix,"-").concat(i):""].filter($=>d.classes.indexOf($)===-1).filter($=>$!==""||!!$).concat(d.classes).join(" "),C={children:[],attributes:s(s({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:R,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(x)})},F=j&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/x*16*.0625,"em")}:{};p&&(C.attributes[Y]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(f||et())},children:[l]}),delete C.attributes.title);let w=s(s({},C),{},{prefix:a,iconName:i,main:e,mask:n,maskId:u,transform:r,symbol:o,styles:s(s({},F),d.styles)}),{children:A,attributes:B}=n.found&&e.found?L("generateAbstractMask",w)||{children:[],attributes:{}}:L("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=A,w.attributes=B,o?Ua(w):Ya(w)}function Ie(t){let{content:e,width:n,height:a,transform:i,title:r,extra:o,watchable:l=!1}=t,u=s(s(s({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});l&&(u[Y]="");let f=s({},o.styles);qt(i)&&(f.transform=ya({transform:i,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);let d=mt(f);d.length>0&&(u.style=d);let p=[];return p.push({tag:"span",attributes:u,children:[e]}),r&&p.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),p}function Ba(t){let{content:e,title:n,extra:a}=t,i=s(s(s({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),r=mt(a.styles);r.length>0&&(i.style=r);let o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var{styles:St}=E;function Rt(t){let e=t[0],n=t[1],[a]=t.slice(4),i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(kt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(kt.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:i}}var $a={found:!1,width:512,height:512};function Va(t,e){!Ke&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Wt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=z()),new Promise((a,i)=>{if(n==="fa"){let r=dn(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&St[e]&&St[e][t]){let r=St[e][t];return a(Rt(r))}Va(t,e),a(s(s({},$a),{},{icon:c.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}var Pe=()=>{},Ht=c.measurePerformance&&ot&&ot.mark&&ot.measure?ot:{mark:Pe,measure:Pe},Q='FA "6.7.1"',Ga=t=>(Ht.mark("".concat(Q," ").concat(t," begins")),()=>hn(t)),hn=t=>{Ht.mark("".concat(Q," ").concat(t," ends")),Ht.measure("".concat(Q," ").concat(t),"".concat(Q," ").concat(t," begins"),"".concat(Q," ").concat(t," ends"))},Zt={begin:Ga,end:hn},lt=()=>{};function Oe(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function Xa(t){let e=t.getAttribute?t.getAttribute($t):null,n=t.getAttribute?t.getAttribute(Vt):null;return e&&n}function qa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Ka(){return c.autoReplaceSvg===!0?ct.replace:ct[c.autoReplaceSvg]||ct.replace}function Ja(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Qa(t){return h.createElement(t)}function gn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:n=t.tag==="svg"?Ja:Qa}=e;if(typeof t=="string")return h.createTextNode(t);let a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){a.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){a.appendChild(gn(r,{ceFn:n}))}),a}function Za(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ct={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(gn(n),e)}),e.getAttribute(Y)===null&&c.keepOriginalSource){let n=h.createComment(Za(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){let e=t[0],n=t[1];if(~Xt(e).indexOf(c.replacementClass))return ct.replace(t);let a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){let r=n[0].attributes.class.split(" ").reduce((o,l)=>(l===c.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}let i=n.map(r=>it(r)).join(`
`);e.setAttribute(Y,""),e.innerHTML=i}};function Ee(t){t()}function yn(t,e){let n=typeof e=="function"?e:lt;if(t.length===0)n();else{let a=Ee;c.mutateApproach===na&&(a=D.requestAnimationFrame||Ee),a(()=>{let i=Ka(),r=Zt.begin("mutate");t.map(i),r(),n()})}}var te=!1;function vn(){te=!0}function Yt(){te=!1}var ut=null;function Fe(t){if(!ge||!c.observeMutations)return;let{treeCallback:e=lt,nodeCallback:n=lt,pseudoElementsCallback:a=lt,observeMutationsRoot:i=h}=t;ut=new ge(r=>{if(te)return;let o=z();K(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Oe(l.addedNodes[0])&&(c.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&Oe(l.target)&&~la.indexOf(l.attributeName))if(l.attributeName==="class"&&Xa(l.target)){let{prefix:u,iconName:f}=ht(Xt(l.target));l.target.setAttribute($t,u||o),f&&l.target.setAttribute(Vt,f)}else qa(l.target)&&n(l.target)})}),N&&ut.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ti(){ut&&ut.disconnect()}function ei(t){let e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((a,i)=>{let r=i.split(":"),o=r[0],l=r.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function ni(t){let e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",i=ht(Xt(t));return i.prefix||(i.prefix=z()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&a.length>0&&(i.iconName=Oa(i.prefix,t.innerText)||Jt(i.prefix,jt(t.innerText))),!i.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function ai(t){let e=K(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||et()):(e["aria-hidden"]="true",e.focusable="false")),e}function ii(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:a,rest:i}=ni(t),r=ai(t),o=zt("parseNodeAttributes",{},t),l=e.styleParser?ei(t):[];return s({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:r}},o)}var{styles:ri}=E;function bn(t){let e=c.autoReplaceSvg==="nest"?Me(t,{styleParser:!1}):Me(t);return~e.extra.classes.indexOf(Qe)?L("generateLayersText",t,e):L("generateSvgReplacementMutation",t,e)}function oi(){return[...Wn,...Ot]}function Te(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!N)return Promise.resolve();let n=h.documentElement.classList,a=d=>n.add("".concat(be,"-").concat(d)),i=d=>n.remove("".concat(be,"-").concat(d)),r=c.autoFetchSvg?oi():$e.concat(Object.keys(ri));r.includes("fa")||r.push("fa");let o=[".".concat(Qe,":not([").concat(Y,"])")].concat(r.map(d=>".".concat(d,":not([").concat(Y,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=K(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),i("complete");else return Promise.resolve();let u=Zt.begin("onTree"),f=l.reduce((d,p)=>{try{let m=bn(p);m&&d.push(m)}catch(m){Ke||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(f).then(m=>{yn(m,()=>{a("active"),a("complete"),i("pending"),typeof e=="function"&&e(),u(),d()})}).catch(m=>{u(),p(m)})})}function si(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bn(t).then(n=>{n&&yn([n],e)})}function li(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Lt(e||{}),{mask:i}=n;return i&&(i=(i||{}).icon?i:Lt(i||{})),t(a,s(s({},n),{},{mask:i}))}}var ci=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=O,symbol:a=!1,mask:i=null,maskId:r=null,title:o=null,titleId:l=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;let{prefix:p,iconName:m,icon:x}=t;return gt(s({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(o?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||et()):(f["aria-hidden"]="true",f.focusable="false")),Qt({icons:{main:Rt(x),mask:i?Rt(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:s(s({},O),n),symbol:a,title:o,maskId:r,titleId:l,extra:{attributes:f,styles:d,classes:u}})))},fi={mixout(){return{icon:li(ci)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Te,t.nodeCallback=si,t}}},provides(t){t.i2svg=function(e){let{node:n=h,callback:a=()=>{}}=e;return Te(n,a)},t.generateSvgReplacementMutation=function(e,n){let{iconName:a,title:i,titleId:r,prefix:o,transform:l,symbol:u,mask:f,maskId:d,extra:p}=n;return new Promise((m,x)=>{Promise.all([Wt(a,o),f.iconName?Wt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(j=>{let[R,C]=j;m([e,Qt({icons:{main:R,mask:C},prefix:o,iconName:a,transform:l,symbol:u,maskId:d,title:i,titleId:r,extra:p,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:i,transform:r,styles:o}=e,l=mt(o);l.length>0&&(a.style=l);let u;return qt(r)&&(u=L("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:a}}}},ui={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=e;return gt({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(i=>{Array.isArray(i)?i.map(r=>{a=a.concat(r.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},di={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:a=[],attributes:i={},styles:r={}}=e;return gt({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Ba({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},mi={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=O,title:a=null,classes:i=[],attributes:r={},styles:o={}}=e;return gt({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Ie({content:t,transform:s(s({},O),n),title:a,extra:{attributes:r,styles:o,classes:["".concat(c.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){let{title:a,transform:i,extra:r}=n,o=null,l=null;if(Ue){let u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/u,l=f.height/u}return c.autoA11y&&!a&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Ie({content:e.innerHTML,width:o,height:l,transform:i,title:a,extra:r,watchable:!0})])}}},pi=new RegExp('"',"ug"),Ne=[1105920,1112319],je=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),zn),ta),Gn),Ut=Object.keys(je).reduce((t,e)=>(t[e.toLowerCase()]=je[e],t),{}),hi=Object.keys(Ut).reduce((t,e)=>{let n=Ut[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function gi(t){let e=t.replace(pi,""),n=Ca(e,0),a=n>=Ne[0]&&n<=Ne[1],i=e.length===2?e[0]===e[1]:!1;return{value:jt(i?e[0]:e),isSecondary:a||i}}function yi(t,e){let n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),i=isNaN(a)?"normal":a;return(Ut[n]||{})[i]||hi[n]}function _e(t,e){let n="".concat(ea).concat(e.replace(":","-"));return new Promise((a,i)=>{if(t.getAttribute(n)!==null)return a();let o=K(t.children).filter(m=>m.getAttribute(Ft)===e)[0],l=D.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),f=u.match(oa),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&p!=="none"&&p!==""){let m=l.getPropertyValue("content"),x=yi(u,d),{value:j,isSecondary:R}=gi(m),C=f[0].startsWith("FontAwesome"),F=Jt(x,j),w=F;if(C){let A=Ea(j);A.iconName&&A.prefix&&(F=A.iconName,x=A.prefix)}if(F&&!R&&(!o||o.getAttribute($t)!==x||o.getAttribute(Vt)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);let A=ii(),{extra:B}=A;B.attributes[Ft]=e,Wt(F,x).then($=>{let An=Qt(s(s({},A),{},{icons:{main:$,mask:mn()},prefix:x,iconName:w,extra:B,watchable:!0})),yt=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(yt,t.firstChild):t.appendChild(yt),yt.outerHTML=An.map(Sn=>it(Sn)).join(`
`),t.removeAttribute(n),a()}).catch(i)}else a()}else a()})}function vi(t){return Promise.all([_e(t,"::before"),_e(t,"::after")])}function bi(t){return t.parentNode!==document.head&&!~aa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ft)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function De(t){if(N)return new Promise((e,n)=>{let a=K(t.querySelectorAll("*")).filter(bi).map(vi),i=Zt.begin("searchPseudoElements");vn(),Promise.all(a).then(()=>{i(),Yt(),e()}).catch(()=>{i(),Yt(),n()})})}var xi={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=De,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:n=h}=e;c.searchPseudoElements&&De(n)}}},ze=!1,wi={mixout(){return{dom:{unwatch(){vn(),ze=!0}}}},hooks(){return{bootstrap(){Fe(zt("mutationObserverCallbacks",{}))},noAuto(){ti()},watch(t){let{observeMutationsRoot:e}=t;ze?Yt():Fe(zt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},Le=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{let i=a.toLowerCase().split("-"),r=i[0],o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},ki={mixout(){return{parse:{transform:t=>Le(t)}}},hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-transform");return n&&(t.transform=Le(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:i,iconWidth:r}=e,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(f)},p={transform:"translate(".concat(r/2*-1," -256)")},m={outer:o,inner:d,path:p};return{tag:"g",attributes:s({},m.outer),children:[{tag:"g",attributes:s({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:s(s({},n.icon.attributes),m.path)}]}]}}}},It={x:0,y:0,width:"100%",height:"100%"};function Re(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ci(t){return t.tag==="g"?t.children:[t]}var Ai={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-mask"),a=n?ht(n.split(" ").map(i=>i.trim())):mn();return a.prefix||(a.prefix=z()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:i,mask:r,maskId:o,transform:l}=e,{width:u,icon:f}=i,{width:d,icon:p}=r,m=ga({transform:l,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:s(s({},It),{},{fill:"white"})},j=f.children?{children:f.children.map(Re)}:{},R={tag:"g",attributes:s({},m.inner),children:[Re(s({tag:f.tag,attributes:s(s({},f.attributes),m.path)},j))]},C={tag:"g",attributes:s({},m.outer),children:[R]},F="mask-".concat(o||et()),w="clip-".concat(o||et()),A={tag:"mask",attributes:s(s({},It),{},{id:F,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,C]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Ci(p)},A]};return n.push(B,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(F,")")},It)}),{children:n,attributes:a}}}},Si={provides(t){let e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let n=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let r=s(s({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:s(s({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:s(s({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Ii={hooks(){return{parseNodeAttributes(t,e){let n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Pi=[ba,fi,ui,di,mi,xi,wi,ki,Ai,Si,Ii];za(Pi,{mixoutsTo:k});var Vi=k.noAuto,Gi=k.config,Xi=k.library,qi=k.dom,Oi=k.parse,Ki=k.findIconDefinition,Ji=k.toHtml,Ei=k.icon,Qi=k.layer,Fi=k.text,Mi=k.counter;var xn=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275mod=ae({type:t})}static{this.\u0275inj=ne({})}}return t})();var wn=(()=>{class t{static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=S({type:t,selectors:[["app-home"]],standalone:!0,features:[P],decls:11,vars:1,consts:[[1,"about-container"],[1,"project-container"],[3,"numOfProjectToShow"]],template:function(a,i){a&1&&(y(0,"div",0)(1,"p"),v(2," Hi there. My name is "),y(3,"strong"),v(4,"Brady"),g(),v(5,". I am a software developer. I like "),y(6,"strong"),v(7,"building cool things and I live in the terminal."),g(),v(8," This is where I share my creative pursuits. "),g()(),y(9,"div",1),I(10,"app-projects",2),g()),a&2&&(W(10),J("numOfProjectToShow",4))},dependencies:[xn,rt],styles:["strong[_ngcontent-%COMP%]:hover{color:var(--yellow)}"]})}}return t})();var kn=[{path:"",component:wn},{path:"blog",loadChildren:()=>import("./chunk-2MTXJJYJ.js").then(t=>t.BlogModule)},{path:"projects",component:rt}];var Cn={providers:[ce(kn)]};se(wt,Cn).catch(t=>console.error(t));
