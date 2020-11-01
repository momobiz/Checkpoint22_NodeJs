
var fs=require('fs');
var path=require('path');

module.exports=(directory, extension, callback)=>{
    extension=`.${extension}`;
    fs.readdir(directory, {encoding:"utf-8"}, (err,liste)=>{
        if(err) return callback(err);
        const filteredlist=liste.filter(el=>path.extname(el)===extension);
        return callback(null, filteredlist);
    })

}
