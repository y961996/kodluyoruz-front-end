let user_name = prompt("İsminizi giriniz")
let myName = document.querySelector("#myName")

myName.innerHTML = user_name

function showTime(){
  let date = new Date()
  let hour = date.getHours()
  hour = hour < 10 ? "0" + hour : hour
  let minute = date.getMinutes()
  minute = minute < 10 ? "0" + minute : minute
  let second = date.getSeconds()
  second = second < 10 ? "0" + second : second 

  let current_day;
  if(date.getDay() == 0){
    current_day = "Pazar";
  } else if(date.getDay() == 1){
    current_day = "Pazartesi";
  } else if(date.getDay() == 2){
    current_day = "Salı";
  } else if(date.getDay() == 3){
    current_day = "Çarşamba";
  } else if(date.getDay() == 4){
    current_day = "Perşembe";
  } else if(date.getDay() == 5){
    current_day = "Cuma";
  } else{
    current_day = "Cumartesi";
  }

  let current_clock_time = hour + ":" + minute + ":" + second

  let myClock = document.querySelector("#myClock")
  myClock.innerHTML = current_clock_time + " " + current_day;
  myClock.textContent = current_clock_time + " " + current_day;

  setTimeout(showTime, 1000)
}

showTime()