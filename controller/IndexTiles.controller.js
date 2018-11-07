sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	var oRouter; 
	//const url = 'https://yoncacoskun.github.io';
	return Controller.extend("ems.UI5Showcase.controller.IndexTiles", {
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ems.UI5Showcase.view.IndexTiles
		 */
		onInit: function () {
			oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		onVendorTilePress: function (oEvent) {
			oRouter.navTo("vendors");
		},
		onBillingDocsPress: function(oEvent){
			oRouter.navTo("billingDocs");
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ems.UI5Showcase.view.IndexTiles
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ems.UI5Showcase.view.IndexTiles
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ems.UI5Showcase.view.IndexTiles
		 */
		//	onExit: function() {
		//
		//	}

	});

});