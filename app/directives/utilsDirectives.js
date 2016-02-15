define([ 'modules/app', 'jquery', 'jquery-ui'], function(app) {

  /* INICIAN CONSTANTES QUE DEFINEN LA ESTRUCTURA COMUN DE LOS ALERTS */
  var HEADER_ALERTS         = '<div ng-show=¬¬SHOW_ATTRIBUTE¬¬ class="alert alert-¬¬ALERT_TYPE¬¬ alert-dismissable">';
  var BODY_ALERTS           = '<div ng-transclude></div>';
  var BUTTON_DISMISS_ALERT  = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">'
                            + '&times;</span>'
                            + '</button>';
  var END_ALERT             = '</div>';
  /* FIN CONSTANTES COMUNES DE LOS ALERTS */

  /* Directiva que genera un div de alert */
  app.directive("alert", function(){
    return {
      restrict: "E",
      transclude: true,
      template: function(element, attr) {
        var template  = HEADER_ALERTS.replace("¬¬SHOW_ATTRIBUTE¬¬", attr.show);
        template      = template.replace("¬¬ALERT_TYPE¬¬", attr.type);
        if (attr.dismissable == 'true') {
          template += BUTTON_DISMISS_ALERT;
        }
        template += BODY_ALERTS + END_ALERT;
        return template;
      }
    };
  });

	/* Directiva que genera un div de alert de error */
	app.directive("alertDanger", function(){
		return {
			restrict: "E",
      transclude: true,
			template: function(element, attr) {
        var template  = HEADER_ALERTS.replace("¬¬SHOW_ATTRIBUTE¬¬", attr.show);
        template      = template.replace("¬¬ALERT_TYPE¬¬", "danger");
        if (attr.dismissable == 'true') {
          template += BUTTON_DISMISS_ALERT;
        }
        template += BODY_ALERTS + END_ALERT;
        return template;
			}
		};
	});

  /* Directiva que genera un div de alert de warning */
  app.directive("alertWarning", function(){
    return {
      restrict: "E",
      transclude: true,
      template: function(element, attr) {
        var template  = HEADER_ALERTS.replace("¬¬SHOW_ATTRIBUTE¬¬", attr.show);
        template      = template.replace("¬¬ALERT_TYPE¬¬", "warning");
        if (attr.dismissable == 'true') {
          template += BUTTON_DISMISS_ALERT;
        }
        template += BODY_ALERTS + END_ALERT;
        return template;
      }
    };
  });

  /* Directiva que genera un div de alert de info */
  app.directive("alertInfo", function(){
    return {
      restrict: "E",
      transclude: true,
      template: function(element, attr) {
        var template  = HEADER_ALERTS.replace("¬¬SHOW_ATTRIBUTE¬¬", attr.show);
        template      = template.replace("¬¬ALERT_TYPE¬¬", "info");
        if (attr.dismissable == 'true') {
          template += BUTTON_DISMISS_ALERT;
        }
        template += BODY_ALERTS + END_ALERT;
        return template;
      }
    };
  });

	/* Directiva que genera un div de alert de exito */
	app.directive("alertSuccess", function(){
		return {
			restrict: "E",
      transclude: true,
			template: function(element, attr) {
				var template  = HEADER_ALERTS.replace("¬¬SHOW_ATTRIBUTE¬¬", attr.show);
        template      = template.replace("¬¬ALERT_TYPE¬¬", "success");
        if (attr.dismissable == 'true') {
          template += BUTTON_DISMISS_ALERT;
        }
        template += BODY_ALERTS + END_ALERT;
        return template;
			}
		};
	});

	/* Directiva que genera una ventana tipo 'modal' */
	app.directive('modal', function () {
     return {
       template: '<div class="modal fade">' + 
             '<div class="modal-dialog">' + 
               '<div class="modal-content">' + 
                 '<div class="modal-header">' + 
                   '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                   '<h4 class="modal-title">{{ title }}</h4>' + 
                 '</div>' + 
                 '<div class="modal-body" ng-transclude></div>' + 
               '</div>' + 
             '</div>' + 
           '</div>',
       restrict: 'E',
       transclude: true,
       replace:true,
       scope:true,
       link: function postLink(scope, element, attrs) {
         scope.title = attrs.title;

         scope.$watch(attrs.visible, function(value){
           if(value == true)
             $(element).modal('show');
           else
             $(element).modal('hide');
         });

         $(element).on('shown.bs.modal', function(){
           scope.$apply(function(){
             scope.$parent[attrs.visible] = true;
           });
         });

         $(element).on('hidden.bs.modal', function(){
           scope.$apply(function(){
             scope.$parent[attrs.visible] = false;
           });
         });
       }
     };
   });
});