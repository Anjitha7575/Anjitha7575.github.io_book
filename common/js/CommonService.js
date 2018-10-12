angular.module('ionos.common.CommonService',[]).factory('CommonService', ['$http','$q','testUrl','baseUrl',function($http, $q, testUrl, baseUrl){

	var respObj = {};
	var lObj = {};
	var oObj= {};

    
    return {
      getBooks : function() {
            return $http.get('mocks/booklist.json');      
      }
    };
}]);