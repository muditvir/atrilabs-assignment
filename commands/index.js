const cd = require('./cd');
const ls = require('./ls');
const pwd = require('./pwd');
const exit = require('./exit');
const binary = require('./binary');
const fg = require('./fg');

module.exports = {
    pre: {
        'cd': cd,
        'ls': ls,
        'pwd': pwd,
        'fg': fg,
        'exit': exit
    },
    default: binary
}