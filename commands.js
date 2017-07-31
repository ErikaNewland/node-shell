var fs = require('fs');

var pwd=function() {
    process.stdout.write(process.argv[1]);
}
    

var ls=function() {
    console.log(fs.readdirSync('/Users/ErikaNewland/Fullstack/GH1707/node-shell'));
}

var echo=function(input){
    if(input==='$PATH'){
        input=process.env.PATH
    }
    console.log(input);
}




module.exports={
    pwd: pwd,
    ls: ls,
    echo: echo
}