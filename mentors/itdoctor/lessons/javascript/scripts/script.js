/**
 * Function converts time to minutes
 * @param {string} time accept values like "11:34"
 * 
 * @returns {number} if function accepts "02:08", function returns "128" 
 */

function timeToMinutes(time) {
  try {
    const hours = +time.split(':')[0];
    const minutes = +time.split(':')[1];
    const rangeIncorrect = (!(hours >= 0 && hours <= 23) || !(minutes >= 0 && minutes <= 59));
  
    if (rangeIncorrect) {
      throw new RangeError("Incorrect value");
    }

    return hours * 60 + minutes;

  } catch (error) {
    console.log(error);
  }
}
const a = new Date();
console.log(timeToMinutes(`${a.getHours()}:${a.getMinutes()}`));

