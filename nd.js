#!/usr/bin/env /usr/local/bin/node
// shebang for bitbar - comment out line 1 for web deploy

/*
Numerare Dieum and Beats
J L Hoover
Version 1.0 2021.02.27 
72 Duomelia 2459
(16 Sol 2271)
*/

// Bitbar Metadata
// bitbar.title - Numerare Dieum
// bitbar.version - Version 1.0
// bitbar.author - Jerry L Hoover
// bitbar.author.github - realjhoo
// bitbar.desc - Julian Date and Beat Time
// bitbar.image - working...
// bitbar.dependencies - working...
// bitbar.abouturl - URL to about

const meliaName = [
  "Nullamelia",
  "Unumelia",
  "Duomelia",
  "Triamelia",
  "Quattarmelia",
  "Quinquemelia",
  "Sexmelia",
  "Septmelia",
  "Octomelia",
  "Novemelia",
];

// --------------------------------------------------------
function getJulianDay() {
  // gets the julian date, off set UTC+1 tho
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

  // calculate julian date - thanks stackoverflow
  let a = (14 - month) / 12;
  let y = year + 4800 - a;
  let m = month + 12 * a - 3;

  let JD =
    date + (153 * m + 2) / 5 + y * 365 + y / 4 - y / 100 + y / 400 - 32045;

  // remove the fractional bit. We'll replace with beats later
  let remainder = JD % 1;
  JD -= remainder;

  return JD;
}

// --------------------------------------------------------
function getBeats() {
  const secondsPerBeat = 86.4;

  let time = new Date();
  let seconds = time.getUTCSeconds(),
    minutes = time.getUTCMinutes(),
    hours = time.getUTCHours();

  // correct for Central European Standard -> UTC + 1
  if (hours === 23) {
    hours = 0;
  } else {
    hours++;
  }

  let secondsSoFar = convertToSeconds(hours, minutes, seconds);

  // * * * convert to beats, aka internet time * * *
  // the next 4 lines of code could be combined. Separated for clarity
  // chop excessive precision
  let internetTime = (secondsSoFar / secondsPerBeat).toFixed(2);
  // pad with leading zeros
  internetTime = "000" + internetTime;
  // cut to correct length start with back
  internetTime = internetTime.slice(-6);
  // add the @
  internetTime = "@" + internetTime;

  return internetTime;
}

// --------------------------------------------------------
function convertToSeconds(hours, minutes, seconds) {
  return (hours * 60 + minutes) * 60 + seconds;
}

// --------------------------------------------------------
function sliceJD(ND) {
  // extract elements from the JD
  let triennium = ND.toString().slice(0, 4);
  let melia = ND.toString().slice(4, 5);
  let centum = ND.toString().slice(5, 7);

  return [triennium, melia, centum];
}

// --------------------------------------------------------
function getOrdinalIndicator(number) {
  // adds st, nd, rd or th to number
  let rightmostDigit = number.toString().slice(-1);
  let ordinalIndicator = "";

  if (number >= 11 && number <= 13) {
    ordinalIndicator = "th";
  } else if (rightmostDigit < 1 || rightmostDigit >= 4) {
    ordinalIndicator = "th";
  } else if (parseInt(rightmostDigit) === 1) {
    ordinalIndicator = "st";
  } else if (parseInt(rightmostDigit) === 2) {
    ordinalIndicator = "nd";
  } else if (parseInt(rightmostDigit) === 3) {
    ordinalIndicator = "rd";
  }

  return ordinalIndicator;
}

// --------------------------------------------------------
function main() {
  let ND = getJulianDay();
  let thebeats = getBeats();
  let [triennium, melia, centum] = sliceJD(ND);

  // log out for bitbar display
  console.log(triennium, meliaName[melia], centum + " " + thebeats);
}

// --------------------------------------------------------
main();
