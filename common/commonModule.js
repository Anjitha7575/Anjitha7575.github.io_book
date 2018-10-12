angular.module('ionos.common',['mainController','ionos.common.CommonService']);


	
angular.module('ionos.common').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
	$urlRouterProvider.otherwise('/bookView');
    
    $stateProvider
      .state('bookView', {
        url : '/bookView',
        templateUrl : 'common/partials/bookView.html',
        controller : 'mainController'
      })
      .state('searchView', {
        url : '/searchView',
        templateUrl : 'common/partials/searchView.html',
        controller : 'mainController'
      })
  }]);

