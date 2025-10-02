// function foramCerat (){
// const Fform = document.forms['myForm']

// const value = Fform['fname'].value;

// if(value === ""){

//     alert("form is not valide")
// }

// console.log(value);

// return false;
// }

// setTimeout(function () {
//   const cssStyle = document.querySelector("#dome");
//   cssStyle.style.color = "red";
//   cssStyle.style.fontSize = "50px";
// },3000);

//   function button () {
//   const cssStyle = document.querySelector("#dome");

//   cssStyle.style.color = "";
//   cssStyle.style.fontSize = "";
// }

// function myMove (){
// const animate = document.getElementById("animate")
// let post = 0;
// const interValt = setInterval(frame,10);
// function frame(){

//     if(post < 350){

//         post ++;
//         animate.style.top = post + 'px';
//         animate.style.left = post + 'px';
//     }else{

//         clearInterval(interValt)
//     }
// }

// }
//     function Move (){
//     const animate = document.getElementById("animate")
//     let post = 350;
//     const interValt = setInterval(frame,10);
//     function frame(){

//         if(post > 0){

//             post --;
//             animate.style.top = post + 'px';
//             animate.style.left = post + 'px';
//         }else{

//             clearInterval(interValt)
//         }
//     }

//     }

// let isDoen = false;
// function toggMove() {
//   const animate = document.getElementById("animate");
//   const toggleBtn = document.getElementById("toggleBtn");
//   let post = isDoen ? 0 : 350;
//   const target = isDoen ? 350 : 0;
//   const step = isDoen ? 1 : -1;
//   const interValt = setInterval(frame, 4);
//   function frame() {
//     if ((isDoen && post  < target) || (!isDoen && post > target)) {
//       post += step;
//       animate.style.top = post + "px";
//       animate.style.left = post + "px";

//     } else {
//       clearInterval(interValt);
//       isDoen = !isDoen;
//       toggleBtn.innerText = isDoen? " move loer":"move uper";
//     }
//   }
// }

let isDone = true;

function toglMove() {
  const animate = document.getElementById("animate");
  const toggleBtn = document.getElementById("toggleBtn");
  let post = isDone ? 0 : 350;
  const target = isDone ? 350 : 0;
  const step = isDone ? 1 : -1;
  const etInterval = setInterval(frame, 5);
  function frame() {
    if ((isDone && post < target) || (!isDone && post > target)) {
      post += step;
      animate.style.top = post + "px";
      animate.style.left = post + "px";
    }else{
clearInterval(etInterval)

isDone=!isDone;
toggleBtn.innerText = isDone? "Move Down": "Move Up";

        
    }
  }
}
