
const { introduction, userName, userClass, asked0} = require('./models/prompts');

(async function startgame() {
    const confirmQuestion = await introduction();
    const user = await userName();
    const chosenClass = await userClass();
    const asked = await asked0();
})();
