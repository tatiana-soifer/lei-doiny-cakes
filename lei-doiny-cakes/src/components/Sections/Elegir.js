import amor from '../../assets/icons/amor.png'
import cocina from '../../assets/icons/cocina.png'
import frescos from '../../assets/icons/frescos.png'
import calidad from '../../assets/icons/calidad.png'
import '../css/Main.css';

function Elegir (){
    return (
        <div className="elegir">
            <h2>¿Por qué elegirnos?</h2>
            <div className="gridElegir col-lg-6 ml-auto">
                <div className="amor">
                    <img src={amor} alt="amor" />
                    <p>Lo hacemos con amor</p>
                </div>
                <div className="frescos">
                    <img src={frescos} alt="productos frescos" />
                    <p>Productos frescos</p>
                </div>
                <div className="calidad">
                    <img src={calidad} alt="calidad" />
                    <p>Productos de calidad</p>
                </div>
                <div className="artesanal">
                    <img src={cocina} alt="cocina artesanal" />
                    <p>Productos artesanales</p>
                </div>
            </div>
        </div>
    )
};

export default Elegir;