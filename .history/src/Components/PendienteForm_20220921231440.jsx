import { async } from "@firebase/util"

const PendienteForm = () => {
    //function submithander
    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            title: e.target[0].value,
            description: e.target[1].value,
            date: e.target[2].value,
            status: e.target[3].value
        }
        console.log(data);
        // await CrearPendiente(data);
    }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <label>
                    Prioridad
                    <select>
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baja">Baja</option>
                    </select>
                </label>

                <label>
                    Descripción
                    <input type="text" />
                </label>

                <label>
                    Contacto
                    <input type="email" />
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