const currentdate = new Date();


setInterval(() => {
    if(currentdate.getHours()>12)
    {console.log(currentdate.getHours()%12 + "::"
        + currentdate.getMinutes() + "::"
        + currentdate.getSeconds()+" PM")}else{
            console.log(currentdate.getHours() + "::"
        + currentdate.getMinutes() + "::"
        + currentdate.getSeconds()+" AM")


        }

}, 1000); 