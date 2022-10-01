import { useEffect } from "react"
import Navbar from "../Components/Navbar"
import PendienteForm from "../Components/PendienteForm"

export const Home = ( {user} ) => {
    // el useefecct se va a ejecutar una vez que se ejecute el componente
    useEffect(() => {}
    return (
        <>
            <div className="min-w-screen min-h-screen flex flex-col">
                <Navbar usuario={ user }/>
                <PendienteForm />
            </div>
        </>
    )
}