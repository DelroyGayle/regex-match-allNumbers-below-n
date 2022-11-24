function regexBelow(n){
    const LBRACK="[", RBRACK = "]",
          LBRACE = "{", RBRACE = "}"; 
  
  
    // Helper Functions
  
    // Generate [1-x]
    function oneToNumClass(s) {
      s+=""; // ensure string
      return s === '1' ? s : `[1-${s}]`;
    }
  
    // Generate [0-x]
    function zeroToNumClass(s) {
      s+=""; // ensure string
      return s === '0' ? s : `[0-${s}]`;
    }  
  
    // Generate {n}
    function numberQuantifier(len) {
      return len === 1 ? "" : `${LBRACE}${len}${RBRACE}`;
    }
  
    // Generate [0-9]{1,n}
    function oneToNumQuantifier(len) {
      let result = zeroToNumClass('9'); // [0-9]
      return len === 1 ? result : `${result}${LBRACE}1,${len}${RBRACE}`;
    }
  
  let nstr, result, len, k;
  let temp;
  
  // STEP 1)
  // There is no positive number below 1
  
  if (n === 1)
          return "^[^\S\s] "; // Never Matches!
  
  // Subtract 1 from n
  --n;
  
  // STEP 2) Handle the numbers from 2 to 9
  
  if (n < 10)
        return `^[1-${n}]$`; // EG ^[1-9]$
  
  // Handle all other numbers
  
  nstr = n + ""; // convert 'n-1' to a string
  len = nstr.length;
  result = "";
   
  // STEP 3) If the first digit is greater than one 
  // Generate regex to handle 20-29, 200-499, 2000-2999, etc
  
  if (nstr[0] > "1") {
      temp = oneToNumClass(nstr[0] - 1); // [1-(x-1)]
      k = len - 1; // one less than the number of digits
      if (k) {
              temp += (k === 1 ? "[0-9]"
                               : `[0-9]${LBRACE}1,${len - 1}` +
                                 `${RBRACE}`);        
      };
      result = temp + "|"; 
  };
  
  // STEP 4) Otherwise if the number begins with one then
  // Generate the regex for the ranges 
  // 10-9s i.e. 10 - x followed by nines
  // e.g. 10-99, 10-999, 10-9999, etc
  // This is done only for 'n-1' longer than 2 digits 
  // Therefore, for the range 10-999, generate [1-9][0-9]{1,2}

  if (nstr.length > 2) {
      let lenMinus2 = len - 2;
      temp = (lenMinus2 === 1 ? "[1-9][0-9]"
                    : `[1-9][0-9]${LBRACE}1,${lenMinus2}` +
                                `${RBRACE}`);
 
      result+= temp + "|";
  }
  
  // STEP 5) Handle each digit of the original number 'n-1'
  // Start of with the 1st digit and generate the applicable range
  // for each digit up to the 'tens' digit
  // Therefore, for 3456, need to generate 3 regexes for 3,4,5
  // 3[0-3][0-9]{2}| for 3000-3399
  // 34[0-4][0-9]|   for 3400-3499
  // 345[0-6]/       for 3450-3456
  
  let wholeNumber = nstr[0]; 
  let quantValue = len - 2; // the number for {n}
  let count = len;
  let index = 0;
  while (true) {
       let temp = "";
       let nextDigit = nstr[index + 1];
       if (nextDigit === "0") {
           // Append all the current digits including the ZERO
           result += wholeNumber + "0";
       } else if (count !== 2) {
           // Have not reached the 'tens' position
           let ndMinus1 = nextDigit - 1;
           temp = (ndMinus1 > 0 ? `[0-${ndMinus1}]` : "0") + "[0-9]";
           if (quantValue > 0) {
               temp += numberQuantifier(quantValue);
           }
           result += wholeNumber + temp;
       } else {
           // Have reached the 'tens' units
           // so for example, the last two digits 56
           // Generate 5[0-6]
         
           result += wholeNumber + `[0-${nextDigit}]`;
       };

       wholeNumber += nextDigit;
       ++index;
       --quantValue;
       if (count-- === 2) { // Have reached the 'tens' digit
            break;
       } else {
           result += "|"
       }
  };
  
  // STEP 6) Cater for the 'units' generate [1-9]
  // e.g. for 1002, generate 100[0-2]
  
  result += "|[1-9]"
  
  // Add the assertions
  return "^(" + result + ")$"  
}
