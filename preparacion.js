let fecha = [19, "DE SEPTIEMBRE DEL ", 2020];

function alPresionarSi() {
  alert("nos casamos el dia: :" + fecha + " " + "EN ADOPTME");
}

function alPresionarNo(boton2) {
  alert("A SELECCIONADO LA OPCION SI");
  alert("LEA CON ATENCION EL SIGUIENTE MENSAJE");
  return alPresionarSi();
}
