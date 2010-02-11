/*!
* JavaScript TimeSpan Library
*
* Copyright (c) 2010 Michael Stum, http://www.Stum.de/
* 
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function() {

    var TimeSpan = window.TimeSpan = function(msecs, seconds, minutes, hours, days) {
        return new TimeSpan.init(msecs, seconds, minutes, hours, days);
    };

    TimeSpan.FromSeconds = function(seconds) {
        var newTS = window.TimeSpan(0);
        newTS.AddSeconds(seconds);
        return newTS;
    }

    TimeSpan = TimeSpan.prototype = {
        init: function(msecs, seconds, minutes, hours, days) {
            this.TotalMilliseconds = 0;
            if (typeof (days) === "number") this.AddDays(days);
            if (typeof (hours) === "number") this.AddHours(hours);
            if (typeof (minutes) === "number") this.AddMinutes(minutes);
            if (typeof (seconds) === "number") this.AddSeconds(seconds);
            if (typeof (msecs) === "number") this.AddMilliseconds(msecs);
            return this;
        },
        version: "0.0.2",
        TotalMilliseconds: 0,
        // Some Constants
        MsecPerSecond: 1000,
        MsecPerMinute: 60000,
        MsecPerHour: 3600000,
        MsecPerDay: 86400000,
        // Functions to interact with other TimeSpans
        Add: function(otherTimeSpan) {
        },
        Substract: function(otherTimeSpan) {
        },
        // Addition Functions
        AddMilliseconds: function(milliseconds) {
            this.TotalMilliseconds += milliseconds;
        },
        AddSeconds: function(seconds) {
            this.TotalMilliseconds += seconds * this.MsecPerSecond;
        },
        AddMinutes: function(minutes) {
            this.TotalMilliseconds += minutes * this.MsecPerMinute;
        },
        AddHours: function(hours) {
            this.TotalMilliseconds += hours * this.MsecPerHour;
        },
        AddDays: function(days) {
            this.TotalMilliseconds += days * this.MsecPerDay;
        },
        // Substraction Functions
        SubstractMilliseconds: function(milliseconds) {
            this.TotalMilliseconds -= milliseconds;
        },
        SubstractSeconds: function(seconds) {
            this.TotalMilliseconds -= seconds * this.MsecPerSecond;
        },
        SubstractMinutes: function(minutes) {
            this.TotalMilliseconds -= minutes * this.MsecPerMinute;
        },
        SubstractHours: function(hours) {
            this.TotalMilliseconds -= hours * this.MsecPerHour;
        },
        SubstractDays: function(days) {
            this.TotalMilliseconds -= days * this.MsecPerDay;
        }
    };

    TimeSpan.init.prototype = TimeSpan;

})();