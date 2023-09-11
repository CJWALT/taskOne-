
const dayWeek = document.getElementById('day-week')
const curTime = document.getElementById('cur-time')

function updateTimeDate(){ 
  
    
    const today = new Date() 

    const date = today.toLocaleDateString()
    // const time = today.toLocaleTimeString()

    const hours = today.getHours();
    const minutes = today.getMinutes();

    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`

    dayWeek.textContent = date
    curTime.textContent=time
}

updateTimeDate() 

setInterval(updateTimeDate, 1000)