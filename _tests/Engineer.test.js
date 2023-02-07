const Engineer = require('../lib/Engineer');
const engineer = new Engineer("bob", "251", "bob@gmail.com", "rickybobby")
test("getGithub should return Github property", () => {
    
    expect(engineer.getGithub()).toBe("rickybobby");
});

test("getRole should return Engineer", () => {
    expect(engineer.getRole()).toBe("Engineer")
})