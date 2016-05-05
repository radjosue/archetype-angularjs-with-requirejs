/**
 * @author <Josue Ramirez Davila>
 * @mail <josueramirezdavila@gmail.com>
 * @description CONFIGURAMOS EL MODULO BREADCRUMBS DE NUESTRA APLICACION EN ANGULAR
 *
 */
define(['modules/app'], function(app)
{
	return app.config(['$stateProvider', function($stateProvider)
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

    	$stateProvider
	      	.state('index', {
	        	url: '/',
	        	templateUrl: PATHS.htmlTemplates + 'index/index' + SUFIJOS.html,
	        	data: {
	                displayName: 'EarthQuake Framework'
	            }
	      	})
	      	.state('index.home', {
	        	url: '^/home',
	        	templateUrl: PATHS.htmlTemplates + 'home/home' + SUFIJOS.html,
	        	data: {
	                displayName: 'Home'
	            }
	      	});
    }]);
});