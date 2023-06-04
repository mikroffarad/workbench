/**
 * Function converts time to minutes
 * @param {string} time accept values like "11:34"
 * 
 * @returns {number} if function accepts "02:08", function returns "128" 
 */

function timeToMinutes(time) {
  const hours = +time.split(':')[0];
  const minutes = +time.split(':')[1];
  return hours * 60 + minutes;
}

console.log(timeToMinutes("02:08"));