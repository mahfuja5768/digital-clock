function digitalClock() {
    let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let month = date.getMonth();
  let year = date.getFullYear();
  let dateNo = date.getDate();
  let dayName = date.toLocaleString('default', {weekday: "short"});
  let periods = "AM"
  
  if(hours === 0){
    hours = 12
  }
  if(hours > 12){
    hours -= 12;
    periods = "PM"
  }

   
  hours = hours <10 ? "0" + hours : hours;
  minutes = minutes <10 ? "0" + minutes : minutes;
  seconds = seconds <10 ? "0" + seconds : seconds;
  month = month <10 ? "0" + month : month;
  dateNo = dateNo <10 ? "0" + dateNo : dateNo;


  document.getElementById("hour").innerText = hours;
  document.getElementById("min").innerText = minutes;
  document.getElementById("sec").innerText = seconds;
  document.getElementById("period").innerText = periods;
  document.getElementById("month").innerText = month;
  document.getElementById("day").innerText = dayName;
  document.getElementById("date").innerText = dateNo;
  document.getElementById("year").innerText = year;

}
setInterval(digitalClock, 1000)
