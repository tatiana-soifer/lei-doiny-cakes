import carrito from '../../assets/icons/carrito.png';

function boton_carrito (){
    return(
        <button id="carrito_menu" type="button" className="btn" data-toggle="modal" data-target="#exampleModal">
            <img src={carrito} alt="carrito de compras" />
        </button>
    );
};

export default boton_carrito;