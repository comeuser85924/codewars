/* Human Readable Time [5 kyu]
    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.
*/
function humanReadable(seconds) {
    var hour = Math.floor(seconds/3600)
    var min = Math.floor((seconds - hour *3600)/60)
    var s = Math.floor(seconds - (hour *3600)-  (min * 60))
    if(hour < 10){hour = '0' + hour.toString()}else{hour = hour.toString()}
    if(min < 10){min = '0' + min.toString()}else{min = min.toString()}
    if(s < 10){s = '0' + s.toString()}else{s = s.toString()}
    return hour + ':' + min + ':' + s
}
humanReadable(359999) //'99:59:59' 
/* Clever Answer
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
*/