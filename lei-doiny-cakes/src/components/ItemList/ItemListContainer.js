import React from 'react';
import Counter from '../Counter/Counter';
import choco_oreo from '../../assets/img/choco_oreo.jpg';
import informacion from '../../assets/icons/informacion.png';


const ItemListContainer = () => {
    const  onAdd =(amount) =>{
        console.log(amount)
    }
    return (
        <div>
            <h1>Bienvenidos a Lei Doiny Cakes</h1>
            <Counter initial={1} stock={10} onAdd={onAdd}/>
            <div className="container">
                //CUADRICULA TORTAS
                <div className="cuadricula_productos">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 producto_item" category="tortas">
                        <div className="card shadow mb-1 rounded">
                            <div className="card_show">
                                <img src={choco_oreo} className="card-img-top" alt="torta choco-oreo" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Choco-oreo</h3>
                                <button id="descripcion" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Descripción: Es la mezcla perfecta entre la Chocotorta y la Doble Oreo. Una bomba explosiva que hay que probar. Tamaño: Molde 26cm">
                                    <img src={informacion} alt="informacion" />
                                </button>
                                <h4 className="precio">$ 1850</h4>
                                <button className="btn btn-secondary boton" data-toggle="modal" id="boton_modal">Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
