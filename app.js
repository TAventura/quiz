let correctas = [4, 5, 6, 1, 7, 5, 5, 2, 1, 4]; //definimos un array que contiene LAS POSICIONES de las respuestas correctas en el form. (son fijas)

function preguntar() {
    document.getElementById("primercaca").style.display="none";
    document.getElementById("segundcaca").style.display="block";
}

function cancelar() {
    document.getElementById("primercaca").style.display="block";
    document.getElementById("segundcaca").style.display="none";
}

function enviar() {

    let cantidadRespuestas=correctas.length;
    let seleccionadas = new Array(cantidadRespuestas); //creamos un array vacío con la longitud de correctar en donde vamos a almacenar las respuestas seleccionadas mas adelante.

    for (let i=0; i<cantidadRespuestas; i++) { //recorremos todos los forms.

        let seccionActual= document.getElementsByClassName("check"+(i+1)); //check1, check2.... etc

        for (let j=0; j<seccionActual.length; j++) { //recorremos todas las opciones del form.
            if (seccionActual[j].checked == true) {
                seleccionadas[i] = j+ +1; //añadimos la posicion de la respuesta en el form en la posicion que corresponde segun la respuesta correcta.
                //es decir, si seleccionamos la respuesta nro 2 del tercer form. se almacena un 2 en la tercera posicion.

                //console.log(i + "" + (j+ +1));


            }
        }

    }
    //console.log(seleccionadas);

    for (let i=0; i<cantidadRespuestas; i++) { //recorremos todos los forms.

        let seccionActual= document.getElementsByClassName("check"+i); //check1, check2.... etc

        for (let j=0; j<seccionActual.length; j++) { //recorremos todas las opciones del form.
            seccionActual[j].disabled = true; //desactivamos todas las opciones para que no las cambien.
        }

    }

    calcularResultados(seleccionadas, cantidadRespuestas);
}

function calcularResultados(respuestas, cantidadRespuestas) {
    let cantCorrectas = 0;

    for (let i=0; i<cantidadRespuestas; i++) { //recorremos ambos vectores, el de correctas y las seleccionadas
        // y los comparamos, si la respuesta seleccionada es igual a la correcta, entonces le sumamos uno a la cant.

        if (respuestas[i] === correctas[i]) {
            cantCorrectas = cantCorrectas + 1;
            document.getElementById(i + "" + respuestas[i]).disabled=false; //acá dejo constancia de si eligió
            //bien o no eligio bien la respuesta (si eligio bien, va a estar enabled).
            document.getElementById( "l" + i + "" + respuestas[i]).style.color="green";
            document.getElementById( "l" + i + "" + respuestas[i]).style.backgroundColor="lightgreen"; //TENDRE QUE PONER
            //IDs A TODOS LOS LABELS???????
        } else {
            document.getElementById(i + "" + respuestas[i]).disabled=false; //queda enabled la respuesta INCORRECTA elegida.

            document.getElementById( "l" + i + "" + correctas[i]).style.color="green"; //a la correcta la ponemos en verde.
            document.getElementById( "l" + i + "" + correctas[i]).style.backgroundColor="lightgreen";

            document.getElementById("l" + i + "" + respuestas[i]).style.color="red"; //a la INCORRECTA elegida la ponemos en rojo.
            document.getElementById("l" + i + "" + respuestas[i]).style.backgroundColor="#F57C62";

        }

    }

    mostrarResultados(cantCorrectas);
    //console.log(cantCorrectas);
}

function mostrarResultados(cantCorrectas) {
    document.getElementById("primercaca").style.display="none";
    document.getElementById("segundcaca").style.display="none";
    let divResultados = document.getElementById("resultados");
    divResultados.style.display="block";
    switch(cantCorrectas) {
        case 0:
        case 1:
        case 2:
        case 3:
            divResultados.innerHTML = `<h4 class="h4">No conoces a tu novio, mujer. Acertaste ` + cantCorrectas +`/10 preguntas .</h4></h4>
            `
            divResultados.style.backgroundColor="#F57C62";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            divResultados.innerHTML = `<h4 class="h4">Bien, pero podrías mejorar. Acertaste ` + cantCorrectas +`/10 preguntas .</h4></h4>
            `
            divResultados.style.backgroundColor="#fff";
            break;
        case 8:
        case 9: 
        case 10:
            divResultados.innerHTML = `<h4 class="h4">Muy bien!!! Acertaste ` + cantCorrectas +`/10 preguntas .</h4>
            `
            divResultados.style.backgroundColor="lightgreen";
            break;
    }
}