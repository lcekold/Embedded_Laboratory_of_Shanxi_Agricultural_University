"use strict";(self.webpackChunkEmbedded_Laboratory_of_Shanxi_Agricultural_University=self.webpackChunkEmbedded_Laboratory_of_Shanxi_Agricultural_University||[]).push([[7862],{262:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(5271),o=n(5341),s=n(9617),i=n(7202),a=n(5925),l=n(9788);const c={backToTopButton:"backToTopButton_Twcd",backToTopButtonShow:"backToTopButtonShow_LoB2"};var u=n(2676);function f(){var e=function(e){var t=e.threshold,n=(0,r.useState)(!1),o=n[0],s=n[1],i=(0,r.useRef)(!1),c=(0,a.Ct)(),u=c.startScroll,f=c.cancelScroll;return(0,a.RF)((function(e,n){var r=e.scrollY,o=null==n?void 0:n.scrollY;o&&(i.current?i.current=!1:r>=o?(f(),s(!1)):r<t?s(!1):r+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,l.S)((function(e){e.location.hash&&(i.current=!0,s(!1))})),{shown:o,scrollToTop:function(){return u(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return(0,u.jsx)("button",{"aria-label":(0,s.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",i.k.common.backToTopButton,c.backToTopButton,t&&c.backToTopButtonShow),type:"button",onClick:n})}},3908:(e,t,n)=>{n.d(t,{Z:()=>i});n(5271);var r=n(9617),o=n(4625),s=n(2676);function i(e){var t=e.metadata,n=t.previousPage,i=t.nextPage;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,s.jsx)(o.Z,{permalink:n,title:(0,s.jsx)(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,s.jsx)(o.Z,{permalink:i,title:(0,s.jsx)(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},2367:(e,t,n)=>{n.d(t,{C:()=>l,n:()=>a});var r=n(5271),o=n(6682),s=n(2676),i=r.createContext(null);function a(e){var t=e.children,n=e.content,o=e.isBlogPostPage,a=function(e){var t=e.content,n=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n}}),[t,n])}({content:n,isBlogPostPage:void 0!==o&&o});return(0,s.jsx)(i.Provider,{value:a,children:t})}function l(){var e=(0,r.useContext)(i);if(null===e)throw new o.i6("BlogPostProvider");return e}},2045:(e,t,n)=>{n.d(t,{P:()=>o});var r=n(2815);function o(e){void 0===e&&(e={});var t=(0,r.Z)().i18n.currentLocale,n=function(){var e=(0,r.Z)().i18n,t=e.currentLocale;return e.localeConfigs[t].calendar}();return new Intl.DateTimeFormat(t,Object.assign({calendar:n},e))}},4347:(e,t,n)=>{n.d(t,{c:()=>c});var r=n(5271),o=n(2815),s=["zero","one","two","few","many","other"];function i(e){return s.filter((function(t){return e.includes(t)}))}var a={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,o.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:i(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),a}var t,n}),[e])}function c(){var e=l();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}}},1878:(e,t,n)=>{n.d(t,{M:()=>x});var r=n(2676),o=n(5271),s=n(6431);function i(){const e=(0,o.useRef)(!1);return(0,s.L)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var a=n(9884);var l=n(4175),c=n(7827),u=n(1166);class f extends o.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function d({children:e,isPresent:t}){const n=(0,o.useId)(),s=(0,o.useRef)(null),i=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:a}=(0,o.useContext)(u._);return(0,o.useInsertionEffect)((()=>{const{width:e,height:r,top:o,left:l}=i.current;if(t||!s.current||!e||!r)return;s.current.dataset.motionPopId=n;const c=document.createElement("style");return a&&(c.nonce=a),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${r}px !important;\n            top: ${o}px !important;\n            left: ${l}px !important;\n          }\n        `),()=>{document.head.removeChild(c)}}),[t]),(0,r.jsx)(f,{isPresent:t,childRef:s,sizeRef:i,children:o.cloneElement(e,{ref:s})})}const p=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:i,presenceAffectsLayout:a,mode:u})=>{const f=(0,c.h)(h),p=(0,o.useId)(),m=(0,o.useMemo)((()=>({id:p,initial:t,isPresent:n,custom:i,onExitComplete:e=>{f.set(e,!0);for(const t of f.values())if(!t)return;s&&s()},register:e=>(f.set(e,!1),()=>f.delete(e))})),a?[Math.random()]:[n]);return(0,o.useMemo)((()=>{f.forEach(((e,t)=>f.set(t,!1)))}),[n]),o.useEffect((()=>{!n&&!f.size&&s&&s()}),[n]),"popLayout"===u&&(e=(0,r.jsx)(d,{isPresent:n,children:e})),(0,r.jsx)(l.O.Provider,{value:m,children:e})};function h(){return new Map}var m=n(6208);var g=n(5162);const v=e=>e.key||"";const x=({children:e,custom:t,initial:n=!0,onExitComplete:l,exitBeforeEnter:c,presenceAffectsLayout:u=!0,mode:f="sync"})=>{(0,g.k)(!c,"Replace exitBeforeEnter with mode='wait'");const d=(0,o.useContext)(m.p).forceRender||function(){const e=i(),[t,n]=(0,o.useState)(0),r=(0,o.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,o.useCallback)((()=>a.Wi.postRender(r)),[r]),t]}()[0],h=i(),x=function(e){const t=[];return o.Children.forEach(e,(e=>{(0,o.isValidElement)(e)&&t.push(e)})),t}(e);let b=x;const w=(0,o.useRef)(new Map).current,P=(0,o.useRef)(b),E=(0,o.useRef)(new Map).current,T=(0,o.useRef)(!0);var k;if((0,s.L)((()=>{T.current=!1,function(e,t){e.forEach((e=>{const n=v(e);t.set(n,e)}))}(x,E),P.current=b})),k=()=>{T.current=!0,E.clear(),w.clear()},(0,o.useEffect)((()=>()=>k()),[]),T.current)return(0,r.jsx)(r.Fragment,{children:b.map((e=>(0,r.jsx)(p,{isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:u,mode:f,children:e},v(e))))});b=[...b];const C=P.current.map(v),R=x.map(v),y=C.length;for(let r=0;r<y;r++){const e=C[r];-1!==R.indexOf(e)||w.has(e)||w.set(e,void 0)}return"wait"===f&&w.size&&(b=[]),w.forEach(((e,n)=>{if(-1!==R.indexOf(n))return;const o=E.get(n);if(!o)return;const s=C.indexOf(n);let i=e;if(!i){const e=()=>{w.delete(n);const e=Array.from(E.keys()).filter((e=>!R.includes(e)));if(e.forEach((e=>E.delete(e))),P.current=x.filter((t=>{const r=v(t);return r===n||e.includes(r)})),!w.size){if(!1===h.current)return;d(),l&&l()}};i=(0,r.jsx)(p,{isPresent:!1,onExitComplete:e,custom:t,presenceAffectsLayout:u,mode:f,children:o},v(o)),w.set(n,i)}b.splice(s,0,i)})),b=b.map((e=>{const t=e.key;return w.has(t)?e:(0,r.jsx)(p,{isPresent:!0,presenceAffectsLayout:u,mode:f,children:e},v(e))})),(0,r.jsx)(r.Fragment,{children:w.size?b:b.map((e=>(0,o.cloneElement)(e)))})}}}]);