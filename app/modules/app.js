/**
 * @author <Josue Ramirez Davila>
 * @mail <josueramirezdavila@gmail.com>
 * @description CONFIGURAMOS EL MODULO APP DE NUESTRA APLICACION EN ANGULAR
 *
 */

 /* CARGAMOS LA DEPENDENCIA DE LIBRERIAS */
define(
	[
		'angular',
		'angular-route',
		'angular-resource',
		'ngStorage',
		'jquery-ui',
		'modules/routeResolver',
		'ngAnimate',
		'angularUtils-dirPagination',
		'angularUtils-uiBreadcrumbs',
		'angular-block-ui',
		'angular-ui-notification'
	],
	function(angular)
	{
		/* CREAMOS EL MODULO PRINCIPAL E INYECTAMOS LAS DEPENDENCIAS DE OTROS MODULOS */
    	return angular.module(
    		'app',
    		[
    			'ngRoute',
    			'ngResource',
    			'ngStorage',
    			'routeResolverServices',
    			'ngAnimate',
    			'angularUtils.directives.dirPagination',
    			'angularUtils.directives.uiBreadcrumbs',
    			'blockUI',
    			'ui-notification'
    		]
    	);
	}
);