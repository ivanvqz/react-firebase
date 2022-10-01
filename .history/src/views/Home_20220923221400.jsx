import { useEffect } from "react"
import Navbar from "../Components/Navbar"
import PendienteForm from "../Components/PendienteForm"
import GetAllpendients from "../functions/ReadAllpendients"

export const Home = ( {user} ) => {
    // el useefecct se va a ejecutar una vez que se ejecute el componente
    //solo debe de ejecutarse una vez
    useEffect(() => {
        GetAllpendients()
    }, [false])
    return (
        <>
            <div className="min-w-screen min-h-screen flex flex-col">
                <Navbar usuario={ user }/>
                <PendienteForm />
            </div>
        </>
    )
}