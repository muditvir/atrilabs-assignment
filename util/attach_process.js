const { state, pauseCLI, unpauseCLI } = require('./cli_state');

module.exports = (child, callback) => {
    pauseCLI()

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on('exit', (code, signal) => { unpauseCLI(); callback && callback(); })

    state.FG_PROCESS = child;
}