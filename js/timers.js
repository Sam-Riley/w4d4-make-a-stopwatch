// var name = 'Chris'
//
// function runsLater() {
//     alert(name)
// }

var name = 'Sam'
function runsLater() {
    console.log(name)
}

var firstTimeout = setTimeout(runsLater, 1000)
console.log(firstTimeout)

var secondTimeout = setTimeout(function() {
    alert('This comes later.')
}, 2000)
console.log(secondTimeout)

//clearTimeout(firstTimeout)
//clearTimeout(secondTimeout)



// var actionTimer
// var counter = 0

// document.getElementById('action').addEventListener('click', function()   {
//     counter++
//     this.innerHTML = counter
//
//     clearTimeout(actionTimer)
//     actionTimer = setTimeout(() => {
//         counter = 0
//         this.innerHTML = '0'
//         console.log('Happened once.')
//     }, 1000)
// })

// var counter = 0
//
// function doThis() {
//     counter++
//     console.log(counter)
// }
//
//  var timer
//
//  function start() {
//      timer = setInterval(doThis, 1000)
//  }

//  document.getElementById('action').addEventListener('click', function()   {
//      clearInterval(timer)
//
//      if (this.innerHTML === 'Paused') {
//      start()
//      this.innerHTML = 'Pause'
//     }
//     else {
//         this.innerHTML = 'Paused'
//     }
// })

//start()



// var animationId
// function animationLoop() {
//     var button = document.getElementById('action')
//     var top = Number(getComputedStyle(button).top.replace('px', ''))
//
//     if (top >= 600) {
//         top = 0
//     }
//
//     button.style.position = 'absolute'
//     button.style.top = top + 1 + 'px'
//
//     animationId = requestAnimationFrame(animationLoop)
// }

//animationLoop()


///


// var circleId
// function circleLoop() {
//     var circle = document.getElementById('circle')
//     var width = Number(getComputedStyle(circle).width.replace('px', ''))
//     var height = Number(getComputedStyle(circle).height.replace('px', ''))
//
//
//     if (width >= 600) {
//         width = 0
//     }
//
//     if (height >= 600) {
//         height = 0
//     }
//
//     circle.style.position = 'absolute'
//     circle.style.width = width + 1 + 'px'
//     circle.style.height = height + 1 + 'px'
//
//     circleId = requestAnimationFrame(circleLoop)
//
// }
//circleLoop()
