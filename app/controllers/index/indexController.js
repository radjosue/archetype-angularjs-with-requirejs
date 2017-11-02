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
	app.controller('IndexController', ['$scope', '$rootScope', '$location', 'requestService', '$localStorage', 'vcRecaptchaService',
		function($scope, $rootScope, $location, requestService, $localStorage, vcRecaptchaService)
    	{
		 	$rootScope.pageTitle = "EarthQuake Framework - AngularJS";

		 	$scope.goHome = function() {
		 		$location.url("/home");
		 	}

		 	$scope.response = null;
                $scope.widgetId = null;
                $scope.model = {
                    key: '6Ld8DxcUAAAAAP47Qhf4YagIY71f0XZir7o0gsOv'
                };
                $scope.setResponse = function (response) {
                    console.info('Response available');
                    $scope.response = response;
                };
                $scope.setWidgetId = function (widgetId) {
                    console.info('Created widget ID: %s', widgetId);
                    $scope.widgetId = widgetId;
                };
                $scope.cbExpiration = function() {
                    console.info('Captcha expired. Resetting response object');
                    vcRecaptchaService.reload($scope.widgetId);
                    $scope.response = null;
                 };
    	}
    ]);

});
