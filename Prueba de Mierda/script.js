class Persona {
    constructor(nombre, nota1, nota2, nota3) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    getNombre() {
        return this.nombre;
    }
    getNota1() {
        return this.nota1;
    }
    getNota2() {
        return this.nota2;
    }
    getNota3() {
        return this.nota3;
    }
    getPromedio(){
        var suma=this.nota1+this.nota2+this.nota3
        var promedio=suma/3
        return promedio
    }
}
lista = [];
i = 0

function crearPersona() {
    document.getElementById('ocultable').style.display = "block";
}

function mostrarPersona() {
    if (lista.length > 0) {
        document.getElementById("nombreInfo").innerHTML = lista[i].getNombre();
        document.getElementById("nota1Info").innerHTML = lista[i].getNota1();
        document.getElementById("nota2Info").innerHTML = lista[i].getNota2();
        document.getElementById("nota3Info").innerHTML = lista[i].getNota3();
        document.getElementById("promedio").innerHTML = lista[i].getPromedio();
    }else{
        alert("No hay personas");
    }
}

function guardarDatos() {
    document.getElementById('ocultable').style.display = "none";
    nota1=parseInt(document.getElementById("nota1").value)
    nota2=parseInt(document.getElementById("nota2").value)
    nota3=parseInt(document.getElementById("nota3").value)
    if (nota1<1 || nota1>10){
        alert ("La Primera Nota no es válida. Ingrese una nota válida")
    }
    else if (nota2<1 || nota2>10){
        alert ("La Segunda Nota no es válida. Ingrese una nota válida")
    }
    else if (nota3<1 || nota3>10){
        alert ("La Tercera Nota no es válida. Ingrese una nota válida")
    }
    else {
        nuevaPersona = new Persona(document.getElementById("nombre").value, nota1, nota2, nota3)
        lista.push(nuevaPersona);
        mostrarPersona();
    }
}


function siguientePersona() {
    if (lista.length > 0) {
        if (i < lista.length - 1) {
            i++;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
    
}

function anteriorPersona() {
    if (lista.length > 0) {
        if (i > 0) {
            i--;
            mostrarPersona();
        }
    }else{
        alert("No hay personas");
    }
}