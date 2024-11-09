function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var d=data.getdays();
    var day="";
    var session = "AM";
    var session1 ="Good Morning";
    
    if(h == 0){
        h = 12;
    }
    if(h>4&&h<12)
        session1="Good Morning";
if(h>12&&h<=16)
     session1=" Good After noon";
if(h>16&&h<=20)
    session1=" Good Evening";
if(h>20||h<=4)
    session1="Good Night";

    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    switch(d)
    {
        case 1: day="SUNDAY";
        case 2: day="MONDAY";
        case 3: day="TUESDAY";
        case 4: DAY="WEDNESDAY";
        case 5: DAY="THURSDAY"       
        case 6: day="FRIDAY";
        case 7 : day="SUTERDAY";
       

    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time =session1 +" "+ day +"  "+ h + ":" + m + ":" + s + "  " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();