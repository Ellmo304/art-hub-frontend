"use strict";function Auth(e,r){e.loginUrl=r+"/login",e.signupUrl=r+"/register",e.tokenPrefix=""}function RegisterController(e,r){function l(){e.signup(t.user).then(function(){r.go("login")})}var t=this;t.user={},t.submit=l}function LoginController(e,r){function l(){e.login(t.credentials).then(function(){r.go("usersIndex")})}var t=this;t.credentials={},t.submit=l}function GalleriesNewController(e,r){function l(){e.save(t.gallery,function(){r.go("galleriesIndex")})}var t=this;t.gallery={},t.create=l}function GalleriesIndexController(e){var r=this;r.all=e.query()}function GalleriesShowController(e,r,l){function t(){o.gallery.$remove(function(){r.go("galleriesIndex")})}var o=this;o.gallery=e.get(r.params),o.deleteGallery=t}function GalleriesEditController(e,r,l){function t(){o.gallery.$update(function(){r.go("galleriesShow",r.params)})}var o=this;o.gallery=e.get(r.params),o.update=t}function Gallery(e,r){return new e(r+"/galleries/:id",{id:"@id"},{update:{method:"PUT"}})}function MainController(e,r,l){function t(){e.logout().then(function(){r.go("usersIndex")})}function o(l,t){var o=e.getPayload();o&&(n.isCurrentUser=e.getPayload().id),!e.isAuthenticated()&&s.includes(t.name)&&(l.preventDefault(),r.go("login"))}var n=this;n.isLoggedIn=e.isAuthenticated,n.message=null;var s=["usersEdit"];l.$on("$stateChangeStart",o),n.logout=t}function Router(e,r){e.state("usersIndex",{url:"/users",templateUrl:"/templates/users/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("usersShow",{url:"/users/:id",templateUrl:"/templates/users/usersShow.html",controller:"UsersShowController as usersShow"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"/templates/users/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("galleriesNew",{url:"/galleries/new",templateUrl:"/templates/galleries/galleriesNew.html",controller:"GalleriesNewController as galleriesNew"}).state("galleriesIndex",{url:"/galleries",templateUrl:"/templates/galleries/galleriesIndex.html",controller:"GalleriesIndexController as galleriesIndex"}).state("galleriesShow",{url:"/galleries/:id",templateUrl:"/templates/galleries/galleriesShow.html",controller:"GalleriesShowController as galleriesShow"}).state("galleriesEdit",{url:"/galleries/:id/edit",templateUrl:"/templates/galleries/galleriesEdit.html",controller:"GalleriesEditController as galleriesEdit"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"templates/login.html",controller:"LoginController as login"}),r.otherwise("/users")}function User(e,r){return new e(r+"/users/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e){var r=this;r.all=e.query()}function UsersShowController(e,r,l){function t(){n.user.$remove(function(){r.go("usersIndex")})}function o(){return l.getPayload().id===Number(r.params.id)}var n=this;n.isLoggedIn=l.isAuthenticated,n.user=e.get(r.params),n.isCurrentUser=o,n.deleteUser=t}function UsersEditController(e,r,l){function t(){o.user.$update(function(){r.go("usersShow",r.params)})}var o=this;o.user=e.get(r.params),e.get(r.params,function(e){o.user=e,o.user.id!==l.getPayload().id&&r.go("login")}),o.update=t}angular.module("artHub",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("artHub").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("artHub").controller("GalleriesNewController",GalleriesNewController).controller("GalleriesIndexController",GalleriesIndexController).controller("GalleriesShowController",GalleriesShowController).controller("GalleriesEditController",GalleriesEditController),GalleriesNewController.$inject=["Gallery","$state"],GalleriesIndexController.$inject=["Gallery"],GalleriesShowController.$inject=["Gallery","$state","$auth"],GalleriesEditController.$inject=["Gallery","$state","$auth"],angular.module("artHub").factory("Gallery",Gallery),Gallery.$inject=["$resource","API_URL"],angular.module("artHub").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"],angular.module("artHub").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("artHub").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("artHub").controller("UsersIndexController",UsersIndexController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersShowController.$inject=["User","$state","$auth"],UsersEditController.$inject=["User","$state","$auth"];
//# sourceMappingURL=app.js.map
