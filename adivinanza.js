
    let contador = 0;
    function Adivina() {

        var resp = document.getElementById("texto1").value;
       
        if (resp == "blanco") {
            document.getElementById("BoxRespuesta").innerHTML="GANASTE, FELICITACIONES";
            }
        else{
            contador++;
            document.getElementById("BoxRespuesta").innerHTML="Respuesta Equivocada";
        }
        if(resp != "blanco" && contador == 2){
            document.getElementById("BoxRespuesta").innerHTML="Es un color claro, te quedan 2 intentos.";
        }
        if (resp != "blanco" && contador == 3) {
            document.getElementById("BoxRespuesta").innerHTML="Lo contrario a negro, te queda 1 intento.";
        }
        if (resp != "blanco" && contador == 4) {
            document.getElementById("BoxRespuesta").innerHTML="Perdiste, vuelve a intentarlo.";  
            contador = 0;
        }
        
    }