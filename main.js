// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")
// Your JavaScript code goes here!
//------------------------------------------------------------------------------
// Start Hiding Error Modal
function hideModal() {
 errorModal.className = "hidden"
}
hideModal()
// End Hiding Error Modal
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Start Like Behavior
document.addEventListener("click", (e) => {
  if (e.target.className == "like-glyph" || "activated-heart")
    if (e.target.innerText == EMPTY_HEART)
    mimicServerCall()
    .then(function(response) {
      return response;
    }).then(function() {
      e.target.innerText = FULL_HEART
      e.target.className = "activated-heart"
    }).catch(function(error) {
      errorModal.className = ""
      errorModal.innerText = error
      setTimeout(function(){ hideModal() }, 5000)
    })
    else if (e.target.className == "activated-heart")
    mimicServerCall()
    .then(function(response) {
      return response;
    }).then(function() {
      e.target.innerText = EMPTY_HEART
      e.target.className = "like-glyph"
    }).catch(function(error) {
      errorModal.className = ""
      errorModal.innerText = error
      setTimeout(function(){ hideModal() }, 5000)
    })
    //   e.target.innerText = FULL_HEART
    // else
    //   e.target.innerText = EMPTY_HEART  
})

// End Like Behavior
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
