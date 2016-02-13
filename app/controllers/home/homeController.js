define(['modules/app', 'services/requestService'], function(app)
{
	/**
	 * DEFINIMOS Y REGISTRAMOS EL CONTROLLER homeController.
	 * @param $scope - PROVEEDOR DE ANGULAR REQUERIDO PARA MAPEAR INFORMACION DE LOS MODELOS AL TEMPLATE
	 * @param $location - PROVEEDOR DE ANGULAR REQUERIDO PARA REDIRECCIONAR HACIA OTROS TEMPLATES
	 * @param requestService - SERVICIO NECESARIO PARA PODER LLAMAR LOS SERVICIOS REST-CONTROLLER
	 * @param $localStorage - PROVEEDOR DE ANGULAR PARA OBTENER INFORMACION DE LA MEMORIA LOCAL
	 *  
	 */
	app.controller('homeController', ['$scope', '$location', 'requestService', '$localStorage',
		function($scope, $location, requestService, $localStorage)
    	{

    		$scope.goIndex = function() {
		 		$location.url("/");
		 	}

		 	$scope.listaFrutas = [
				{ nombre : 'Manzanas' },
				{ nombre : 'Peras' },
				{ nombre : 'Zanahorias' }
			];

			$scope.agregarFruta = function(){
				$scope.listaFrutas.push({
					nombre: $scope.fruta
				});

				 $scope.fruta = '';
			}

			$scope.eliminarFruta = function(){
				$scope.listaFrutas.pop();
			}
    	}
    ]);

});