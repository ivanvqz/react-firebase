import { db } from "../firebase/credenciales"
import { collection, getDocs } from "firebase/firestore"

const GetAllpendients = async () => {
    try {
        //se crea una referencia a la coleccion
        const collectionRef = collection(db, "pendiente")
        const docs = await getDocs(collectionRef)
        console.log(`Documentos de firestore: ${docs}`)
    } catch (error) {
        console.log(error)
    }
}

export default GetAllpendients