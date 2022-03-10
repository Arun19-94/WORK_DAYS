let config = process.argv[2];
if(!config) {
    config = './config.dev.json'
}
let Config = require(`./${config}`);
module.exports = Config