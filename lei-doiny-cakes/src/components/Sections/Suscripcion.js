import React, {useState} from 'react';
import {getFirestore} from '../../Factory/Firebase.js';
import Send from '../../assets/icons/send.png';
import * as firebase from 'firebase/app';
import '../css/Main.css';

const Suscripcion = () => {
    const [loading, setLoading] = useState(false);
    const guardarSuscripcion = () => {
        setLoading(true);
        const db = getFirestore();
        const suscriptores = db.collection('suscriptores');
        const nuevaSuscripcion = {
            suscriptores: {
                id: '1',
                mail: 'leidoinycakes@gmail.com'
            },
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            items: [
                {
                id: 'gO5wp6H1V4JtUzB2XFhC',
                mail: 'tatusoifer@gmail.com'
                }
            ]
        };
        suscriptores
        .add(nuevaSuscripcion)
        .then(({mail}) => {
            setLoading(false);
            console.log(`Mail guardado: ${mail}`);
        })
        .catch(error => {
            setLoading(false);
            console.log(error);
        });
    };
    return (
        <div>
            {!loading && (
                <button onClick={() => guardarSuscripcion()}>
                    <img src={Send} alt='suscripcion' />
                </button>
            )}
        </div>
    );
};

export default Suscripcion;
