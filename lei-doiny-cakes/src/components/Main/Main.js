import Counter from '../Counter/Counter';
import ItemListContainer from '../ItemList/ItemListContainer';
import NavBar from '../NavBar/NavBar';
import './Main.css';


function Main () {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default Main;
