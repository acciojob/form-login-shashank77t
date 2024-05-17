
  const inputs=document.querySelectorAll('input');

function getFormvalue(e) {
   e.preventDefault();
	let firstname=inputs[0].value;
	let secondname=inputs[1].value;
	let s=firstname+" "+secondname;
	alert(s);
	

}
inputs[2].addEventListener("click",getFormvalue);





