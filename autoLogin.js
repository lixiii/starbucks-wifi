/**
 * Author: lixiii
 * Purpose: This is a simply NodeJS script to automatically log-in to Starbucks Wifi
 * Requirements: Unix operating system that support cURL, and any NodeJS stable release
 */

const { spawn } = require('child_process');
const timers = require("timers");

/**
 * Sends a login request every 10 mins
 */
var id = timers.setInterval(()=>{
  console.log(`Timestamp ${getDateTime()} --- Sent login request\n`)
  spawn("./login.sh");
}, 10*60*1000);

console.log(`Timestamp ${getDateTime()} --- Sent login request\n`)
spawn("./login.sh");
console.log(`Spawned interval. Programme will send a login request every 10 mins. Use Ctrl+C to terminate process and clear interval. \n`)

process.on('SIGINT', function() {
  console.log("\nClearing timer interval instance before exit...");
  timers.clearInterval(id);
  process.exit();
});


/**
 * Helper function
 */
function getDateTime() {

  var date = new Date();

  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;

  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;

  var sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;

  var day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;

}