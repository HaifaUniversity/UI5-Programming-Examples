sap.ui.jsview("sap.ui.demo.wt.SecondPage", {
    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller. 
     * @memberOf routingdemo.App 
     */
    getControllerName: function() {
        return "sap.ui.demo.wt.SecondPage";
    },
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away. 
     * @memberOf routingdemo.App 
     */
    createContent: function(oController) {
        var oFirstTitle;
        var oFirstInfo;
        var controller = this.oController;
        var page = new sap.m.Page({
            title: "Second Page",
            showNavButton: true,
            navButtonPress: controller.onPress,
            enableScrolling: true
        });

        this.addEventDelegate({
            onBeforeShow: function(event) {
                var oBusyDialog = sap.ui.getCore().byId("GlobalBusyDialog");
                oBusyDialog.open();
                var params = event.data;
                var oFirstTitle = params.oTitle;
                var oFirstInfo = params.oInfo;
                sap.ui.getCore().byId("oLabel").setText(oFirstTitle);
                sap.ui.getCore().byId("oInput").setValue(oFirstInfo);
            },
            onAfterShow: function(event) {
                var oBusyDialog = sap.ui.getCore().byId("GlobalBusyDialog");
                oBusyDialog.close();
            }
        }, this);

        var oProductText = new sap.m.Label("oLabel").addStyleClass("labelStyle");
        var oWeightInput = new sap.m.Input("oInput").addStyleClass("inputStyle");
        var oHBox = new sap.m.HBox({ justifyContent: "Center", items: [oProductText, oWeightInput] });
        page.addContent(oHBox);

        return page;
    }
});