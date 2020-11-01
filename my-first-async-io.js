var x=process.argv;


var fs=require("fs");
fs.readFile(x[2], function(err, data){
    if(err) return console.error(err);
       let tab=data.toString().split('\n');
       console.log(tab.length-1);
       return;
})
