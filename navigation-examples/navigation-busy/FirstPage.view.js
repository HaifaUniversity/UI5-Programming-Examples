sap.ui.jsview("sap.ui.demo.wt.FirstPage", {  
  /** Specifies the Controller belonging to this View. 
  * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller. 
  * @memberOf routingdemo.App 
  */  
  getControllerName : function() {  
  return "sap.ui.demo.wt.FirstPage";  
  },  
  /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
  * Since the Controller is given to this method, its event handlers can be attached right away. 
  * @memberOf routingdemo.App 
  */  
  createContent : function(oController) {  
  var controller = this.oController;
	var page = new sap.m.Page({
		title:"First Page",
		enableScrolling: true
	}); 
	
	var oList = new sap.m.List({mode : sap.m.ListMode.SingleSelectMaster
		,showSeparators : sap.m.ListSeparators.All
		,swipeDirection : sap.m.SwipeDirection.Both
		,rememberSelections : false
		,selectionChange : function(oEvent){
		  controller.onPress(oEvent);
		}});

	var oTemplate = new sap.m.StandardListItem({
		title : "{Product}"
		,info :"{Weight}"
			,icon : "sap-icon://product"
				,type : sap.m.ListType.Navigation
	});

	var oSorter = new sap.ui.model.Sorter("Product", false, false);
	oList.bindItems("/modelData/productsData",oTemplate,oSorter);
	page.addContent(oList);
	return page;
  }  
});