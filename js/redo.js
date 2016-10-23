var name = 'Joe'
function runsLater() {
    alert(name)
}
//runsLater()
// Run code 5 seconds in the future
// var firstTimeout = setTimeout(runsLater, 5000)
// console.log(firstTimeout)
//
// var secondTimeout = setTimeout(function() {
//     alert('This comes later.')
// }, 5000)
// console.log(secondTimeout)

// Stop timeouts from happening
// clearTimeout(firstTimeout)
// clearTimeout(secondTimeout)

// Timer button example
// var counter = 0
// function doThis() {
//     counter++
//     console.log(counter)
// }
//
// var timer
// function start() {
//     timer = setInterval(doThis, 1000)
// }
counter = 0
var display = document.getElementById('display')
function startClock() {     //<----INCREASES THE COUNTER WITHIN MY OTHER FUNCTIONS
   display.innerHTML = counter //<---PUSHES OUT THE COUNTER WITHIN EACH FUNCTION TO MY HTML PAGE
    counter++
    //console.log(counter)

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
var pause = document.getElementById('pause').addEventListener('click', pauseFunction)
document.getElementById('pause').addEventListener('dblclick', resetFunction) //<---DOUBLE CLICK TO RESET COUNTER
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
}
document.getElementById('start').addEventListener('click', function(){
   //clearInterval(pauseFunction)
   if (this.innerHTML === 'Pause') {
      this.innerHTML = 'Continue'
   }
   else {
      this.innerHTML = 'Pause'

   }
})
