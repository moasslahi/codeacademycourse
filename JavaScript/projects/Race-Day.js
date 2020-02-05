// Race Day

// There are adult runners (over 18 years of age) and
// youth runners (under 18 years of age).
// They can register early or late.
// Runners are assigned a race number
// and start time based on their age and registration.

// Race number:
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.

// Start time:
// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = false;
let runnerAge = 29;

if (runnerAge > 18 && earlyRegister) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRegister) {
  console.log(
    `Hello Adult participant ${raceNumber}! the race starts at 9:30 am`
  );
} else if (runnerAge > 18 && !earlyRegister) {
  console.log(
    `Hello  Adult particpant ${raceNumber}, you are late. Therefore, the race starts at 11 am`
  );
} else if (runnerAge < 18) {
  console.log(
    `Hello youth participant ${raceNumber}, the race starts at 12:30 pm`
  );
} else {
  console.log("Please see the registeration desk");
}
