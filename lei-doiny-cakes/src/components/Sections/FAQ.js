//import React, { useState } from 'react';
import '../css/Main.css';

function FAQ (){
    return(
        <div className="preguntas_frecuentes">
            <h2>Preguntas frecuentes</h2>
            <div className="container">
                <div className="row">
                    <div className="card col-lg-5 col-md-12">
                        <div className="card-body">
                            <div>
                                <p>¿Cómo programar la fecha de entrega de mi pedido?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-5 col-md-12">
                        <div className="card-body">
                            <div>
                                <p>¿Cuánto tiempo duran los productos en la heladera?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-5 col-md-12">
                        <div className="card-body">
                            <div>
                                <p>¿Con cuánta anticipación tengo que hacer mi pedido?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-5 col-md-12">
                        <div className="card-body">
                            <div>
                                <p>¿Cuál es el costo del envío? ¿Hasta dónde llega?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-5 col-md-12">
                        <div className="card-body">
                            <div>
                                <p>¿Puedo realizar mi compra y retirar en el mismo día?</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-5 col-md-12">
                        <div className="card-body">
                            <div>
                                <p>¿Cuánto tiempo tarda en llegar mi pedido?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FAQ;


/*
const App = () => {
    const [condition, setCondition] = useState(true);
    return (
        <div>
            <h1>Renderizado condicional</h1>
        <div>
            {condition ? (
            <div className="container">
                Componente a mostrar si se cumple la condición.
            </div>
            ) : (
                <div className="container">
                    Componente a mostrar si NO se cumple la condición.
                </div>
            )}
            </div>
            <div>
            <button onClick={() => setCondition(!condition)}>
                Cambiar condición
            </button>
            </div>
        </div>
        );
    };

export default App;*/