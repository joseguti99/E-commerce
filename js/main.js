class Producto {
    constructor (titulo, precio, caracteristicas, categoria, imagen, cantidad, productoid, btnId) {
        this.titulo = titulo;
        this.precio = precio;
        this.caracteristicas = caracteristicas;
        this.categoria = categoria;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.productoid = productoid
        this.btnId = btnId
    }
}

//===PARLANTES====
const producto_1 = new Producto('Parlante Jbl-a', 2500, 'Potencia de salida: 30wts <br>Autonomia de la bateria: 5hs <br>Voltaje: 110/220v <br>A prueba de agua: si <br>Puertos: Usb / 3.5mm <br>', "parlante",'img/jbl-negro.jpg', 1, "a",0);
const producto_2 = new Producto('Parlante Jbl-b', 900, 'Potencia de salida: 25wts<br>Autonomia de la bateria: 7hs<br>Voltaje: 110/220v<br>A prueba de agua: si<br>Puertos: Usb / 3.5mm<br>', "parlante",'img/jbl-gris.jpg', 1, "b", 1);
const producto_3 = new Producto('Parlante Samsung', 2000, 'Potencia de salida: 40wts<br>Autonomia de la bateria: 12hs<br>Voltaje: 110/220v<br>A prueba de agua: si<br>Puertos: Usb / 3.5mm<br>', "parlante",'img/samsung-rojo.jpg', 1, "c",2);
const producto_4 = new Producto('Parlante Xiaomi', 850, 'Potencia de salida: 40wts<br>Autonomia de la bateria: 10hs<br>Voltaje: 110/220v<br>A prueba de agua: si<br>Puertos: Usb / 3.5mm<br>' , "parlante",'img/xiaomi-azul.jpg', 1, "d",3);
//===AURICULARES===
const producto_5 = new Producto('Apple Airpods', 850, 'Inalambrico: si<br>Bluetooth: si<br>Autonomia de bateria: 5hs<br>Alcance Inalambrico: 10m<br>', 'auricular','img/airpods-png.jpg', 1, "e", 4);
const producto_6 = new Producto('Samsung AKG', 500, 'microfono: si<br>largo del cable: 1.2m<br>conector: 3.5mm<br>impedancia: 32 Ω<br>', 'auricular','img/auris-akg.png', 1, "f",5);
const producto_7 = new Producto('Samsung Clasic', 250, 'microfono: si<br>largo del cable: 1.2m<br>conector: 3.5mm<br>impedancia: 32 Ω<br>', 'auricular','img/auris-clasic-sam.png',1, "g", 6);
const producto_8 = new Producto('Xiaomi Airpod', 750, 'Inalambrico: si<br>Bluetooth: si<br>Autonomia de bateria: 3hs<br>Alcance Inalambrico: 10m<br>', 'auricular','img/auris-xiaomi.png',1, "h", 7);
//===GAMING====
const producto_9 = new Producto('Hyperx A-100', 1000,'Microfono: Si<br>conector: 3.5mm<br>Frecuencia de Respuesta: 20 – 20k Hz<br>Retroiluminado: No<br>', 'gaming','img/hyperx.png', 1, "i", 8);
const producto_10 = new Producto('Logitech P20', 1100, 'Microfono: Si<br>conector: 3.5mm<br>Frecuencia de Respuesta: 20 – 20k Hz<br>Retroiluminado: No<br>', 'gaming','img/logitech.png', 1, "j", 9);
const producto_11 = new Producto('Noga zpx', 950, 'Microfono: Si<br>conector: 3.5mm<br>Frecuencia de Respuesta: 20 – 20k Hz<br>Retroiluminado: Si<br>' ,'gaming', 'img/noga-rojo.png', 1, "k", 10);
const producto_12 = new Producto('kotion tzx', 750, 'Microfono: Si<br>conector: 3.5mm<br>Frecuencia de Respuesta: 20 – 20k Hz<br>Retroiluminado: Si<br>', 'gaming','img/kotion.png', 1, "l", 11);

//=========================================BASE DE DATOS===========================================
const almacenDeproductos = [producto_1, producto_2, producto_3, producto_4, producto_5, producto_6, producto_7, producto_8, producto_9, producto_10, producto_11, producto_12]


const carrito = [];

// AGUMULADOR DE CARDS
function renderizar(lista) {
    let acumulador = ``;
    lista.forEach((producto) => {
        acumulador += `<div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 mb-4">
        <div class="card h-100 w-100 pointer" type="button" data-bs-toggle="modal"
        data-bs-target="#${producto.productoid}">
            <div class="text-center border"><img class="imagen-card" src="${producto.imagen}" /></div>
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder fontTitle">${producto.titulo}</h5>
                    <!-- Product price-->
                    <p class="fontPrice">$${producto.precio}</p>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="${producto.productoid}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm modal-lg">
    <div class="modal-content">
        <div class="modal-body">
            <div class="conntainer-fluid">
                <div class="row justify-content-end">
                <button type="button" class="btn-close mb-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-12 col-lg-7 text-center">
                        <img src="${producto.imagen}" class="imagen-modal">
                    </div>
                    <div class="col-12 col-sm-12 col-lg-5">
                        <h4 class="col-12 mb-2 fw-bolder fontTitle">${producto.titulo}</h4>
                        <h5 class="col-4 text-center fontPrice mb-4 mt-3"> $${producto.precio}</h5>
                        <p class="col-12 mb-3 fw-bolder">Especificaciones</p>
                        <p class="col-12 mb-3">${producto.caracteristicas}</p>
                        <div class="col-12 col-sm-12 text"><button class="btn btn-primary btn-lg" data-bs-dismiss="modal" onclick="agregarAlCarrito('${producto.titulo}'), contadorCarrito()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg> Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="text-center"><img src="./img/enviosgratis.png" class="col-4 col-sm-5 col-md-5 col-lg-2 col-xl-2 col-xxl-2"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    `
    });
    $("#listas").html(acumulador);
}

//MOSTRAR TODOS LOS PRODUCTOS
renderizar(almacenDeproductos)

// FUNCION DE AGREGAR AL CARRITO Y CONTAR CANTIDAD DE PRODUCTOS
function agregarAlCarrito( titulo) {
const productoAgregado = almacenDeproductos.find(producto => producto.titulo === titulo);
    if(productoAgregado != undefined){
        cantidadCarrito = carrito.findIndex(producto => producto.titulo === titulo);
        if(cantidadCarrito == -1){
            carrito.push(productoAgregado);
        }else{
            carrito[cantidadCarrito].cantidad += 1;
        }
    }else{console.log('Producto no encontrado');
    }
//Guardar elementos del carrito
localStorage.setItem('carrito', JSON.stringify(carrito));
}

//CONTADOR PRODUCTOS
let contador = 0
function contadorCarrito(){
$("#contador-productos").html(++contador)
}

//FILTRO DE PRODUCTOS
function filtroProducto (filtro){
    const productoFiltro = almacenDeproductos.filter(producto => producto.categoria == filtro)
    renderizar(productoFiltro)
}

//FILTRO DE MENOR A MAYOR PRECIO
function menorAMayor (){
    const productosMenorAMayor = almacenDeproductos.sort((a, b) => {
        if(a.precio < b.precio) {
            return -1;
        }
        if(a.precio > b.precio) {
            return 1;
        }
    })
    renderizar(productosMenorAMayor)
}

//FILTRO DE MAYOR A MENOR PRECIO
function mayorAMenor (){
    const productosMayorAMenor = almacenDeproductos.sort((a, b) => {
        if(a.precio > b.precio) {
            return -1;
        }
        if(a.precio < b.precio) {
            return 1;
        }
    })
    renderizar(productosMayorAMenor)
}

//FILTRO DE PRODUCTOS EXCLUCIVOS
$(`#exclusivos`).on("click", () => {
    const productoExclusivo = almacenDeproductos.filter(producto => producto.precio >= 2000)    
    // AGUMULADOR DE CARDS
    renderizar(productoExclusivo)
})
