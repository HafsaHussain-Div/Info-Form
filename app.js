let name = prompt("Enter Your Name: ");
let fname = prompt("Enter Your Father Name: ");
let age = prompt("Enter Your Age: ");
let rollNo = prompt("Enter Your Roll No: ");
let course = prompt("Enter Your Course Name: ");
let img = prompt('Enter the correct image URL:');

document.write("<center><font size='20' color='Purple' face='Arial'>Prompt User Data :-</font><br><br>");
document.write("<b>Profile: </b> <br>" , `<img src='${img}' height='100' width='100'/>` , "<br><br>");
document.write("<b>Name: </b>" , name , "<br><br>");
document.write("<b>Father Name: </b>" , fname , "<br><br>");
document.write("<b>Age: </b>" , age , "<br><br>");
document.write("<b>Id No: </b>" , rollNo , "<br><br>");
document.write("<b>Course: </b>" , course , "<br><br></center>");