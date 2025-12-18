function zero(nr) {
    if (nr<10)
        return "0"+nr ;
    else
        return nr
}

function updateTime(dayLo, timeLo){
    var dataLo = new Date();
    var day = dataLo.getDay()
    var vectorZile = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"] 
    dayLo.innerHTML = vectorZile[day]+" ";
    timeLo.innerHTML =zero(dataLo.getHours())+":"+zero(dataLo.getMinutes())

}


window.onload=function() {

    
    var reloj = this.document.getElementById("reloj")
    var timeLo = this.document.createElement("p");
    timeLo.classList.add("time")
    var dayLo = this.document.createElement("p");
    dayLo.classList.add("day")
        
    reloj.appendChild(dayLo);
    reloj.appendChild(timeLo);

    updateTime(dayLo, timeLo);
    setInterval(() => updateTime(dayLo,timeLo), 1000);
}