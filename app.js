import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1. Which keyword is used to create a function in Typescript?",
        choices: ["function", "def", "create", "func"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. What does 'any' type in Typescript signify?",
        choices: ["A specific type", "No type checking", "An array type", "None of the above"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.Which of the following is a valid way to define an interface in Typescript?",
        choices: ["interface MyInterface {}", "MyInterface: interface {}", "class MyInterface {}", "None of the above"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.  What will be the output of the expression: 'Hello' + ' World'?",
        choices: ["Hello World", "HelloWorld", "Error", "Hello + World"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. How can you define a constant in Typescript?",
        choices: ["let constantName", "const constantName", "var constantName", "constant constantName"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "function":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "No type checking":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
;
switch (quiz.question_3) {
    case "interface MyInterface {}":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "Hello World":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "const constantName":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`score:${score}`);
