define(['modules/app', 'services/requestService'], function(app)
{
	/**
	 * DEFINIMOS Y REGISTRAMOS EL CONTROLLER indexController.
	 * @param $scope - PROVEEDOR DE ANGULAR REQUERIDO PARA MAPEAR INFORMACION DE LOS MODELOS AL TEMPLATE
	 * @param $location - PROVEEDOR DE ANGULAR REQUERIDO PARA REDIRECCIONAR HACIA OTROS TEMPLATES
	 * @param requestService - SERVICIO NECESARIO PARA PODER LLAMAR LOS SERVICIOS REST-CONTROLLER
	 * @param $localStorage - PROVEEDOR DE ANGULAR PARA OBTENER INFORMACION DE LA MEMORIA LOCAL
	 *  
	 */
	app.controller('indexController', ['$scope', '$rootScope', '$location', 'requestService', '$localStorage',
		function($scope, $rootScope, $location, requestService, $localStorage)
    	{
		 	$rootScope.pageTitle = "EarthQuake Framework - AngularJS";

		 	$scope.goHome = function() {
		 		$location.url("/home");
		 	}
    	}
    ]);

});