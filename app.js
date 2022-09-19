class Producto {
    constructor(id, nombre, precio, stock, img=""){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    };
};


let productos = [
    new Producto (1, "Remera Nirvana", 700, 20, "assets/img/nirvana.png"),
    new Producto (2, "Remera Metallica", 700, 20, "assets/img"),
    new Producto (3, "Remera AC/DC", 700, 20),
    new Producto (4, "Remera Guns N' Roses", 700, 20, ""),
    new Producto (5, "Remera Aerosmith", 700, 20, ""),
    new Producto (6, "Remera Bon Jovi", 700, 20, ""),
];

let section = document.querySelector("section");2
let template = document.querySelector("template");
let card = template.content.querySelector("div");



productos.forEach((producto)=>{

    

    let cardClon = card.cloneNode(true);
    section.appendChild(cardClon);

    cardClon.querySelector('h3').textContent = producto.nombre
    cardClon.querySelector('h5').textContent = producto.id
    cardClon.querySelector('img').setAttribute("scr", producto.img)
    cardClon.querySelector('h4').textContent = producto.precio

})




let carrito = [];

let compra = prompt("Si desea comprar ingrese 1, si quiere finalizar la compra ingrese 2: ");
while (compra != 1 && compra != 2){
    alert("Por favor ingrese alguna de las opciones válidas");
    compra = prompt("Si desea comprar ingrese 1, si quiere finalizar la compra ingrese 2: ");
};

if (compra == 1){
    let listaP = productos.map((a)=> a.id + "  " + a.nombre +":" + " " + "$"+ a.precio);
    alert(`Lista de productos:\n\n${listaP.join("\n")}`);
}else if (compra == 2){
    alert("Gracias por visitar nuestra página. Hasta pronto! ");
};

while (compra != 2){
    let productoId = Number(prompt("Ingrese el número del producto que desea comprar"));
    if (productoId === 1 || productoId === 2 || productoId === 3 || productoId === 4 || productoId === 5 || productoId === 6){
        switch (productoId){
            case 1:
                nombreId ="Remera Nirvana ";
                precio = 700;
                break;
            case 2:
                nombreId ="Remera Metallica ";
                precio = 700;
                break;
            case 3:
                nombreId ="Remera AC/DC";
                precio = 700;
                break;
            case 4:
                nombreId ="Remera Guns N' Roses";
                precio = 700;
                break;
            case 5:
                nombreId ="Remera Aerosmith";
                precio = 700;
                break;
            case 6:
                nombreId ="Remera Bon Jovi";
                precio = 700;
                break;
            default:
                break;
        };
    let cantidad = Number(prompt("Ingrese la cantidad que desea comprar: "));
    carrito.push({productoId, nombreId, cantidad, precio});
    console.log(carrito);
    } else{
        alert("No seleccionó un producto válido")
    }
    compra = prompt("Si desea seguir agregando productos seleccione enter. Para terminar la compra presione 2")

    while (compra == 2){
        alert("Gracias por su compra. Carrito a continuación: ");
        carrito.forEach((total)=>{
            alert(`Productos: ${total.nombreId}, unidades: ${total.cantidad}, total: ${total.cantidad * total.precio}`);
        });
    break;
    };
};

const total = carrito.reduce((acumulador, element) => acumulador + element.precio * element.cantidad, 0);
alert(`El total a pagar es: ${total}`);

