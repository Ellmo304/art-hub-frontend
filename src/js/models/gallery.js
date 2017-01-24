angular.module('artHub')
.factory('Gallery', Gallery);

Gallery.$inject = ['$resource', 'API_URL'];
function Gallery($resource, API_URL) {
  return new $resource(`${API_URL}/galleries/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
