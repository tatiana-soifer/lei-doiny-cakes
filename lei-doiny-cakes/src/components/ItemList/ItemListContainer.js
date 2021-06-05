import React from 'react';
import Counter from '../Counter/Counter';
import choco_oreo from '../../assets/img/choco_oreo.jpg';
import doble_oreo from '../../assets/img/doble_oreo.jpg'
import './../css/Main.css';


const ItemListContainer = () => {
    const onAdd =(amount) =>{
        console.log(amount)
    }
    return (
        <div>
            <h1>Bienvenidos a Lei Doiny Cakes</h1>
            <div className="container">
                <div className="cuadricula_productos row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card shadow mb-1 rounded">
                            <div>
                                <img src={choco_oreo} className="card-img-top" alt="torta choco-oreo" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Choco-oreo</h3>
                                <h4>$ 1850</h4>
                                <Counter initial={1} stock={10} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card shadow mb-1 rounded">
                            <div>
                                <img src={doble_oreo} className="card-img-top" alt="torta doble-oreo" />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Doble-oreo</h3>
                                <h4>$ 1850</h4>
                                <Counter initial={1} stock={10} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
