angular.module('artHub')
  .controller('UsersIndexController', UsersIndexController)
  .controller('UsersShowController', UsersShowController);


UsersIndexController.$inject = ['User'];
function UsersIndexController(User) {
  const usersIndex = this;
  usersIndex.all = User.query();
}


UsersShowController.$inject = ['User', '$state', '$auth'];
function UsersShowController(User, $state, $auth) {
  const usersShow = this;
  usersShow.isLoggedIn = $auth.isAuthenticated;
  usersShow.user = User.get($state.params);

  function deleteUser() {
    usersShow.user.$remove(() => {
      $state.go('usersIndex');
    });
  }

  usersShow.deleteUser = deleteUser;
}
