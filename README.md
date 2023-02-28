JAVASCRIPT SCHEDULER
This is a Javascript type scheduler, the code starts by counting 7 days up from the current system date, and adds times from a range between 7am and 9pm for each of the seven days.

When a date is clicked, it turns green in the table and the date/time is directly added to local storage, if the selected data is clicked again it turns white and gets removed from local storage.

You can them use localstorage.get item to post the dates/times to a database.

WHY?
Well i think that this code does a great job of setting up a scheduler for a website/web application, and it is very easy to use and to understand. 
This code is part of a larger project that I worked on, and i thought that its a good start code for any dev that wants to make a scheduler without having to worry about the date/time logic. If you look the line 14 of calendar_events.js you can adjust the number of days that you want to count up from the current date, in line 21 you can adjust the time range that you want to display in the table.
Bootstrap is used for the styling of the table. Enjoy!