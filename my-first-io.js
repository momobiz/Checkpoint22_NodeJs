

const fs=require("fs");

var data=fs.readFileSync(process.argv[2]);
var tab=data.toString().split('\n')
console.log(tab.length-1);