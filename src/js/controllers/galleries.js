angular.module('artHub')
.controller('GalleriesNewController', GalleriesNewController)
.controller('GalleriesIndexController', GalleriesIndexController)
.controller('GalleriesShowController', GalleriesShowController)
.controller('GalleriesEditController', GalleriesEditController);


GalleriesNewController.$inject = ['Gallery', '$state'];
function GalleriesNewController(Gallery, $state) {
  const galleriesNew = this;
  galleriesNew.gallery = {};

  function createGallery() {
    Gallery.save(galleriesNew.gallery, () => {
      $state.go('galleriesIndex');
    });
  }
  galleriesNew.create = createGallery;
}

GalleriesIndexController.$inject = ['Gallery'];
function GalleriesIndexController(Gallery) {
  const galleriesIndex = this;
  galleriesIndex.all = Gallery.query();
}

GalleriesShowController.$inject = ['Gallery', '$state', '$auth'];
function GalleriesShowController(Gallery, $state, $auth) {
  const galleriesShow = this;

  galleriesShow.gallery = Gallery.get($state.params);

  function deleteGallery() {
    galleriesShow.gallery.$remove(() => {
      $state.go('galleriesIndex');
    });
  }
  galleriesShow.deleteGallery = deleteGallery;
}


GalleriesEditController.$inject = ['Gallery', '$state', '$auth'];
function GalleriesEditController(Gallery, $state, $auth) {
  const galleriesEdit = this;
  galleriesEdit.gallery = Gallery.get($state.params);
  // Gallery.get($state.params, (currentGallery) => {
  //   galleriesEdit.gallery = currentGallery;
  //   if(galleriesEdit.gallery.id !== $auth.getPayload().id) {
  //     $state.go('login');
  //   }
  // });


  function update() {
    galleriesEdit.gallery.$update(() => {
      $state.go('galleriesShow', $state.params);
    });
  }
  galleriesEdit.update = update;
}
