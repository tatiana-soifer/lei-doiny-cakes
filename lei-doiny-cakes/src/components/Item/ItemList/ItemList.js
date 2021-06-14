import React, {useState, useEffect} from 'react';
import '../../css/Main.css';
import productList from '../Item';

function ItemList () {
  const [tortas, setTortas] = useState([
    <productList />
  ]);
  return <ul>
    {tortas.map(u => <li key={u.id}>{u.Torta} </li>)}
    </ul>
};

export default ItemList;