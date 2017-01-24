angular.module('artHub')
.controller('ExhibitionsNewController', ExhibitionsNewController)
.controller('ExhibitionsIndexController', ExhibitionsIndexController)
.controller('ExhibitionsShowController', ExhibitionsShowController)
.controller('ExhibitionsEditController', ExhibitionsEditController);


ExhibitionsNewController.$inject = ['Exhibition', 'Gallery', '$state'];
function ExhibitionsNewController(Exhibition, Gallery, $state) {
  const exhibitionsNew = this;
  exhibitionsNew.exhibition = {};

  exhibitionsNew.galleriesAll = Gallery.query();

  function createExhibition() {
    console.log(exhibitionsNew.exhibition);
    Exhibition.save(exhibitionsNew.exhibition, () => {
      $state.go('exhibitionsIndex');
    });
  }
  exhibitionsNew.create = createExhibition;
}

ExhibitionsIndexController.$inject = ['Exhibition'];
function ExhibitionsIndexController(Exhibition) {
  const exhibitionsIndex = this;
  exhibitionsIndex.all = Exhibition.query();
}

ExhibitionsShowController.$inject = ['Exhibition', '$state', '$auth'];
function ExhibitionsShowController(Exhibition, $state, $auth) {
  const exhibitionsShow = this;

  exhibitionsShow.exhibition = Exhibition.get($state.params);

  function deleteExhibition() {
    exhibitionsShow.exhibition.$remove(() => {
      $state.go('exhibitionsIndex');
    });
  }
  exhibitionsShow.deleteExhibition = deleteExhibition;
}


ExhibitionsEditController.$inject = ['Exhibition', 'Gallery', '$state', '$auth'];
function ExhibitionsEditController(Exhibition, Gallery, $state, $auth) {
  const exhibitionsEdit = this;
  exhibitionsEdit.exhibition = Exhibition.get($state.params);

  exhibitionsEdit.galleriesAll = Gallery.query();
  // Exhibition.get($state.params, (currentExhibition) => {
  //   exhibitionsEdit.exhibition = currentExhibition;
  //   if(exhibitionsEdit.exhibition.id !== $auth.getPayload().id) {
  //     $state.go('login');
  //   }
  // });


  function update() {
    exhibitionsEdit.exhibition.$update(() => {
      $state.go('exhibitionsShow', $state.params);
    });
  }
  exhibitionsEdit.update = update;
}
