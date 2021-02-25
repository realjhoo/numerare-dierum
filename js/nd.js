// --------------------------------------------------------
function getJulianDay() {
  let today = new Date();
  let year = today.getUTCFullYear(),
    month = today.getUTCMonth(),
    date = today.getUTCDate(),
    hour = today.getUTCHours();

  month++; // because javascript counts 0-11

  // correct for Central European Standard Time
  // so that between 11pm and 12am UTC, the date
  // is incremented
  if (hour === 23) {
    date++;
  }

  // calculate julian date
  let a = (14 - month) / 12;
  let y = year + 4800 - a;
  let m = month + 12 * a - 3;

  let JD =
    date + (153 * m + 2) / 5 + y * 365 + y / 4 - y / 100 + y / 400 - 32045;

  // remove the fractional bit. We'll replace with beats.
  let remainder = JD % 1;
  JD -= remainder;

  return JD;
  // for 2021.02.25 -> expected output = 2459270
}

// --------------------------------------------------------
function getBeats() {
  const secondsPerBeat = 86.4;

  let time = new Date();
  let seconds = time.getUTCSeconds(),
    minutes = time.getUTCMinutes(),
    hours = time.getUTCHours();

  // correct for "Biel Mean Time" i.e.,
  // Central European Standard -> UTC + 1
  if (hours === 23) {
    hours = 0;
  } else {
    hours++;
  }

  let secondsSoFar = convertToSeconds(hours, minutes, seconds);

  // * * * convert to swatch internet time * * *
  // the next 4 lines of code could be combined. Separated for clarity
  // chop excessive precision
  let internetTime = (secondsSoFar / secondsPerBeat).toFixed(2);
  // pad with leading zeros
  internetTime = "000" + internetTime;
  // cut to correct length start with back
  internetTime = internetTime.slice(-6);
  // add the @
  internetTime = "@" + internetTime;

  // log out displays on the menu bar
  //  console.log(internetTime);
  return internetTime;
}

// --------------------------------------------------------
function convertToSeconds(hours, minutes, seconds) {
  return (hours * 60 + minutes) * 60 + seconds;
}

// --------------------------------------------------------
let ND = getJulianDay(25, 2, 2021);
let thebeats = getBeats();

console.log(ND + thebeats);

/* 
TODO: 
Place lose code in functions... I hate lose code!!!
Output the results to the web page
Make page pretty for gods' sake
Rewrite blurb so it doesnt want to show current Numerare Dierum multiple times
Run the current and updating time at the top
Adapt the code to the bitbar beats :-)
Deploy this page to saxondate.com using the menu bar there
Rewrite the menu bar there. Dev Ed?
*/
