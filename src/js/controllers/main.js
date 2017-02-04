angular.module('artHub')
.controller('MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
  const main = this;

  main.isLoggedIn = $auth.isAuthenticated;
  main.message = null;


  function logout() {
    $auth.logout()
    .then(() => {
      $state.go('home');
    });
  }

  const protectedStates = ['usersEdit'];

  function protectStates(e, toState) {
    const payload = $auth.getPayload();
    if(payload) {
      main.isCurrentUser = $auth.getPayload().id;
    }
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)) {
      e.preventDefault();
      $state.go('login');
    }
  }

  $rootScope.$on('$stateChangeStart', protectStates);

  main.logout = logout;
}
