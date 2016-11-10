startGuy = document.getElementById('start')
var name = 'Joe'
function runsLater() {
    alert(name)
}

counter = 0

var display = document.getElementById('display')

function startClock() {     //<----INCREASES THE COUNTER WITHIN MY OTHER FUNCTIONS
   display.innerHTML = counter //<---PUSHES OUT THE COUNTER WITHIN EACH FUNCTION TO MY HTML PAGE
    counter++
    console.log(counter)

}

var timer
var doThis

var start = document.getElementById('start').addEventListener('click', startFunction)

function startFunction() {    //<---EVENT CONNECTED TO MY START BUTTON
    clearTimeout(doThis)
    clearInterval(timer)
    timer = setInterval(startClock, 1000)  //<---USES MY STARTCLOCK FUNCTION TO START THE CLOCK
    //console.log(timer)
}
var pause = document.getElementById('start').addEventListener('click', pauseFunction)
document.getElementById('start').addEventListener('dblclick', resetFunction) //<---DOUBLE CLICK TO RESET COUNTER
function pauseFunction() {   //<----EVENT CONNECTED TO MY PAUSE BUTTON
    clearInterval(timer)
    doThis = setTimeout(reset, 5000)
    //console.log(timer)
}
var reset = document.getElementById('reset').addEventListener('click', resetFunction)
function resetFunction() {  //<---EVENT CONNECTED TO MY RESET BUTTON
    clearInterval(timer)     //<---CLEARS ANY CURRENT INTERVAL SAVED IN TIMEOUT SET IN PAUSE FUNCTION
    counter = 0    //<--RESETS COUNTER TO ZERO
    display.innerHTML = counter   //<----LOGS MY NEW COUNTER (0) WHERE THE STARTFUNCTION BEGAN
    //console.log(timer)
   startGuy.innerHTML = 'Start'
}
document.getElementById('start').addEventListener('click', function(){
   //clearInterval(pauseFunction)
   if (this.innerHTML === 'Start' || this.innerHTML === 'Continue') {
      this.innerHTML = 'Pause'
      startFunction()
   }
   else {
      pauseFunction()
      this.innerHTML = 'Continue'

   }
})
