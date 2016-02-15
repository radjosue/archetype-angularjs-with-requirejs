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
			//.when('/', route.resolve('home', 'home/'))
		}
	]);
});