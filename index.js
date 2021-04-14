const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const employees = [];


function addEmplolyee() {
    inquirer.prompt([{
message: "What is the new employee's name?",
name: "name"
    },

    {
        type: "list",
        message: "Please select the new employee's title",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ], 
        title: "title"
    },

    {
        message: "What is the new employee's id?",
        name: "id"
    },

    {
        message: "What is the new employee's email?",
        name: "email"
    }])

    then(function({name, title, id, email}) {
        let titleInfo = '';
        if (role === "Engineer") {
            titleInfo = "gitHub username";
        } else if (role === "Intern") {
            titleInfo = "school name";
        } else {
            titleInfo === "office phone number";
        }
        inquirer.prompt([{
            message: "What is the new employee's `${titleInfo}`",
            name: "titleInfo"
        },
    {
        type: "list",
        message: "Do you want to add another employee?", 
        choices: [
            "yes",
            "no"
        ],
        name: "moreEmployees"
    }])

    .then(function({titleInfo, moreEmployees}) {
        let newEmployee;
        if (role === "Engineer") {
            newEmployee = new Engineer(name, id, email, titleInfo);
        } else if (role === "Intern") {
            newEmployee = new Intern(name, id, email, titleInfo);
        } else {
            newEmployee = new Manager(name, id, email, titleInfo);
        }
        employees.push(newEmployee);
        addHtml(newEmployee)
        .then(function() {
            if (moreEmployees === "yes") {
                addEmployee();
            } else {
                finishHtml();
            }
        });
        
    });
});
}