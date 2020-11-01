const mymodule=require('./mymodule');
const directory= process.argv[2];
const extension= process.argv[3];

mymodule(directory, extension, (err, liste)=>{
 if(err) return console.error(err);
 liste.forEach(element => {console.log(element)
     
 });
})