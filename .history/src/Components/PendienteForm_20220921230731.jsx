const PendienteForm = () => {
    return (
        <div>
            <form>
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

                <button className="bg-cyan-400 hober">
                    Agregar
                </button>
                
            </form>
        </div>
    )
}

export default PendienteForm