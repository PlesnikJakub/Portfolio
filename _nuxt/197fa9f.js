(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(t,e,r){"use strict";r.r(e);var o=r(3),n=(r(24),{fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles").only(["title","description","img","slug","author"]).sortBy("createdAt","asc").fetch();case 2:t.articles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{articles:[]}}}),l=(r(224),r(2)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"site-footer",attrs:{id:"Blog"}},[r("div",{staticClass:"container"},[r("hr"),t._v(" "),r("div",{staticClass:"row"},[r("h1",[t._v("Blog Posts")]),t._v(" "),r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("BlogArticle",{attrs:{article:article}})],1)})),0)]),t._v(" "),r("hr")])])}),[],!1,null,"54685a0f",null);e.default=component.exports;installComponents(component,{BlogArticle:r(92).default,Footer:r(69).default})},104:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({data:function(){return{availableWords:["Developer","Data Scientist","League of Legends Fan","PhD Student"],currentWord:0,visible:!0}},mounted:function(){setInterval(this.onTick,2e3)},methods:{onTick:function(){var t=this;this.visible=!1,setTimeout((function(){return t.visible=!0}),1e3),this.currentWord+1!==this.availableWords.length?this.currentWord++:this.currentWord=0}}}),n=(r(230),r(2)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"sections",attrs:{id:"home"}},[r("div",{staticClass:"home-text pt-5"},[r("span",{staticClass:"intro-text"},[t._v("Hello, my name is Jakub ")]),t._v(" "),r("h1",{staticClass:"hello-text"},[t._v("\n      I'm a\n      "),r("transition",{attrs:{name:"slide-fade"}},[t.visible?r("span",{staticClass:"jobs"},[t._v(t._s(t.availableWords[t.currentWord]))]):t._e()])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"paragraph-text"},[r("i",[t._v("\n        I'm very passionate and dedicated to my work. With 7 years experience\n        as a professional software developer, I have acquired the skills and\n        knowledge necessary to make your project a success. I enjoy every step\n        of development from designing the system, to actual implementation and\n        testing.\n      ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 container mt-5"},[r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-8 offset-2 row mt-5"},[r("div",{staticClass:"col-1 offset-1"},[r("img",{staticClass:"img-thumbnail github",attrs:{src:"/github.png"}}),t._v(" "),r("h5",{staticClass:"name"},[t._v("Github")])]),t._v(" "),r("div",{staticClass:"col-1 offset-1"},[r("img",{staticClass:"img-thumbnail github",attrs:{src:"/twitter.png"}}),t._v(" "),r("h5",{staticClass:"name"},[t._v("Twitter")])]),t._v(" "),r("div",{staticClass:"col-1 offset-1"},[r("img",{staticClass:"img-thumbnail github",attrs:{src:"/youtube.png"}}),t._v(" "),r("h5",{staticClass:"name"},[t._v("Youtube")])]),t._v(" "),r("div",{staticClass:"col-1 offset-1"},[r("img",{staticClass:"img-thumbnail github",attrs:{src:"/linkedin.png"}}),t._v(" "),r("h5",{staticClass:"name"},[t._v("Linkedin")])])])])])}],!1,null,"02b6cd11",null);e.default=component.exports},105:function(t,e,r){"use strict";r.r(e);var o=r(0),n=r(238),l=o.a.extend({data:function(){return{projectsLoaded:!1,projects:n.projects}}}),c=(r(239),r(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"sections",attrs:{id:"projects"}},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},t._l(t.projects,(function(t){return r("Project",{key:t.id,attrs:{project:t}})})),1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("h2",{staticClass:"col section-title"},[t._v("Projects")]),t._v(" "),r("p",{staticClass:"section-subtitle"},[t._v("\n        Experience is the mother of wisdom and I think most of the experiences\n        for developers comes from different project. These are some projects I\n        had oportunity to worked on.\n      ")])])}],!1,null,"cf051344",null);e.default=component.exports;installComponents(component,{Project:r(93).default})},106:function(t,e,r){"use strict";r.r(e);r(222);var o=r(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"about-me"}},[r("MyParticles"),t._v(" "),r("div",{staticClass:"row",attrs:{id:"content"}},[r("div",{staticClass:"col-lg-6 offset-3"},[r("div",{staticClass:"card shadow-lg"},[r("div",{staticClass:"card-body row"},[r("h2",[t._v("Basic Info")]),t._v(" "),r("div",{staticClass:"basic-info row mb-5"},[r("div",{staticClass:"col-12 row"},[r("BasicInfo",{attrs:{title:"Age",value:"27"}}),t._v(" "),r("BasicInfo",{attrs:{title:"Curent Location",value:"Ostrava, Czech Republic"}}),t._v(" "),r("BasicInfo",{attrs:{title:"Alma mater",value:"VSB - Technical University of Ostrava"}}),t._v(" "),r("BasicInfo",{attrs:{title:"Company",value:"SDE Software solutions"}})],1)]),t._v(" "),r("h2",[t._v("Technologies")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("i",[t._v("\n              I do prefer to work on backend in .Net, but if project requires\n              it, I can work with different technologies on both frontend and\n              backend. From my studies I do have a background in data science\n              and analysis. Except coding skills I am interested in software\n              and system architectures.\n            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-4 technologies"},[r("h5",[t._v("Frontend")]),t._v(" "),r("ul",[r("li",[t._v("Vue js")]),t._v(" "),r("li",[t._v("React")]),t._v(" "),r("li",[t._v("Next")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-4 technologies"},[r("h5",[t._v("Backend")]),t._v(" "),r("ul",[r("li",[t._v("C#")]),t._v(" "),r("li",[t._v(".Net")]),t._v(" "),r("li",[t._v("Php")]),t._v(" "),r("li",[t._v("Laravel")]),t._v(" "),r("li",[t._v("Symfony")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-4 technologies"},[r("h5",[t._v("Data")]),t._v(" "),r("ul",[r("li",[t._v("R")]),t._v(" "),r("li",[t._v("Python")]),t._v(" "),r("li",[t._v("Graph theory")])])])}],!1,null,"ae43b0da",null);e.default=component.exports;installComponents(component,{MyParticles:r(94).default,BasicInfo:r(91).default})},107:function(t,e,r){"use strict";r.r(e);r(234);var o=r(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("nav",{staticClass:"navbar navbar-expand-lg fixed-top"},[r("div",{staticClass:"container-fluid"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Jakub Plesník")]),t._v(" "),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[r("div",{staticClass:"navbar-nav ms-auto"},[r("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#Home"}},[t._v("Home")]),t._v(" "),r("a",{staticClass:"nav-link",attrs:{href:"#About"}},[t._v("About me")]),t._v(" "),r("a",{staticClass:"nav-link",attrs:{href:"#Projects"}},[t._v("Projects")]),t._v(" "),r("a",{staticClass:"nav-link",attrs:{href:"#Contact"}},[t._v("Contact")])])])])])])}],!1,null,"6ee80914",null);e.default=component.exports},108:function(t,e,r){"use strict";r.r(e);var o=r(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1",crossorigin:"anonymous"}}),t._v(" "),r("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",integrity:"sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW",crossorigin:"anonymous"}})])}],!1,null,null,null);e.default=component.exports},135:function(t,e,r){var content=r(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("56b15182",content,!0,{sourceMap:!1})},136:function(t,e,r){var content=r(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("1777630d",content,!0,{sourceMap:!1})},137:function(t,e,r){var content=r(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("1cc99358",content,!0,{sourceMap:!1})},138:function(t,e,r){var content=r(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("098018a3",content,!0,{sourceMap:!1})},139:function(t,e,r){var content=r(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("44b109c2",content,!0,{sourceMap:!1})},140:function(t,e,r){var content=r(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("653dd630",content,!0,{sourceMap:!1})},141:function(t,e,r){var content=r(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("1930a9a0",content,!0,{sourceMap:!1})},142:function(t,e,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("07b1c57f",content,!0,{sourceMap:!1})},143:function(t,e,r){var content=r(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("aeb8b43a",content,!0,{sourceMap:!1})},144:function(t,e,r){var content=r(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("0e770a0a",content,!0,{sourceMap:!1})},163:function(t,e,r){"use strict";r.r(e);r(232);var o=r(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),r("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),r("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},172:function(t,e,r){"use strict";r(220);var o=r(2),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},176:function(t,e,r){r(177),t.exports=r(178)},220:function(t,e,r){"use strict";r(135)},221:function(t,e,r){var o=r(10)(!1);o.push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}:root{--primary-bg-color:#121212;--primary-paper-color:#313131;--primary-color:#ef6c00;--primary-color-light:#ff9d3f;--primary-color-dark:#b53d00;--secondary-color:#039be5;--secondary-color-light:#63ccff;--secondary-color-dark:#006db3;--primary-text-color:hsla(0,0%,100%,0.87);--secondary-text-color:hsla(0,0%,100%,0.6);--disabled-text-color:hsla(0,0%,100%,0.38)}h1,h2,h3,h4,h5{color:#ef6c00;color:var(--primary-color)}',""]),t.exports=o},222:function(t,e,r){"use strict";r(136)},223:function(t,e,r){var o=r(10)(!1);o.push([t.i,".label[data-v-ae43b0da]{display:inline-block;width:50px}.technologies ul[data-v-ae43b0da]{list-style:none}.card[data-v-ae43b0da]{border-radius:0;background:rgba(33,37,41,.66667);color:var(--primary-text-color);padding:3rem}#about-me[data-v-ae43b0da]{position:relative}#content[data-v-ae43b0da]{z-index:1000;position:absolute;margin:auto;top:10%;width:100%}",""]),t.exports=o},224:function(t,e,r){"use strict";r(137)},225:function(t,e,r){var o=r(10)(!1);o.push([t.i,".site-footer[data-v-54685a0f]{scroll-snap-align:end}",""]),t.exports=o},226:function(t,e,r){"use strict";r(138)},227:function(t,e,r){var o=r(10)(!1);o.push([t.i,".technologies span[data-v-18df01fb]{margin:3px}.card[data-v-18df01fb]{background:var(--primary-paper-color);color:var(--primary-text-color);height:100%}.card-text[data-v-18df01fb]{text-align:justify;color:var(--secondary-text-color)}.card-img-top[data-v-18df01fb]{max-height:200px;-o-object-fit:fill;object-fit:fill}.card .card-title[data-v-18df01fb]{color:var(--primary-contrast-color)}.btn-dark[data-v-18df01fb]{background:var(--secondary-color-dark)!important}h5[data-v-18df01fb]{margin-bottom:0;margin-top:1.25rem}",""]),t.exports=o},228:function(t,e,r){"use strict";r(139)},229:function(t,e,r){var o=r(10)(!1);o.push([t.i,".site-footer[data-v-71de00e8]{scroll-snap-align:end}",""]),t.exports=o},230:function(t,e,r){"use strict";r(140)},231:function(t,e,r){var o=r(10)(!1);o.push([t.i,"h5.name[data-v-02b6cd11]{color:#fff}.github[data-v-02b6cd11]{background:transparent;border:none}.slide-fade-enter-active[data-v-02b6cd11]{transition:all .5s ease}.slide-fade-leave-active[data-v-02b6cd11]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-02b6cd11],.slide-fade-leave-to[data-v-02b6cd11]{transform:translateX(10px);opacity:0}.jobs[data-v-02b6cd11]{font-weight:700;color:var(--primary-color)}.intro-text[data-v-02b6cd11]{color:var(--primary-text-color);font-size:1.5rem}.intro-text[data-v-02b6cd11],.paragraph-text[data-v-02b6cd11]{font-family:Roboto,sans-serif;text-align:left;margin-left:25%;margin-right:10%}.paragraph-text[data-v-02b6cd11]{color:var(--disabled-text-color);font-size:1rem;max-width:40%}.hello-text[data-v-02b6cd11]{color:var(--primary-text-color);font-size:4rem;font-family:Roboto,sans-serif;text-align:left;margin-left:25%;margin-right:10%}",""]),t.exports=o},232:function(t,e,r){"use strict";r(141)},233:function(t,e,r){var o=r(10)(!1);o.push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=o},234:function(t,e,r){"use strict";r(142)},235:function(t,e,r){var o=r(10)(!1);o.push([t.i,".navbar-brand[data-v-6ee80914]{color:var(--primary-text-color)}.navbar[data-v-6ee80914]{background:var(--primary-color)!important}.nav-link[data-v-6ee80914]{color:var(--primary-text-color)}.nav-link.active[data-v-6ee80914]{font-weight:700}",""]),t.exports=o},236:function(t,e,r){"use strict";r(143)},237:function(t,e,r){var o=r(10)(!1);o.push([t.i,".technologies span[data-v-7514983c]{margin:3px}.card[data-v-7514983c]{background:var(--primary-paper-color);color:var(--primary-text-color);height:100%}.card-text[data-v-7514983c]{text-align:justify;color:var(--secondary-text-color)}.card-img-top[data-v-7514983c]{max-height:200px;-o-object-fit:fill;object-fit:fill}.card .card-title[data-v-7514983c]{color:var(--primary-contrast-color)}.btn-dark[data-v-7514983c]{background:var(--secondary-color-dark)!important}h5[data-v-7514983c]{margin-bottom:0;margin-top:1.25rem}",""]),t.exports=o},238:function(t){t.exports=JSON.parse('{"projects":[{"id":3,"title":"Throughline","subtitle":"Nimblestory","image":"/images/throughline.png","description":"NimbleStory is a software platform that is centered around delivering Visual Insights. This nimble, flexible and expandable system enables quick integration through the use of modules. Modules provide powerful building blocks that can be customized to create a singular visual solution","technologies":["PHP","Symfony","Next js","Pimcore"],"links":[{"name":"github","link":"github"}]},{"id":3,"title":"Zubon","subtitle":"Unique marketplace","image":"/images/zubon.png","description":"Application that creates place for trading in new anonymous and secure way. Allows customers to sell or buy property with minimal commision.","technologies":["PHP","Laravel","Vue js","MySQL"],"links":[{"name":"github","link":"github"}]},{"id":1,"title":"Tieto","subtitle":"Datahub message handler","image":"/images/tieto.png","description":"In team of 10+ people I was working on large scale solution that implemented system message generation and processing for communication with Datahub. Datahub is a centralised information exchange system, the data stored therein will be accessed by approximately 100 electricity suppliers and over 80 DSOs responsible for the transmission of electricity in Finland. ","technologies":["C#",".Net Core",".Net Framework","MSSQL"],"links":[{"name":"Datahub","link":"https://www.fingrid.fi/en/electricity-market/datahub/"}]},{"id":2,"title":"Ose","subtitle":"Car monitoring and security","image":"/images/ose.png","description":"test test test","technologies":["C#",".Net Core","Angular","MSSQL"],"links":[{"name":"github","link":"github"}]},{"id":3,"title":"SaS","subtitle":"Customer Inteligence","image":"/images/c360.png","description":"test test test","technologies":["OpenUI","JavaScript"],"links":[{"name":"github","link":"github"}]},{"id":4,"title":"Go2Go","subtitle":"Platform for coaches and athletes","image":"/images/go2go.png","description":"test test test","technologies":["PHP","Laravel","Vue js","MySQL"],"links":[{"name":"github","link":"github"}]},{"id":5,"title":"FloLogic","subtitle":"Premium water leak control system","image":"/images/flologic.png","description":"One of my first profesional projects. I was working on UI and bussiness logic for mobile application writen in Xamarin targeting both Android and iOs. Great experiance for start of my carier.","technologies":[".Net","Xaml","Xamarin","MSSQL","Azure"],"links":[{"name":"github","link":"github"}]},{"id":5,"title":"Cybersoft","subtitle":"Ecomerce paltform and eshops","image":"/images/i6.jpg","description":"Cybersofrt provides ecomerce solution for various customers and I had an oportunity to work on redesign and new features for theirs eshops.","technologies":["ASP","HTML","CSS","JS","MSSQL"],"links":[{"name":"github","link":"github"}]}]}')},239:function(t,e,r){"use strict";r(144)},240:function(t,e,r){var o=r(10)(!1);o.push([t.i,"h2.section-title[data-v-cf051344]{color:var(--primary-text-color)!important}p.section-subtitle[data-v-cf051344]{color:var(--secondary-text-color)!important}",""]),t.exports=o},69:function(t,e,r){"use strict";r.r(e);r(228);var o=r(2),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"site-footer",attrs:{id:"connect"}},[r("div",{staticClass:"container"},[r("hr"),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 col-md-6"},[r("h6",[t._v("About")]),t._v(" "),r("p",{staticClass:"text-justify"},[t._v("\n          Made with "),r("i",{staticClass:"fa fa-heart"}),t._v(" using HTML, CSS, Javascript,\n          Bootstrap, Fontawesome and particles.js.\n        ")])]),t._v(" "),r("div",{staticClass:"d-flex align-items-start flex-column col-sm-12 col-md-6"},[r("h6",{staticClass:"ml-md-5 ml-sm-0 mb-sm-5"},[t._v("Connect")]),t._v(" "),r("div",[r("ul",{staticClass:"social-icons"},[r("li",[r("a",{staticClass:"linkedin",attrs:{href:"https://www.linkedin.com/in/rajeevsinghnaruka/",target:"_blank"}},[r("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),r("li",[r("a",{staticClass:"github",attrs:{href:"https://github.com/toughyear",target:"_blank"}},[r("i",{staticClass:"fa fa-github"})])]),t._v(" "),r("li",[r("a",{staticClass:"codepen",attrs:{href:"https://codepen.io/toughyear",target:"_blank"}},[r("i",{staticClass:"fa fa-codepen"})])]),t._v(" "),r("li",[r("a",{staticClass:"behance",attrs:{href:"https://www.behance.net/toughyear",target:"_blank"}},[r("i",{staticClass:"fa fa-behance"})])]),t._v(" "),r("li",[r("a",{staticClass:"codeforces",attrs:{href:"https://codeforces.com/profile/toughyear",target:"_blank"}},[r("i",{staticClass:"fa fa-code"})])]),t._v(" "),r("li",[r("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/RajeevSinghN",target:"_blank"}},[r("i",{staticClass:"fa fa-twitter"})])])])])])]),t._v(" "),r("hr")])])}],!1,null,"71de00e8",null);e.default=component.exports;installComponents(component,{Footer:r(69).default})},91:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({props:{title:{type:String,default:""},value:{type:String,default:""}}}),n=r(2),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-6 mb-3"},[r("h5",[t._v(t._s(t.title))]),t._v(" "),r("span",[t._v(t._s(t.value))])])}),[],!1,null,null,null);e.default=component.exports},92:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({props:{article:{type:Object,required:!0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en")}}}),n=(r(226),r(2)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 pb-4"},[r("div",{staticClass:"card shadow-lg"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-title"},[r("NuxtLink",{attrs:{to:{name:"blog-slug",params:{slug:t.article.slug}}}},[r("h5",[t._v(t._s(t.article.title))])])],1),t._v(" "),r("p",[t._v(t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("\n        "+t._s(t.article.description)+"\n      ")])])])])}),[],!1,null,"18df01fb",null);e.default=component.exports},93:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({props:{project:{type:Object,required:!0}}}),n=(r(236),r(2)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-4 col-md-6 col-sm-12 pb-4"},[r("div",{staticClass:"card shadow-lg"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"card-title"},[r("h5",[t._v(t._s(t.project.title))]),t._v(" "),r("span",[r("i",[t._v(t._s(t.project.subtitle))])])]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("\n        "+t._s(t.project.description)+"\n      ")]),t._v(" "),r("p",{staticClass:"card-text"},[r("small",{staticClass:"text-muted technologies"},t._l(t.project.technologies,(function(e){return r("span",{key:e,staticClass:"btn-sm btn-dark"},[t._v(t._s(e))])})),0)])])])])}),[],!1,null,"7514983c",null);e.default=component.exports},94:function(t,e,r){"use strict";r.r(e);var o=r(2),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("Particles",{attrs:{id:"tsparticles",options:{background:{color:{value:"#121212"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!1,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!1,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}})}),[],!1,null,null,null);e.default=component.exports}},[[176,4,1,5]]]);