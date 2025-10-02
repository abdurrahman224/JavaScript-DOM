function foramCerat (){
const Fform = document.forms['myForm']


const value = Fform['fname'].value;


if(value === ""){


    alert("form is not valide")
}


console.log(value);

return false;
}