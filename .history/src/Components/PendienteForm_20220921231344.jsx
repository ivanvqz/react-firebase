const PendienteForm = () => {
    //function submithander
    const submitHandler = as (e) => {}

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