document.addEventListener('DOMContentLoaded', function() {
    const date  = new Date();
    
    let nbMoisparAn = 4;

    let year    = date.getFullYear();
    let month   = date.getMonth()+1;
    let day     = date.getDate();
    
    let pumbaMonth  =   positionOverflow(month,nbMoisparAn)
    let pumbaYear;
    month%nbMoisparAn==0? pumbaYear = Math.floor((month-1)/nbMoisparAn): pumbaYear=Math.floor(month/nbMoisparAn);

    document.getElementById("day").innerHTML =   "Jour: " + day.toString()
    document.getElementById("month").innerHTML =   "Mois: " + pumbaMonth.toString() 
    document.getElementById("year").innerHTML =   "An: " + pumbaYear.toString() 
    
    console.log("ALDJAOSIJD");
    
}, false);

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("date").innerHTML = "ASDJAOSIJDOIAJD"//  str(pumbaYear) + " / " + str(pumbaMonth) + " / " + str(day);
//     // alert("Ready!");
// }, false);

function  positionOverflow(place, nbMax = 4) {
    let a = Math.floor(place / nbMax)
    let b;
    place%nbMax!=0 ? b = place - a * nbMax : b = nbMax;
    return b
}