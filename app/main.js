/**
 * @author      : <Josue Ramirez Davila>
 * @mail        : <josueramirezdavila@gmail.com>
 *
 * @description : ARCHIVO DE CONFIGURACION PRINCIPAL
 *                PARA LA APLICACION EN ANGULAR
 * 
 */

/* CONFUIGRAMOS LAS DEPENDENCIAS DE ANGULAR */
require.config({
    baseUrl: './app',
    paths: {
        'angular'                       : '../bower_components/angular/angular.min',
        'angular-resource'              : '../bower_components/angular-resource/angular-resource.min',
        'angular-route'                 : '../bower_components/angular-route/angular-route.min',
        'jquery'                        : '../bower_components/jquery/dist/jquery.min',
        'jquery-ui'                     : '../bower_components/jquery-ui/jquery-ui.min',
        'ngStorage'                     : '../bower_components/ngstorage/ngStorage.min',
        'ngAnimate'                     : '../bower_components/angular-animate/angular-animate.min',
        'angularUtils-dirPagination'    : '../bower_components/angularUtils-pagination/dirPagination',
        'angularUtils-uiBreadcrumbs'    : '../bower_components/angular-utils-ui-breadcrumbs/uiBreadcrumbs',
        'bootstrap'                     : '../bower_components/bootstrap/dist/js/bootstrap.min',
        'angular-bootstrap'             : '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-ui-routes'             : '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular-block-ui'              : '../bower_components/angular-block-ui/dist/angular-block-ui.min',
        'angular-ui-notification'       : '../bower_components/angular-ui-notification/dist/angular-ui-notification.min'
    },
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
        },
        'ngAnimate' : {
            'exports' : 'ngAnimate',
            'deps' : [ 'angular' ]
        },
        'angular-ui-routes' : {
            'deps' : [ 'angular' ]
        },
        'angularUtils-dirPagination' : {
            'deps' : [ 'angular' ]
        },
        'angularUtils-uiBreadcrumbs' : {
            'deps' : [ 'angular-ui-routes' ]
        },
        'bootstrap': {
            exports: 'bootstrap',
            deps: ['jquery' ]
        },
        'angular-bootstrap': {
            exports: 'angular-bootstrap',
            deps: ['angular', 'bootstrap']
        },
        'angular-block-ui': {
            exports: 'angular-block-ui',
            deps: ['angular']
        },
        'angular-ui-notification' : {
            exports : 'angular-ui-notification',
            'deps' : [ 'angular' ]
        }
    }
});

/* INCIALIZAMOS LA APLICACION ANGULAR */
require(
    [
        'angular',
        'routes/routes',
        'config/appConfig',
        'config/appRun',
        'jquery',
        'jquery-ui',
        'angular-bootstrap',
        'services/requestService',
        'controllers/index/indexController',
        'directives/utilsDirectives',
        'ngStorage',
        'ngAnimate',
        'angularUtils-dirPagination',
        'angularUtils-uiBreadcrumbs',
        'routes/breadCrumbs',
        'angular-block-ui',
        'angular-ui-notification'
    ], 
    function(angular, mappingService)
    {
        return angular.bootstrap(document, ["app"]);
    }
);
