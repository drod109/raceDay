let raceNumber = Math.floor(Math.random()*1000);
let earlyReg = false;
let runnersAge = 17;

if (earlyReg == false) {
  raceNumber += 1000;
}

if (runnersAge > 18 && earlyReg == true && raceNumber < 1000) {
  console.log("Your race time is set for 9:30am. Your race number is: " + raceNumber);
} else if (earlyReg == true || runnersAge > 18) {
  console.log("Your race time is set for 11:00am. Your race number is: " + raceNumber);
} else if (runnersAge < 18 && earlyReg == false) {
  console.log("Your race time is set fr 12:30pm. Your race number is: " + raceNumber);
} else {
  console.log("Please check-in with the registration desk.")
}

//console.log(raceNumber);
//console.log(runnersAge);
