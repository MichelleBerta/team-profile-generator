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
        message: "What is the new employee's id?",
        name: "id"
    },

    {
        message: "What is the new employee's email?",
        name: "email"
    },

    {
        type: "list",
        message: "Please select the new employee's title",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
        ], 
        title: "title"

    // how can this be added to inquire above?
    {
    then(function({name, title, id, email}) {
        let titleInfo = '';
        if (title === "Engineer") {
            titleInfo = "gitHub username";
        } else if (title === "Intern") {
            titleInfo = "school name";
        } else {
            titleInfo === "office phone number";
        }

    },
    
    )}
    
        
    {
        type: "list",
        message: "Do you want to add another employee?", 
        choices: [
            "yes",
            "no"
        ],
        // how do i start this function over again?
        name: "moreEmployees"
    }
}


// need init function

// need a function to write html

// fs write/append file