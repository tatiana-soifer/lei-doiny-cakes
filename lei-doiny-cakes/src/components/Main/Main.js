import ItemListContainer from '../Item/ItemList/ItemListContainer';
import NavBar from '../NavBar/NavBar';
import '../css/Main.css';


function Main () {
  return (
    <div className="Main">
      <NavBar />
      <ItemListContainer />
    </div>
  );
};

export default Main;
