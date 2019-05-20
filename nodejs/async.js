const fs = require('fs');
function helloCB(err,data){
    if(err){
        console.error(err);
    } else {
        console.log(data);
    }

}

fs.readFile('async.js','utf-8',function(err,data){
    if(err){
        console.error(err);
    } else {
        console.log(data);        
    }
});

//fs.readFile('hello.js','utf-8',helloCB);

console.log('*** end ***'); //end comment


