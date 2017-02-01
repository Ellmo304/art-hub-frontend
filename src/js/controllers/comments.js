angular.module('artHub')
.controller('CommentsNewController', CommentsNewController)
.controller('CommentsIndexController', CommentsIndexController)
.controller('CommentsShowController', CommentsShowController)
.controller('CommentsEditController', CommentsEditController);


CommentsNewController.$inject = ['Comment', 'Exhibition', '$state', '$auth'];
function CommentsNewController(Comment, Exhibition, $state, $auth) {
  const commentsNew = this;
  commentsNew.comment = {};
  commentsNew.comment.user_id = $auth.getPayload().id;
  commentsNew.comment.exhibition_id = $state.params.id;
  commentsNew.exhibitionsAll = Exhibition.query();

  function createComment() {
    Comment.save(commentsNew.comment, () => {
      $state.go('commentsIndex');
    });
  }
  commentsNew.create = createComment;
}

CommentsIndexController.$inject = ['Comment'];
function CommentsIndexController(Comment) {
  const commentsIndex = this;
  commentsIndex.all = Comment.query();
}

CommentsShowController.$inject = ['Comment', '$state', '$auth'];
function CommentsShowController(Comment, $state, $auth) {
  const commentsShow = this;

  commentsShow.comment = Comment.get($state.params);

  function deleteComment() {
    commentsShow.comment.$remove(() => {
      $state.go('commentsIndex');
    });
  }
  commentsShow.deleteComment = deleteComment;
}


CommentsEditController.$inject = ['Comment', 'Exhibition', '$state', '$auth'];
function CommentsEditController(Comment, Exhibition, $state, $auth) {
  const commentsEdit = this;
  commentsEdit.comment = Comment.get($state.params);
  // commentsEdit.comment.user_id = $auth.getPayload().id;
  // commentsEdit.comment.exhibition_id = $state.params.id;
  commentsEdit.exhibitionsAll = Exhibition.query();

  // Comment.get($state.params, (currentComment) => {
  //   commentsEdit.comment = currentComment;
  //   if(commentsEdit.comment.id !== $auth.getPayload().id) {
  //     $state.go('login');
  //   }
  // });


  function update() {
    commentsEdit.comment.$update(() => {
      $state.go('commentsShow', $state.params);
    });
  }
  commentsEdit.update = update;
}
