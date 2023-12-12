const fs = require("fs");


fs.readFile("//home/noob/100xdevs/assignments/a.txt", "utf-8", (err, data) => {
    data = data.replace(/[&\/\\#,+()$~%. '":*?<>{}!]/g, ' ');
    fs.unlink("/home/noob/100xdevs/assignments/week-2/a.txt", (err => { 
        if (err) console.log(err); 
        
        
      })); 

    const filename = "a.txt";

    fs.open(filename, "a", (err, fd) => {
        if (err) {
            console.log(err.message);
        } else {
            fs.write(fd, data, (err, bytes) => {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log(bytes + ' bytes written');
                }
            })
        }
    })


})


