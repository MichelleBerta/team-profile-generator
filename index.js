const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employees = [];

function addEmployee() {
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
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?",
            default: false,
          },
        ])
        .then(function (response) {
          employees.push({ name, title, id, email, ...response });
          if (response.addEmployee) {
            addEmployee();
          } else {
            let titleInfo = "";
            // console.log(employees);
            // create for loop over employees array
            for (var i = 0; i < employees.length; i++) {
              console.log(employees[i]);
              let employeeCard = `
              <div class="container">
        <div class="row">
            <div class="col s12 m6">
                <div class="card #b39ddb deep-purple lighten-3">
                    <div class="card-content black-text">
                        <span class="card-title"><strong>${employees[i].title}</strong></span>
                            <ul class="title">
                                <li>Name: ${employees[i].name}</li>
                                <li>Email: ${employees[i].email}</li>
                                <li>ID: ${employees[i].id}</li>
                               <li> ${employees[i].title === "Engineer" ? `Github: ${employees[i].github}` : ""}
                                ${employees[i].title === "Intern" ? `School: ${employees[i].school}` : ""}
                                ${employees[i].title === "Manager" ? `Office Number: ${employees[i].officeNumber}` : ""} </li>
                              </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
              fs.appendFile("./team.html", employeeCard, function (err) {
                if (err) {
                  return reject(err);
                }
                // return resolve();
              });
            }
          }
        });
    });
}
function startHtml() {
  const html = `<!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  
      <title>team-profile-generator</title>
  </head>
  
  <body>
      <nav>
          <div class="nav-wrapper #311b92 deep-purple darken-4">
              <a href="#" class="brand-logo center">Team Profile</a>
          </div>
      </nav>`;
  fs.writeFile("./team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

// function finishHtml() {
//   const html = `
// </body>
// </html>`;

//   fs.appendFile("./team.html", html, function (err) {
//       if (err) {
//           console.log(err);
//       };
//   });
// }

startHtml();
addEmployee();
// finishHtml()
