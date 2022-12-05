const child_process = require('child_process');

module.exports = (command) => {
    return new Promise((resolve, reject) => {
        child_process.execFile(command.shift(), command, (err, stdout, stderr) => {
            if ( stderr ) console.log(stderr)
            else console.log(stdout)
            resolve()
        });
    })
}