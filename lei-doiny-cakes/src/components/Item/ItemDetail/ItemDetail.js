import '../../css/Main.css';

function ItemDetail({item}){
    return(
        <>
        {
        <div className="container">
            <div className="row">
                <img src={item.Foto} alt={item.Torta} />
                <p>{item.Torta}</p>
                <p>{item.Descripcion}</p>
                <p>${item.Precio}</p>
            </div>
        </div>
        }
    </>  
    )
}

export default ItemDetail;