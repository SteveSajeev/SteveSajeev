let title;
let phrases = ["Freelance web dev", "maker", "super cool"]
let currIndex = 0
let currText = ""
let state = 1 // -1 0 1 back stop forward
let counter = 0;
let isWaiting = false;

function animate(){
  let isSpace = false;
  let selectText = phrases[currIndex]
  if(isWaiting){
    if(counter < 0){
      state *= -1;
      isWaiting = false;
    } else {
      counter -= 1;
    }
  } else {
    if(state == -1){
      if(currText.length > 0){
        currText = selectText.slice(0,currText.length-1)
        if(selectText[currText.length-1] == " "){
          isSpace = true;
        }
      } else {
        isWaiting = true;
        counter = 3;
        currIndex += 1;
        if(currIndex >= phrases.length){
          currIndex = 0;
        }
      }
    }else if(state == 1){
      if(currText.length < selectText.length){
        currText = selectText.slice(0,currText.length+1)
        if(selectText[currText.length+1] == " "){
          isSpace = true;
        }
      } else {
        isWaiting = true;
        counter = 20;
      }
    }
  }


  title.innerText = currText;
  setTimeout(animate, isSpace?80:90);
}

window.addEventListener("load", ()=>{
  title = document.getElementById("landingtitle");
  title.innerText = "";
  animate()
});

