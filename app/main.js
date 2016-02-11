/**
 * @author <Josue Ramirez Davila>
 * @mail <josueramirezdavila@gmail.com>
 *
 * @description ARCHIVO DE CONFIGURACION PRINCIPAL
 *              PARA LA APLICACION EN ANGULAR
 * 
 */

/* CONFUIGRAMOS LAS DEPENDENCIAS DE ANGULAR */
require.config({
    baseUrl: './app',
    paths: {
        'angular'           : '../bower_components/angular/angular',
        'angular-resource'  : '../bower_components/angular-resource/angular-resource',
        'angular-route'     : '../bower_components/angular-route/angular-route',
        'jquery'            : '../bower_components/jquery/dist/jquery',
        'jquery-ui'         : '../bower_components/jquery-ui/jquery-ui',
        'ngStorage'         : '../bower_components/ngstorage/ngStorage'    },
    shim : {
        'angular' : {
            'exports' : 'angular'
        },
        'angular-route' : {
            'deps' : [ 'angular' ]
        },
        'angular-resource' : {
            'deps' : [ 'angular' ]
        },
        'jquery' : {
            'exports' : 'jquery'
        },
        'jquery-ui' : {
            'exports' : 'jquery-ui',
            'deps' : [ 'jquery' ]
        },
        'ngStorage' : {
            'deps' : [ 'angular' ]
        }
    }
});

/* INCIALIZAMOS LA APLICACION ANGULAR */
require(
    [
        'angular',
        'routes/routes',
        'services/requestService',
        'controllers/index/indexController',
        'directives/utilsDirectives',
        'ngStorage',
        'jquery',
        'jquery-ui'
    ], 
    function(angular, mappingService)
    {
        return angular.bootstrap(document, ["app"]);
    }
);
