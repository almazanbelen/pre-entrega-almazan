//validacion de nombre
//ciclo por conteo
for (let i = 1; i <= 3; i++){
    const nombre = prompt ("Ingresa tu nombre").toLowerCase()
    if (nombre != ""){  
        alert (`Hola ${nombre}`)  
        break;        
    }
}
//validacion de edad
let edad = parseInt (prompt ("Ingresa tu edad"))
console.log (`Tienes ${edad} años`)
//condicional
if (edad >= 8){
    alert ("Bienvendo a calculadora virtual") 
    //funcion
    function calculadora(a,b,operacion){
        switch (operacion) {
            case 'suma':
                return a + b
            case "resta":
                return a - b
            case "division":
                a / b
            case "multiplicacion":
                return a * b
            default:
                return "Syntax error"
        }
    }
    //variables
    let trueOfalse = true    
    let valor1 = Number (prompt ("Ingrese el primer valor"))
    let valor2 = Number (prompt ("Ingrese el segundo valor"))
    let operacion = prompt ("Ingrese la operacion que desea realizar\nsuma\nresta\ndivision\nmultiplicacion")
    //ciclo condicional
    while (trueOfalse) {
        if (valor1 === 0 || valor2 === 0 || operacion === ""){
            valor1 = Number (prompt ("Ingrese el primer valor"))
            valor2 = Number (prompt ("Ingrese el segundo valor"))
            operacion = prompt ("Ingrese la operacion que desea realizar\nsuma\nresta\ndivision\nmultiplicacion")
        } else {
            console.log (valor1 , valor2 ,operacion)
            let resultado = calculadora(valor1 , valor2 ,operacion);
            alert(resultado);
            trueOfalse = false;
        }
    }
    operacion = prompt ("Ingrese la operacion que desea realizar\nsuma\nresta\ndivision\nmultiplicacion\ningrese 0 para salir")

} else if (edad < 8){
    alert ("No puedes ingresar porque eres menor de edad")
} else{
    prompt ("Ingresa nuevamente tu edad")
}




