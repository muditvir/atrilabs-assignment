const { state, pauseCLI, unpauseCLI } = require('./cli_state');

module.exports = () => {
    const child = state.FG_PROCESS;
    
    child.stdout.unpipe(process.stdout);
    child.stderr.unpipe(process.stderr);
    child.removeAllListeners('exit');

    state.FG_PROCESS = null;
    
    unpauseCLI();
}