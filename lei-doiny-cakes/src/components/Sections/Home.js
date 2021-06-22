import '../css/Main.css';
import ItemListContainer from '../Item/ItemList/ItemListContainer';

function Home (){
    return(
        <div className="presentacion">
            <h1>Disfrutá increibles tortas artesanales</h1>
            <p className="p_presentacion">Nos encanta formar parte de tu festejo.¡Dejate tentar por las más ricas tentaciones!</p>
            <button className="b_presentacion btn">Ver más</button>
            <ItemListContainer />
        </div>
    )
};

export default Home;