//--------------------------------LLAMADA DEL CARRITO AL LOCAL STORAGE -----------------------------------
let carritoLS = JSON.parse(localStorage.getItem("carrito"));
if (carritoLS) {
    actualizarCarrito(carritoLS);
}

function actualizarCarrito(productos) {
    let tbody = [];
    let productosPrecio = 0;
    let cantidadProductos = [];

    productos.forEach((producto) => {
    tbody += `<tr class="row" id="${producto.productoid}">
                                    <td class="col-4"><p class="fontTitle my-3">${producto.titulo}<p></td>
                                    <td class="col-2"><p class="fontTitle my-3">${producto.cantidad}<p></td> 
                                    <td class="col-2"><p class="fontTitle my-3">$${producto.precio}<p></td>
                                    <th class="col-2"><img src="${producto.imagen}" class="col-4" alt=""></th>
                                    <td class="col-2"><button class="btn-danger my-3" id="${producto.btnId}">X</button></td>  
                                </tr>`;
    //sumar productos y multiplicar segun la cantidad
    productosPrecio += producto.precio * producto.cantidad;
    $("#precio-Final").html("$" + productosPrecio);
    console.log(producto.productoid)
    
    });
    $("#productos-del-carro").html(tbody)


    //===========================API MERCADO PAGO===========================
    //Convertir mis articulos al formato meli
    const ElementosMeli = carritoLS.map((producto) => {
        return {
            "title": producto.title,
            "description": "",
            "picture_url": producto.imagen,
            "category_id": "",
            "quantity": producto.cantidad,
            "currency_id": "ARS",
            "unit_price": producto.precio
        }
    })
    //  URL BASE: "https://api.mercadopago.com"
    //  ENDPOINT GET: /checkout/preferences/search
    //  ENDPOINT POST: /checkout/preferences
    const  urlApiPost = "https://api.mercadopago.com/checkout/preferences"
    const datosDeCompra = {"items": ElementosMeli}

            $.ajaxSetup({
                headers:{
                    'authorization':'Bearer TEST-3653527725525576-092111-c0269678723abd2b2de2ed09453d04b5-264921620',
                    'Content-Type': 'application/json'
                }
            });
            
            $.post(urlApiPost, JSON.stringify(datosDeCompra), (respuesta, status) => {
                const ordenDeCompra = respuesta.init_point
                $("#botonPagar").html(`<a class="btn btn-info border col-2" id="pagarProducto" href="${ordenDeCompra}" tarjet_blank>PAGAR</a>`)
            })
            
}