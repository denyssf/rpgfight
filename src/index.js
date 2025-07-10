
const { introduction, userName } = require('./models/questions');

(async function startgame() {
    const confirmQuestion = await introduction();
    const user = await userName();
    console.log(`Welcome, ${user}!`);
})();
