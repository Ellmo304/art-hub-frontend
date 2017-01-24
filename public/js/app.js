"use strict";function Auth(e,t){e.loginUrl=t+"/login",e.signupUrl=t+"/register",e.tokenPrefix=""}function RegisterController(e,t){function r(){e.signup(l.user).then(function(){t.go("login")})}var l=this;l.user={},l.submit=r}function LoginController(e,t){function r(){e.login(l.credentials).then(function(){t.go("usersIndex")})}var l=this;l.credentials={},l.submit=r}function Exhibition(e,t){return new e(t+"/exhibitions/:id",{id:"@id"},{update:{method:"PUT"}})}function ExhibitionsNewController(e,t,r){function l(){console.log(i.exhibition),e.save(i.exhibition,function(){r.go("exhibitionsIndex")})}var i=this;i.exhibition={},i.galleriesAll=t.query(),i.create=l}function ExhibitionsIndexController(e){var t=this;t.all=e.query()}function ExhibitionsShowController(e,t,r){function l(){i.exhibition.$remove(function(){t.go("exhibitionsIndex")})}var i=this;i.exhibition=e.get(t.params),i.deleteExhibition=l}function ExhibitionsEditController(e,t,r,l){function i(){o.exhibition.$update(function(){r.go("exhibitionsShow",r.params)})}var o=this;o.exhibition=e.get(r.params),o.galleriesAll=t.query(),o.update=i}function GalleriesNewController(e,t){function r(){e.save(l.gallery,function(){t.go("galleriesIndex")})}var l=this;l.gallery={},l.create=r}function GalleriesIndexController(e){var t=this;t.all=e.query()}function GalleriesShowController(e,t,r){function l(){i.gallery.$remove(function(){t.go("galleriesIndex")})}var i=this;i.gallery=e.get(t.params),i.deleteGallery=l}function GalleriesEditController(e,t,r){function l(){i.gallery.$update(function(){t.go("galleriesShow",t.params)})}var i=this;i.gallery=e.get(t.params),i.update=l}function Gallery(e,t){return new e(t+"/galleries/:id",{id:"@id"},{update:{method:"PUT"}})}function MainController(e,t,r){function l(){e.logout().then(function(){t.go("usersIndex")})}function i(r,l){var i=e.getPayload();i&&(o.isCurrentUser=e.getPayload().id),!e.isAuthenticated()&&n.includes(l.name)&&(r.preventDefault(),t.go("login"))}var o=this;o.isLoggedIn=e.isAuthenticated,o.message=null;var n=["usersEdit"];r.$on("$stateChangeStart",i),o.logout=l}function Review(e,t){return new e(t+"/reviews/:id",{id:"@id"},{update:{method:"PUT"}})}function ReviewsNewController(e,t,r,l){function i(){e.save(o.review,function(){r.go("reviewsIndex")})}var o=this;o.review={},o.review.user_id=l.getPayload().id,o.review.exhibition_id=r.params.id,o.exhibitionsAll=t.query(),o.create=i}function ReviewsIndexController(e){var t=this;t.all=e.query()}function ReviewsShowController(e,t,r){function l(){i.review.$remove(function(){t.go("reviewsIndex")})}var i=this;i.review=e.get(t.params),i.deleteReview=l}function ReviewsEditController(e,t,r,l){function i(){o.review.$update(function(){r.go("reviewsShow",r.params)})}var o=this;o.review=e.get(r.params),o.exhibitionsAll=t.query(),o.update=i}function Router(e,t){e.state("home",{url:"/",templateUrl:"/templates/home.html"}).state("usersIndex",{url:"/users",templateUrl:"/templates/users/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("usersShow",{url:"/users/:id",templateUrl:"/templates/users/usersShow.html",controller:"UsersShowController as usersShow"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"/templates/users/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("galleriesNew",{url:"/galleries/new",templateUrl:"/templates/galleries/galleriesNew.html",controller:"GalleriesNewController as galleriesNew"}).state("galleriesIndex",{url:"/galleries",templateUrl:"/templates/galleries/galleriesIndex.html",controller:"GalleriesIndexController as galleriesIndex"}).state("galleriesShow",{url:"/galleries/:id",templateUrl:"/templates/galleries/galleriesShow.html",controller:"GalleriesShowController as galleriesShow"}).state("galleriesEdit",{url:"/galleries/:id/edit",templateUrl:"/templates/galleries/galleriesEdit.html",controller:"GalleriesEditController as galleriesEdit"}).state("exhibitionsNew",{url:"/exhibitions/new",templateUrl:"/templates/exhibitions/exhibitionsNew.html",controller:"ExhibitionsNewController as exhibitionsNew"}).state("exhibitionsIndex",{url:"/exhibitions",templateUrl:"/templates/exhibitions/exhibitionsIndex.html",controller:"ExhibitionsIndexController as exhibitionsIndex"}).state("exhibitionsShow",{url:"/exhibitions/:id",templateUrl:"/templates/exhibitions/exhibitionsShow.html"}).state("exhibitionsEdit",{url:"/exhibitions/:id/edit",templateUrl:"/templates/exhibitions/exhibitionsEdit.html",controller:"ExhibitionsEditController as exhibitionsEdit"}).state("reviewsNew",{url:"/reviews/new",templateUrl:"/templates/reviews/reviewsNew.html",controller:"ReviewsNewController as reviewsNew"}).state("reviewsIndex",{url:"/reviews",templateUrl:"/templates/reviews/reviewsIndex.html",controller:"ReviewsIndexController as reviewsIndex"}).state("reviewsShow",{url:"/reviews/:id",templateUrl:"/templates/reviews/reviewsShow.html",controller:"ReviewsShowController as reviewsShow"}).state("reviewsEdit",{url:"/reviews/:id/edit",templateUrl:"/templates/reviews/reviewsEdit.html",controller:"ReviewsEditController as reviewsEdit"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"templates/login.html",controller:"LoginController as login"}),t.otherwise("/")}function User(e,t){return new e(t+"/users/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e){var t=this;t.all=e.query()}function UsersShowController(e,t,r){function l(){o.user.$remove(function(){t.go("usersIndex")})}function i(){return r.getPayload().id===Number(t.params.id)}var o=this;o.isLoggedIn=r.isAuthenticated,o.user=e.get(t.params),o.isCurrentUser=i,o.deleteUser=l}function UsersEditController(e,t,r){function l(){i.user.$update(function(){t.go("usersShow",t.params)})}var i=this;i.user=e.get(t.params),e.get(t.params,function(e){i.user=e,i.user.id!==r.getPayload().id&&t.go("login")}),i.update=l}angular.module("artHub",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("artHub").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("artHub").factory("Exhibition",Exhibition),Exhibition.$inject=["$resource","API_URL"],angular.module("artHub").controller("ExhibitionsNewController",ExhibitionsNewController).controller("ExhibitionsIndexController",ExhibitionsIndexController).controller("ExhibitionsShowController",ExhibitionsShowController).controller("ExhibitionsEditController",ExhibitionsEditController),ExhibitionsNewController.$inject=["Exhibition","Gallery","$state"],ExhibitionsIndexController.$inject=["Exhibition"],ExhibitionsShowController.$inject=["Exhibition","$state","$auth"],ExhibitionsEditController.$inject=["Exhibition","Gallery","$state","$auth"],angular.module("artHub").controller("GalleriesNewController",GalleriesNewController).controller("GalleriesIndexController",GalleriesIndexController).controller("GalleriesShowController",GalleriesShowController).controller("GalleriesEditController",GalleriesEditController),GalleriesNewController.$inject=["Gallery","$state"],GalleriesIndexController.$inject=["Gallery"],GalleriesShowController.$inject=["Gallery","$state","$auth"],GalleriesEditController.$inject=["Gallery","$state","$auth"],angular.module("artHub").factory("Gallery",Gallery),Gallery.$inject=["$resource","API_URL"],angular.module("artHub").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"],angular.module("artHub").factory("Review",Review),Review.$inject=["$resource","API_URL"],angular.module("artHub").controller("ReviewsNewController",ReviewsNewController).controller("ReviewsIndexController",ReviewsIndexController).controller("ReviewsShowController",ReviewsShowController).controller("ReviewsEditController",ReviewsEditController),ReviewsNewController.$inject=["Review","Exhibition","$state","$auth"],ReviewsIndexController.$inject=["Review"],ReviewsShowController.$inject=["Review","$state","$auth"],ReviewsEditController.$inject=["Review","Exhibition","$state","$auth"],angular.module("artHub").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("artHub").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("artHub").controller("UsersIndexController",UsersIndexController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersShowController.$inject=["User","$state","$auth"],UsersEditController.$inject=["User","$state","$auth"];
//# sourceMappingURL=app.js.map
