import { async } from "@firebase/util"

const PendienteForm = () => {
    //function submithander
    const submitHandler = async (e) => {
        e.preventDefault();
        const priority = e.target.priority.value
        const description = e.target.description.value
        const data = e.
        
        console.log(data);
        // await CrearPendiente(data);
    }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <label>
                    Prioridad
                    <select
                        id="priority"
                    >
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                    </select>
                </label>

                <label>
                    Descripción
                    <input type="text" id="description" />
                </label>

                <label>
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