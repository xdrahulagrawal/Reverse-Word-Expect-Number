/**Date : 08-10-2021
 * Developer : Rahul Agrawal
 * Method-Name -: reverse words string expect number and number position
 */

/**
 * step1-Take the input should be proper not like array,object and blank string etc otherwise return
 * step2-Make regex use to split the string number and alphabet both into array
 * step3- Check array length should not be zero
 * step3.1 Iteration the array use loop
 * step3.2 Inside condition Iterating over a array element through loop
 * step3.3 Check in array element is string or number
 * step3.4 Else gain loop reverse the array string
 * step3.5 Then return **HappyEnding**
 */
const reverseWords = (str) => {
  //check input should be proper other wise return
  if (!str || typeof str === "object" || typeof str === "") {
    return "Input is not proper";
  }
  //string convert into array
  const regexStr = str.match(/[a-z]+|[^a-z]+/gi);
  if (regexStr.length !== 0) {
    let result = "";
    //get the array element
    for (let i = 0; i < regexStr.length; i++) {
      if (!isNaN(regexStr[i])) {
        //check number or string
        result += regexStr[i];
      } else {
        //get the element last index
        for (j = regexStr[i].length - 1; j >= 0; j--) {
          result += regexStr[i][j];
        }
      }
    }
    return result;
  }
};

console.log(reverseWords("asAT7hg89jsgtred5lyas"));
// console.log(reverseWords('123'));
// console.log(reverseWords('abc'));
