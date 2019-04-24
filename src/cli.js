#!/usr/bin/env node
const yargsCli = require('yargs');
const { initialize } = require('.');

// ============================================================
// Functions

/**
 * Building cli
 */
function build() {
    return yargsCli.usage('$0 <cmd> [args]')
        .command('start', 'Start server', (yargs) => {
            yargs.positional('port', {
                type: 'number',
                default: 3000,
                describe: 'Port number',
            });
        }, startServer)
        .help()
        .argv;
}

// ============================================================
// Cli commands

/**
 * Start the server
 * @param {number} port
 */
function startServer({ port }) {
    initialize({ port });
}

// ============================================================
// Main
build();
