const Intern = require('../lib/Intern');
const intern = new Intern("bob", "251", "bob@gmail.com", "MIT")
test("getSchool should return school property", () => {
    
    expect(intern.getSchool()).toBe("MIT");
});

test("getRole should return Intern", () => {
    expect(intern.getRole()).toBe("Intern")
})