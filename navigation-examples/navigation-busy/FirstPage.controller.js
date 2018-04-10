sap.ui.controller("sap.ui.demo.wt.FirstPage", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf table_v01.Main
     */

    onInit: function() {

    },

    onPress: function(oEvent) {
        var oBindingPath = this.getView().getModel().getProperty(oEvent.getSource().getBinding("items").getContexts()[oEvent.getSource().indexOfItem(oEvent.getParameters().listItem)].sPath);
        var oSelectedTitle = oBindingPath.Product;
        var oSelectedInfo = oBindingPath.Weight;
        var app = sap.ui.getCore().byId("mainApp");
        var page = app.getPage("SecondPage");
        if (page === null) {
            var page = new sap.ui.jsview("SecondPage", "sap.ui.demo.wt.SecondPage");
            app.addPage(page);
        }

        app.to(page, "slide", { oTitle: oSelectedTitle, oInfo: oSelectedInfo });
    }

});