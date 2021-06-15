import '../css/Main.css';
import PorcionDobleOreo from '../../assets/img/porcion_doble_oreo.png';


function Contacto (){
    return(
        <div>
            <form id="formulario">
                    <h2>Tenes algúna duda?</h2>
                    <div classNameNameName="container">
                        <div classNameName="row">
                            <div classNameName="col-lg-6 col-md-12">
                                <img src={PorcionDobleOreo} alt="porcion doble oreo" />
                            </div>
                            <div classNameName="col-lg-6 col-md-12">
                                <div classNameName="col-lg-12">
                                    <div classNameName="form-group">
                                        <label for="formGroupExampleInput">Nombre</label>
                                        <input classNameName="form-control" type="text" name="Nombre" placeholder="Introducir el nombre" required />
                                    </div>
                                </div>
                                <div classNameName="col-lg-12">
                                    <div classNameName="form-group">
                                        <label for="formGroupExampleInput2">E-Mail</label>
                                        <input id="formGroupExampleInput2" classNameName="form-control" type="text" name="Mail" placeholder="ejemplo@gmail.com" required />
                                    </div>
                                </div>
                                <div classNameNameName="col-lg-12">
                                    <div classNameNameName="form-group">
                                        <label for="formGroupExampleInput2">Celular</label>
                                        <input id="formGroupExampleInput2" classNameNameName="form-control" type="number" name="Celular" placeholder="Introducir el celular" required />
                                    </div>
                                </div>  
                                <div classNameName="col-lg-12">
                                    <div classNameName="form-group">
                                        <label for="formGroupExampleInput2">Mensaje</label>
                                        <input id="exampleFormControlTextarea1" classNameName="form-control" name="Mensaje" rows="3" placeholder="Dejanos tu mensaje" />
                                    </div>
                                </div>  
                                <div classNameName="form-group">
                                    <input classNameName="btn btn-secondary text-uppercase" type="submit" value="Enviar" />
                                </div>
                            </div>
                        </div>
                    </div>
            </form>
        </div>
    )
};

export default Contacto;