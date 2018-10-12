angular.module('mainController',[]).controller('mainController', function($scope, $rootScope, $stateParams, $state, $filter, CommonService) {

	$scope.getBooks =  function(){
	 	if(localStorage.getItem('bookList') === null){
			CommonService.getBooks().then(function(resp){
				$scope.allBooks = resp.data;
				console.log($scope.allBooks);
                localStorage.setItem('bookList', JSON.stringify($scope.allBooks));
			});
		}else{
			$scope.allBooks = JSON.parse(localStorage.getItem('bookList'));
		}
	}

	$scope.$on('updateJson', function(event,data){
		console.log('update');
		setTimeout(function() {
			localStorage.setItem('bookList', JSON.stringify($scope.allBooks));
		}, 10);
	});

	$scope.search = function(){
		$state.go('searchView');
	}

	$scope.backTo = function(){
		$state.go('bookView');
	}


	function init(){
		$scope.actions = [
			{name:"Currently Reading",key:"CR"},
			{name:"Want To Read",key:"WR"},
			{name:"Read",key:"RD"},
			{name:"None",key:"NN"},
		];
	}


	$scope.getBooks();
	init();
	// $scope.getLoginObject(); 
	
  }).directive('selectCategory', function(){
  	return{
  		restrict: 'E',
  		templateUrl:'common/partials/selectCategory.html',
  		scope:{
  			data: '=',
  			actions : '='
  		},
  		link: function(scope, elem, attrs){
  			scope.updateCategory = function(){
  				scope.$emit('updateJson',{});
  			}
  		}
  	}
  })
	
