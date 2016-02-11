define([ 'modules/app', 'jquery-ui'], function(app) {
	
	/* Directiva que genera un div de alert de error */
	app.directive("alerterror", function(){
		return {
			restrict: "E",
			template: function(element, attr) {
				return '<div ng-show=' + attr.show + ' class="alert alert-danger alert-dismissable">{{' + attr.msg + '}}</div>';
			}
		};
	});

	/* Directiva que genera un div de alert de exito */
	app.directive("alertsuccess", function(){
		return {
			restrict: "E",
			template: function(element, attr) {
				return '<div ng-show=' + attr.show + ' class="alert alert-success alert-dismissable">{{' + attr.msg + '}}</div>';
			}
		};
	});
});