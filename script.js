var likeCounter = 3;
var countElement = document.querySelector(".likeCounter");

  function add1_Btn1(){
      likeCounter++;
      countElement.innerText = likeCounter + " like(s)";
  }