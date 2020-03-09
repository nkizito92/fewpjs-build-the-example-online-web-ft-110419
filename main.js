// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
// const mod = document.querySelector("#modal").className="hidden";
// let like = document.querySelectorAll(".like");

//   like.forEach(h => {
//     h.addEventListener("click", liketoggle );
//   });

// function liketoggle(e){
//   mimicServerCall("bogusUrl")
//   let likes = e.target.querySelector(".like-glyph");
//     if (likes.innerText === EMPTY_HEART){
//       likes.innerText = FULL_HEART;
//       likes.style.color = "red";
//     }
//     else {
//       likes.innerText = EMPTY_HEART;
//       likes.style.color = "#AAB8C2";
//     }
//     mimicServerCall()
// }

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // alert("Something went wrong!");
      document.getElementById("modal").className = "";
      let err = document.getElementById("modal");
      err.innerText = error.message;
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
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
