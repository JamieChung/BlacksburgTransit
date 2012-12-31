// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511

var map, infobox;
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/map/map.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.


            Microsoft.Maps.loadModule('Microsoft.Maps.Map', {
                callback: function () {
                    try {
                        var mapOptions = {
                            credentials: "AmE-4nFpLUNg38zkzw7zKkYpyrGmnjU2mCUisdpLR5_OBNsU5_wrVh0LpsI3WG-x",
                            center: new Microsoft.Maps.Location(37.231422, -80.413939),
                            mapTypeId: Microsoft.Maps.MapTypeId.road,
                            zoom: 14,
                            showLogo: false
                        };

                        map = new Microsoft.Maps.Map(document.getElementById("map"), mapOptions);


                        // Hide the infobox when the map is moved.
                        Microsoft.Maps.Events.addHandler(map, 'viewchange', hideInfobox);

                        infobox = new Microsoft.Maps.Infobox(
                            new Microsoft.Maps.Location(0, 0),
                            {
                                visible: false,
                                offset: new Microsoft.Maps.Point(0, 30),
                                height: 100
                            });
                        map.entities.push(infobox);

                        WinJS.xhr({ url: "http://www.bt4u.org/BT4U_WebService.asmx/GetCurrentBusInfo" }).done(
                            function (request) {
                                var response = request.responseXML;
                                var buses = response.querySelectorAll("RTFInfo");
                                var locs = [];
                                for (var i = 0; i < buses.length; i++) {
                                    var bus = buses[i];

                                    var lat = bus.querySelector("Latitude").textContent;
                                    var long = bus.querySelector("Longitude").textContent;

                                    var point = new Microsoft.Maps.Location(lat, long);
                                    locs.push(point);

                                    var pin = new Microsoft.Maps.Pushpin(point, { text: bus.querySelector("RouteShortName").textContent });
                                    pin.bus = bus;
                                    map.entities.push(pin);

                                    Microsoft.Maps.Events.addHandler(pin, 'click', displayInfobox);
                                }

                                map.setView({ bounds: Microsoft.Maps.LocationRect.fromLocations(locs) });
                            }
                        );

                    } catch (e) {
                        var md = new Windows.UI.Popups.MessageDialog(e.message);
                        md.showAsync();
                    }
                }
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

    function displayInfobox(e) {
        if (e.targetType == 'pushpin') {
            infobox.setLocation(e.target.getLocation());

            var content = "<p>" + e.target.bus.querySelector("TripPointName").textContent + "</p>";

            infobox.setOptions({ visible: true, title: Global.fromRouteCode(e.target.bus.querySelector("RouteShortName").textContent), description: content });
        }
    }

    function hideInfobox(e) {
        infobox.setOptions({ visible: false });
    }
})();
