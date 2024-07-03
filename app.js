
function calcularSalario(horas,valor){
    let precioHora = valor ;
    let calculo = precioHora*horas;
    return calculo;
}
//al sueldo se le descuenta un 10% del total por gastos jubilatorios
function calcularDescuentos(sueldo){
let calculo = sueldo * 0.9;
return calculo;
}

let nombre = prompt("Escriba un nombre : \nEscriba (administrador) \nEscriba salir ");


while (nombre != "admin") {
    if(nombre === "administrador"){
        alert("Bienvenido administrador, desea ver las novedades?"); }
   else if(nombre === "salir"){
    alert("Adios ");} 
   else{
    horas = parseInt(prompt("Ingrese la cantidad de horas:"));}
if (isNaN(horas)){
    alert("Ingrese un numero valido")
}else { 
    let valor = parseInt(prompt("Ingrese el precio de la hora:"));
    let resultadoSalario = calcularSalario(horas,valor);
    let sueldoNeto = calcularDescuentos(resultadoSalario);
    alert(`Bienvenido ${nombre} el total a cobrar es : ${sueldoNeto} \nCantidad de horas trabajadas : ${horas}`);
}

nombre = prompt("Escriba un nombre : ");
}

