sap.ui.define(["sap/ui/core/mvc/ComponentContainer"], function (ComponentContainer) {
    "use strict";

    var oContainer = new ComponentContainer({
        id: "container",
        name: "sap.training.exc",
        manifest: true,
        async: true,
        settings: {
            id: "sap.training.exc"
        }
    });
    oContainer.placeAt("content");
});