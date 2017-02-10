// GO!


// TASK 1 -- Show/Hide Nav
document.querySelector('#hide-nav button').addEventListener('click', function(){

  var navMen = document.querySelector('.nav-menu')

  if (navMen.style.visibility = 'visible' ){
    navMen.style.visibility = 'hidden'
  } else {
    navMen.style.visibility = 'visible'
  }
})

// this refuses to toggle, though I'm not sure why.

// TASK 2 -- Select an Icon
document.querySelectorAll('#select-items option').addEventListener('click', function(){
  var option = document.querySelectorAll('.option')
  console.log(option.classList)
  if (option.classList.contains('selected') = false){
    option.classList.add('selected')
  } else if (option.classList.contains('selected') = true){
    option.classList.remove('selected')
  }

})

// right, well, this is also being stubborn.

// TASK 3 -- Move Item From List to List

document.querySelectorAll('#add-vals button').addEventListener('click', function(){
  var bigNum = document.querySelector('total-points').innerHTML



})

// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
