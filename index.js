console.log("hello")

const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const returnHtml = require('./src/templates')

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

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: `Please enter the engineer's name.`, 
        validate: (answer)=> {
            if (!answer) {
                return `Enter team engineer's name!`
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: `Please enter the engineer's id.`, 
        validate: (answer)=> {
            if (!answer) {
                return `Enter engineer's ID!`
            }
            else {
                return true
            }
        }
    },
    
    {
        type: 'input',
        name: 'engineerEmail',
        message: `Please enter the engineer's email.`, 
        validate: (answer)=> {
            if (!answer) {
                return `Enter engineer's email!`
            }
            else {
                return true
            }
        }
    },

    {
        type: 'input',
        name: 'engineerGithub',
        message: `Please enter the engineer's Github.`, 
        validate: (answer)=> {
            if (!answer) {
                return `Enter engineer's Github!`
            }
            else {
                return true
            }
        }
    }
    
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: `Please enter the intern's name.`, 
        validate: (answer)=> {
            if (!answer) {
                return `Enter the intern's name!`
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: `Please enter the intern's id.`, 
        validate: (answer)=> {
            if (!answer) {
                return `Enter intern's ID!`
            }
            else {
                return true
            }
        }
    },
    
    {
        type: 'input',
        name: 'internEmail',
        message: `Please enter the intern's email.`, 
        validate: (answer)=> {
            if (!answer) {
                return `Enter intern's email!`
            }
            else {
                return true
            }
        }
    },

    {
        type: 'input',
        name: 'internSchool',
        message: `Please enter the intern's School.`, 
        validate: (answer)=> {
            if (!answer) {
                return `Enter intern's School!`
            }
            else {
                return true
            }
        }
    }
    
]
const additionalEmployeeQuestion = [
    {
        type: 'list',
        name: 'additionalEmployee',
        message: 'Would you like to add an engineer or an intern or return to finish building your team?', 
        choices:['Add Engineer', 'Add Intern', 'Return to Finish Building Team.',],
    }
 ]
let manager
const engineers = []
const interns = []
inquirer
  .prompt(managerQuestions)
  .then((answers) => {
    const {managerName, managerId, managerEmail, managerOfficeNumber} = answers
    manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)
  }).then(()=> {
    askAdditionalEmployeeQuestion()
  })

  const askAdditionalEmployeeQuestion = () => {
    return inquirer.prompt(additionalEmployeeQuestion).then((answers)=> {
        const answer = answers.additionalEmployee
        if(answer === 'Add Engineer'){
            inquirer.prompt(engineerQuestions).then((answers) => {
                const {engineerName, engineerId, engineerEmail, engineerGithub} = answers
                const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub)
                engineers.push(engineer)
                return askAdditionalEmployeeQuestion()
            })
        }

        else if(answer === 'Add Intern'){
             inquirer.prompt(internQuestions).then((answers) => {
                const {internName, internId, internEmail, internSchool} = answers
                const intern = new Intern(internName, internId, internEmail, internSchool)
                interns.push(intern)
                return askAdditionalEmployeeQuestion()
            })
        } else {
            const employeeArray = [manager, ...engineers, ...interns]
            const generatedHtml = returnHtml(employeeArray)
            fs.writeFileSync("./dist/index.html",generatedHtml)
            return
        }
    })
  }
