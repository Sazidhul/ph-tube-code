// const isVerified = "";

// if(isVerified === true){
//    console.log("user is verified");
// } else{
//    console.log("user is not verified");
// }
// console.log(
//    `${isVerified === true ? "user is verified" : "user is not verified"}`
// );

function getTimeString(time){
   // get Hour and rest seconds 
   const hour = parseInt(time/3600);
   let remainingSecond = time % 3600;
   const minute = parseInt(remainingSecond / 60);
   remainingSecond = remainingSecond % 60;
   return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

console.log(getTimeString(4320));


// function getTimeString(timestamp) {
//    const now = Math.floor(Date.now() / 1000); // current time in seconds
//    let time = now - timestamp; // difference in seconds

//    const months = Math.floor(time / (30 * 24 * 3600));
//    time %= 30 * 24 * 3600;

//    const days = Math.floor(time / (24 * 3600));
//    time %= 24 * 3600;

//    const hours = Math.floor(time / 3600);
//    time %= 3600;

//    const minutes = Math.floor(time / 60);
//    const seconds = time % 60;

//    return `${months} month ${days} day ${hours} hour ${minutes} minute ${seconds} second ago`;
// }


// function getTimeString(time) {
//    // Get current Unix timestamp in seconds
//    const now = Math.floor(Date.now() / 1000);

//    // Calculate difference in seconds
//    let diff = now - time;

//    // Calculate months and remaining seconds
//    const month = Math.floor(diff / (30 * 24 * 3600));
//    diff = diff % (30 * 24 * 3600);

//    const day = Math.floor(diff / (24 * 3600));
//    diff = diff % (24 * 3600);

//    const hour = Math.floor(diff / 3600);
//    diff = diff % 3600;

//    const minute = Math.floor(diff / 60);
//    const second = diff % 60;

//    return `${month} month ${day} day ${hour} hour ${minute} minute ${second} second ago`;
// }

// console.log(getTimeString(1672656000));

