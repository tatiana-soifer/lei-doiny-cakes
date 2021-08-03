import PorcionDobleOreo from '../../assets/img/porcion_doble_oreo.png';
import '../css/Main.css';

function Contacto (){
    return(
        <>
            <form id="formulario">
                <h2>Tenes algúna duda?</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <img src={PorcionDobleOreo} alt="porcion doble oreo" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label for="formGroupExampleInput">Nombre</label>
                                    <input className="form-control" type="text" name="Nombre" placeholder="Introducir el nombre" required />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label for="formGroupExampleInput2">E-Mail</label>
                                    <input id="formGroupExampleInput2" className="form-control" type="text" name="Mail" placeholder="ejemplo@gmail.com" required />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label for="formGroupExampleInput2">Celular</label>
                                    <input id="formGroupExampleInput2" className="form-control" type="number" name="Celular" placeholder="Introducir el celular" required />
                                </div>
                            </div>  
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label for="formGroupExampleInput2">Mensaje</label>
                                    <input id="exampleFormControlTextarea1" className="form-control" name="Mensaje" rows="3" placeholder="Dejanos tu mensaje" />
                                </div>
                            </div>  
                            <div className="form-group">
                                <input className="btn btn-secondary text-uppercase" type="submit" value="Enviar" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Contacto;