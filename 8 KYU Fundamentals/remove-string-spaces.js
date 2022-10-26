// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.


function noSpace(x){
    x = x.replace(/\s/g, '')
      return x;
    }




// The Regex

// \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).

// A great explanation for + can be found here.

// As a side note, you could replace the content between the single quotes to anything you want, so you can replace whitespace with any other string.