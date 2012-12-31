
var routeData = new WinJS.Binding.List([]);


var _routeData = [];


(function () {
    "use strict";

    var CurrentPage = WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var _routeList = document.getElementById("route-list").winControl;
            _routeData = [];

            WinJS.xhr({ url: "http://www.bt4u.org/BT4U_WebService.asmx/GetCurrentRoutes" }).done(
                function (request) {
                    var response = request.responseXML;
                    var routes = response.querySelectorAll("CurrentRoutes");

                    document.getElementById("progress").style.display = 'none';

                    if (routes.length == 0) {
                        document.getElementById("empty-list").style.display = 'block';
                        document.getElementById("button-calendar").addEventListener("click", function () {
                            WinJS.Navigation.navigate("/pages/calendar/calendar.html");
                        }, false);
                    }

                    for (var i = 0; i < routes.length; i++) {
                        var route = routes[i];
                        var routeCode = route.querySelector("RouteShortName").textContent;
                        var routeName = routeCode;

                        _routeData.push({ code: routeCode, name: Global.fromRouteCode(routeCode) });
                    }

                    _routeList.itemDataSource = new WinJS.Binding.List(_routeData).dataSource;
                }
            );

            _routeList.oniteminvoked = this.clickHandler.bind(this);
        },

        clickHandler: function (event) {
            event.detail.itemPromise.then(function (item) {
                WinJS.Navigation.navigate('/pages/route-detail/route-detail.html', { shortCode: item.data.code });
            });
        }
    });
})();
