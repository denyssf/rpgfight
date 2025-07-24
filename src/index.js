
const { introduction, userName, userClass, asked00, asked01} = require('./models/prompts');

(async function startgame() {
    const confirmQuestion = await introduction();
    const user = await userName();
    const chosenClass = await userClass();
    const asked0 = await asked00();
    const asked1 = await asked01();
})();
