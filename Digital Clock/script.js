function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let ampm = hours >= 12 ? "PM" : "AM"; 
  hours = hours % 12 || 12; 
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
 

  // Add leading zero
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
 

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  document.getElementById("time").textContent = timeString;
}

// Run every second
setInterval(updateClock, 1000);

// Run immediately when page loads
updateClock();