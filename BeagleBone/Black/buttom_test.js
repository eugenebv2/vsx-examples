var b = require('bonescript');
b.pinMode('P9_16', b.INPUT);//GPIO 51 correspond to P9_16. More details at https://beagleboard.org/Support/bone101/#headers

setInterval(check,1000);

function check(){
    b.digitalRead('P9_16', checkButton);
}

function checkButton(x) {
    console.log(x.value);
    if(x.value == 1){
        console.log("you are pressing Grove button");
    }
    else{
        console.log("you are not pressing Grove button");
    }
}