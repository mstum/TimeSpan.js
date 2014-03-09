JavaScript TimeSpan Library
===========================

- [Creating the Object](#creating-the-object)
  - [1. Using the `new` constructor](#1-using-the-new-constructor)
  - [2. Using the static constuctors](#2-using-the-static-constuctors)
- [Adding/subtracting time](#addingsubtracting-time)
- [Interacting with other TimeSpans](#interacting-with-other-timespans)
- [Retrieving the value of the TimeSpan](#retrieving-the-value-of-the-timespan)
  - [1. Retrieve the full value](#1-retrieve-the-full-value)
  - [2. Retrieve a component of the TimeSpan](#2-retrieve-a-component-of-the-timespan)
- [Misc. Functions](#misc-functions)
- [Version History](CHANGES.md)

CREATING THE OBJECT
-------------------
You have two options to create a new TimeSpan object:

### 1. Using the `new` constructor

```javascript
var ts = new TimeSpan();
```

The constructor takes five parameters, all of which are optional and which
can be used to initialize the TimeSpan to a given value. These
parameters are:

```javascript
milliseconds
seconds
minutes
hours
days
```

Example:

```javascript
var ts = new TimeSpan(0,16,4);
```

initializes the TimeSpan to 4 minutes, 16 seconds and 0 milliseconds.

```javascript
var ts = new TimeSpan(0,10,64,2);
```

initializes the TimeSpan to 3 hours, 4 minutes, 10 seconds and 0 milliseconds.

### 2. Using the static constuctors

You can initialize a new TimeSpan by calling one of these functions:

```javascript
TimeSpan.FromSeconds
TimeSpan.FromMinutes
TimeSpan.FromHours
TimeSpan.FromDays
TimeSpan.FromDates  // this behaves differently, see below
```

these take a single numeric parameter and create a new TimeSpan.

```javascript
var ts = TimeSpan.FromSeconds(45);
```

is equivalent to

```javascript
var ts = new TimeSpan(0,45);
```

If the parameter is invalid/not a number, it will just be treated as 0
but not throw any error.

```javascript
TimeSpan.FromDates
```

This is different as it takes two dates. The TimeSpan will be the
difference between these dates.

If the second date is earlier than the first date, the TimeSpan will
have a negative value. You can pass in `true` as the third parameter
to force the TimeSpan to be positive always.

Example:

```javascript
var date1 = new Date(2010, 3, 1, 10, 10, 5, 0);
var date2 = new Date(2010, 3, 1, 10, 10, 10, 0);
var ts = TimeSpan.FromDates(date2, date1);
var ts2 = TimeSpan.FromDates(date2, date1, true);
alert(ts.totalSeconds()); // -5, because we put the later date first
alert(ts2.totalSeconds()); // 5, because we passed true as third parameter
```

ADDING/SUBTRACTING TIME
-----------------------

There are several functions to add or subtract time:

```javascript
addMilliseconds
addSeconds
addMinutes
addHours
addDays
subtractMilliseconds
subtractSeconds
subtractMinutes
subtractHours
subtractDays
```

All these functions take a single numeric parameter. If the parameter is
invalid/not a number/missing, it will be ignored. No error is thrown.

```javascript
var ts = new TimeSpan();
ts.addSeconds(30);
ts.addMinutes(2);
ts.subtractSeconds(60);
// ts will now be a timespan of 1 minute and 30 seconds
```

The parameter can be negative to negate the operation:

```javascript
ts.addSeconds(-30);
```

is equivalent to

```javascript
ts.subtractSeconds(30);
```

INTERACTING WITH OTHER TIMESPANS
--------------------------------

These are the functions that interact with another TimeSpan:

```javascript
add
subtract
equals
```

To add/subtract the other TimeSpan to the current one:

```javascript
var ts = TimeSpan.FromSeconds(30);
var ts2 = TimeSpan.FromMinutes(2);
ts.add(ts2);
// ts is now a TimeSpan of 2 Minutes, 30 Seconds
// ts2 is unchanged
```

To check if two TimeSpans have the same value:

```javascript
var ts = TimeSpan.FromSeconds(30);
var ts2 = TimeSpan.FromSeconds(30);
var eq = ts.equals(ts2); // true
ts2.addSeconds(1);
var eq2 = ts.equals(ts2); // false
```

RETRIEVING THE VALUE OF THE TIMESPAN
------------------------------------

There are two sets of functions to get the value of the TimeSpan:

1. Retrieve the full value
--------------------------

```javascript
totalMilliseconds
totalSeconds
totalMinutes
totalHours
totalDays
```

These functions convert the value to the given format and return it. The
result can be a floating point number. These functions take a single
parameter `roundDown` which can be set to true to round the value down to
an Integer.

Example:

```javascript
var ts = TimeSpan.FromSeconds(90);
alert(ts.totalMilliseconds()); // 90000
alert(ts.totalSeconds());      // 90
alert(ts.totalMinutes());      // 1.5
alert(ts.totalMinutes(true));  // 1
```

2. Retrieve a component of the TimeSpan
---------------------------------------

```javascript
milliseconds
seconds
minutes
hours
days
```

These functions return a component of the TimeSpan that could be used to
represent a clock. For example:

```javascript
var ts = TimeSpan.FromSeconds(90);
alert(ts.seconds()); // 30
alert(ts.minutes()); // 1
```

Basically these values never overflow - `seconds` will only return 0 to
59, `hours` only 0 to 23 etc. `days` can grow infinitely. All of these
functions automatically round down the result:

```javascript
var ts = TimeSpan.FromDays(2);
ts.addHours(12);
alert(ts.days()); // 2
alert(ts.hours()); // 12
```

MISC. FUNCTIONS
---------------

```javascript
getVersion
```

Returns the Version of TimeSpan as a string.

