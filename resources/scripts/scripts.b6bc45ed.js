"use strict";angular.module("answer1991.github.io",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","ngMarkdown","answer1991.github.io.core","answer1991.github.io.common","answer1991.github.io.pages","answer1991.github.io.tpls"]).config(["$urlRouterProvider",function(a){a.when("","/"),a.when("/","/")}]),angular.module("answer1991.github.io.core",["answer1991.github.io.core.remote"]),angular.module("answer1991.github.io.core.remote",[]).provider("httpWrapper",function(){var a="";this.setUrl=function(b){a=b},this.$get=["$http","$q",function(b,c){return{getBaseUrl:function(){return a},get:function(d,e){return b({method:"GET",url:a+d,params:e}).then(function(a){return a.data},function(a){return a.data?c.reject(a.data):c.reject("query error, url: "+d+", status code : "+a.status)})},post:function(d,e,f){return b({method:"POST",url:a+d,data:f,headers:{"Content-Type":"application/json"},params:e}).then(function(a){return a.data},function(a){return a.data?c.reject(a.data):c.reject("post error, url: "+d+", status code : "+a.status)})}}}]}),angular.module("answer1991.github.io.common",["answer1991.github.io.common.layout"]),angular.module("answer1991.github.io.common.layout",["answer1991.github.io.common.layout.default"]).config(["$stateProvider",function(a){a.state("layout",{"abstract":!0,templateUrl:"modules/common/layout/layout.html"})}]),angular.module("answer1991.github.io.common.layout.default",[]).config(["$stateProvider",function(a){a.state("layout.default",{"abstract":!0,templateUrl:"modules/common/layout/default/default.html",resolve:{directories:["httpWrapper",function(a){return a.get("_posts/index.json").then(function(a){return a.directories})}],pathTitleMap:["httpWrapper",function(a){return a.get("_posts/config.json").then(function(a){return a.pathTitleMap||{}},function(){return{}})}],navs:["directories","pathTitleMap",function(a,b){return _.map(a,function(a){return{path:a,title:b[a]||a}})}]},controller:["$scope","navs",function(a,b){a.navs=b}]})}]),angular.module("answer1991.github.io.pages",["answer1991.github.io.pages.index","answer1991.github.io.pages.posts"]).config(["$stateProvider",function(a){a.state("pages",{parent:"layout.default",template:"<div ui-view></div>"})}]),angular.module("answer1991.github.io.pages.index",[]).config(["$stateProvider",function(a){a.state("pages.index",{url:"/",templateUrl:"modules/pages/index/index.html"})}]),angular.module("answer1991.github.io.pages.posts",[]).config(["$stateProvider",function(a){a.state("pages.posts",{url:"/{path}","abstract":!0,template:"<div ui-view></div>"})}]),angular.module("answer1991.github.io.pages.posts").config(["$stateProvider",function(a){a.state("pages.posts.list",{url:"/list",templateUrl:"modules/pages/posts/list/list.html",resolve:{posts:["httpWrapper","$stateParams",function(a,b){return a.get("_posts/"+b.path+"/index.json").then(function(a){return a.files}).then(function(a){return a})}]},controller:["$scope","posts",function(a,b){a.posts=b}]})}]),angular.module("answer1991.github.io.pages.posts").config(["$stateProvider",function(a){a.state("pages.posts.view",{url:"/view/{file}",templateUrl:"modules/pages/posts/view/view.html",resolve:{file:["httpWrapper","$stateParams",function(a,b){return a.get("_posts/"+b.path+"/"+b.file).then(function(a){return a})}]},controller:["$scope","file",function(a,b){a.file=b}]})}]);