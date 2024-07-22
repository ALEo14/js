
const personas = [
    { nombre: "Alejo", edad: 25, departamento: 'Desarrollo', antiguedad: 15 },
    { nombre: "Maria", edad: 30, departamento: 'Soporte Técnico', antiguedad: 15},
    { nombre: "Ivan", edad: 35, departamento: 'Desarrollo', antiguedad: 14},
    { nombre: "Poti", edad: 40, departamento: 'Diseño', antiguedad: 13},
    { nombre: "Jere", edad: 45, departamento: 'Soporte Técnico', antiguedad: 12},
] 


function calcularSalario(horas,valor){
    let calculo =valor * horas;
    return calculo;
     
}


function departamentoSalario(antiguedad, resultadoSalario) {
    let incremento;
    if (antiguedad >= 15) {
        incremento = resultadoSalario * 0.80;
    } else if (antiguedad >= 10) {
        incremento = resultadoSalario * 0.77;
    } else {
        incremento = resultadoSalario * 0.60;
    }
    return resultadoSalario + incremento;
}

    //al sueldo se le descuenta un 10% del total por gastos jubilatorios
    function calcularDescuentos(resultadoIncremento){
    let calculo = resultadoIncremento * 0.90
    return calculo ; }


let nombre = prompt("Escriba un nombre : \nEscriba (administrador) \nEscriba salir ");



while (nombre != "salir") {
    if(nombre === "administrador"){
    alert("Bienvenido administrador, desea ver las novedades?"); }
    else{
        let horas = parseInt(prompt("Ingrese la cantidad de horas:"));
        let valor = parseInt(prompt("Ingrese el precio de la hora:"));
        if (isNaN(horas) || isNaN(valor)) {
        alert("Ingrese un número válido para horas y valor.");
        }
        else { 
        let resultadoSalario = calcularSalario(horas,valor); 
        let personaEncontrada = personas.find(personas => nombre === personas.nombre);
        if (personaEncontrada) {
            let resultadoIncremento = departamentoSalario(personaEncontrada.antiguedad, resultadoSalario);
            let  sueldoNeto = calcularDescuentos(resultadoIncremento);
                    
                    console.log(`Bienvenido ${nombre} el total a cobrar es : ${sueldoNeto} $ \nCantidad de horas trabajadas : ${horas} \nDepartamento : ${personaEncontrada.departamento}`);
                } ;
                
            } 
        } 
nombre = prompt("Escriba un nombre : o escriba (salir) para salir");
}
  





