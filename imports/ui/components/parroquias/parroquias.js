import 'angular-ui-bootstrap';
import utilsPagination from 'angular-utils-pagination';

console.log('Loaded parroquias!');

angular.module('parroquias', 
  [
    'angular-meteor', 
    'ui.router', 
    'ui.bootstrap',
    utilsPagination
  ]
);

angular.module('parroquias').directive('parroquias', function() {
  return {
    restrict: 'E',
    templateUrl: 'imports/ui/components/parroquias/parroquias.html',
    controllerAs: 'psc',
    controller: function($scope, $reactive) {
      $reactive(this).attach($scope);
      return console.log('parroquias loaded');
    }
  };
});
