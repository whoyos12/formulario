function prevalency(){
	var get = document.getElementById("getPre").value;
	document.getElementById("putPre").value = get + "%";
}

function limpiarFormulario(){
	document.getElementById("formulario").reset();
	document.getElementById("genero").focus();
}

var bacterias = new Array()
bacterias[0] = new Array()

function mostrarBacterias() {

	var genero, especie, tamanio, flagelos, condiciones, expresion, flora, prevalencia;
	var seleccion = "no";
	expresion = /([ ]{2,})|[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/; ///[A-Za-z0-9_]/;    ///\w/;	
	genero = document.getElementById("genero").value;
	especie = document.getElementById("especie").value;
	tamanio = document.getElementById("tamanio").value;
	flagelos = document.getElementById("flagelos").value;
	fecha = document.getElementById("fecha").value;
	flora = document.getElementsByName("flora");
	prevalencia = document.getElementById("putPre").value;
	condiciones = document.getElementById('condiciones');

	if(genero == ""){
		alert("El campo de genero está vacio");
		document.getElementById("genero").focus();
		return false;
	}

	else if(genero.length > 20){
		alert("El genero ingresado es muy largo")
		document.getElementById("genero").focus();
		return false;
	}

	else if(especie === ""){
		alert("El campo de especie está vacio");
		document.getElementById("especie").focus();
		return false;
	}

	else if(especie.length > 20){
		alert("La especie ingresada es muy largo")
		document.getElementById("especie").focus();
		return false;
	}

	else if(tamanio === ""){
		alert("Ingrese el tamaño")
		document.getElementById("tamanio").focus();
		return false;
	}

	else if(expresion.test(tamanio)){
		alert("Ingrese un tamaño correcto, solo se aceptan letras o numeros")
		document.getElementById("tamanio").focus();
		return false;
	}	

	else if(flagelos === ""){
		alert("El campo de flagelos está vacio");
		document.getElementById("flagelos").focus();
		return false;
	}
	else if(isNaN(flagelos)){
		alert("El numero de flagelos ingresado no es un numero")
		document.getElementById("flagelos").focus();
		return false;
	}else if(fecha === ""){
		alert("Seleccione una fecha");
		document.getElementById("fecha").focus();
		return false;
	}

	for (var i = 0; i < flora.length; i++) { 
		if (flora[i].checked) { 
			seleccion = "si"; 
			break; 
		} 
	}if(seleccion === "no" ){ 
		alert( "Seleccione la flora");
		return false;
	}

	if(prevalencia === ""){
		alert("Deslize la barra para escoger la prevalencia");
		document.getElementById("putPre").focus();
		return false;
	}

	if(!condiciones.checked){
		alert("Debe aceptar los terminos y condiciones");
		document.getElementById("condiciones").focus();
		return false;
	}

	var myTableDiv = document.getElementById("resultados")
	var table = document.createElement('TABLE')
	var tableBody = document.createElement('TBODY')

	table.border = '1'
	table.appendChild(tableBody);

	var heading = new Array();
	heading[0] = "Genero"
	heading[1] = "Especie"
	heading[2] = "Tamaño"
	heading[3] = "Numero de flagelos"
	heading[4] = "Fecha"
	heading[5] = "Forma"
	heading[6] = "Flora"
	heading[7] = "Prevalencia"

	


	var genero = document.getElementById("genero").value;
	var especie = document.getElementById("especie").value;
	var tamanio = document.getElementById("tamanio").value;
	var flagelos = document.getElementById("flagelos").value;
	var fecha = document.getElementById("fecha").value;
	var forma = document.getElementById("forma");
	var selected = forma.options[forma.selectedIndex].text;

	var flora = "";
	var floraEsc = document.getElementsByName("flora");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i = 0; i < floraEsc.length;i++){
        	if(floraEsc[i].checked)
        		flora = floraEsc[i].value;
        }
        var prevalencia = document.getElementById("putPre").value;


        bacterias[0].push(genero, especie, tamanio, flagelos, fecha, selected, flora, prevalencia);


        for (i = 0; i < bacterias.length; i++) {
        	var tr = document.createElement('TR');
        	for (j = 0; j < bacterias[i].length; j++) {
        		var td = document.createElement('TD')
        		td.width = '75';
        		td.appendChild(document.createTextNode(bacterias[i][j]));
        		tr.appendChild(td)
        	}
        	tableBody.appendChild(tr);
        }
        myTableDiv.appendChild(table);

        limpiarFormulario();

    }


    function buscar(){
    	var entrada1 = document.getElementById("campo").value;
    	alert(entrada1);
    	if(entrada1== null || entrada1.length == 0 || /^\s+$/.test(entrada1)) {
    		alert('ERROR: El campo entrada no debe ir vacío o contiene caracteres extraños');
    		return false;
    	}else{
    		var entrada = document.getElementById('campo').value;
    	}


    	var opciones = document.getElementById("opciones").selectedIndex;
    	if(opciones == null || opciones == 0){
    		alert('ERROR: Seleccione una opción para buscar');
    		return false;
    	}
    	else{
    		var opcionSeleccionada = document.getElementById("opciones").value;
    	}

    	for(var i = 0; i < bacterias[0].length; i++){
    		if (bacterias[0][i].genero == entrada || bacterias[0][i].especie == entrada || bacterias[0][i].tamanio == entrada || bacterias[0][i].forma == entrada &&  bacterias[0][i].genero == opcionSeleccionada || bacterias[0][i].especie == opcionSeleccionada || bacterias[0][i].tamanio == opcionSeleccionada || bacterias[0][i].forma == opcionSeleccionada   ){
    			vectorBuscar.push(bacterias[0][i]);
    			document.getElementById("tabla2").innerHTML += vectorBuscar[i].push(genero, especie, tamanio, flagelos, fecha, selected, flora, prevalencia);        
    		}
    		else{
    			if(vectorBuscar.length - 1 == i){
    				alert("ERROR: Datos no encontrados")
    			}
    		}
    	}
    }









