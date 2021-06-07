import React from 'react';
import Counter from '../Counter/Counter';
import choco_oreo from '../../assets/img/choco_oreo.jpg';
import doble_oreo from '../../assets/img/doble_oreo.jpg';
import './../css/Main.css';


const ItemListContainer = () => {
    const onAdd =(amount) =>{
        console.log(amount)
    }
    return (
        <div>
            <div className="container">
                <div className="cuadricula_productos row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card shadow mb-1 rounded">
                            <div>
                                <img src={choco_oreo} className="card-img-top" alt="torta choco-oreo" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Choco-oreo</h4>
                                <h5>$ 1850</h5>
                                <Counter initialState={1} stock={10} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card shadow mb-1 rounded">
                            <div>
                                <img src={doble_oreo} className="card-img-top" alt="torta doble-oreo" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Doble-oreo</h4>
                                <h5>$ 1850</h5>
                                <Counter initialState={1} stock={5} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
