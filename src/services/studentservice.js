
//this file (studentService.js) contains the services related to student like adding a new student and viewing the students stored in the database

const students=require("../data/students.js");
function addStudent()
{
   const student=
   {
    id: 1,
    name: "Waleed ahmed",
    age: 22,
    semester: "6th",
    Univeristy: "NUML"
    
   };

   students.push(student);

   console.log("Data has been inserted into the array Successfully!");
   
}

function viewStudents()
{
    console.log("\n----------------------------------------");
    console.log("View Students!");
    console.log("-------------------------------------------");

    console.log(students);


}

module.exports={

    addStudent,
    viewStudents
};

