function foramCerat() {
  let x = document.getElementById("numb").value;
  console.log(x);

  if (x === "") {
    alert("Enter Yuor name");
  } else {
    document.getElementById("dome").innerHTML = `" Hello ${x}!"`;
  }
}

const images = [
  "https://images.unsplash.com/photo-1722286075157-c2a0b1105572?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508169351866-777fc0047ac5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1664882368134-1ec7fdc64a82?q=80&w=1133&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "	https://cdn.pixabay.com/photo/2016/10/26/10/05/book-1771073_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/01/30/17/49/book-4806076_1280.jpg",
];
let index =  0;
const gallery = document.getElementById('gallery')
function nextImage (){

  index = (index + 1) % images.length;

  gallery.src = images[index];

}

function prevImage() {
  index = (index - 1+images.length) % images.length;

  gallery.src = images[index];
}


const myForm = document.getElementById('myForm');
const email = document.getElementById('email');
const error = document.getElementById('error')

myForm.addEventListener('submit', function(event){

event.preventDefault();
if(email.value.trim()===""){


    error.style.display = 'block';
    // email.focus();
}else{


    error.style.display = 'nane'
    alert(`Form submitted successfully! Email: ${email.value}`)
    myForm.reset();
}


})