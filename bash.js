var userCommand=require('./commands.js');

// Output a prompt
process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    var allCommands=cmd.split(" ");
    var cmd=allCommands[0];
    var argument=allCommands[1];
    userCommand[cmd](argument);
    process.stdout.write('\nprompt>');
});

// // The stdin 'data' event fires after a user types in a line




