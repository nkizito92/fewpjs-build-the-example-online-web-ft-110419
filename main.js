// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const mod = document.querySelector("#modal").className="hidden";
let like = document.querySelectorAll(".like");

  like.forEach(h => {
    h.addEventListener("click", liketoggle );
  });

function liketoggle(e){
  let likes = e.target.querySelector(".like-glyph");
    if (likes.innerText === EMPTY_HEART){
      likes.innerText = FULL_HEART;
      likes.style.color = "red";
    }
    else {
      likes.innerText = EMPTY_HEART;
      likes.style.color = "#AAB8C2";
    }
    mimicServerCall()
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
