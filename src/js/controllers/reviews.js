angular.module('artHub')
.controller('ReviewsNewController', ReviewsNewController)
.controller('ReviewsIndexController', ReviewsIndexController)
.controller('ReviewsShowController', ReviewsShowController)
.controller('ReviewsEditController', ReviewsEditController);


ReviewsNewController.$inject = ['Review', 'Exhibition', '$state', '$auth'];
function ReviewsNewController(Review, Exhibition, $state, $auth) {
  const reviewsNew = this;
  reviewsNew.review = {};
  reviewsNew.review.user_id = $auth.getPayload().id;
  reviewsNew.review.exhibition_id = $state.params.id;
  reviewsNew.exhibitionsAll = Exhibition.query();

  function createReview() {
    Review.save(reviewsNew.review, () => {
      $state.go('reviewsIndex');
    });
  }
  reviewsNew.create = createReview;
}

ReviewsIndexController.$inject = ['Review'];
function ReviewsIndexController(Review) {
  const reviewsIndex = this;
  reviewsIndex.all = Review.query();
}

ReviewsShowController.$inject = ['Review', 'Comment', '$state', '$auth'];
function ReviewsShowController(Review, Comment, $state, $auth) {
  const reviewsShow = this;

  reviewsShow.review = Review.get($state.params);

  function deleteReview() {
    reviewsShow.review.$remove(() => {
      $state.go('reviewsIndex');
    });
  }

  function deleteComment(commentID) {
    Comment.get({ id: commentID }, (thisComment) => {
      thisComment.$remove(() => {
        $state.reload();
      });
    });
  }

  reviewsShow.deleteComment = deleteComment;
  reviewsShow.deleteReview = deleteReview;
}


ReviewsEditController.$inject = ['Review', 'Exhibition', '$state', '$auth'];
function ReviewsEditController(Review, Exhibition, $state, $auth) {
  const reviewsEdit = this;
  reviewsEdit.review = Review.get($state.params);
  // reviewsEdit.review.user_id = $auth.getPayload().id;
  // reviewsEdit.review.exhibition_id = $state.params.id;
  reviewsEdit.exhibitionsAll = Exhibition.query();

  // Review.get($state.params, (currentReview) => {
  //   reviewsEdit.review = currentReview;
  //   if(reviewsEdit.review.id !== $auth.getPayload().id) {
  //     $state.go('login');
  //   }
  // });


  function update() {
    reviewsEdit.review.$update(() => {
      $state.go('reviewsShow', $state.params);
    });
  }
  reviewsEdit.update = update;
}
