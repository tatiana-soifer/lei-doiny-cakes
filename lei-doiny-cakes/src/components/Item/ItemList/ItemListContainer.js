import React from 'react';
import Counter from '../../Counter/Counter';
import choco_oreo from '../../../assets/img/choco_oreo.jpg';
import doble_oreo from '../../../assets/img/doble_oreo.jpg';
import praline from '../../../assets/img/praline.jpg';
import franui from '../../../assets/img/franui.jpg';
import mousse from '../../../assets/img/mousse.jpg';
import marquisse from '../../../assets/img/marquisse.jpg';
import chessecakeFrutosRojos from '../../../assets/img/chessecake_frutos_rojos.jpg';
import crumbleManzana from '../../../assets/img/crumble_manzana.jpg';
import ItemList from '../../Item/ItemList/ItemList';
import './../../css/Main.css';

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
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card shadow mb-1 rounded">
                            <div>
                                <img src={praline} className="card-img-top" alt="torta praline de frutos secos" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Praline</h4>
                                <h5>$ 1750</h5>
                                <Counter initialState={1} stock={15} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 producto_item">
                        <div className="card shadow mb-1 rounded">
                            <div>
                                <img src={franui} className="card-img-top" alt="torta franui" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Franui</h4>
                                <h5>$ 1950</h5>
                                <Counter initialState={1} stock={3} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 producto_item">
                        <div className="card shadow mb-1 rounded">
                            <div className="card_show">
                                <img src={mousse} className="card-img-top" alt="torta mousse de chocolate" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Mousse</h4>
                                <h5>$ 1800</h5>
                                <Counter initialState={1} stock={5} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 producto_item">
                        <div className="card shadow mb-1 rounded">
                            <div className="card_show">
                                <img src={marquisse} className="card-img-top" alt="torta marquisse de chocolate" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Marquisse</h4>
                                <h5>$ 1350</h5>
                                <Counter initialState={1} stock={5} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 producto_item">
                        <div className="card shadow mb-1 rounded">
                            <div className="card_show">
                                <img src={chessecakeFrutosRojos} className="card-img-top" alt="torta cheesecake de frutos rojos" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Cheesecake</h4>
                                <h5>$ 1800</h5>
                                <Counter initialState={1} stock={5} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 producto_item">
                        <div className="card shadow mb-1 rounded">
                            <div className="card_show">
                                <img src={crumbleManzana} className="card-img-top" alt="torta crumble de manzana" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Crumble</h4>
                                <h5>$ 1800</h5>
                                <Counter initialState={1} stock={5} onAdd={onAdd} />
                            </div>
                        </div>
                    </div>
                    <ItemList />
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;

