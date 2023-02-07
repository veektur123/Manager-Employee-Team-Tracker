console.log("hello")

const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter team managers name.', 
        validate: (answer)=> {
            if (!answer) {
                return "Enter team manager name!"
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter team managers ID.', 
        validate: (answer)=> {
            if (!answer) {
                return "Enter team manager ID!"
            }
            else {
                return true
            }
        }
    },
    
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter team managers email.', 
        validate: (answer)=> {
            if (!answer) {
                return "Enter team manager email!"
            }
            else {
                return true
            }
        }
    },

    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Please enter team managers office number.', 
        validate: (answer)=> {
            if (!answer) {
                return "Enter team manager office number!"
            }
            else {
                return true
            }
        }
    }
    
]
let manager
inquirer
  .prompt(managerQuestions)
  .then((answers) => {
    const {managerName, managerId, managerEmail, managerOfficeNumber} = answers
    manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)
  })