WinJS.Namespace.define("StopDataSource", { stopData: [], shortCode: "world" });
WinJS.Namespace.define("GlobalBinding", { Data: {shortCode : "hello"} });

// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/route-detail/route-detail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var shortCode = options.shortCode;
            GlobalBinding.Data.shortCode = shortCode;
            var _GetScheduledStopCodes = "http://www.bt4u.org/BT4U_WebService.asmx/GetScheduledStopCodes?routeShortName=" + shortCode;

            document.getElementById("short-code-text").innerHTML = Global.fromRouteCode(shortCode);

            var RouteStop = WinJS.Binding.define({
                code: null,
                name: null,
                shortCode: shortCode
            });

            var _stopTemplate = document.getElementById("stop-template");
            var _stopList = document.getElementById("stop-list").winControl;
            var _stops = [];

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
                            name: stopName,
                            shortCode: shortCode
                        });

                        _stops.push(_stop);
                    }

                    StopDataSource.stopData = _stops;
                    _stopList.itemDataSource = new WinJS.Binding.List(StopDataSource.stopData).dataSource;
                });


            _stopList.oniteminvoked = this.clickHandler.bind(this);
        },

        clickHandler: function (event) {
            event.detail.itemPromise.then(function (item) {
                WinJS.Navigation.navigate("/pages/stop-detail/stop-detail.html", item.data);
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
