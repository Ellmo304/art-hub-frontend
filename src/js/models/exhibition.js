angular.module('artHub')
.factory('Exhibition', Exhibition);

Exhibition.$inject = ['$resource', 'API_URL'];
function Exhibition($resource, API_URL) {
  return new $resource(`${API_URL}/exhibitions/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
