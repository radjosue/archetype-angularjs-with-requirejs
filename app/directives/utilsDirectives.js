/**
 * @author      : <Josue Ramirez Davila>
 * @mail        : <josueramirezdavila@gmail.com>
 *
 * @description : Directivas HTML de utilerias.
 *
 */

define(['modules/app'], function(app) {

  /* INICIAN CONSTANTES QUE DEFINEN LA ESTRUCTURA COMUN DE LOS ALERTS */
  var HEADER_ALERTS         = '<div ng-show=¬¬SHOW_ATTRIBUTE¬¬ class="alert alert-¬¬ALERT_TYPE¬¬ alert-dismissable">';
  var BUTTON_DISMISS_ALERT  = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">'
                            + '&times;</span>'
                            + '</button>';
  var BODY_ALERTS           = '<div ng-transclude></div>';
  var END_ALERT             = '</div>';
  /* FIN CONSTANTES COMUNES DE LOS ALERTS */

  /**
   * @author <Josue Ramirez Davila>
   * @mail <josueramirezdavila@gmail.com>
   *
   * @description         : CONSTRUYE UN ALERT BOOTSTRAP
   * @param showAttribute : Nombre del modelo con el cual se estara mostrando u ocultando el alert
   * @param alertType     : Tipo de alerta que se quiere construir (danger, warning, info, success)
   * @param isDismiss     : Bandera que define si el alert sera dismissable o no ('true', 'false')
   *
   */
  function buildAlert(showAttribute, alertType, isDismiss) {
    var template  = HEADER_ALERTS.replace("¬¬SHOW_ATTRIBUTE¬¬", showAttribute);
    template      = template.replace("¬¬ALERT_TYPE¬¬", alertType);
    if (isDismiss == 'true') {
      template += BUTTON_DISMISS_ALERT;
    }
    template += BODY_ALERTS + END_ALERT;
    return template;
  }

  /**
   * @author <Josue Ramirez Davila>
   * @mail <josueramirezdavila@gmail.com>
   *
   * @description       : CONSTRUYE UN ALERT BOOTSTRAP
   * @attr show         : Nombre del modelo con el cual se estara mostrando u ocultando el alert
   * @attr type         : Tipo de alerta que se quiere construir (danger, warning, info, success)
   * @attr dismissable  : Bandera que define si el alert sera dismissable o no ('true', 'false')
   *
   */
  app.directive("alert", function(){
    return {
      restrict: "E",
      transclude: true,
      template: function(element, attr) {
        return buildAlert(attr.show, attr.type, attr.dismissable);
      }
    };
  });

	/**
   * @author <Josue Ramirez Davila>
   * @mail <josueramirezdavila@gmail.com>
   *
   * @description       : CONSTRUYE UN ALERT BOOTSTRAP TIPO DANGER
   * @attr show         : Nombre del modelo con el cual se estara mostrando u ocultando el alert
   * @attr dismissable  : Bandera que define si el alert sera dismissable o no ('true', 'false')
   *
   */
	app.directive("alertDanger", function(){
		return {
			restrict: "E",
      transclude: true,
			template: function(element, attr) {
        return buildAlert(attr.show, "danger", attr.dismissable);
			}
		};
	});

  /**
   * @author <Josue Ramirez Davila>
   * @mail <josueramirezdavila@gmail.com>
   *
   * @description       : CONSTRUYE UN ALERT BOOTSTRAP TIPO WARNING
   * @attr show         : Nombre del modelo con el cual se estara mostrando u ocultando el alert
   * @attr dismissable  : Bandera que define si el alert sera dismissable o no ('true', 'false')
   *
   */
  app.directive("alertWarning", function(){
    return {
      restrict: "E",
      transclude: true,
      template: function(element, attr) {
        return buildAlert(attr.show, "warning", attr.dismissable);
      }
    };
  });

  /**
   * @author <Josue Ramirez Davila>
   * @mail <josueramirezdavila@gmail.com>
   *
   * @description       : CONSTRUYE UN ALERT BOOTSTRAP TIPO INFO
   * @attr show         : Nombre del modelo con el cual se estara mostrando u ocultando el alert
   * @attr dismissable  : Bandera que define si el alert sera dismissable o no ('true', 'false')
   *
   */
  app.directive("alertInfo", function(){
    return {
      restrict: "E",
      transclude: true,
      template: function(element, attr) {
        return buildAlert(attr.show, "info", attr.dismissable);
      }
    };
  });

	/**
   * @author <Josue Ramirez Davila>
   * @mail <josueramirezdavila@gmail.com>
   *
   * @description       : CONSTRUYE UN ALERT BOOTSTRAP TIPO SUCCESS
   * @attr show         : Nombre del modelo con el cual se estara mostrando u ocultando el alert
   * @attr dismissable  : Bandera que define si el alert sera dismissable o no ('true', 'false')
   *
   */
	app.directive("alertSuccess", function(){
		return {
			restrict: "E",
      transclude: true,
			template: function(element, attr) {
				return buildAlert(attr.show, "success", attr.dismissable);
			}
		};
	});

	/**
   *
   * @description   : CONSTRUYE UN MODAL BOOTSTRAP
   * @attr title    : Titulo del modal
   * @attr visible  : Bandera que define si el modal se muestra o no ('true', 'false')
   *
   */
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