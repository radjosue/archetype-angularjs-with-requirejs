/**
 * ARCHIVO DONDE SE DEBENDE DEFINIR LOS CONTROLLERS Y TEMPLATES
 * QUE RESOLVERA ANGULAR DE ACUERDO A UNA URL.
 * 
 */

define(['modules/app', 'controllers/home/homeController'], function(app)		
{
	return app.config([
		'$routeProvider', 'routeResolverProvider',
		function($routeProvider, routeResolverProvider)
		{
			/* PATHS DONDE ESTAN LOS CONTROLLERS Y LAS VISTAS */
			var PATHS = {
				controllers : "./app/controllers/",
				htmlTemplates : "./views/"
			};

			/* SUFIJOS PARA LOS CONTROLLERS Y LAS VISTAS */
			var SUFIJOS = {
				Controller : "Controller",
				html       : ".html"
			}

			// Se setea los paths de controllers y templates
			routeResolverProvider.routeConfig.setBaseDirectories(PATHS.htmlTemplates, PATHS.controllers);

			// TODO Descomentar cuando ya se inyecten los controladores dinamicamente
			//var route = routeResolverProvider.route;

			/* RUTAS DE LA APLICACION */
			$routeProvider
				 .when("/", {
					controller : 'index' + SUFIJOS.Controller ,
					controllerUrl : PATHS.controllers + 'index/index' + SUFIJOS.Controller,
					templateUrl : PATHS.htmlTemplates + 'index/index' + SUFIJOS.html
				}).when("/home", {
					controller : 'home' + SUFIJOS.Controller ,
					controllerUrl : PATHS.controllers + 'home/home' + SUFIJOS.Controller,
					templateUrl : PATHS.htmlTemplates + 'home/home' + SUFIJOS.html
				})
			// TODO Asi se haran las rutas cuando ya se inyecten los controladores dinamicamente
			//.when('/', route.resolve('index', 'index/'))
			//.when('/home', route.resolve('home', 'home/'))
			;
		}
	])
	.run(function($rootScope, $location, blockUI, $timeout, $window) {

		/* Bloqueamos la aplicacion en lo que se carga la pagina con $routeChangeStart */
	    $rootScope.$on('$routeChangeStart', function(next, current) { 
			$rootScope.startBlockUI();
		});

	    /* Desbloqueamos la aplicaicon $routeChangeSuccess */
		$rootScope.$on('$routeChangeSuccess', function(next, current) { 
			$rootScope.stopBlockUI();
		});

		/* Desbloqueamos la aplicaicon $routeChangeError */
		$rootScope.$on('$routeChangeError', function(next, current) { 
			$rootScope.stopBlockUI();
		});

		/* Desbloqueamos la aplicaicon $routeUpdate */
		$rootScope.$on('$routeUpdate ', function(next, current) { 
			$rootScope.stopBlockUI();
		});

		/* Bloqueamos la aplicacion en lo que se carga la pagina con $locationChangeStart */
		$rootScope.$on("$locationChangeStart",function(event, next, current){
        	$rootScope.startBlockUI();
    	});

		/* Desbloqueamos la aplicaicon $locationChangeSuccess */
		$rootScope.$on('$locationChangeSuccess', function(next, current) { 
			$rootScope.stopBlockUI();
		});

		/* Desbloqueamos la aplicaicon $locationChangeError */
		$rootScope.$on('$locationChangeError', function(next, current) {
			$rootScope.stopBlockUI();
		});

		/* Desbloqueamos la aplicaicon $locationUpdate */
		$rootScope.$on('$locationUpdate ', function(next, current) { 
			$rootScope.stopBlockUI();
		});

		/* Funcion para bloquear la aplicacion */
		$rootScope.startBlockUI = function()
		{
			blockUI.start('Cargando, por favor espere...');
		}

		/* Funcion para desbloquear la aplicacion */
		$rootScope.stopBlockUI = function()
		{
			$timeout(function() {
				blockUI.stop();
			}, 500);
		}
	});
});