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
	app.controller('homeController', ['$scope', '$location', 'requestService', '$localStorage', 'Notification',
		function($scope, $location, requestService, $localStorage, Notification)
    	{

    		$scope.goIndex = function() {
		 		$location.url("/");
		 	}

		 	$scope.listaFrutas = [
				{ nombre : 'Manzanas' },
				{ nombre : 'Peras' },
				{ nombre : 'Zanahorias' },
				{ nombre : 'Manzanas' },
				{ nombre : 'Peras' },
				{ nombre : 'Zanahorias' },
				{ nombre : 'Manzanas' },
				{ nombre : 'Peras' },
				{ nombre : 'Zanahorias' },
				{ nombre : 'Manzanas' },
				{ nombre : 'Peras' },
				{ nombre : 'Zanahorias' },
				{ nombre : 'Manzanas' },
				{ nombre : 'Peras' },
				{ nombre : 'Zanahorias' },
				{ nombre : 'Manzanas' },
				{ nombre : 'Peras' },
				{ nombre : 'Zanahorias' },
				{ nombre : 'Manzanas' },
				{ nombre : 'Peras' }
			];

			$scope.agregarFruta = function(){
				if ($scope.fruta.trim() != '')
				{
					$scope.listaFrutas.push({
						nombre: $scope.fruta
					});

				 	$scope.fruta = '';
				 	Notification.success('Fruta agregada correctamente');
				}
			}

			$scope.eliminarFruta = function(){
				$scope.listaFrutas.pop();
			}

			$scope.showModal = false;
		    $scope.toggleModal = function(){
		        $scope.showModal = !$scope.showModal;
		    };

		    $scope.showNotifications = function()
		    {
		    	Notification.error({message: 'Error Bottom Right', positionY: 'bottom', positionX: 'right'});
		 		Notification.info({message: 'Info notification<br>Some other <b>content</b><br><a href="https://github.com/alexcrack/angular-ui-notification">This is a link</a><br><img src="https://angularjs.org/img/AngularJS-small.png">', title: 'Html content'});
		 		Notification({message: 'Primary notification', title: 'Primary notification'});
		 		Notification.success({message: 'Success Bottom Right', positionY: 'bottom', positionX: 'right'});
		 		Notification.warning({message: 'Warning Bottom Right', positionY: 'bottom', positionX: 'right'});
		    }
    	}
    ]);

});