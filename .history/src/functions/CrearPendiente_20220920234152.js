import { db } from '../firebase/credenciales';
import {
    collection,
    addDoc
} from 'firebase/firestore'

//function to create a new task
const CrearPendiente = async (pendiente) => {
    try {
        // const docRef = await addDoc(collection(db, "pendientes"), pendiente);
        // console.log("Document written with ID: ", docRef.id);
        const collectionRef = collection(db, "pendiente");
        const pendienteId = await addDoc(collectionRef, );
    } catch (error) {
        console.error("Error adding document: ", error);
        <div className="alert alert-danger" role="alert">
            <p>Hubo un error{error}</p>
        </div>
    }
}