import '../css/Main.css';
import cocinera from '../../assets/img/cocinera.png';


function Nosotros (){
    return(
        <div className="nosotros">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <h2>¿Quiénes somos?</h2>
                        <p>Soy Leila Doiny, tengo 26 años, soy Licenciada en Administración de empresas y próximamente Licenciada en Gastronomía en IAG (y muy fan).</p>
                        <p> Empecé con este emprendimiento como hobbie, y desde hace ya 3 años que pasó a ser mi trabajo y una parte muy importante de mi vida. No solo cocino, sino también llevo amor en forma de comida rica a sus casas. Y si hay algo que me gusta, es que ustedes valoren estos aspectos de igual forma que yo.</p>
                        <p>Tengo la suerte de poder dedicarme a lo que me gusta, y que cada día crezca más, (incluso más de lo que me podía imaginar) y se lo debo a ustedes que están del otro lado. Cómo les digo siempre, gracias por dejarme ser parte de sus momentos y recuerdos, GRACIAS por dejarme entrar a sus casas y por ser siempre los mejores críticos del mundo.</p>
                        <p className="amor_firma">¡Los quiero!</p>
                        <h3>Lei Doiny</h3>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <img src={cocinera} className="cocinera" alt="cocinera" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Nosotros;