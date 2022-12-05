const child_process = require('child_process')
const attachProcess = require('../util/attach_process')

module.exports = (command) => {
    return new Promise((resolve, reject) => {
        const binary = command.shift();
        const child = child_process.spawn(binary, command)

        attachProcess(child, resolve)
    });
}