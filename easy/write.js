const fs=require("fs"); 
   
const str = "I have succesfully completed this challenge"; 
const filename = "input.txt"; 
   
fs.open(filename, "a", (err, fd)=>{ 
    if(err){ 
        console.log(err.message); 
    }else{ 
        fs.write(fd, str, (err, bytes)=>{ 
            if(err){ 
                console.log(err.message); 
            }else{ 
                console.log(bytes +' bytes written'); 
            } 
        })         
    } 
})