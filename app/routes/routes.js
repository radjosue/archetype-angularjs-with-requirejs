/**
 * @author <Josue Ramirez Davila>
 * @mail <josueramirezdavila@gmail.com>
 * @description ARCHIVO DONDE SE DEBENDE DEFINIR LOS CONTROLLERS Y TEMPLATES
 * QUE RESOLVERA ANGULAR DE ACUERDO A UNA URL.
 *
 */
 define(['modules/app', 'angularAMD'], function (app, angularAMD) {
    app.config(function ($routeProvider) {

        /* PATHS DONDE ESTAN LOS CONTROLLERS Y LAS VISTAS */
        var PATHS = {
            CONTROLLERS : './controllers/',
            VIEWS       : './views/'
        }

        /* SUFIJOS PARA LOS CONTROLLERS Y LAS VISTAS */
        var SUFIJOS = {
				    CONTROLLER : "Controller",
				    HTML       : ".html"
			  }

        /* FUNCION QUE ARMA LAS PROPIEDADES CONTROLLER Y TEMPLATE
         * PARA EL $routeProvider
         */
        function routeResolver (route, cntrl) {
            return {
                templateUrl   : PATHS.VIEWS + route + '/' + route + SUFIJOS.HTML,
                controller    : cntrl + SUFIJOS.CONTROLLER,
                controllerUrl : PATHS.CONTROLLERS + route + '/' + cntrl + SUFIJOS.CONTROLLER
            }
        }

        /* RUTAS DE LA APLICACION */
        $routeProvider
            .when("/", angularAMD.route(routeResolver('index', 'Index')))
            .when("/home", angularAMD.route(routeResolver('home', 'Home')))
            .otherwise({redirectTo: '/'})
    });
});
