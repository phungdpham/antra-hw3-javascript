// 1. Write a Javascript function that reverse a number
// function reverseNum(n) {
//   {
//     n = 34223;
//     n = n + "";
//     return n.split("").reverse().join("");
//   }
// }
// console.log(Number(reverseNum()));

// 2. write a js that checks whether a passed string is a palindrome or nt?
// function checkPalindrome(str) {
//   var reverseStr = str.split("").reverse().join("");
//   if(str == reverseStr) {
//     console.log('True, it is a palindrome')
//   } else {
//     console.log('False, it is not a palindrome')
//   }
// }
// checkPalindrome("madam");

// 3. Write JS Function that generates all combinations of a string
// function combinationsOfStr(str) {
//   let combinations = [];
//   for (let i = 0; i < str.length; i++)
//   {
//     for (let j = i + 1; j < str.length + 1; j++)
//     {
//       combinations.push(str.slice(i, j));
//     }
//   }
//   return combinations;
// }
// console.log(combinationsOfStr('Dog'))

// 4. write js function that returns a passed string with letters in alphabetical order
// function strByOrder(str) {
//   var arr = str.split("").sort().join("");
//   console.log(arr);
// }
// strByOrder('webmaster');

// 5. write js function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
// function capitalize(str) {
//   let words = str.split(" ");
//   console.log(words);
//   for (let x = 0; x < words.length; x++) {
//     words[x] = words[x][0].toUpperCase() + words[x].substr(1);
//   }
//   return words.join(" ");
// }
// console.log(capitalize('the quick brown fox'));

// 6. Write a js function that accepts a string as a parameter and find the longest word within the string
// function findLongestWord(str) {
//   var words = str.split(" ");
//   console.log(words);
//   var longestCount = 0;
//   for (let i = 0; i < words.length; i++) {
//     console.log(words[i]);
//     if(words[i].length > longestCount) {
//       longestCount = words[i].length;
//       var longestWord = words[i]
//     }
//   }
//     return longestWord;
// }
// console.log(findLongestWord("Web Development Tutorial"))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
// function countVowels(str) {
//   var vowels = ["a", "e", "i", "o", "u"]
//   var numVowels = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (str[i] = vowels[j]) {
//         numVowels = numVowels + 1
//       }
//     }
//     return numVowels;
//   }
// }
// console.log(countVowels("The quick brown fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// const num = parseInt(prompt("Enter a positive number: "));
// let primeNum = true;
// function checkPrimeNum(num) {
//   if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         primeNum = false;
//         break;
//       }
//     }
//     if (primeNum) {
//       console.log(`${num} is a prime number`);
//     } else {
//       console.log(`${num} is not a prime number`);
//     }
//   } else {
//     console.log(`${num} is not a prime number`);
//   }
// }
// checkPrimeNum(num);

// 9.Write a JavaScript function which accepts an argument and returns the type.
// function argType(arg) {
//   return typeof arg;
// }
// var str = "javascript";
// var num = 123;
// var isIt = true;
// var undefi = undefined;
// var person = { name: "John", sex: "male" };
// var foo = function () {
//   console.log("this is a function");
// };
// console.log(argType(str));
// console.log(argType(num));
// console.log(argType(isIt));
// console.log(argType(undefi));
// console.log(argType(person));
// console.log(argType(foo));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
// function matrix(n) {
//   var i;
//   var j;
//   for (i=0; i < n; i++)
//   {
//     for (j=0; j < n; j++)
//     {
//          if (i === j)
//          {

//            console.log(' 1 ');
//          }

//          else
//           {
//            console.log(' 0 ');}
//           }
//        console.log('----------');
//      }
//  }
// matrix(4);

// 11. Write a JavaScript function which will take an array of numbers stored and
//find the second lowest and second greatest numbers, respectively.
// function findTheNumbers() {
//   var arr = [1,5,3,4,2]
//   arr.sort(function(a, b) {return a - b });
//   console.log(arr);
//   var secondLowest = arr[1];
//   var secondGreast = arr.length - 1;
//   console.log(secondLowest);
//   console.log(secondGreast);
// }
// findTheNumbers();

// 12.Write a JavaScript function which says whether a number is perfect.
// const n = parseInt(prompt("Enter a positive number: "));
// function perfectNumber(n)
// {
// var temp = 0;
//    for(var i=1;i<=n/2;i++)
//      {
//          if(n%i === 0)
//           {
//             temp += i;
//           }
//      }

//      if(temp === n && temp !== 0)
//         {
//        console.log("perfect number.");
//         }
//      else
//         {
//        console.log("not a perfect number.");
//         }
//  }
// perfectNumber(n);

// 13. Write a JavaScript function to compute the factors of a positive integer.
// function factors(n)
// {
//  var numOfFactors = [], i;

//  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
//   if (n % i === 0)
//   {
//    numOfFactors.push(i);
//    if (n / i !== i)
//     numOfFactors.push(n / i);
//   }
//  numOfFactors.sort(function(x, y)
//    {
//      return x - y;});
//      return numOfFactors;
//     }
// console.log(factors(10));

// 14. Write a JavaScript function to convert an amount to coins.
// function amountTocoins(amount, coins)
// {
//  if (amount === 0)
//   {
//      return [];
//    }
//  else
//    {
//      if (amount >= coins[0])
//        {
//         left = (amount - coins[0]);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         }
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// }
// console.log(amountTocoins(46, [25, 10, 5, 2,1]));

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases.
// Accept b and n from the user and display the result.
// function exp(b,n)
// {
//         var ans = 1;
//         for (var i =1; i <= n; i++)
//         {
//                 ans = b * ans;
//         }
//         return ans;
// }
// console.log(exp(2, 3));

// 16.  Write a JavaScript function to extract unique characters from a string.
// function uniqChar(str) {
//   var strCopy = str;
//   var uniqStr = "";
//   for (var x = 0; x < str.length; x++) {
//     if (uniqStr.indexOf(strCopy.charAt(x)) ==-1) {
//       uniqStr += str[x]
//     }
//   }
//   return uniqStr;
//  }
//  console.log(uniqChar("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
// function Char_Counts(str1) {
//   var uchars = {};
//   str1.replace(/\S/g, function (l) {
//     uchars[l] = isNaN(uchars[l]) ? 1 : uchars[l] + 1;
//   });
//   return uchars;
// }
// console.log(Char_Counts("full stack web development"));

//18. Write a function for searching JavaScript arrays with a binary search.
// function binarySearch(narray, delement) {
//   var mposition = Math.floor(narray.length / 2);

//   if (narray[mposition] === delement){
//      return mposition;
//   }
//   else if (narray.length === 1)
//   {
//      return null;
//   }
//   else if (narray[mposition] < delement) {
//      var arr = narray.slice(mposition + 1);
//      var res = binarySearch(arr, delement);
//      if (res === null)
//      {
//         return null;
//      }
//      else {
//         return mposition + 1 + res;
//      }
//   }
//   else {
//      var arr1 = narray.slice(0, mposition);
//      return binarySearch(arr1, delement);
//   }
// }
// var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
// console.log(binarySearch(myArray, 6));

// 19. Write a JavaScript function that returns array elements larger than a number.
// function BiggerElements(val)
//    {
//      return function(evalue, index, array)
//      {
//      return (evalue >= val);
//      };
//    }
// var result = [1, 15, 4, 26, 34, 11]. filter(BiggerElements(10));
// console.log(result);

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// function stringId(l)
// {
// var text = "";
// var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for(var i=0; i < l; i++ )
// {
// text += string.charAt(Math.floor(Math.random() * string.length));
// }
// return text;
// }
// console.log(stringId(6));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// function subset(arr, arr_size)
//  {
//     var result_set = [],
//         result;

// for(var x = 0; x < Math.pow(2, arr.length); x++)
//   {
//     result = [];
//     i = arr.length - 1;
//      do
//       {
//       if( (x & (1 << i)) !== 0)
//           {
//              result.push(arr[i]);
//            }
//         }  while(i--);

//     if( result.length >= arr_size)
//        {
//           result_set.push(result);
//         }
//     }

//     return result_set;
// }

// console.log(subset([1, 2, 3], 2));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and
//the function will count the number of occurrences of the specified letter within the string.
// function countOccurrences(str, l) {
//   var letterCount = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str.charAt(i) == l) {
//       letterCount += 1;
//     }
//   }
//   return letterCount;
// }
// console.log(countOccurrences("development", "e"))

// 23. Write a JavaScript function to find the first not repeated character.
// function notRepeatedChar(str) {
//   var arr = str.split('');
//   console.log(arr);
//   var res = '';
//   var ctr = 0;
//   for (var x = 0; x < arr.length; x++) {
//     ctr = 0;
//     for (var y = 0; y < arr.length; y++) {
//       if (arr[x] === arr[y]) {
//         ctr+= 1
//       }
//     }
//     if (ctr < 2) {
//       res = arr[x];
//       break;
//     }
//   }
//   return res;
// }
// console.log(notRepeatedChar('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// function bubble_Sort(a)
// {
//     var swapp;
//     var n = a.length-1;
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {
//             if (x[i] < x[i+1])
//             {
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);
//  return x;
// }

// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// 25. Write a JavaScript function that accept a list of country names as input and
//returns the longest country name as output
// function longestCountry(countries) {
//   return countries.reduce(function (lname, country) {
//     return lname.length > country.length ? lname : country;
//   });
// }
// console.log(
//   longestCountry(["Australia", "Germany", "United States of America"])
// );

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

// 27. Write a JavaScript function that returns the longest palindrome in a given string.

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
// function javascriptProgram(id, callBackFunction) {
//   callBackFunction();
// }

// function refreshStudentList() {
//   console.log("Call back function is executed");
// }
// javascriptProgram(1, refreshStudentList);

// 29. Write a JavaScript function to get the function name. 
// var f = function myFunctionName() {
//   console.log("this is an example function")
// }
// console.log(f.name)