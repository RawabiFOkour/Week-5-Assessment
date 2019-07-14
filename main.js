console.log('GOOD LUCK 👩‍💻 👨‍💻')
/* Q1:
Create a function called hello
thats take a name
and return Hello + the name that insert 
return null if the name is empty string or null

Ex:  hello("") => null    
Ex:  hello("Jouza") => "HELLO Jouza !"
Ex:  hello("Alex") => "HELLO Alex !"
Ex:  hello(null) => null

*/

function hello(name) {
  // WRITE YOUR CODE UNDER THIS LINE  
if(name === "" || name === null){
return null;
}
return "HELLO " + name;
}

console.log(hello(""));
console.log(hello("Jouza"));
console.log(hello("Alex"));
console.log(hello(null));


/* Q2:
Create a function called calculateTax
that take number of salees and the amount of tax
and return amount of sales you did + the amonut of tax you should pay
+ the amount of net sales left after the tax paid

Ex: calculateTax(500,0.16) 
=> "You got 500 JD from sales, you should pay 80 JD for tax and you will have 420 JD as net sales."
Ex: calculateTax(315,0.10) 
=> "You got 315 JD from sales, you should pay 31.5 JD for tax and you will have 283.5 JD as net sales."
Ex: calculateTax(100,0.15) 
=> "You got 100 JD from sales, you should pay 15 JD for tax and you will have 85 JD as net sales."
*/

function calculateTax(numberOfSales, amountOfTax) {
  // WRITE YOUR CODE UNDER THIS LINE 
  var payValue =numberOfSales*amountOfTax;
  var netSales =numberOfSales-payValue;
return "You got "+numberOfSales+" JD from sales, you should pay "+payValue+" JD for tax and you will have "+netSales+" JD as net sales."
}

console.log(calculateTax(500,0.16));
console.log(calculateTax(315,0.10));
console.log(calculateTax(100,0.15));
/* Q3:
Using while
Create a function called repeatChar
that takes 2 parameters string and number,
and return the character number of times with space depends on the nubmer that pass
** Important: You should didn,t have extra space or comma at the end
** Important: the character one time capital letter and one time small letter if n
odd start with capital letter 
** Important: you should solve this question using while

Ex: repeatChar("a",2); => "a, A"
Ex: repeatChar("C",5); => "C, c, C, c, C"
*/

function repeatChar(char, number) {
  // WRITE YOUR CODE UNDER THIS LINE
var resultString="";       
while(number>0){
return resultString=resultString+ char + ", " ;
if(char[0] > 'a') {
  return resultString=resultString+ char[0].toUpperCase()+ ", ";
}
else{
  return resultString=resultString+ char[0].toLowerCase()+ ", ";
}

number--;
}
return resultString;
}
console.log(repeatChar("a",2));
console.log(repeatChar("C",5));

/* Q4:
Using recursion 
Create a function called stringToCapital
that takes a string 
and return the same string but convert it to upper case
** Important: you should solve this question using recursion
** Important: you should haven't any problem if there is a symbol

Ex: stringToCapital("My Name Is: Alex !") 
=> "MY NAME IS: ALEX !"
Ex: stringToCapital("Are you a student in coding ACADEMY by ORANGE ?") 
=> "ARE YOU A STUDENT IN CODING ACADEMY BY ORANGE ?"
*/

function stringToCapital(string) {
  // WRITE YOUR CODE UNDER THIS LINE  
  if(string.length ===0) {
    return "";
  }  

return stringToCapital(string.toUpperCase()) ;
}
console.log(stringToCapital("My Name Is: Alex !"));
console.log(stringToCapital("Are you a student in coding ACADEMY by ORANGE ?"));
// Good luck :)