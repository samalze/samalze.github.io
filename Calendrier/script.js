document.addEventListener('DOMContentLoaded', function() {
    const date  = new Date();
    
    let nbMoisparAn = 3;

    let year    = date.getFullYear();
    let month   = date.getMonth()+1;
    let day     = date.getDate();
    
    let pumbaMonth  =   positionOverflow(month,nbMoisparAn)
    let pumbaYear;
    month%nbMoisparAn==0? pumbaYear = Math.floor((month-1)/nbMoisparAn): pumbaYear=Math.floor(month/nbMoisparAn);


    //Date
    document.getElementById("day").innerHTML    =   "Jour: " + day.toString()
    document.getElementById("month").innerHTML  =   "Mois: " + pumbaMonth.toString() 
    document.getElementById("year").innerHTML   =   "An: " + pumbaYear.toString() 
    
    //Roles
    let roles = getRoles(pumbaMonth);
    console.log('AAA' + roles)

    document.getElementById("Legislatif").innerHTML     =   "Législatif : " + roles[0]
    document.getElementById("Executif").innerHTML       =   "Exécutif   : " + roles[1] 
    document.getElementById("Judiciaire").innerHTML     =   "Judiciaire : " + roles[2] 
    
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

function getRoles(pumbaMonth){
    const i = 'Ivan'
    const n = 'Nam'
    const m = 'Maxime'

    switch(pumbaMonth){
        case 1 :
            //      Legislatif, Executif, Judiciaire
            return  [    i    ,     m  ,   n        ]
        case 2 :
            //      Legislatif, Executif, Judiciaire
            return  [    n    ,     i  ,      m    ]
        case 3 :
            //      Legislatif, Executif, Judiciaire
            return  [    m    ,     n  ,   i        ]
        default:
            console.log('ERror')
            break;
    }
}