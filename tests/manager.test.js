const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Manager(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Manager("Alice", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Manager("Alice", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("Can get office number via getOfficeNumber()", () => {
  const testValue = 100;
  const e = new Manager("Alice", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
test('getTitle() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Alice", 1, "test@test.com", "100", testValue);
  expect(e.getTitle()).toBe(testValue);
});
