// code your solution here
function saturdayFun(defaultActivity = "roller-skate") {
  return `This Saturday, I want to ${defaultActivity}!`;
}
console.log(saturdayFun());

function mondayWork(defaultActivity = "go to the office") {
  return `This Monday, I will ${defaultActivity}.`;
}
console.log(mondayWork());

function wrapAdjective(sign) {
  return function (Adjective) {
    return `You are ${sign}${Adjective}${sign}!`;
  };
}
