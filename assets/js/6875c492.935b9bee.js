"use strict";(self.webpackChunkEmbedded_Laboratory_of_Shanxi_Agricultural_University=self.webpackChunkEmbedded_Laboratory_of_Shanxi_Agricultural_University||[]).push([[8610],{262:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(5271),o=t(5341),s=t(9617),r=t(7202),i=t(5925),l=t(9788);const c={backToTopButton:"backToTopButton_Twcd",backToTopButtonShow:"backToTopButtonShow_LoB2"};var d=t(2676);function u(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),o=t[0],s=t[1],r=(0,a.useRef)(!1),c=(0,i.Ct)(),d=c.startScroll,u=c.cancelScroll;return(0,i.RF)((function(e,t){var a=e.scrollY,o=null==t?void 0:t.scrollY;o&&(r.current?r.current=!1:a>=o?(u(),s(!1)):a<n?s(!1):a+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,l.S)((function(e){e.location.hash&&(r.current=!0,s(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,d.jsx)("button",{"aria-label":(0,s.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",r.k.common.backToTopButton,c.backToTopButton,n&&c.backToTopButtonShow),type:"button",onClick:t})}},3908:(e,n,t)=>{t.d(n,{Z:()=>r});t(5271);var a=t(9617),o=t(4625),s=t(2676);function r(e){var n=e.metadata,t=n.previousPage,r=n.nextPage;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[t&&(0,s.jsx)(o.Z,{permalink:t,title:(0,s.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,s.jsx)(o.Z,{permalink:r,title:(0,s.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},2425:(e,n,t)=>{t.d(n,{Z:()=>m});t(5271);var a=t(5341),o=t(9617),s=t(8671),r=t(2676);function i(){return(0,r.jsx)(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(s.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7202),u=t(1190);function g(e){var n=e.className;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(i,{}),className:(0,a.Z)(n,d.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(g,Object.assign({},e))]})}},2367:(e,n,t)=>{t.d(n,{C:()=>l,n:()=>i});var a=t(5271),o=t(6682),s=t(2676),r=a.createContext(null);function i(e){var n=e.children,t=e.content,o=e.isBlogPostPage,i=function(e){var n=e.content,t=e.isBlogPostPage;return(0,a.useMemo)((function(){return{metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,toc:n.toc,isBlogPostPage:t}}),[n,t])}({content:t,isBlogPostPage:void 0!==o&&o});return(0,s.jsx)(r.Provider,{value:i,children:n})}function l(){var e=(0,a.useContext)(r);if(null===e)throw new o.i6("BlogPostProvider");return e}},2045:(e,n,t)=>{t.d(n,{P:()=>o});var a=t(2815);function o(e){void 0===e&&(e={});var n=(0,a.Z)().i18n.currentLocale,t=function(){var e=(0,a.Z)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}},4347:(e,n,t)=>{t.d(n,{c:()=>c});var a=t(5271),o=t(2815),s=["zero","one","two","few","many","other"];function r(e){return s.filter((function(n){return e.includes(n)}))}var i={locale:"en",pluralForms:r(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,o.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:r(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),i}var n,t}),[e])}function c(){var e=l();return{selectMessage:function(n,t){return function(e,n,t){var a=e.split("|");if(1===a.length)return a[0];a.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var o=t.select(n),s=t.pluralForms.indexOf(o);return a[Math.min(s,a.length-1)]}(t,n,e)}}}},5440:(e,n,t)=>{t.d(n,{Z:()=>Z});var a=t(2367),o=t(2303),s=t(5318),r=t(2676);function i(e){var n,t=e.children,i=e.className,l=(0,a.C)(),c=l.frontMatter,d=l.assets,u=(0,s.Cg)().withBaseUrl,g=null!=(n=d.image)?n:c.image;return(0,r.jsxs)("article",{className:(0,o.cn)("relative px-4 pt-4 pb-3 lg:px-4",i),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[g&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{itemProp:"image",content:u(g,{absolute:!0})}),(0,r.jsx)("div",{className:"absolute inset-0 z-1 h-[224px]",children:(0,r.jsx)("div",{className:"size-full rounded-[var(--ifm-pagination-nav-border-radius)] bg-center bg-cover bg-no-repeat",style:{WebkitMaskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",maskImage:"linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)",backgroundImage:'url("'+g+'")'}})}),(0,r.jsx)("div",{style:{height:"120px"}})]}),t]})}var l=t(6453),c=t(5081);t(5271);function d(e){var n=e.children,t=e.className,s=(0,a.C)().isBlogPostPage;return(0,r.jsx)("div",{id:s?l.blogPostContainerID:void 0,className:(0,o.cn)("markdown",t),itemProp:"articleBody",style:{position:"relative"},children:(0,r.jsx)(c.Z,{children:n})})}var u=t(2045),g=t(1058),m=t(353),p=t(8096),h=t(9617),x=["blogPostTitle"];function b(){return(0,r.jsx)("b",{children:(0,r.jsx)(h.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function f(e){var n=e.blogPostTitle,t=(0,m.Z)(e,x);return(0,r.jsxs)(p.Z,Object.assign({"aria-label":(0,h.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:n}),style:{display:"flex",alignItems:"center",gap:"0.25rem"}},t,{children:[(0,r.jsx)(b,{}),(0,r.jsx)(g.JO,{icon:"ri:arrow-right-line"})]}))}var j=t(8074),v=t(4347);function k(e){var n,t=e.readingTime,a=(n=(0,v.c)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,h.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))});return(0,r.jsx)("span",{className:"truncate",children:a(t)})}function N(e){var n=e.date,t=e.formattedDate;return(0,r.jsx)("time",{dateTime:n,itemProp:"datePublished",className:"truncate",children:t})}function P(e){var n,t=e.className,s=(0,a.C)().metadata,i=s.date,l=s.tags,c=s.readingTime,d=l.length>0,m=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,o.cn)("inline-flex flex-wrap gap-1.5 text-base","margin-bottom--md",t),children:[(0,r.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,r.jsx)(g.JO,{icon:"ri:calendar-line"}),(0,r.jsx)(N,{date:i,formattedDate:(n=i,m.format(new Date(n)))})]}),d&&(0,r.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,r.jsx)(g.JO,{icon:"ri:price-tag-3-line"}),(0,r.jsx)("div",{className:(0,o.cn)("truncate","inline-flex text-center"),children:l.slice(0,3).map((function(e,n){var t=e.label,a=e.permalink;return(0,r.jsxs)("div",{children:[0!==n&&"/",(0,r.jsx)(j.Z,{label:t,permalink:a,className:"tag !border-0 px-0.5 py-0.5 text-text hover:text-link"})]},a)}))})]}),void 0!==c&&(0,r.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,r.jsx)(g.JO,{icon:"ri:time-line"}),(0,r.jsx)(k,{readingTime:c})]})]})}const T={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y",blogPostInfo:"blogPostInfo_k7sy",blogPostInfoTags:"blogPostInfoTags_W9UY",blogPostAuthor:"blogPostAuthor_OLeU",blogPostDetailsFull:"blogPostDetailsFull_rPUK",divider:"divider_nSib"};function B(){var e,n=(0,a.C)(),t=n.metadata,s=n.isBlogPostPage,i=t.tags,l=t.title,c=(t.editUrl,t.hasTruncateMarker),d=t.date,m=t.readingTime,p=t.authors,h=(0,u.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),x=!s&&c,b=i.length>0;p.length;return s?(0,r.jsx)("footer",{className:(0,o.cn)("row docusaurus-mt-lg",s&&T.blogPostFooterDetailsFull),children:x&&(0,r.jsx)("div",{className:(0,o.cn)("col text--right",{"col--3":b}),children:(0,r.jsx)(f,{blogPostTitle:l,to:t.permalink})})}):(0,r.jsx)("div",{style:{position:"relative",zIndex:2},children:(0,r.jsxs)("div",{className:T.blogPostInfo,children:[d&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.JO,{icon:"ri:calendar-line"}),(0,r.jsx)("time",{dateTime:d,itemProp:"datePublished",children:(e=d,h.format(new Date(e)))})]}),b&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.JO,{icon:"ri:price-tag-3-line"}),(0,r.jsx)("span",{className:T.blogPostInfoTags,children:i.map((function(e){var n=e.label,t=e.permalink;return(0,r.jsx)(j.Z,{label:n,permalink:t},t)}))})]}),m&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.JO,{icon:"ri:time-line"}),(0,r.jsx)("span",{className:(0,o.cn)(T.blogPostReadTime,"blog__readingTime"),children:(0,r.jsx)(k,{readingTime:m})})]}),x&&(0,r.jsx)("div",{className:(0,o.cn)("flex flex-1 items-center justify-end gap-0.5 font-medium text-[var(--ifm-link-color)] opacity-0 transition-opacity duration-200 group-hover/blog:opacity-100",{"col--3":b}),children:(0,r.jsx)(f,{blogPostTitle:l,to:t.permalink,className:"hover:no-underline"})})]})})}const y={titleLink:"titleLink_BX2g"};function w(e){var n=e.className,t=(0,a.C)(),s=t.metadata,i=t.isBlogPostPage,l=s.permalink,c=s.title,d=i?"h1":"h2";return(0,r.jsx)(d,{className:(0,o.cn)(y.title,n),itemProp:"headline",children:i?c:(0,r.jsx)(p.Z,{itemProp:"url",to:l,className:y.titleLink,children:c})})}function _(){var e=(0,a.C)().isBlogPostPage;return(0,r.jsxs)("header",{style:{position:"relative",zIndex:2},children:[(0,r.jsx)(w,{}),e&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(P,{})})]})}function Z(e){var n=e.children,t=e.className,s=(0,a.C)().isBlogPostPage?"":"group/blog rounded-md mt-0 bg-blog mb-8 shadow-blog";return(0,r.jsxs)(i,{className:(0,o.cn)(s,t),children:[(0,r.jsx)(_,{}),(0,r.jsx)(d,{children:n}),(0,r.jsx)(B,{})]})}},3046:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(2367),o=t(5440),s=t(8233),r=t(2676),i={from:{opacity:.001,y:100},to:function(e){return{opacity:1,y:0,transition:{type:"spring",damping:25,stiffness:100,bounce:.2,duration:.3,delay:.2*e}}}};function l(e){var n=e.items,t=e.component,l=void 0===t?o.Z:t;return(0,r.jsx)(r.Fragment,{children:n.map((function(e,n){var t=e.content;return(0,r.jsx)(a.n,{content:t,children:(0,r.jsx)(s.E.div,{initial:"from",animate:"to",custom:n,viewport:{once:!0,amount:.8},variants:i,children:(0,r.jsx)(l,{children:(0,r.jsx)(t,{})})})},t.metadata.permalink)}))})}},2204:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var a=t(8096),o=t(9617),s=t(4347),r=t(7704),i=t(7202),l=t(2303),c=t(262),d=t(3908),u=t(3046),g=t(487),m=t(7535),p=t(2425),h=t(2791),x=t(2676);function b(e){var n,t=(n=(0,s.c)().selectMessage,function(e){return n(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function f(e){var n=b(e.tag);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.d,{title:n}),(0,x.jsx)(m.Z,{tag:"blog_tags_posts"})]})}function j(e){var n=e.tag,t=e.items,s=(e.sidebar,e.listMetadata),r=b(n);return(0,x.jsxs)(h.Z,{children:[n.unlisted&&(0,x.jsx)(p.Z,{}),(0,x.jsxs)("header",{className:(0,l.cn)("mb-4"),children:[(0,x.jsx)(g.Z,{as:"h1",children:r}),(0,x.jsx)(a.Z,{href:n.allTagsPath,children:(0,x.jsx)(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(u.Z,{items:t}),(0,x.jsx)(d.Z,{metadata:s}),(0,x.jsx)(c.Z,{})]})}function v(e){return(0,x.jsxs)(r.FG,{className:(0,l.cn)(i.k.wrapper.blogPages,i.k.page.blogTagPostListPage),children:[(0,x.jsx)(f,Object.assign({},e)),(0,x.jsx)(j,Object.assign({},e))]})}},4859:(e,n,t)=>{t.d(n,{Z:()=>O});var a=t(353),o=t(1640),s=t(2303),r=t(3709),i=t(7202),l=t(4194),c=t(5271);const d={codeBlockContainer:"codeBlockContainer_APcc"};var u=t(2676),g=["as"];function m(e){var n=e.as,t=(0,a.Z)(e,g),o=(0,r.p)(),c=(0,l.QC)(o);return(0,u.jsx)(n,Object.assign({},t,{style:c,className:(0,s.cn)(t.className,d.codeBlockContainer,i.k.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function h(e){var n=e.children,t=e.className;return(0,u.jsx)(m,{as:"pre",tabIndex:0,className:(0,s.cn)(p.codeBlockStandalone,"thin-scrollbar",t),children:(0,u.jsx)("code",{className:p.codeBlockLines,children:n})})}var x=t(3127),b=t(8026),f=t(78),j=t(1058),v=t(9617),k=t(528),N=t(2220),P=t(7931);const T={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function B(e){var n=e.code,t=e.className,a=(0,c.useState)(!1),o=a[0],r=a[1],i=(0,c.useRef)(void 0),l=(0,c.useCallback)((function(){(0,P.Z)(n),r(!0),i.current=window.setTimeout((function(){r(!1)}),1e3)}),[n]);return(0,c.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),(0,u.jsx)("button",{type:"button","aria-label":o?(0,v.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,v.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,v.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.cn)("clean-btn",t,T.copyButton,o&&T.copyButtonCopied),onClick:l,children:(0,u.jsxs)("span",{className:T.copyButtonIcons,"aria-hidden":"true",children:[(0,u.jsx)(k.Z,{className:T.copyButtonIcon}),(0,u.jsx)(N.Z,{className:T.copyButtonSuccessIcon})]})})}const y={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function w(e){var n,t=e.line,a=e.classNames,o=e.showLineNumbers,r=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===(null==(n=t[0])?void 0:n.content)&&(t[0].content="");var l=r({line:t,className:(0,s.cn)(a,o&&y.codeLine)}),c=t.map((function(e,n){return(0,u.jsx)("span",Object.assign({},i({token:e,key:n})),n)}));return(0,u.jsxs)("span",Object.assign({},l,{children:[o?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("span",{className:y.codeLineNumber}),(0,u.jsx)("span",{className:y.codeLineContent,children:c})]}):c,(0,u.jsx)("br",{})]}))}var _=t(9848);const Z={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function C(e){var n=e.className,t=e.onClick,a=e.isEnabled,o=(0,v.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,u.jsx)("button",{type:"button",onClick:t,className:(0,s.cn)("clean-btn",n,a&&Z.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,u.jsx)(_.Z,{className:Z.wordWrapButtonIcon,"aria-hidden":"true"})})}var I=t(2429);function L(e){var n,t=e.children,a=e.className,o=void 0===a?"":a,i=e.metastring,c=e.title,d=e.showLineNumbers,g=e.language,h=(0,b.L)().prism,v=h.defaultLanguage,k=h.magicComments,N=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=g?g:(0,l.Vo)(o))?n:v),P=(0,r.p)(),T=(0,f.F)(),y=(0,l.bc)(i)||c,_=function(e){var n,t,a=(0,x.Z)(/icon=(["'])(.*?)\1/,{quote:1,icon:2}),o=null!=(n=null==e||null==(t=e.match(a))||null==(t=t.groups)?void 0:t.icon)?n:"";return o?(0,u.jsx)(j.JO,{icon:o,width:"16"}):null}(i),Z=(0,l.nZ)(t,{metastring:i,language:N,magicComments:k}),L=Z.lineClassNames,F=Z.code,O=null!=d?d:(0,l.nt)(i);return(0,u.jsxs)(m,{as:"div",className:(0,s.cn)(o,N&&!o.includes("language-"+N)&&"language-"+N),children:[y&&(0,u.jsxs)("div",{className:p.codeBlockTitle,children:[_,y,(0,u.jsx)("span",{style:{flex:1,textAlign:"right"},children:N})]}),(0,u.jsxs)("div",{className:p.codeBlockContent,children:[(0,u.jsx)(I.y$,{theme:P,code:F,language:null!=N?N:"text",children:function(e){var n=e.className,t=e.style,a=e.tokens,o=e.getLineProps,r=e.getTokenProps;return(0,u.jsx)("pre",{ref:T.codeBlockRef,className:(0,s.cn)(n,p.codeBlock,"thin-scrollbar"),style:t,children:(0,u.jsx)("code",{className:(0,s.cn)(p.codeBlockLines,O&&p.codeBlockLinesWithNumbering),children:a.map((function(e,n){return(0,u.jsx)(w,{line:e,getLineProps:o,getTokenProps:r,classNames:L[n],showLineNumbers:O},n)}))})})}}),(0,u.jsxs)("div",{className:p.buttonGroup,children:[(T.isEnabled||T.isCodeScrollable)&&(0,u.jsx)(C,{className:p.codeButton,onClick:function(){return T.toggle()},isEnabled:T.isEnabled}),(0,u.jsx)(B,{className:p.codeButton,code:F})]})]})]})}var F=["children"];function O(e){var n=e.children,t=(0,a.Z)(e,F),s=(0,o.Z)(),r=function(e){return c.Children.toArray(e).some((function(e){return(0,c.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),i="string"==typeof r?L:h;return(0,u.jsx)(i,Object.assign({},t,{children:r}),String(s))}},7507:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(8096),o=(t(5271),t(1058)),s=t(2676);function r(e){var n=e.href;if(!n)return(0,s.jsx)(a.Z,Object.assign({},e));var t={"github.com":"simple-icons:github","twitter.com":"logos:twitter"},r=Object.keys(t).find((function(e){return new RegExp("^https?://"+e).test(n)})),i=r?t[r]:null;return i?(0,s.jsxs)("span",{style:{display:"inline-flex",gap:"0.25rem"},children:[i&&(0,s.jsx)(o.JO,{className:"a-icon",style:{alignSelf:"center"},icon:i,width:16,height:16}),(0,s.jsx)(a.Z,Object.assign({},e))]}):(0,s.jsx)(a.Z,Object.assign({},e))}},2791:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(353),o=t(7704),s=t(2303),r=t(8146),i=t(2676),l=["children","maxWidth"];function c(e){var n=e.children,t=e.maxWidth,c=(0,a.Z)(e,l);return(0,i.jsxs)(r.Z,Object.assign({},c,{children:[(0,i.jsx)(o.d,{title:c.title,description:c.description}),(0,i.jsx)("div",{className:"bg-background",children:(0,i.jsx)("div",{className:(0,s.cn)("mx-auto max-w-6xl px-4","margin-vert--lg"),style:t?{maxWidth:t+"px"}:{},children:(0,i.jsx)("main",{children:n})})})]}))}},4625:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(8096),o=t(2303),s=t(2676);function r(e){var n=e.permalink,t=e.title,r=e.subLabel,i=e.isNext;return(0,s.jsxs)(a.Z,{className:(0,o.cn)("pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[r&&(0,s.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,s.jsx)("div",{className:"pagination-nav__label",children:t})]})}},8074:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(8096),o=t(2303);t(5271);const s={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};var r=t(2676);function i(e){var n=e.permalink,t=e.label,i=e.count,l=e.className;return(0,r.jsxs)(a.Z,{href:n,className:(0,o.cn)(s.tag,i?s.tagWithCount:s.tagRegular,l),children:[t,i&&(0,r.jsx)("span",{children:i})]})}}}]);