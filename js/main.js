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
document.querySelector('#select-items option').addEventListener('click', function(){
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
  var bigNum = document.querySelector('total-points')
  var factorNum = document.querySelector('point')
  var newTotal = Number(bigNum.textContent) * Number(factorNum.textContent)
  bigNum.textContent = newTotal

})

// TASK 4 -- Add Guest to List
document.querySelectorAll('#list-2-list li').addEventListener('click', function(){
  
})


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
