const inquirer = require('inquirer');

async function validadeYn(message) {
  while (true) {
    const response = await inquirer.prompt([
      {
        type: 'input',
        name: 'answer',
        message: message,
        validate: function (input) {
          const lower = input.toLowerCase();
          if (lower === 'yes' || lower === 'no') {
            return true;
          }
          return 'Please type "yes" or "no".';
        }
      }
    ]);

    const answer = response.answer.toLowerCase();
    if (answer === 'yes' || answer === 'no') {
      return answer === 'yes'; // retorna true se "yes", false se "no"
    }
  }
}

module.exports = validadeYn;