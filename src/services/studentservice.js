
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
    rl.question("Enter the department of the student: ", function(department)
{
    rl.question("Enter the univeristy of the student: ", function(university)
{
    const student={
        id: students.length+1,
        name: name,
        age: Number(age),
        semester: semester,
        university: university,
        department: department
    };

    students.push(student);

    console.log("\n Student Record added successfully!");

    callback();

}); 
});

});
});
});
   
}

function viewStudents()
{
    if(students.length===0)
    {
        console.log("No Student Records found!");
        return;
    }
    else
    {
        console.log("\n---------------------------------------------\n");
        console.log("               STUDENTS RECORD: ");
        console.log("\n---------------------------------------------\n");

        for(const student of students)
        {
            console.log(`\nStudent #${student.id}`);
            console.log(`\nStudent ID:         ${student.id}`);
            console.log(`\nStudent name:       ${student.name}`);
            console.log(`\nStudent age:        ${student.age}`);
            console.log(`\nStudent Semester:   ${student.semester}`);
            console.log(`\nStudent Department: ${student.department}`);
            console.log(`\nStudent University: ${student.university}`);
            console.log("\n------------------------------------------\n");

        }



    }
    

}

module.exports={

    addStudent,
    viewStudents
};

