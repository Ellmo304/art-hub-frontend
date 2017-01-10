angular.module('artHub')
.controller('UsersIndexController', UsersIndexController)
.controller('UsersShowController', UsersShowController)
.controller('UsersEditController', UsersEditController);


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

  function isCurrentUser() {
    return $auth.getPayload().id === Number($state.params.id);
  }

  usersShow.isCurrentUser = isCurrentUser;
  usersShow.deleteUser = deleteUser;
}


UsersEditController.$inject = ['User', '$state', '$auth'];
function UsersEditController(User, $state, $auth) {
  const usersEdit = this;
  usersEdit.user = User.get($state.params);
  User.get($state.params, (currentUser) => {
    usersEdit.user = currentUser;
    if(usersEdit.user.id !== $auth.getPayload().id) {
      $state.go('login');
    }
  });


  function update() {
    usersEdit.user.$update(() => {
      $state.go('usersShow', $state.params);
    });
  }
  usersEdit.update = update;
}
