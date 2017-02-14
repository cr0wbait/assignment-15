// GO!

//use getComputedStyle() to read the styles
// use document.querySelector() to set values
// kudos to Victor for help with syntax & logic

// TASK 1 -- Show/Hide Nav
document.querySelector('#hide-nav button').addEventListener('click', function(){

  var navMen = document.querySelector('.nav-menu')
  var navStyle = window.getComputedStyle(navMen)

  if (navStyle.visibility === 'visible' ){
    navMen.style.visibility = 'hidden'
  } else {
    navMen.style.visibility = 'visible'
  }
})



// TASK 2 -- Select an Icon
document.querySelector('#select-items').addEventListener('click', function(evt){
  var targ = evt.target
  if (targ.className !== 'option'){
    targ = targ.parentElement
  }
  if (targ.classList.contains('selected')){
      targ.classList.remove('selected')
  } else {
    targ.classList.add('selected')
  }
})

/// querySelectorAll is ALWAYS!! an ARRAY
// TASK 3 -- Move Item From List to List
document.querySelector('#add-vals .add-points').addEventListener('click', function(evt){

  var bigNum = document.querySelector('.total-points')
  console.log(bigNum)
  var happening = evt.target
  console.log(happening)
  if (happening.className !== 'point' ){
    console.log('do not touch me there!')
  } else {
      var newTotal = Number(bigNum.textContent) + Number(happening.textContent)
      console.log(newTotal)
      bigNum.textContent = newTotal
  }

})

// TASK 4 -- Add Guest to List
 document.querySelector('#list-2-list').addEventListener('click', function(evt){
   var goodList = document.querySelector('.good-standing-list')
   var badList = document.querySelector('.probation-list')
   var targ = evt.target
   console.log(evt)
   if (targ.parentElement.className === 'good-standing-list'){
     badList.append(targ)
   } else if (targ.parentElement.className === 'probation-list'){
     goodList.append(targ)
   }
})


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
