var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
const fs = require('fs')

if(isAndroid) {
    // Do something!
    let data = "is android"
      
    // Write data in 'Output.txt' .
    fs.writeFile('Output.txt', data, (err) => {
          
        // In case of a error throw err.
        if (err) throw err;
    })
}