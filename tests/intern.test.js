const Intern = require("../lib/intern");
const Employee = require("../lib/employee");
const { test } = require("@jest/globals");

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Intern(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Intern("Alice", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Intern("Alice", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("Can get school via getSchool()", () => {
  const testValue = "School";
  const e = new Intern("Alice", 1, "test@test.com,", testValue);
  expect(e.getSchool()).toBe(testValue);
});
test('getTitle() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Alice", 1, "test@test.com", "School", testValue);
  expect(e.getTitle()).toBe(testValue);
});
