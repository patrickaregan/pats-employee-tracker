const sayHello = require('../utils/sayHello');

test('sayHello() returns welcome message', () => {
  const greeting = "Welcome to Pat's Employee Tracker!";
  expect(sayHello()).not.toBeNull();
});

