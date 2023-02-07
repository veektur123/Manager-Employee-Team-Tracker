const createCard = (employee) => {
    let specialAttribute
    let imageSource

    if(employee.getRole() === 'Manager'){
        specialAttribute = `Office Number: ${employee.getOfficeNumber()}`
        imageSource = './assets/coffeecup.jpg'
    } else if(employee.getRole() === 'Engineer') {
        specialAttribute = `Github: ${employee.getGithub()}`
        imageSource = `./assets/glasses.png`
    } else {
        specialAttribute = `School: ${employee.getSchool()}`
        imageSource = `./assets/gradcap.jpg`
    }

    const cardTemplate = `<div class="card">
    <div class="title-container">
        <h4><b>${employee.getName()}</b></h4>
        <div class="role-container">
            <img src="${imageSource}" alt="role-icon" style="width:100%">
            <p>${employee.getRole()}</p>
        </div>
    </div>
    <div class="employee-attributes-container">
        <div class="employee-attributes">
            <div class="attribute">
                <p>ID: ${employee.getId()}</p>
            </div>
            <div class="attribute">
                <p>Email: ${employee.getEmail()}</p>
            </div>
            <div class="attribute">
                <p>${specialAttribute}</p>
            </div>
        </div>
    </div>
</div>`

return cardTemplate
}

const createCards = (employees) => {
    let cards = ''
    employees.forEach((employee) => {
        cards += createCard(employee)
    })
    return cards
}

const returnHtml = (employees) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Manager's Employee Files</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="header-banner">
            <h1>My Team</h1>
        </div>
        <div class="cards-container">
            ${createCards(employees)}
        </div>
    
    </body>
    </html>`
}

module.exports = returnHtml