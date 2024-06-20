#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("\n\tWelcome!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (ans.select == "staff") {
            console.log("You approach the staff room. Please feel free to ask any quistion");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name}. Nice to meet you!`);
                console.log("New Student added");
                console.log("Current Student list:");
                console.log(persons.students);
            }
            else {
                console.log(`Hello I am ${student.name}. Nice to see you again!`);
                console.log("Exiting student list");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Exiting the Program..");
            process.exit();
        }
    } while (true);
};
programStart(persons);
