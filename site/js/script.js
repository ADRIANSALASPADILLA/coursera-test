

function gotoinsertar(){

	location.href = "insertar.html";
	

}


function gotomodificar(){

	location.href = "modificar.html";

}


function gotoeliminar(){

	location.href = "eliminar.html";

}

function gotoindex(){

	location.href = "index.html";

}





function idatos(){

	var name = document.getElementById("iname").value;
	var code = document.getElementById("icode").value;	
	var description = document.getElementById("idescription").value;
	var amount = document.getElementById("iamount").value;	
	
	if(name == ""){name = "name"};
	if(code == ""){code = "code"};
	if(description == ""){description = "description"};
	if(amount == ""){amount = "amount"};




	location.href = "index.html";
	console.log(name+code+description+amount);
}



function mdatos(){

	var name = document.getElementById("iname").value;
	var code = document.getElementById("icode").value;	
	var description = document.getElementById("idescription").value;
	var amount = document.getElementById("iamount").value;	
	
	if(name == ""){name = "name"};
	if(code == ""){code = "code"};
	if(description == ""){description = "description"};
	if(amount == ""){amount = "amount"};




	location.href = "index.html";
	console.log(name+code+description+amount);
}



function edatos(){

	var code = document.getElementById("icode").value;	
	

	if(code == ""){code = "code"};


	location.href = "index.html";
	console.log(code);
}


function edatos(){

	var code = document.getElementById("icode").value;	
	

	if(code == ""){code = "code"};


	location.href = "index.html";
	console.log(code);
}


function change(){
	var row = 1;
	var d = row.parentNode.parentNode.rowIndex;
    document.getElementById('tablon').deleteRow(d);
   }