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
    baseUrl: "./app",
    paths: {
        'angular'                     : '../vendors/angular/angular.min',
        'angular-route'               : '../vendors/angular-route/angular-route.min',
        'angularAMD'                  : '../vendors/angularAMD/angularAMD.min',
        'angular-resource'            : '../vendors/angular-resource/angular-resource.min',
        'jquery'                      : '../vendors/jquery/dist/jquery.min',
        'jquery-ui'                   : '../vendors/jquery-ui/jquery-ui.min',
        'ngStorage'                   : '../vendors/ngstorage/ngStorage.min',
        'ngAnimate'                   : '../vendors/angular-animate/angular-animate.min',
        'angularUtils-dirPagination'  : '../vendors/angularUtils-pagination/dirPagination',
        'angularUtils-uiBreadcrumbs'  : '../vendors/angular-utils-ui-breadcrumbs/uiBreadcrumbs',
        'bootstrap'                   : '../vendors/bootstrap/dist/js/bootstrap.min',
        'angular-bootstrap'           : '../vendors/angular-bootstrap/ui-bootstrap-tpls',
        'angular-ui-routes'           : '../vendors/angular-ui-router/release/angular-ui-router.min',
        'angular-block-ui'            : '../vendors/angular-block-ui/dist/angular-block-ui.min',
        'angular-ui-notification'     : '../vendors/angular-ui-notification/dist/angular-ui-notification.min',
        'angular-recaptcha'           : '../vendors/angular-recaptcha/release/angular-recaptcha.min'
    },
    shim: {
        'angularAMD': [ 'angular' ],
        'angular-route': [ 'angular' ],
        'angular' : {
            'exports' : 'angular'
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
            'exports': 'bootstrap',
            'deps': ['jquery' ]
        },
        'angular-bootstrap': {
            'exports': 'angular-bootstrap',
            'deps': ['angular', 'bootstrap']
        },
        'angular-block-ui': {
            'exports': 'angular-block-ui',
            'deps' : ['angular']
        },
        'angular-ui-notification' : {
            'exports' : 'angular-ui-notification',
            'deps' : [ 'angular' ]
        },
        'angular-recaptcha' : {
            'exports' : 'angular-recaptcha',
            'deps' : [ 'angular', 'jquery' ]
        }
    },
    deps: [
      'modules/app',
      'routes/routes',
      'config/appConfig',
      'config/appRun',
      'jquery',
      'jquery-ui',
      'angular-bootstrap',
      'services/requestService',
      'directives/utilsDirectives',
      'ngStorage',
      'ngAnimate',
      'angularUtils-dirPagination',
      'angularUtils-uiBreadcrumbs',
      'routes/breadCrumbs',
      'angular-block-ui',
      'angular-ui-notification',
      'angular-recaptcha',
      'controllers/index/IndexController'
      ]
});
