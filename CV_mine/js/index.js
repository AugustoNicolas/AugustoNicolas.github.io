function zero(nr) {
    if (nr<10)
        return "0"+nr ;
    else
        return nr
}

var vectorZile = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] 

function updateTime(dayLo, timeLo){
    var dataLo = new Date();
    var day = dataLo.getDay()
    dayLo.innerHTML = "For you is: " +vectorZile[day]+" ";
    timeLo.innerHTML = zero(dataLo.getHours())+":"+zero(dataLo.getMinutes())

}

function getTimeInBolivia(dayMe, timeMe) {
    var data = new Date();
    var opciones = {
        timeZone: 'America/La_Paz', // Zona horaria oficial de Bolivia
        hour: '2-digit',
        minute: '2-digit',
        //second: '2-digit',
        hour12: false
    };
    var opcionesDia = {
        timeZone: 'America/La_Paz', // IMPORTANTE: Usa la misma zona
        weekday: 'short' // 'short' = Mon, Tue... | 'long' = Monday, Tuesday...
    };
    
    timeMe.innerHTML = data.toLocaleTimeString('es-BO', opciones);
    dayMe.innerHTML = "For my is: " + data.toLocaleDateString('en-US', opcionesDia);
    
}


window.onload=function() {

    
    var reloj = this.document.getElementById("reloj");
    var timeLo = this.document.createElement("p");
    timeLo.classList.add("time");
    var dayLo = this.document.createElement("p");
    dayLo.classList.add("day");
        
    reloj.appendChild(dayLo);
    reloj.appendChild(timeLo);

    
    var timeMe = this.document.createElement("p");
    timeMe.classList.add("time");
    var dayMe = this.document.createElement("p");
    dayMe.classList.add("day");

    
    reloj.appendChild(dayMe)
    reloj.appendChild(timeMe)
    getTimeInBolivia(dayMe, timeMe);

    
    updateTime(dayLo, timeLo);
    setInterval(() => updateTime(dayLo,timeLo), 1000);

}