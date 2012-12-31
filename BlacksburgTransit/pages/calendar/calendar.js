// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511

WinJS.Namespace.define("Calendar", { CalendarList: [] });

(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/calendar/calendar.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var _calendarList = document.getElementById("calendar-list").winControl;

            WinJS.xhr({ url: "http://www.blacksburg.gov/rss.aspx?type=4&cat=37&custom=791" }).done(
                function (request) {
                    var response = request.responseXML;
                    var items = response.querySelectorAll("item");

                    var _days = [];
                    
                    var CalendarDay = WinJS.Binding.define({
                        dayA: null,
                        day: null,
                        month: null,
                        year: null,
                        notes: null,
                        service: null,
                    });

                    document.getElementById("progress").style.display = 'none';
                    
                    var dayFormatter = new Windows.Globalization.DateTimeFormatting.DateTimeFormatter("day");
                    var dayAFormatter = new Windows.Globalization.DateTimeFormatting.DateTimeFormatter("dayofweek.abbreviated");
                    var monFormatter = new Windows.Globalization.DateTimeFormatting.DateTimeFormatter("month.abbreviated");

                    for (var i = 0; i < items.length; i++) {
                        var item = items[i];

                        var title = item.querySelector("title").textContent.split(" ");
                        if (title.length == 2 && title[1].toLowerCase() == "service") {
                            var date = new Date(item.querySelector("pubDate").textContent);
                            var _day = new CalendarDay({
                                day: dayFormatter.format(date),
                                dayA: dayAFormatter.format(date),
                                month: monFormatter.format(date),
                                year: date.getFullYear(),
                                notes: item.querySelector("description").textContent,
                                service: title[0] + " Service",
                            });

                            _days.push(_day);
                        }
                    }

                    _calendarList.itemDataSource = new WinJS.Binding.List(_days).dataSource;
                },
                function (error) {

                }
            );
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
