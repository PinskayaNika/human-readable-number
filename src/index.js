module.exports = function toReadable (number) {
  let answer =''
  var arr = [
    ["zero", "one", "two", "three", "four", "five", "six", "seven",
     "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
     "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],

    ["twenty", "thirty", "forty", "fifty", "sixty",
        "seventy", "eighty", "ninety"],

    ["hundred"]
  ];
//return Math.floor(number % 100)/10
//return Math.floor(number/100);
  if (number >= 100){
    if (number % 100 == 0) {
       answer = answer + arr[0][Math.floor(number / 100)] + " " + arr[2]
    } else if (number % 100 < 20) {
      //return arr[1][(Math.floor(number % 100)/10) - 2]
         answer = answer + arr[0][Math.floor(number / 100)] + " " + arr[2] + " " + arr[0][Math.floor(number % 100)]
    } else if (number % 10 == 0 && number % 100 != 0) {
      //return arr[1][(Math.floor(number % 100)/10) - 2]
         answer = answer + arr[0][Math.floor(number / 100)] + " " + arr[2] + " " + arr[1][(Math.floor((number % 100)/10)) - 2]
    } else {
    //return arr[2] + arr[0]//[number / 100]
   //return arr[1][(Math.floor(number % 100)/10) - 2]
	 answer = answer + arr[0][Math.floor(number / 100)] + " " + arr[2] + " " +
         arr[1][(Math.floor((number % 100)/10)) - 2] + " " + arr[0][number % 10];
    }
  } else if (number >= 20 && number < 100){
  	if (number % 10 == 0) {
    		answer = answer + arr[1][Math.floor(number / 10) - 2]
    	} else {
    //return arr[2] + arr[0]//[number / 100]
		answer = answer + arr[1][Math.floor(number / 10) - 2] + " " +
        	arr[0][number % 10];
	}
    } else if (number < 20){
    //return arr[2] + arr[0]//[number / 100]
	answer = answer + arr[0][Math.floor(number)];
    }
    return answer
}
