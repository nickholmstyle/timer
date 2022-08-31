// process.stdout.write('\x07');

//INPUT: 

//Edge Cases:
//No numbers are provided: 
  //Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
//An input is a negative number: 
  //Ignore/skip any numbers that are negative. We can't schedule anything in the past.
//An input is not a number: 
  //Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

// input = 0

const numbers = process.argv.slice(2).join('');
const scheduleBeep = function(delay) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay * 1000);
}

for (let num of numbers) {
  if (Number(num) === 0) {
    return
  } else if (Number(isNaN(num))) {
    return
    } else {
    scheduleBeep(num);
    }
  return  
}





// if (input === isNaN) {
//   return;
// }

// if (input < 0) {
//   return;
// 
// if (input === null) {
//   return;
// }