const deadLine = new Date("2025-01-01T00:00:00")
const counter = Array.from(document.querySelectorAll("h1"))
function updateTimer(){
    const curTime = new Date()
    let seconds, minutes, hours, days
    seconds = Math.floor((deadLine - curTime) / 1000)
    if(seconds > 0){
        days = Math.floor(seconds / 86400)
        seconds %= 86400
        hours = Math.floor(seconds / 3600)
        seconds %= 3600
        minutes = Math.floor(seconds / 60)
        seconds %= 60
        
        counter[0].textContent = `${days.toString().padStart(2,0)} Days`
        counter[1].textContent = `${hours.toString().padStart(2,0)}:`
        counter[2].textContent = `${minutes.toString().padStart(2,0)}:`
        counter[3].textContent = `${seconds.toString().padStart(2,0)}`
    } else {
        const container = document.getElementById("countDown")
        container.innerHTML = ""
        let newMsg = document.createElement("h1")
        newMsg.textContent = "Welcome to 2025!🎊🎉"
        container.append(newMsg)
    }
}
setInterval(updateTimer,1000)