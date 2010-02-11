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
            if (this.IsNumeric(days)) this.AddDays(days);
            if (this.IsNumeric(hours)) this.AddHours(hours);
            if (this.IsNumeric(minutes)) this.AddMinutes(minutes);
            if (this.IsNumeric(seconds)) this.AddSeconds(seconds);
            if (this.IsNumeric(msecs)) this.AddMilliseconds(msecs);
            return this;
        },
        version: "0.0.3",
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
            if (!this.IsNumeric(milliseconds)) return;
            this.TotalMilliseconds += milliseconds;
        },
        AddSeconds: function(seconds) {
            if (!this.IsNumeric(seconds)) return;
            this.TotalMilliseconds += (seconds * this.MsecPerSecond);
        },
        AddMinutes: function(minutes) {
            if (!this.IsNumeric(minutes)) return;
            this.TotalMilliseconds += (minutes * this.MsecPerMinute);
        },
        AddHours: function(hours) {
            if (!this.IsNumeric(hours)) return;
            this.TotalMilliseconds += (hours * this.MsecPerHour);
        },
        AddDays: function(days) {
            if (!this.IsNumeric(days)) return;
            this.TotalMilliseconds += (days * this.MsecPerDay);
        },
        // Substraction Functions
        SubstractMilliseconds: function(milliseconds) {
            if (!this.IsNumeric(milliseconds)) return;
            this.TotalMilliseconds -= milliseconds;
        },
        SubstractSeconds: function(seconds) {
            if (!this.IsNumeric(seconds)) return;
            this.TotalMilliseconds -= (seconds * this.MsecPerSecond);
        },
        SubstractMinutes: function(minutes) {
            if (!this.IsNumeric(minutes)) return;
            this.TotalMilliseconds -= (minutes * this.MsecPerMinute);
        },
        SubstractHours: function(hours) {
            if (!this.IsNumeric(hours)) return;
            this.TotalMilliseconds -= (hours * this.MsecPerHour);
        },
        SubstractDays: function(days) {
            if (!this.IsNumeric(days)) return;
            this.TotalMilliseconds -= (days * this.MsecPerDay);
        },
        // Helper Functions
        IsNumeric: function(input) {
            return !isNaN(parseFloat(input)) && isFinite(input);
        }
    };

    TimeSpan.init.prototype = TimeSpan;

})();