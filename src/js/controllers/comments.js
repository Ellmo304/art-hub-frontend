angular.module('artHub')
.controller('CommentsNewController', CommentsNewController);


CommentsNewController.$inject = ['Comment', 'Review', '$state', '$auth'];
function CommentsNewController(Comment, Review, $state, $auth) {
  const commentsNew = this;
  commentsNew.comment = {};
  commentsNew.comment.user_id = $auth.getPayload().id;
  commentsNew.comment.review_id = $state.params.id;
  commentsNew.reviewsAll = Review.query();

  function createComment() {
    Comment.save(commentsNew.comment, () => {
      $state.reload();
    });
  }
  commentsNew.create = createComment;
}
