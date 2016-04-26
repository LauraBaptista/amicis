angular.module("app",[])
	.controller('LoginController', function($scope, $http){	
 
	  function Login() {
	    this.nome = '';
	    this.senha = '';
	  }
 
  		$scope.login = new Login();
 
  		$scope.existeLogin = false;
 
  		$scope.verificaLogin = function() {
    		$http.post('/login', $scope.loginSendoVerificado).success(function() {
      		$scope.existeLogin = true;
    	});
  }
}


	});