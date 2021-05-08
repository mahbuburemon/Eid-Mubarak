// select element

 let days = document.getElementById("days");
 let hours = document.getElementById("hours");
 let minutes = document.getElementById("minutes");
 let seconds = document.getElementById("seconds");

 function countdown(){

     const eventTime = new Date ("13 may 2021 07:00:00 pm");

     const currentTime = new Date ();

     const totalTime = eventTime - currentTime;

     let totalSeconds = Math.floor(totalTime/1000);
     let totalMinutes = Math.floor(totalSeconds/60);
     let totalHours =Math.floor(totalMinutes/60);

     let totalDays =Math.floor(totalHours/24);
     let hoursRemain = totalHours % 24;
     let minutesRemain = totalMinutes % 60;
     let secondsRemain = totalSeconds % 60;

     days.innerHTML = totalDays;
     hours.innerHTML = hoursRemain;
     minutes.innerHTML = minutesRemain;
     seconds.innerHTML = secondsRemain;

     console.log(totalDays,hoursRemain,minutesRemain,secondsRemain);
     afterCount(totalDays,hoursRemain,minutesRemain,secondsRemain)
     
     
 };
 
 function afterCount(totalDays,hoursRemain,minutesRemain,secondsRemain){



    if(totalDays <= 0 && hoursRemain <=0 && minutesRemain <=0 && secondsRemain <=-1){
        document.getElementById("countdown").innerHTML= ("May Allah accept our good deeds and Dua’s.");
            
        }



    }


 

 countdown();

 setInterval(countdown, 1000);