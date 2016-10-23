//My start function

var counter = 0  //<---stating my counter variable, setting to 0 for resets
var start = document.getElementById('start')
var reset = document.getElementById('reset')
var display = document.getElementById('display')  //<--^^grabbing my html elements
var timer

function increaseCounter() {  //<---starts the timer
    counter++
    console.log(counter)
    display.innerHTML = counter
}

function startInterval() {    //<--starts the timer found in increaseCounter
   clearInterval(startTimer)
   //clearTimeout(startTimer)
   timer = setInterval(increaseCounter, 1000)
   //console.log(startTimer)
}

function pauseInterval() {
   clearInterval(startTimer)
   reset = setTimeout(resetTimer, 1000)
   //console.log(startTimer)
}

document.getElementById('start').addEventListener('click', function(){
   //clearInterval(pauseCounter)
   if (this.innerHTML === 'Pause') {
      this.innerHTML = 'Continue'
   }
   else {
      this.innerHTML = 'Pause'
      //counter++
      console.log(counter)
      setInterval(increaseCounter, 1000)
   }
})

// function resetInterval() {
//    clearInterval(startTimer)
//    counter = 0
//    display.innerHTML = counter
// }

document.getElementById('reset').addEventListener('click', function(){
      //clearInterval(pauseCounter)
      if (this.innerHTML === 'Reset') {
         start.innerHTML = 'Start'
         setInterval(resetInterval)
      }
      else {
         this.innerHTML = 'Reset'
         clearInterval(startInterval)
      }

})
