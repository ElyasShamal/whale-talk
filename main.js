let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  if (input[inputIndex] === "e") {
    resultArray.push(input[inputIndex]);
  }

  if (input[inputIndex] === "u") {
    resultArray.push(input[inputIndex]);
  }

  for (vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if (input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
}

const resultStr = resultArray.join("").toUpperCase();
console.log(resultStr);

// console.log(resultArray);
