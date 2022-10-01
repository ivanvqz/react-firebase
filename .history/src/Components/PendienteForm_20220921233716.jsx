import { async } from "@firebase/util"

const PendienteForm = () => {
    //function submithander
    const submitHandler = async (e) => {
        e.preventDefault();
        const priority = e.target.priority.value
        const description = e.target.description.value
        const contact = e.target.contact.value
        
        console.log("Hola ", priority, description, contact)
        
        const data = 
    }

    return (
        <div className="flex flex-row">
            <form onSubmit={ submitHandler }>
                <label className="flex flex-row">
                    Prioridad
                    <select
                        id="priority"
                    >
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                    </select>
                </label>

                <label className="flex flex-row">
                    Descripción
                    <input type="text" id="description" />
                </label>

                <label className="flex flex-row">
                    Contacto
                    <input type="email" id="contact"/>
                </label>

                <button className="bg-cyan-400 hover:bg-cyan-600
                text-white font-bold py-2 px-4 rounded focus:outline-none
                focus:shadow-outline">
                    Agregar
                </button>
                
            </form>
        </div>
    )
}

export default PendienteForm