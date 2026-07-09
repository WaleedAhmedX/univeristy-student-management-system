
//this file (studentService.js) contains the services related to student like adding a new student and viewing the students stored in the database

const students=require("../data/students.js");
function addStudent(rl,callback)
{
   rl.question("Enter student name:", function(name)
{
    rl.question("Enter the age of the student: ", function(age)
{
    rl.question("Enter the semester of the student: ", function(semester)
{
    rl.question("Enter the univeristy of the student: ", function(university)
{
    const student={
        id: students.length+1,
        name: name,
        age: Number(age),
        semester: semester,
        university: university
    };

    students.push(student);

    console.log("\n Student Record added successfully!");

    callback();

});  
});
});
});
   
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

