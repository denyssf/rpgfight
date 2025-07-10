const inquirer = require('inquirer');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function introduction() {
    console.clear();
    await sleep(1000);
    console.log("🐉 Welcome to RPGGFIGHT - Dungeon Simulator 🏰\n'");
    await sleep(3000);
    console.log("In this game, you will face a series of challenges in a dungeon.");
    await sleep(3000);
const request = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmQuestion',
      message: 'Do you want to listen to the dungeon story or do you want to skip it?',
      default: false
    }
  ]);
    console.log(`Resposta: ${request.confirmQuestion ? 'Yes' : 'No'}`);
    if (request.confirmQuestion === true) {
        console.log("You are a dungeon explorer, and the king of a great city summons five\nof the best explorers to conquer the great dungeon that has appeared in his kingdom.\nIt has a peculiar shape and no one can explain its existence, as if it were something from another world and not just any dungeon.\nYou bravely accept to go, because the reward is great and you, as a great explorer, feel the desire to explore it and conquer\nits riches and kill the mythical monsters that exist within it.");
    } else {
        console.log("You chose to skip the story. Let's continue!");
    }
   return request.confirmQuestion;
}

async function userName() {
const questionName = await inquirer.prompt([
    {
      type: 'input',
      name: 'user',
      message: 'So without further ado, what would your name be?',
    },
  ]);

  return questionName.user;
}
module.exports = { introduction, userName};