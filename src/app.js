//==========================================================
//
// University Student Management System
//
// File:
// app.js
//
// Purpose:
// This is the main entry point of our application.
//
// Every program needs a starting point.
// Just like C++ starts from main(),
// our JavaScript application will start here.
//
// Author:
// Waleed Ahmed
//
//==========================================================


//==========================================================
// Application Title
//==========================================================

const readline=require("readline");

const{addstudent}=require("./services/studentservice.js");


const r1=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

//application title

console.log("--------------------------------------");
console.log("University Student Management System");
console.log("version 1.0");
console.log("---------------------------------------");

//display menu

console.log("Enter choice: ");
console.log("1. Add students");
console.log("2. View students");
console.log("3. Exit\n");

//ask the user for input
r1.question("Enter your choice: ", function(choice)
{
    //console.log("\nYou Entered option", choice);

if(choice==="1")
{
    console.log("You selected Add students!");
    addstudent();


}
else if(choice==2)
{
    console.log("You selected View students!");

}
else if(choice==3)
{
    console.log("You selected 'Exit'!");

}
else
{
    console.log("Invalid choice selected!")
}

    //closing the input interface 

    r1.close();

});

