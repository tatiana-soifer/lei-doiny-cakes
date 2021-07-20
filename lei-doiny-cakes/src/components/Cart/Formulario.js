import React from 'react';
import {Link} from
import '../css/Main.css';

const FormularioCompra = ({finalizarCompra, formularioData, setFormularioData}) => {
    return (
        <form>
            <div className="form-group">
                <label for="formGroupExampleInput">Nombre y Apellido</label>
                <input className="form-control" type="text" placeholder="Introducir el nombre" value={formularioData.name} onChange={(e) => setFormularioData({...formularioData, name: e.target.value})} required />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Telefono</label>
                <input className="form-control" type="phone" placeholder="Ingrese Telefono" value={formularioData.phone} onChange={(e) => setFormularioData({ ...formularioData, phone: e.target.value })} required />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input id="formGroupExampleInput2" className="form-control" type="text" name="Mail" value={formularioData.email} onChange={(e) => setFormularioData({ ...formularioData, email: e.target.value })} required />
            </div>
            <div className="row mx-4">
                <div className="col d-flex justify-content-end">
                    <Link id="botonCartFinal" className="btn btn-secondary" exact to={'/'}>Seguir comprando</Link>
                    <button className="btn btn-secondary" type="button" onClick={() => finalizarCompra()}> Finalizar compra</button>
                </div>
            </div>
        </form>
    );
};

export default FormularioCompra;
