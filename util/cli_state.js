const state = {
    CLI_PAUSED: false,
    FG_PROCESS: null
}

function pauseCLI() {
    state.CLI_PAUSED = true;
}

function unpauseCLI() {
    state.CLI_PAUSED = false;
}

module.exports = {
    state,
    pauseCLI,
    unpauseCLI
}