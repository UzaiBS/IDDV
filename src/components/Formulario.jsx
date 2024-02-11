import "./Formulario.css"
import { useState } from "react"
import { FaUser, FaLock } from "react-icons/fa";
import logo_IDDV from './imgs/logo_IDDV.png'

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

                <img className="logo" src= {logo_IDDV} />
                
                <h1>Ingrese</h1>  

                <div className="campo">
                    <input type="email" placeholder='Correo' required 
                        value={nombre}
                        onChange= {e => setNombre(e.target.value)}
                    />
                    <FaUser className= "icono" />
                </div>                
                <div className="campo">
                    <input type="password" placeholder='Contraseña' required 
                        value={contrasenia}
                        onChange={e=> setContrasenia(e.target.value)}
                    />
                    <FaLock className= "icono" />
                </div>
                <div className="recordar_contrasenia">
                    <a href="#">Olvidé mi contraseña</a>
                </div>

                <button>Iniciar sesión</button>

                <div className="enlace">
                    <p>¿Desea registrarse? <a href="#">Iniciar registro</a></p>
                </div>
                
            </form>
        </section>
    )
}