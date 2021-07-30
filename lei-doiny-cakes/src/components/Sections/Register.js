import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {getFireStore} from '../../Factory/Firebase.js';
import '../css/Main.css';

export default function Register(){
    const [user, setUser] = useState([]);
    const {register, handleSubmit, formState: {e}} = useForm();
    const onSubmit = (data, e) => {
        JSON.stringify(data);
        e.target.reset();
     //CREA LA ORDEN PARA FIREBASE
    const db = getFireStore();
    const users = db.collection("users");
    const newUser = { 
        user: data
    } 
    //ENVIAR LA ORDEN A FIREBASE
    users.add(newUser).then(({id})=>{
        setUser(id); 
        }).finally(()=>{
    })
    };
    return(
        <>
            {user.length === 0 ?
                <div className="container-register">
                    <h2>Suscribite a nuestro Newsletter y accedé a todas nuestras promociones!</h2>
                    <div className="App">
                        <form className="container-formulario" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-item" >
                                <label>Nombre</label>
                                <input type="name" {...register('nombre', {required: 'Debes ingresar tu nombre', maxLength: 20, minLength: 2})} />
                            {e.nombre && (<p>{e.nombre.message}</p>)}
                            </div>
                            <div className="form-item">
                                <label htmlFor="lastName">Apellido</label>
                                <input type="name" {...register('apellido',{required: 'Debes ingresar tu apellido', maxLength: 20, minLength: 2})} />
                                {e.apellido && (<p>{e.apellido.message}</p>)}
                            </div>
                            <div className="form-item">
                                <label htmlFor="email">Email</label>
                                <input type="email" {...register('email', {required: 'Debes ingresar tu email'})} />
                            {e.email && (<p>{e.email.message}</p>)}
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            :
            <>
                <h1>Muchas gracias por registrarte!</h1>
                <p>Te enviaremos por mail todas las promociones</p>
            </>
            }
        </>
    );
};