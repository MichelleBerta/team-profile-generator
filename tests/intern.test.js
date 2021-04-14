const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
const { test, expect } = require("@jest/globals");

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Intern(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Intern("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Intern("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("Can get school via getSchool()", () => {
    const testValue = "School";
    const e = new Intern("Foo", 1 testValue);
    expect(e.getSchool()).toBe(testValue);
});