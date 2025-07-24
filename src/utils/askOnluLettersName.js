const inquirer = require('inquirer');

async function askOnlyLettersName(message) {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: message,
      validate: function (input) {
        if (/^[A-Za-z]+$/.test(input)) {
          return true;
        }
        return 'Please enter only letters (no spaces, numbers, or symbols).';
      }
    }
  ]);

  return response.username;
}

module.exports = askOnlyLettersName;