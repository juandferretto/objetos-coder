/* Objeto literal */

const persona1 = {
    nombre: "Juan",
    apellido: "Ferretto",
    edad: 20
}

/* Funcion constructora */

/* function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
} */

/* const persona2 = new Persona("Juan", "Ferretto", 20); */

/* persona2.nombre = "Pedro";
persona2["apellido"] = "Gonzales"; */

/* Class */

/* class Persona{

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    mostrarPersona(){
        console.log(this.nombre + " " + this.apellido + " " + this.edad);
    }

}

const persona3 = new Persona("Juan", "Ferretto", 20);

persona3.mostrarPersona(); */


/* class Persona{

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    mostrarPersona(){
        console.log(`Hola ${this.nombre} ${this.apellido}, tu edad es ${this.edad}`)
    }

    verificarEdad(){

        if(this.edad >= 18){
            return true;
        }else{
            return false;
        }

    }

}


let cuantasPersonas = Number(prompt("Cuántas personas quieres ingresar?"));

for(let i = 1; i <= cuantasPersonas; i++){

    const nombre = prompt("Ingrese el nombre de la persona " + i);
    const apellido = prompt("Ingrese el apellido de la persona " + i);
    const edad = Number(prompt("Ingrese la edad de la persona " + i));

    const persona = new Persona(nombre, apellido, edad);

    persona.mostrarPersona();
    if(persona.verificarEdad()){
        alert("Sos mayor de edad");
    }else{
        alert("Sos menor de edad");
    }
    
} */

class Cliente{
    constructor(nombre, presupuesto, tarjetaDescuento, numeroTel){
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.tarjetaDescuento = tarjetaDescuento;
        this.numeroTel = numeroTel;
    }

    transferirDinero(valor){

        if(valor <= this.presupuesto){
            alert(`El presupuesto es mayor al valor, por lo tanto te alcanza. Sobra: $ ${this.presupuesto - valor}`);
        }else{
            alert(`El presupuesto es menor al valor, por lo tanto NO te alcanza. Faltan: $ ${valor - this.presupuesto}`);
        }
    }
}


const cliente1 = new Cliente("Juan", 150000, true, 2325436210);

let montoGastado = Number(prompt("Cual es el monto gastado?"));

cliente1.transferirDinero(montoGastado);