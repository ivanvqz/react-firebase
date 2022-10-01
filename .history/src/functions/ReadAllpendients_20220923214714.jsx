import { db } from "../firebase/credenciales"
import { collection, getDocs } from "firebase/firestore"

const GetAllpendients = async () => {
    const pendients  = await getDocs(db.collection('pendientes'))
    
}

export default ReadAllpendients