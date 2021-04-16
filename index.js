const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employees = [];

function addEmplolyee() {
  inquirer
    .prompt([
      {
        message: "What is the new employee's name?",
        name: "name",
      },

      {
        message: "What is the new employee's id?",
        name: "id",
      },

      {
        message: "What is the new employee's email?",
        name: "email",
      },

      {
        type: "list",
        message: "Please select the new employee's title",
        choices: ["Engineer", "Intern", "Manager"],
        name: "title",
      },
    ])

    // is this part of inquire above?

    .then(function ({ name, title, id, email }) {
      let titleInfo = "";
      let nameInfo = "";
      if (title === "Engineer") {
        titleInfo = "What is Engineer's gitHub username?";
        nameInfo = "github";
      } else if (title === "Intern") {
        titleInfo = "What is the Intern's school name?";
        nameInfo = "school";
      } else {
        titleInfo = "What is the Manager's office number?";
        nameInfo = "officeNumber";
      }
      inquirer
        .prompt([
          {
            message: titleInfo,
            name: nameInfo,
          },
          {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            default: false,
          },
        ])
        .then(function (response) {
            employees.push({name, title, id, email, ...response})
            if (response.addEmployee) {
               addEmplolyee() 
            } else {
                let titleInfo = "";
          console.log(employees);
            }
        });
    });
}

addEmplolyee();
