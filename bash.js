var userCommand=require('./commands.js');
var chalk = require('chalk');

// Output a prompt
process.stdout.write(chalk.yellow('prompt > '));
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    var allCommands=cmd.split(" ");
    var cmd=allCommands[0];
    var argument=allCommands[1];
    console.log(argument);
    userCommand[cmd](argument);
    process.stdout.write('\nprompt>');
});

// // The stdin 'data' event fires after a user types in a line




