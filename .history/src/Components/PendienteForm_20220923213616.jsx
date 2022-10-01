import { CrearPendiente } from "../functions/CrearPendiente";

const PendienteForm = () => {
    //function submithander
    const submitHandler = async (e) => {
        e.preventDefault();
        const priority = e.target.priority.value
        const description = e.target.description.value
        const contact = e.target.contact.value
        
        console.log("Hola ", priority, description, contact)
        
        const data = { priority, description, contact }
        await CrearPendiente(data)
        e.target.priority.value = ""
        e.target.description.value = ""
        e.target.contact.value = ""
    }

    return (
        <div>
            <form 
                onSubmit={ submitHandler }
                className="flex flex-row justify-around my-5 min-w-full"
            >
                <label className="flex flex-col mx-10">
                    Prioridad
                    <select
                        id="priority"
                        
                    >
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                    </select>
                </label>

                <label className="flex flex-col">
                    Descripción
                    <input 
                        type="text" 
                        id="description" 
                        placeholder="Añade tu descripción"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:online-none focus:bg-white focus:border-purple-500"
                    />
                </label>

                <label className="flex flex-col">
                    Contacto
                    <input 
                        type="email"
                        id="contact"
                        placeholder="Ej. user@gmail.com"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:online-none focus:bg-white focus:border-purple-500"
                    />
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