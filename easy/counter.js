



// setInterval(()=>{
    
 
//     console.log(count);
//     count++;

// },1000)



let count = 0;

function incrementAndLog() {
  console.log(count);
  count++;
  setTimeout(incrementAndLog, 1000);
}

// Start the loop
incrementAndLog();

