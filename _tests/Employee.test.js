const Employee = require('../lib/Employee');
const employee = new Employee("bob", "251", "bob@gmail.com")
test("getName should return name property", () => {
    
    expect(employee.getName()).toBe("bob");
});

test("getId should return id property", () => {
    
    expect(employee.getId()).toBe("251");
});

test("getEmail should return email property", () => {
    
    expect(employee.getEmail()).toBe("bob@gmail.com");
});

test("getRole should return Employee", () => {
    expect(employee.getRole()).toBe("Employee")
})