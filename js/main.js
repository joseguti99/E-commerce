class Producto {
    constructor (titulo, precio, caracteristicas, color, categoria, imagen, cantidad, productoid, btnId) {
        this.titulo = titulo;
        this.precio = precio;
        this.caracteristicas = caracteristicas;
        this.color = color;
        this.categoria = categoria;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.productoid = productoid
        this.btnId = btnId
    }
}
//===PARLANTES====
const producto_1 = new Producto('Parlante Jbl-a',   2500, 'Es un altavoz con bluetooth completísimo resistente al agua para llevar contigo a todas partes. Reproduce música de forma inalámbrica, también ofrece una experiencia de llamada telefónica de gran nitidez con cancelación de ruido integrado.' ,'Negro',  "parlante",   '/img/jbl-negro.jpg', 1, "a","aa");
const producto_2 = new Producto('Parlante Jbl-b',   900,  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'Gris',  "parlante", '/img/jbl-gris.jpg', 1, "b", "bb");
const producto_3 = new Producto('Parlante Samsung', 2000, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'Rojo',    "parlante", '/img/samsung-rojo.jpg', 1, "c","cc");
const producto_4 = new Producto('Parlante Xiaomi',  850,  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'azul',    "parlante", '/img/xiaomi-azul.jpg', 1, "d","dd");
//===AURICULARES===
const producto_5 = new Producto('Apple Airpods',    850,  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'Blanco',  'auricular', '/img/airpods-png.jpg', 1, "e", "ee");
const producto_6 = new Producto('Samsung AKG',      500,  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'Negro',   'auricular', '/img/auris-akg.png', 1, "f","ff");
const producto_7 = new Producto('Samsung Clasic',   250,  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'Blanco',  'auricular', '/img/auris-clasic-sam.png',1, "g", "gg");
const producto_8 = new Producto('Xiaomi Airpod',    750,  '' ,'Negro',   'auricular', '/img/auris-xiaomi.png',1, "h");
//===GAMING===
const producto_9 = new Producto('Hyperx A-100',     1000, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'Negro',   'gaming',    '/img/Hyperx.png', 1, "i", "ii");
const producto_10 = new Producto('Logitech P20',    1100, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'Negro',   'gaming',    '/img/logitech.png', 1, "j", "jj");
const producto_11 = new Producto('Noga zpx',        950,  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'Rojo',    'gaming',    '/img/noga-rojo.png', 1, "k", "kk");
const producto_12 = new Producto('kotion tzx',      750,  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reprehenderit vel magni nesciunt, sequi debitis fugit beatae eius! Dolorum quaerat veritatis quo qui inventore, hic dolorem facilis illo vitae autem?' ,'Azul',    'gaming',    '/img/kotion.png', 1, "l", "ll");

//=========================================BASE DE DATOS=============================================
const almacenDeproductos = [producto_1, producto_2, producto_3, producto_4, producto_5, producto_6, producto_7, producto_8, producto_9, producto_10, producto_11, producto_12]

const carrito = [];

// AGUMULADOR DE CARDS
let acumulador = ``;
almacenDeproductos.forEach((producto) => {
    acumulador += 
    `<div class="col-3 mb-5">
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
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="conntainer-fluid">
                    <div class="row justify-content-end mb-3">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="row">
                        <div class="col-7 text-center border-end">
                            <img src="${producto.imagen}" class="imagen-modal">
                        </div>
                        <div class="col-5">
                            <h4 class="col-12 mb-2 border-bottom fontTitle">${producto.titulo}</h4>
                            <h5 class="col-4 fontPrice mb-4 mt-3"> $${producto.precio}</h5>
                            <p class="col-12 mb-3 border-top fontTitle">Especificaciones</p>
                            <p class="col-12  border-bottom mb-3">${producto.caracteristicas}</p>
                            <div class="col-12 text-center"><a class="btn btn-primary btn-lg mt-auto mb-1" data-bs-dismiss="modal" onclick="agregarAlCarrito('${producto.titulo}'), contadorCarrito()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg> Agregar al Carrito</a>
                            </div>
                            <div class="row border-top text-center my-3"><img src="/img/enviosgratis.png" class="col-10 mx-4"></div>
                        </div>
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

// FUNCION DE AGREGAR AL CARRITO
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
//guardar los elementos en el carrito
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
    
    // AGUMULADOR DE CARDS
    let acumulador = ``;
    productoFiltro.forEach((producto) => {
    acumulador += 
    `<div class="col-3 mb-5">
    <div class="card h-100 w-100 pointer" type="button" data-bs-toggle="modal"
    data-bs-target="#${producto.productoid}">
        <div class="text-center border"><img class="imagen-card" src="${producto.imagen}" /></div>
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.titulo}</h5>
                <!-- Product price-->
                $${producto.precio}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="${producto.productoid}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="conntainer-fluid">
                    <div class="row justify-content-end mb-3">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="row">
                        <div class="col-7 text-center border-end">
                            <img src="${producto.imagen}" class="imagen-modal">
                            <h5 class="col-12 mb-4"> $${producto.precio}</h5>
                        </div>
                        <div class="col-5">
                            <h4 class="col-12 text-center mb-2">${producto.titulo}</h4>
                            <p class="col-12 mb-2 border-bottom">${producto.caracteristicas}</p>
                            <p class="col-12 mb-5 border-bottom" >Color: ${producto.color}</p> 
                            <div class="col-12 text-center"><a class="btn btn-primary btn-lg mt-auto mb-5" data-bs-dismiss="modal" onclick="agregarAlCarrito('${producto.titulo}'), contadorCarrito()">Agregar al Carrito</a>
                            </div>
                            <img src="/img/6.jpg" class="imagen-mp">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
});
document.getElementById("listas").innerHTML = acumulador;
}

//FILTRO MOSTRAR TODO
function mostrarTodo (){
    $("#listas").html(acumulador);
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
    // AGUMULADOR DE CARDS
    let acumulador = ``;
    productosMenorAMayor.forEach((producto) => {
    acumulador += 
    `<div class="col-3 mb-5">
    <div class="card h-100 w-100 pointer" type="button" data-bs-toggle="modal"
    data-bs-target="#${producto.productoid}">
        <div class="text-center border"><img class="imagen-card" src="${producto.imagen}" /></div>
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.titulo}</h5>
                <!-- Product price-->
                $${producto.precio}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="${producto.productoid}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="conntainer-fluid">
                    <div class="row justify-content-end mb-3">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="row">
                        <div class="col-7 text-center border-end">
                            <img src="${producto.imagen}" class="imagen-modal">
                            <h5 class="col-12 mb-4"> $${producto.precio}</h5>
                        </div>
                        <div class="col-5">
                            <h4 class="col-12 text-center mb-2">${producto.titulo}</h4>
                            <p class="col-12 mb-2 border-bottom">${producto.caracteristicas}</p>
                            <p class="col-12 mb-5 border-bottom" >Color: ${producto.color}</p> 
                            <div class="col-12 text-center"><a class="btn btn-primary btn-lg mt-auto mb-5" data-bs-dismiss="modal" onclick="agregarAlCarrito('${producto.titulo}'), contadorCarrito()">Agregar al Carrito</a>
                            </div>
                            <img src="/img/6.jpg" class="imagen-mp">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
});
document.getElementById("listas").innerHTML = acumulador;
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
    // AGUMULADOR DE CARDS
    let acumulador = ``;
    productosMayorAMenor.forEach((producto) => {
    acumulador += 
    `<div class="col-3 mb-5">
    <div class="card h-100 w-100 pointer" type="button" data-bs-toggle="modal"
    data-bs-target="#${producto.productoid}">
        <div class="text-center border"><img class="imagen-card" src="${producto.imagen}" /></div>
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.titulo}</h5>
                <!-- Product price-->
                $${producto.precio}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="${producto.productoid}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="conntainer-fluid">
                    <div class="row justify-content-end mb-3">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="row">
                        <div class="col-7 text-center border-end">
                            <img src="${producto.imagen}" class="imagen-modal">
                            <h5 class="col-12 mb-4"> $${producto.precio}</h5>
                        </div>
                        <div class="col-5">
                            <h4 class="col-12 text-center mb-2">${producto.titulo}</h4>
                            <p class="col-12 mb-2 border-bottom">${producto.caracteristicas}</p>
                            <p class="col-12 mb-5 border-bottom" >Color: ${producto.color}</p> 
                            <div class="col-12 text-center"><a class="btn btn-primary btn-lg mt-auto mb-5" data-bs-dismiss="modal" onclick="agregarAlCarrito('${producto.titulo}'), contadorCarrito()">Agregar al Carrito</a>
                            </div>
                            <img src="/img/6.jpg" class="imagen-mp">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
});
document.getElementById("listas").innerHTML = acumulador; 
}

//FILTRO DE PRODUCTOS EXCLUCIVOS
$(`#exclusivos`).on("click", () => {
    const productoExclusivo = almacenDeproductos.filter(producto => producto.precio >= 2000)    
    // AGUMULADOR DE CARDS
    let acumulador = ``;
    productoExclusivo.forEach((producto) => {
    acumulador += 
    `<div class="col-3 mb-5">
    <div class="card h-100 w-100 pointer" type="button" data-bs-toggle="modal"
    data-bs-target="#${producto.productoid}">
        <div class="text-center border"><img class="imagen-card" src="${producto.imagen}" /></div>
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.titulo}</h5>
                <!-- Product price-->
                $${producto.precio}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="${producto.productoid}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="conntainer-fluid">
                    <div class="row justify-content-end mb-3">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="row">
                        <div class="col-7 text-center border-end">
                            <img src="${producto.imagen}" class="imagen-modal">
                            <h5 class="col-12 mb-4"> $${producto.precio}</h5>
                        </div>
                        <div class="col-5">
                            <h4 class="col-12 text-center mb-2">${producto.titulo}</h4>
                            <p class="col-12 mb-2 border-bottom">${producto.caracteristicas}</p>
                            <p class="col-12 mb-5 border-bottom" >Color: ${producto.color}</p> 
                            <div class="col-12 text-center"><a class="btn btn-primary btn-lg mt-auto mb-5" data-bs-dismiss="modal" onclick="agregarAlCarrito('${producto.titulo}'), contadorCarrito()">Agregar al Carrito</a>
                            </div>
                            <img src="/img/6.jpg" class="imagen-mp">
                        </div>
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
})



