// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log(`Greetings to you!`);
}

for (var i = 0; i < 3; i++) {
  printGreeting();
}

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function getArgument(input) {
  console.log(`Here's your argument: ${input}.`);
}

getArgument(`10`);

// 3: Write a function that has 3 parameters: a string and two numbers. The
// String will be the name of a company, and the numbers will represent the
// minimum and maximum of a pay range for a posted job. The function should
// print out a sentence that includes the name of the company and the range
// itself (if the numbers passed in are 90000 and 110000, the pay range is
// 20000).
function showPayRange(companyName, minPay, maxPay) {
  console.log(`${companyName} has a pay band of ${maxPay - minPay}`)
}

showPayRange(`Initech`, 80000, 120000);

// 4: Write a function that satifies the following interaction pattern:
function checkStock(quantity, item) {
  if (quantity >= 4) {
    console.log(`${item} is stocked.`);
  }
  else if (0 < quantity && quantity < 4) {
    console.log(`${item} - running LOW`);
  }
  else {
    console.log(`${item} - OUT of stock!`);
  }
}

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
