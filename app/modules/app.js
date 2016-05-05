/**
 * @author <Josue Ramirez Davila>
 * @mail <josueramirezdavila@gmail.com>
 * @description CONFIGURAMOS EL MODULO APP DE NUESTRA APLICACION EN ANGULAR
 *
 */
define(['angular', 'angular-route', 'angular-resource', 'ngStorage', 'jquery-ui', 'modules/routeResolver', 'ngAnimate', 'angularUtils-dirPagination', 'angularUtils-uiBreadcrumbs'], function(angular)
{
    return angular.module('app', ['ngRoute', 'ngResource', 'ngStorage', 'routeResolverServices', 'ngAnimate', 'angularUtils.directives.dirPagination', 'angularUtils.directives.uiBreadcrumbs']);
});