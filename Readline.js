const readline = require('readline');

const rl  = readline.createInterface({

    input: process.stdin,
    output: process.stdout,

});

rl.question("what is your Name?", function (answer){
    console.log(`oh,so your Name is `,answer);
})