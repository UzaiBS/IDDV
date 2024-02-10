import "./Formulario.css"
import { useState } from "react"

export function Formulario({setUser}){
    const   [nombre, setNombre] = useState("")
    const   [contrasenia, setContrasenia] = useState("")
    //const   [error, setError] = useState(false)
    
    const manejoEnvio = (e)=>{
        e.preventDefault()

        setUser([nombre])
    }
    
    return (
        <section>            
            <form className= "formulario" onSubmit= {manejoEnvio}>
                
                <h1>IDDV</h1>                
                <input type="email" placeholder='Correo' required 
                    value={nombre}
                    onChange= {e => setNombre(e.target.value)}
                />
                <input type="password" placeholder='Contraseña' required 
                    value={contrasenia}
                    onChange={e=> setContrasenia(e.target.value)}
                />

                <button>Iniciar sesión</button>
            </form>
        </section>
    )
}