// Is it a palindrome?
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
    let flipWord = x.toLowerCase().split('').reverse().join('')
    x = x.toLowerCase()
  if(flipWord == x){
    return true
  }
  else{
    return false
  }
  }