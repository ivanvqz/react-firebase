import { db } from "../firebase/credenciales"
import { collection, getDocs } from "firebase/firestore"

const GetAllpendients = async () => {
    //se crea una referencia a la coleccion
    const collectionRef = collection(db, "pendiente")
    const docs = await getDocs(collectionRef)
    log
}

export default GetAllpendients