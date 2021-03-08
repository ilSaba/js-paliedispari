var parola = prompt("Dimmi una parola. Ti dirò se è palindroma");

function palindrome(str) {
    str = str.toLowerCase().replace(/[^a-z]+/g,"");
    return str === str.split("").reverse().join("")
 }
 
 alert(palindrome(parola));