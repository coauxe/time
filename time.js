$(document).ready( function() {
  function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
  // 12-hour format
    var meridiem = "AM";  // Default is AM
        
  // If hours is greater than 12
    if (hours > 12) {
      hours = hours - 12; // Convert to 12-hour format
      meridiem = "PM"; 
    }
  // 0 AM and 0 PM should read as 12
    if (hours === 0) {
      hours = 12;    
    }


    if(hours < 10) {
  // Add the "0" digit to the front
      hours = "0" + hours;
        }

    if(minutes < 10) {
      minutes = "0" + minutes;
    }        
    if(seconds < 10) {
      seconds = "0" + seconds;
    }

  var clockDiv = document.getElementById('clock');


  clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }
    

  displayTime();
    
  // This runs the displayTime function every second to "tick".
  setInterval(displayTime, 1000);

});
