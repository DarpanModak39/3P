const fs=require('fs');
const file= fs.readdirSync('./');
fs.exists('./ps1b.js',function(result)
{
    if (result) console.log("Path exists");
    else console.log("Path do not exists");

});
console.log(file);