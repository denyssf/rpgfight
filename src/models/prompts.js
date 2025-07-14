const inquirer = require('inquirer');
const classers = require('./classes');
const player = require('./currentPlayer');
const sleep = require('../utils/sleep');

async function introduction() {
    console.clear();
    await sleep(1000);
    console.log("🐉 Welcome to RPGGFIGHT - Dungeon Simulator 🏰\n");
    await sleep(3000);
    console.log("In this game, you'll face a series of challenges inside a mysterious dungeon.\n");
    await sleep(3000);
const request = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmQuestion',
      message: '\nDo you want to listen to the dungeon story?\nPlease answer with Yes or No:',
      default: false
    }
  ]);
    if (request.confirmQuestion === true) {
        await sleep(3000);
        console.log("\nYou are a seasoned explorer. One day, the king of a great city summons five of the best adventurers to investigate a mysterious dungeon that has appeared within his kingdom.\nIts strange architecture and unknown origin suggest it's not from this world...\nDriven by curiosity and the promise of riches, you accept the challenge to conquer its depths.\n");
    } else {
        await sleep(3000);
        console.log("\nYou chose to skip the story. Let's continue!");
    }
   return request.confirmQuestion;
}

async function userName() {
await sleep(3000);
const questionName = await inquirer.prompt([
    {
      type: 'input',
      name: 'user',
      message: '\nBefore we begin, what is your name?:',
    },
  ]);
  player.name = questionName.user;
  return questionName.user;
}

async function userClass(){
  await sleep(3000);
  const questionClass = await inquirer.prompt([
      {
        type: 'list',
        name: 'class',
        message: '\nWhat class would you like to choose?\nPlease select a class:',
        choices: ['Warrior', 'Mage', 'Rogue', 'Paladin', 'Archer', 'Druid'],
      },
    ]);
  const classMap = {
    Warrior: classers.class1,
    Mage: classers.class2,
    Rogue: classers.class3,
    Paladin: classers.class4,
    Archer: classers.class5,
    Druid: classers.class6,
  };

  const selectedClass = classMap[questionClass.class];
  Object.assign(player, selectedClass);
  player.className = questionClass.class;
  
  return questionClass.class;
}

async function asked0() {
  await sleep(3000);
  console.log('\nAnd it all begins in a small village called Clover, surrounded by\nmountains, tranquility reigns in this village, and in a modest house\nwith only 3 rooms, a small vegetable garden, our story begins.\n');
  await sleep(3000);

  let continuar = false;

  while (!continuar) {
    const asked = await inquirer.prompt([
      {
        type: 'list',
        name: 'ask0',
        message: '\nA new day arrives. Sunlight illuminates your face through the window.\nWhat do you do?',
        choices: [
          'get up',
          'go back to sleep',
          'meditate',       
          'stretch',        
          'close the window', 
          'punch the wall'  
        ],
      }
    ]);

    switch (asked.ask0) {
      case 'get up':
        console.log('\nYou get up and prepare for the day ahead.');
        continuar = true;
        break;
      case 'go back to sleep':
        console.log('\nYou decide to go back to sleep, but the day is still young...');
        await sleep(5000);
        break;
      case 'meditate':
        console.log('\nYou meditate, focusing your mind, then get up feeling centered.');
        player.bonusHealth += 5;
        continuar = true;
        break;
      case 'stretch':
        console.log('\nYou stretch and feel more agile, then get up ready for the day.');
        player.bonusAgility += 1;
        continuar = true;
        break;
      case 'close the window':
        console.log('\nYou close the window. You feel more resilient and gets up.');
        player.bonusDefense += 1;
        continuar = true;
        break;
      case 'punch the wall':
        console.log('\nYou punch the wall! Painful but powerful and gets up.');
        player.bonusAttack += 1;
        continuar = true;
        break;
    }
  }
}


module.exports = { introduction, userName, userClass, asked0};