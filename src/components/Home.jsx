export function Home({user, setUser}){

    const manejoSalida= ()=>{
        setUser([])
    }

    return(
        <div>
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
            <button onClick={manejoSalida}>Cerrar sesión</button>
        </div>
    )
}