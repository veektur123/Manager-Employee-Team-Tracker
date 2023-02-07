const Manager = require('../lib/Manager');
const manager = new Manager("bob", "251", "bob@gmail.com", "25B")
test("officeNumber should return office number property", () => {
    
    expect(manager.getOfficeNumber()).toBe("25B");
});

test("getRole should return Manager", () => {
    expect(manager.getRole()).toBe("Manager")
})