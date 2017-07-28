// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd==='pwd') {
      process.stdout.write(process.argv[1]);
      process.stdout.write('\nprompt>')
  }
  if(cmd.toLowerCase()==='date'){
      var date=new Date()
      date=date.toString();
      process.stdout.write(date);
      process.stdout.write('\nprompt>')
  }
});
