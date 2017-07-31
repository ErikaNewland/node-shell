var fs = require('fs');
var chalk = require('chalk');

var pwd=function(param) {
    process.stdout.write(chalk.green(process.argv[1]));
}
    

var ls=function(param) {
    console.log(chalk.green(fs.readdirSync('/Users/ShiraPro/node-shell/node-shell')));
}

var echo=function(input){
    if(input==='$PATH'){
        input=process.env.PATH
    }
    console.log(chalk.green(input));
}

var cat = function (param) {
    fs.readFile(param, function (error,file) {
        if(error) {
            console.log(error);
        } else {
            console.log(file.toString());
        }
    });
}

var head = function (param) {
    fs.readFile(param, function (error,file) {
        if(error) {
            console.log(error);
        } else {
            var outputarray=file.toString().split('\n');
            console.log(outputarray);
            for (var i=0; i<5; i++) {
                console.log(outputarray[i]);
            }
        }
    });
}

module.exports={
    pwd: pwd,
    ls: ls,
    echo: echo,
    cat:cat,
    head:head

}