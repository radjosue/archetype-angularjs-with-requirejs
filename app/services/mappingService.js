'use strict'

/**
 * @author <Josue Ramirez Davila>
 * @mail <josueramirezdavila@gmail.com>
 * @description Se definen las url del API-REST que alimentara la aplicacion.
 *
 */

define(['modules/app'], function(app)
{

	app.service('mappingService', [function()
	{
		/* PREFIJO QUE SE DEBE CONCATENAR AL PRINCIPIO DE CADA MAPEO DE URL */
		var PATH_REST_SERVICES = "";
			
		/* SUFIJO QUE SE DEBE CONCATENAR AL FINAL DE CADA MAPEO DE URL */
		var HTM = ".htm";

		/*  ARREGLO QUE CONTENDRA EL MAPEO DE LAS URL A LOS REST-CONTROLLER*/
		var services =  {
	        modulo : { // modulo|paquete en los controllers de java
	            controlador : { // nombre del controlador de java
	            	accion : PATH_REST_SERVICES + "API" + HTM // accion del controler java que se ejecutara
	        	}
	    	}
	    }
	}]);

});