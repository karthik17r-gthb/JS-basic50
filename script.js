
1. What is a variable in JavaScript?

	 container used to store data or values.
   
2. What are the three keywords used to create variables?
  
	 var, let, and const.
 
3. Write the syntax to create a variable using var.
   
  	 var name = "value";
   
4. Write the syntax to create a variable using let.
   
  	 let name = "value";
   
5. Write the syntax to create a variable using const.
   
   	const name = "value";
   
6. What is declaration?
   Creating or registering a variable name in memory before giving it a value (e.g., let x;).
   
7. What is initialization?
   
	Assigning an initial value to a variable for the very first time (e.g., x = 5;).

8. What is reassignment?
   
	Changing the existing value of an already declared variable to a new value (e.g., x = 10;).

9. What is redeclaration?

	   Declaring the exact same variable name again using a variable keyword in the same scope (e.g., var x = 1; var x = 2;).
   
10. Which keyword allows redeclaration?
   	var.
   
11. Which keyword allows reassignment?
	   var and let.
   
12. Which keyword requires initialization when declared?
   const.
   
13. Identify the declaration and initialization: let age = 25;
   
	* Declaration: let age
      	* Initialization: = 25
   
14. What is the value of a? var a = 100; console.log(a);
  
	 100.
   
15. Change the value of this variable to 200: let number = 100;
   
   number = 200;
   
   
------------------------------
## var


16. What will be the output? var a = 10; console.log(a);
	   10
 
17. What will be the output? var a = 10; a = 20; console.log(a);
	   20
 
18. What will be the output? var a = 10; var a = 30; console.log(a);
  	 30
   
19. Write a var variable named name with the value "John".
   
   	var name = "John";
   
 20. Create a var variable named price with the value 500.
   
   	var price = 500;
 	  
 21. Reassign price from 500 to 1000.
   
  	 price = 1000;
   
   
22. What will be the output? var x = 50; x = 100; console.log(x);
  	 100
   
23. Can a var variable be reassigned?
	   Yes.
 
24. Can a var variable be redeclared?
	   Yes.
   
25. Write an example of var redeclaration.
   
  	 var color = "red";var color = "blue";
   
   
------------------------------
## let

 26. Create a let variable named age with the value 25.
   
 	  let age = 25;
   
 27. What will be the output? let age = 20; age = 30; console.log(age);
 	  30
  
28. Can a let variable be reassigned?
   Yes.
   
29. Can a let variable be redeclared?
  	 No.
   
30. Find the error: let name = "John"; let name = "David";
  
	 You cannot redeclare name using let in the same scope. It throws a SyntaxError.
   
31. Create a let variable called city and assign "Chennai".
   
   let city = "Chennai";
   
32. Change the value of city to "Salem".
   
   city = "Salem";
   
33. What will be the output? let x = 10; x = 50; console.log(x);
	   50

34. Write a let variable called salary with the value 25000.
   
  	 let salary = 25000;
   
   
35. Reassign salary to 30000.
   
  	 salary = 30000;
   
   
------------------------------
## const


36. Create a const variable called pi with the value 3.14.
   
   	const pi = 3.14;
   
37. Can a const variable be reassigned?
   	No.
   
38. Can a const variable be redeclared?	
 	  No.
   
39. What is wrong with this code? const age; age = 25;
  
	 const variables must be initialized immediately when they are declared. Leaving it blank throws a SyntaxError.
   
40. What happens here? const price = 500; price = 1000;
  	 It throws a TypeError because you cannot reassign a value to a const variable.
   
41. Create a const variable called country with the value "India".
   
  	 const country = "India";
   
 42. What will be the output? const x = 100; console.log(x);
   	100
 
43. Which keyword should you use if the value should not be reassigned?
  	 const.
44. What is the difference between let and const?
  
	 let allows you to reassign values later; const does not allow reassignment and needs an immediate value.

45. What is the difference between var and const?
  	
	 var allows both reassignment and redeclaration; const allows neither and requires an immediate value.

------------------------------
## Printing & Console


46. Write JavaScript code to print Hello World using console.log().
   
   	console.log("Hello World");
   
47. Write JavaScript code to print the number 500 using console.log().
   
  	 console.log(500);
   
48. What is the purpose of console.warn()?

   To print a warning message to the browser console (usually highlighted in yellow).
  
49. What is the purpose of console.error()?
  
	 To print an error message to the browser console (usually highlighted in red).
   

50. What is the purpose of each?
  
	 * alert(): Shows a pop-up box with a message and an "OK" button to block the user until dismissed.
      * prompt(): Shows an input box where the user can type text data.
      * confirm(): Shows a dialog box with "OK" and "Cancel" buttons, returning true or false.
      * document.writeln(): Writes text directly into the HTML document stream and adds a newline character at the end.
      * console.log(): Prints output directly to the browser's developer tools console for debugging.
   
------------------------------
 Practical Tasks

* Create a variable for student name, age, and mark and print all three:

let studentName = "Alex";let studentAge = 18;let studentMark = 92;
console.log(studentName, studentAge, studentMark);

* Ask the user's name using prompt() and display it using alert():

let userName = prompt("Enter your name:");
alert(userName);

* Ask the user's age using prompt() and print it using console.log():

let userAge = prompt("Enter your age:");
console.log(userAge);

* Ask the user a question using confirm():

let wantsToContinue = confirm("Do you want to continue?");

* Ask the user's name and display it on the webpage using document.writeln():

let guestName = prompt("What is your name?");
document.writeln(guestName);