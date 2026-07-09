//this file is app.js which consists of the menu of university student management system!

const readline=require("readline");

const {addStudent,viewStudents}=require("./services/studentService.js");

const {helper}=require("./utils/helper.js");

const rl=readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

//application title;
//console.log("-------------------------------------");

helper();
console.log("University Student Management Module!");
console.log("Version 1.0");
helper();


//Menu Interface


function showMenu()
{

console.log("\nEnter choice");
console.log("1. Add student");
console.log("2. View students");
console.log("3. Exit");

rl.question("You selected choice: ", function(choice)
//using else-if structure to decide between different choices
{

if(choice==="1")

{

 console.log("You selected Add Student!");
 addStudent(rl,showMenu);
 //helper();

}

else if(choice==="2")

{
    console.log("You selected View Students!");
    viewStudents();
    showMenu();

}

else if(choice==="3")
{
    console.log("You selected Exit!");
    helper();

    //closing the interface menu
    rl.close()
}

else
{
    console.log("Invalid choice!");
    helper();
    showMenu();

}

//closing the input interface


}
);
}

showMenu();

