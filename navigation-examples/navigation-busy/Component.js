jQuery.sap.declare("sap.ui.demo.wt.Component");
sap.ui.core.UIComponent.extend("sap.ui.demo.wt.Component", {
    createContent: function() {
        // create root view  
        var oView = sap.ui.view({
            id: "app",
            viewName: "sap.ui.demo.wt.Home",
            type: "JS",
        });

        var dataObject = [
            { Product: "Power Projector 4713", Weight: "33" },
            { Product: "Gladiator MX", Weight: "33" },
            { Product: "Hurricane GX", Weight: "45" },
            { Product: "Webcam", Weight: "33" },
            { Product: "Monitor Locking Cable", Weight: "41" },
            { Product: "Laptop Case", Weight: "64" }
        ];

        var model = new sap.ui.model.json.JSONModel();
        model.setData({
            modelData: {
                productsData: []
            }
        });
        oView.setModel(model);
        oView.getModel().setProperty("/modelData/productsData", dataObject);

        return oView;
    }
});