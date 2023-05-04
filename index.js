#! /usr/bin/env node
import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
let score = 0;
let wrong = 0;
const welcome = async () => {
    console.log(figlet.textSync('Welcome to Quiz!'));
    const input = await inquirer.prompt([
        {
            type: "list",
            name: "Question",
            message: "Are you ready for taking quiz?",
            choices: ["Yes", "No"],
        },
    ]);
    if (input.Question == "Yes") {
        await select();
    }
    else {
        console.log(chalk.bgCyan("GoodBye! See you next time."));
    }
};
const select = async () => {
    const input = await inquirer.prompt([
        {
            name: "Question01",
            type: "list",
            message: "What is the capital city of Pakistan? ",
            choices: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        },
        {
            name: "Question02",
            type: "list",
            message: "When the Javascript was launched? ",
            choices: ["1992", "1996", "1995", "1994"],
        },
        {
            name: "Question03",
            type: "list",
            message: "Which platform is more helpful for Typescipt coding?",
            choices: ["Third Party", "Visual Studio", "Online", "Jupyter Notebook"],
        },
        {
            name: "Question04",
            type: "list",
            message: "What is the capital city of Pakistan? ",
            choices: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        },
        {
            name: "Question05",
            type: "list",
            message: "Which is the biggest city of Pakistan? ",
            choices: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        },
        {
            name: "Question06",
            type: "list",
            message: "Which city of Pakistan has a port? ",
            choices: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        },
        {
            name: "Question07",
            type: "list",
            message: "Who is our national poet? ",
            choices: ["Quaid-e-Azam", "Liaqat Ali Khan", "Gandhi", "Allama Iqbal"],
        },
        {
            name: "Question08",
            type: "list",
            message: "What is the biggest mountain of Pakistan? ",
            choices: ["Nanga Parbat", "K2", "Himalya", "Kirthar"],
        },
        {
            name: "Question09",
            type: "list",
            message: "What is the national animal of Pakistan? ",
            choices: ["Markhor", "Goat", "Horse", "Snake"],
        },
        {
            name: "Question10",
            type: "list",
            message: "What is the national language of Pakistan? ",
            choices: ["English", "Urdu", "Punjabi", "Siraiki"],
        },
    ]);
    if (input.Question01 == "Islamabad") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    if (input.Question02 == "1995") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    if (input.Question03 == "Visual Studio") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    if (input.Question04 == "Islamabad") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    if (input.Question05 == "Karachi") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    if (input.Question06 == "Karachi") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    if (input.Question07 == "Allama Iqbal") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    if (input.Question08 == "K2") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    if (input.Question09 == "Markhor") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    if (input.Question10 == "Urdu") {
        score += 10;
    }
    else {
        wrong += 1;
    }
    console.log(chalk.bgGray(`You attempted ${wrong} wrong so your score is ${score}`));
};
await welcome();
