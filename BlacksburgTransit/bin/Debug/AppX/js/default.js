// For an introduction to the Navigation template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232506

var _fromRouteCode = {
    TC: "Toms Creek",
    MSS: "Main Street Southbound",
    HWD: "Hethwood",
    TE: "Tuesday Route",
    TTT: "Two Town Trolley",
    MSN: "Main Street Northbound",
    HDG: "Harding Ave",
    PH: "Patrick Henry",
    HXP: "Hokie Express",
    PRG: "Progress Street",
    UCB: "University City Boulevard",
    UMS: "University Mall Shuttle",
    BTC: "Blacksburg Transit Commuter",
    CRC: "Coorporate Research Center",
    CRCH: "Coorporate Research Hospital",

};

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

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }

            if (app.sessionState.history) {
                nav.history = app.sessionState.history;
            }
            args.setPromise(WinJS.UI.processAll().then(function () {

                document.getElementById("cmdHome").addEventListener("click", _cmdHome, false);
                document.getElementById("cmdCalendar").addEventListener("click", _cmdCalendar, false);
                document.getElementById("cmdMap").addEventListener("click", _cmdMap, false);


                if (nav.location) {
                    nav.history.current.initialPlaceholder = true;
                    return nav.navigate(nav.location, nav.state);
                } else {
                    return nav.navigate(Application.navigator.home);
                }
            }));

        }
    });

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        app.sessionState.history = nav.history;
    };

    app.start();


    function _cmdHome() {
        if (nav.location != "/pages/home/home.html") {
            nav.navigate("/pages/home/home.html");
        } else {
            document.getElementById("appbar").winControl.hide();
        }
    }

    function _cmdMap() {
        if (nav.location != "/pages/map/map.html") {
            nav.navigate("/pages/map/map.html");
        } else {
            document.getElementById("appbar").winControl.hide();
        }
    }

    function _cmdCalendar() {
        if (nav.location != "/pages/calendar/calendar.html") {
            nav.navigate("/pages/calendar/calendar.html");
        } else {
            document.getElementById("appbar").winControl.hide();
        }
    }
})();
