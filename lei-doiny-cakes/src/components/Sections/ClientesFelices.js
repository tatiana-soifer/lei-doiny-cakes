import '../css/Main.css';

function ClientesFelices (){
    return(
        <div className="clientesFelices">
            <h2>Clientes felices</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12">
                                            <div className="caja">
                                                <p>Las tortas estaban riquísimas!! A mis invitados les gustaron un montón!!</p>
                                                <h5>Sofi 18 años</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="caja">
                                                <p>Mi preferida es la cheesecake, la amo!! Es muy parecida a la torta típica de NYC 😍😍</p>
                                                <h5>Annie 35 años</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="caja">
                                                <p>La mejor atención y calidad!!! Se nota que todo esta hecho con mucho amor</p>
                                                <h5>Max 26 años</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">    
                                        <div className="col-md-4 col-sm-12">
                                            <div className="caja">
                                                <p>Me encantan!! Soy muy fan, siempre me salvan!!!</p>
                                                <h5>Eva 28 años</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="caja">
                                                <p>Siempre presente en todos mis cumpleaños!! Nunca falla!</p>
                                                <h5>Sol 46 años</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12">
                                            <div className="caja">
                                                <p>Me sorprendieron con un desayuno para mi cumpleaños y estaba increible!!</p>
                                                <h5>Shir 23 años</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientesFelices;