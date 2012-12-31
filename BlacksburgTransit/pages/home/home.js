
var routeData = new WinJS.Binding.List([]);

var _fromRouteCode = {
    TC: "Tom's Creek",
    MSS: "Main Street South",
    HWD: "Heathwood",
    TTT: "Two Town Trolley",
    MSN: "Main Street North",
    HDG: "Harding Avenue",
    HXP: "Hokie Express",
};

var _routeData = [];

WinJS.Namespace.define("Global", {
    fromRouteCode: function (code) {
        if (this._fromRouteCode[code] != null) {
            return this._fromRouteCode[code];
        } else {
            return code;
        }
    },

    _fromRouteCode: _fromRouteCode,
    });

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
