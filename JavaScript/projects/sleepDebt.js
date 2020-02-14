const getSleepHours = day => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 8;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8;
  } else {
    return "please enter a correct day";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 6;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();

  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("perfect sleep timing");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed");
  } else if (actulaSleepHours < idealSleepHours) {
    console.log("go sleep!");
  }
};

calculateSleepDebt();
