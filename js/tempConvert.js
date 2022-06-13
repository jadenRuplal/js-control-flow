
let tempF = 10
let temp =  "c"


    if ( temp === "c"){
        console.log("The temp in C is " + ((tempF - 32) * 5/9))
    } else if ( temp === "k") {
        console.log("The temp in K is " + ((tempF - 32) * 5/9 + 273.15))
    } else {
        console.log("Please pick C or K")
    }

