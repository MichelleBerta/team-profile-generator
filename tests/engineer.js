const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Engineer(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Engineer("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Engineer("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("Can get gitHub via getGitHub()", () => {
    const testValue = "GitHub";
    const e = new Engineer("Foo", 1 testValue);
    expect(e.getGitHub()).toBe(testValue);
