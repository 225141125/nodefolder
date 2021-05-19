const express = require("express");
const fs =require("fs");

const app =express();

app.get("/",(req,res) =>{
    fs.readdir("C:\\Program Files\\MongoDB\\Server\\4.4",(err,data)=>{
        if (err) throw err;
        
        else{
            res.send(
                data.map((e)=>{
                    return e.includes(".")
                    ?`<div style="display:flex;align-items:center;margin-bottom:5px"><img style="width:20px;height:20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVgrCZUwUT9V-rLSpQPj10C8reI2lUodOA&usqp=CAU" alt="File"/> &nbsp <span>${e}</span></div>`
                    :`<div style="display:flex;align-items:center;margin-bottom:5px"><img style="width:30px;height:20px" src="https://img.icons8.com/emoji/452/open-file-folder-emoji.png" alt="Folder"/> &nbsp <span>${e}</span></div>`

                })
                .join(" ")
            );
        }

    });


    
});

app.listen(3000);
