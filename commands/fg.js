const processMap = require('../util/process_map');
const attach_process = require('../util/attach_process');

module.exports = (command) => {
    return new Promise((resolve, reject) => {
        const pid = parseInt(command[1]);
        const child = processMap.get(pid);

        attach_process(child, resolve);
    });
}