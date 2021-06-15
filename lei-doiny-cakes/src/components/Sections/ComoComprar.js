
import tarjetas from '../../assets/icons/tarjetas.png';
import moto from '../../assets/icons/moto.png';
import torta from '../../assets/icons/torta.png';
import '../css/Main.css';

function ComoComprar(){
    return(
        <div className="como_comprar">
            <h2>Cómo comprar</h2>
            <div className="grid_como_comprar">
                <div className="tortas">
                    <img src={torta} alt="torta" />
                    <h3>Elegí</h3>
                    <h4>Explorá nuestro menú y elegí tus tortas preferidas</h4>
                </div>
                <div className="tarjetas">
                    <img src={tarjetas} alt="metodo de pago" />
                    <h3>Pagá</h3>
                    <h4>Seleccioná el método de pago que más te convenga</h4>
                </div>
                <div className="envios">
                    <img src={moto} alt="envios" />
                    <h3>Disfrutá</h3>
                    <h4>Te mandamos tu pedido para que puedas disfrutar</h4>
                </div>
            </div>
        </div>
    );
};

export default ComoComprar;