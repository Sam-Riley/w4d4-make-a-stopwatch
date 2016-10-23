//My start function

var counter = 0  //<---stating my counter variable, setting to 0 for resets
var start = document.getElementById('start')
var reset = document.getElementById('reset')
var display = document.getElementById('display')  //<--^^grabbing my html elements
var timer
var  newTime

function increaseCounter() {
    counter++
    console.log(counter)
    display.innerHTML = counter
}

function pauseCounter() {
   //clearInterval(increaseCounter, 0)
}

document.getElementById('start').addEventListener('click', function(){
   //clearInterval(timer)
   if (this.innerHTML === 'Pause') {
      //start()
      this.innerHTML = 'Continue'
      //setInterval(pauseCounter)
      //setInterval(increaseCounter, 1000)
   }
   else {
      this.innerHTML = 'Pause'
      counter++
      console.log(counter)
      setInterval(increaseCounter, 1000)
   }
})
document.getElementById('reset').addEventListener('click', function(){

      clearInterval(counter)

      if (this.innerHTML === 'Reset') {
         start.innerHTML = 'Start'
         clearInterval(increaseCounter)
      }
      else {
         this.innerHTML = 'Reset'
      }

})
