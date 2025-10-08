
function foramCerat (){
let x = document.getElementById("numb").value;
console.log(x);

if(x===''){
alert('Enter Yuor name')
}else{
document.getElementById("dome").innerHTML =`" Hello ${x}!"` ;

}
}