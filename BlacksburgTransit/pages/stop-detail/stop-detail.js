// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511

WinJS.Namespace.define("StopDetail", { ArrivalList: [] });

function get_time_difference (earlierDate, laterDate)
{
    var nTotalDiff = laterDate.getTime() - earlierDate.getTime();
    var oDiff = new Object();
 
    oDiff.days = Math.floor(nTotalDiff/1000/60/60/24);
    nTotalDiff -= oDiff.days*1000*60*60*24;
 
    oDiff.hours = Math.floor(nTotalDiff/1000/60/60);
    nTotalDiff -= oDiff.hours*1000*60*60;
 
    oDiff.minutes = Math.floor(nTotalDiff/1000/60);
    nTotalDiff -= oDiff.minutes*1000*60;
 
    oDiff.seconds = Math.floor(nTotalDiff/1000);
 
    return oDiff;
 
}

(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/stop-detail/stop-detail.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var _arrivalList = document.getElementById("arrival-list").winControl;

            var _GetNextDepartures = "http://www.bt4u.org/BT4U_WebService.asmx/GetNextDepartures?routeShortName=" + options.shortCode + "&stopCode=" + options.code;

            document.getElementById("route-code").innerText = options.shortCode;
            document.getElementById("stop-code").innerText = options.code;
            document.getElementById("stop-name").innerText = options.name;

            var Arrival = WinJS.Binding.define({
                time: null,
                //tripNotes: null,
                //stopNotes: null,
                timeFriendly: null
            });

            var _arrivals = [];

            WinJS.xhr({url: _GetNextDepartures}).done(
                function(request) {
                    var response = request.responseXML;
                    var arrivals = response.querySelectorAll("NextDepartures");

                    if (arrivals.length == 0) {
                        document.getElementById("empty-list").style.display = 'block';
                    }

                    for (var i = 0; i < arrivals.length; i++) {
                        var _arrival = arrivals[i];
                        

                        //var tripNotes = _arrival.querySelector("TripNotes");
                        //var stopnotes = _arrival.querySelector("StopNotes");

                        var _time = _arrival.querySelector("AdjustedDepartureTime").textContent;

                        var date = new Date(_time);

                        var dateDiff = get_time_difference(new Date(), date);

                        var friendly = Math.floor(parseInt(dateDiff.minutes) + (parseInt(dateDiff.hours) * 60));
                        if ( friendly > 60 ) friendly = "60+";

                        var _a = new Arrival({
                            time: _time,
                            timeFriendly: friendly
                        });

                        _arrivals.push(_a);
                    }

                    StopDetail.ArrivalList = _arrivals;
                    _arrivalList.itemDataSource = new WinJS.Binding.List(_arrivals).dataSource;
                }
            );
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        },

        // Simple function to calculate time difference between 2 Javascript date objects
      
});
})();
