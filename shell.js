const readline = require('readline');
const commands = require('./commands');
const processMap = require('./util/process_map');
const { state } = require('./util/cli_state');
const detachProcess = require('./util/detach_process');

const cli = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
    prompt: '$> '
})

cli.prompt()
cli.on('line', async line => {
    if ( state.CLI_PAUSED ) {
        state.FG_PROCESS.stdin.write(line)
        return;
    }

    line = line.trim().split(' ');

    if ( line[0] == '' ) {
        cli.prompt();
        return;
    }

    let validCommand = false;
    for ( command in commands.pre ) {
        if ( line[0] === command ) {
            await commands.pre[command](line);
            validCommand = true;
            break;
        }
    }

    if ( !validCommand ) {
        await commands.default(line);
    }
    
    cli.prompt();
})

cli.on('SIGINT', () => {
    if ( state.CLI_PAUSED ) {
        state.FG_PROCESS.kill('SIGINT')
    }
})

cli.on('SIGTSTP', () => {
    if ( state.CLI_PAUSED ) {
        processMap.set(state.FG_PROCESS.pid, state.FG_PROCESS);
        console.log(state.FG_PROCESS.pid);

        detachProcess();
        cli.prompt();
    }
})