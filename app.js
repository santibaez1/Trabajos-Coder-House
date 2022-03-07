const ClickButton = document.querySelectorAll(".button")
let carrito = []
ClickButton.forEach(btn =>{
    btn.addEventListener('clcik', addToCarritoItem)
})
function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.card')
    const itemTitle= item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-too').src;
    const newItem={
        title : itemTitle,
        precio : itemPrecio,
        img : itemImg,
        cantidad : 1

    }

    addItemCarrito(newItem)

}

function addItemCarrito(newItem){


    carrito.push(newItem)
    renderCarrito()
}

function renderCarrito(){
    console.log(carrito)
}
