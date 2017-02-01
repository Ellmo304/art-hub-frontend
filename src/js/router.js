angular.module('artHub')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/templates/home.html'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/templates/users/usersIndex.html',
    controller: 'UsersIndexController as usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/templates/users/usersShow.html',
    controller: 'UsersShowController as usersShow'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/templates/users/usersEdit.html',
    controller: 'UsersEditController as usersEdit'
  })
  .state('galleriesNew', {
    url: '/galleries/new',
    templateUrl: '/templates/galleries/galleriesNew.html',
    controller: 'GalleriesNewController as galleriesNew'
  })
  .state('galleriesIndex', {
    url: '/galleries',
    templateUrl: '/templates/galleries/galleriesIndex.html',
    controller: 'GalleriesIndexController as galleriesIndex'
  })
  .state('galleriesShow', {
    url: '/galleries/:id',
    templateUrl: '/templates/galleries/galleriesShow.html',
    controller: 'GalleriesShowController as galleriesShow'
  })
  .state('galleriesEdit', {
    url: '/galleries/:id/edit',
    templateUrl: '/templates/galleries/galleriesEdit.html',
    controller: 'GalleriesEditController as galleriesEdit'
  })
  .state('exhibitionsNew', {
    url: '/exhibitions/new',
    templateUrl: '/templates/exhibitions/exhibitionsNew.html',
    controller: 'ExhibitionsNewController as exhibitionsNew'
  })
  .state('exhibitionsIndex', {
    url: '/exhibitions',
    templateUrl: '/templates/exhibitions/exhibitionsIndex.html',
    controller: 'ExhibitionsIndexController as exhibitionsIndex'
  })
  .state('exhibitionsShow', {
    url: '/exhibitions/:id',
    templateUrl: '/templates/exhibitions/exhibitionsShow.html'
  })
  .state('exhibitionsEdit', {
    url: '/exhibitions/:id/edit',
    templateUrl: '/templates/exhibitions/exhibitionsEdit.html',
    controller: 'ExhibitionsEditController as exhibitionsEdit'
  })
  .state('reviewsNew', {
    url: '/reviews/new',
    templateUrl: '/templates/reviews/reviewsNew.html',
    controller: 'ReviewsNewController as reviewsNew'
  })
  .state('reviewsIndex', {
    url: '/reviews',
    templateUrl: '/templates/reviews/reviewsIndex.html',
    controller: 'ReviewsIndexController as reviewsIndex'
  })
  .state('reviewsShow', {
    url: '/reviews/:id',
    templateUrl: '/templates/reviews/reviewsShow.html'
    // controller: 'ReviewsShowController as reviewsShow'
  })
  .state('reviewsEdit', {
    url: '/reviews/:id/edit',
    templateUrl: '/templates/reviews/reviewsEdit.html',
    controller: 'ReviewsEditController as reviewsEdit'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/templates/register.html',
    controller: 'RegisterController as register'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginController as login'
  });

  $urlRouterProvider.otherwise('/');
}
