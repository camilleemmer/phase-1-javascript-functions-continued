// code your solution here
function saturdayFun(thingToDo = "roller-skate") {
    return(`This Saturday, I want to ${thingToDo}!`);
   
}

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}
 mondayWork( "work from home.");



  function wrapAdjective(part1 = "**") {
    return function (message = "special") {
      return (`You are ${part1}${message}${part1}!`);
    };
  }

wrapAdjective("%")(" a dedicated programmer"); 
