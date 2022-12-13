class Clientes {
    constructor(nombre, apellido, dni, pedido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.pedido = pedido;
    }
}

const clienteLucas = new Clientes("Lucas", "Castro", 12345678, "pantalla");
const clienteFabian = new Clientes("Fabian", "Parentelli", 25145698, "fuente de alimentacion");
const clienteMilagros = new Clientes("Milagros", "Acuña", 35569745, "disco rigido");
const clienteFederico = new Clientes("Federico", "Rodriguez", 12569325, "placa de video");

const arrayClientes = [];

arrayClientes.push(clienteLucas);
arrayClientes.push(clienteFabian);
arrayClientes.push(clienteMilagros);
arrayClientes.push(clienteFederico);

//console.log(arrayClientes);

// Funcion con el menu de opciones:

function menu() {
    alert("Bienvenido a Trc soporte");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Ventas \n 2) Baja de orden Por garantia \n 3) Modificar pedido de cliente \n 4) Consulta de reparaciones \n 5) salir"));
    return opcion;
} 

// Funcion para Ventas

function ventas() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del Cliente: ");
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let pedido = (prompt("Ingrese su pedido"));
    let cliente = new Clientes(nombre, apellido, dni, pedido);
    arrayClientes.push(cliente);
    alert ("Sr/Sra " + nombre + " su pedido a sido registrado con exito")
    console.log(arrayClientes);
}

// Funcion Baja por Garantia

function bajaPorGarantias() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente"));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    
    if (cliente){
        arrayClientes.splice(indice, 1); 
        alert (cliente.nombre + " a sido eliminado")  
    }
    if (indice === -1){
        alert ("no existe")
    }
    console.log (arrayClientes)
}
    



// funcion para el pedido de un cliente:

function modificarPedidoCliente() {
    let dni = parseInt(prompt("Ingrese el Dni del Cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    //let nombre = prompt("Ingrese el nombre del cliente");
    //let apellido = prompt("ingrese el apellido del cliente: ");
    if (cliente){
        let pedido = prompt("¿que desea modificar?") 
        let clientemodificado = new Clientes(cliente.nombre, cliente.apellido, cliente.dni, pedido);
        arrayClientes.splice(indice, 1, clientemodificado);
        alert (cliente.nombre + " su pedido a sido modificado")
    }
    if (indice === -1){
        alert ("no a sido encontrado")
    }
    
    console.log(arrayClientes);
}

// Funcion para consultar reparaciones

function consultaReparaciones() {
    let dni = parseInt(prompt("Ingrese el Dni del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    if (cliente){
        alert(cliente.nombre + " hola se encuentra activa la reparacion de " + cliente.pedido)
    } else{
        alert("no encontramos tu reparacion")
    }
}

// Funcion para salir del programa

function salir() {
    alert("Gracias por confiar en Trc soporte");
}

// Ejecutar el programa

    let opcion;
    
    do {
        opcion = menu()
    } while(opcion > 5) 
    
    switch (opcion) {
        case 1:
            ventas();
            break;
        case 2:
            bajaPorGarantias();
            break;
        case 3:
            modificarPedidoCliente();
            break;
        case 4:
            consultaReparaciones();
            break;
        case 5:
            salir()
            break;                
    }

