WinJS.Namespace.define(
        "StopDataSource", {
            stopData: []
         }
        );

WinJS.Namespace.define("GlobalBinding", { Data: {} });

// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/route-detail/route-detail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.


            var data = { shortCode: "HELLO WORLD" };
            GlobalBinding.Data = data;
            var shortCode = "TC";
            var _GetScheduledStopCodes = "http://www.bt4u.org/BT4U_WebService.asmx/GetScheduledStopCodes?routeShortName=" + shortCode;


            var RouteStop = WinJS.Binding.define({
                routeCode: shortCode,
                code: null,
                name: null
            });

            var _stopTemplate = document.getElementById("stop-template");
            var _stopList = document.getElementById("stop-list");

            var _stops = [];

            WinJS.Binding.processAll(document.getElementById("short-code-text", GlobalBinding.Data));

            WinJS.xhr({ url: _GetScheduledStopCodes }).done(
                function (request) {
                    var response = request.responseXML;
                    var stops = response.querySelectorAll("ScheduledStops");
                    for (var i = 0; i < stops.length; i++) {
                        var stop = stops[i];
                        var stopCode = stop.querySelector("StopCode").textContent;
                        var stopName = stop.querySelector("StopName").textContent;

                        var _stop = new RouteStop({
                            code: stopCode,
                            name: stopName
                        });

                        _stops.push(_stop);
                    }

                    StopDataSource.stopData = _stops;
                    var _stopList = document.getElementById("stop-list").winControl;
                    _stopList.itemDataSource = new WinJS.Binding.List(StopDataSource.stopData).dataSource;
                });

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();
