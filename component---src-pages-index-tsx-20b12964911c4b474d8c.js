/*! For license information please see component---src-pages-index-tsx-20b12964911c4b474d8c.js.LICENSE.txt */
(self.webpackChunkhoogenbos_ch=self.webpackChunkhoogenbos_ch||[]).push([[691],{9931:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},7904:function(e,t,n){"use strict";t.M=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=i(n(7294)),l=i(n(5697));function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return r.default.createElement("a",a({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var n=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(n=!1),e.target&&"_self"!==e.target.toLowerCase()&&(n=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:e.href,transport_type:"beacon",event_callback:function(){n&&(document.location=e.href)}}):n&&(document.location=e.href),!1}}))}o.propTypes={href:l.default.string,target:l.default.string,onClick:l.default.func},t.M=o},7836:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(1531),l=n(8037),i=["children"];function o(e){var t=e.children,n=(0,r.Z)(e,i);return a.createElement(l.default,Object.assign({},n,{className:"inline-block p-2 font-bold bg-blue-700 rounded ring-blue-400 shadow-md transition transition-colors duration-100 dark:text-black dark:bg-blue-400 dark:ring-blue-600 hover:bg-blue-500 focus:ring text-reading dark:hover:bg-blue-500"}),t)}var c=n(396);function m(e){var t,n=e.data;return a.createElement(l.default,{to:n.uri,className:"block flex flex-col p-5 -mx-5 bg-white ring-blue-200 shadow-md transition transition-colors duration-100 md:p-6 md:mx-0 md:rounded-xl dark:ring-blue-600 hover:bg-blue-100 focus:bg-blue-300 focus:ring dark:bg-surface dark:focus:bg-blue-900"},(null===(t=n.frontmatter.image)||void 0===t?void 0:t.childImageSharp)&&a.createElement(c.G,{className:"mb-3 rounded-xl shadow-md",alt:n.frontmatter.title,image:n.frontmatter.image.childImageSharp.gatsbyImageData}),a.createElement("div",{className:"flex justify-between md:mb-1"},a.createElement("div",{className:"text-lg font-bold leading-tight md:mb-0"},n.frontmatter.title),a.createElement("div",{className:"hidden text-sm md:block dark:text-gray-400"},n.frontmatter.date)),a.createElement("div",{className:"text-gray-500 dark:text-gray-400 truncate"},n.excerpt),a.createElement("div",{className:"text-sm text-gray-500 md:hidden dark:text-gray-400"},n.frontmatter.date))}function s(e){var t=e.title,n=void 0===t?"Blog posts":t,r=e.data;return a.createElement("div",null,a.createElement("h2",{className:"text-xl font-bold md:text-2xl"},n),a.createElement("div",{className:"mt-2 space-y-3"},r.nodes.map((function(e,t){return a.createElement(m,{data:e,key:t})}))),r.pageInfo.hasNextPage&&a.createElement("div",{className:"flex justify-end mt-3"},a.createElement(o,{to:"/blog"},"View all")))}},8551:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(9311),l=n(8037),i=n(2040),o=n.n(i),c=n(8871),m=n.n(c);function s(){var e=(0,a.useState)(void 0),t=e[0],n=e[1];(0,a.useEffect)((function(){n("dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches)}),[]);return a.createElement("button",{className:"p-2 rounded-full focus:outline-none clickable",onClick:function(){localStorage.theme=t?"light":"dark",t?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark"),n(!t)},"aria-label":"Switch theme","aria-checked":t?"true":"false",role:"switch",title:t?"Switch to light mode":"Switch to dark mode"},t?a.createElement(o(),{className:"w-8 h-8"}):a.createElement(m(),{className:"w-8 h-8"}))}function d(){return a.createElement("footer",{className:"flex flex-col-reverse justify-between items-center sm:flex-row"},a.createElement("div",{className:"flex items-center"},a.createElement(s,null),a.createElement("div",{className:"ml-2 md:ml-5"},"© ",(new Date).getFullYear()," ",a.createElement(l.default,{to:"/",className:"hover:underline"},"Max Hoogenbosch"))),a.createElement(r.Z,null))}},4269:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),r=n(9931),l=n.n(r);function i(e){var t=e.image,n=e.className;return a.createElement("div",{className:l()(n,"rounded-full shadow-md overflow-hidden")},t)}},3684:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),r=n(5186),l=n(9694),i=n(1597);function o(e){var t=e.title,n=e.description,o=e.image,m=e.article,s=e.published,d=e.tags,u=(0,l.useLocation)().pathname,f=(0,i.useStaticQuery)(c).site.siteMetadata,h=f.defaultTitle,p=f.titleTemplate,g=f.defaultDescription,E=f.siteUrl,v=f.twitterUsername,x=f.locale,y=f.lang,L={title:t||h,description:n||g,image:o&&""+E+o,url:""+E+u};return a.createElement(r.q,{title:t,titleTemplate:p,defaultTitle:h},a.createElement("html",{lang:y}),a.createElement("meta",{charSet:"utf-8"}),a.createElement("meta",{name:"title",content:L.title}),a.createElement("meta",{name:"description",content:L.description}),a.createElement("link",{rel:"canonical",href:L.url}),L.image&&a.createElement("meta",{name:"image",content:L.image}),a.createElement("meta",{property:"og:url",content:L.url}),a.createElement("meta",{property:"og:locale",content:x}),a.createElement("meta",{property:"og:site_name",content:h}),a.createElement("meta",{property:"og:title",content:L.title}),L.description&&a.createElement("meta",{property:"og:description",content:L.description}),L.image&&a.createElement("meta",{property:"og:image",content:L.image}),s&&a.createElement("meta",{property:"og:updated_time",content:s}),m&&a.createElement("meta",{property:"og:type",content:"article"}),s&&a.createElement("meta",{property:"article:published_time",content:s}),d&&d.map((function(e,t){return a.createElement("meta",{key:t,property:"article:tag",content:e})})),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{property:"twitter:url",content:L.url}),L.title&&a.createElement("meta",{name:"twitter:title",content:L.title}),L.description&&a.createElement("meta",{name:"twitter:description",content:L.description}),L.image&&a.createElement("meta",{name:"twitter:image",content:L.image}),v&&a.createElement("meta",{name:"twitter:creator",content:v}))}var c="167392381"},9311:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(1531),r=n(7294),l=n(7904),i=["children","component"];function o(e){var t=e.children,n=e.component,o=void 0===n?l.M:n,c=(0,a.Z)(e,i);return r.createElement(o,Object.assign({},c,{className:"w-12 h-12 rounded-lg flex-center clickable"}),t)}var c=n(4267),m=n.n(c),s=n(8527),d=n.n(s),u=n(5019),f=n.n(u);function h(){return r.createElement("div",{className:"flex -mx-2 space-x-0.5",role:"navigation","aria-label":"Links"},r.createElement(o,{title:"GitHub",rel:"noopener",href:"https://github.com/Xammie"},r.createElement(m(),{className:"h-8"})),r.createElement(o,{title:"LinkedIn",rel:"noopener",href:"https://www.linkedin.com/in/maxhoogenbosch/"},r.createElement(d(),{className:"h-8"})),r.createElement(o,{title:"Twitter",rel:"noopener",href:"https://twitter.com/maxhoogenbosch"},r.createElement(f(),{className:"h-8"})))}},289:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(7294),r=n(6757),l=n(5463),i=n(7836),o=n(8551),c=n(4269),m=n(6971),s=n.n(m),d=n(4782),u=n.n(d),f=n(9311);function h(e){var t=e.image;return a.createElement("div",{className:"flex flex-col gap-5 justify-center items-center md:flex-row md:gap-6 md:justify-start"},a.createElement("div",null,a.createElement(c.Z,{image:t,className:"w-32 h-32 duration-100 sm:w-48 sm:h-48 hover:scale-105 hover:rotate-6"})),a.createElement("div",{className:"flex flex-col items-center text-center md:items-start md:text-left"},a.createElement("h1",{className:"text-4xl font-extrabold sm:text-5xl md:text-5xl"},"Max Hoogenbosch"),a.createElement("div",{className:"flex items-center text-lg sm:text-xl md:text-2xl"},"Full stack developer at",a.createElement("a",{href:"https://enrise.com",rel:"noopener","aria-label":"View website of enrise",className:"block p-2 mx-1 h-10 rounded sm:h-12 md:inline clickable"},a.createElement(s(),{className:"dark:hidden",width:null,height:"100%"}),a.createElement(u(),{className:"hidden dark:block",width:null,height:"100%"}))),a.createElement("div",{className:"hidden md:flex"},a.createElement(f.Z,null))))}var p=n(396),g=n(3684);function E(e){var t=e.data;return a.createElement(r.Z,null,a.createElement(g.Z,null),a.createElement(l.Z,null,a.createElement(h,{image:a.createElement(p.G,{alt:"Max Hoogenbosch",title:"This is me :)",image:t.profile.childImageSharp.gatsbyImageData})}),a.createElement(i.Z,{data:t.blogs}),a.createElement(o.Z,null)))}},4782:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Enrise"),a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:1},[a.createElement("polygon",{id:"Path",fill:"#FFFFFF",points:"58 37.9084722 58 35.1977778 60.06625 35.1977778 60.06625 12.7147222 58 12.7147222 58 10 71.6501389 10 71.6501389 17.5319444 68.1701389 17.5319444 68.1701389 12.7147222 63.5422222 12.7147222 63.5422222 22.0430556 68.9354167 22.0430556 68.9354167 24.7577778 63.5422222 24.7577778 63.5422222 35.1977778 68.2104167 35.1977778 68.2104167 30.26375 71.6863889 30.26375 71.6863889 37.9084722 58 37.9084722 58 37.9084722",key:0}),a.createElement("polygon",{id:"Path",fill:"#FFFFFF",points:"87.9747222 12.7147222 87.9747222 37.9084722 85.0666667 37.9084722 78.7229167 19.1390278 78.7229167 35.1977778 80.5958333 35.1977778 80.5958333 37.9084722 73.5593056 37.9084722 73.5593056 35.1977778 75.6255556 35.1977778 75.6255556 12.7147222 73.5593056 12.7147222 73.5593056 10 78.8356944 10 84.8773611 27.9316667 84.8773611 12.7147222 83.0044444 12.7147222 83.0044444 10 90.0369444 10 90.0369444 12.7147222 87.9747222 12.7147222 87.9747222 12.7147222",key:1}),a.createElement("path",{d:"M104.923611,37.9125 C103.090972,37.9125 101.943056,37.22375 101.943056,34.5855556 L101.943056,27.7786111 C101.943056,26.2118056 101.330833,25.1806944 99.3048611,25.1806944 L97.1620833,25.1806944 L97.1620833,35.1977778 L99.1518056,35.1977778 L99.1518056,37.9125 L91.6198611,37.9125 L91.6198611,35.1977778 L93.6861111,35.1977778 L93.6861111,12.7147222 L91.6198611,12.7147222 L91.6198611,10 L99.6754167,10 C103.610556,10 105.370694,11.6111111 105.370694,15.1636111 L105.370694,19.9969444 C105.370694,22.1356944 104.565139,23.4004167 102.426389,23.8595833 C104.375833,24.3147222 105.410972,25.5029167 105.410972,27.6054167 L105.410972,34.1425 C105.410972,34.9843056 105.600278,35.2138889 106.401806,35.2138889 L107.267778,35.2138889 L107.267778,37.9286111 L104.923611,37.9125 Z M101.902778,15.3166667 C101.902778,13.7498611 101.290556,12.7147222 99.2645833,12.7147222 L97.1620833,12.7147222 L97.1620833,22.4659722 L99.2645833,22.4659722 C101.254306,22.4659722 101.902778,21.5073611 101.902778,19.8640278 L101.902778,15.3247222 L101.902778,15.3166667 Z",id:"Shape",fill:"#FFFFFF",key:2}),a.createElement("polygon",{id:"Path",fill:"#FFFFFF",points:"108.802361 37.9084722 108.802361 35.1977778 110.868611 35.1977778 110.868611 12.7147222 108.802361 12.7147222 108.802361 10 116.410833 10 116.410833 12.7147222 114.348611 12.7147222 114.348611 35.1977778 116.410833 35.1977778 116.410833 37.9084722 108.802361 37.9084722 108.802361 37.9084722",key:3}),a.createElement("polygon",{id:"Path",fill:"#FFFFFF",points:"132.054722 37.9084722 132.054722 35.1977778 134.120972 35.1977778 134.120972 12.7147222 132.054722 12.7147222 132.054722 10 145.704861 10 145.704861 17.5319444 142.224861 17.5319444 142.224861 12.7147222 137.596944 12.7147222 137.596944 22.0430556 142.990139 22.0430556 142.990139 24.7577778 137.596944 24.7577778 137.596944 35.1977778 142.261111 35.1977778 142.261111 30.26375 145.741111 30.26375 145.741111 37.9084722 132.054722 37.9084722 132.054722 37.9084722",key:4}),a.createElement("path",{d:"M124.269028,38.2931944 C120.559444,38.2931944 118.380417,37.2218056 118.380417,33.51625 L118.380417,30.2940278 L121.860417,30.2940278 L121.860417,33.4880556 C121.860417,35.0186111 122.432361,35.5905556 124.277083,35.5905556 C125.956667,35.5905556 126.69375,35.1877778 126.69375,33.4880556 L126.69375,27.2047222 C126.69375,25.9440278 126.500417,25.7144444 125.163194,25.4486111 L121.83625,24.9491667 C119.467917,24.6430556 118.473056,23.7408333 118.473056,20.9213889 L118.473056,14.4769444 C118.473056,11.2305556 120.233194,9.7 124.285139,9.7 C127.877917,9.7 130.097222,10.9606944 130.097222,14.4769444 L130.097222,17.5743056 L126.601111,17.5743056 L126.601111,14.5172222 C126.601111,13.0269444 125.988889,12.4147222 124.269028,12.4147222 C122.77875,12.4147222 121.936944,12.8738889 121.936944,14.5172222 L121.936944,20.0997222 C121.936944,21.4369444 122.202778,21.6302778 123.463472,21.8598611 L126.790417,22.3552778 C129.1225,22.6613889 130.153611,23.6159722 130.153611,26.3830556 L130.153611,33.5323611 C130.153611,36.8955556 128.244444,38.3093056 124.269028,38.3093056 L124.269028,38.2931944 Z",id:"Path",fill:"#FFFFFF",key:5}),a.createElement("rect",{id:"Rectangle",fill:"#F2A900",x:"0",y:"0",width:"48",height:"48",key:6}),a.createElement("polygon",{id:"Path",fill:"#FFFFFF",points:"38 38 27 38 27 21 10 21 10 10 38 10",key:7})])])}r.defaultProps={width:"146px",height:"48px",viewBox:"0 0 146 48",version:"1.1"},e.exports=r,r.default=r},6971:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Enrise"),a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:1},[a.createElement("polygon",{id:"Path",fill:"#181818",points:"58 37.9084722 58 35.1977778 60.06625 35.1977778 60.06625 12.7147222 58 12.7147222 58 10 71.6501389 10 71.6501389 17.5319444 68.1701389 17.5319444 68.1701389 12.7147222 63.5422222 12.7147222 63.5422222 22.0430556 68.9354167 22.0430556 68.9354167 24.7577778 63.5422222 24.7577778 63.5422222 35.1977778 68.2104167 35.1977778 68.2104167 30.26375 71.6863889 30.26375 71.6863889 37.9084722 58 37.9084722 58 37.9084722",key:0}),a.createElement("polygon",{id:"Path",fill:"#181818",points:"87.9747222 12.7147222 87.9747222 37.9084722 85.0666667 37.9084722 78.7229167 19.1390278 78.7229167 35.1977778 80.5958333 35.1977778 80.5958333 37.9084722 73.5593056 37.9084722 73.5593056 35.1977778 75.6255556 35.1977778 75.6255556 12.7147222 73.5593056 12.7147222 73.5593056 10 78.8356944 10 84.8773611 27.9316667 84.8773611 12.7147222 83.0044444 12.7147222 83.0044444 10 90.0369444 10 90.0369444 12.7147222 87.9747222 12.7147222 87.9747222 12.7147222",key:1}),a.createElement("path",{d:"M104.923611,37.9125 C103.090972,37.9125 101.943056,37.22375 101.943056,34.5855556 L101.943056,27.7786111 C101.943056,26.2118056 101.330833,25.1806944 99.3048611,25.1806944 L97.1620833,25.1806944 L97.1620833,35.1977778 L99.1518056,35.1977778 L99.1518056,37.9125 L91.6198611,37.9125 L91.6198611,35.1977778 L93.6861111,35.1977778 L93.6861111,12.7147222 L91.6198611,12.7147222 L91.6198611,10 L99.6754167,10 C103.610556,10 105.370694,11.6111111 105.370694,15.1636111 L105.370694,19.9969444 C105.370694,22.1356944 104.565139,23.4004167 102.426389,23.8595833 C104.375833,24.3147222 105.410972,25.5029167 105.410972,27.6054167 L105.410972,34.1425 C105.410972,34.9843056 105.600278,35.2138889 106.401806,35.2138889 L107.267778,35.2138889 L107.267778,37.9286111 L104.923611,37.9125 Z M101.902778,15.3166667 C101.902778,13.7498611 101.290556,12.7147222 99.2645833,12.7147222 L97.1620833,12.7147222 L97.1620833,22.4659722 L99.2645833,22.4659722 C101.254306,22.4659722 101.902778,21.5073611 101.902778,19.8640278 L101.902778,15.3247222 L101.902778,15.3166667 Z",id:"Shape",fill:"#181818",key:2}),a.createElement("polygon",{id:"Path",fill:"#181818",points:"108.802361 37.9084722 108.802361 35.1977778 110.868611 35.1977778 110.868611 12.7147222 108.802361 12.7147222 108.802361 10 116.410833 10 116.410833 12.7147222 114.348611 12.7147222 114.348611 35.1977778 116.410833 35.1977778 116.410833 37.9084722 108.802361 37.9084722 108.802361 37.9084722",key:3}),a.createElement("polygon",{id:"Path",fill:"#181818",points:"132.054722 37.9084722 132.054722 35.1977778 134.120972 35.1977778 134.120972 12.7147222 132.054722 12.7147222 132.054722 10 145.704861 10 145.704861 17.5319444 142.224861 17.5319444 142.224861 12.7147222 137.596944 12.7147222 137.596944 22.0430556 142.990139 22.0430556 142.990139 24.7577778 137.596944 24.7577778 137.596944 35.1977778 142.261111 35.1977778 142.261111 30.26375 145.741111 30.26375 145.741111 37.9084722 132.054722 37.9084722 132.054722 37.9084722",key:4}),a.createElement("path",{d:"M124.269028,38.2931944 C120.559444,38.2931944 118.380417,37.2218056 118.380417,33.51625 L118.380417,30.2940278 L121.860417,30.2940278 L121.860417,33.4880556 C121.860417,35.0186111 122.432361,35.5905556 124.277083,35.5905556 C125.956667,35.5905556 126.69375,35.1877778 126.69375,33.4880556 L126.69375,27.2047222 C126.69375,25.9440278 126.500417,25.7144444 125.163194,25.4486111 L121.83625,24.9491667 C119.467917,24.6430556 118.473056,23.7408333 118.473056,20.9213889 L118.473056,14.4769444 C118.473056,11.2305556 120.233194,9.7 124.285139,9.7 C127.877917,9.7 130.097222,10.9606944 130.097222,14.4769444 L130.097222,17.5743056 L126.601111,17.5743056 L126.601111,14.5172222 C126.601111,13.0269444 125.988889,12.4147222 124.269028,12.4147222 C122.77875,12.4147222 121.936944,12.8738889 121.936944,14.5172222 L121.936944,20.0997222 C121.936944,21.4369444 122.202778,21.6302778 123.463472,21.8598611 L126.790417,22.3552778 C129.1225,22.6613889 130.153611,23.6159722 130.153611,26.3830556 L130.153611,33.5323611 C130.153611,36.8955556 128.244444,38.3093056 124.269028,38.3093056 L124.269028,38.2931944 Z",id:"Path",fill:"#181818",key:5}),a.createElement("rect",{id:"Rectangle",fill:"#F2A900",x:"0",y:"0",width:"48",height:"48",key:6}),a.createElement("polygon",{id:"Path",fill:"#FFFFFF",points:"38 38 27 38 27 21 10 21 10 10 38 10",key:7})])])}r.defaultProps={width:"146px",height:"48px",viewBox:"0 0 146 48",version:"1.1"},e.exports=r,r.default=r},4267:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("path",{d:"M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5 21.3 0 42.8 2.9 62.8 8.5 0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z",fill:"currentColor"}))}r.defaultProps={viewBox:"0 0 496 512"},e.exports=r,r.default=r},8527:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("path",{fill:"currentColor",d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}))}r.defaultProps={viewBox:"0 0 448 512"},e.exports=r,r.default=r},8871:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))}r.defaultProps={fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.exports=r,r.default=r},2040:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}))}r.defaultProps={fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e.exports=r,r.default=r},5019:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))}r.defaultProps={"aria-hidden":"true","data-prefix":"fab","data-icon":"twitter",className:"svg-inline--fa fa-twitter fa-w-16",viewBox:"0 0 512 512"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-index-tsx-20b12964911c4b474d8c.js.map