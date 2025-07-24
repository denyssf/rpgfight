const inquirer = require('inquirer');
const classers = require('./classes');
const player = require('./currentPlayer');
const sleep = require ('../utils/sleep');
const validadeYn = require('../utils/validadeYn');
const askOnlyLettersName = require('../utils/askOnluLettersName');

async function introduction() {
    console.clear();
    await sleep(1000);
    console.log("🐉 Welcome to RPGGFIGHT - Dungeon Simulator 🏰\n");
    await sleep(3000);
    console.log("In this game, you'll face a series of challenges inside a mysterious dungeon.\n");
    await sleep(3000);
const wantsStory = await validadeYn('\nDo you want to listen to the dungeon story? (yes or no):');

  await sleep(2000);
  if (wantsStory) {
    console.log("\nYou are a dungeon explorer, and the king of a great city summons five\nof the best explorers to conquer the great dungeon that has appeared in his kingdom.\nIt has a peculiar shape and no one can explain its existence, as if it were something\nfrom another world and not just any dungeon. You bravely accept to go, because the reward\nis great and you, as a great explorer, feel the desire to explore it and conquer its riches and kill\nthe mythical monsters that exist within it.\n");
  } else {
    console.log("\nYou chose to skip the story. Let's continue!");
  }

  return wantsStory;
}

async function userName() {
await sleep(3000);
const name = await askOnlyLettersName('\nSo without further ado, what would your name be?\nPlease enter your name (letters only):');
  player.name = name;
  return name;
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

async function asked00() {
  await sleep(3000);
  console.clear();
  console.log(`\nYou are ${player.name}, a brave ${player.className} ready to explore the dungeon.\n`);
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

async function asked01() {
  await sleep(3000);
  console.log("\nAfter waking up, you decide to prepare for the trip by packing your things.");
  await sleep(3000);

  const showBackpack = await validadeYn('\nDo you want to see your backpack contents? (yes or no):');

  if (showBackpack) {
    await sleep(5000);
    console.clear();
    console.log("\nYour backpack contains:\n");
    console.log(`- ${player.bag}`);
    console.log("Nothing in here... Good thing I checked. Now I can organize my stuff.");
    await sleep(3000);
  } else {
    console.log("\nYou chose not to see your backpack contents. Let's continue!");
  }
}



module.exports = { introduction, userName, userClass, asked00, asked01 };