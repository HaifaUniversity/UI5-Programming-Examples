sap.ui.jsview("sap.ui.demo.wt.Home", {
    /** Specifies the Controller belonging to this View. 
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller. 
     * @memberOf routingdemo.App 
     */
    getControllerName: function() {
        return "sap.ui.demo.wt.Home";
    },
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
     * Since the Controller is given to this method, its event handlers can be attached right away. 
     * @memberOf routingdemo.App 
     */
    createContent: function(oController) {
        this.setDisplayBlock(true);
        var oBusyDialog_Global = new sap.m.BusyDialog("GlobalBusyDialog", { title: "Please wait. . . " });
        this.app = new sap.m.App("mainApp", { initialPage: "FirstPage" });

        var page = sap.ui.jsview("FirstPage", "sap.ui.demo.wt.FirstPage");
        this.app.addPage(page);
        return this.app;
    }
});