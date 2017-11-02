/**
 * @author <Josue Ramirez Davila>
 * @mail <josueramirezdavila@gmail.com>
 * @description CONFIGURAMOS EL MODULO APP DE NUESTRA APLICACION EN ANGULAR
 *
 */

 /* CARGAMOS LA DEPENDENCIA DE LIBRERIAS */
 define(
  [
    'angularAMD',
    'angular-route',
    'angular-resource',
		'ngStorage',
		'jquery-ui',
		'ngAnimate',
		'angularUtils-dirPagination',
		'angularUtils-uiBreadcrumbs',
		'angular-block-ui',
		'angular-ui-notification',
    'angular-recaptcha'
  ],
  function (angularAMD)
    {
        var app = angular.module("app",
        [
          'ngRoute',
  				'ngResource',
  				'ngStorage',
  				'ngAnimate',
  				'angularUtils.directives.dirPagination',
  				'angularUtils.directives.uiBreadcrumbs',
  				'blockUI',
  				'ui-notification',
          'vcRecaptcha'
        ]
      );
    return angularAMD.bootstrap(app);
  }
);
