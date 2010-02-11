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

    // Constructor function, all parameters are optional
    var TimeSpan = window.TimeSpan = function(milliseconds, seconds, minutes, hours, days) {
        var _version = "1.0";
        // Some "constants"
        var _msecPerSecond = 1000, _msecPerMinute = 60000, _msecPerHour = 3600000, _msecPerDay = 86400000;
        // Internally we store the TimeSpan as Milliseconds
        var _msecs = 0;

        // Helper functions
        var IsNumeric = function(input) {
            return !isNaN(parseFloat(input)) && isFinite(input);
        }
        // Constructor Logic
        if (IsNumeric(days)) _msecs += (days * _msecPerDay);
        if (IsNumeric(hours)) _msecs += (hours * _msecPerHour);
        if (IsNumeric(minutes)) _msecs += (minutes * _msecPerMinute);
        if (IsNumeric(seconds)) _msecs += (seconds * _msecPerSecond);
        if (IsNumeric(milliseconds)) _msecs += milliseconds;

        // Addition Functions
        this.AddMilliseconds = function(milliseconds) {
            if (!IsNumeric(milliseconds)) return;
            _msecs += milliseconds;
        };
        this.AddSeconds = function(seconds) {
            if (!IsNumeric(seconds)) return;
            _msecs += (seconds * _msecPerSecond);
        };
        this.AddMinutes = function(minutes) {
            if (!IsNumeric(minutes)) return;
            _msecs += (minutes * _msecPerMinute);
        };
        this.AddHours = function(hours) {
            if (!IsNumeric(hours)) return;
            _msecs += (hours * _msecPerHour);
        };
        this.AddDays = function(days) {
            if (!IsNumeric(days)) return;
            _msecs += (days * _msecPerDay);
        };

        // Subtraction Functions
        this.SubtractMilliseconds = function(milliseconds) {
            if (!IsNumeric(milliseconds)) return;
            _msecs -= milliseconds;
        };
        this.SubtractSeconds = function(seconds) {
            if (!IsNumeric(seconds)) return;
            _msecs -= (seconds * _msecPerSecond);
        };
        this.SubtractMinutes = function(minutes) {
            if (!IsNumeric(minutes)) return;
            _msecs -= (minutes * _msecPerMinute);
        };
        this.SubtractHours = function(hours) {
            if (!IsNumeric(hours)) return;
            _msecs -= (hours * _msecPerHour);
        };
        this.SubtractDays = function(days) {
            if (!IsNumeric(days)) return;
            _msecs -= (days * _msecPerDay);
        };

        // Functions to interact with other TimeSpans
        this.IsTimeSpan = function() {
            return true;
        }
        this.Add = function(otherTimeSpan) {
            if (!otherTimeSpan.IsTimeSpan || !otherTimeSpan.IsTimeSpan()) return;
            _msecs += otherTimeSpan.TotalMilliseconds();
        };
        this.Subtract = function(otherTimeSpan) {
            if (!otherTimeSpan.IsTimeSpan || !otherTimeSpan.IsTimeSpan()) return;
            _msecs -= otherTimeSpan.TotalMilliseconds();
        };
        this.Equals = function(otherTimeSpan) {
            if (!otherTimeSpan.IsTimeSpan || !otherTimeSpan.IsTimeSpan()) return;
            return _msecs == otherTimeSpan.TotalMilliseconds();
        };

        // Getters
        this.TotalMilliseconds = function() {
            return _msecs;
        };
        this.TotalSeconds = function() {
            return _msecs / _msecPerSecond;
        };
        this.TotalMinutes = function() {
            return _msecs / _msecPerMinute;
        };
        this.TotalHours = function() {
            return _msecs / _msecPerHour;
        };
        this.TotalDays = function() {
            return _msecs / _msecPerDay;
        };
        // Return a Fraction of the TimeSpan
        this.Milliseconds = function() {
            return _msecs % 1000;
        };
        this.Seconds = function() {
            return Math.floor(_msecs / _msecPerSecond) % 60;
        };
        this.Minutes = function() {
            return Math.floor(_msecs / _msecPerMinute) % 60;
        };
        this.Hours = function() {
            return Math.floor(_msecs / _msecPerHour) % 24;
        };
        this.Days = function() {
            return Math.floor(_msecs / _msecPerDay);
        };
        
        // Misc. Functions
        this.GetVersion = function() {
            return _version;
        };
    }

    // "Static Constructors"
    TimeSpan.FromSeconds = function(seconds) {
        return new TimeSpan(0, seconds, 0, 0, 0);
    }
    TimeSpan.FromMinutes = function(minutes) {
        return new TimeSpan(0, 0, minutes, 0, 0);
    }
    TimeSpan.FromHours = function(hours) {
        return new TimeSpan(0, 0, 0, hours, 0);
    }
    TimeSpan.FromDays = function(days) {
        return new TimeSpan(0, 0, 0, 0, days);
    }
})();