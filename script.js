function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
     let roman = '';
    for (let i = 0; i <= 6; i++) {
      const [letter, value] = obj[i];
      
      
      while (num >= value) {
        roman += letter;
        num -= value;
      }
    }

    return roman;
}

// Testing with the input 36
console.log(convertToRoman(36)); // Expected output: XXXVI
  

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
