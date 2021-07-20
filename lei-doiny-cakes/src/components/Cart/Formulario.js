import React from "react";
import '../css/Main.css';

export const PurchaseForm = ({finalizarCompra, formData, setFormData}) => {
    return (
        <form>
            <div className="form-group">
                <label for="formGroupExampleInput">Nombre y Apellido</label>
                <input className="form-control" type="text" placeholder="Introducir el nombre" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Telefono</label>
                <input className="form-control" type="phone" placeholder="Ingrese Telefono" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Email</label>
                <input id="formGroupExampleInput2" className="form-control" type="text" name="Mail" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            </div>
            <div className="form-group">
                <button  className="btn btn-secondary text-uppercase" type="submit" onClick={() => finalizarCompra()}> Finalizar compra</button>
            </div>
        </form>
    );
};
