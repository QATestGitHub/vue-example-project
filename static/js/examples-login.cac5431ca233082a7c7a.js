webpackJsonp([0],{EBej:function(t,a,e){"use strict";var s=e("n2XO");a.a={name:"login",data:function(){return{credentials:{username:"demouser",password:"testpass"},error:"",isLoading:!1}},methods:{logout:function(){s.a.logout()},submit:function(){this.isLoading=!0;var t={username:this.credentials.username,password:this.credentials.password};s.a.login(t,"intro",function(t){var a=t.isSuccess,e=(t.data,t.errorMessage);a||console.log(e)})}}}},Hphx:function(t,a,e){"use strict";a.a={name:"login-page",data:function(){return{}},methods:{}}},KEQ6:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hero is-fullheight is-primary"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-one-third"},[t._m(0),e("div",{staticClass:"is-clearfix"}),e("div",{staticClass:"my-subtitle",staticStyle:{"padding-top":"15px","padding-bottom":"15px"}},[t._v("Start your project off with a boost.")]),e("div",{staticClass:"card"},[e("div",{staticClass:"card-content has-text-left"},[t._m(1),e("b-field",{attrs:{label:"Email"}},[e("b-input",{attrs:{type:"text",icon:"email"},nativeOn:{click:function(a){t.logout()}},model:{value:t.credentials.username,callback:function(a){t.credentials.username=a},expression:"credentials.username"}})],1),e("b-field",{attrs:{label:"Password"}},[e("b-input",{attrs:{type:"password",icon:"vpn_key","password-reveal":"password-reveal"},model:{value:t.credentials.password,callback:function(a){t.credentials.password=a},expression:"credentials.password"}})],1),e("a",{staticClass:"button is-secondary is-fullwidth",class:{"is-loading":t.isLoading},on:{click:t.submit}},[t._v("Sign In")])],1)])])])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"my-logo"},[s("img",{attrs:{src:e("zxL1"),alt:"Vue Example Project"}}),s("div",[t._v("Vue Example")]),s("div",{staticClass:"my-spacer"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h1",{staticClass:"title has-text-dark has-text-centered"},[s("img",{staticClass:"app-avatar",attrs:{src:e("+rrE"),alt:"Avatar"}})])}],n={render:s,staticRenderFns:i};a.a=n},MQjO:function(t,a,e){"use strict";function s(t){e("lIE/")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("EBej"),n=e("KEQ6"),r=e("VU/8"),c=s,o=r(i.a,n.a,c,"data-v-4a9d9a5d",null);a.default=o.exports},NC5C:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"subtitle"},[t._v(" Here's some examples of how to perform an OAuth2 login and authentication with\nsome popular backends. ")]),e("br"),e("div",{staticClass:"columns is-desktop"},[e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[t._m(0),t._m(1),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"app-v-spacer is-hidden-touch"}),e("div",{staticClass:"button is-white has-text-primary app-margin-auto"},[e("router-link",{attrs:{to:{name:"login"}}},[t._v("Check it out ")])],1)])]),e("br"),e("div",{staticClass:"card"},[t._m(2),t._m(3),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"app-v-spacer is-hidden-touch"}),e("div",{staticClass:"button is-white has-text-primary app-margin-auto"},[e("router-link",{attrs:{to:{name:"login-live"}}},[t._v("Check it out ")])],1)])]),e("br"),t._m(4)]),t._m(5)])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("Dummy/Fake Login")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t._v("This is the default login set for the App when you first clone/download it.\nIt will perform a setTimeout to simulate processing and then it will add \na fake "),e("code",[t._v("access_token")]),t._v(" and "),e("code",[t._v("refresh_token")]),t._v(" so that you can access private routes/pages. Of course, there is no demonstration\nof access to data\nfrom a private backend server since the tokens are fake.")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("Live Online Demo Login")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t._v("Connects to a live OAuth2 server here: "),e("a",{attrs:{href:"http://brentertainment.com/oauth2"}},[t._v("http://brentertainment.com/oauth2")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("Express (Node) Login")])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t._v("Work in progess...")])]),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"app-v-spacer is-hidden-touch"}),e("div",{staticClass:"button is-white has-text-grey app-margin-auto",attrs:{disabled:"disabled"}},[e("span",[t._v("Check it out")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("Spring Auth (Java) Login")])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t._v("Work in progess...")])]),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"app-v-spacer is-hidden-touch"}),e("div",{staticClass:"button is-white has-text-grey app-margin-auto",attrs:{disabled:"disabled"}},[e("span",[t._v("Check it out")])])])]),e("br"),e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("Laravel Passport (PHP) Login")])]),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t._v("Work in progess...")])]),e("div",{staticClass:"card-footer"},[e("div",{staticClass:"app-v-spacer is-hidden-touch"}),e("div",{staticClass:"button is-white has-text-grey app-margin-auto",attrs:{disabled:"disabled"}},[e("span",[t._v("Check it out")])])])])])}],n={render:s,staticRenderFns:i};a.a=n},f3z5:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,"#app .my-logo[data-v-4a9d9a5d]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}#app .my-logo img[data-v-4a9d9a5d]{height:10vh}#app .my-logo div[data-v-4a9d9a5d]{display:inline;white-space:nowrap;font-size:5vh;font-weight:800}#app .my-logo .my-spacer[data-v-4a9d9a5d]{width:10vh}","",{version:3,sources:["/home/david/projects/code/vue-example-project/src/examples/login/live-page.vue"],names:[],mappings:"AACA,+BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,WAAY,AACZ,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,mCACE,WAAa,CACd,AACD,mCACE,eAAgB,AAChB,mBAAoB,AACpB,cAAe,AACf,eAAiB,CAClB,AACD,0CACE,UAAY,CACb",file:"live-page.vue",sourcesContent:["\n#app .my-logo[data-v-4a9d9a5d] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#app .my-logo img[data-v-4a9d9a5d] {\n  height: 10vh;\n}\n#app .my-logo div[data-v-4a9d9a5d] {\n  display: inline;\n  white-space: nowrap;\n  font-size: 5vh;\n  font-weight: 800;\n}\n#app .my-logo .my-spacer[data-v-4a9d9a5d] {\n  width: 10vh;\n}"],sourceRoot:""}])},kukp:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Hphx"),i=e("NC5C"),n=e("VU/8"),r=n(s.a,i.a,null,null,null);a.default=r.exports},"lIE/":function(t,a,e){var s=e("f3z5");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("d39f2324",s,!0)}});
//# sourceMappingURL=examples-login.cac5431ca233082a7c7a.js.map