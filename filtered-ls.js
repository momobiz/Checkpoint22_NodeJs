
var fs=require('fs');
var path=require('path');

var directory=process.argv[2];
var extension=`.${process.argv[3]}`;

fs.readdir(directory,(err, liste)=>{
  if(err) return console.log(err);
  
  liste.forEach(el=>{
    if (path.extname(el)===extension){
      console.log(el);
    }
  })

})

