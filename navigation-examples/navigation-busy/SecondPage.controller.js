sap.ui.controller("sap.ui.demo.wt.SecondPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf table_v01.Main
*/

	onInit: function() {

	},
	
	onPress: function(oEvent){
		var app = sap.ui.getCore().byId("mainApp");
		app.back();
	}

});